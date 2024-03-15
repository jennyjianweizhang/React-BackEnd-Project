import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { fetchData } from 'src/@core/services/dataService';

const Sessions = (props) => {
    
  const { title, stats } = props;

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
      curve: 'straight',
      width: 3,
      colors: ['#ffab00'],
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
            color: "#ffab00",
            opacity: 0.6
          },
          {
            offset: 100,
            color: "#ffab00",
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
      data: [300, 280, 200, 170, 130, 70, 70, 250, 250, 400] 
    }
  ];

  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const fetchedData = await fetchData(); 
        console.log(fetchedData);
        
        if (fetchedData && Array.isArray(fetchedData) && fetchedData.length > 0) {
          const Sessions = fetchedData.find(item => item.id === 'Sessions');
          if (Sessions) {
            setSeries([{
              name: Sessions.name,
              data: Sessions.data
            }]);
          } else {
            console.log('Sessions data not found');
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);


  return (
    <Card>
    <CardContent>
      <Box sx={{ marginBottom: 2 }}>
          <Typography sx={{ fontWeight: 500, fontSize: '1rem', color: 'rgba(50, 71, 92, 0.6)'}}>{title}</Typography>
      </Box>
      <Typography variant='h5' sx={{ fontWeight: 500, fontSize: '0.9rem', color: 'rgba(50, 71, 92, 0.87)'}}>{stats}</Typography>
      <ReactApexcharts
        options={chartOptions}
        series={series}
        type="area"
        height={135} 
        width={175}
        style={{margin: '-30px' }} 
      />
    </CardContent>
  </Card>
  );
}

export default Sessions;
