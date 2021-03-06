/** @format */

import { React, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../auth/Login/Login.css";
import TextField from "@material-ui/core/TextField";
import { auth, Firestore } from "../firebase/Firebase";

const schema = yup.object().shape({
  firstname: yup.string().required,
  lastname: yup.string().required,
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

function Signupmodal() {
  //usestate
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");
  const [user, setUser] = useState(null);
  const [usernameexit, setusernameexit] = useState(null);
  const [disablebtn, setdisablebtn] = useState(false);

  //yup login
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //useeffect
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       if (authUser.displayName) {
  //       } else {
  //         return authUser.updateProfile({
  //           displayName: firstname,
  //         });
  //       }
  //       setUser(authUser.uid);
  //       console.log(authUser.uid);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, [firstname, user]);

  useEffect(() => {
    if (firstname != "" && lastname != "" && username != "") {
      setdisablebtn(true);
    } else {
      setdisablebtn(false);
    }
    // else if (lastname != "") {
    //   setdisablebtn(true);
    // } else if (username != "") {
    //   setdisablebtn(true);
    // }
  }, [firstname, lastname, username]);

  const submitbtn = (data) => {
    data.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setDatatoDatabse();
        if (auth.displayName) {
        } else {
          return auth.currentUser.updateProfile({
            displayName: firstname,
          });
        }
      })
      .catch((error) => alert(error.message));
  };

  const setDatatoDatabse = () => {
    var docData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      id: username,
      uidid: auth.currentUser.uid,
      password: password,
    };

    console.log(auth.currentUser);
    Firestore.collection("users").doc(username).set(docData);
  };
  const usernamechange = (e) => {
    if (e.target.value != "") {
      let docRef = Firestore.collection("users").doc(e.target.value);
      docRef.get().then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setusernameexit("Username Alredy Exists");
          setdisablebtn(false);
        } else {
          setdisablebtn(true);
          // doc.data() will be undefined in this case
          console.log("No such document!");
          setusernameexit(null);
          setusername(e.target.value);
        }
      });
    }
  };
  return (
    <div className="modal__body">
      <form>
        <div className="modal__firstname">
          <TextField
            label="First Name"
            onChange={(e) => setFirstname(e.target.value)}
            // {...register("firstname")}
            variant="outlined"
          />
          <span style={{ marginLeft: "12px" }} />
          <TextField
            label="Last Name"
            onChange={(e) => setLastname(e.target.value)}
            // {...register("lastname")}
            variant="outlined"
          />
        </div>
        <TextField
          fullWidth
          label="Username"
          type="name"
          onChange={usernamechange}
          // {...register("email")}
          variant="outlined"
        />
        <h2 style={{ fontSize: "12px", color: "red" }}>{usernameexit}</h2>
        <br />
        <TextField
          fullWidth
          label="Email"
          type="Email"
          onChange={(e) => setEmail(e.target.value)}
          // {...register("email")}
          variant="outlined"
        />
        <br />
        <div className="modal__firstname">{errors.firstname?.message}</div>
        <br />
        <TextField
          fullWidth
          label="New Password"
          type="Password"
          onChange={(e) => setPassword(e.target.value)}
          // {...register("password")}
          variant="outlined"
        />
        {disablebtn == true ? (
          <button type="submit" className="submit__modal" onClick={submitbtn}>
            Submit
          </button>
        ) : (
          <button
            onClick={(e) => e.preventDefault()}
            className="submit__modal"
            style={{ backgroundColor: "grey", color: "#ccc" }}
          >
            Submit
          </button>
        )}
        {/* <button type="submit" className="submit__modal" onClick={submitbtn}>
          Submit
        </button> */}
      </form>
    </div>
  );
}

export default Signupmodal;
