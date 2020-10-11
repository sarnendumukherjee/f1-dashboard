import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import { Link } from "react-router-dom";

const DashboardAppBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className="link">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <DirectionsCarIcon />
            </IconButton>
          </Link>
          <Typography variant="h6">F1 Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default DashboardAppBar;
