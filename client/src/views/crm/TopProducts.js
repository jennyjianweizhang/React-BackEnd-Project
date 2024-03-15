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
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const TopProductsCard = ({ title, datas }) => {
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
          title={
            <Typography variant="h6">
              Top Products by <span style={{ color: "#696CFF" }}>{title}</span>
            </Typography>
          }
          action={
            <IconButton aria-haspopup="true" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
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
          <MenuItem onClick={handleClose}>Refresh</MenuItem>
          <MenuItem onClick={handleClose}>Share</MenuItem>
          <MenuItem onClick={handleClose}>Update</MenuItem>
        </Menu>
        <CardContent>
          {datas.map((data, index) => (
            <Box key={index} display="flex" alignItems="center" mb={1.9}>
              <Box
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
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
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
                {data.increase && (
                  <Typography
                    variant="body1"
                    ml={2}
                    sx={{
                      fontSize: "13px",
                      color: "rgb(113, 221, 55)",
                      backgroundColor: "rgba(113, 221, 55, 0.16)",
                      borderRadius: "5px",
                      paddingLeft: "7px",
                      paddingRight: "7px",
                      paddingTop: "2px",
                    }}
                  >
                    {data.increase}
                  </Typography>
                )}
                {data.decrease && (
                  <Typography
                    variant="body1"
                    ml={2}
                    sx={{
                      fontSize: "13px",
                      color: "rgb(255, 62, 29)",
                      backgroundColor: "rgba(255, 62, 29, 0.16)",
                      borderRadius: "5px",
                      paddingLeft: "7px",
                      paddingRight: "7px",
                      paddingTop: "2px",
                    }}
                  >
                    {data.decrease}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TopProductsCard;
