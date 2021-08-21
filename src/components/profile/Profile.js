/** @format */

import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { storage, auth, Firestore } from "../../firebase/Firebase";
import ProfileHeader from "./ProfileHeader";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import "./Profile.css";
import "./profile.scss";
import imgback from "../../assets/icons/imgback.jpg";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import ProfilePost from "./ProfilePost";
import CreatePosts from "../../components/Posts/CreatePosts";
import Editmodal from "../../modal/Editmodal";
import logo from "../../assets/icons/logo_large.png";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  purple: {
    color: theme.palette.getContrastText("#389583"),
    backgroundColor: "#389583",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
function Profile() {
  const classes = useStyles();
  let { id } = useParams();
  const [userId, setUserId] = useState(id);
  const [userIdData, setNotfound] = useState(false);
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [alldata, setalldata] = useState({});
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(1);

  useEffect(() => {
    let docRef = Firestore.collection("users").doc(userId);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setNotfound(true);
          setalldata(doc.data());
          setUsername(doc.data().id);
          setFirstname(doc.data().firstname);
          setLastname(doc.data().lastname);
          setCheck(2);
        } else {
          // doc.data() will be undefined in this case
          setNotfound(false);
          setCheck(0);
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function closeDialog() {
    setOpen(false);
  }
  return (
    <div className="profile">
      {check == 0 ? (
        <>
          <div class="box">
            <div className="width__ vert-move box__ghost">
              <img src={logo} alt="hello" />
            </div>
            <div class="box__description">
              <div class="box__description-container">
                <div class="box__description-title">Whoops!</div>
                <div class="box__description-text">User {id} Not Found !</div>
              </div>

              <a href="/" class="box__button">
                Go back
              </a>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {userIdData == false ? (
        <>
          {check == 1 ? (
            <>
              <div className="loader">
                <div className="loader-inner">
                  <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                  </div>
                  <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                  </div>
                  <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                  </div>
                  <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                  </div>
                  <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <Grid container>
            <Grid item xs={12} md={4}>
              <div className="profile_main_header">
                <div className="profileimg">
                  <img src={imgback} />
                </div>
                <div className="profile_name">
                  <div className="profile_userdata">
                    <Avatar
                      alt="Amrit Khadka"
                      src="/static/images/avatar/1.jpg"
                      className={`${classes.small} ${classes.purple}`}
                    />
                    <div>
                      <h3>{`${firstname}${" "}${lastname}`}</h3>
                      <h4>{username}</h4>
                    </div>
                  </div>

                  <div className="editprofile">
                    <IconButton onClick={handleOpen}>
                      <EditIcon />
                    </IconButton>
                  </div>
                </div>
                <div className="profile_bio">
                  <h3>
                    Help change the world
                    <br />
                    Software Developer
                  </h3>
                  <a href="https://instagram.com/amritkhadka04" target="_blank">
                    instagram.com/amritkhadka04
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <CreatePosts />
              <ProfilePost id={id} />
            </Grid>
          </Grid>
          <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Editmodal closeDialog={closeDialog} data={alldata} />
          </Modal>
        </>
      )}
    </div>
  );
}

export default Profile;
