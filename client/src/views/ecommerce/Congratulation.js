import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const Congratulations = () => {

  const baseURL = 'http://127.0.0.1:8000/';
  const filename = 'trophy2.png'; 
  const folder = 'misc'
  const imageUrl = `${baseURL}${folder}/${filename}`; 

  return (
    <Card>
      <CardContent
        style={{ display: "flex", flexWrap: "wrap", position: "relevant" }}
      >
        <div style={{ flex: 1, minWidth: "60%" }}>
          <Typography
            variant="body1"
            gutterBottom
            style={{ color: "rgba(50, 71, 92, 0.87)", fontWeight: "500" }}
          >
            Congratulations Katie!
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{ color: "rgba(50, 71, 92, 0.6)", fontSize: "0.875rem" }}
          >
            Best seller of the month
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            style={{
              color: "rgb(105, 108, 255)",
              fontSize: "1.625rem",
              marginTop: "1.4rem",
            }}
          >
            $48.9k
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{
              color: "gba(50, 71, 92, 0.38)",
              fontSize: "0.875rem",
              marginTop: "0.5rem",
            }}
          >
            78% of target
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginTop: "1.2rem" }}
          >
            View Sales
          </Button>
        </div>
        <div
          style={{
            flex: 1,
            minWidth: "40%",
            // display: "flex",
            // justifyContent: "flex-end",
          }}
        >
          <img
            alt="trophy"
            src={imageUrl}
            style={{
              position: "absolute",
              top:'28.2%',
              width: "7rem",
              height: "9.67rem",
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Congratulations;
