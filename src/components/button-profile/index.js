import React from "react";
import styles from "./styles.module.scss";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from "react-router";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import Avatart from "../../assets/img/draft-avatart.png";
import {
  access_token,
  removeCookies,
  getCookies,
  user_profile,
  clearAllCookies,
} from "../../utils/utils";
import { LOGOUT_URL } from "../../constants";

const ButtonProfile = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    window.location.href = LOGOUT_URL + getCookies(access_token);
    clearAllCookies();
  };

  const { email, imageProfile } = getCookies(user_profile);

  return (
    <div className={styles.profileManagement}>
      <div className={styles.profile}>
        <img
          alt="AccountCircle"
          src={Avatart}
          className={styles.notification}
        />
        <div className={styles.accountContainer}>
          <p className={styles.textHello}>Hello</p>
          <p className={styles.textUserName}>{email}</p>
        </div>
      </div>
      <div className={styles.btnProfile}>
        <IconButton onClick={handleClick}>
          <img src={ArrowDown} alt="arrow" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default withRouter(ButtonProfile);
