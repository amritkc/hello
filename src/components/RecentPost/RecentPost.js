/** @format */

import { React, useEffect, useState } from "react";
import "./RecentPost.css";
import Postslist from "./Postslist";
import { Firestore, auth } from "../../firebase/Firebase";

function RecentPost() {
  const [post, setPost] = useState([]);
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(null);
  useEffect(() => {
    Firestore.collection("posts")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs, "datahere");
        setPost(snapshot.docs.map((doc) => doc.data()));
      });
  }, [post]);

  if (auth.currentUser && check === null) {
    let uuid = auth.currentUser.uid.toString();
    // console.log("asdffg", auth.currentUser);
    Firestore.collection("users")
      .where("uidid", "==", `${uuid}`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log("asdffg", " => ", doc.data());
          setData(doc.data());
          setCheck(1);
        });
      });
  }

  return (
    <>
      <div className="recentpost">
        <h1>Public Post:</h1>
      </div>
      <div className="recentpost__users">
        {post.map((post) => (
          <Postslist
            username={post.username}
            sun={post.sun}
            postdata={post.postdata}
            imgurl={post.imgurl}
            data={data}
          />
        ))}
      </div>
    </>
  );
}

export default RecentPost;
