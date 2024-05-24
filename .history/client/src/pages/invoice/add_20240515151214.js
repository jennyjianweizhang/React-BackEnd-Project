import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Add = () => {
  const [issueDate, setIssueDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [invoiceTo, setInvoiceTo] = useState("");
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    company: "",
    email: "",
    address: "",
    country: "USA",
    contactNumber: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    company: "",
    email: "",
    address: "",
    contactNumber: "",
  });

  const permanentCustomers = useSelector(
    (state) => state.invoicesData?.invoice || []
  );
  console.log(permanentCustomers);

  const [tempCustomers, setTempCustomers] = useState([]);

  const allCustomers = [...permanentCustomers, ...tempCustomers];

  const handleSelectCustomer = (event) => {
    const selectedCustomer = allCustomers.find(
      (cust) => cust.client === event.target.value
    );
    if (selectedCustomer) {
      setInvoiceTo(selectedCustomer.client);
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
      company: "",
      email: "",
      address: "",
      country: "USA",
      contactNumber: "",
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

  // ---------Add Item------//
  const [items, setItems] = useState([
    {
      id: 1,
      name: "App Design",
      description: "Customization & Bug Fixes",
      cost: 24,
      hours: 1,
    },
  ]);

  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      name: "",
      description: "",
      cost: 0,
      hours: 0,
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleChange = (id, field) => (event) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, [field]: event.target.value } : item
    );
    setItems(newItems);
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8} xl={9}>
        <Card elevation={6}>
          <CardContent sx={{ height: "200vh" }}>
            <Grid container>
              <Grid item xs={12} xl={6}>
                <div style={{ display: "flex", padding: 2, marginLeft: 10 }}>
                  <svg
                    width="22"
                    height="32"
                    viewBox="0 0 55 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#696CFF"
                      d="M30.1984 0.0144043C24.8945 0.425781 25.2534 6.16968 26.6435 7.65326C22.693 10.3649 13.1875 16.8867 6.76944 21.2803C1.21531 25.0824 -0.842975 34.6064 1.11159 40.8262C3.00952 46.8658 12.4904 51.3615 17.5337 52.7256C17.5337 52.7256 11.7188 56.0269 6.60358 60.0482C1.48831 64.0695 -0.622615 69.3436 3.06836 75.262C6.75933 81.1805 12.725 80.761 17.5257 78.6229C22.3264 76.4848 32.1683 69.1692 37.9402 65.1633C42.7282 61.5411 43.9669 53.6444 41.7631 46.9643C39.9758 41.5468 30.0969 36.4284 25.1792 34.6064C27.1946 33.1595 32.4935 29.4242 37.129 26.0909C38.7184 30.5636 43.9998 30.212 45.6103 27.8209C47.6216 23.4326 51.8339 13.4663 53.9579 8.55175C54.8862 4.81044 52.5639 2.78457 50.2227 2.35938C46.8672 1.75 38.3222 0.960115 30.1984 0.0144043Z"
                    ></path>
                    <path
                      fill-opacity="0.2"
                      fill="#FFF"
                      d="M26.6523 7.65625C24.9492 5.625 25.3239 0.255308 30.2922 0.0105286C33.0074 0.326611 35.7804 0.62685 38.3907 0.909477C43.5904 1.47246 48.1446 1.96556 50.311 2.3748C52.7331 2.83234 54.886 5.06072 53.9543 8.61103C53.2063 10.3418 52.2075 12.6646 51.1482 15.1282C49.1995 19.6601 47.0459 24.6685 45.8717 27.3445C44.7224 29.964 39.111 31.0585 37.1137 26.0951C32.4782 29.4283 27.2884 33.1556 25.273 34.6026C24.931 34.4553 24.3074 34.2381 23.5124 33.9613C20.8691 33.0407 16.331 31.4602 13.9477 29.5966C9.61363 25.5918 11.6259 19.4662 13.1737 16.904C17.8273 13.7183 20.7417 11.7161 23.4984 9.82236C24.5437 9.10427 25.5662 8.40178 26.6523 7.65625Z"
                    ></path>
                    <path
                      fill-opacity="0.2"
                      fill="#FFF"
                      d="M17.543 52.7266C21.2241 53.9875 28.5535 57.0509 30.091 59.101C32.0129 61.6635 33.1576 64.34 29.2527 71.2039C28.5954 71.6481 27.9821 72.0633 27.4069 72.4528C22.1953 75.9817 20.1085 77.3946 16.6243 79.0531C13.5855 80.2464 6.61575 81.7103 2.66559 74.5653C-1.11764 67.7222 3.23818 62.7113 6.5963 60.065L12.1695 56.0339L14.8359 54.3477L17.543 52.7266Z"
                    ></path>
                  </svg>
                  <Typography
                    variant="h5"
                    sx={{
                      ml: 3,
                      fontWeight: 700,
                      color: "rgba(50, 71, 92, 0.87)",
                    }}
                  >
                    Sneat
                  </Typography>
                </div>
                <div style={{ marginTop: 20, padding: 2, marginLeft: 10 }}>
                  <Typography style={{ color: "rgba(50, 71, 92, 0.6" }}>
                    Office 149, 450 South Brand Brooklyn
                  </Typography>
                  <Typography style={{ color: "rgba(50, 71, 92, 0.6" }}>
                    San Diego County, CA 91905, USA
                  </Typography>
                  <Typography style={{ color: "rgba(50, 71, 92, 0.6" }}>
                    +1 (123) 456 7891, +44 (876) 543 2198
                  </Typography>
                </div>
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
                        value="5037"
                        disabled
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">#</InputAdornment>
                          ),
                        }}
                        fullWidth
                        sx={{
                          marginBottom: 2,
                          ml: -50,
                          width: "12rem",
                          display: "block",
                        }}
                      />

                      <DatePicker
                        selected={issueDate}
                        onChange={(date) => setIssueDate(date)}
                        dateFormat="MM/dd/yyyy"
                        customInput={
                          <TextField
                            sx={{
                              marginBottom: 2,
                              ml: -50,
                              width: "12rem",
                              display: "block",
                            }}
                          />
                        }
                      />
                      <DatePicker
                        selected={dueDate}
                        onChange={(date) => setDueDate(date)}
                        dateFormat="MM/dd/yyyy"
                        customInput={
                          <TextField sx={{ mt: 13, ml: -50, width: "12rem" }} />
                        }
                      />
                      <Divider sx={{ mt: 8, mb: 2, ml: -83, width: "40rem" }} />
                    </Grid>

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
                            error={!!errors.company}
                            helperText={errors.company}
                            fullWidth
                            label="Company"
                            variant="outlined"
                            value={customer.company}
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
                            error={!!errors.contactNumber}
                            helperText={errors.contactNumber}
                            fullWidth
                            label="Contact Number"
                            type="tel"
                            variant="outlined"
                            value={customer.contactNumber}
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
                    <Divider sx={{ mt: 8, mb: 2, width: "40rem" }} />
                    <Grid>
                      <Box
                        sx={{
                          marginTop: 2,
                          padding: 2,
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          width: "40rem",
                        }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <Typography sx={{ marginBottom: 2, ml: 3 }}>
                            Item
                          </Typography>
                          <Typography sx={{ marginBottom: 2, ml: 70 }}>
                            Cost
                          </Typography>
                          <Typography sx={{ marginBottom: 2, ml: 18 }}>
                            Hours
                          </Typography>
                          <Typography sx={{ marginBottom: 2, ml: 13 }}>
                            Price
                          </Typography>
                        </Box>

                        <Grid container spacing={2}>
                          {items.map((item, index) => (
                            <React.Fragment key={index}>
                              <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                  <Select
                                    value={item.name}
                                    onChange={handleChange(item.id, "name")}
                                  >
                                    <MenuItem value="App Design">
                                      App Design
                                    </MenuItem>
                                    <MenuItem value="Web Development">
                                      Web Development
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                                <TextField
                                  fullWidth
                                  multiline
                                  rows={2}
                                  value={item.description}
                                  onChange={handleChange(
                                    item.id,
                                    "description"
                                  )}
                                />
                              </Grid>
                              <Grid item xs={6} sm={2}>
                                <TextField
                                  fullWidth
                                  type="number"
                                  value={item.cost}
                                  onChange={handleChange(item.id, "cost")}
                                />
                              </Grid>
                              <Grid item xs={6} sm={2}>
                                <TextField
                                  fullWidth
                                  type="number"
                                  value={item.hours}
                                  onChange={handleChange(item.id, "hours")}
                                />
                              </Grid>
                              <Grid item xs={6} sm={1}>
                                <Typography sx={{ mt: 4.2 }}>
                                  ${item.hours * item.cost}.00
                                </Typography>
                              </Grid>
                              <Grid item xs={6} sm={1}>
                                <IconButton
                                  onClick={() => handleRemoveItem(item.id)}
                                  aria-label="delete"
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </Grid>
                              
                            </React.Fragment>
                          ))}
                        </Grid>
                      </Box>
                      
                    </Grid>
                   
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
            <Button variant="contained" fullWidth startIcon={<SendIcon />}>
              Send Invoice
            </Button>
            <Button variant="outlined" fullWidth>
              Preview
            </Button>
            <Button variant="outlined" fullWidth>
              Save
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Add;
