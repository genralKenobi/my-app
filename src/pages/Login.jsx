import React from "react";
import { Button, TextField } from "@mui/material";
import "./styles/login.css";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    console.log("username: ", username);
    console.log("password: ", password);
  };
  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Agent Login</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <TextField type="text" label="Username" variant="filled" required />
            <TextField
              type="password"
              label="Password"
              variant="filled"
              required
            />
            <Button type="submit" variant="contained">
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
