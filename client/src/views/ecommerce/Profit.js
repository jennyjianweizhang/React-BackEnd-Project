import React, { useState, useEffect } from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ReactApexcharts from "src/@core/components/react-apexcharts";
// import { fetchData } from "src/@core/services/ecommerceDataService";
import { fetchAllData } from "src/store/ecommerceData";

const ProfitCard = () => {
  // const series = [
  //   {
  //     name: "Series 1",
  //     data: [11, 7, 11, 20],
  //   },
  //   {
  //     name: "Series 2",
  //     data: [9, 5, 15, 18],
  //   },
  // ];

  // const [series, setSeries] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const fetchedData = await fetchData();
  //       console.log(fetchedData);

  //       const Series1 = fetchedData.find((item) => item.id === "Profit1");
  //       const Series2 = fetchedData.find((item) => item.id === "Profit2");

  //       setSeries([
  //         { name: Series1.name, data: Series1.data },
  //         { name: Series2.name, data: Series2.data },
  //       ]);
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
    const Series1 = allData.find((item) => item.id === "Profit1");
    const Series2 = allData.find((item) => item.id === "Profit2");
    if (Series1 && Series2) {
      setSeries([
        { name: Series1.name, data: Series1.data },
        { name: Series2.name, data: Series2.data },
      ]);
    }
  }, [allData]);

  if (isLoading) return <div>Loading...</div>;

  const chartOptions = {
    chart: {
      type: "bar",
      height: 110,
      toolbar: {
        show: false,
      },
    },

    xaxis: {
      categories: ["Jan", "Apr", "Jul", "Oct"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      type: "solid",
    },
    colors: ["rgb(113, 221, 55)", "rgba(113, 221, 55, 0.16)"],
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
  };

  return (
    <Grid>
      <Card>
        <Box
          sx={{
            marginTop: 1.5,
            display: "flex",
            marginBottom: -2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              color: "rgba(50, 71, 92, 0.6)",
              fontSize: "1rem",
              mt: 4,
              ml: 5,
            }}
          >
            Profit
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 10,
              ml: -11,
              fontSize: " 1.5rem",
              color: "rgba(50, 71, 92, 0.87)",
            }}
          >
            624K
          </Typography>
        </Box>
        <ReactApexcharts
          options={chartOptions}
          series={series}
          type="bar"
          height={110}
        />
      </Card>
    </Grid>
  );
};

export default ProfitCard;
