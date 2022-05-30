import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Button from '../../components/Button';
import styles from './Register.module.scss';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
    this.changeInput = this.changeInput.bind(this);
    this.register = this.register.bind(this);
  }

  changeInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  register(event) {
    event.preventDefault();
    const { email, password } = this.state;
    if (email && password !== "") {
      localStorage.setItem('users', JSON.stringify([{ email, password }]));
    }
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div className={styles.content}>
        <h1>Register</h1>
        <form onSubmit={this.register}>
          <input
            onChange={this.changeInput}
            name="email"
            placeholder="Email"
          />
          <input
            onChange={this.changeInput}
            name="password"
            placeholder="Password"
          />
          <Button type="submit">Register</Button>
        </form>
      </div>
    );
  }
}

export default Register;
