import React, { Component } from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.css";


class  Menu extends Component {

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };

  render() {
    return (
      <div class="card">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class={"d-grid col-3"}>
            <a
              href="#"
              class={
                "text-center nav-link w-50 mx-auto" +
                (this.props.selection === 0 ? " active" : "")
              }
              onClick={() => this.changeSelected(0)}
            >
              0
            </a>
          </li>
          <li class={"d-grid col-3"}>
            <a
              href="#"
              class={
                "text-center nav-link w-50 mx-auto" +
                (this.props.selection === 1 ? " active" : "")
              }
              onClick={() => this.changeSelected(1)}
            >
              1
            </a>
          </li>
          <li class={"d-grid col-3"}>
            <a
              href="#"
              class={
                "text-center nav-link w-50 mx-auto" +
                (this.props.selection === 2 ? " active" : "")
              }
              onClick={() => this.changeSelected(2)}
            >
              2
            </a>
          </li>
          <li class={"d-grid col-3"}>
            <a
              href="#"
              class={
                "text-center nav-link w-50 mx-auto" +
                (this.props.selection === 3 ? " active" : "")
              }
              onClick={() => this.changeSelected(3)}
            >
              3
            </a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div>
          {this.props.children}
        </div>
      </div>
    </div>
    );
  }
}

export default Menu;
