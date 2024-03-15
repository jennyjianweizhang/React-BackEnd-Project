import React, { useState } from "react";
import {
  Avatar,
  Chip,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const customerData = [
  {
    id: 1,
    customerName: "Henry Barnes",
    customerEmail: "jok@puc.co.uk",
    amount: "$459.65",
    status: "Paid",
    statusColor: "rgb(113, 221, 55)",
    bgcolor: "rgb(113, 221, 55, 0.16)",
    paymentMethod: "Mastercard",
    avatarSrc: "http://127.0.0.1:8000/avatars/avatar-1.png",
    cardSrc: "http://127.0.0.1:8000/cards/mastercard-light.png",
  },
  {
    id: 2,
    customerName: "Herman Holland",
    customerEmail: "sami@lelo.com",
    amount: "$93.81",
    status: "Pending",
    statusColor: "rgb(255, 171, 0)",
    bgcolor: "rgb(255, 171, 0, 0.16)",
    paymentMethod: "Visa",
    avatarSrc: "http://127.0.0.1:8000/avatars/avatar-3.png",
    cardSrc: "http://127.0.0.1:8000/cards/visa-light.png",
  },
  {
    id: 3,
    customerName: "Hallie Warner",
    customerEmail: "initus@odemi.com",
    amount: "$934.34",
    status: "Pending",
    statusColor: "rgb(255, 171, 0)",
    bgcolor: "rgb(255, 171, 0, 0.16)",
    paymentMethod: "Visa",
    avatarSrc: "http://127.0.0.1:8000/avatars/avatar-5.png",
    cardSrc: "http://127.0.0.1:8000/cards/visa-light.png",
  },
  {
    id: 4,
    customerName: "John Davidson",
    customerEmail: "tum@upkesja.gov",
    amount: "$794.97",
    status: "Paid",
    statusColor: "rgb(113, 221, 55)",
    bgcolor: "rgb(113, 221, 55, 0.16)",
    paymentMethod: "Paypal",
    avatarSrc: "http://127.0.0.1:8000/avatars/avatar-7.png",
    cardSrc: "http://127.0.0.1:8000/cards/paypal-light.png",
  },
  {
    id: 5,
    customerName: "Cora Schmidt",
    customerEmail: "wipare@tin.com",
    amount: "$19.49",
    status: "Paid",
    statusColor: "rgb(113, 221, 55)",
    bgcolor: "rgb(113, 221, 55, 0.16)",
    paymentMethod: "Mastercard",
    avatarSrc: "http://127.0.0.1:8000/avatars/avatar-9.png",
    cardSrc: "http://127.0.0.1:8000/cards/mastercard-light.png",
  },
  {
    id: 6,
    customerName: "Betty Ross",
    customerEmail: "nur@kaomor.edu",
    amount: "$636.27",
    status: "Failed",
    statusColor: "rgb(255, 62, 29)",
    bgcolor: "rgb(255, 62, 29, 0.16)",
    paymentMethod: "Paypal",
    avatarSrc: "http://127.0.0.1:8000/avatars/avatar-2.png",
    cardSrc: "http://127.0.0.1:8000/cards/mastercard-light.png",
  },
];

const CustomerPaid = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid>
      <TableContainer component={Paper} elevation={6}>
        <Table>
          <TableHead>
            <TableRow sx={{ height: "5.3rem" }}>
              <TableCell>Customer</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Paid By</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerData.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Avatar
                        src={customer.avatarSrc}
                        alt={customer.customerName}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>{customer.customerName}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {customer.customerEmail}
                      </Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>{customer.amount}</TableCell>
                <TableCell>
                  <Chip
                    label={customer.status}
                    sx={{
                      color: customer.statusColor,
                      bgcolor: customer.bgcolor,
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Avatar
                    src={customer.cardSrc}
                    alt={customer.paymentMethod}
                    variant="rounded"
                    sx={{ width: "60px" }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={(event) => handleClick(event, customer.id)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <span
                        style={{ marginRight: "0.5rem", marginTop: "0.2rem" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          fontSize="20"
                          className="iconify iconify--bx"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19 7h-1V2H6v5H5c-1.654 0-3 1.346-3 3v7c0 1.103.897 2 2 2h2v3h12v-3h2c1.103 0 2-.897 2-2v-7c0-1.654-1.346-3-3-3zM8 4h8v3H8V4zm8 16H8v-4h8v4zm4-3h-2v-3H6v3H4v-7c0-.551.449-1 1-1h14c.552 0 1 .449 1 1v7z"
                          ></path>
                          <path fill="currentColor" d="M14 10h4v2h-4z"></path>
                        </svg>
                      </span>
                      View Transaction
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <span
                        style={{ marginRight: "0.5rem", marginTop: "0.2rem" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          fontSize="20"
                          className="iconify iconify--bx"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
                          ></path>
                        </svg>
                      </span>
                      Customer Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <span
                        style={{ marginRight: "0.5rem", marginTop: "0.2rem" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          fontSize="20"
                          className="iconify iconify--bx"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z"
                          ></path>
                        </svg>
                      </span>
                      Delete History
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default CustomerPaid;
