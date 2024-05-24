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
  TextField,
  Button,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialRows = [
  { id: 1, status: 'Paid', client: 'Jordan Stevenson', email:'don85@johnson.com', total: '$1000', issuedDate: '2024-05-13', balance: 'Paid' },
  { id: 2, status: 'Draft', client: 'Stephanie Burns', email:'brenda49@taylor.info', total: '$1200', issuedDate: '2024-05-14', balance: '$600' },
  { id: 3, status: 'Sent', client: 'Alice Johnson', email:'smithtiffany@powers.com', total: '$1500', issuedDate: '2024-05-15', balance: '$1500' },
  { id: 4, status: 'Downloaded', client: 'Bob Brown', email:'mejiageorge@lee-perez.com', total: '$700', issuedDate: '2024-05-16', balance: 'Paid' },
  { id: 5, status: 'Partial Payment', client: 'Tony Herrera', email:'brandon07@pierce.com', total: '$3428', issuedDate: '2024-05-17', balance: '$400' },
  { id: 6, status: 'Partial Payment', client: 'Kevin Patton', email:'guerrerobrandy@beasley-harper.com', total: '$5200', issuedDate: '2024-05-17', balance: 'Paid' },
  { id: 7, status: 'Downloaded', client: 'Amanda Phillips', email:'williamshenry@moon-smith.com', total: '$3710', issuedDate: '2024-05-17', balance: '815' },
  { id: 8, status: 'Past Due', client: 'Christina Collier', email:'margaretharvey@russell-murray.com', total: '$2720', issuedDate: '2024-05-17', balance: '-$200' },
  { id: 9, status: 'Sent', client: 'Carol White', email:'dianarodriguez@villegas.com', total: '$2770', issuedDate: '2024-05-17', balance: '$400' },
  { id: 10, status: 'Past Due', client: 'David Flores', email:'bwilson@norris-brock.com', total: '$4360', issuedDate: '2024-05-17', balance: 'Paid' },
  { id: 11, status: 'Paid', client: 'Valerie Perez', email:'yrobinson@nichols.com', total: '$3357', issuedDate: '2024-05-17', balance: '$305' },
  { id: 12, status: 'Sent', client: 'Susan Dickerson', email:'arielberg@wolfe-smith.com', total: '$4578', issuedDate: '2024-05-17', balance: 'Paid' },
];

const List = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openDateRangePicker, setOpenDateRangePicker] = useState(false);
  const wrapperRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('')
  const rows = selectedStatus?initialRows.filter(row => row.status === selectedStatus) : initialRows;

  const handleChangeStatus = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      style={{ fontSize: 20 }}
      className="iconify iconify--bx"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m10 10.414l4 4l5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4l-7.707 7.707l1.414 1.414z"
      ></path>
    </svg>
  );

  const ClientCell = (params) => {
    const initials = params.value
      .split(" ")
      .map((name) => name[0])
      .join("");
    const email = {initia}
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Avatar
          sx={{
            bgcolor: "rgba(105, 108, 255, 0.16)",
            mt: "-0.4rem",
            color: "rgb(105, 108, 255)",
          }}
        >
          {initials}
        </Avatar>
        <div style={{ marginTop: "-0.5rem" }}>
          <div>{params.value}</div>
          <div style={{ fontSize: "small", color: "gray", marginTop: "-2rem" }}>
            {email}
          </div>
        </div>
      </div>
    );
  };

  const ActionsCell = (params) => {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Tooltip title="Delete Invoice">
          <IconButton aria-label="Delete" size="small" sx={{mt:'0.6rem'}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z" />
            </svg>
          </IconButton>
        </Tooltip>
        <Tooltip title="Preview" sx={{mt:'0.6rem'}}>
          <IconButton
            aria-label="Preview"
            size="small"
            component="a"
            href="/apps/invoice/preview/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3c1.641 0 3-1.358 3-3c0-1.641-1.359-3-3-3z" />
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5c-.504 1.158-2.578 5-7.926 5z" />
            </svg>
          </IconButton>
        </Tooltip>
        <Tooltip title="More Options" sx={{mt:'0.6rem'}} >
          <IconButton
            aria-label="More Options"
            size="small"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z" />
            </svg>
          </IconButton>
        </Tooltip>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Download</MenuItem>
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>Duplicate</MenuItem>
        </Menu>
      </div>
    );
  };

  const statusIcons = {
    Paid: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35 35"
        fill="green"
        width="35px"
        height="35px"
        style={{ borderRadius: "50%" }}
      >
        <rect width="100%" height="100%" fill="rgba(113, 221, 55, 0.16)" />
        <path
          fill="rgb(113, 221, 55)"
          transform="translate(5.5, 5.5)"
          d="M12 2a9.936 9.936 0 0 0-7.071 2.929C3.04 6.818 2 9.33 2 12s1.04 5.182 2.929 7.071C6.818 20.96 9.33 22 12 22s5.182-1.04 7.071-2.929C20.96 17.182 22 14.67 22 12s-1.04-5.182-2.929-7.071A9.936 9.936 0 0 0 12 2zm5.657 15.657C16.146 19.168 14.137 20 12 20s-4.146-.832-5.657-2.343C4.832 16.146 4 14.137 4 12s.832-4.146 2.343-5.657A7.927 7.927 0 0 1 11 4.069V12a1 1 0 0 0 1 1h7.931a7.927 7.927 0 0 1-2.274 4.657zM13 11V4.062a7.945 7.945 0 0 1 4.657 2.281A7.934 7.934 0 0 1 19.938 11H13z"
        ></path>
      </svg>
    ),
    Downloaded: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35 35"
        fill="blue"
        width="35px"
        height="35px"
        style={{ borderRadius: "50%" }}
      >
        <rect width="100%" height="100%" fill="rgba(3, 195, 236, 0.16)" />
        <path
          fill="rgb(3, 195, 236)"
          transform="translate(5.5, 5.5)"
          d="M12 1.993C6.486 1.994 2 6.48 2 11.994c0 5.513 4.486 9.999 10 10c5.514 0 10-4.486 10-10s-4.485-10-10-10.001zm0 18.001c-4.411-.001-8-3.59-8-8c0-4.411 3.589-8 8-8.001c4.411.001 8 3.59 8 8.001s-3.589 8-8 8z"
        ></path>
        <path
          fill="rgb(3, 195, 236)"
          transform="translate(5.5, 5.5)"
          d="M13 8h-2v4H7.991l4.005 4.005L16 12h-3z"
        ></path>
      </svg>
    ),
    Sent: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35 35"
        fill="orange"
        width="35px"
        height="35px"
        style={{ borderRadius: "50%" }}
      >
        <rect width="100%" height="100%" fill="rgba(133, 146, 163, 0.16)" />
        <path
          fill="rgb(133, 146, 163)"
          transform="translate(5.5, 5.5)"
          d="M20.56 3.34a1 1 0 0 0-1-.08l-17 8a1 1 0 0 0-.57.92a1 1 0 0 0 .6.9L8 15.45v6.72L13.84 18l4.76 2.08a.93.93 0 0 0 .4.09a1 1 0 0 0 .52-.15a1 1 0 0 0 .48-.79l1-15a1 1 0 0 0-.44-.89ZM18.1 17.68l-5.27-2.31L16 9.17l-7.65 4.25l-2.93-1.29l13.47-6.34Z"
        ></path>
      </svg>
    ),
    Draft: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35 35"
        fill="gray"
        width="35px"
        height="35px"
        style={{ borderRadius: "50%" }}
      >
        <rect width="100%" height="100%" fill="rgba(105, 108, 255, 0.16)" />
        <path
          fill="rgb(105, 108, 255)"
          transform="translate(5.5, 5.5)"
          d="M5 21h14a2 2 0 0 0 2-2V8l-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM7 5h4v2h2V5h2v4H7V5zm0 8h10v6H7v-6z"
        ></path>
      </svg>
    ),
    "Partial Payment": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35 35"
        fill="purple"
        width="35px"
        height="35px"
        style={{ borderRadius: "50%" }}
      >
        <rect width="100%" height="100%" fill="rgba(255, 171, 0, 0.16)" />
        <path
          fill="rgb(255, 171, 0)"
          transform="translate(5.5, 5.5)"
          d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2S2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8z"
        ></path>
        <path
          fill="rgb(255, 171, 0)"
          transform="translate(5.5, 5.5)"
          d="M19 12a7 7 0 0 0-7-7v14a7 7 0 0 0 7-7z"
        ></path>
      </svg>
    ),
    "Past Due": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35 35"
        fill="purple"
        width="35px"
        height="35px"
        style={{ borderRadius: "50%" }}
      >
        <rect width="100%" height="100%" fill="rgba(255, 62, 29, 0.16)" />
        <path
          fill="rgb(255, 62, 29)"
          transform="translate(5.5, 5.5)"
          d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2S2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8z"
        ></path>
        <path
          fill="rgb(255, 62, 29)"
          transform="translate(5.5, 5.5)"
          d="M19 12a7 7 0 0 0-7-7v14a7 7 0 0 0 7-7z"
        ></path>
      </svg>
    ),
  };

  // const getRandomStatus = () => {
  //   const statuses = Object.keys(statusIcons);
  //   const status = statuses[Math.floor(Math.random() * statuses.length)];
  //   return statusIcons[status];
  // };

  // const names = [
  //   "John Doe",
  //   "Jane Smith",
  //   "Alice Johnson",
  //   "Bob Brown",
  //   "Carol White",
  //   "Dave Black",
  //   "Eve Green",
  //   "Frank Wright",
  //   "Grace Hall",
  //   "Hank Moody",
  //   "Mike Lee",
  //   "Ben Reddy",
  // ];
  // let shuffledNames = [];
  // let index = 0;

  // const shuffleArray = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     // every element can end up in any position with equal probability
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  // };

  // const getRandomClient = () => {
  //   if (index === 0 || index >= names.length) {
  //     shuffleArray(names); // Shuffle names if all names are used or at first call
  //     shuffledNames = [...names]; // Copy the shuffled names
  //     index = 0; // Reset index
  //   }
  //   return shuffledNames[index++]; // Return name and increment index
  // };

  // const generateRows = () => {
  //   return Array.from({ length: 12 }, (_, index) => ({
  //     id: index + 1,
  //     status: getRandomStatus(),
  //     client: getRandomClient(),
  //     total: `$${Math.floor(Math.random() * 900 + 100)}0`,
  //     issuedDate: `2024-05-13`,
  //     balance:
  //       Math.random() > 0.5
  //         ? `Paid`
  //         : `$${Math.floor(Math.random() * 500 + 100)}`,
  //   }));
  // };
  // const [rows, setRows] = useState(() => generateRows());


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
    <Grid container spacing={2}>
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
                    onChange={handleChangeStatus}
                    value={selectedStatus}
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: "1rem",
                  }}
                >
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
                  columns={[
                    { field: "id", headerName: "#ID", width: 60 },
                    {
                      field: "status",
                      headerName: <StatusIcon />,
                      width: 120,
                      renderCell: (params) => (
                        <div style={{ marginTop: "0.5rem" }}>{params.value}</div>
                      ),
                    },
                    {
                      field: "client",
                      headerName: "CLIENT",
                      width: 225,
                      renderCell: ClientCell,
                    },
                    { field: "total", headerName: "TOTAL", width: 130 },
                    { field: "issuedDate", headerName: "ISSUED DATE", width: 180 },
                    { field: "balance", headerName: "BALANCE", width: 130 },
                    {
                      field: "actions",
                      headerName: "ACTIONS",
                      width: 180,
                      renderCell: ActionsCell,
                    },
                  ]}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                  sx={{
                    height: "100vh",
                    "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within":
                      {
                        outline: "none",
                      },
                  }}
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
