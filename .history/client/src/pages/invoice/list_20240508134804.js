import React, {useState} from "react";
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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import 'react-datepicker/dist/react-datepicker.css'; 

const List=() =>{
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = (newValue) => {
        setValue(newValue);
    };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card elevation={6}>
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
                {/* <TextField
                  fullWidth
                  id="date-range-picker"
                  label="Invoice Date"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  
                /> */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Invoice Date"
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} fullWidth />}
            />
        </LocalizationProvider>npm install @mui/x-date-pickers @date-io/date-fns date-fns

              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default List;
