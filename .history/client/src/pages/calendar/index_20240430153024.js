import React, { useState } from "react";
import {
  Drawer,
  Button,
  Divider,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Grid,
  List,
  List
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import events from "src/@core/data/datasetCalendar";
import CloseIcon from '@mui/icons-material/Close';

const AppCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleViewChange = (view) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(view);
  };

  const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (clickInfo) => {
        setSelectedEvent(clickInfo.event);
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
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
              selected={startDate}
              onChange={(date) => setStartDate(date)}
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
              events={events}
              onClick={handleEventClick}
            />
            <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={closeDrawer}
            sx={{
              "& .MuiDrawer-paper": {
                position: "absolute",
                width: 380,
                right: { xs: "-1%", sm: "0%", md: "1%", lg: "1%", xl: "23%" },
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
                  left: { xs: "3%", sm: "4%", md: "2%", lg: "18.5%", xl: "31%" },
                  width: "80%",
                  height: "100%",
                },
              },
            }}
          >
            <Box sx={{ width: 380 }} role="presentation">
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Badge
                      sx={{ ml: 33 }}
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      badgeContent={
                        <span
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: statusColors[status],
                            display: "block",
                          }}
                        />
                      }
                    >
                      <Avatar
                        alt="John Doe"
                        src={currentChatData.avatar}
                        sx={{ width: "5rem", height: "5rem" }}
                      />
                    </Badge>
                  </ListItemAvatar>
                </ListItem>
                <ListItemText
                  primary={currentChatData.name}
                  secondary={currentChatData.title}
                  sx={{ textAlign: "center" }}
                />
                <ListItem>
                  <ListItemText primary={currentChatData.about} />
                </ListItem>
                <Box sx={{ p: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{ ml: 2, color: "rgba(50, 71, 92, 0.6)" }}
                  >
                    Personal Information
                  </Typography>
                  <List dense>
                    {/* Email */}
                    <ListItem>
                      <ListItemIcon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223l-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044L20.002 18H4z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary={currentChatData.email} />
                    </ListItem>

                    {/* Phone */}
                    <ListItem>
                      <ListItemIcon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435c.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712c-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414L9.586 7L8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414L19.586 17l-2.006 2.005z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary={currentChatData.phone} />
                    </ListItem>

                    {/* Schedule */}
                    <ListItem>
                      <ListItemIcon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z" />
                          <path d="M13 7h-2v5.414l3.293 3.293l1.414-1.414L13 11.586z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary={currentChatData.schedule} />
                    </ListItem>
                  </List>
                  <Typography variant="body1" sx={{ ml: 2, color: "rgba(50, 71, 92, 0.6)" }}>Options</Typography>
                  <List dense>
                    <ListItem button>
                      <ListItemIcon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M16.813 4.419A.997.997 0 0 0 16 4H3a1 1 0 0 0-.813 1.581L6.771 12l-4.585 6.419A1 1 0 0 0 3 20h13a.997.997 0 0 0 .813-.419l5-7a.997.997 0 0 0 0-1.162l-5-7zM15.485 18H4.943l3.87-5.419a.997.997 0 0 0 0-1.162L4.943 6h10.542l4.286 6l-4.286 6z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary="Add Tag" />
                    </ListItem>


                    <ListItem button>
                      <ListItemIcon>
                        <svg
                        width="24"
                        height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="m6.516 14.323l-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4l4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454l-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315l-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385l-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603l1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962l4.09-.326z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary="Important Contact" />
                    </ListItem>

    
                    <ListItem button>
                      <ListItemIcon>
                        <svg
                        width="24"
                        height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <circle cx="7.499" cy="9.5" r="1.5" />
                          <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z" />
                          
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary="Shared Media" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <svg
                        width="24"
                        height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary="Delete Contact" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <svg
                        width="24"
                        height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zM4 12c0-1.846.634-3.542 1.688-4.897l11.209 11.209A7.946 7.946 0 0 1 12 20c-4.411 0-8-3.589-8-8zm14.312 4.897L7.103 5.688A7.948 7.948 0 0 1 12 4c4.411 0 8 3.589 8 8a7.954 7.954 0 0 1-1.688 4.897z" />
                        </svg>
                      </ListItemIcon>
                      <ListItemText primary="Block Contact" />
                    </ListItem>
                  </List>
                </Box>
              </List>
            </Box>
          </Drawer>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default AppCalendar;
