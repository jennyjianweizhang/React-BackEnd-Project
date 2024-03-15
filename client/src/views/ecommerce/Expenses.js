import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import ReactApexcharts from "src/@core/components/react-apexcharts";

const ExpensesChart = () => {
    const chartOptions = {
      chart: {
        type: "radialBar",
        height: 130,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            size: "60%",
          },
          track: {
            background: "#e0e0e0", 
            strokeWidth: '100%', 
            margin: 5,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontSize: "22px",
              color: "rgba(50, 71, 92, 0.87)",
              fontWeight: 500,
              offsetY: -5,
            },
            total: {
              show: true,
              label: "Expenses",
              formatter: () => "72%",
              color: "rgba(50, 71, 92, 0.87)",
            },
          },
        },
      },
      labels: ["Expenses"],
      colors: ["rgb(105, 108, 255)"],
      stroke: {
        lineCap: "round",
      },
      legend: {
        show: false,
      },
    };
  
    const series = [72];
  
    return (
        <Card>
          <CardContent sx={{ position: "relative" }}>
            <Typography variant="body1" sx={{color:'rgba(50, 71, 92, 0.6)', fontSize:'1rem', fontWeight:'600', marginBottom:'-1rem'}}>Expenses</Typography>
            <div style={{ minHeight: "130" }}>
              <ReactApexcharts
                options={chartOptions}
                series={series}
                type="radialBar"
                height={179}
                width={125}
              />
            </div>
            <Box sx={{textAlign:'center', marginTop:'-0.8rem'}}>
            <Typography variant="body2" sx={{color:'rgba(50, 71, 92, 0.38)', lineHeight:'1.3'}}>$2k Expenses more than last month</Typography>
            {/* <Typography variant="body2" sx={{color:'rgba(50, 71, 92, 0.38)', lineHeight:'1.3'}}>than last month</Typography> */}
            </Box>
            
          </CardContent>
        </Card>
    );
  };
  
  export default ExpensesChart;