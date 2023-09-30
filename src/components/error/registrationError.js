import React from "react";
import { Link } from "react-router-dom";
import classes from "./registrationerror.module.css"; // Import the CSS file

const RegistrationError = () => {
  return (
    <div className={classes.registration_error}>
      
      <h2>Registration Failed</h2>
      <p>Oops! Something went wrong during the registration process.</p>
      <p>Please check your information and try again.</p>
      <Link to="/register">Go back to registration</Link>
    </div>
  );
};

export default RegistrationError;
