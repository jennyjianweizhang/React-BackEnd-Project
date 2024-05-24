import React, { useState, useEffecy } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  Drawer,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

const InvoiceDrawer = () => {
    const [customer, setCustomer] = useState({
        name: "",
        companName: "",
        email: "",
        address: "",
        country: "USA",
        phoneNumber: "",
      });
  const [invoiceDrawerOpen, setInvoiceDrawerOpen] = useState(false);
  const [invoiceSentFrom, setInvoiceSentFrom] = useState("");
  const [invoiceSentTo, setInvoiceSentTo] = useState("qConsolidated@email.com");
  const [invoiceSubject, setInvoiceSubject] = useState(
    "Invoice of purchased Admin Templates"
  );
  const [invoiceMessage, setInvoiceMessage] = useState(`Dear Queen Consolidated,
  
    Thank you for your business, always a pleasure to work with you!
    
    We have generated a new invoice in the amount of $95.59
    
    We would appreciate payment of this invoice by 05/11/2024`);
  const toggleInvoiceDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setInvoiceDrawerOpen(open);
  };

  const closeInvoiceDrawer = () => setInvoiceDrawerOpen(false);

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
  return (
    <Grid item xs={12}>
      <Button
        variant="contained"
        fullWidth
        startIcon={<SendIcon />}
        sx={{ mb: 2 }}
        onClick={() => setInvoiceDrawerOpen(true)}
      >
        Send Invoice
      </Button>
      <Drawer
        anchor="right"
        open={invoiceDrawerOpen}
        onClose={toggleInvoiceDrawer(false)}
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
            Send Invoice
          </Typography>
          <Box sx={{ mr: "-1rem" }}>
            <IconButton size="small" onClick={closeInvoiceDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <Divider />
        <form>
          <TextField
            fullWidth
            label="From"
            variant="outlined"
            value={invoiceSentFrom || customer.email}
            onChange={(e) => setInvoiceSentFrom(e.target.value)}
            sx={{ mt: 4, mb: 6 }}
          />
          <TextField
            fullWidth
            label="To"
            variant="outlined"
            value={invoiceSentTo}
            onChange={(e) => setInvoiceSentTo(e.target.value)}
            sx={{ mb: 6 }}
          />
          <TextField
            fullWidth
            label="Subject"
            value={invoiceSubject}
            onChange={(e) => setInvoiceSubject(e.target.value)}
            margin="normal"
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 6 }}
          />
          <TextField
            fullWidth
            label="Message"
            value={invoiceMessage}
            onChange={(e) => setInvoiceMessage(e.target.value)}
            multiline
            rows={4}
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mr: 1, mt: 2 }}
            onClick={(e) => {
              e.preventDefault();
              closeInvoiceDrawer();
            }}
          >
            Send
          </Button>
          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            onClick={(e) => {
              e.preventDefault();
              closeInvoiceDrawer();
            }}
          >
            Cancel
          </Button>
        </form>
      </Drawer>
    </Grid>
  );
};

export default InvoiceDrawer;
