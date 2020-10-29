import React, { Component } from "react";
import styles from "./styles.module.scss";
import { Switch, Route } from "react-router-dom";
import Header from "../header";
import { routeRightConent } from "../../routes/routes-main";

class RightContent extends Component {
  render() {
    return (
      <div className={styles.rightContent}>
        <Switch>
          {routeRightConent.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={route.main}
            />
          ))}
        </Switch>
      </div>
    );
  }
}

export default RightContent;
