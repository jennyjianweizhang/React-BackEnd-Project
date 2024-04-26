import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, CardHeader, Typography } from "@mui/material";
import ReactApexcharts from "src/@core/components/react-apexcharts";
// import { fetchData } from "src/@core/services/ecommerceDataService";
import { fetchAllData } from "src/store/crmData";

const chartOptions = {
  chart: {
    type: "bar",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "35%",
      endingShape: "rounded",
    },
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    labels: {
      show: true,
      offsetY: -10,
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
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
  legend: {
    show: false,
  },
  colors: ["#ff3e1d", "#fff", "#8592a3"],
};

// const chartSeries = [
//   {
//     name: "Product A",
//     data: [-74, -85, -71, -97, -52, -73, -51, -79, -58],
//   },
//   {
//     name: "Spacer",
//     data: [10, 10, 10, 10, 10, 10, 10, 10, 10],
//   },
//   {
//     name: "Product B",
//     data: [43, 53, 50, 38, 43, 57, 63, 42, 41],
//   },
// ];

const OverviewAndSalesActivity = () => {
  const dispatch = useDispatch();
  const { allData, isLoading } = useSelector((state) => state.crmData);
  const [chartSeries, setSeries] = useState([]);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  useEffect(() => {
    const SalesActivity1 = allData.find(
      (item) => item.id === "SalesActivity1"
    );
    const SalesActivity2 = allData.find(
      (item) => item.id === "SalesActivity2"
    );
    const SalesActivity3 = allData.find(
      (item) => item.id === "SalesActivity3"
    );
    if (SalesActivity1 && SalesActivity2 && SalesActivity3) {
      setSeries([
        { name: SalesActivity1.name, data: SalesActivity1.data },
        { name: SalesActivity2.name, data: SalesActivity2.data },
        { name: SalesActivity3.name, data: SalesActivity3.data },
      ]);
    }
  }, [allData]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const fetchedData = await fetchData();
  //       console.log(fetchedData);

  //       const SalesActivity1 = fetchedData.find(
  //         (item) => item.id === "SalesActivity1"
  //       );
  //       const SalesActivity2 = fetchedData.find(
  //         (item) => item.id === "SalesActivity2"
  //       );
  //       const SalesActivity3 = fetchedData.find(
  //         (item) => item.id === "SalesActivity3"
  //       );

  //       setSeries([
  //         { name: SalesActivity1.name, data: SalesActivity1.data },
  //         { name: SalesActivity2.name, data: SalesActivity2.data },
  //         { name: SalesActivity3.name, data: SalesActivity3.data },
  //       ]);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   getData();
  // }, []);
  
  return (
    <Grid>
      <Paper elevation={6} style={{ position: "relative" }}>
        <CardHeader
          title="Overview & Sales Activity"
          subheader={
            <Typography variant="body1" style={{ marginTop: "8px" }}>
              Check out each column for more details
            </Typography>
          }
          titleTypographyProps={{ variant: "h5" }}
          subheaderTypographyProps={{ variant: "body1" }}
        />
        <div style={{ minHeight: "282px" }}>
          <ReactApexcharts
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={282}
            width={342}
          />
        </div>
      </Paper>
    </Grid>
  );
};

export default OverviewAndSalesActivity;
