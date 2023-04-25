import { AppBar, Backdrop, Box, Button, Fade, Modal, Tab, Tabs, alpha } from "@mui/material";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";


export default function AuthModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div>
      <Button
        variant="contained"
        style={{
          width: 85,
          height: 40,
          marginLeft: 15,
          backgroundColor: "#EEBC1D",
          alignItems:'center',
        }}
        onClick={handleOpen}
      >
        Login
      </Button>
      <Modal
  style={{display:'flex',alignItems: 'center',justifyContent: 'center',background:'transparent'}}
  aria-labelledby="transition-modal-title"
  aria-describedby="transition-modal-description"
  open={open}
  onClose={handleClose}
  closeAfterTransition
  BackdropProps={{
    timeout: 500,
    sx: {
      backdropFilter: 'blur(3px)',
      
    },
  }}
>
        <Fade in={open}>
          <div className="w-[400px] bg-gray-400 text-white rounded-xl">
            <AppBar
              position="static"
              style={{
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                style={{ borderRadius: 10 }}
              >
                <Tab label="Login" />
                <Tab label="Sign Up" />
              </Tabs>
            </AppBar>
            {value === 0 && <Login handleClose={handleClose} />}
            {value === 1 && <SignUp handleClose={handleClose} />}
            
          </div>
        </Fade>
      </Modal>
    </div>
  );
}