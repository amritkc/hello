/** @format */

import React from "react";
import Header from "../components/header/Header";
import CreatePosts from "../components/Posts/CreatePosts";
import Grid from "@material-ui/core/Grid";
import RecentPost from "../components/RecentPost/RecentPost";
import { auth } from "../firebase/Firebase";

function Home() {
  const signout = () => {
    auth.signOut();
  };
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={12} md={8}>
          <CreatePosts />
          <RecentPost />
        </Grid>
        <Grid item xs={12} md={4}>
          <button onClick={signout}>Signout</button>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
