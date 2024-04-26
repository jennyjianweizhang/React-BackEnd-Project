import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReactApexcharts from "src/@core/components/react-apexcharts";
import { fetchAllData } from "src/store/crmData";
// import { fetchData } from "src/@core/services/ecommerceDataService";


const EarningReportCard = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const series = [{
  //   name: 'EarningData',
  //   data: [23, 81, 70, 31, 99, 46, 73],
  // }];

  const chartOptions = {
    chart: {
      type: "bar",
      height: 80,
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
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
      categories: ["M", "T", "W", "T", "F", "S", "S"],
      labels: {
        style: {
          colors: "rgba(50, 71, 92, 0.38)",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
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
    colors: [
      "rgba(105, 108, 255, 0.16)",
      "rgba(105, 108, 255, 0.16)",
      "rgba(105, 108, 255, 0.16)",
      "rgba(105, 108, 255, 0.16)",
      "rgb(105, 108, 255)",
      "rgba(105, 108, 255, 0.16)",
      "rgba(105, 108, 255, 0.16)",
    ],
  };

  const [series, setSeries] = useState([]);
  const dispatch = useDispatch();
  const { allData, isLoading } = useSelector((state) => state.crmData);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  useEffect(() => {
    const earningDataSeries = allData.find(
      (item) => item.name === "EarningData"
    );
    
    if (earningDataSeries) {
      setSeries([
        {
          name: earningDataSeries.name,
          data: earningDataSeries.data,
        },
      ]);
    }
  }, [allData]);

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
  //         const earningDataSeries = fetchedData.find(
  //           (item) => item.name === "EarningData"
  //         );
  //         if (earningDataSeries) {
  //           setSeries([
  //             {
  //               name: earningDataSeries.name,
  //               data: earningDataSeries.data,
  //             },
  //           ]);
  //         } else {
  //           console.log("earning data not found");
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   getData();
  // }, []);

  return (
    <Grid>
      <Card>
        <CardHeader
          title={<Typography variant="h6">Earning Report</Typography>}
          subheader={
            <Typography
              variant="body1"
              style={{
                marginTop: "8px",
                fontSize: "14px",
                color: "rgba(50, 71, 92, 0.6)",
              }}
            >
              Weekly Earnings Overview
            </Typography>
          }
          action={
            <IconButton aria-haspopup="true" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          sx={{ marginTop: 2 }}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Refresh</MenuItem>
          <MenuItem onClick={handleClose}>Share</MenuItem>
          <MenuItem onClick={handleClose}>Update</MenuItem>
        </Menu>
        <CardContent>
          <Box display="flex">
            <Box
              sx={{
                backgroundColor: "rgba(105, 108, 255, 0.16)",
                color: "rgb(105, 108, 255)",
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10 10.414l4 4l5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4l-7.707 7.707l1.414 1.414z"
                ></path>
                {/* <circle cx="11.75" cy="18" r="1" fill="currentColor"></circle> */}
              </svg>
            </Box>
            <Box marginLeft={5} display="flex">
              <Box>
                <Typography variant="body1">Net Profit</Typography>
                <Typography variant="body2">12.4k Sales</Typography>
              </Box>
              <Typography variant="body2" marginLeft={13} marginTop={3}>
                $1,619
              </Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                fontSize="22px"
                className="iconify iconify--bx"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                style={{ marginTop: "12px", color: "rgb(113, 221, 55)" }}
              >
                <path
                  fill="currentColor"
                  d="m6.293 13.293l1.414 1.414L12 10.414l4.293 4.293l1.414-1.414L12 7.586z"
                ></path>
              </svg>
              <Typography variant="body2" marginTop={3}>
                18.6%
              </Typography>
            </Box>
          </Box>
          <Box display="flex" marginTop={3}>
            <Box
              className="MuiAvatar-rounded MuiAvatar-colorDefault css-z3just"
              sx={{
                backgroundColor: "rgba(113, 221, 55, 0.16)",
                color: "rgb(113, 221, 55)",
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429c0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z"
                ></path>
                <circle cx="11.75" cy="18" r="1" fill="currentColor"></circle>
              </svg>
            </Box>
            <Box marginLeft={5} display="flex">
              <Box>
                <Typography variant="body1">Total Income</Typography>
                <Typography variant="body2">Sales, Affiliation</Typography>
              </Box>
              <Typography variant="body2" marginLeft={5} marginTop={3}>
                $3,571
              </Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                fontSize="22px"
                className="iconify iconify--bx"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                style={{ marginTop: "12px", color: "rgb(113, 221, 55)" }}
              >
                <path
                  fill="currentColor"
                  d="m6.293 13.293l1.414 1.414L12 10.414l4.293 4.293l1.414-1.414L12 7.586z"
                ></path>
              </svg>
              <Typography variant="body2" marginTop={3}>
                39.6%
              </Typography>
            </Box>
          </Box>
          <Box display="flex" marginTop={3}>
            <Box
              className="MuiAvatar-rounded MuiAvatar-colorDefault css-z3just"
              sx={{
                backgroundColor: "rgba(133, 146, 163, 0.16)",
                color: "rgb(133, 146, 163)",
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"
                ></path>
                {/* <circle cx="11.75" cy="18" r="1" fill="currentColor"></circle> */}
              </svg>
            </Box>
            <Box marginLeft={5} display="flex">
              <Box>
                <Typography variant="body1">Total Expenses</Typography>
                <Typography variant="body2">ADVT, Marketing</Typography>
              </Box>

              <Typography variant="body2" marginLeft={5} marginTop={3}>
                $430
              </Typography>
            </Box>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              fontSize="22px"
              className="iconify iconify--bx"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              style={{ marginTop: "12px", color: "rgb(113, 221, 55)" }}
            >
              <path
                fill="currentColor"
                d="m6.293 13.293l1.414 1.414L12 10.414l4.293 4.293l1.414-1.414L12 7.586z"
              ></path>
            </svg>
            <Typography variant="body2" marginTop={3}>
              52.8%
            </Typography>
          </Box>
          <Box style={{ minHeight: "105px" }}>
            <ReactApexcharts
              options={chartOptions}
              series={series}
              type="bar"
              height={105}
            />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EarningReportCard;
