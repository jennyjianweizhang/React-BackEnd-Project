import React, { useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  SvgIcon,
} from "@mui/material";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider, DateRangePicker } from "@mui/x-date-pickers";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const List = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [openDateRangePicker, setOpenDateRangePicker] = useState(false);

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const formatDateRangeDisplay = () => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        if (!startDate || !endDate) {
            return '';
        }
        return `${startDate.toLocaleDateString(undefined, options)} - ${endDate.toLocaleDateString(undefined, options)}`;
    };
    

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card elevation={6} sx={{height:'10rem', , overflow: 'visible' }}>
          <CardHeader title={<Typography variant="h5">Filters</Typography>} />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="invoice-status-label">
                    Invoice Status
                  </InputLabel>
                  <Select
                    labelId="invoice-status-label"
                    id="invoice-status-select"
                    label="Invoice Status"
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="">Downloaded</MenuItem>
                    <MenuItem value="">Draft</MenuItem>
                    <MenuItem value="paid">Paid</MenuItem>
                    <MenuItem value="unpaid">Partial Payment</MenuItem>
                    <MenuItem value="pending">Past Due</MenuItem>
                    <MenuItem value="pending">Sent</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                            fullWidth
                            label="Date Range"
                            value={formatDateRangeDisplay()}
                            onClick={() => setOpenDateRangePicker(true)}
                            readOnly
                        />
                        {openDateRangePicker && (
                            <div style={{ position: 'relative', zIndex:1000 }}>
                                <DatePicker
                                    selectsRange
                                    startDate={startDate}
                                    endDate={endDate}
                                    onChange={handleDateChange}
                                    monthsShown={2} 
                                    inline
                                    calendarClassName="date-range"
                                />
                                <button onClick={() => setOpenDateRangePicker(false)} style={{ position: 'absolute', top: 0, right: 0 }}>
                                    Close
                                </button>
                            </div>
                        )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default List;



