import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import * as QueryString from "query-string";
import { LOGIN_URL } from "../../constants";
// import { getUserProfile } from "../../actions/user";
import { useDispatch } from "react-redux";

const Callback = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const {
      location: { search },
    } = props;
    const { token } = QueryString.parse(search);

    if (token) {
      // dispatch(getUserProfile(token));
    } else {
      window.location.href = LOGIN_URL;
    }
  }, []);

  return <div></div>;
};

export default withRouter(Callback);
