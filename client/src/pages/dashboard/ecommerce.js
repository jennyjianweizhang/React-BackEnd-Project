import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// ** Custom Components Imports
import CardStatisticsVerticalComponent from "src/@core/components/card-statistics/card-stats-vertical";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

import Congratulations from "src/views/ecommerce/Congratulation";
import NewVisitors from "src/views/ecommerce/NewVisitors";
import ProfitCard from "src/views/ecommerce/Profit";
import ExpensesChart from "src/views/ecommerce/Expenses";
import TotalIncome from "src/views/ecommerce/TotalIncome";
import PerformanceChart from "src/views/ecommerce/Performance";
import ConversionRateCard from "src/views/ecommerce/ConversionRate";
import SalesCard from "src/views/ecommerce/Sales";
import ExpensesSecChart from "src/views/ecommerce/ExpensesSec";
import ProductPaid from "src/views/ecommerce/ProductPayment";
import TotalBalanceCard from "src/views/ecommerce/TotalBalance";

import { sendDataToBackend } from "src/@core/services/ecommerceDataService";
import datasetEcommerce from "src/@core/data/datasetEcommerce";

const TotalIncomeReport = [
  {
    imgSrc: "http://127.0.0.1:8000/cards/paypal-primary.png",
    title: "Income",
    value: "$42,845",
    increase: "+2.7K",
  },
  {
    imgSrc: "http://127.0.0.1:8000/cards/shopping-bag.png",
    title: "Expense",
    value: "$38,658",
    decrease: "-1.15K",
  },
  {
    imgSrc: "http://127.0.0.1:8000/cards/wallet-info.png",
    title: "Profit",
    value: "$18,220",
    increase: "+1.34K",
  },
];

const AnalyticsDashboard = () => {
  async function addData() {
    try {
      const res = await sendDataToBackend(datasetEcommerce);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Congratulations />
        </Grid>
        <Grid item xs={12} md={8}>
          <NewVisitors />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid
            container
            spacing={6}
            alignItems="stretch"
            justifyContent="space-between"
          >
            <Grid item xs={6} md={3} lg={6}>
              <CardStatisticsVerticalComponent
                stats="$4,679"
                title="Sales"
                color="secondary"
                subtitle="&#8593;28.14%"
                subtitleColor="#71dd37"
                icon={
                  <img
                    src="http://127.0.0.1:8000/cards/wallet.png"
                    alt="Sales"
                    style={{ width: "42px", height: "42px" }}
                  />
                }
              />
            </Grid>
            <Grid item xs={6} md={3} lg={6}>
              <ProfitCard />
            </Grid>
            <Grid item xs={6} md={3} lg={6}>
              <ExpensesChart />
            </Grid>
            <Grid item xs={6} md={3} lg={6}>
              <CardStatisticsVerticalComponent
                stats="$14,854"
                title="Transactions"
                color="secondary"
                subtitle="&#8593;17.53%"
                subtitleColor="#71dd37"
                icon={
                  <img
                    src="http://127.0.0.1:8000/cards/wallet-primary.png"
                    alt="Sales"
                    style={{ width: "42px", height: "44px" }}
                  />
                }
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={8}>
          <TotalIncome datas={TotalIncomeReport} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <PerformanceChart />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ConversionRateCard />
        </Grid>

        <Grid item xs={12} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6} md={3} lg={6}>
              <CardStatisticsVerticalComponent
                stats="$42,389"
                title="Revenue"
                color="secondary"
                subtitle="&#8593;52.76%"
                subtitleColor="#71dd37"
                icon={
                  <img
                    src="http://127.0.0.1:8000/cards/stats-vertical-desktop.png"
                    alt="Sales"
                    style={{ width: "42px", height: "42px" }}
                  />
                }
              />
            </Grid>
            <Grid item xs={6} md={3} lg={6}>
              <SalesCard />
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <ExpensesSecChart />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8}>
          <ProductPaid />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TotalBalanceCard />
        </Grid>
      </Grid>
      <button onClick={addData}>addData</button>
    </ApexChartWrapper>
  );
};

export default AnalyticsDashboard;
