import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";

const PaymentOptions = ({
  paymentMethod,
  setPaymentMethod,
  paymentTerms,
  setPaymentTerms,
  clientNotes,
  setClientNotes,
  paymentStub,
  setPaymentStub,
}) => {
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Grid item xs={12}>
      {items.map((item, index) => (
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
            <Typography sx={{ marginBottom: 2, ml: 3 }}>Item</Typography>
            <Typography sx={{ marginBottom: 2, ml: 57 }}>Cost</Typography>
            <Typography sx={{ marginBottom: 2, ml: 18 }}>Hours</Typography>
            <Typography sx={{ marginBottom: 2, ml: 13 }}>Price</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <FormControl fullWidth>
                <Select
                  value={item.name}
                  onChange={handleChange(item.id, "name")}
                >
                  <MenuItem value="App Design">App Design</MenuItem>
                  <MenuItem value="Web Development">Web Development</MenuItem>
                  <MenuItem value="ABC Template">ABC Template</MenuItem>
                  <MenuItem value="App Customization">
                    App Customization
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                multiline
                rows={2}
                value={item.description}
                onChange={handleChange(item.id, "description")}
                sx={{ mt: 5 }}
              />
            </Grid>
            <Grid item xs={6} sm={2}>
              <TextField
                fullWidth
                type="number"
                value={item.cost}
                onChange={handleChange(item.id, "cost")}
              />
              <Box sx={{ mt: 4 }}>
                <Typography variant="body2">Discount:</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body2" sx={{ mr: 2 }}>
                    0%
                  </Typography>
                  <Typography variant="body2" sx={{ mr: 2 }} aria-label="Tax 1">
                    0%
                  </Typography>
                  <Typography variant="body2" aria-label="Tax 2">
                    0%
                  </Typography>
                </Box>
              </Box>
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
            <Grid
              item
              xs={6}
              sm={1}
              sx={{
                borderLeft: "1px solid rgba(50, 71, 92, 0.12)",
                ml: 10,
              }}
            >
              <IconButton
                onClick={() => handleRemoveItem(item.id)}
                aria-label="delete"
                sx={{ mt: 2 }}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Grid>
  );
};

export default PaymentOptions;
