import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase';


const SignUp = ({handleClose}) => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 

  const handleSubmit = async () =>{
    if(password !== confirmPassword){
        toast.error('Password Not Match');
    }
    try{
      const result= await createUserWithEmailAndPassword(auth,email,password);
      console.log(result);
      toast.success(`Sign Up Successfully`);
      handleClose();
    }catch(error){
      toast.error('Password Not Match');
    }
  }

  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
    <Toaster/>
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        type="password"
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#EEBC1D" }}
        onClick={handleSubmit}
      >Sign Up</Button>
    </Box>
  );
};

export default SignUp;
