import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { FaRupeeSign, FaUsers } from "react-icons/fa";
import "./styles/dashboard.css";

const DashboardComponent = () => {
  const cardData = [
    {
      title: "Total Users",
      value: "89",
      logo: FaUsers,
    },
    {
      title: "Today's Sales",
      value: "234",
      logo: FaRupeeSign,
    },
    {
      title: "Today's Win",
      value: "12",
      logo: FaRupeeSign,
    },
    {
      title: "Today's Cutting",
      value: "12",
      logo: FaRupeeSign,
    },
  ];
  return (
    <>
      <div className="dashboard-container">
        <Grid container spacing={2}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "100%",
                  backgroundColor: "#cccccc",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14, paddingLeft: "13px" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ paddingLeft: "13px" }}
                  >
                    {card.value}
                  </Typography>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </CardContent>
                <card.logo className="dashboardLogo" />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default DashboardComponent;
