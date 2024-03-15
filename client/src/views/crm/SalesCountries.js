import React, { useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SalesCountries = ({ datas }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid>
      <Card>
        <CardHeader
          title={<Typography variant="h6">Sales by Countries</Typography>}
          action={
            <IconButton aria-haspopup="true" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          subheader={
            <Typography
              variant="body1"
              style={{
                marginTop: "5px",
                fontSize: "14px",
                color: "rgba(50, 71, 92, 0.6)",
              }}
            >
              Monthly Sales Overview
            </Typography>
          }
          sx={{ marginTop: 2 }}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Last 28 Days</MenuItem>
          <MenuItem onClick={handleClose}>Last Month</MenuItem>
          <MenuItem onClick={handleClose}>Last Year</MenuItem>
        </Menu>
        <CardContent>
          {datas.map((data, index) => (
            <Box key={index} display="flex" alignItems="center" mb={1.9}>
              <Avatar
                sx={{
                  width: 45,
                  height: 45,
                  marginRight: 2,
                  backgroundImage: `url(${data.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                src={data.image}
              />
              <Box ml={2} mb={2}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", color: "rgba(50, 71, 92, 0.6)" }}
                >
                  {data.title}
                  {data.increase && (
                    <span style={{ color: "rgb(113, 221, 55)", marginLeft:"10px" }}>{data.increase}</span>
                  )}
                  {data.decrease && (
                    <span style={{ color: "rgb(255, 62, 29)", marginLeft:"10px" }}>{data.decrease}</span>
                  )}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    color: "rgba(50, 71, 92, 0.38)",
                    fontWeight: 500,
                  }}
                >
                  {data.subtitle}
                </Typography>
              </Box>
              <Box ml="auto" sx={{ display: "flex" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    color: "rgba(50, 71, 92, 0.6)",
                    fontWeight: 500,
                  }}
                >
                  {data.amount}
                </Typography>
              </Box>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SalesCountries;
