import React from "react";
import styles from "./styles.module.scss";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import classNames from "classnames";

const ListMenu = ({ sideLeftMenu, location }) => {
  return (
    <List className={styles.listMenu}>
      {sideLeftMenu.map((menu, index) => {
        const listItem = classNames(styles.listItem, {
          [styles.active]: location.pathname === menu.path,
        });

        return (
          <ListItem
            button
            key={index}
            to={menu.path}
            component={Link}
            className={listItem}
          >
            <ListItemIcon>{menu.sidebarIcon}</ListItemIcon>
            <ListItemText primary={menu.sidebarName} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default withRouter(ListMenu);
