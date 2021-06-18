/** @format */

import React from "react";
import "./RecentPost.css";
import Postslist from "./Postslist";

function RecentPost() {
  return (
    <>
      <div className='recentpost'>
        <h1>Public Post:</h1>
      </div>
      <div className='recentpost__users'>
        <Postslist
          username='Amrit Khadka'
          sun={true}
          postdata='Hello We are the first Post! in this application'
          imgurl='https://picsum.photos/500/300'
        />
        <Postslist
          sun={false}
          username='Dum Khadka'
          imgurl={null}
          postdata='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
        />
        <Postslist
          sun={true}
          username='Hello Khadka'
          postdata={null}
          imgurl='https://picsum.photos/520/300'
        />
        <Postslist
          sun={false}
          username='Clever Khadka'
          postdata='Hello We are the first Post! in this application'
          imgurl='https://picsum.photos/600/300'
        />
        <Postslist
          sun={false}
          username='Dum Khadka'
          postdata='Hello We are the first Post! in this application'
          imgurl='https://picsum.photos/800/800'
        />
        <Postslist
          username='Dum Khadka'
          imgurl={null}
          sun={true}
          postdata='Hello We are the first Post! in this application'
        />
      </div>
    </>
  );
}

export default RecentPost;
