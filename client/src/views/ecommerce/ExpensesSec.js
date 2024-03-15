import React, {useState, useEffect} from "react";
import { Grid, Paper, CardContent, Typography, Box } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ReactApexcharts from "src/@core/components/react-apexcharts";
import { fetchData } from 'src/@core/services/dataService';

const ExpensesSecChart = () => {
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
        show: false,
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
    colors: ["rgb(255, 171, 0)", "#fff", "rgb(105, 108, 255)"],
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

  const [chartSeries, setSeries] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const fetchedData = await fetchData(); 
        console.log(fetchedData);
        
        const ProductAExpenses = fetchedData.find(item => item.id === 'Product A Expenses');
            const SpacerExpenses = fetchedData.find(item => item.id === 'Spacer Expenses');
            const ProductBExpenses = fetchedData.find(item => item.id === 'Product B Expenses')

            setSeries([
              { name: ProductAExpenses.name, data: ProductAExpenses.data },
              { name: SpacerExpenses.name, data: SpacerExpenses.data },
              { name: ProductBExpenses.name, data: ProductBExpenses.data },
            ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  return (
    <Grid>
      <Paper elevation={6}>
        <CardContent>
          <Typography variant="h6">Expenses</Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ marginTop: -6 }}
          >
            <Box
              style={{
                flex: 1,
                minWidth: "33%",
                marginTop: 63,
                display: "flex",
              }}
            >
              <ArrowDownwardIcon style={{ color: "rgb(255, 62, 29)" }}>
              </ArrowDownwardIcon>
              <Typography variant="body2" style={{ color: "rgb(255, 62, 29)", fontSize:'0.875rem', fontWeight:'500' }}>8.2%</Typography>
            </Box>
            <ReactApexcharts
              options={chartOptions}
              series={chartSeries}
              type="bar"
              height={200}
              width={200}
            />
          </Box>
          <Typography variant="body2" color="textSecondary" sx={{backgroundColor:'rgba(133, 146, 163, 0.16)', padding:'0.1rem 0.625rem', width:'6rem', borderRadius:'0.2rem', marginTop:'-3rem'}}>
            JULY 2024
          </Typography>
        </CardContent>
      </Paper>
    </Grid>
  );
};

export default ExpensesSecChart;
