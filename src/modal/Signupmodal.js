/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../auth/Login/Login.css";
import TextField from "@material-ui/core/TextField";

const schema = yup.object().shape({
  firstname: yup.string().required,
  lastname: yup.string().required,
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

function Signupmodal() {
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

  return (
    <div className='modal__body'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='modal__firstname'>
          <TextField
            label='First Name'
            {...register("firstname")}
            variant='outlined'
          />
          <span style={{ marginLeft: "12px" }} />
          <TextField
            label='Last Name'
            {...register("lastname")}
            variant='outlined'
          />
        </div>
        <TextField
          fullWidth
          label='Email'
          type='Email'
          {...register("email")}
          variant='outlined'
        />
        <br />
        <div className='modal__firstname'>{errors.firstname?.message}</div>
        <br />
        <TextField
          fullWidth
          label='New Password'
          type='Password'
          {...register("password")}
          variant='outlined'
        />
        <button type='submit' className='submit__modal'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signupmodal;
