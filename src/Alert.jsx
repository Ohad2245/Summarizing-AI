/* eslint-disable no-unused-vars */
import { Snackbar } from "@mui/material";
import React, { useState } from "react";
import MuiAlert from "@mateiral-ui/lab/Alert";

const Alert = () => {
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickway") {
      return;
    }
    setAlert({ open: false });
  };
  return (
    <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert
        onClose={handleClose}
        variant="filled"
        elevation={10}
        severity={alert.open}
      >{alert.message}</MuiAlert>
    </Snackbar>
  );
};

export default Alert;
