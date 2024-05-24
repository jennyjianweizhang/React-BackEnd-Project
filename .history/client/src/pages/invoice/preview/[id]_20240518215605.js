import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  InputAdornment,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Divider,
  Select,
  MenuItem,
  Drawer,
  IconButton,
  FormControl,
  InputLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import PaymentOptions from "../PaymentOptions";
import ItemManager from "../ItemManager";
import InvoiceSummary from "../InvoiceSummary";

const preview = () => {
  const [issueDate, setIssueDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [invoiceTo, setInvoiceTo] = useState("");
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [paymentDrawerOpen, setPaymentDrawerOpen] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    companName: "",
    email: "",
    address: "",
    country: "USA",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    companyName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });
  const [paymentNote, setPaymentNote] = useState("");
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().slice(0, 10));
  const [choosePaymentMethod, setChoosePaymentMethod] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState("")

  const permanentCustomers = useSelector(
    (state) => state.invoicesData?.invoice || []
  );

  const [tempCustomers, setTempCustomers] = useState([]);

  const allCustomers = [...permanentCustomers, ...tempCustomers];

  const handleSelectCustomer = (event) => {
    const selectedCustomer = allCustomers.find(
      (cust) => cust.client === event.target.value
    );
    if (selectedCustomer) {
      setInvoiceTo(selectedCustomer.client);
      setCustomer({
        name: selectedCustomer.client,
        companyName: selectedCustomer.companyName,
        email: selectedCustomer.email,
        address: selectedCustomer.address,
        country: selectedCustomer.country || "USA",
        phoneNumber: selectedCustomer.phoneNumber,
      });
    }
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidPhone = (phone) => {
    const regex =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    return regex.test(phone);
  };
  // prop identifies which property of the customer state object updated
  const handleInputChange = (prop) => (event) => {
    const { value } = event.target;
    let errorMsg = "";
    if (prop === "email" && value && !isValidEmail(value)) {
      errorMsg = "Invalid email address";
    } else if (prop === "contactNumber" && value && !isValidPhone(value)) {
      errorMsg = "Invalid phone number";
    } else if (!value) {
      errorMsg = "This field is required";
    }

    setCustomer({ ...customer, [prop]: value });
    setErrors({ ...errors, [prop]: errorMsg });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Customer data submitted: ", customer);
    const formIsValid =
      // checks if every value in the errors object is an empty string
      Object.values(errors).every((x) => x === "") &&
      Object.values(customer).every((x) => x !== "");
    if (!formIsValid) {
      console.log("Form is invalid: ", errors);
      return;
    }
    const newCustomer = {
      ...customer,
      client: customer.name,
    };

    if (!newCustomer.client || typeof newCustomer.client !== "string") {
      console.error("Invalid customer data", newCustomer);
      return;
    }

    setTempCustomers((prev) => [...prev, newCustomer]);
    setDrawerOpen(false);
    setCustomer({
      name: "",
      companyName: "",
      email: "",
      address: "",
      country: "USA",
      phoneNumber: "",
    });
    setInvoiceTo(customer.name);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const closeDrawer = () => setDrawerOpen(false);

  const togglePaymentDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setPaymentDrawerOpen(open);
  };

  const closePaymentDrawer = () => setPaymentDrawerOpen(false);

  // --------payment----//
  const [paymentMethod, setPaymentMethod] = useState("Debit Card");
  const [paymentTerms, setPaymentTerms] = useState(true);
  const [clientNotes, setClientNotes] = useState(false);
  const [paymentStub, setPaymentStub] = useState(false);

  //-----router----//
  const router = useRouter();
  const { id } = router.query;
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    if (id && permanentCustomers.length > 0) {
      const foundInvoice = permanentCustomers.find(
        (inv) => inv.id === parseInt(id)
      );
      setInvoice(foundInvoice);
    }
  }, [id, permanentCustomers]);

  useEffect(() => {
    if (invoice) {
      setIssueDate(new Date(invoice.issuedDate));
      setDueDate(new Date(invoice.dueDate));
      setInvoiceTo(invoice.client);

      const customerDetails = allCustomers.find(
        (cust) => cust.client === invoice.client
      );
      if (customerDetails) {
        setCustomer({
          name: customerDetails.client,
          companyName: customerDetails.companyName,
          email: customerDetails.email,
          address: customerDetails.address,
          country: customerDetails.country || "USA",
          phoneNumber: customerDetails.phoneNumber,
        });
      }
    }
  }, [invoice]);

  useEffect(() => {
    if (paymentDrawerOpen && invoice) {
      setCustomer(current => ({ ...current, balance: invoice.balance }));
    }
  }, [paymentDrawerOpen, invoice]); 

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8} xl={9}>
        <Card elevation={6}>
          <CardContent sx={{ height: "170vh" }}>
            <Grid container>
              <Grid item xs={12} xl={6}>
                <Box></Box>
                
                <Box sx={{ padding: 2, mt: 5 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h5" sx={{ marginBottom: 2 }}>
                        Invoice
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ mt: 8, mb: 2, color: "rgba(50, 71, 92, 0.6)" }}
                      >
                        Date Issued:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ mt: 10, color: "rgba(50, 71, 92, 0.6)" }}
                      >
                        Date Due:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="invoice-number"
                        variant="outlined"
                        size="small"
                        value={id}
                        disabled
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">#</InputAdornment>
                          ),
                        }}
                        fullWidth
                        sx={{
                          marginBottom: 2,
                          mt: 0,
                          ml: -50,
                          width: "12rem",
                          display: "block",
                        }}
                      />
                      <Box sx={{ ml: -50 }}>
                        <DatePicker
                          selected={issueDate}
                          onChange={(date) => setIssueDate(date)}
                          dateFormat="MM/dd/yyyy"
                          customInput={
                            <TextField
                              sx={{
                                marginBottom: 2,

                                width: "12rem",
                                display: "block",
                              }}
                              fullWidth
                            />
                          }
                        />
                      </Box>
                      <Box sx={{ ml: -50 }}>
                        <DatePicker
                          selected={dueDate}
                          onChange={(date) => setDueDate(date)}
                          dateFormat="MM/dd/yyyy"
                          customInput={
                            <TextField sx={{ mt: 0, width: "12rem" }} />
                          }
                        />
                      </Box>

                      <Divider sx={{ mt: 8, mb: 2, ml: -82, width: "40rem" }} />
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body1" gutterBottom>
                          Invoice To:
                        </Typography>
                        <Select
                          labelId="invoice-to-label"
                          id="invoice-to-select"
                          value={invoiceTo}
                          label="Invoice To"
                          onChange={handleSelectCustomer}
                        >
                          <MenuItem onClick={() => setDrawerOpen(true)}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <AddIcon /> Add New Customer
                            </Box>
                          </MenuItem>
                          {allCustomers.map((cust, index) => (
                            <MenuItem key={index} value={cust.client}>
                              {cust.client}
                            </MenuItem>
                          ))}
                        </Select>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                          <Grid item xs={12}>
                            <Typography variant="body1">
                              {customer.companyName}
                            </Typography>
                            <Typography variant="body1">
                              {customer.address}
                            </Typography>
                            <Typography variant="body1">
                              {customer.phoneNumber}
                            </Typography>
                            <Typography variant="body1">
                              {customer.email}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Drawer
                          anchor="right"
                          open={isDrawerOpen}
                          onClose={toggleDrawer(false)}
                          sx={{
                            "& .MuiDrawer-paper": {
                              position: "absolute",
                              width: 380,
                              boxSizing: "border-box",
                              padding: 4,
                            },
                          }}
                        >
                          <Box
                            p={2}
                            width="100%"
                            role="presentation"
                            className="sidebar-header"
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "1rem",
                              mt: "-0.5rem",
                            }}
                          >
                            <Typography variant="body1" sx={{ ml: "-0.5rem" }}>
                              Add New Customer
                            </Typography>
                            <Box sx={{ mr: "-1rem" }}>
                              <IconButton size="small" onClick={closeDrawer}>
                                <CloseIcon />
                              </IconButton>
                            </Box>
                          </Box>
                          <Divider />
                          <form onSubmit={handleSubmit}>
                            <TextField
                              error={!!errors.name}
                              helperText={errors.name}
                              fullWidth
                              label="Name"
                              variant="outlined"
                              value={customer.name}
                              onChange={handleInputChange("name")}
                              sx={{ mt: 4, mb: 6 }}
                            />
                            <TextField
                              error={!!errors.companyName}
                              helperText={errors.companyName}
                              fullWidth
                              label="Company"
                              variant="outlined"
                              value={customer.companyName}
                              onChange={handleInputChange("company")}
                              sx={{ mb: 6 }}
                            />
                            <TextField
                              error={!!errors.email}
                              helperText={errors.email}
                              fullWidth
                              label="Email"
                              type="email"
                              variant="outlined"
                              value={customer.email}
                              onChange={handleInputChange("email")}
                              sx={{ mb: 6 }}
                            />
                            <TextField
                              error={!!errors.address}
                              helperText={errors.address}
                              fullWidth
                              label="Address"
                              variant="outlined"
                              multiline
                              rows={4}
                              value={customer.address}
                              onChange={handleInputChange("address")}
                              sx={{ mb: 6 }}
                            />
                            <FormControl fullWidth sx={{ mb: 6 }}>
                              <InputLabel>Country</InputLabel>
                              <Select
                                value={customer.country}
                                label="Country"
                                onChange={handleInputChange("country")}
                              >
                                <MenuItem value="USA">USA</MenuItem>
                                <MenuItem value="Russia">Russia</MenuItem>
                                <MenuItem value="Austrilia">Austrilia</MenuItem>
                                <MenuItem value="Canada">Canada</MenuItem>
                                <MenuItem value="UK">UK</MenuItem>
                              </Select>
                            </FormControl>
                            <TextField
                              error={!!errors.phoneNumber}
                              helperText={errors.phoneNumber}
                              fullWidth
                              label="Contact Number"
                              type="tel"
                              variant="outlined"
                              value={customer.phoneNumber}
                              onChange={handleInputChange("contactNumber")}
                              sx={{ mb: 6 }}
                            />
                            <Button
                              type="submit"
                              variant="contained"
                              sx={{ mr: 1 }}
                            >
                              Add
                            </Button>
                            <Button
                              variant="outlined"
                              onClick={toggleDrawer(false)}
                            >
                              Cancel
                            </Button>
                          </form>
                        </Drawer>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Typography variant="body1" gutterBottom>
                          Bill To:
                        </Typography>
                        <Table size="small">
                          <TableBody>
                            <TableRow>
                              <TableCell>Total Due:</TableCell>
                              <TableCell>$12,110.55</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Bank Name:</TableCell>
                              <TableCell>American Bank</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Country:</TableCell>
                              <TableCell>United States</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>IBAN:</TableCell>
                              <TableCell>ETD95476213874685</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>SWIFT Code:</TableCell>
                              <TableCell>BR91905</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Grid>
                    </Grid>
                    <Divider sx={{ mt: 8, mb: 8, width: "40rem" }} />

                    <ItemManager />
                    <InvoiceSummary />
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} xl={3}>
        <Card elevation={6}>
          <CardContent>
            <Button
              variant="contained"
              fullWidth
              startIcon={<SendIcon />}
              sx={{ mb: 2 }}
            >
              Send Invoice
            </Button>
            <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
              Preview
            </Button>
            <Button variant="outlined" fullWidth>
              Save
            </Button>
            <Button
              variant="outlined"
              sx={{
                bgcolor: "rgb(113, 221, 55)",
                mt: 2,
                color: "white",
                borderColor: "rgb(113, 221, 55)",
                '&:hover': {
                  bgcolor: "rgb(130, 250, 77)", 
                  borderColor: "rgb(130, 250, 77)" 
                }
              }}
              fullWidth
              onClick={() => setPaymentDrawerOpen(true)}
            >
              $ Add Payment
            </Button>
            <Drawer
              anchor="right"
              open={paymentDrawerOpen}
              onClose={togglePaymentDrawer(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  position: "absolute",
                  width: 380,
                  boxSizing: "border-box",
                  padding: 4,
                },
              }}
            >
              <Box
                p={2}
                width="100%"
                role="presentation"
                className="sidebar-header"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem",
                  mt: "-0.5rem",
                }}
              >
                <Typography variant="body1" sx={{ ml: "-0.5rem" }}>
                  Add Payment
                </Typography>
                <Box sx={{ mr: "-1rem" }}>
                  <IconButton size="small" onClick={closePaymentDrawer}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>
              <Divider />
              <form>
                <TextField
                  fullWidth
                  label="Invoice Balance"
                  variant="outlined"
                  value={customer.balance}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mt: 4, mb: 6 }}
                />
                <TextField
                  fullWidth
                  label="Payment Amount"
                  variant="outlined"
                  type="number"
                  value={paymentAmount}
                  onChange={(e)=>setPaymentAmount(e.target.value)}
                  sx={{ mb: 6 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography>$</Typography>
                      </InputAdornment>
                    )
                  }}
                />
               <TextField
                    fullWidth
                    type="date"
                    label="Payment Date"
                    value={paymentDate}
                    onChange={(e) => setPaymentDate(e.target.value)}
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    sx={{ mb: 6 }}
                  />
                <FormControl fullWidth sx={{ mb: 6 }}>
                  <InputLabel>Payment Method</InputLabel>
                  <Select
                    value={choosePaymentMethod}
                    label="Payment Method"
                    onChange={(e) => setChoosePaymentMethod(e.target.value)}
                  >
                    <MenuItem value="Cash">Cash</MenuItem>
                    <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                    <MenuItem value="Credit Card">Credit Card</MenuItem>
                    <MenuItem value="Debit Card">Debit Card</MenuItem>
                    <MenuItem value="Paypal">Paypal</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                    fullWidth
                    label="Internal Payment Note"
                    value={paymentNote}
                    onChange={(e) => setPaymentNote(e.target.value)}
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                <Button type="submit" variant="contained" sx={{ mr: 1, mt:2 }} onClick={togglePaymentDrawer(false)}>
                  Send
                </Button>
                <Button variant="outlined" onClick={togglePaymentDrawer(false)} sx={{mt:2}}>
                  Cancel
                </Button>
              </form>
            </Drawer>
          </CardContent>
        </Card>
        <PaymentOptions
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          paymentTerms={paymentTerms}
          setPaymentTerms={setPaymentTerms}
          clientNotes={clientNotes}
          setClientNotes={setClientNotes}
          paymentStub={paymentStub}
          setPaymentStub={setPaymentStub}
        />
      </Grid>
    </Grid>
  );
};

export default preview;
