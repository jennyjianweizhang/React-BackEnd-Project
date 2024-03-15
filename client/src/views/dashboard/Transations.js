import React, { useState } from 'react';
import { Grid, Card, CardHeader, CardContent, Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TransactionCard = () => {
  const transactions = [
    {
      image: 'http://127.0.0.1:8000/cards/paypal-error.png',
      title: 'Paypal',
      subtitle: 'Send money',
      amount: '+82.6',
      currency: 'USD'
    },
    {
      image: 'http://127.0.0.1:8000/cards/wallet-primary.png',
      title: 'Wallet',
      subtitle: 'Mac\'D',
      amount: '+270.69',
      currency: 'USD'
    },
    {
        image: 'http://127.0.0.1:8000/cards/chart-info.png',
        title: 'Transfer',
        subtitle: 'Refund',
        amount: '+637.91',
        currency: 'USD'
    },
    {
        image: 'http://127.0.0.1:8000/cards/credit-card-success.png',
        title: 'Wallet',
        subtitle: 'Mac\'D',
        amount: '+270.69',
        currency: 'USD'
    },
    {
        image: 'http://127.0.0.1:8000/cards/wallet-primary.png',
        title: 'Credit Card',
        subtitle: 'Ordered Food',
        amount: '-838.71',
        currency: 'USD'
    },
    {
        image: 'http://127.0.0.1:8000/cards/credit-card-warning.png',
        title: 'Wallet',
        subtitle: 'Starbucks',
        amount: '+203.33',
        currency: 'USD'
    },
  ];

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
          title="Transactions"
          action={
            <IconButton aria-haspopup="true" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          sx={{marginTop:2}}
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
          {transactions.map((transaction, index) => (
            <Box key={index} display="flex" alignItems="center" mb={1.9}>
              <Box sx={{ 
                        width: 45, 
                        height: 45, 
                        marginRight: 2, 
                        backgroundImage: `url(${transaction.image})`,
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                    }} 
                src={transaction.image} />
              <Box ml={2} mb={2}>
                <Typography variant="body2" sx={{fontSize:'14px', color:'rgba(50, 71, 92, 0.38)'}}>{transaction.title}</Typography>
                <Typography variant="body1" sx={{fontSize:'16px', color:'rgba(50, 71, 92, 0.87)', fontWeight:500}}>{transaction.subtitle}</Typography>
              </Box>
              <Box ml='auto' sx={{display:'flex'}}>
                <Typography variant="body1" sx={{fontSize:'16px', color:'rgba(50, 71, 92, 0.87)', fontWeight:500}}>{transaction.amount}</Typography>
                <Typography variant="body1" ml={2} sx={{fontSize:'16px', color:'rgba(50, 71, 92, 0.38)'}}>{transaction.currency}</Typography>
              </Box>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TransactionCard;
