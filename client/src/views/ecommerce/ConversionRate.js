import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ReactApexcharts from "src/@core/components/react-apexcharts";
import { fetchData } from 'src/@core/services/dataService';

const ConversionRateCard = () => {
  const chartOptions = {
    chart: {
      type: "line",
      height: 70,
      toolbar: {
        show: false,
      },
      //   sparkline: {
      //     enabled: true,
      //   },
    },
    stroke: {
      curve: "smooth",
      width: 5,
    },
    markers: {
      size: 0,
    },
    colors: ["#696cff"],
    xaxis: {
      categories: ["1", "2", "3", "4"],
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
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    annotations: {
      points: [
        {
          x: "4",
          y: 300,
          marker: {
            size: 7,
            fillColor: "#fff",
            strokeColor: "#696cff",
            strokeWidth: 4,
            radius: 8,
          },
        },
      ],
    },
  };

  // const chartSeries = [
  //   {
  //     name: "Conversion Rate",
  //     data: [30, 250, 89, 300],
  //   },
  // ];

  const datas = [
    {
      title: "Impressions",
      value: "12.4k Visits",
      change: "12.8%",
      iconType: "+",
    },
    {
      title: "Added To Cart",
      value: "32 Product in cart",
      change: "8.3%",
      iconType: "-",
    },
    {
      title: "Checkout",
      value: "21 Product checkout",
      change: "9.12%",
      iconType: "+",
    },
    {
      title: "Purchased",
      value: "12 Orders",
      change: "2.24%",
      iconType: "+",
    },
  ];

  const [chartSeries, setSeries] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const fetchedData = await fetchData(); 
        console.log(fetchedData);
        
        if (fetchedData && Array.isArray(fetchedData) && fetchedData.length > 0) {
          const conversionDataSeries = fetchedData.find(item => item.name === 'Conversion Rate');
          if (conversionDataSeries) {
            setSeries([{
              name: conversionDataSeries.name,
              data: conversionDataSeries.data
            }]);
          } else {
            console.log('Conversion data not found');
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

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
            <Typography
              variant="h6"
              style={{
                marginBottom: "0.5rem",
              }}
            >
              Conversion Rate
            </Typography>
          }
          subheader={
            <Typography
              variant="subtitle2"
              style={{ marginTop:'1rem' }}
            >
              Compared To Last Month
            </Typography>
          }
          action={
            <IconButton aria-label="settings" onClick={handleClick}>
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
              <MenuItem onClick={handleClose}>Share</MenuItem>
              <MenuItem onClick={handleClose}>Refresh</MenuItem>
              <MenuItem onClick={handleClose}>Update</MenuItem>
            </Menu>
        <CardContent>
          <Box display={"flex"}>
            <Box display={"flex"} style={{ flex: 1, minWidth: "40%" }}>
              <Typography variant="h4">8.72%</Typography>
              <Typography
                variant="body2"
                sx={{
                  marginTop: "0.5rem",
                  marginLeft: "0.6rem",
                  color: "rgb(113, 221, 55)",
                }}
              >
                +4.8%
              </Typography>
            </Box>
            <div className="custom-sparkline-chart-coversionrate">
              <Box>
                <ReactApexcharts
                  options={chartOptions}
                  series={chartSeries}
                  type="line"
                  height={100}
                  width={130}
                />
              </Box>
            </div>
          </Box>
          <Box>
            {datas.map((item, index) => (
              <Box key={index} display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box>
                  <Typography variant="body1" sx={{fontSize:'1rem', fontWeight:'500', color:'rgba(50, 71, 92, 0.87)'}}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{color:'rgba(50, 71, 92, 0.38)', fontSize:'0.875rem'}}>
                    {item.value}
                  </Typography>
                </Box>
                <Box display={'flex'}>
                  {item.iconType === "+" ? (
                    <ArrowUpwardIcon style={{ color: "rgb(113, 221, 55)", fontSize:'1rem'}} />
                  ) : (
                    <ArrowDownwardIcon style={{ color: "rgb(255, 62, 29)", fontSize:'1rem' }} />
                  )}
                  <Typography variant="body2" sx={{color:'rgba(50, 71, 92, 0.6)', fontSize:'0.875rem'}}>{item.change}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ConversionRateCard;
