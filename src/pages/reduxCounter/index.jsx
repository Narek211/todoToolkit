import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/Button";
import { plus, minus } from "../../features/counter/counterSlice";
import { changeColor } from "../../features/color/colorSlice";

class ReduxCounter extends Component {
  render() {
    const { dispatch, counter, color } = this.props;
    return (
      <div>
        <h1>ReduxCounter</h1>
        <Button
          onClick={() => {
            dispatch(plus());
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            dispatch(minus());
          }}
        >
          -
        </Button>
        <Button>Change color</Button>
        <input
          type="color"
          onChange={(e) => {
            dispatch(changeColor({ color: e.target.value }));
          }}
        ></input>
        <h1 style={{color}}>{counter}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ counter: { count }, color: { color } }) => ({
  counter: count,
  color: color,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
