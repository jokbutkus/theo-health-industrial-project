import React, { Component } from "react";
import "../../index.css";
import Menu from "../menu";
import ExampleImage from "../assets/ExampleImageAnatomy.PNG"
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";


class Dashboard extends Component {
  state = {};

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };

  render() {
    return (
      <div>
        <div class="row m-5">
          <div class="col-4">
            <img src="#" alt="Business Logo" />
          </div>
          <div class="col-6">
            <h1 style={{ fontSize: 60 }}>Dashboard</h1>
          </div>
        </div>
        <Menu
          selection={this.props.selection}
          changeSelection={this.props.changeSelection}
        >
          {/* {this.setState({MenuRef: this.Menu.current})}
          {(this.state.MenuRef !== null)? this.state.MenuRef.state.selected : "9"} */}
          {this.props.selection === 0 ? (
            <div>
              <h1>Page1</h1>
              <br />
              <Page1 />
            </div>
          ) : (
            ""
          )}
          {this.props.selection === 1 ? (
            <div>
              <h1>Page2</h1>
              <br />
              <Page2 />
            </div>
          ) : (
            ""
          )}
          {this.props.selection === 2 ? (
            <div>
              <h1>Page3</h1>
              <br />
              <Page3 />
            </div>
          ) : (
            ""
          )}
          {this.props.selection === 3 ? (
            <div>
              <h1>Page4</h1>
              <br />
              <Page4 />
            </div>
          ) : (
            ""
          )}

          {/* <Products /> */}
        </Menu>
      </div>
    );
  }
}

export default Dashboard;
