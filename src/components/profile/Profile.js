/** @format */

import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  let { id } = useParams();
  return (
    <div className='profile'>
      <h1>{id}</h1>
    </div>
  );
}

export default Profile;
