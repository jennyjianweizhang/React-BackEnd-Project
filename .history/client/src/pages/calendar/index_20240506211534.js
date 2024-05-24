import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Drawer,
  Button,
  Divider,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

import { updateEvent, deleteEvent } from "src/store/eventsData";

const AppCalendar = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventsData?.events || []);
  console.log(events);

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [guests, setGuests] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [description, setDescription] = useState("");
  const [eventUrl, setEventUrl] = useState("");

  const [initialEvent, setInitialEvent] = useState(null);
  const [initialGuests, setInitialGuests] = useState([]);
  const [initialStartDate, setInitialStartDate] = useState(null);
  const [initialEndDate, setInitialEndDate] = useState(null);
  const [initialTitle, setInitialTitle] = useState(null);
  const [initialCategory, setInitialCategory] = useState(null);
  const [initialDescription, setInitialDescription] = useState(null);
  const [initialEventUrl, setInitialEventUrl] = useState(null);
  const [initialAllDay, setInitialAllDay] = useState(null);

  const handleEventClick = (clickInfo) => {
    const { event } = clickInfo;
    console.log("Clicked event start:", event.startStr);
    console.log("Clicked event end:", event.endStr);
    // console.log("Entire event object on click:", event);

    const ensureDateTimeFormat = (dateStr) => {
      return dateStr.length > 16 ? dateStr.slice(0, 16) : dateStr;
    };

    setInitialEvent(event);
    setInitialTitle(event.title);
    setInitialDescription(description);
    setInitialEventUrl(eventUrl);
    setInitialAllDay(allDay || false);
    setInitialGuests(event.extendedProps.guests || []);
    setInitialCategory(event.extendedProps.category);
    setInitialStartDate(ensureDateTimeFormat(event.startStr));
    setInitialEndDate(ensureDateTimeFormat(event.endStr || event.startStr));
    setSelectedEvent({
      id: event.id,
      title: event.title,
      start: ensureDateTimeFormat(event.startStr),
      end: ensureDateTimeFormat(event.endStr || event.startStr),
      guests: event.extendedProps.guests || [],
      category: event.extendedProps.category,
      description: description,
      eventUrl: eventUrl,
      allDay: allDay || false,
    });

    setDrawerOpen(true);
  };

  const handleReset = () => {
    console.log("Resetting 'All Day' to:", initialAllDay);
    setSelectedEvent({
      ...initialEvent,
      start: initialStartDate,
      end: initialEndDate,
      guests: initialGuests,
      title: initialTitle,
      category: initialCategory,
      description: initialDescription,
      eventUrl: initialEventUrl,
      allDay: initialAllDay,
    });
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const [urlError, setUrlError] = useState("");
  const isValidUrl = (urlString) => {
    try {
      new URL(urlString);
      return true;
    } catch (e) {
      return false;
    }
  };

  const validateUrl = (url) => {
    if (!isValidUrl(url)) {
      setUrlError("Please enter a valid URL.");
      return false;
    }
    setUrlError("");
    return true;
  };

  const handleUpdateEvent = () => {
    if (selectedEvent) {
      const newClassName = `event-${category.toLowerCase()}`;
      dispatch(
        updateEvent({
          id: Number(selectedEvent.id),
          changes: {
            title: title,
            // category: category,
            start: start,
            end: end,
            // description: description,
            classNames: [newClassName],
            // guests: guests,
            extendedProps: {
              category: category,
              guests: guests,
            },
          },
        })
      );
      closeDrawer();
    }
  };

  const handleDeleteEvent = (eventId) => {
    console.log("Deleting event with ID:", eventId);
    dispatch(deleteEvent(eventId));
    setDrawerOpen(false);
  };

  const handleChange = (field, value) => {
    setSelectedEvent((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  //   console.log("New Start Date:", start);
  //   console.log("New End Date:", end);

  useEffect(() => {
    if (selectedEvent) {
      //   console.log(selectedEvent.guests);
      setTitle(selectedEvent.title);
      setCategory(selectedEvent.category);
      setGuests(selectedEvent.guests);
      setStart(selectedEvent.start);
      setEnd(selectedEvent.end);
      setDescription(selectedEvent.description || "");
      setEventUrl(selectedEvent.eventUrl || "");
      setAllDay(selectedEvent.allDay);
    }
  }, [selectedEvent]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const calendarRef = useRef(null);

  const handleDateChange = (date) => {
    setCurrentDate(date);
    // The getApi() method returns an API object that allows to interact with the FullCalendar
    const calendarApi = calendarRef.current.getApi();
    //  uses the FullCalendar API to navigate the calendar to the date selected by the user
    calendarApi.gotoDate(date);
  };

  return (
    <Box className="app-calendar" sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          //   width: { xs: "50%", sm: "50%", md: "3px" },
          height: "100vh",
          "& .MuiDrawer-paper": {
            position: "relative",
            top: 0,
            left: 0,
            width: { xs: "100%", sm: "100%", md: "300px" },
            boxSizing: "border-box",
            borderRadius: "0.5rem 0 0 0.5rem",
          },
        }}
      >
        <Box>
          <Box sx={{ padding: "1.40625rem 1.5rem" }}>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              color="primary"
              fullWidth
            >
              Add Event
            </Button>
          </Box>
          <Divider />
          <Box sx={{ padding: "0.5rem 1.7rem" }}>
            <DatePicker
              //   selected={
              //     selectedEvent ? new Date(selectedEvent.start) : new Date()
              //   }
              //   onChange={(date) => handleChange("start", date.toISOString())}
              selected={currentDate}
              onChange={handleDateChange}
              inline
              sx={{ border: "none" }}
            />
          </Box>
        </Box>
        <Divider />
        <Box sx={{ padding: 2, ml: 5 }}>
          <Typography variant="body2">Filter</Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel
              control={<Checkbox checked color="primary" />}
              label="View All"
            />
            <FormControlLabel
              control={<Checkbox checked color="error" />}
              label="Personal"
            />
            <FormControlLabel
              control={<Checkbox checked color="primary" />}
              label="Business"
            />
            <FormControlLabel
              control={<Checkbox checked color="warning" />}
              label="Family"
            />
            <FormControlLabel
              control={<Checkbox checked color="success" />}
              label="Holiday"
            />
            <FormControlLabel
              control={<Checkbox checked color="info" />}
              label="ETC"
            />
          </Box>
        </Box>
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          padding: "1.5rem 1.25rem 0rem",
          borderRadius: "0 0.5rem 0.5rem 0",
          backgroundColor: "rgb(255, 255, 255)",
        }}
      >
        <Grid item xs={12} md={6}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          ></Grid>
          <Box
            sx={{
              ".fc-toolbar": {
                backgroundColor: "#fff",
                padding: 2,
              },
              ".fc-toolbar-title": {
                color: "rgba(50, 71, 92, 0.87)",
                fontSize: "1.125rem",
                fontWeight: 500,
              },
              ".fc-button": {
                backgroundColor: "rgba(105, 108, 255, 0.08)",
                color: "rgb(105, 108, 255)",
                border: "none",
                "&:hover": { backgroundColor: "rgb(105, 108, 255)" },
                boxShadow: "none !important",
              },
              ".fc-button-active": {
                backgroundColor: "rgb(105, 108, 255) !important",
                color: "white !important",
              },
              ".fc-button:active": {
                backgroundColor: "rgb(105, 108, 255) !important",
                color: "white !important",
              },
            }}
          >
            <FullCalendar
            ref={calendarRef}
            dateClick={(info) => handleDateChange(info.date)}
              plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
              initialView="dayGridMonth"
              weekends={true}
              headerToolbar={{
                left: "prev,next",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              events={events}
              eventClick={handleEventClick}
              eventClassNames={(event) => event.classNames}
            />
            {selectedEvent && (
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={closeDrawer}
                sx={{
                  "& .MuiDrawer-paper": {
                    position: "absolute",
                    width: 380,
                    boxSizing: "border-box",
                    padding: 4,
                  },
                }}
              >
                <Box
                  p={2}
                  width="100%"
                  role="presentation"
                  className="sidebar-header"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem",
                    mt: "-0.5rem",
                  }}
                >
                  <Typography variant="body1" sx={{ ml: "-0.5rem" }}>
                    {selectedEvent.title}
                  </Typography>
                  <Box sx={{ mr: "-1rem" }}>
                    <IconButton size="small" onClick={closeDrawer}>
                      <CloseIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteEvent(selectedEvent.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Divider />
                <Box>
                  {/* Event Title Input */}
                  <TextField
                    fullWidth
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    variant="outlined"
                    margin="normal"
                  />

                  {/* Calendar Type Selector */}
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Calendar</InputLabel>
                    <Select
                      value={category}
                      label="Calendar"
                      onChange={(e) => handleChange("category", e.target.value)}
                    >
                      <MenuItem value="Business">Business</MenuItem>
                      <MenuItem value="Personal">Personal</MenuItem>
                      <MenuItem value="Family">Family</MenuItem>
                      <MenuItem value="Holiday">Holiday</MenuItem>
                      <MenuItem value="ETC">ETC</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Date Inputs */}
                  <TextField
                    fullWidth
                    type="datetime-local"
                    label="Start Date"
                    // value={
                    //   new Date(selectedEvent.start).toISOString().split("T")[0]
                    // }
                    value={selectedEvent.start}
                    onChange={(e) => handleChange("start", e.target.value)}
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    fullWidth
                    type="datetime-local"
                    label="End Date"
                    // value={
                    //   new Date(selectedEvent.end).toISOString().split("T")[0]
                    // }
                    value={selectedEvent.end}
                    onChange={(e) => handleChange("end", e.target.value)}
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                  />

                  {/* All Day Checkbox */}
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={allDay}
                        onChange={(e) => setAllDay(e.target.checked)}
                      />
                    }
                    label="All Day"
                  />

                  {/* Event URL */}
                  <TextField
                    fullWidth
                    label="Event URL"
                    type="url"
                    value={eventUrl}
                    onChange={(e) => {
                      setEventUrl(e.target.value);
                      validateUrl(e.target.value);
                    }}
                    error={!!urlError}
                    helperText={urlError}
                    multiline
                    rows={1}
                    variant="outlined"
                    sx={{ mb: 1 }}
                  />

                  {/* Guest Selector */}
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Guests</InputLabel>
                    <Select
                      multiple
                      label="Guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      renderValue={(selected) => selected.join(", ")}
                    >
                      {[
                        "John",
                        "Jane",
                        "Smith",
                        "Alice",
                        "Bob",
                        "Carol",
                        "Frank",
                        "Gary",
                        "Ivy",
                        "Joe",
                        "Leo",
                        "Nick",
                        "Patty",
                        "Rachel",
                        "Steve",
                        "Uma",
                      ].map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={guests.includes(name)} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* Description Input */}
                  <TextField
                    fullWidth
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    multiline
                    rows={4}
                    variant="outlined"
                  />

                  {/* Action Buttons */}
                  <Box mt={2} display="flex" justifyContent="space-between">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleUpdateEvent}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={handleReset}
                    >
                      Reset
                    </Button>
                  </Box>
                </Box>
              </Drawer>
            )}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default AppCalendar;
