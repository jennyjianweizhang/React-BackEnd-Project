import React, { useState } from "react";
import ReactApexcharts from "src/@core/components/react-apexcharts";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SalesStats = () => {
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
      offsetY: 15,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Sales",
            formatter: function () {
              return "75%";
            },
          },
        },
      },
    },
    legend: {
      show: true,
      floating: true,
      position: "bottom",
      offsetY: 9,
      offsetX: -45,
      markers: {
        width: 10,
        height: 10,
      },
      fontSize: "14px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 400,
    },
    colors: ["rgb(113, 221, 55)", "rgba(50, 71, 92, 0.38)"],
    labels: ["Conversion Ratio", "Total requirements"],
  };

  const series = [75];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title={
              <Typography
                sx={{
                  fontSize: "20px",
                  marginTop: "10px",
                  fontWeight: 500,
                }}
              >
                Sales Stats
              </Typography>
            }
            action={
              <IconButton aria-haspopup="true" onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
            }
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
          <CardContent sx={{ marginBottom: "50px", position:'relative' }}>
            <img
              src="http://127.0.0.1:8000/cards/arrow-star.png"
              alt="arrow-star"
              style={{
                width: "72px",
                height: "53px",
                position: "absolute",
                top:'28%',
                left:'40%',
              }}
            />
            <div className="custom-radial-chart-style">
              <ReactApexcharts
                options={options}
                series={series}
                type="radialBar"
                height={345}
              />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SalesStats;
