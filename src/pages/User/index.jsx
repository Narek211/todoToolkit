import React, { Component } from "react";
import { getUserInfo } from "../../api/users";
import styles from "./User.module.scss";
import { withRouter } from "../../HOC/withRouter";


class User extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
  }

  async componentDidMount() {
    const { params } = this.props; 
    const info = await getUserInfo(params.id);
    this.setState({ user: info });
  }

  render() {
    const { params, ... props } = this.props;
    const { user } = this.state;

    return (
      <div className={styles}>
        <span> {user.name} </span>;
        <span> {user.username} </span>;
        <span> {user.email} </span>;
        <span> {user.website} </span>;
      </div>
    );
  }
}

export default withRouter(User);
