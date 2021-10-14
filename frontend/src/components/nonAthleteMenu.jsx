import React, { Component } from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.css";


class NonAthleteMenu extends Component {

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };
  isUserTrainerOrPhysioterapist = () => {
    let role = localStorage.getItem("role");
    if (role == "trainer" || role == "physioterapist") {
      return true;
    }
    else return false;
  }
  componentDidMount() {
    this.isUserTrainerOrPhysioterapist();
  }

  render() {
    return (
      <div class="">
        <div class="center_block">
          <ul class="ul_class">
            {/* <li class="d-grid col-4">
            <a
              href="#" 
              class={
                "text-center nav-link sidebutton" + 
                (this.props.selection === 0 ? " active" : "")
              } 
              onClick={() => this.changeSelected(0)}
            > 
              Heatmap
            </a>
          </li> */}
            <a
              href="#"
              class={
                "text-center nav-link sidebutton" +
                (this.props.selection === 3 ? " active" : "")
              }
              onClick={() => this.changeSelected(3)}
            >
              Profile page
            </a>
            {this.isUserTrainerOrPhysioterapist() &&
              <li class={"d-grid col-4"}>
                <a
                  href="#"
                  class={
                    "text-center nav-link sidebutton" +
                    (this.props.selection === 1 ? " active" : "")
                  }
                  onClick={() => this.changeSelected(1)}
                >
                  My Clients
                </a>
                <a
                  href="#"
                  class={
                    "text-center nav-link sidebutton" +
                    (this.props.selection === 2 ? " active" : "")
                  }
                  onClick={() => this.changeSelected(2)}
                >
                  Add Clients
                </a>
              </li>
            }
            {!this.isUserTrainerOrPhysioterapist() &&
              <a
                href="#"
                class={
                  "text-center nav-link sidebutton" +
                  (this.props.selection === 4 ? " active" : "")
                }
                onClick={() => this.changeSelected(4)}
              >
                Exercise List
              </a>
            }
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

export default NonAthleteMenu;
