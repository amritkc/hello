/** @format */

import { React, useEffect, useState } from "react";
import "./RecentPost.css";
import Postslist from "./Postslist";
import { Firestore } from "../../firebase/Firebase";

function RecentPost() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    Firestore.collection("posts").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, [post]);
  // console.log(post);
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
          />
        ))}
      </div>
    </>
  );
}

export default RecentPost;
