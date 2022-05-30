import React from "react";

export const searchHoc = (Component, items) => {
  class Wrapper extends React.Component {
    constructor() {
      super();
      this.state = {
        items,
        filteredItems: items,
      };
    }

    handleSearch = ({ target: { value } }) => {
      const { items } = this.state;

      const copyState = [...items];

      const filteredItems = copyState.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase())
      );

      this.setState({ filteredItems });
    };

    render() {
      const { filteredItems } = this.state;
      return <Component items={filteredItems} search={this.handleSearch} />;
    }
  }

  return Wrapper;
};
