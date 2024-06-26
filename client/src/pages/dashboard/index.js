import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import BriefcaseVariantOutline from "mdi-material-ui/BriefcaseVariantOutline";

// ** Custom Components Imports
import CardStatisticsVerticalComponent from "src/@core/components/card-statistics/card-stats-vertical";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

import Trophy from "src/views/dashboard/Trophy";
import CustomizedApexChart from "src/@core/components/customized-apexcharts";
import TotalRevenueChart from "src/views/dashboard/TotalRevenue";
import RevenueChartComponent from "src/views/dashboard/Revenue";
import ProfitReportComponent from "src/views/dashboard/ProfitReport";
import OrderStatistics from "src/views/dashboard/OrderStatistics";
import TotalProfit from "src/views/dashboard/TotalProfit";
import TransactionCard from "src/views/dashboard/Transations";
import ActivityTimelineCard from "src/views/dashboard/ActivityTimeline";
import BrowserData from "src/views/dashboard/BrowserSystem";

import { sendDataToBackend } from "src/@core/services/analyticsDataService";
import dataReports from "src/@core/data/datasetAnalytics";

const Dashboard = () => {
  async function addData() {
    // const addDataToBackend = {
    //   "id": "profit",
    //   "name": "Profit data",
    //   "data": [10, 190, 45, 140, 125, 320],
    // }
    try {
      const res = await sendDataToBackend(dataReports);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <Trophy />
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <StatisticsCard />
        </Grid> */}
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CustomizedApexChart title="Order" stats="276K" />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats="$4,679"
                title="Sales"
                trend="negative"
                color="secondary"
                // trendNumber='+28.14%'
                subtitle="&#8593;28.14%"
                icon={
                  <img
                    src="http://127.0.0.1:8000/cards/wallet.png"
                    alt="Sales"
                    style={{ width: "42px", height: "42px" }}
                  />
                }
                // icon={<CurrencyUsd />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <TotalRevenueChart />
        </Grid>
        {/* <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid> */}
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats="$2,468"
                title="Payments"
                trend="negative"
                color="secondary"
                subtitle={
                  <Typography
                    sx={{ color: "rgb(255, 62, 29)", fontSize: "0.8rem" }}
                  >
                    &#8595;14.82%
                  </Typography>
                }
                icon={
                  <img
                    src="http://127.0.0.1:8000/cards/paypal-error.png"
                    alt="Sales"
                    style={{ width: "42px", height: "42px" }}
                  />
                }
              />
            </Grid>
            <Grid item xs={6}>
              <RevenueChartComponent />
            </Grid>
            <Grid item xs={12}>
              <ProfitReportComponent
                stats="862"
                trend="negative"
                trendNumber="-18%"
                title="New Project"
                subtitle="Yearly Project"
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <OrderStatistics />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalProfit />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TransactionCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ActivityTimelineCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BrowserData />
        </Grid>
      </Grid>
      <button onClick={addData}>addData</button>
    </ApexChartWrapper>
  );
};

export default Dashboard;
