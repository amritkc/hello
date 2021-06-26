/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  IndexRoute,
} from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./auth/Login/Login";
import Profile from "./components/profile/Profile";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/' exact>
          <App />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/:id' children={<Profile />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
