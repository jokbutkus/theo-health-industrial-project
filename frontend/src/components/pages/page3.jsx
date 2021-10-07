import React, { Component } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

class BusinessMenu extends Component {
  state = {
  };

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default BusinessMenu;
