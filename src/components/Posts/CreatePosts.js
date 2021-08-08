/** @format */

import React from "react";
import "./CreatePosts.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CreatepostData from "../../modal/CreatepostData";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { auth } from "../../firebase/Firebase";
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
function CreatePosts() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  let history = useHistory();
  const handleOpen = () => {
    if (auth.currentUser === null) {
      history.push("/login");
    } else {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const bg = {
    overlay: {
      background: "rgba(255, 255, 255, 0.39)",
    },
  };
  function closeDialog() {
    setOpen(false);
  }

  return (
    <>
      <div className="createpost">
        <div className="createpost__data">
          <Avatar
            alt="Amrit Khadka"
            src="/static/images/avatar/1.jpg"
            className={`${classes.small} ${classes.purple}`}
          />
          <div className="createpoast__post" onClick={handleOpen}>
            <h2>What's in your mind?</h2>
          </div>
        </div>
        <hr style={{ marginTop: "18px" }} />
        <div className="createpost__uploadimg">
          <IconButton>
            <PhotoLibraryIcon style={{ color: "#389583" }} />
            <h2>Image/Pictures</h2>
          </IconButton>

          <IconButton>
            <InsertEmoticonIcon style={{ color: "#389583" }} />
            <h2>Feeling/Activity</h2>
          </IconButton>
        </div>
      </div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <CreatepostData closeDialog={closeDialog} />
      </Modal>
    </>
  );
}

export default CreatePosts;
