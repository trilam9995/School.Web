import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import WarningIcon from "@material-ui/icons/Warning";

const renderAlert = (textStatus, message) => {
  switch (textStatus) {
    case "Success":
      return (
        <div className={styles.success}>
          <CheckCircleIcon />
          <p>{message}</p>
        </div>
      );
    case "Error":
      return (
        <div className={styles.errors}>
          <WarningIcon />
          <div className={styles.content}>
            <p className={styles.title}>Something Went Wrong!</p>
            <p className={styles.text}>{message}</p>
          </div>
        </div>
      );
    case "Warning":
      return (
        <div className={styles.warning}>
          <WarningIcon />
          <p>Submit Unsuccessfully</p>
        </div>
      );
    default:
      break;
  }
};

const MessageBox = ({ isOpen, success, message, onClose, ...rest }) => {
  const textStatus = success ? "Success" : "Error";

  return (
    <Snackbar
      className={styles.snackbar}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={isOpen}
      autoHideDuration={3000}
      onClose={onClose}
      {...rest}
    >
      {renderAlert(textStatus, message)}
    </Snackbar>
  );
};

MessageBox.defaultProps = {};

export default MessageBox;
