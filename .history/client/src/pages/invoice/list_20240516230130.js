import React, { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
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
  Checkbox,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setSearchTerm, deleteInvoice } from "src/store/invoiceData";

const List = () => {
  const dispatch = useDispatch();
  const invoice = useSelector((state) => state.invoicesData?.invoice || []);
  console.log(invoice);

  const selectSearchTerm = (state) => state.invoicesData.searchTerm || "";
  const searchTerm = useSelector(selectSearchTerm);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openDateRangePicker, setOpenDateRangePicker] = useState(false);
  const wrapperRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [selectedAction, setSelectedAction] = useState("");

  const filteredRows = useMemo(() => {
    return invoice.filter((row) => {
      const issuedDate = new Date(row.issuedDate); // convert string to date
      const isWithinDateRange =
        issuedDate >= startDate && issuedDate <= endDate;
      const matchesStatus = selectedStatus
        ? row.status === selectedStatus
        : true;
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const matchesSearch =
        row.client.toLowerCase().includes(lowerCaseSearchTerm) ||
        row.email.toLowerCase().includes(lowerCaseSearchTerm);
      return isWithinDateRange && matchesStatus && matchesSearch;
    });
  }, [invoice, startDate, endDate, selectedStatus, searchTerm]);

  const handleCheckboxChange = (id) => {
    setSelectedRowIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const allIds = rows.map((row) => row.id);
      setSelectedRowIds(allIds);
    } else {
      setSelectedRowIds([]);
    }
  };

  const handleChangeStatus = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleChangeActions = (event) => {
    setSelectedAction(event.target.value);
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
    const initials = params.row.client
      .split(" ")
      .map((name) => name[0])
      .join("");
    const email = params.row.email;
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Avatar
          sx={{
            bgcolor: "rgba(105, 108, 255, 0.16)",
            mt: "-0.4rem",
            ml: "1rem",
            color: "rgb(105, 108, 255)",
          }}
        >
          {initials}
        </Avatar>
        <div style={{ marginTop: "-0.5rem" }}>
          <div>{params.row.client}</div>
          <div style={{ fontSize: "small", color: "gray", marginTop: "-2rem" }}>
            {email}
          </div>
        </div>
      </div>
    );
  };

  const ActionsCell = ({params}) => {
    
    // ----direct to 'edit' page-----//
    const router = useRouter();

    const handleEditClick = (params) => {
      console.log("Navigating to edit page for ID:", params.row.id);
      router.push(`/invoice/edit/${params.row.id}`);
    };

    // const handleEditClick = () => {
    //   console.log("Attempting to navigate to edit page for ID:", id);
    //   router.push(`/invoice/edit/${id}`).catch(err => console.error('Failed to navigate:', err));
    // };
 
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Tooltip title="Delete Invoice">
          <IconButton
            aria-label="Delete"
            size="small"
            sx={{ mt: "0.6rem" }}
            onClick={() => handleDeleteInvoice(params.row.id)}
          >
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
        <Tooltip title="Preview" sx={{ mt: "0.6rem" }}>
          <IconButton
            aria-label="Preview"
            size="small"
            component="a"
            href="/invoice/preview/"
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
        <Tooltip title="More Options" sx={{ mt: "0.6rem" }}>
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
          <MenuItem onClick={handleEditClick}>Edit</MenuItem>
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

  const handleSelectionChange = (newSelectionModel) => {
    console.log("Selected IDs:", newSelectionModel);
    setSelectedRowIds(newSelectionModel);
  };

  const handleDeleteInvoice = (invoiceId) => {
    console.log("Deleting Invoice with ID:", invoiceId);
    dispatch(deleteInvoice(invoiceId));
  };

  // console.log(selectedRowIds);



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
                    value={selectedStatus || ""}
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Paid">Paid</MenuItem>
                    <MenuItem value="Downloaded">Downloaded</MenuItem>
                    <MenuItem value="Draft">Draft</MenuItem>
                    <MenuItem value="Partial Payment">Partial Payment</MenuItem>
                    <MenuItem value="Past Due">Past Due</MenuItem>
                    <MenuItem value="Sent">Sent</MenuItem>
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
                  <div
                    ref={wrapperRef}
                    style={{ position: "relative", zIndex: "1000" }}
                  >
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
                        disabled={selectedRowIds.length === 0}
                        onChange={handleChangeActions}
                        value={selectedAction}
                      >
                        <MenuItem value="delete">Delete</MenuItem>
                        <MenuItem value="edit">Edit</MenuItem>
                        <MenuItem value="send">Send</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <TextField
                      id="search-invoice"
                      placeholder="Search Invoice"
                      value={searchTerm}
                      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
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
                  rows={filteredRows}
                  columns={[
                    {
                      field: "checkbox",
                      headerName: " ",
                      sortable: false,
                      width: 50,
                      renderHeader: (params) => (
                        <Checkbox
                          indeterminate={
                            selectedRowIds.length > 0 &&
                            selectedRowIds.length < filteredRows.length
                          }
                          checked={
                            filteredRows.length > 0 &&
                            selectedRowIds.length === filteredRows.length
                          }
                          onChange={handleSelectAllClick}
                        />
                      ),
                      renderCell: (params) => (
                        <Checkbox
                          checked={selectedRowIds.includes(params.row.id)}
                          onChange={() => handleCheckboxChange(params.row.id)}
                        />
                      ),
                      disableColumnMenu: true,
                    },
                    {
                      field: "id",
                      headerName: "#ID",
                      width: 80,
                      headerClassName: "data-grid-header-class",
                      renderCell: (params) => (
                        <div style={{ textAlign: "center" }}>
                          {params.value}
                        </div>
                      ),
                    },
                    {
                      field: "status",
                      headerName: <StatusIcon />,
                      width: 100,
                      renderCell: (params) => (
                        <div
                          style={{ marginTop: "0.5rem", textAlign: "center" }}
                        >
                          {statusIcons[params.value]}
                        </div>
                      ),
                    },
                    {
                      field: "client",
                      headerName: "CLIENT",
                      width: 225,
                      renderCell: ClientCell,
                    },
                    {
                      field: "total",
                      headerName: "TOTAL",
                      width: 110,
                      renderCell: (params) => (
                        <div style={{ textAlign: "center" }}>
                          {params.value}
                        </div>
                      ),
                    },
                    {
                      field: "issuedDate",
                      headerName: "ISSUED DATE",
                      width: 160,
                      renderCell: (params) => (
                        <div style={{ textAlign: "center" }}>
                          {params.value}
                        </div>
                      ),
                    },
                    {
                      field: "balance",
                      headerName: "BALANCE",
                      width: 130,
                      renderCell: (params) => (
                        <div style={{ textAlign: "center" }}>
                          {params.value}
                        </div>
                      ),
                    },
                    {
                      field: "actions",
                      headerName: "ACTIONS",
                      width: 180,
                      renderCell: (params) => <ActionsCell id={params.row.id} />,
                    },
                  ]}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  // checkboxSelection
                  onSelectionModelChange={handleSelectionChange}
                  selectionModel={selectedRowIds}
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
