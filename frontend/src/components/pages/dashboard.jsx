import React, { Component } from "react";
import "../../index.css";
import NonAthleteMenu from "../nonAthleteMenu";
import ExampleImage from "../assets/ExampleImageAnatomy.PNG";
import HeatMap from "./heatmap";
import ClientList from "./clientList";
import StaffRegister from "./staffRegister";
import UserProfile from "./userProfile";
import ExerciseList from "./exerciseList";
import "../css/main.css";
import profilepic from "../images/profilepic.jpg";
import theobackground from "../images/theobackground.jpg";

class Dashboard extends Component {
  state = {};

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };

  // Dashboard is key jsx file used for routing the user of the app between pages while carrying navigation panel
  render() {
    return (

      <div>
        <img class="backgroundpic" alt="theobackgroundpic" style={{ margin: "10px 0px" }} src={theobackground} />
        <div class="topbanner"></div>
        <div>
          <div class="sidebar">
            <div className="info">
              <img class="profilepic" alt="profilepicture" style={{ margin: "10px 0px" }} src={profilepic} />
              <h1 style={{ color: "white" }}>{localStorage.getItem("name")}</h1>
              <h4 style={{ color: "white" }}>{localStorage.getItem("role")}</h4>
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
              {/* <h1>Heatmap</h1> */}
              {/* <br /> */}
              <div className="contentbody">
                <UserProfile
                  api={this.props.api}
                />
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
                <ClientList
                  api={this.props.api}
                  // userID={2}
                  // exerciseID={1}
                />
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
                <StaffRegister
                  api={this.props.api}
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {this.props.selection === 3 ? (
            <div>
              {/* <h1>Profile Page</h1> */}
              {/* <br /> */}
              <div className="contentbody">
                <UserProfile
                  api={this.props.api}
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {this.props.selection === 4 ? (
            <div>
              {/* <h1>Exercise List</h1> */}
              {/* <br /> */}
              <div className="contentbody">
                <ExerciseList
                  api={this.props.api}
                  userID={localStorage.getItem("userID")}
                />
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
