import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  LinearProgress,
  Tabs,
  Tab,
} from "@mui/material";

const BrowserData = () => {
  const countries = [
    {
      id: 1,
      name: "USA",
      visits: "87.24k",
      percentage: 38.12,
      image: "http://127.0.0.1:8000/flags/usa.png",
      color: "primary",
    },
    {
      id: 2,
      name: "Brazil",
      visits: "42.69k",
      percentage: 28.23,
      image: "http://127.0.0.1:8000/flags/brazil.png",
      color: "success",
    },
    {
      id: 3,
      name: "India",
      visits: "12.58k",
      percentage: 13.82,
      image: "http://127.0.0.1:8000/flags/india.png",
      color: "error",
    },
    {
      id: 4,
      name: "Australia",
      visits: "4.13k",
      percentage: 12.72,
      image: "http://127.0.0.1:8000/flags/australia.png",
      color: "warning",
    },
    {
      id: 5,
      name: "China",
      visits: "2.21k",
      percentage: 7.11,
      image: "http://127.0.0.1:8000/flags/china.png",
      color: "info",
    },
    {
      id: 6,
      name: "France",
      visits: "1.56k",
      percentage: 6.59,
      image: "http://127.0.0.1:8000/flags/france.png",
      color: "success",
    },
  ];

  const browsers = [
    {
      id: 1,
      name: "Chrome",
      visits: "8.92k",
      percentage: 64.91,
      image: "http://127.0.0.1:8000/system/chrome.png",
      color: "primary",
    },
    {
      id: 2,
      name: "Safari",
      visits: "1.29k",
      percentage: 19.03,
      image: "http://127.0.0.1:8000/system/safari.png",
      color: "success",
    },
    {
      id: 3,
      name: "Firefox",
      visits: "328",
      percentage: 3.26,
      image: "http://127.0.0.1:8000/system/firefox.png",
      color: "error",
    },
    {
      id: 4,
      name: "Edge",
      visits: "142",
      percentage: 3.99,
      image: "http://127.0.0.1:8000/system/edge.png",
      color: "warning",
    },
    {
      id: 5,
      name: "Opera",
      visits: "85",
      percentage: 2.12,
      image: "http://127.0.0.1:8000/system/opera.png",
      color: "info",
    },
    {
      id: 6,
      name: "Brave",
      visits: "36",
      percentage: 1.06,
      image: "http://127.0.0.1:8000/system/brave.png",
      color: "success",
    },
  ];

  const systems = [
    {
      id: 1,
      name: "Windows",
      visits: "475.26k",
      percentage: 61.5,
      image: "http://127.0.0.1:8000/system/windows.png",
      color: "primary",
    },
    {
      id: 2,
      name: "Mac",
      visits: "89.12k",
      percentage: 15.67,
      image: "http://127.0.0.1:8000/system/mac.png",
      color: "success",
    },
    {
      id: 3,
      name: "Ubuntu",
      visits: "38.68k",
      percentage: 5.82,
      image: "http://127.0.0.1:8000/system/ubuntu.png",
      color: "error",
    },
    {
      id: 4,
      name: "Linux",
      visits: "30.27k",
      percentage: 5.03,
      image: "http://127.0.0.1:8000/system/linux.png",
      color: "warning",
    },
    {
      id: 5,
      name: "Chrome",
      visits: "8.34k",
      percentage: 3.25,
      image: "http://127.0.0.1:8000/system/chrome.png",
      color: "info",
    },
    {
      id: 6,
      name: "Cent",
      visits: "2.25k",
      percentage: 1.76,
      image: "http://127.0.0.1:8000/system/cent.png",
      color: "success",
    },
  ];

  const [value, setValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid>
      <Card>
        <CardContent>
          <Tabs
            value={value}
            onChange={handleTabChange}
            aria-label="customized tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Browser" />
            <Tab label="Operating System" />
            <Tab label="Country" />
          </Tabs>

          {value === 0 && (
            <TableContainer sx={{marginTop: 3.5}}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell>Browser</TableCell>
                    <TableCell>Visits</TableCell>
                    <TableCell>Data in Percentage</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {browsers.map((browser) => (
                    <TableRow key={browser.id}>
                      <TableCell>{browser.id}</TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <img
                            width="24"
                            height="24"
                            src={browser.image}
                            alt={browser.name}
                          />
                          <Typography sx={{ marginLeft: 2 }}>
                            {browser.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{browser.visits}</TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <LinearProgress
                            variant="determinate"
                            value={browser.percentage}
                            color={browser.color}
                            sx={{
                              width: "100px",
                              height: "10px",
                              borderRadius: "10px",
                              backgroundColor: "rgb(235, 238, 240)",
                            }}
                          />
                          <Typography sx={{ marginLeft: 3 }}>
                            {browser.percentage}%
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {value === 1 && (
            <TableContainer sx={{marginTop: 3.5}}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell>System</TableCell>
                    <TableCell>Visits</TableCell>
                    <TableCell>Data in Percentage</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {systems.map((system) => (
                    <TableRow key={system.id}>
                      <TableCell>{system.id}</TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <img
                            width="24"
                            height="24"
                            src={system.image}
                            alt={system.name}
                          />
                          <Typography sx={{ marginLeft: 2 }}>
                            {system.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{system.visits}</TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <LinearProgress
                            variant="determinate"
                            value={system.percentage}
                            color={system.color}
                            sx={{
                              width: "100px",
                              height: "10px",
                              borderRadius: "10px",
                              backgroundColor: "rgb(235, 238, 240)",
                            }}
                          />
                          <Typography sx={{ marginLeft: 3 }}>
                            {system.percentage}%
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {value === 2 && (
            <TableContainer sx={{marginTop: 3.5}}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>Visits</TableCell>
                    <TableCell>Data in Percentage</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {countries.map((country) => (
                    <TableRow key={country.id}>
                      <TableCell>{country.id}</TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <img
                            width="24"
                            height="24"
                            src={country.image}
                            alt={country.name}
                          />
                          <Typography sx={{ marginLeft: 2 }}>
                            {country.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{country.visits}</TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <LinearProgress
                            variant="determinate"
                            value={country.percentage}
                            color={country.color}
                            sx={{
                              width: "100px",
                              height: "10px",
                              borderRadius: "10px",
                              backgroundColor: "rgb(235, 238, 240)",
                            }}
                          />
                          <Typography sx={{ marginLeft: 3 }}>
                            {country.percentage}%
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BrowserData;
