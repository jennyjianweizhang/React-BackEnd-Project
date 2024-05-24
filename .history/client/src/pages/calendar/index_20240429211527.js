import React from 'react';
import { Drawer, Button, Divider, Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

function AppCalendar() {


    return (
        <Box className="app-calendar">
            <Drawer variant="permanent" anchor="left">
                <Box sx={{ padding: 2 }}>
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
                {/* Calendar view integration goes here, possibly using a library like react-big-calendar */}
            </Box>
        </Box>
    );
}

export default AppCalendar;
