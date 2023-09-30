import React from "react";
import { Link } from "react-router-dom";
import classes from "./layout.module.css";
const MainLayout = ({ children }) => {
  return (
    <div className={classes.main_layout}>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="content">{children}</main>
    </div>
  );
};

export default MainLayout;
