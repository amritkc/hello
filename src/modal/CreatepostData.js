/** @format */

import React, { useState, useEffect } from "react";
import "./CreatepostData.css";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import Button from "@material-ui/core/Button";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { storage, Firestore, auth } from "../firebase/Firebase";
import firebase from "firebase";

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
function CreatepostData(props) {
  const { closeDialog } = props;
  const [textdata, setTextData] = useState("");
  const [img, setimg] = useState(null);
  const [imagename, setimagename] = useState("");
  const [progress, setprogress] = useState(0);
  const [imgurldata, setImagurlDta] = useState("");
  const [srcimage, setsrc] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [randompostuid, setrandomuid] = useState("");
  const classes = useStyles();

  //featching user data
  useEffect(() => {
    let uuid = auth.currentUser.uid.toString();
    console.log(uuid, "error");
    Firestore.collection("users")
      .where("uidid", "==", `${uuid}`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log("amrit", " => ", doc.data());
          setUsername(doc.data().id);
          setFirstname(doc.data().firstname);
          setLastname(doc.data().lastname);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  //updating to firebasedatabse
  // const setDatatoDatabse = (imgurll, postdataa, randomuid) => {
  //   var docData = {
  //     firstname: firstname,
  //     lastname: lastname,
  //     id: username,
  //     imgurl: imgurll,
  //     postdata: postdataa,
  //     postid: randomuid,
  //   };
  // };

  const closeFunction = () => {
    closeDialog();
  };
  const handeltext = (e) => {
    let data = e.target.value;
    setTextData(data);
    console.log(data);
  };
  const submitPost = () => {
    if (img != null) {
      storage
        .ref()
        .child(`images/${imagename}`)
        .getDownloadURL()
        .then((url) => {
          console.log(url);
          setImagurlDta(url);
          let randomuuid = Math.floor(
            Math.random() * 10000000000000000
          ).toString();
          setrandomuid(randomuuid);
          var d = new Date();
          var n = d.getMilliseconds();
          let timesnap = n;
          var docData = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            imgurl: url,
            postdata: textdata,
            postid: randomuuid,
            time: firebase.firestore.FieldValue.serverTimestamp(),
          };
          Firestore.collection("users")
            .doc(username)
            .collection("posts")
            .doc(randomuuid)
            .set(docData);
          Firestore.collection("posts").doc(randomuuid).set(docData);
          console.log("im here 1");
        });
      closeDialog();
    } else {
      let randomuuid = Math.floor(Math.random() * 10000000000000000).toString();
      setrandomuid(randomuuid);
      var d = new Date();
      var n = d.getMilliseconds();
      let timesnap = n;
      var docData = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        imgurl: "",
        postdata: textdata,
        postid: randomuuid,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      };
      Firestore.collection("users")
        .doc(username)
        .collection("posts")
        .doc(randomuuid)
        .set(docData);
      Firestore.collection("posts").doc(randomuuid).set(docData);
      console.log("im here 2");
      closeDialog();
    }
  };

  const handelChange = (e) => {
    if (e.target.files[0]) {
      setimg(e.target.files[0]);
      setsrc(URL.createObjectURL(e.target.files[0]));
      let asdimgdata = Math.floor(Math.random() * 10000000000000000).toString();
      setimagename(`${asdimgdata}${e.target.files[0].name}`);
      let upload = storage
        .ref(`images/${asdimgdata}${e.target.files[0].name}`)
        .put(e.target.files[0]);
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
    }
  };
  // console.log(img);
  const handelremoveImg = () => {
    setimg(null);
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
      {img == null ? (
        <></>
      ) : (
        <div className="imageDataShow">
          <img src={srcimage} alt="img" />
          <progress id="file" value={progress} max="100" />
          <IconButton onClick={handelremoveImg}>
            <CloseIcon />
          </IconButton>
        </div>
      )}

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
