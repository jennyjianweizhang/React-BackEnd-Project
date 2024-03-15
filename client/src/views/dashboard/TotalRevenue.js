import React, {useState, useEffect} from 'react';
import { Card, CardContent, Typography, Grid, Button, Box, Menu, MenuItem } from '@mui/material';
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { fetchData } from 'src/@core/services/dataService';
  
const TotalRevenueChart = () => {
    const [activeYear, setActiveYear] = useState('all');
    const [seriesData, setSeriesData] = useState([]); 
    const handleYearClick = (year) => {
            setActiveYear(year);
    };
    // const getSeriesData = () => {
    //         if (activeYear === '2022') {
    //         return [series[1]];
    //         } else if (activeYear === '2023') {
    //         return series;
    //         }
    // };

    const colors = {
        '2022': '#03c9d7', 
        'Spacer': '#fff',
        '2023': '#6875f5'  
    };
      
    const chartOptions = {
        chart: {
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false 
        }
        },
        plotOptions: {
        bar: {
            borderRadius: 10,
            horizontal: false,
            columnWidth: '30%',
            endingShape: 'rounded' 
        },
        },
        dataLabels: {
        enabled: false
        },
        stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
        },
        xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        labels: {
            style: {
            colors: 'rgba(50, 71, 92, 0.38)',
            fontSize: '14px',
            fontFamily: 'Public Sans, sans-serif' 
            }
        }
        },
        yaxis: {
        title: {
            text: ''
        },
        labels: {
            style: {
            colors: 'rgba(50, 71, 92, 0.38)',
            fontSize: '14px',
            fontFamily: 'Public Sans, sans-serif'
            }
        }
        },
        fill: {
        opacity: 1
        },
        tooltip: {
        y: {
            formatter: function (val) {
            return "$ " + val + " thousands" 
            }
        }
        },
        legend: {
          show: false 
        },
        colors: ['#6875f5', '#fff', '#03c9d7'] 
    };

  // const series = [{
  //   name: '2023',
  //   data: [44, 55, 57, 56, 61, 58, 63, 60] 
  // }, {
  //   name: '2022',
  //   data: [-35, -41, -36, -26, -45, -48, -52, -53] 
  // }];

  useEffect(() => {
    async function getData() {
        try {
            const fetchedData = await fetchData(); 
            console.log(fetchedData);

            const data2022 = fetchedData.find(item => item.id === 'totalRevenue2022');
            const data2023 = fetchedData.find(item => item.id === 'totalRevenue2023');
            const spacer = fetchedData.find(item => item.id === 'totalRevenueSpacer')

            let series = [];
            if (activeYear === '2022' && data2022) {
                series = [{ name: '2022', data: data2022.data }];
            } else if (activeYear === '2023' && data2023) {
                series = [{ name: '2023', data: data2023.data }];
            } else if (activeYear === 'all') {
                series = [data2022, spacer, data2023].filter(Boolean).map(item => ({
                    name: item.name,
                    data: item.data
                }));
            }
            // .filter(Boolean) is to remove any falsy values from the array
            setSeriesData(series);
        } catch (error) {
            console.error("Error fetching data:", error);
            setSeriesData([]);
        }
    }

    getData();
}, [activeYear]);
// re-fetch when it changes
 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    const radialOptions = {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            startAngle: 0,
            endAngle: 280.8,
            hollow: {
              size: '40%',
            //   background: 'transparent',
            },
            dataLabels: {
              name: {
                offsetY: -10,
                show: true,
                color: '#888',
                fontSize: '17px'
              },
              value: {
                color: '#111',
                fontSize: '24px',
                show: true,
              },
            },
            track: {
              background: 'white',
              strokeWidth: '0%',
            },

          }
        },
     
        fill: {
            type: 'gradient',
            gradient: {
            //   shade: 'dark',
            //   shadeIntensity: 1,
              type: 'radial',
              gradientToColors: ['rgba(105, 108, 255, 0.08)'], 
            //   inverseColors: false,
            //   opacityFrom: 0,
            //   opacityTo: 1,
              stops: [30, 70, 100],
               colorStops: [
                 {
                   offset: 30,
                   color: "rgb(105, 108, 255)", 
                   opacity: 0.2
                 },
                 {
                    offset: 70,
                    color: "rgb(105, 108, 255)", 
                    opacity: 0.6
                  },
                 {
                   offset: 100,
                   color: "rgb(105, 108, 255)", 
                   opacity: 1
                 }
               ]
            }
          },
          
        stroke: {
          lineCap: 'butt',
          dashArray: 8,
          width: -5,
        },
        labels: ['Growth']
      };
    
      const radialSeries = [78];
      
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7} xl={8}>
        <Card sx={{borderBottomRightRadius:0, borderTopRightRadius:0}}>
          <CardContent>
            <Typography variant="h6">Total Revenue
            </Typography>
            <span
                style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: colors['2022'],
                    marginRight: '-6px'
                }}
            ></span>
            <Button size="small" onClick={() => handleYearClick('2022')}>
                2022
            </Button>
            <span
                style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: colors['2023'],
                marginRight: '-6px'
                }}
            ></span>
            <Button size="small" onClick={() => handleYearClick('2023')}>
                2023
            </Button>
            <ReactApexcharts
              options={chartOptions}
              series={seriesData}
              type="bar"
              height={300}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={5} xl={4}>
        <Card style={{ marginLeft: '-7px', borderBottomLeftRadius:0, borderTopLeftRadius:0 }}>
          <CardContent>
            <Button variant="outlined" size="small" aria-controls="simple-menu" 
              aria-haspopup="true" 
              onClick={handleClick} style={{ marginBottom: '20px', marginLeft: '80px' }}>
              2024
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" fontSize="22px" className="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>2023</MenuItem>
              <MenuItem onClick={handleClose}>2022</MenuItem>
              <MenuItem onClick={handleClose}>2021</MenuItem>
            </Menu>
            <ReactApexcharts
              options={radialOptions}
              series={radialSeries}
              type="radialBar"
              height={255}
            />
            <Typography variant="body1" style={{ marginTop: '2px', marginLeft: '40px' }}>
              62% Company Growth
            </Typography>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Box display="flex" alignItems="center">
                <Box className="MuiAvatar-rounded MuiAvatar-colorDefault css-z3just" sx={{ backgroundColor: 'rgba(3, 195, 236, 0.16)', width: '38px', height: '38px', display:'flex', alignItems:'center', justifyContent: 'center', borderRadius:'5px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                    <path fill="rgb(3, 195, 236)" d="M16 12h2v4h-2z"></path>
                    <path fill="rgb(3, 195, 236)" d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"></path>
                    </svg>
                </Box>
                <Box ml={2}>
                  <Typography variant="body2">2023</Typography>
                  <Typography variant="body1">$32.5k</Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
              <Box className="MuiAvatar-rounded MuiAvatar-colorDefault css-z3just" sx={{ backgroundColor: 'rgba(105, 108, 255, 0.16)', width: '38px', height: '38px', display:'flex', alignItems:'center', justifyContent: 'center', borderRadius:'5px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                    <path fill="rgb(105, 108, 255)" d="M16 12h2v4h-2z"></path>
                    <path fill="rgb(105, 108, 255)" d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429c0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z"></path>
                    </svg>
                </Box>
                <Box ml={2}>
                  <Typography variant="body2">2022</Typography>
                  <Typography variant="body1">$41.2k</Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TotalRevenueChart;
