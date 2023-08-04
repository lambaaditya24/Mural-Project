import React from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleSignIn = ()=>{
    navigate('/admin-portal');
  };
  return (
    <>
      <div className="split left">
        <div className="centered">
          <img
            src="/CDC-LogowTag-2021.png"
            alt="Coalfield Logo"
            className="logo"
          />
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <form className="login-form">
            <span className="Welcome-back">Welcome back</span>
            <span className="Welcome-back-Please-enter-your-details">
              Welcome back! Please enter your details.
            </span>
            <span className="email">Email</span>

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="email-rectangle"
            />
            <span className="password">Password</span>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="password-rectangle"
            />
            <Button type="submit" variant="outlined" style={{color:"white"}} onClick={handleSignIn}>Sign In</Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
