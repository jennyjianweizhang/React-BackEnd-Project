import React, { useState } from "react";
import {
  Drawer,
  Button,
  Divider,
  Box,
  Typography,
  Checkbox,
  FormControlLabel, Grid
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function AppCalendar() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Box className="app-calendar" sx={{display:'flex'}}>
      <Drawer
        variant="permanent"
        sx={{
          width: { xs: "50%", sm: "50%", md: "30px" },
          height: "100vh",
          "& .MuiDrawer-paper": {
            position: "relative",
            top: 0,
            left: 0,
            width: { xs: "100%", sm: "100%", md: "300px" },
            boxSizing: "border-box",
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
        <Divider />
      </Drawer>
      <Box sx={{ flexGrow: 1, padding: '1.5rem 1.25rem 0rem', borderRadius: '0 0.5rem 0.5rem 0', backgroundColor:'rgb(255, 255, 255)' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* Your existing date picker or other components */}
            <Typography variant="h6">Date Picker Here</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={true}
              events={[
                { title: "event 1", date: "2024-04-01" },
                { title: "event 2", date: "2024-04-02" },
              ]}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AppCalendar;
