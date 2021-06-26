/** @format */

import { React, useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Signupmodal from "../../modal/Signupmodal";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
function Login() {
  const [open, setOpen] = useState(false);
  const [emailLogin, setEmalLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const classes = useStyles();

  //yup login
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                      fullWidth
                      type='email'
                      label='Email'
                      {...register("email")}
                      variant='outlined'
                    />
                    <br />
                    <h4 style={{ color: "red", textAlign: "center" }}>
                      {errors.email?.message}
                    </h4>
                    <br />
                    <TextField
                      fullWidth
                      label='Password'
                      type='password'
                      {...register("password")}
                      variant='outlined'
                    />
                    <br />
                    <h4 style={{ color: "red", textAlign: "center" }}>
                      {errors.password?.message}
                    </h4>
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
          <Signupmodal />
        </div>
      </Modal>
    </>
  );
}

export default Login;
