/** @format */

import React from "react";
import logo from "../../assets/icons/logo_large.png";
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  purple: {
    color: theme.palette.getContrastText("#389583"),
    backgroundColor: "#389583",
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <div className='header'>
      <img src={logo} alt='hello' />
      <div className='header__left'>
        <div className='header__profile'>
          <Avatar
            alt='Amrit Khadka'
            src='/static/images/avatar/1.jpg'
            className={`${classes.small} ${classes.purple}`}
          />
          <h2>Amrit</h2>
        </div>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Header;
