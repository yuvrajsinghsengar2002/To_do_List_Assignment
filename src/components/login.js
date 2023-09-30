import React from 'react'
import classes from './login.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from './Authservices';
import { useNavigate } from 'react-router-dom';
const Login=({onLogin})=>{
   const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
 
  const submitHandler = (e) => {
    e.preventDefault();
    const user = loginUser(email, password); // Authenticate user using the login function

    if (user) {
      onLogin(user);
     navigate("/To_Do_List_Assignment/user");
    } else {
      navigate("/To_Do_List_Assignment/loginerror");
    }
  };

  
	 return (
     <div className={classes.loginStyle}>
       <h2>Login</h2>
       <form onSubmit={submitHandler}>
         <input
           type="email"
           className={classes.inputStyle}
           value={email}
           placeholder="abc123@gmail.com"
           onChange={handleEmailChange}
           required
         />
         <input
           className={classes.inputStyle}
           value={password}
           placeholder="Password"
           required
           onChange={handlePasswordChange}
         />
         <button type="submit" className={classes.buttonStyle}>
           Login
         </button>
         <p>
           Do not have an account?{" "}
           <Link to="/To_Do_List_Assignment/register"> Register</Link>
         </p>
       </form>
     </div>
   );
};


export default Login;