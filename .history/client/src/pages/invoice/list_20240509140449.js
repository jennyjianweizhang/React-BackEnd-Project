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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" width="24px" height="24px">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h-2v6h3v2h-3v2h4v-4h-3V9h3V7zm6 4h-4v2h4v-2zm0-4h-4v2h4V7z"/>
      </svg>
    ),
    Downloaded: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" width="24px" height="24px">
        <path d="M5 20h14v-2H5v2zM12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.25 11h-10.5L12 17l5.25-6z"/>
      </svg>
    ),
    Sent: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" width="24px" height="24px">
        <path d="M21 3L2 21h17v-3h2V3h-2zm0 15h-2v-1h2v1zm0-3h-2v-1h2v1zm-4 3h-2v-1h2v1zm0-3h-2v-1h2v1zm0-3H5.83L21 5.83V12z"/>
      </svg>
    ),
    Draft: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" width="24px" height="24px">
        <path d="M3 23h18v-2H3v2zM20 1H4c-1.1 0-1.99.9-1.99 2L2 17h4v2h12v-2h4V3c0-1.1-.9-2-2-2zm0 14H4V3h16v12z"/>
      </svg>
    ),
    "Partial Payment": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="purple" width="24px" height="24px">
        <path d="M12 2C6.48 2 2 12 2 12s4.48 10 10 10 10-10 10-10S17.52 2 12 2zm0 18c-4.07 0-8-8-8-8s3.93-8 8-8 8 8 8 8-3.93 8-8 8zm0-14c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
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
