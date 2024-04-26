import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReactApexcharts from "src/@core/components/react-apexcharts";
// import { fetchData } from "src/@core/services/ecommerceDataService";
import { fetchAllData } from "src/store/ecommerceData";

const PerformanceChart = () => {
  const options = {
    chart: {
      type: "radar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yaxis: {
      show: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      position: "bottom",
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.8,
    },
    colors: ["#696cff", "#03c3ec"],
  };

  // const series = [
  //   {
  //     name: "Income",
  //     data: [70, 85, 90, 140, 110, 120],
  //   },
  //   {
  //     name: "Earning",
  //     data: [80, 80, 80, 100, 100, 150],
  //   },
  // ];

  // const [series, setSeries] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const fetchedData = await fetchData();
  //       console.log(fetchedData);

  //       const Performance1 = fetchedData.find(
  //         (item) => item.id === "Performance1"
  //       );
  //       const Performance2 = fetchedData.find(
  //         (item) => item.id === "Performance2"
  //       );

  //       setSeries([
  //         { name: Performance1.name, data: Performance1.data },
  //         { name: Performance2.name, data: Performance2.data },
  //       ]);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   getData();
  // }, []);

  const dispatch = useDispatch();
  const { allData, isLoading } = useSelector((state) => state.ecommerceData);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  // if (isLoading) return <div>Loading...</div>;

  useEffect(() => {
    const Performance1 = allData.find((item) => item.id === "Performance1");
    const Performance2 = allData.find((item) => item.id === "Performance2");
    if (Performance1 && Performance2) {
      setSeries([
        { name: Performance1.name, data: Performance1.data },
        { name: Performance2.name, data: Performance2.data },
      ]);
    }
  }, [allData]);

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
          title="Performance"
          action={
            <IconButton size="small" onClick={handleClick}>
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
          <Box display="flex">
            <Typography
              variant="body2"
              component="p"
              color={"rgba(50, 71, 92, 0.6)"}
            >
              <strong>Earning:</strong> $846.17
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ marginLeft: "3rem", color: "rgba(50, 71, 92, 0.6)" }}
            >
              <strong>Sales:</strong> 25.7M
            </Typography>
          </Box>

          <div style={{ minHeight: "313px", marginTop: "20px" }}>
            <ReactApexcharts
              options={options}
              series={series}
              type="radar"
              height={313}
            />
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PerformanceChart;
