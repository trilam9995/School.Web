import React from "react";
import styles from "./styles.module.scss";
import { sideLeftMenu } from "../../routes/routes-main";
import ListMenu from "../menu/list-menu";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../header";
import RightContent from "../right-content";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

const Home = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div className={styles.sideBar}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={styles.toolbar}>
          <div className={styles.logo}></div>
        </div>
        <ListMenu sideLeftMenu={sideLeftMenu} />
      </Drawer>
      <RightContent />
    </div>
  );
};

export default Home;
