import React from "react";
import { Route, Redirect } from "react-router-dom";
import { access_token, getCookies } from "../utils/utils";
import { pathRoute } from "./routes-main";
import { LOGIN_URL } from "../constants";

export const PrivateRoute = ({ path, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (path.includes(pathRoute.callCenter)) {
          return getCookies(access_token) ? (
            <Component {...props} />
          ) : (
            (window.location.href = LOGIN_URL)
          );
        }

        if (path === "/") {
          return getCookies(access_token) ? (
            <Redirect
              to={{
                pathname: pathRoute.campaign,
                state: { from: props.location },
              }}
            />
          ) : (
            (window.location.href = LOGIN_URL)
          );
        }
      }}
    />
  );
};
