/* eslint-disable react/prop-types */
import { Box, Button, TextField } from "@mui/material";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { auth } from "../../firebase";



const Login = ({handleClose}) => {
 

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async() =>{
    if(!email || !password){
      toast.error('Password Not Match');
      
    }
    try{
      const result = await signInWithEmailAndPassword(auth,email,password);
      handleClose();
      toast.success('Login Successfuly');
      console.log(result);
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
    
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#EEBC1D" }}
        onClick={handleSubmit}
      >Login</Button>
    </Box>
  );
};

export default Login;
