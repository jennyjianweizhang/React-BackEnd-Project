import React, { useState } from 'react';
import { Card, CardContent, Tabs, Tab, CircularProgress, Typography, Box, Grid, Icon } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ReactApexcharts from 'src/@core/components/react-apexcharts';

const TotalProfit = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const chartOptions = {
    chart: {
        type: 'area',
        toolbar: {
            show: false, 
        },
    },
    dataLabels: {
        enabled: false
      },
    stroke: {
        curve: 'smooth',
        colors: ['#696cff'],
        width: 3
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
              color: "rgb(105, 108, 255)",
              opacity: 0.6
            },
            {
              offset: 100,
              color: "rgb(105, 108, 255)",
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
      categories: [" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels:{
        offsetX: -4,
      },
      axisTicks: {
        show: false, // 关闭x轴刻度线
      },
    },
    grid:{
        padding:{
            right:0,
        }
    }
  };


  const chartSeries = [{
    name: "Series 1",
    data: [31, 21, 30, 22, 42, 26, 35, 29]
  }];

  return (
    <Grid container spacing={0.1} >
        <Card>
        <CardContent> 
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="tab widget card">
            <Tab label="Income" />
            <Tab label="Expenses" />
            <Tab label="Profit" />
            </Tabs>

            {tabValue === 0 && (
            <Box sx={{ display: 'flex', alignItems: 'center', p: 6, mt:5, mb:5, borderTop:0.5, borderColor:'lightgrey' }}> 
                <Box 
                    sx={{ 
                        width: 45, 
                        height: 45, 
                        marginRight: 2, 
                        backgroundImage: 'url(/images/cards/wallet-primary.png)',
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                    }}
                />
                <Box>
                <Typography variant="body1">Total Income</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6">$459.1k</Typography>
                    <ArrowDropUpIcon sx={{ color: 'rgb(113, 221, 55)' }} />
                    <Typography variant="body2" sx={{ marginLeft: 1, color: 'rgb(113, 221, 55)' }}>42.9%</Typography>
                </Box>
                </Box>
            </Box>
            )}

            {tabValue === 1 && (
            <Box sx={{ display: 'flex', alignItems: 'center', p: 6, mt:5, mb:5, borderTop:0.5, borderColor:'lightgrey' }}>
                <Box 
                    sx={{ 
                        width: 45, 
                        height: 45, 
                        marginRight: 2, 
                        backgroundImage: 'url(/images/cards/paypal-error.png)',
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                    }}
                />
                <Box>
                <Typography variant="body1">Total Expenses</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6">$316.5k</Typography>
                    <ArrowDropUpIcon sx={{ color: 'rgb(113, 221, 55)' }} />
                    <Typography variant="body2" sx={{ marginLeft: 1, color: 'rgb(113, 221, 55)' }}>27.8%</Typography>
                </Box>
                </Box>
            </Box>
            )}

            {tabValue === 2 && (
            <Box sx={{ display: 'flex', alignItems: 'center', p: 6, mt:5, mb:5, borderTop:0.5, borderColor:'lightgrey'  }}>
                <Box 
                    sx={{ 
                        width: 45, 
                        height: 45, 
                        marginRight: 2, 
                        backgroundImage: 'url(/images/cards/chart-info.png)',
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                    }}
                />
                <Box>
                <Typography variant="body1">Total Profit</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6">$147.9k</Typography>
                    <ArrowDropUpIcon sx={{ color: 'rgb(113, 221, 55)' }} />
                    <Typography variant="body2" sx={{ marginLeft: 1, color: 'rgb(113, 221, 55)' }}>35.1%</Typography>
                </Box>
                </Box>
            </Box>
            )}

            <Box sx={{ minHeight: '222px', margin: '-42px'}}>
            <ReactApexcharts 
                options={chartOptions} 
                series={chartSeries} 
                type="area" 
                height={180}
                width={358} />
            </Box>

            {tabValue === 0 && (
            <Box display="flex">
                <Box position="relative" display="inline-flex" mt={11.5}>
                <CircularProgress 
                variant="determinate"
                value={100} 
                size={50}
                thickness={2}
                sx={{ color: 'lightgrey'}}
                />
                <CircularProgress 
                variant="determinate"
                value={65} 
                size={50}
                thickness={4}
                sx={{
                    color: 'primary.main', 
                    position: 'absolute',
                    left: 0,
                    top: 0,
                  }}
                />
                <Box
                 top={0}
                 left={0}
                 bottom={0}
                 right={0}
                 position="absolute"
                 display="flex"
                 alignItems="center"
                 justifyContent="center">
                <Typography variant="body2">{'6.5K'}</Typography>
                </Box>
                </Box>
                <Box ml={5} mt={11.5}>
                    <Typography variant="body1">Income this week</Typography>
                    <Typography variant="body2">{"$39k less than last week"}</Typography>
                </Box>
            </Box>
            )}

            {tabValue === 1 && (
            <Box display="flex">
                <Box position="relative" display="inline-flex" mt={11.5}>
                <CircularProgress 
                variant="determinate"
                value={100} 
                size={50}
                thickness={2}
                sx={{ color: 'lightgrey'}}
                />
                <CircularProgress 
                variant="determinate"
                value={65} 
                size={50}
                thickness={4}
                sx={{
                    color: 'primary.main', 
                    position: 'absolute',
                    left: 0,
                    top: 0,
                  }}
                />
                <Box
                 top={0}
                 left={0}
                 bottom={0}
                 right={0}
                 position="absolute"
                 display="flex"
                 alignItems="center"
                 justifyContent="center">
                <Typography variant="body2">{'7.2K'}</Typography>
                </Box>
                </Box>
                <Box ml={5} mt={11.5}>
                    <Typography variant="body1">Expenses this week</Typography>
                    <Typography variant="body2">{"$16k less than last week"}</Typography>
                </Box>
            </Box>
            )}

            {tabValue === 2 && (
            <Box display="flex">
                <Box position="relative" display="inline-flex" mt={11.5}>
                <CircularProgress 
                variant="determinate"
                value={100} 
                size={50}
                thickness={2}
                sx={{ color: 'lightgrey'}}
                />
                <CircularProgress 
                variant="determinate"
                value={65} 
                size={50}
                thickness={4}
                sx={{
                    color: 'primary.main', 
                    position: 'absolute',
                    left: 0,
                    top: 0,
                  }}
                />
                <Box
                 top={0}
                 left={0}
                 bottom={0}
                 right={0}
                 position="absolute"
                 display="flex"
                 alignItems="center"
                 justifyContent="center">
                <Typography variant="body2">{'4.2K'}</Typography>
                </Box>
                </Box>
                <Box ml={5} mt={11.5}>
                    <Typography variant="body1">Profit this week</Typography>
                    <Typography variant="body2">{"$28k less than last week"}</Typography>
                </Box>
            </Box>
            )}
            
        </CardContent>
        </Card>
    </Grid>
  );
};

export default TotalProfit;
