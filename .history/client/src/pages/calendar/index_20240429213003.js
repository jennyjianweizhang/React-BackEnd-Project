import React, { useState } from "react";
import {
  Drawer,
  Button,
  Divider,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AppCalendar() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Box className="app-calendar">
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
          <Box sx={{ padding: "0.5rem 1.6rem" }}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              inline
            />
          </Box>
        </Box>
        <Divider />
        <Box sx={{ padding: 2 }}>
          <Typography variant="body2">Filter</Typography>
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
        <Divider />
      </Drawer>
      <Box className="calendar-view">
        {/* Calendar view integration goes here */}
      </Box>
    </Box>
  );
}

export default AppCalendar;
