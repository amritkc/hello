import React from "react";
import logo from "../../assets/icons/logo_large.png";
import "./CssProfile.css";

function ProfileHeader() {
  return (
     <>
      <div className='header'>
        <div className='width__ vert-move'>
          <img src={logo} alt='hello' />
        </div>

        {/* <div className='width__'>
        <div className='header__profile'>
          <Avatar
            alt='Amrit Khadka'
            src='/static/images/avatar/1.jpg'
            className={`${classes.small} ${classes.purple}`}
          />
          <h2>Amrit</h2>
        </div>
      </div> */}
        {/* <div className='header__left'>
        <button>Logout</button>
      </div> */}
      </div>
    </>
  );
}

export default ProfileHeader;
