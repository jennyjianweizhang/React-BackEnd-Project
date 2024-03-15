import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import ReactApexcharts from "src/@core/components/react-apexcharts";
import { fetchData } from "src/@core/services/dataService";

const GeneratedLeads = () => {
    const initialSeries = [23, 27, 22, 28];
    const categories = ["1st Week", "2nd Week", "3rd Week", "4th Week"];

    const [selectedSegment, setSelectedSegment] = useState({
        name: 'Average',
        value: (initialSeries.reduce((a, b) => a + b, 0) / initialSeries.length).toFixed(0) + '%'
    });
    const handleChartClick = (event, chartContext, config) => {
    const clickedIndex = config.dataPointIndex;

    if (clickedIndex >= 0 && clickedIndex < initialSeries.length) {
            setSelectedSegment({
            name: categories[clickedIndex],
            value: initialSeries[clickedIndex]
            });
        }
    };
  const chartOptions = {
    chart: {
      type: "donut",
      events:{
        dataPointSelection: handleChartClick,
      },
      toolbar: {
        show: false,
      },
    },
    labels: ["1st Week", "2nd Week", "3rd Week", "4th Week"],
    colors: [
      "rgba(113, 221, 55, 0.75)",
      "rgba(113, 221, 55, 0.5)",
      "rgba(113, 221, 55, 0.25)",
      "rgba(113,221,55,1)",
    ],

    plotOptions: {
        pie: {
          donut: {
          size:'70%',
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
                label: selectedSegment.name,
                fontSize:'12px',
                color: 'rgba(50, 71, 92, 0.87)',
                formatter: function () {
                  return selectedSegment.value;
                }
              }
            },
          }
        }
      },
    stroke: {
        lineCap: 'round'
    },
    legend: {
      show: false,
    },
    dataLabels:{
        enabled: false
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

//   const chartSeries = [23, 27, 22, 28];

  // const [series, setSeries] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const fetchedData = await fetchData();
  //       console.log(fetchedData);

  //       if (fetchedData && Array.isArray(fetchedData) && fetchedData.length > 0) {
  //         const profitDataSeries = fetchedData.find(item => item.name === 'Profit data');
  //         if (profitDataSeries) {
  //           setSeries([{
  //             name: profitDataSeries.name,
  //             data: profitDataSeries.data
  //           }]);
  //         } else {
  //           console.log('Profit data not found');
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   getData();
  // }, []);

  // async function getData(){
  //   try {
  //     const fetchedData = await fetchData();
  //     console.log(fetchedData);
  //   } catch(error){
  //     console.log(error);
  //   }
  // }

  return (
    <Card sx={{ width: "330px", height: "202px" }}>
      {/* <button onClick={getData}>getData</button> */}
      <CardContent>
        <Box display="flex" >
          <Box>
            <Typography variant="h6" noWrap>
              Generated Leads
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Monthly Report
            </Typography>
            <Typography variant="h5" mt={4}>
              4,234
            </Typography>
            <Box display="flex" alignItems="center" mt={4}>
              <Typography
                variant="body2"
                sx={{ ml: 1, mt: 2, color: "#71DD37" }}
              >
                &#8593;12.8%
              </Typography>
            </Box>
          </Box>
          <Box sx={{ minHeight: "150px", marginTop:'30px', marginLeft: '-20px'}}>
            <ReactApexcharts
              options={chartOptions}
              series={initialSeries}
              type="donut"
              height={160}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default GeneratedLeads;
