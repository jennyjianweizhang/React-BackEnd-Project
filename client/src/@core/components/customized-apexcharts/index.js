import React from 'react';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const CustomizedApexChart = (props) => {
    
  const { title, subtitle, stats } = props;

  const chartOptions = {
    chart: {
    //   height: 110,
    //   width:166,
      type: 'area',
      toolbar: {
        show: false
      },

    },
    
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['#71dd37'],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0.1,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#71dd37",
            opacity: 0.6
          },
          {
            offset: 100,
            color: "#71dd37",
            opacity: 0.1
          }
        ]
      }
    },
    markers: {
      size: 0,
      colors: ['#71dd37'],
      strokeColors: '#ffffff',
      strokeWidth: 4
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    xaxis: {
      labels: {
        show: false
      },
      axisTicks: {
        show: false, // 关闭x轴刻度线
      },
      axisBorder: {
        show: false, // 关闭x轴边框
      },
    },
    grid: {
      show: false
    },
    legend: {
      show: false
    }
  };

  const chartSeries = [
    {
      name: 'series1',
      data: [31, 90, 28, 51, 42, 109, 100] ,
    }
  ];

  return (
    <Card>
    <CardContent>
      <Box sx={{ marginBottom: 2 }}>
          <Typography sx={{ fontWeight: 500, fontSize: '1rem', color: 'rgba(50, 71, 92, 0.6)'}}>{title}</Typography>
          {/* <Typography variant='caption' sx={{ fontWeight: 500, fontSize: '0.9rem', color: 'rgba(50, 71, 92, 0.87)'}}>{subtitle}</Typography> */}
      </Box>
      <Typography variant='h5' sx={{ fontWeight: 500, fontSize: '0.9rem', color: 'rgba(50, 71, 92, 0.87)'}}>{stats}</Typography>
      <ReactApexcharts
        options={chartOptions}
        series={chartSeries}
        type="area"
        height={75} 
        width={175}
        style={{ marginLeft: '-30px' }} 
      />
    </CardContent>
  </Card>
  );
}

export default CustomizedApexChart;
