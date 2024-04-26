import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import ReactApexcharts from "src/@core/components/react-apexcharts";
import { fetchAllData } from "src/store/analyticsData";
// import { fetchData } from "src/@core/services/ecommerceDataService";

const ProfitIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24">
    <path
      d="M6 19L12 13L18 19"
      fill="none"
      stroke="#71DD37"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProfitReportComponent = () => {
  const chartOptions = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
        //     tools: {
        //       download: false,
        // },
        // zoom:{
        //     enabled:false
        // },
      },
    },
    stroke: {
      curve: "smooth",
      colors: ["#FFAB00"],
      width: 3,
    },
    markers: {
      size: 0,
    },
    grid: {
      show: false,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false, // 关闭x轴刻度线
      },
      axisBorder: {
        show: false, // 关闭x轴边框
      },
    },
  };

  const [series, setSeries] = useState([]);
  const dispatch = useDispatch();
  const { allData, isLoading } = useSelector((state) => state.analyticsData);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  useEffect(() => {
    const profitDataSeries = allData.find(
      (item) => item.name === "Profit data"
    );

    if (profitDataSeries) {
      setSeries([
        {
          name: profitDataSeries.name,
          data: profitDataSeries.data,
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
  //         const profitDataSeries = fetchedData.find(
  //           (item) => item.name === "Profit data"
  //         );
  //         if (profitDataSeries) {
  //           setSeries([
  //             {
  //               name: profitDataSeries.name,
  //               data: profitDataSeries.data,
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

  // const series = [
  //     {
  //         name: 'Profit data',
  //         data: [10, 190, 45, 140, 125,320]
  //       }
  // ];

  // async function getData(){
  //   try {
  //     const fetchedData = await fetchData();
  //     console.log(fetchedData);
  //   } catch(error){
  //     console.log(error);
  //   }
  // }

  return (
    <Card sx={{ width: "330px", height: "202px" }}>
      {/* <button onClick={getData}>getData</button> */}
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6" noWrap>
              Profit Report
            </Typography>
            <Chip
              sx={{
                borderRadius: "4px",
                color: "rgb(255, 171, 0)",
                backgroundColor: "rgba(255, 171, 0, 0.16)",
                mt: "8px",
              }}
              label="YEAR 2024"
            />
            <Box display="flex" alignItems="center" mt={4}>
              <ProfitIcon />
              <Typography
                variant="body2"
                sx={{ ml: 1, mt: 2, color: "#71DD37" }}
              >
                68.2%
              </Typography>
            </Box>
            <Typography variant="h5" mt={4}>
              $84,686k
            </Typography>
          </Box>
          <Box>
            <ReactApexcharts
              options={chartOptions}
              series={series}
              type="line"
              height="131"
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfitReportComponent;
