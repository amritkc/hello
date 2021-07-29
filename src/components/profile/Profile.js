/** @format */

import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { storage, auth, Firestore } from "../../firebase/Firebase";
import ProfileHeader from "./ProfileHeader";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

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
  const [userIdData, setNotfound] = useState("");

  useEffect(() => {
    let docRef = Firestore.collection("users").doc(userId);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setNotfound(userId);
        } else {
          // doc.data() will be undefined in this case
          setNotfound(`User ${id} Not Found!`);
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
      <h1>{userIdData}</h1>
      <Grid container>
        <Grid item xs={12} md={4}>
          <div className="profile_main_header">
            <Avatar
              alt="Amrit Khadka"
              src="/static/images/avatar/1.jpg"
              className={`${classes.small} ${classes.purple}`}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={8}></Grid>
      </Grid>
    </div>
  );
}

export default Profile;
