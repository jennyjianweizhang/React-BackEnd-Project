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
                            <Typography sx={{ marginBottom: 2, ml: 57 }}>
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
                            <Grid item xs={12} sm={5}>
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
                                  <MenuItem value="ABC Template">
                                    ABC Template
                                  </MenuItem>
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
                                <Typography variant="body2">
                                  Discount:
                                </Typography>
                                <Box
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <Typography variant="body2" sx={{ mr: 2 }}>
                                    0%
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{ mr: 2 }}
                                    aria-label="Tax 1"
                                  >
                                    0%
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    aria-label="Tax 2"
                                  >
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
