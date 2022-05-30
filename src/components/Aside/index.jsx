import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Aside.module.scss";

const getActiveClassName = ({ isActive }) => {
  if (isActive) {
    return styles.active;
  }

  return "";
};

class Aside extends Component {
  constructor() {
    super();
    this.state = {
      token: JSON.parse(localStorage.getItem("token")),
    };
  }

  render() {
    const { token } = this.state;
    return (
      <aside className={styles.aside}>
        <nav>
          <NavLink className={getActiveClassName} to="/">
            Home
          </NavLink>
          <NavLink className={getActiveClassName} to="/about">
            About
          </NavLink>
          <NavLink className={getActiveClassName} to="/redux-counter">
            Counter
          </NavLink>
          <NavLink className={getActiveClassName} to="/users">
            Users
          </NavLink>
          <NavLink className={getActiveClassName} to="/todo">
            Todo
          </NavLink>
          {!token && (
            <>
              <NavLink className={getActiveClassName} to="/register">
                Register
              </NavLink>
              <NavLink className={getActiveClassName} to="/login">
                Login
              </NavLink>
            </>
          )}
        </nav>
      </aside>
    );
  }
}

export default Aside;
