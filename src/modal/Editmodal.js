import {React,useState, useEffect} from 'react'
import "./Editmodal.css"
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {auth , Firestore} from "../firebase/Firebase"
import { useHistory } from "react-router-dom";


const schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
  });
function Editmodal(props) {
  let history = useHistory();
  const [firstname, setfirstname] = useState("");
  const [lastname, selastname] = useState("");
     //yup login
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
    const { closeDialog } = props;
    const closeFunction = () => {
        closeDialog();
      };
      const onSubmit = (data) => {
          console.log(data, props.data.id)
          let username = props.data.id
          let firstnamee = data.name;
          let lastnamee = data.password
          var docData = {
            firstname: firstnamee,
            lastname: lastnamee,
            email: props.data.email,
            id: props.data.id,
            uidid: auth.currentUser.uid,
            password: props.data.password,
          };
          let ref = Firestore.collection("users").doc(username).set(docData)
          .then(() => {
            closeDialog();
            window.location.reload();
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
          // history.push(`/${props.data.id}`);
        }
      useEffect(()=>{
          // console.log(props.data, "aaaaaasss")
      })
    return (
        <div className="editprofilea">
        <div className="postdata__header">
          <h1></h1>
          <h3>Edit  Profile</h3>
          <div>
            <IconButton onClick={closeFunction} >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <hr />
        <div className="editchange">
        <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
            <Grid item xs={12} md={4}>
                <div style={{padding:"12px"}}>
                <TextField
                defaultValue={props.data.firstname}
                      type="username"
                      autocomplete="off"
                      label="First name"
                      {...register("name")}
                      variant="outlined"
                    />
                </div>
                </Grid>
                <Grid item xs={12} md={4}>
                <div style={{padding:"12px"}}>
                <TextField
                 defaultValue={props.data.lastname}
                      label="Last Name"
                      autocomplete="off"
                      type="setLastname"
                      {...register("password")}
                      variant="outlined"
                    />
                </div>
               
                </Grid>
                </Grid>
{/*                  
                    <h4 style={{ color: "red", textAlign: "center" }}>
                      {errors.password?.message}
                    </h4> */}
                    <button className="btnlogin">Save Changes</button>
                  </form>
        </div>
        </div>
    )
}

export default Editmodal
