import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';

// ** Custom Components Imports
import CardStatisticsVerticalComponent from "src/@core/components/card-statistics/card-stats-vertical";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

import CustomerRating from "src/views/crm/CustomerRatings";
import OverviewAndSalesActivity from "src/views/crm/SalesActivity";
import Sessions from "src/views/crm/Sessions";
import GeneratedLeads from "src/views/crm/GeneratedLeads";
import TopProductsCard from "src/views/crm/TopProducts";
import EarningReportCard from "src/views/crm/EarningReport";
import SalesAnalytics from "src/views/crm/SalesAnalytics";
import SalesCountries from "src/views/crm/SalesCountries";
import SalesStats from "src/views/crm/SalesStats";
import TeamMembers from "src/views/crm/TeamMembers";
import CustomerPaid from "src/views/crm/CustomerPaid";


import { sendDataToBackend } from "src/@core/services/dataService";
import datasetCRM from "src/@core/data/datasetCrm";

const ProductsSales = [
  {
    image: 'http://127.0.0.1:8000/cards/avatar-oneplus-nord-error.png',
    title: 'Oneplus Nord',
    subtitle: 'Oneplus',
    amount: '$98,348',
  },
  {
    image: 'http://127.0.0.1:8000/cards/avatar-xiaomi-band.png',
    title: 'Smart Band 4',
    subtitle: 'Xiaomi',
    amount: '$15,459',
  },
  {
      image: 'http://127.0.0.1:8000/cards/avatar-microsoft-surface.png',
      title: 'Surface Pro X',
      subtitle: 'Microsoft',
      amount: '$4,589',
  },
  {
      image: 'http://127.0.0.1:8000/cards/avatar-apple-iphone.png',
      title: 'iPhone 13',
      subtitle: 'Apple',
      amount: '$84,345',
  },
  {
      image: 'http://127.0.0.1:8000/cards/avatar-beats-headphone.png',
      title: 'Bluetooth Earphone',
      subtitle: 'Beats',
      amount: '$10,3748',
  },
];
const ProductsVolume = [
  {
    image: 'http://127.0.0.1:8000/cards/avatar-hp-envy.png',
    title: 'ENVY Laptop',
    subtitle: 'HP',
    amount: '12.4k',
    increase:'+12.4%'
  },
  {
    image: 'http://127.0.0.1:8000/cards/avatar-apple-iMac.png',
    title: 'Apple',
    subtitle: 'iMac Pro',
    amount: '74.9k',
    decrease: '-8.5%'
  },
  {
      image: 'http://127.0.0.1:8000/cards/avatar-oneplus-nord-success.png',
      title: 'Oneplus Nord',
      subtitle: 'Oneplus',
      amount: '12.34k',
      increase:'+13.9%'
  },
  {
      image: 'http://127.0.0.1:8000/cards/avatar-fitbit-watch.png',
      title: 'Smart Watch',
      subtitle: 'Fitbit',
      amount: '4.4k',
      increase: '+17.6%'
  },
  {
      image: 'http://127.0.0.1:8000/cards/avatar-google-pixel.png',
      title: 'Pixel 4a',
      subtitle: 'Google',
      amount: '8.65k',
      decrease:'-11.8%'
  },
];
const Countries = [
  {
    image: 'http://127.0.0.1:8000/flags/usa.png',
    title: '$8,656k',
    subtitle: 'United states of america',
    amount: '894k',
    increase:'+25.8%'
  },
  {
    image: 'http://127.0.0.1:8000/flags/brazil.png',
    title: '$2,415k',
    subtitle: 'Brazil',
    amount: '645k',
    decrease: '-6.2%'
  },
  {
      image: 'http://127.0.0.1:8000/flags/india.png',
      title: '$865k',
      subtitle: 'India',
      amount: '148k',
      increase:'+12.4%'
  },
  {
      image: 'http://127.0.0.1:8000/flags/australia.png',
      title: '$745k',
      subtitle: 'Australia',
      amount: '86k',
      decrease: '-11.9%'
  },
  {
      image: 'http://127.0.0.1:8000/flags/belgium.png',
      title: '$45k',
      subtitle: 'Belgium',
      amount: '42k',
      increase:'+16.2%'
  },
  {
    image: 'http://127.0.0.1:8000/flags/china.png',
    title: '$12k',
    subtitle: 'China',
    amount: '8k',
    increase:'+14.8%'
},
];



const AnalyticsDashboard = () => {
  async function addData() {
    try {
      const res = await sendDataToBackend(datasetCRM);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={4}>
          <CustomerRating />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <OverviewAndSalesActivity />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Sessions
                title='Sessions'
                stats='2845'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$1,286'
                title='Order'
                color='secondary'
                subtitle='&#8595;13.24%'
                subtitleColor='#ff3e1d'
                icon={
                 <img src="http://127.0.0.1:8000/cards/stats-vertical-cube.png" alt="Sales" style={{ width: '42px', height: '42px' }} />
                }
              />
            </Grid>
            <Grid item xs={12}>
              <GeneratedLeads/>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <TopProductsCard 
          title="Sales"
          datas={ProductsSales}
          />
        </Grid>
        <Divider sx={{ ml: -5.7 }} />
        <Grid item xs={12} md={6} lg={4}>
            <TopProductsCard 
          title="Volume"
          datas={ProductsVolume}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EarningReportCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesAnalytics />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesCountries 
          datas={Countries}/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesStats />
        </Grid>
        <Grid item xs={12} md={5}>
          <TeamMembers />
        </Grid>
        <Grid item xs={12} md={7}>
          <CustomerPaid />
        </Grid>
      </Grid>
      <button onClick={addData}>addData</button>
    </ApexChartWrapper>
  );
};

export default AnalyticsDashboard;
