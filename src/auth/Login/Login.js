/** @format */

import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
function Login() {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className='login'>
        <div className='login_main'>
          <Grid container>
            <Grid item xs={12} md={6}>
              <div className='login__leftside'>
                <span className='login_span'>Hello</span>
                <h2>
                  Hello helps you connect with people in your life and share
                  them with you
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
                  <Link
                    to='/forgot-password'
                    style={{ textDecoration: "none" }}>
                    <h5 style={{ textAlign: "center", marginTop: "12px" }}>
                      Forgot Password?
                    </h5>
                  </Link>
                  <hr style={{ marginTop: "20px", border: "1px solid #ccc" }} />
                  <button className='btn_createaccount' onClick={handleOpen}>
                    Create a new account
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}>
        <div className='modal__signup'>
          <div className='modal__signup__header'>
            <div className='modal__letter'>
              <h2>Sign up</h2>
              <h6 style={{ color: "#808080" }}>its's quick and easy</h6>
            </div>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <hr style={{ marginTop: "12px" }} />
          <div className='modal__body'>
            <form>
              <div className='modal__firstname'>
                <TextField
                  id='outlined-basic'
                  label='First Name'
                  variant='outlined'
                />
                <span style={{ marginLeft: "12px" }} />
                <TextField
                  id='outlined-basic'
                  label='Last Name'
                  variant='outlined'
                />
              </div>
              <TextField
                fullWidth
                label='Email'
                type='Email'
                variant='outlined'
              />
              <br />
              <br />
              <TextField
                fullWidth
                label='New Password'
                type='Password'
                variant='outlined'
              />
              <button className='submit__modal'>Submit</button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Login;
