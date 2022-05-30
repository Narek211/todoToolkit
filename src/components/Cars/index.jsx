import React, { Component } from "react";
import { searchHoc } from "../../HOC/searchHoc";

const cars = [
  "BMW",
  "Mercedes",
  "Ford",
  "Alpha",
  "KIA",
  "Nissan",
  "BYD",
  "Renault",
  "Infinity",
];

class Cars extends Component {
  render() {
    const { items, search } = this.props;

    return (
      <div>
        <input placeholder="search" onChange={search} />
        {items.map((item, index) => (
          <h2 key={index} style={{ color: "white" }}>
            {item}
          </h2>
        ))}
      </div>
    );
  }
}

export default searchHoc(Cars, cars);