import React, { useState, useEffect } from "react";
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
import { formatISO, parseISO, format } from "date-fns";

import { updateEvent } from "src/store/eventData";

const AppCalendar = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventsData?.events || []);

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [allDay, setAllDay] = useState(false);
  const [description, setDescription] = useState("");

  const formatDateForInput = (date) => {
    if (!date) return '';
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'yyyy-MM-dd\'T\'HH:mm');
};

  const handleEventClick = (clickInfo) => {
    const { id, title, start, end, extendedProps } = clickInfo.event;
    console.log("Data types - Start:", typeof start, "End:", typeof end);
    setSelectedEvent({
      id,
      title,
      start: formatDateForInput(start),
      end: formatDateForInput(end),
      ...extendedProps,
    });
    setStart(formatDateForInput(start));
    setEnd(formatDateForInput(end));

    setDrawerOpen(true);

  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleUpdateEvent = () => {
    console.log(selectedEvent.id);
    if (selectedEvent) {
      dispatch(
        updateEvent({
          id: Number(selectedEvent.id),
          changes: {
            title,
            category,
            start,
            end,
            description,
          },
        })
      );
      closeDrawer();
    }
  };

  const handleChange = (field, value) => {
    setSelectedEvent((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  useEffect(() => {
    if (selectedEvent) {
      setTitle(selectedEvent.title);
      setCategory(selectedEvent.category);
      setStart(selectedEvent.start);
      setEnd(selectedEvent.end);
      setDescription(selectedEvent.description || "");
    }
  }, [selectedEvent]);



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
              selected={
                selectedEvent ? new Date(selectedEvent.start) : new Date()
              }
              onChange={(date) => handleChange("start", date.toISOString())}
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
              plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
              initialView="dayGridMonth"
              weekends={true}
              headerToolbar={{
                left: "prev,next",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              key={events.length}
              events={events}
              eventClick={handleEventClick}
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
                    right: {
                      xs: "-1%",
                      sm: "0%",
                      md: "1%",
                      lg: "1%",
                      xl: "23%",
                    },
                    top: 80,
                    height: "100%",
                    boxSizing: "border-box",
                  },
                }}
                ModalProps={{
                  keepMounted: true,
                  BackdropProps: {
                    sx: {
                      position: "absolute",
                      top: 80,
                      left: {
                        xs: "3%",
                        sm: "4%",
                        md: "2%",
                        lg: "18.5%",
                        xl: "31%",
                      },
                      width: "80%",
                      height: "100%",
                    },
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
                  }}
                >
                  <Typography variant="body1">{selectedEvent.title}</Typography>
                  <Box>
                    <IconButton size="small" onClick={closeDrawer}>
                      <CloseIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => console.log("Delete clicked")}
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
                      value={selectedEvent.category}
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
                    type="date"
                    label="Start Date"
                    value={selectedEvent.start}
                    onChange={(e) => handleChange("start", e.target.value)}
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    fullWidth
                    type="date"
                    label="End Date"
                    value={selectedEvent.end}
                    onChange={(e) => handleChange("end", e.target.value)}
                    min={selectedEvent.start}
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
                      onClick={() => console.log("Reset")}
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
