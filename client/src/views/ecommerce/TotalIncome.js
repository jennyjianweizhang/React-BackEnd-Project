import React, {useState, useEffect} from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Box,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReactApexcharts from "src/@core/components/react-apexcharts";
import { fetchData } from 'src/@core/services/dataService';

const TotalIncome = ({ datas }) => {
  const chartOptions = {
    chart: {
      type: "area",
      height: 315,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: ["rgb(105, 108, 255)"],
      width: 4,
      dropShadow: {
        enabled: true,
        color: "red",
        top: 10,
        left: 50,
        blur: 0,
        opacity: 1,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return `$${value}K`;
        },
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    colors: ["rgb(105, 108, 255)"],
  };

  // const series = [
  //   {
  //     name: "Total Income",
  //     data: [3.35, 3.35, 4.8, 4.8, 2.95, 2.95, 1.8, 1.8, 3.75, 3.75, 5.7, 5.7],
  //   },
  // ];

  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const fetchedData = await fetchData(); 
        console.log(fetchedData);
        
        if (fetchedData && Array.isArray(fetchedData) && fetchedData.length > 0) {
          const incomeDataSeries = fetchedData.find(item => item.name === 'Total Income');
          if (incomeDataSeries) {
            setSeries([{
              name: incomeDataSeries.name,
              data: incomeDataSeries.data
            }]);
          } else {
            console.log('Income data not found');
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid>
      <Card>
        <Box display="flex">
          <Box flex={2}>
            <CardHeader
              title={
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    color: "rgba(50, 71, 92, 0.87)",
                  }}
                >
                  Total Income
                </Typography>
              }
              subheader={
                <Typography
                  variant="subtitle2"
                  style={{ color: "gray", marginBottom: "-1.5rem" }}
                >
                  Yearly report overview
                </Typography>
              }
            />
            <CardContent>
              <div style={{ minHeight: "315px" }}>
                <ReactApexcharts
                  options={chartOptions}
                  series={series}
                  type="area"
                  height={315}
                />
              </div>
            </CardContent>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box flex={1}>
            <CardHeader
              title={
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    color: "rgba(50, 71, 92, 0.87)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Report
                </Typography>
              }
              subheader={
                <Typography
                  variant="subtitle2"
                  style={{ color: "gray", fontSize: "0.8rem" }}
                >
                  Monthly Avg. $45.578k
                </Typography>
              }
              action={
                <IconButton aria-label="settings" onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Last 28 Days</MenuItem>
              <MenuItem onClick={handleClose}>Last Month</MenuItem>
              <MenuItem onClick={handleClose}>Last Year</MenuItem>
            </Menu>
            <CardContent>
              {datas.map((data, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  mb={5.5}
                  sx={{
                    backgroundColor: "rgb(245, 245, 249)",
                    padding: "0.5rem 0.75rem",
                  }}
                >
                  <Box
                    sx={{
                      padding: "0.5rem",
                      backgroundColor: "white",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={data.imgSrc}
                      sx={{
                        width: 24,
                        height: 24,
                        marginRight: 1,
                        backgroundColor: "white",
                      }}
                    />
                  </Box>

                  <Box ml={3} display={"flex"}>
                    <Box>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "1rem", lineHeight: "1.5" }}
                      >
                        {data.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "1.125rem",
                          lineHeight: "1.5",
                          color: "rgba(50, 71, 92, 0.87)",
                          fontWeight: "500",
                        }}
                      >
                        {data.value}
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        marginLeft: "3rem",
                        marginTop: "1.6rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      <Typography variant="body3">
                        {data.increase !== undefined && (
                          <span style={{ color: "rgb(113, 221, 55)" }}>
                            {data.increase}
                          </span>
                        )}
                        {data.decrease !== undefined && (
                          <span style={{ color: "rgb(255, 62, 29)" }}>
                            {data.decrease}
                          </span>
                        )}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
              {/* <Box
              display="flex"
              alignItems="center"
              mb={2}
              sx={{
                backgroundColor: "rgb(245, 245, 249)",
                padding: "0.5rem 0.75rem",
              }}
            >
              <Box src="/images/cards/paypal-primary.png" />
              <Box ml={2}>
                <Typography variant="body1">Income</Typography>
                <Typography variant="body2">$42,845</Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar src="/images/cards/shopping-bag.png" />
              <Box ml={2}>
                <Typography variant="body1">Expense</Typography>
                <Typography variant="body2">$38,658</Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar src="/images/cards/wallet-info.png" />
              <Box ml={2}>
                <Typography variant="body1">Profit</Typography>
                <Typography variant="body2">$18,220</Typography>
              </Box>
            </Box> */}
            </CardContent>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default TotalIncome;
