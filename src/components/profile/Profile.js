/** @format */

import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { storage, auth, Firestore } from "../../firebase/Firebase";
import ProfileHeader from "./ProfileHeader";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import "./Profile.css";
import imgback from "../../assets/icons/imgback.jpg";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import ProfilePost from "./ProfilePost";
import CreatePosts from "../../components/Posts/CreatePosts";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  purple: {
    color: theme.palette.getContrastText("#389583"),
    backgroundColor: "#389583",
  },
}));
function Profile() {
  const classes = useStyles();
  let { id } = useParams();
  const [userId, setUserId] = useState(id);
  const [userIdData, setNotfound] = useState(false);

  useEffect(() => {
    let docRef = Firestore.collection("users").doc(userId);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setNotfound(true);
        } else {
          // doc.data() will be undefined in this case
          setNotfound(false);
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);
  return (
    <div className="profile">
      <ProfileHeader />
      {/* <h1>{userIdData}</h1> */}
      {userIdData == false ? (
        <>
          <h1>{`User ${id} Not Found`}</h1>
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
                      <h3>Amrit Khadka</h3>
                      <h4>amritkadka04</h4>
                    </div>
                  </div>

                  <div className="editprofile">
                    <IconButton>
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
              <ProfilePost />
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}

export default Profile;
