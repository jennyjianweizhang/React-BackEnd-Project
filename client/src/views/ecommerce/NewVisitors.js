import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import ReactApexcharts from "src/@core/components/react-apexcharts";
// import { fetchData } from "src/@core/services/ecommerceDataService";
import { fetchAllData } from "src/store/ecommerceData";

const NewVisitors = () => {
  // const series = [
  //   {
  //     name: "NewVisitors",
  //     data: [23, 81, 70, 31, 99, 46, 73],
  //   },
  // ];

  // const [series, setSeries] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const fetchedData = await fetchData();
  //       console.log(fetchedData);

  //       if (
  //         fetchedData &&
  //         Array.isArray(fetchedData) &&
  //         fetchedData.length > 0
  //       ) {
  //         const visitorsDataSeries = fetchedData.find(
  //           (item) => item.name === "NewVisitors"
  //         );
  //         if (visitorsDataSeries) {
  //           setSeries([
  //             {
  //               name: visitorsDataSeries.name,
  //               data: visitorsDataSeries.data,
  //             },
  //           ]);
  //         } else {
  //           console.log("Visitors data not found");
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   getData();
  // }, []);

  const dispatch = useDispatch();
  const { allData, isLoading } = useSelector((state) => state.ecommerceData);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  useEffect(() => {
    const visitorsDataSeries = allData.find(
      (item) => item.name === "NewVisitors"
    );

    if (visitorsDataSeries) {
      setSeries([
        { name: visitorsDataSeries.name, data: visitorsDataSeries.data },
      ]);
    }
  }, [allData]);

  // if (isLoading) return <div>Loading...</div>;

  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        columnWidth: "38%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
      labels: {
        style: {
          colors: "rgba(50, 71, 92, 0.38)",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    colors: [
      "rgba(105, 108, 255, 0.16)",
      "rgba(105, 108, 255, 0.16)",
      "rgba(105, 108, 255, 0.16)",
      "rgba(105, 108, 255, 0.16)",
      "rgb(105, 108, 255)",
      "rgba(105, 108, 255, 0.16)",
      "rgba(105, 108, 255, 0.16)",
    ],
  };

  const chartOptions2 = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#71dd37"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0.1,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#71dd37",
            opacity: 0.6,
          },
          {
            offset: 100,
            color: "#71dd37",
            opacity: 0.1,
          },
        ],
      },
    },
    markers: {
      size: 0,
      colors: ["#71dd37"],
      strokeColors: "#ffffff",
      strokeWidth: 4,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
      labels: {
        show: true,
      },
      axisTicks: {
        show: false, // 关闭x轴刻度线
      },
      axisBorder: {
        show: false, // 关闭x轴边框
      },
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
  };
  // const chartSeries2 = [
  //   {
  //     name: "Activity",
  //     data: [5, 45, 10, 108, 20, 75, 22],
  //   },
  // ];
  const [chartSeries2, setSeries2] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const fetchedData = await fetchData();
  //       console.log(fetchedData);

  //       if (
  //         fetchedData &&
  //         Array.isArray(fetchedData) &&
  //         fetchedData.length > 0
  //       ) {
  //         const activityDataSeries = fetchedData.find(
  //           (item) => item.name === "Activity"
  //         );
  //         if (activityDataSeries) {
  //           setSeries2([
  //             {
  //               name: activityDataSeries.name,
  //               data: activityDataSeries.data,
  //             },
  //           ]);
  //         } else {
  //           console.log("Activity data not found");
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   getData();
  // }, []);

  useEffect(() => {
    const activityDataSeries = allData.find((item) => item.name === "Activity");

    if (activityDataSeries) {
      setSeries2([
        { name: activityDataSeries.name, data: activityDataSeries.data },
      ]);
    }
  }, [allData]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Grid>
      {/* First chart */}
      <Grid>
        <Card>
          <CardContent>
            <Box display="flex">
              <Box flex={1} marginRight={3.5}>
                <Typography variant="h6" width={"10rem"}>
                  New Visitors
                </Typography>
                <Typography
                  variant="body2"
                  marginLeft={"15rem"}
                  marginTop={"-1.5rem"}
                  color={"rgba(50, 71, 92, 0.6)"}
                >
                  Last Week
                </Typography>
                <Box display="flex" marginTop={5.9}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    marginTop={"3rem"}
                  >
                    <Typography
                      variant="h4"
                      color={"rgba(50, 71, 92, 0.87)"}
                      fontWeight="500"
                    >
                      23%
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <ArrowDropDownIcon color="error" />
                      <Typography variant="body2" color="error">
                        8.75%
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      left: "3rem",
                      top: "1.5rem",
                    }}
                  >
                    <ReactApexcharts
                      options={chartOptions}
                      series={series}
                      type="bar"
                      height="100"
                      width="200"
                    />
                  </Box>
                </Box>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box flex={1} marginLeft={5}>
                <Typography variant="h6">Activity</Typography>
                <Typography
                  variant="body2"
                  marginLeft={"14.5rem"}
                  marginTop={"-1.9rem"}
                  color={"rgba(50, 71, 92, 0.6)"}
                >
                  Last Week
                </Typography>
                <Box display="flex">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    marginTop={"4rem"}
                  >
                    <Typography
                      variant="h4"
                      color={"rgba(50, 71, 92, 0.87)"}
                      fontWeight="500"
                      marginTop={"-1rem"}
                    >
                      82%
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <ArrowDropUpIcon color="success" />
                      <Typography variant="body2" color="rgb(113, 221, 55)">
                        19.6%
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      minHeight: "123px",
                      marginTop: "2rem",
                    }}
                  >
                    <ReactApexcharts
                      options={chartOptions2}
                      series={chartSeries2}
                      type="area"
                      height="123"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NewVisitors;
