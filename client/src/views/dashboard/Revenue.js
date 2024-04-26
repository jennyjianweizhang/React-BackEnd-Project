import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ReactApexcharts from "src/@core/components/react-apexcharts";
import { fetchAllData } from "src/store/analyticsData";
// import { fetchData } from "src/@core/services/ecommerceDataService";

const RevenueChartComponent = () => {
  const chartOptions = {
    chart: {
      type: "bar",
      height: 80,
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
      axisTicks: {
        show: false,
      },
      axisBorder: {
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

  const [series, setSeries] = useState([]);
  const dispatch = useDispatch();
  const { allData, isLoading } = useSelector((state) => state.analyticsData);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  useEffect(() => {
    const revenueDataSeries = allData.find(
      (item) => item.name === "Revenue data"
    );

    if (revenueDataSeries) {
      setSeries([
        {
          name: revenueDataSeries.name,
          data: revenueDataSeries.data,
        },
      ]);
    }
  }, [allData]);

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
  //         const revenueDataSeries = fetchedData.find(
  //           (item) => item.name === "Revenue data"
  //         );
  //         if (revenueDataSeries) {
  //           setSeries([
  //             {
  //               name: revenueDataSeries.name,
  //               data: revenueDataSeries.data,
  //             },
  //           ]);
  //         } else {
  //           console.log("Profit data not found");
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   getData();
  // }, []);

  // const series = [{
  //   name: 'Revenue',
  //   data: [23, 81, 70, 31, 99, 46, 73],
  // }];

  return (
    <Box className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6">
      <Card>
        <CardContent sx={{ marginBottom: "-30px", marginLeft: "-5px" }}>
          <Typography variant="body1" className="css-lpncfr">
            Revenue
          </Typography>
          <Typography variant="h5" className="css-u7ji5e">
            425k
          </Typography>
          <Box style={{ minHeight: "110px" }}>
            <ReactApexcharts
              options={chartOptions}
              series={series}
              type="bar"
              height={111}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RevenueChartComponent;
