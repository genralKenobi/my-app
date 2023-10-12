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
import "./styles/trackLiveGame.css";

const DashboardComponent = () => {
  const totalCounts = [
    {
      title: "Total Live Game",
      value: "89",
      logo: FaUsers,
    },
    {
      title: "Total Close Game",
      value: "234",
      logo: FaRupeeSign,
    },
    {
      title: "Total Income",
      value: "12",
      logo: FaRupeeSign,
    },
    {
      title: "Daily",
      value: "12",
      logo: FaRupeeSign,
    },
  ];
  const gameRate = [
    {
      title: "RAJANDHANI NIGHT",
      value: "₹ 657/-",
    },
    {
      title: "MILAN NIGHT",
      value: "₹ 647/-",
    },
    {
      title: "SRIDEVI NIGHT",
      value: "₹ 400/-",
    },
    {
      title: "KALYAN",
      value: "₹ 730/-",
    },
    {
      title: "MILAN DAY",
      value: "₹ 1450/-",
    },
    {
      title: "RAJANDHANI DAY",
      value: "₹ 45/-",
    },
    {
      title: "TIME BAZZAR",
      value: "₹ 89/-",
    },
    {
      title: "SRIDEVI",
      value: "₹ 756/-",
    },
    {
      title: "MAIN BAZZAR",
      value: "₹ 766/-",
    },
    {
      title: "KALYAN NIGHT",
      value: "₹ 566/-",
    },
  ];
  return (
    <>
      <div className="trackLiveGame-container">
        <Grid container spacing={2}>
          {totalCounts.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "100%",
                  backgroundColor: "#a7c957",
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
                <card.logo className="trackLiveGameLogo" />
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className="games-container">
          <h3 className="games-text">Games</h3>
          <div className="games">
            <Grid container spacing={2}>
              {gameRate.map((card, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      height: "100%",
                      backgroundColor: "#dee2e6",
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
                      {/* <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions> */}
                    </CardContent>
                    {/* <card.logo className="trackLiveGameLogo" /> */}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        <div className="games-container">
          <h3 className="games-text">Live Bidding</h3>
          <div className="games">
            <div className="liveBidding">No bidding found</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
