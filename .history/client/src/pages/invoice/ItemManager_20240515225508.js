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
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            marginTop: 2,
            padding: 2,
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "100%", // Adjusted to full width for responsiveness
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography>Item</Typography>
            <Typography>Cost</Typography>
            <Typography>Hours</Typography>
            <Typography>Price</Typography>
            <IconButton
              onClick={() => handleRemoveItem(item.id)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Select
                  value={item.name}
                  onChange={handleChange(item.id, "name")}
                >
                  <MenuItem value="App Design">App Design</MenuItem>
                  <MenuItem value="Web Development">Web Development</MenuItem>
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
            <Grid item xs={6} sm={2}>
              <TextField
                fullWidth
                label="Cost"
                type="number"
                value={item.cost}
                onChange={handleChange(item.id, "cost")}
              />
            </Grid>
            <Grid item xs={6} sm={2}>
              <TextField
                fullWidth
                label="Hours"
                type="number"
                value={item.hours}
                onChange={handleChange(item.id, "hours")}
              />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Typography sx={{ mt: 3 }}>
                ${item.hours * item.cost}.00
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
      <Grid item xs={12}>
        <button
          onClick={handleAddItem}
          sx={{
            bgcolor: "rgb(105, 108, 255)",
            color: "rgb(255, 255, 255)",
            "&:hover": {
              bgcolor: "rgb(95, 98, 220)",
              color: "rgb(255, 255, 255)",
            },
          }}
        >
          Add Item
        </button>
      </Grid>
    </Grid>
  );
}

export default ItemManager;
