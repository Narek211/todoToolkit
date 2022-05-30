import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "../../features/todo/actions";

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  render() {
    const { dispatch, todo } = this.props;
    const { text } = this.state;

    return (
      <div>
        <input
          onChange={(e) => {
            this.setState({
              text: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            dispatch(addTodo(text));
          }}
        >
          +
        </button>
        {todo.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
        <button onClick={() => {
            dispatch(removeTodo())
        }}>
            Remove
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ todo }) => ({
  todo,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
