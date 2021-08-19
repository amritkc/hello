import { React, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { auth, Firestore } from "../../firebase/Firebase";
const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
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
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function Comments(props) {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  //   console.log(props);
  //   useEffect(() => {
  //     let uuid = auth.currentUser.uid.toString();
  //     console.log(uuid, "error");
  //     Firestore.collection("users")
  //       .where("uidid", "==", `${uuid}`)
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           // doc.data() is never undefined for query doc snapshots
  //           console.log("amrit", " => ", doc.data());
  //           setUsername(doc.data().id);
  //           setFirstname(doc.data().firstname);
  //           setLastname(doc.data().lastname);
  //         });
  //       });
  //   }, []);
  const classes = useStyles();
  return (
    <>
      <div className="comments">
        <Avatar
          alt="aas"
          src="/static/images/avatar/1.jpg"
          className={`${classes.small} ${classes.purple}`}
        />
        <h2>ssss</h2>
      </div>
    </>
  );
}

export default Comments;
