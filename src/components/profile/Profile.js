/** @format */

import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { storage, auth, Firestore } from "../../firebase/Firebase";
import ProfileHeader from "./ProfileHeader";

function Profile() {
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
      {/* <h1>{userIdData}</h1> */}
    </div>
  );
}

export default Profile;
