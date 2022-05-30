import React, { Component } from 'react';

class Button extends Component {
  render() {
    const {
      type = 'button', onClick, children,
    } = this.props;
    return (
      <button type={type} onClick={onClick}>{children}</button>
    );
  }
}

export default Button;
