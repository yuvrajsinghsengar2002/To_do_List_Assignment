// Home.js
import React from "react";
import { Link } from "react-router-dom";
import classes from "./home.module.css";

const Home = () => {
  return (
    <div className={classes.home_container}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of your application.</p>

      <div className={classes.auth_links}>
        <Link to="/signin" className={classes.auth_link}>
          Login
        </Link>
        <Link to="/register" className={classes.auth_link}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
