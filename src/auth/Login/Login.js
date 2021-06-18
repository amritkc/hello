/** @format */

import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='login'>
      <div className='login_main'>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className='login__leftside'>
              <span className='login_span'>Hello</span>
              <h2>
                Hello helps you connect with people in your life and share them
                with you
              </h2>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='login__rightside'>
              <div className='login__form'>
                <form>
                  <TextField
                    fullWidth
                    type='email'
                    label='Email'
                    variant='outlined'
                  />
                  <br />
                  <br />
                  <TextField
                    fullWidth
                    label='Password'
                    type='password'
                    variant='outlined'
                  />
                  <button className='btnlogin'>Please Login</button>
                </form>
                <Link to='/forgot-password' style={{ textDecoration: "none" }}>
                  <h5 style={{ textAlign: "center", marginTop: "12px" }}>
                    Forgot Password?
                  </h5>
                </Link>
                <hr style={{ marginTop: "20px", border: "1px solid #ccc" }} />
                <button className="btn_createaccount">Create a new account</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;
