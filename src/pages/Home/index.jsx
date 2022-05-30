import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "../Login/Login.module.scss";
import Cars from "../../components/Cars";
import Phones from "../../components/Phones";

const styles1 = {
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
};

const getActiveClassName = ({ isActive }) => {
  if (isActive) {
    return styles.active;
  }
  return "";
};

class Home extends Component {
  render() {
    return (
      <div style={styles1}>
        <Cars />
        <Phones />
        <h1>Home</h1>
        <NavLink onClick={() => localStorage.setItem("token", false)} className={getActiveClassName} to="/login">
          Log out
        </NavLink>
      </div>
    );
  }
}

export default Home;
