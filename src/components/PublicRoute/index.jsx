import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class PublicRoute extends Component {
  constructor() {
    super();
    this.state = {
      token: JSON.parse(localStorage.getItem('token')),
    };
  }

  render() {
    const { token } = this.state;
    const { children } = this.props;

    if (token) {
      return <Navigate to="/" />;
    }

    return children;
  }
}

export default PublicRoute;
