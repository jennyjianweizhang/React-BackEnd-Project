import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ReactApexcharts from "src/@core/components/react-apexcharts";
import { fetchAllData } from "src/store/analyticsData";
// import { fetchData } from "src/@core/services/analyticsDataService";

const CustomizedApexChart = (props) => {
  const { title, stats, subtitle } = props;

  const chartOptions = {
    chart: {
      //   height: 110,
      //   width:166,
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
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
  };

  // const chartSeries = [
  //   {
  //     name: 'series1',
  //     data: [31, 290, 28, 181, 22, 79, 200] ,
  //   }
  // ];

  const [series, setSeries] = useState([]);
  const dispatch = useDispatch();
  const { allData, isLoading } = useSelector((state) => state.analyticsData);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  useEffect(() => {
    const profitDataSeries = allData.find(
      (item) => item.name === "Order data"
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
  //           (item) => item.name === "Order data"
  //         );
  //         if (profitDataSeries) {
  //           setSeries([
  //             {
  //               name: profitDataSeries.name,
  //               data: profitDataSeries.data,
  //             },
  //           ]);
  //         } else {
  //           console.log("Order data not found");
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   getData();
  // }, []);

  return (
    <Card>
      <CardContent>
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "1rem",
              color: "rgba(50, 71, 92, 0.6)",
            }}
          >
            {title}
          </Typography>
          {/* <Typography variant='caption' sx={{ fontWeight: 500, fontSize: '0.9rem', color: 'rgba(50, 71, 92, 0.87)'}}>{subtitle}</Typography> */}
        </Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 500, fontSize: "0.9rem", color: "rgb(50, 71, 92)" }}
        >
          {stats}
        </Typography>
        <ReactApexcharts
          options={chartOptions}
          series={series}
          type="area"
          height={135}
          width={175}
          style={{ margin: "-30px" }}
        />
      </CardContent>
    </Card>
  );
};

export default CustomizedApexChart;
