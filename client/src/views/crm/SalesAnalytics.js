import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactApexcharts from "src/@core/components/react-apexcharts";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { fetchAllData } from "src/store/crmData";
// import { fetchData } from "src/@core/services/ecommerceDataService";

const SalesAnalytics = () => {

  const options = {
    chart: {
      type: "heatmap",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#696cff"],
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    },
  };

  const series = [
    {
      name: "1K",
      data: [
        { x: "1", y: 250 },
        { x: "2", y: 750 },
        { x: "3", y: 375 },
        { x: "4", y: 575 },
        { x: "5", y: 875 },
        { x: "6", y: 575 },
        { x: "7", y: 575 },
        { x: "8", y: 575 },
      ],
    },
    {
      name: "2K",
      data: [
        { x: "1", y: 350 },
        { x: "2", y: 3350 },
        { x: "3", y: 1350 },
        { x: "4", y: 1350 },
        { x: "5", y: 1350 },
        { x: "6", y: 1350 },
        { x: "7", y: 1350 },
        { x: "8", y: 350 },
      ],
    },
    {
      name: "3K",
      data: [
        { x: "1", y: 220 },
        { x: "2", y: 1220 },
        { x: "3", y: 3220 },
        { x: "4", y: 2220 },
        { x: "5", y: 2220 },
        { x: "6", y: 2220 },
        { x: "7", y: 1220 },
        { x: "8", y: 220 },
      ],
    },
    {
      name: "4K",
      data: [
        { x: "1", y: 290 },
        { x: "2", y: 1290 },
        { x: "3", y: 2290 },
        { x: "4", y: 3290 },
        { x: "5", y: 3290 },
        { x: "6", y: 2290 },
        { x: "7", y: 1290 },
        { x: "8", y: 290 },
      ],
    },
    {
      name: "5K",
      data: [
        { x: "1", y: 650 },
        { x: "2", y: 1650 },
        { x: "3", y: 2650 },
        { x: "4", y: 3650 },
        { x: "5", y: 3650 },
        { x: "6", y: 2650 },
        { x: "7", y: 1650 },
        { x: "8", y: 650 },
      ],
    },
    {
      name: "6K",
      data: [
        { x: "1", y: 260 },
        { x: "2", y: 1260 },
        { x: "3", y: 2260 },
        { x: "4", y: 2260 },
        { x: "5", y: 2260 },
        { x: "6", y: 3260 },
        { x: "7", y: 1260 },
        { x: "8", y: 260 },
      ],
    },
    {
      name: "7K",
      data: [
        { x: "1", y: 274 },
        { x: "2", y: 1274 },
        { x: "3", y: 1274 },
        { x: "4", y: 1274 },
        { x: "5", y: 1274 },
        { x: "6", y: 1274 },
        { x: "7", y: 3274 },
        { x: "8", y: 274 },
      ],
    },
    {
      name: "8K",
      data: [
        { x: "1", y: 850 },
        { x: "2", y: 850 },
        { x: "3", y: 815 },
        { x: "4", y: 315 },
        { x: "5", y: 965 },
        { x: "6", y: 815 },
        { x: "7", y: 815 },
        { x: "8", y: 815 },
      ],
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [chartSeries, setSeries] = useState([]);
  const dispatch = useDispatch();
  const { allData, isLoading } = useSelector((state) => state.crmData);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  useEffect(() => {
    const filteredData = allData.filter(
      (item) => item.id.startsWith("SalesAnalytics")
    );

    const chartData = filteredData.map((item) => ({
      name: item.name,
      data: item.data,
    }));
    setSeries(chartData);

  }, [allData]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const fetchedData = await fetchData();
  //       console.log(fetchedData);

  //       const filteredData = fetchedData.filter((item) =>
  //         item.id.startsWith("SalesAnalytics")
  //       );

  //       const chartData = filteredData.map((item) => ({
  //         name: item.name,
  //         data: item.data,
  //       }));

  //       console.log(chartData);
  //       setSeries(chartData);
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
          title={<Typography variant="h6">Sales Analytics</Typography>}
          subheader={
            <div style={{ display: "flex" }}>
              {" "}
              <Typography
                sx={{
                  backgroundColor: "rgba(113, 221, 55, 0.16)",
                  color: "rgb(113, 221, 55)",
                  marginTop: "7px",
                  padding: "7px",
                }}
              >
                +42.6%
              </Typography>
              <Typography
                variant="body1"
                style={{
                  marginTop: "13px",
                  marginLeft: "6px",
                  fontSize: "16px",
                  color: "rgba(50, 71, 92, 0.6)",
                }}
              >
                Than last year
              </Typography>
            </div>
          }
          sx={{ marginTop: 2, display: "flex" }}
        />
        <CardContent>
          <Button
            variant="outlined"
            size="small"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{ marginTop: "-180px", marginLeft: "210px" }}
          >
            2024
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
                d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
              ></path>
            </svg>
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
            options={options}
            series={chartSeries}
            type="heatmap"
            height={315}
            style={{ marginTop: "-30px" }}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SalesAnalytics;
