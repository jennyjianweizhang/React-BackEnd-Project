import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Divider
} from '@mui/material';

function InvoiceSummary() {
  const [salesperson, setSalesperson] = useState("");
  const [note, setNote] = useState("");
  const [thanksnote, setThanksNote] = useState("");

  // Dummy values for demonstration; these could be props or state driven
  const subtotal = 0; // Total before discounts and taxes
  const discount = 0; 
  const tax = 0; 
  const total = subtotal - discount + tax; 

  return (
    <Grid item xs={12}>
      <Divider sx={{ mt: 8, mb: 8, width: "100%" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ padding: 2 }}>
            <TextField
              fullWidth
              label="Salesperson"
              placeholder="Tommy Shelby"
              value={salesperson}
              onChange={(e) => setSalesperson(e.target.value)}
              variant="outlined"
              size="small"
              id="salesperson-input"
            />
            <TextField
              fullWidth
              label="Note"
              placeholder="Thanks for your business"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              variant="outlined"
              size="small"
              sx={{ marginTop: 2 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ padding: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1">Subtotal:</Typography>
              <Typography variant="body1">${subtotal.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Typography variant="body1">Discount:</Typography>
              <Typography variant="body1">${discount.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Typography variant="body1">Tax:</Typography>
              <Typography variant="body1">${tax.toFixed(2)}</Typography>
            </Box>
            <Divider sx={{ mt: 3, width: "100%" }} />
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Typography variant="body1">Total:</Typography>
              <Typography variant="body1">${total.toFixed(2)}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 4, mb: 8, width: "100%" }} />
      <Box sx={{ width: "100%" }}>
        <TextField
          fullWidth
          label="Note"
          placeholder="Thank You!"
          multiline
          rows={2}
          value={thanksnote}
          onChange={(e) => setThanksNote(e.target.value)}
          variant="outlined"
        />
      </Box>
    </Grid>
  );
}

export default InvoiceSummary;
