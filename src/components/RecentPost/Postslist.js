/** @format */

import React from "react";
import "./RecentPost.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import SmsIcon from "@material-ui/icons/Sms";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";

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
function Postslist(props) {
  const classes = useStyles();
  let history = useHistory();
  const openProfile = () => {
    history.push(`/${props.username}`);
  };

  return (
    <>
      <div className="postlist">
        <div className="postlist__header" onClick={openProfile}>
          <Avatar
            alt={props.username}
            src="/static/images/avatar/1.jpg"
            className={`${classes.small} ${classes.purple}`}
          />
          <h2>{props.username}</h2>
        </div>
        <div className="postlist__body">
          <h2>{props.postdata}</h2>
          <img src={props.imgurl} />
        </div>
        <div className="postlist__footer">
          <div className="Postlist__footer_button">
            {props.sun == true ? (
              <IconButton>
                <WbSunnyIcon style={{ color: "#F02849" }} />
              </IconButton>
            ) : (
              <IconButton>
                <WbSunnyIcon />
              </IconButton>
            )}
            <IconButton>
              <SmsIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Postslist;
