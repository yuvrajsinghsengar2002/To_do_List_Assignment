import React from "react";
import { Link } from "react-router-dom";
import classes from "./registrationerror.module.css"; // Import the CSS file

const LoginError = () => {
  return (
    <div className={classes.registration_error}>
      <h2>Login Failed</h2>
      <p>Oops! Email or Password maybe wrong</p>
      <p>Please check your information and try again.</p>
      <Link to="/signin">Go back to Login</Link>
    </div>
  );
};

export default LoginError;
