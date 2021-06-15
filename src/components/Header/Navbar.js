import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CustomizedMenus from "./Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color={"inherit"} className="Header">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to={`/`}>
              <img src={process.env.PUBLIC_URL + "/cryptofor.png"} alt="Logo" />
            </Link>
          </Typography>
          <CustomizedMenus />
        </Toolbar>
      </AppBar>
    </div>
  );
}
