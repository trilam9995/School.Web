import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ConfirmDialog = ({ isOpen, title, message, handleOK, handleClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className={styles.confirmDialog}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions className={styles.containerBtnActions}>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleOK}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
