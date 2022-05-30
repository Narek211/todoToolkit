import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import styles from "./Login.module.scss";

const getActiveClassName = ({ isActive }) => {
  if (isActive) {
    return styles.active;
  }

  return "";
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirect: false,
    };
    this.changeInput = this.changeInput.bind(this);
    this.login = this.login.bind(this);
  }

  changeInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  login(event) {
    event.preventDefault();
    const { email, password } = this.state;

    const users = JSON.parse(localStorage.getItem("users"));

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("token", true);
      return this.setState({
        redirect: true,
      });
    }

    localStorage.setItem("token", false);
    return this.setState({
      redirect: false,
    });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={this.login}>
          <input name="email" onChange={this.changeInput} placeholder="Email" />
          <input
            name="password"
            onChange={this.changeInput}
            placeholder="Password"
          />
          <Button type="submit">Login</Button>
          <NavLink className={getActiveClassName} to="/register">
            Register
          </NavLink>
        </form>
      </div>
    );
  }
}

export default Login;
