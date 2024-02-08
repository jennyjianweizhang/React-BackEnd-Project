import React, {useState} from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Button, Box, Menu, MenuItem } from '@mui/material';
import ReactApexcharts from 'src/@core/components/react-apexcharts'


const RevenueChartComponent = () => {
  const chartOptions = {
    
    chart: {
      type: 'bar',
      height: 80,
      toolbar: {
        show: false,
      },
    },
    legend: {
        show: false
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
      categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      labels: {
        style: {
          colors: 'rgba(50, 71, 92, 0.38)',
        //   fontSize: '14px',
        },
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
    colors:['rgba(105, 108, 255, 0.16)','rgba(105, 108, 255, 0.16)','rgba(105, 108, 255, 0.16)','rgba(105, 108, 255, 0.16)','rgb(105, 108, 255)','rgba(105, 108, 255, 0.16)','rgba(105, 108, 255, 0.16)']
  };

  const series = [{
    name: 'Revenue',
    data: [23, 81, 70, 31, 99, 46, 73],
  }];
    
  return (
    <Box className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6">
      <Card>
        <CardContent sx={{ marginBottom: '-30px', marginLeft:'-5px'}}>
          <Typography variant="body1" className="css-lpncfr">Revenue</Typography>
          <Typography variant="h5" className="css-u7ji5e">425k</Typography>
          <Box style={{ minHeight: '110px'}}>
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
