import React, { useState, useEffect, useRef } from "react";
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
  Avatar,
  Box,
  InputBase,
  IconButton,
} from "@mui/material";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider, DateRangePicker } from "@mui/x-date-pickers";
import { DataGrid } from "@mui/x-data-grid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const List = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openDateRangePicker, setOpenDateRangePicker] = useState(false);
  const wrapperRef = useRef(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleClickOutside = (event) => {
    // wrapperRef.current: point to this div element after it is rendered.
    // .contains(event.target) returns true if the click was inside the div.
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setOpenDateRangePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const StatusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style={{ fontSize: 20 }} className="iconify iconify--bx" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="m10 10.414l4 4l5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4l-7.707 7.707l1.414 1.414z"></path>
    </svg>
  );

  const ClientCell = (params) => {
    const initials = params.value.split(" ").map(name => name[0]).join("");
    const email = params.value.split(" ").join("").toLowerCase() + "@example.com";
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10}}>
        <Avatar sx={{ bgcolor: 'rgba(105, 108, 255, 0.16)', mt:'-0.4rem', color:'rgb(105, 108, 255)'}}>{initials}</Avatar>
        <div style={{marginTop:'-0.5rem'}}>
          <div >{params.value}</div>
          <div style={{ fontSize: 'small', color: 'gray', marginTop: '-2rem'}}>{email}</div>
        </div>
      </div>
    );
  };

  const columns = [
    { field: "id", headerName: "#ID", width: 60 },
    {field: "status", headerName: <StatusIcon />, width: 120, renderCell: (params) => (<>{params.value}</>) },
    { field: "client", headerName: "CLIENT", width: 225, renderCell: ClientCell },
    { field: "total", headerName: "TOTAL", width: 130 },
    { field: "issuedDate", headerName: "ISSUED DATE", width: 180 },
    { field: "balance", headerName: "BALANCE", width: 130 },
    { field: "actions", headerName: "ACTIONS", width: 180},
  ];

  const statusIcons = {
    Paid: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="green" width="35px" height="35px" style={{borderRadius:'50%'}}>
        <rect width="100%" height="100%" fill="rgba(113, 221, 55, 0.16)"/> 
        <path fill="rgb(113, 221, 55)" transform="translate(5.5, 5.5)" d="M12 2a9.936 9.936 0 0 0-7.071 2.929C3.04 6.818 2 9.33 2 12s1.04 5.182 2.929 7.071C6.818 20.96 9.33 22 12 22s5.182-1.04 7.071-2.929C20.96 17.182 22 14.67 22 12s-1.04-5.182-2.929-7.071A9.936 9.936 0 0 0 12 2zm5.657 15.657C16.146 19.168 14.137 20 12 20s-4.146-.832-5.657-2.343C4.832 16.146 4 14.137 4 12s.832-4.146 2.343-5.657A7.927 7.927 0 0 1 11 4.069V12a1 1 0 0 0 1 1h7.931a7.927 7.927 0 0 1-2.274 4.657zM13 11V4.062a7.945 7.945 0 0 1 4.657 2.281A7.934 7.934 0 0 1 19.938 11H13z"></path>
      </svg>
    ),
    Downloaded: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="blue" width="24px" height="24px" style={{borderRadius:'50%'}}>
        <rect width="100%" height="100%" fill="rgba(3, 195, 236, 0.16)"/> 
        <path fill="rgb(3, 195, 236)" d="M12 1.993C6.486 1.994 2 6.48 2 11.994c0 5.513 4.486 9.999 10 10c5.514 0 10-4.486 10-10s-4.485-10-10-10.001zm0 18.001c-4.411-.001-8-3.59-8-8c0-4.411 3.589-8 8-8.001c4.411.001 8 3.59 8 8.001s-3.589 8-8 8z"></path>
      </svg>
    ),
    Sent: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="orange" width="24px" height="24px" style={{borderRadius:'50%'}}>
        <rect width="100%" height="100%" fill="rgba(133, 146, 163, 0.16)"/> 
        <path fill="rgb(133, 146, 163)" d="M20.56 3.34a1 1 0 0 0-1-.08l-17 8a1 1 0 0 0-.57.92a1 1 0 0 0 .6.9L8 15.45v6.72L13.84 18l4.76 2.08a.93.93 0 0 0 .4.09a1 1 0 0 0 .52-.15a1 1 0 0 0 .48-.79l1-15a1 1 0 0 0-.44-.89ZM18.1 17.68l-5.27-2.31L16 9.17l-7.65 4.25l-2.93-1.29l13.47-6.34Z"></path>
      </svg>
    ),
    Draft: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="gray" width="24px" height="24px" style={{borderRadius:'50%'}}>
        <path fill="currentColor" d="M5 21h14a2 2 0 0 0 2-2V8l-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM7 5h4v2h2V5h2v4H7V5zm0 8h10v6H7v-6z"></path>
      </svg>
    ),
    "Partial Payment": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="purple" width="24px" height="24px" style={{borderRadius:'50%'}}>
        <path fill="currentColor" d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2S2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8z"></path>
      </svg>
    )
  };
  
  const getRandomStatus = () => {
    const statuses = Object.keys(statusIcons);
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    return statusIcons[status];
  };
  
  const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Carol White", "Dave Black", "Eve Green", "Frank Wright", "Grace Hall", "Hank Moody", "Mike Lee", "Ben Reddy"];
  let shuffledNames = [];
  let index = 0;
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // every element can end up in any position with equal probability
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  
  const getRandomClient = () => {
    if (index === 0 || index >= names.length) {
      shuffleArray(names); // Shuffle names if all names are used or at first call
      shuffledNames = [...names]; // Copy the shuffled names
      index = 0; // Reset index
    }
    return shuffledNames[index++]; // Return name and increment index
  };

  const generateRows = () => {
    return Array.from({ length: 12 }, (_, index) => ({
      id: index + 1,
      status: getRandomStatus(),
      client: getRandomClient(),
      total: `$${Math.floor(Math.random() * 900 + 100)}0`,
      issuedDate: `2024-05-13`,
      balance: Math.random() > 0.5 ? `Paid` : `$${Math.floor(Math.random() * 500 + 100)}`
    }));
  };
  
  const rows = generateRows();


  const formatDateRangeDisplay = () => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    if (!startDate || !endDate) {
      return "";
    }
    return `${startDate.toLocaleDateString(
      // default local setting, data formate
      undefined,
      options
    )} - ${endDate.toLocaleDateString(undefined, options)}`;
  };

  return (
    <Grid container spacing={2} >
      <Grid item xs={12}>
        <Card elevation={6} sx={{ height: "10rem", overflow: "visible" }}>
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
                  // The ref attribute is assigned to the div element that wraps the DatePicker.
                  <div ref={wrapperRef} style={{ position: "relative" }}>
                    <DatePicker
                      selectsRange
                      startDate={startDate}
                      endDate={endDate}
                      onChange={handleDateChange}
                      monthsShown={2}
                      inline
                      calendarClassName="date-range"
                    />
                  </div>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card elevation={6}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb:'1rem'}}>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="Actions" sx={{ mt: "-0.5rem" }}>
                        Actions
                      </InputLabel>
                      <Select
                        labelId="Actions"
                        id="Actions"
                        label="Actions"
                        sx={{ height: "2.5rem" }}
                      >
                        <MenuItem value="">Delete</MenuItem>
                        <MenuItem value="">Edit</MenuItem>
                        <MenuItem value="">Send</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <TextField
                      id="search-invoice"
                      placeholder="Search Invoice"
                      variant="outlined"
                      size="small"
                      fullWidth
                      sx={{ mr: "1rem" }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      href="/apps/invoice/add/"
                      sx={{ width: "15rem", height: "2.5rem" }}
                    >
                      Create Invoice
                    </Button>
                  </Box>
                </Box>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                  sx={{height: "100vh"}}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default List;
