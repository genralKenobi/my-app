import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { AiFillHome, AiFillPlayCircle } from "react-icons/ai";
import { GrHome, GrUserAdmin } from "react-icons/gr";
import { HiDocumentReport } from "react-icons/hi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsFillTrophyFill } from "react-icons/bs";
import Navbar from "../components/Navbar";
import "./styles/Home.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { SiBetfair } from "react-icons/si";

const drawerWidth = 290;
// const drawerWidth = 240;

function Home(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const menuList = [
    {
      name: "Track Live Game",
      icon: <AiFillPlayCircle />,
      path: "/trackLiveGame",
    },
    {
      name: "Game Rate",
      icon: <BiMoneyWithdraw />,
      path: "/gameRate",
    },
    {
      name: "Bid History",
      icon: <SiBetfair />,
      path: "/bidHistory",
    },
    {
      name: "Win History",
      icon: <BsFillTrophyFill />,
      path: "/WinHistory",
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="drawerContainer">
      <Toolbar />
      <p className="drawerbalance">
        Balance: <span>$4353456</span>
      </p>
      {/* <GoogleTranslate /> */}
      <Divider />
      <List sx={{ padding: "10px" }}>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              backgroundColor: "#fff",
              borderRadius: "5px",

              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#fff",
              },
            }}
            onClick={() => navigate("/dashboard")}
          >
            <ListItemIcon>
              <AiFillHome />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      </List>

      <List sx={{ padding: "10px" }}>
        <ListItem disablePadding>
          <Accordion sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AiFillPlayCircle className="drawerlogo" />
              <Typography>Market</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {menuList.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton onClick={() => navigate(item.path)}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>

      <List sx={{ padding: "10px" }}>
        <ListItem disablePadding>
          <Accordion sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <GrUserAdmin className="drawerlogo" />
              <Typography>Agent List</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {["Agent List"].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>

      <List sx={{ padding: "10px" }}>
        <ListItem disablePadding>
          <Accordion sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <HiDocumentReport className="drawerlogo" />
              <Typography>Report List</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                  (text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>
      {/* <Divider /> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <div className={styles.topDiv}></div> */}
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      {/* <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar className={styles.navbar}>
          <div className={styles.mainlogoContainer}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <SiMoneygram className={styles.mainLogo} />
            <Typography variant="h6" noWrap component="div">
              My App
            </Typography>
          </div>
          <AccountMenu />
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginTop: "40px",
        }}
      >
        <Outlet />
        {/* <div>
          <GoogleTranslate />
        </div> */}
      </Box>
    </Box>
  );
}

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Home;
