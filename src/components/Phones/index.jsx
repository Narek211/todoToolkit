import React, { Component } from "react";
import { searchHoc } from "../../HOC/searchHoc";

const phones = [
  "Black",
  "Apple",
  "GOOGLE",
  "MOTOROLLA",
  "Samsung",
  "Nokia",
  "Ericson",
  "Sony",
  "Dorado",
];

class Phones extends Component {
  render() {
    const { search, items } = this.props;
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

export default searchHoc(Phones, phones);