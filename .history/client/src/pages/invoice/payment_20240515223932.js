import React from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Switch } from '@mui/material';

function PaymentOptions({ paymentMethod, setPaymentMethod, paymentTerms, setPaymentTerms, clientNotes, setClientNotes, paymentStub, setPaymentStub }) {
  
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel id="payment-select-label">Accept payments via</InputLabel>
        <Select
          labelId="payment-select-label"
          id="payment-select"
          value={paymentMethod}
          label="Accept payments via"
          onChange={handlePaymentMethodChange}
        >
          <MenuItem value="Debit Card">Debit Card</MenuItem>
          <MenuItem value="Credit Card">Credit Card</MenuItem>
          <MenuItem value="PayPal">PayPal</MenuItem>
        </Select>
      </FormControl>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={paymentTerms} onChange={(e) => setPaymentTerms(e.target.checked)} />}
          label="Payment Terms"
        />
        <FormControlLabel
          control={<Switch checked={clientNotes} onChange={(e) => setClientNotes(e.target.checked)} />}
          label="Client Notes"
        />
        <FormControlLabel
          control={<Switch checked={paymentStub} onChange={(e) => setPaymentStub(e.target.checked)} />}
          label="Payment Stub"
        />
      </FormGroup>
    </Grid>
  );
}

export default PaymentOptions;
