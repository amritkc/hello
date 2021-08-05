import { React, useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import "./ProfilePost.css";
import Postslist from "../RecentPost/Postslist";
import ImageList from "../RecentPost/ImageList";
import { storage, Firestore, auth } from "../../firebase/Firebase";

function ProfilePost() {
  const [value, setValue] = useState("1");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [post, setPost] = useState([]);
  useEffect(() => {
    let uuid = auth.currentUser.uid.toString();
    console.log(uuid, "error");
    Firestore.collection("users")
      .where("uidid", "==", `${uuid}`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log("amrit", " => ", doc.data());
          setUsername(doc.data().id);
          setFirstname(doc.data().firstname);
          setLastname(doc.data().lastname);
          Firestore.collection("users")
            .doc(doc.data().id)
            .collection("posts")
            .orderBy("time", "desc")
            .onSnapshot((snapshot) => {
              // console.log(snapshot.docs , "datahere");
              setPost(snapshot.docs.map((doc) => doc.data()));
            });
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const styles = (theme) => ({
    indicator: {
      backgroundColor: "white",
    },
  });
  return (
    <div className="profile_tab">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            TabIndicatorProps={{ style: { background: "green" } }}
            aria-label="lab API tabs example"
          >
            <Tab label="Posts" value="1" />
            <Tab label="Images" value="2" />
            <Tab label="Settings" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {post.map((post) => (
            <Postslist
              username={post.username}
              sun={post.sun}
              postdata={post.postdata}
              imgurl={post.imgurl}
            />
          ))}
        </TabPanel>
        <TabPanel value="2">
          {post.map((post) => (
            <ImageList
              username={post.username}
              sun={post.sun}
              postdata={post.postdata}
              imgurl={post.imgurl}
            />
          ))}
        </TabPanel>
        <TabPanel value="3">Settings</TabPanel>
      </TabContext>
    </div>
  );
}

export default ProfilePost;
