import React, { useState } from 'react';
import { Drawer, Button, Divider, Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AppCalendar() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Box className="app-calendar">
            <Drawer variant="permanent" sx={{width:'300px', position:'static'}}>
                <Box sx={{ padding: 2 }}>
                    <Button
                        startIcon={<AddIcon />}
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Add Event
                    </Button>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        inline
                    />
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
