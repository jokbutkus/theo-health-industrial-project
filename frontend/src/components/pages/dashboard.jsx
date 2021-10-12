import React, { Component } from "react";
import "../../index.css";
import NonAthleteMenu from "../nonAthleteMenu";
import ExampleImage from "../assets/ExampleImageAnatomy.PNG";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import "../css/main.css";
import profilepic from "../images/profilepic.jpg";
import theobackground from "../images/theobackground.jpg";

class Dashboard extends Component {
  state = {};

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };

  render() {
    return (
      
      <div>
        <img class="backgroundpic" alt="theobackgroundpic" style={{ margin: "10px 0px" }} src={theobackground} />
        <div class="topbanner"></div>
        <div>
          <div class="sidebar">
            <div className="info">
              <img class="profilepic" alt="profilepicture" style={{ margin: "10px 0px" }} src={profilepic} />
              <h1 style={{ color: "white"}}>Name</h1>
              <h4 style={{ color: "white"}}>Job role</h4>
              <NonAthleteMenu
                selection={this.props.selection}
                changeSelection={this.props.changeSelection}
              />
              </div>
          </div>
        </div>

        <div class="mainpage">
          {/* {this.setState({MenuRef: this.Menu.current})}
          {(this.state.MenuRef !== null)? this.state.MenuRef.state.selected : "9"} */}
          {this.props.selection === 0 ? (
            <div>
              {/* <h1>My profile</h1> */}
              {/* <br /> */}
              <div className="contentbody">
                <Page1 />
              </div>
            </div>
          ) : (
            ""
          )}
          {this.props.selection === 1 ? (
            <div>
              {/* <h1>My Clients</h1> */}
              <br />
              <div className="contentbody">
                <Page2 />
              </div>
            </div>
          ) : (
            ""
          )}
          {this.props.selection === 2 ? (
            <div>
              {/* <h1>Add Clients</h1> */}
              <br />
              <div className="contentbody">
                <Page3 />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
