import React, { Component } from "react";
import styles from "./Users.module.scss";
import { getUsers } from "../../api/users";
import { Link } from "react-router-dom";
class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const users = await getUsers();
    this.setState({ users });
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        {users.map(({ id, name }, index) => (
          <Link key={id} to={`/users/${id}`}>
            <h2 className={styles.h2}>
              {index + 1}. {name}
            </h2>
          </Link>
        ))}
      </div>
    );
  }
}

export default Users;
