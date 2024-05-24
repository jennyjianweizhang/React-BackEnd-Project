import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ItemManager() {
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
    <Grid container>
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            marginTop: 2,
            padding: 2,
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "100%",
          }}
        >
         
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography sx={{ flex: 1 }}>Item</Typography>
            <Typography sx={{ flex: 1 }}>Cost</Typography>
            <Typography sx={{ flex: 1 }}>Hours</Typography>
            <Typography sx={{ flex: 1 }}>Price</Typography>
          </Box>
          <Grid container spacing={2}>
            {/* Item Name and Description */}
            <Grid item xs={12} sm={6}>
              <Typography sx={{ display: { sm: "none" } }}>Item</Typography>
              <FormControl fullWidth>
                <Select
                  value={item.name}
                  onChange={handleChange(item.id, "name")}
                  displayEmpty
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
                sx={{ mt: 1 }}
              />
            </Grid>
            {/* Cost and Discount */}
            <Grid item xs={6} sm={2}>
              <Typography sx={{ display: { sm: "none" } }}>Cost</Typography>
              <TextField
                fullWidth
                label="Cost"
                type="number"
                value={item.cost}
                onChange={handleChange(item.id, "cost")}
              />
              <Typography variant="body2" sx={{ mt: 2 }}>
                Discount: 0%
              </Typography>
            </Grid>
            {/* Hours */}
            <Grid item xs={6} sm={2}>
              <Typography sx={{ display: { sm: "none" } }}>Hours</Typography>
              <TextField
                fullWidth
                label="Hours"
                type="number"
                value={item.hours}
                onChange={handleChange(item.id, "hours")}
              />
            </Grid>
            {/* Calculated Price */}
            <Grid item xs={6} sm={1}>
              <Typography sx={{ display: { sm: "none" }, mt: 1 }}>
                Price
              </Typography>
              <Typography sx={{ mt: { xs: 1, sm: 4.2 } }}>
                ${item.hours * item.cost}.00
              </Typography>
            </Grid>
            {/* Delete Button */}
            <Grid item xs={6} sm={1}>
              <IconButton
                onClick={() => handleRemoveItem(item.id)}
                aria-label="delete"
                sx={{ mt: { xs: 1, sm: 2 } }}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      ))}

      <Grid item xs={12}>
        <Button
          onClick={handleAddItem}
          sx={{
            mt: 4,
            bgcolor: "rgb(105, 108, 255)",
            color: "rgb(255, 255, 255)",
            "&:hover": {
              bgcolor: "rgb(95, 98, 220)",
              color: "rgb(255, 255, 255)",
            },
          }}
        >
          Add Item
        </Button>
      </Grid>
    </Grid>
  );
}

export default ItemManager;
