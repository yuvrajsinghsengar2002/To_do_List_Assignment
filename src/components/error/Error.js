import React from "react";
import { Link } from "react-router-dom";
import classes from "./registrationerror.module.css"; // Import the CSS file

const Error = () => {
  return (
    <div className={classes.registration_error}>
      <h2>404 Not Found! </h2>
      <p>no page available for corresponding url</p>
      <p>Please check url and try again.</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Error;
