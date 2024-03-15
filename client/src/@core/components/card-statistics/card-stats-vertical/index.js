import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import React, { useState } from "react";

// ** Icons Imports
import DotsVertical from "mdi-material-ui/DotsVertical";

const CardStatsVertical = (props) => {
  // ** Props
  const {
    title,
    subtitle,
    color,
    icon,
    stats,
    trend,
    trendNumber,
    subtitleColor,
  } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            marginBottom: 5.5,
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              marginRight: 4,
              color: "common.white",
              backgroundColor: "transparent",
              borderRadius: 5,
            }}
          >
            {icon}
          </Box>
          <IconButton
            size="small"
            aria-label="settings"
            className="card-more-options"
            sx={{ color: "text.secondary" }}
            onClick={handleClick}
          >
            <DotsVertical />
          </IconButton>
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
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: "rgba(50, 71, 92, 0.6)",
            fontSize: "1rem",
            mt: -2,
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            marginTop: 1.5,
            display: "flex",
            flexWrap: "wrap",
            marginBottom: 1.5,
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              fontSize: " 1.4993rem",
              color: "rgba(50, 71, 92, 0.87)",
            }}
          >
            {stats}
          </Typography>
          <Typography
            component="sup"
            variant="caption"
            sx={{ color: trend === "positive" ? "success.main" : "error.main" }}
          >
            {trendNumber}
          </Typography>
        </Box>
        <Typography variant="caption" sx={{ color: subtitleColor }}>
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardStatsVertical;

CardStatsVertical.defaultProps = {
  color: "primary",
  trend: "positive",
};
