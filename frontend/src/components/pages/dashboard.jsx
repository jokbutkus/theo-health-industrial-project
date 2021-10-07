import React, { Component } from "react";
import "../../index.css";
import Menu from "../menu";
import ExampleImage from "../assets/ExampleImageAnatomy.PNG"
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import './main.css';
import profilepic from '../images/profilepic.jpg';


class Dashboard extends Component {
  state = {};

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };

  render() {
    return (
      <>
      <div class="sidebar">
        <div className="info">
          <img class='profilepic' alt='profilepicture' src={profilepic} />
          <h1>Name</h1>
          <h3>Job role</h3>
        </div>
      </div>

      <div class='mainpage'>
        <Menu
          selection={this.props.selection}
          changeSelection={this.props.changeSelection}
        >
          {/* {this.setState({MenuRef: this.Menu.current})}
          {(this.state.MenuRef !== null)? this.state.MenuRef.state.selected : "9"} */}
          {this.props.selection === 0 ? (
            <div>
              <h1>My profile</h1>
              <br />
              <Page1 />
            </div>
          ) : (
            ""
          )}
          {this.props.selection === 1 ? (
            <div>
              <h1>My Clients</h1>
              <br />
              <Page2 />
            </div>
          ) : (
            ""
          )}
          {this.props.selection === 2 ? (
            <div>
              <h1>Add Clients</h1>
              <br />
              <Page3 />
            </div>
          ) : (
            ""
          )}
          {/* <Products /> */}
        </Menu>
      </div>

      {/* <div>
        
      </div> */}
      </>
    );
  }
}

export default Dashboard;
