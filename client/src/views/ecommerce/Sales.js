import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";

const SalesCard = () => {
  return (
    <Grid>
      <Card>
        <CardContent>
          <Typography variant="body1">Sales</Typography>
          <Typography
            variant="h5"
            sx={{ marginTop: "0.5rem", marginBottom: "0.4rem" }}
          >
            482k
          </Typography>
          <Box
            sx={{
              bgcolor: "rgba(3, 195, 236, 0.16)",
              borderRadius: "2px",
              px: 2, 
              py: 1, 
              display: "inline-flex",
              alignItems: "center",
              fontSize: "0.875rem",
            }}
          >
            <Typography variant="body2" sx={{color: "rgb(3, 195, 236)",}}>+34%</Typography>
          </Box>
          <Typography variant="body2" sx={{ marginTop: "0.8rem" }}>
            Sales Target
          </Typography>
          <Box
            sx={{ position: "relative", display: "flex", alignItems: "center" }}
          >
            <LinearProgress
              variant="determinate"
              value={78}
              color="info"
              sx={{ width: "100%", marginRight: 1, backgroundColor: "rgb(235, 238, 240)" }}
            />
            <Typography variant="body2" sx={{ minWidth: 35 }}>
              78%
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SalesCard;
