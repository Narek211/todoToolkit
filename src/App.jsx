import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aside from "./components/Aside";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import styles from "./App.module.scss";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Users from "./pages/Users";
import User from "./pages/User";
import ReduxCounter from "./pages/reduxCounter";
import Todo from "./pages/Todo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <div className={styles.container}>
                  <Aside />
                  <div className={styles.content}>
                    <Home />
                  </div>
                </div>
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <div className={styles.container}>
                  <Aside />
                  <div className={styles.content}>
                    <About />
                  </div>
                </div>
              </PrivateRoute>
            }
          />
          <Route
            path="/redux-counter"
            element={
              <PrivateRoute>
                <div className={styles.container}>
                  <Aside />
                  <div className={styles.content}>
                    <ReduxCounter />
                  </div>
                </div>
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <div className={styles.container}>
                  <Aside />
                  <div className={styles.content}>
                    <Users />
                  </div>
                </div>
              </PrivateRoute>
            }
          />
          <Route
            element={
              <PrivateRoute>
                <div className={styles.container}>
                  <Aside click={this.change} />
                  <div className={styles.content}>
                    <User />
                  </div>
                </div>
              </PrivateRoute>
            }
            path="/users/:id"
          />
           <Route
            element={
              <PrivateRoute>
                <div className={styles.container}>
                  <Aside click={this.change} />
                  <div className={styles.content}>
                    <Todo />
                  </div>
                </div>
              </PrivateRoute>
            }
            path="/todo"
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <div className={styles.container}>
                  <Aside />
                  <div className={styles.content}>
                    <Register />
                  </div>
                </div>
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
