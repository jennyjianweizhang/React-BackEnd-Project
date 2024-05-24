import React, { useState } from "react";
import {
  Drawer,
  Button,
  Divider,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Grid, ButtonGroup
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

function AppCalendar() {
  const [startDate, setStartDate] = useState(new Date());
  const handleViewChange = (view) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(view);
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
          >
            <ButtonGroup variant="contained" aria-label="view control buttons">
              <Button
                onClick={() => handleViewChange("dayGridMonth")}
                color="primary"
                sx={{borderRight:'1px solid rgb(105, 108, 255}}
              >)
                Month
              </Button>
              <Button
                onClick={() => handleViewChange("timeGridWeek")}
                color="primary"
              >
                Week
              </Button>
              <Button
                onClick={() => handleViewChange("timeGridDay")}
                color="primary"
              >
                Day
              </Button>
              <Button
                onClick={() => handleViewChange("listMonth")}
                color="primary"
              >
                List
              </Button>
            </ButtonGroup>
          </Grid>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={[
              { title: "event 1", date: "2024-04-01" },
              { title: "event 2", date: "2024-04-02" },
            ]}
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default AppCalendar;
