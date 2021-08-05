import React from "react";
import "./RecentPost.css";

function ImageList(props) {
  return (
    <div className="postlist__body">
      <img src={props.imgurl} />
    </div>
  );
}

export default ImageList;
