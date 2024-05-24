import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,

} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Add = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8} xl={9}>
        <Card elevation={6}>
          <CardContent>
            <Grid container>
              <Grid item xs={12} xl={6}>
                <div>
                  <svg
                    width="22"
                    height="32"
                    viewBox="0 0 55 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="#696CFF" d="M30.1984 0.0144043C24.8945 0.425781 25.2534 6.16968 26.6435 7.65326C22.693 10.3649 13.1875 16.8867 6.76944 21.2803C1.21531 25.0824 -0.842975 34.6064 1.11159 40.8262C3.00952 46.8658 12.4904 51.3615 17.5337 52.7256C17.5337 52.7256 11.7188 56.0269 6.60358 60.0482C1.48831 64.0695 -0.622615 69.3436 3.06836 75.262C6.75933 81.1805 12.725 80.761 17.5257 78.6229C22.3264 76.4848 32.1683 69.1692 37.9402 65.1633C42.7282 61.5411 43.9669 53.6444 41.7631 46.9643C39.9758 41.5468 30.0969 36.4284 25.1792 34.6064C27.1946 33.1595 32.4935 29.4242 37.129 26.0909C38.7184 30.5636 43.9998 30.212 45.6103 27.8209C47.6216 23.4326 51.8339 13.4663 53.9579 8.55175C54.8862 4.81044 52.5639 2.78457 50.2227 2.35938C46.8672 1.75 38.3222 0.960115 30.1984 0.0144043Z"></path>
                  </svg>
                  <Typography variant="h5">Sneat</Typography>
                </div>
                <Typography>Office 149, 450 South Brand Brooklyn</Typography>
                <Typography>San Diego County, CA 91905, USA</Typography>
                <Typography>+1 (123) 456 7891, +44 (876) 543 2198</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} xl={3}>
        <Card elevation={6}>
          <CardContent>
            <Button variant="contained" fullWidth startIcon={<SendIcon />}>
              Send Invoice
            </Button>
            <Button variant="outlined" fullWidth>
              Preview
            </Button>
            <Button variant="outlined" fullWidth>
              Save
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Add;
