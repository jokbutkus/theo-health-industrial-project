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
        <ul class="nav flex-column nav-tabs card-header-tabs">
          <li class={"d-grid col-4"}>
            <a
              href="#" 
              class={
                "text-center nav-link w-150" + 
                (this.props.selection === 0 ? " active" : "")
              } 
              onClick={() => this.changeSelected(0)}
            > 
              My Profile
            </a>
          </li>
          <li class={"d-grid col-4"}>
            <a
              href="#"
              class={
                "text-center nav-link w-150" +
                (this.props.selection === 1 ? " active" : "")
              }
              onClick={() => this.changeSelected(1)}
            >
              My Clients
            </a>
          </li>
          <li class={"d-grid col-4"}>
            <a
              href="#"
              class={
                "text-center nav-link w-150" +
                (this.props.selection === 2 ? " active" : "")
              }
              onClick={() => this.changeSelected(2)}
            >
              Add Clients
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
