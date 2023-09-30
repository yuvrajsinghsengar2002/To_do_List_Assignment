import React from "react";
import classes from "./login.module.css";
import { Link } from "react-router-dom";
import { registerUser } from "./Authservices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Registration = ({onRegister}) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate=useNavigate();
   const handleEmailChange = (e) => {
     setEmail(e.target.value);
   };

   const handlePasswordChange = (e) => {
     setPassword(e.target.value);
   };
   
   const handleRegister = (e) => {
     e.preventDefault();
     const user = registerUser({ email, password });
     if (user) {
        onRegister(user)
       navigate("/To_Do_List_Assignment/user");
     } else {
      navigate("/To_Do_List_Assignment/registererror");
     }
   };
  
    return (
      <div className={classes.loginStyle}>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className={classes.inputStyle}
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="abc123@gmail.com"
            required
          />
          <input
            className={classes.inputStyle}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
          <button type="submit" className={classes.buttonStyle}>
            Register
          </button>
        </form>
        <p>
          already have an account?{" "}
          <Link to="/To_Do_List_Assignment/signin"> Login</Link>
        </p>
      </div>
    );
};

export default Registration;
