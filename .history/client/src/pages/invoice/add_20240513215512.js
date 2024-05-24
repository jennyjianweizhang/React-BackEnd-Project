import React from 'react';
import { Grid, Card, CardContent, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const InvoiceComponent = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12} md={8} xl={9}>
                <Card elevation={6}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={12} xl={6}>
                                <div>
                                    <svg width="22" height="32" viewBox="0 0 55 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* SVG content */}
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

export default InvoiceComponent;
