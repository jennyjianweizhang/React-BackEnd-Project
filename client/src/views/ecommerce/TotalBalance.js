import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  Box,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReactApexcharts from "src/@core/components/react-apexcharts";
// import { fetchData } from "src/@core/services/ecommerceDataService";
import { fetchAllData } from "src/store/ecommerceData";

const TotalBalanceCard = () => {
  const chartOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      colors: ["rgb(255, 171, 0)"],
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        show: true,
        offsetY: 5,
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
    annotations: {
      points: [
        {
          x: "Jun",
          y: 62,
          marker: {
            size: 7,
            fillColor: "#fff",
            strokeColor: "rgb(255, 171, 0)",
            strokeWidth: 4,
            radius: 8,
          },
        },
      ],
    },
  };

  // const chartSeries = [
  //   {
  //     name: "Balance",
  //     data: [10, 41, 25, 51, 39, 62],
  //   },
  // ];

  // const [chartSeries, setSeries] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const fetchedData = await fetchData();
  //       console.log(fetchedData);

  //       if (
  //         fetchedData &&
  //         Array.isArray(fetchedData) &&
  //         fetchedData.length > 0
  //       ) {
  //         const balanceDataSeries = fetchedData.find(
  //           (item) => item.name === "Balance"
  //         );
  //         if (balanceDataSeries) {
  //           setSeries([
  //             {
  //               name: balanceDataSeries.name,
  //               data: balanceDataSeries.data,
  //             },
  //           ]);
  //         } else {
  //           console.log("Balance Data not found");
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   getData();
  // }, []);

  const dispatch = useDispatch();
  const { allData, isLoading } = useSelector((state) => state.ecommerceData);
  const [chartSeries, setSeries] = useState([]);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  useEffect(() => {
    const balanceDataSeries = allData.find((item) => item.name === "Balance");
    if (balanceDataSeries) {
      setSeries([
        { name: balanceDataSeries.name, data: balanceDataSeries.data },
      ]);
    }
  }, [allData]);

  // if (isLoading) return <div>Loading...</div>;

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
        <CardHeader
          title="Total Balance"
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
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center" mt={4}>
                <Box
                  sx={{
                    bgcolor: "rgba(255, 171, 0, 0.16)",
                    color: "rgb(255, 171, 0)",
                    padding: "0.5rem",
                    borderRadius: "0.3rem",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    fontSize="22px"
                    className="iconify iconify--bx"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 3H5C3.346 3 2 4.346 2 6v12c0 1.654 1.346 3 3 3h15c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19c-.552 0-1-.449-1-1V6c0-.551.448-1 1-1h15v3h-6c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h6.001v3H5zm15-9v4h-6v-4h6z"
                    ></path>
                  </svg>
                </Box>
                <Box ml={2}>
                  <Typography variant="h6">$2.54k</Typography>
                  <Typography variant="body2">Wallet</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center" mt={4}>
                <Box
                  sx={{
                    bgcolor: "rgba(133, 146, 163, 0.16)",
                    color: "rgb(133, 146, 163)",
                    padding: "0.5rem",
                    borderRadius: "0.3rem",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    fontSize="22px"
                    className="iconify iconify--bx"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429c0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z"
                    ></path>
                  </svg>
                </Box>
                <Box ml={2}>
                  <Typography variant="h6">$4.21k</Typography>
                  <Typography variant="body2">Paypal</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box mt={4} sx={{ position: "relative", minHeight: "217px" }}>
            <ReactApexcharts
              options={chartOptions}
              series={chartSeries}
              type="line"
              height={217}
            />
          </Box>
          <Divider />
          <Box p={2} display={"flex"} mt={7}>
            <Box>
              <Typography variant="body2">
                You have done 57.6% more sales.
              </Typography>
              <Typography variant="body2">
                Check your new badge in your profile.
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  bgcolor: "rgb(255, 171, 0, 0.16)",
                  color: "rgb(255, 171, 0)",
                  padding: "0.3rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M10.707 17.707L16.414 12l-5.707-5.707l-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                </svg>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TotalBalanceCard;
