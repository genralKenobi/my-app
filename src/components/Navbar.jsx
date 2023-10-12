import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SiMoneygram } from "react-icons/si";
import AccountMenu from "./AccountMenu";

const Navbar = ({ handleDrawerToggle }) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar className="navbar">
          <div className="mainlogoContainer">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <SiMoneygram className="mainLogo" />
            <Typography variant="h6" noWrap component="div">
              My App
            </Typography>
          </div>
          <AccountMenu />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
