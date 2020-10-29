import React from "react";
import styles from "./styles.module.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ButtonProfile from "../../components/button-profile";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "#fff",
    boxShadow: "none",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
}));

const Header = ({ open, handleDrawerOpen }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar className={styles.toolbarHeader}>
        <div className={styles.leftHeader}>
          <div className={styles.textLogo}>Outbound VoiceBot Demo</div>
        </div>
        <ButtonProfile />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
