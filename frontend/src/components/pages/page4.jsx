import React, { Component } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";

class Page4 extends Component {
  state = {
  };

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };

  render() {
    return (
      <div>
      <h1>{__filename}</h1>
      </div>
    );
  }
}

export default Page4;
