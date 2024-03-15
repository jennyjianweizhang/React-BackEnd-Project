import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Avatar,
} from "@mui/material";
import ReactApexCharts from "src/@core/components/react-apexcharts";

const OrderStatistics = () => {
  const categories = ["Fashion", "Electro", "Sports", "Decor"];
  const initialSeries = [45, 80, 20, 40];

  const [selectedSegment, setSelectedSegment] = useState({
    name: "Total",
    value: initialSeries.reduce((a, b) => a + b, 0).toString(),
  });
  const handleChartClick = (event, chartContext, config) => {
    const clickedIndex = config.dataPointIndex;
    // console.log('Clicked Index:', clickedIndex);
    // console.log('Data:', initialSeries[clickedIndex], categories[clickedIndex]);

    if (clickedIndex >= 0 && clickedIndex < initialSeries.length) {
      setSelectedSegment({
        name: categories[clickedIndex],
        value: initialSeries[clickedIndex],
      });
    }
  };

  // const handleChartHover = (event, chartContext, config) => {
  //     const hoveredIndex = config.dataPointIndex;

  //     if (hoveredIndex >= 0 && hoveredIndex < initialSeries.length) {
  //       setSelectedSegment({
  //         name: categories[hoveredIndex],
  //         value: initialSeries[hoveredIndex]
  //       });
  //     }
  //   };

  const chartOptions = {
    chart: {
      type: "donut",
      width: 150,
      height: 150,
      events: {
        dataPointSelection: handleChartClick,
        // dataPointMouseEnter: handleChartHover
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              color: "rgba(50, 71, 92, 0.87)",
              offsetY: 1,
            },
            value: {
              show: true,
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              color: "rgba(50, 71, 92, 0.87)",
              offsetY: 16,
              formatter: function () {
                // console.log('Selected value:', selectedSegment.value);
                return selectedSegment.value;
              },
            },
            total: {
              show: true,
              showAlways: true,
              label: selectedSegment.name,
              color: "rgba(50, 71, 92, 0.87)",
              formatter: function () {
                return selectedSegment.value;
              },
            },
          },
        },
      },
    },

    stroke: {
      lineCap: "round",
    },
    labels: categories,
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: [
      "#00E396",
      "#0090FF",
      "#775DD0",
      "#FF4560",
      "#FEB019",
      "#00D9E9",
      "#FF66C4",
    ],
    series: initialSeries,
  };

  return (
    <Grid container spacing={0.1}>
      {/* <Grid item xs={12} sm={6} md={4}> */}
      <Card>
        <CardContent>
          <Typography variant="h5">Order Statistics</Typography>
          <Typography variant="body2">42.82k Total Sales</Typography>
        </CardContent>
        <Box display="flex" marginBottom={5}>
          <Box marginLeft={5} marginTop={7}>
            <Typography variant="h4">8,258</Typography>
            <Typography variant="body1" width={100}>
              Total Orders
            </Typography>
          </Box>
          <ReactApexCharts
            options={chartOptions}
            series={initialSeries}
            type="donut"
            height={150}
            width={250}
          />
        </Box>
        <Box display="flex" alignItems="center" marginLeft={5}>
          <Box
            className="MuiAvatar-rounded MuiAvatar-colorDefault css-z3just"
            sx={{
              backgroundColor: "rgba(105, 108, 255, 0.16)",
              color: "rgb(105, 108, 255)",
              width: "38px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z"
              ></path>
              <circle cx="11.75" cy="18" r="1" fill="currentColor"></circle>
            </svg>
          </Box>
          <Box marginLeft={5}>
            <Typography variant="body1">Electronic</Typography>
            <Typography variant="body2">Mobile, Earbuds, TV</Typography>
          </Box>
          <Typography variant="body2" marginLeft={10}>
            82.5k
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" marginLeft={5} marginTop={2}>
          <Box
            className="MuiAvatar-rounded MuiAvatar-colorDefault css-z3just"
            sx={{
              backgroundColor: "rgba(113, 221, 55, 0.16)",
              color: "rgb(113, 221, 55)",
              width: "38px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13 10.551v-.678A4.005 4.005 0 0 0 16 6c0-2.206-1.794-4-4-4S8 3.794 8 6h2c0-1.103.897-2 2-2s2 .897 2 2s-.897 2-2 2a1 1 0 0 0-1 1v1.551l-8.665 7.702A1.001 1.001 0 0 0 3 20h18a1.001 1.001 0 0 0 .664-1.748L13 10.551zM5.63 18L12 12.338L18.37 18H5.63z"
              ></path>
            </svg>
          </Box>
          <Box marginLeft={5}>
            <Typography variant="body1">Fashion</Typography>
            <Typography variant="body2">Tshirt, Jeans, Shoes</Typography>
          </Box>
          <Typography variant="body2" marginLeft={10}>
            23.8k
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" marginLeft={5} marginTop={2}>
          <Box
            className="MuiAvatar-rounded MuiAvatar-colorDefault css-z3just"
            sx={{
              backgroundColor: "rgba(3, 195, 236, 0.16)",
              color: "rgb(3, 195, 236)",
              width: "38px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"
              ></path>
            </svg>
          </Box>
          <Box marginLeft={5}>
            <Typography variant="body1">Decor</Typography>
            <Typography variant="body2">Fine Art, Dining</Typography>
          </Box>
          <Typography variant="body2" marginLeft={20}>
            849
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" ml={5} mt={2} mb={5}>
          <Box
            className="MuiAvatar-rounded MuiAvatar-colorDefault css-z3just"
            sx={{
              backgroundColor: "rgba(133, 146, 163, 0.16)",
              color: "rgb(133, 146, 163)",
              width: "38px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8.5 11l1.5 4h4l1.5-4L12 8.5z"
              ></path>
              <path
                fill="currentColor"
                d="M19.071 4.929a9.936 9.936 0 0 0-7.07-2.938a9.943 9.943 0 0 0-7.072 2.938c-3.899 3.898-3.899 10.243 0 14.142a9.94 9.94 0 0 0 7.073 2.938a9.936 9.936 0 0 0 7.07-2.937c3.899-3.898 3.899-10.243-.001-14.143zM12.181 4h-.359c.061-.001.119-.009.18-.009s.118.008.179.009zm6.062 13H16l-1.258 2.516a7.956 7.956 0 0 1-2.741.493a7.96 7.96 0 0 1-2.746-.494L8 17.01H5.765a7.96 7.96 0 0 1-1.623-3.532L6 11L4.784 8.567a7.936 7.936 0 0 1 1.559-2.224a7.994 7.994 0 0 1 3.22-1.969L12 6l2.438-1.625a8.01 8.01 0 0 1 3.22 1.968a7.94 7.94 0 0 1 1.558 2.221L18 11l1.858 2.478A7.952 7.952 0 0 1 18.243 17z"
              ></path>
            </svg>
          </Box>
          <Box marginLeft={5}>
            <Typography variant="body1">Sports</Typography>
            <Typography variant="body2">Football, Cricket Kit</Typography>
          </Box>
          <Typography variant="body2" marginLeft={15}>
            99
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default OrderStatistics;
