/** @format */

import React, { useState } from "react";
import "./CreatepostData.css";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import Button from "@material-ui/core/Button";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  purple: {
    color: theme.palette.getContrastText("#389583"),
    backgroundColor: "#389583",
  },
}));
function CreatepostData() {
  const [textdata, setTextData] = useState("");
  const classes = useStyles();
  const closeFunction = () => {};
  const handeltext = (e) => {
    let data = e.target.value;
    setTextData(data);
    console.log(data);
  };
  return (
    <div className='postdata'>
      <div className='postdata__header'>
        <h1></h1>
        <h3>Create Post</h3>
        <div>
          <IconButton onClick={closeFunction}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <hr />
      <div className='postdata__userinfo'>
        <Avatar
          alt='Amrit Khadka'
          src='/static/images/avatar/1.jpg'
          className={`${classes.small} ${classes.purple}`}
        />
        <h2>Amrit Khadka</h2>
      </div>
      <div className='postdata__usertext'>
        <textarea
          id='textarea'
          placeholder="What's on your Mind?"
          onChange={handeltext}></textarea>
      </div>
      <div className='postdata__picall'>
        <div>
          <h2>Add To Your Post</h2>
        </div>
        <div className='postdata__alignleft'>
          <IconButton>
            <PhotoCameraIcon style={{ color: "#389583" }} />
          </IconButton>
          <IconButton>
            <PhotoLibraryIcon style={{ color: "#389583" }} />
          </IconButton>
        </div>
      </div>
      <div className='postdata__submit'>
        {textdata.length > 5 ? (
          <button className='postdata__one'>Submit</button>
        ) : (
          <button className='postdata__two'>Submit</button>
        )}
      </div>
    </div>
  );
}

export default CreatepostData;
