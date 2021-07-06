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
import { storage } from "../firebase/Firebase";

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
  const [img, setimg] = useState(null);
  const [imagename, setimagename] = useState("");
  const [progress, setprogress] = useState(0);
  const classes = useStyles();
  const closeFunction = () => {};
  const handeltext = (e) => {
    let data = e.target.value;
    setTextData(data);
    console.log(data);
  };
  const submitPost = () => {
    if (img != null) {
      let asdimgdata = Math.floor(Math.random() * 10000000000000000).toString();
      setimagename(asdimgdata);
      let upload = storage.ref(`images/${imagename}`).put(img);
      upload.on(
        "state_changes",
        (snapshot) => {
          // const progresss = snap.bytesTransferred / snap.totalBytes / 100;
          const progresss = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setprogress(progresss);
          console.log(progress);
        },
        (error) => {
          console.log(error, "error");
        }
      );
      storage
        .ref("images")
        .child(`${imagename}`)
        .getDownloadURL()
        .then((url) => {
          console.log(url);
        });
    } else {
    }
  };

  const handelChange = (e) => {
    if (e.target.files[0]) {
      setimg(e.target.files[0]);
    }
  };
  return (
    <div className="postdata">
      <div className="postdata__header">
        <h1></h1>
        <h3>Create Post</h3>
        <div>
          <IconButton onClick={closeFunction}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <hr />
      <div className="postdata__userinfo">
        <Avatar
          alt="Amrit Khadka"
          src="/static/images/avatar/1.jpg"
          className={`${classes.small} ${classes.purple}`}
        />
        <h2>Amrit Khadka</h2>
      </div>
      <div className="postdata__usertext">
        <textarea
          id="textarea"
          placeholder="What's on your Mind?"
          onChange={handeltext}
        ></textarea>
      </div>
      <div className="postdata__picall">
        <div>
          <h2>Add To Your Post</h2>
        </div>
        <div className="postdata__alignleft">
          <IconButton>
            <PhotoCameraIcon style={{ color: "#389583" }} />
          </IconButton>
          <IconButton>
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              onChange={handelChange}
            />
            <PhotoLibraryIcon style={{ color: "#389583" }} />
          </IconButton>
        </div>
      </div>
      <div className="postdata__submit">
        {textdata.length > 5 ? (
          <button className="postdata__one" onClick={submitPost}>
            Submit
          </button>
        ) : (
          <button className="postdata__two">Submit</button>
        )}
      </div>
    </div>
  );
}

export default CreatepostData;
