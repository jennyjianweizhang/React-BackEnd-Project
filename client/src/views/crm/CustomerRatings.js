import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  Rating,
  Chip,
  Box,
  Menu,
  MenuItem
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReactApexcharts from "src/@core/components/react-apexcharts";
import { fetchData } from 'src/@core/services/dataService';

// const series = [
//   {
//     name: "Series 1",
//     data: [20, 60, 41, 67, 22, 85, 75],
//   },
//   {
//     name: "Series 2",
//     data: [31, 40, 88, 51, 72, 39, 100],
//   },
// ];

const options = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    colors: ["#ddd", "#696cff"],
    dashArray: [5, 0],
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: {
      show: true,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
        show: false,
      },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  annotations: {
    points: [
      {
        x: "Jul",
        y: 99,
        marker: {
          size: 7,
          fillColor: "#fff",
          strokeColor: "#696cff",
          strokeWidth: 4,
          radius: 8,
        },
      },
      {
        x: "Mar",
        y: 89,
        marker: {
          size: 7,
          fillColor: "#fff",
          strokeColor: "black",
          strokeWidth: 4,
          radius: 8,
        },
      },
    ],
  },
  legend: {
    show: false,
  },
};

const CustomerRating = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [series, setSeries] = useState([]);

    useEffect(() => {
      async function getData() {
        try {
          const fetchedData = await fetchData(); 
          console.log(fetchedData);

          const CustomerRating1 = fetchedData.find(item => item.id === 'CustomerRating1');
            const CustomerRating2 = fetchedData.find(item => item.id === 'CustomerRating2');
          
            setSeries([
              { name: CustomerRating1.name, data: CustomerRating1.data },
              { name: CustomerRating2.name, data: CustomerRating2.data }
            ]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      getData();
    }, []);

  return (
    <Grid>
      <Card raised elevation={6} style={{ position: "relative" }}>
        <CardHeader
          title="Customer Ratings"
          action={
            <IconButton aria-haspopup="true" size="small" onClick={handleClick}>
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
          <MenuItem onClick={handleClose}>Refresh</MenuItem>
          <MenuItem onClick={handleClose}>Share</MenuItem>
          <MenuItem onClick={handleClose}>Update</MenuItem>
        </Menu>
        <CardContent>
          <Box display="flex" alignItems="center">
            <Typography variant="h3" component="div">
              4.0
            </Typography>
            <Rating
              name="read-only"
              value={4}
              readOnly
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              sx={{ marginLeft: 5 }}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="body2" color="text.secondary">
              Points from last month
            </Typography>
            <Chip
              label="+5.0"
              sx={{ bgcolor: "#696cff29", color: "#696cff", marginLeft: 5 }}
            />
          </Box>
          <div style={{ marginTop: "20px" }}>
            <ReactApexcharts
              options={options}
              series={series}
              type="line"
              height={200}
            />
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CustomerRating;
