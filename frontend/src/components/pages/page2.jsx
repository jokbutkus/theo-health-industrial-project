import React, { Component } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";
import profilepic from '../images/profilepic.jpg';
import UserInformation from "./userInformation";

const appStates = {
  NotSelected : 1,
  UserSelected : 2
};

class Page2 extends Component {
  state = {
    appState: appStates.NotSelected,
    User: [
      { id: 1, Username: "Mark Zuck", data: "Some basic overview information about some dude about something" },
      { id: 2, Username: "Stan Smith", data: "Some information" },
      { id: 4, Username: "Optimus Prime", data: "Some information" },
    ],
  };

  changeState = (s) => this.setState({ appState: s });

  handleDelete = (event) => {
    const newList = this.state[event.target.name].filter(
      (Username) => Username.id !== parseInt(event.target.id)
    );

    this.setState({
      [event.target.name]: newList,
    });
  };
  

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };



  render() {
    const state = this.state.appState;
    switch (state) {
      case appStates.NotSelected:
        return (
          <div>
            <h1>{__filename}</h1>
            <form
            onClick = {this.setState({appStates : UserSelected})}>
              <h2>Clients</h2>
              {this.state.User.map((user, index) => (
                <div key={index} class="row">
                  <img
                    style={{ maxHeight: 100, maxWidth: 100 }}
                    src={profilepic}
                    alt=""
                    class="row m-2"
                  />
                  <div>
                    <input class="col m-2" type="text" value={user.Username} />
                  </div>
                  <div class="row m-2">
                    <input class="col" type="text" value={user.data} />
                  </div>
                  <div class="col-3">
                    <button
                      name={"User"}
                      id={user.id}
                      class="btn btn-secondary bg-danger m-2"
                      type="button"
                      onClick={this.handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                  <br />
                  <br />
                  <br />
                </div>
              ))}
            </form>
          </div>
        );
      case appStates.NotSelected:
          return(
            <div>
              <UserInformation  
              changeState={this.changeState}
              appState={this.state.appState}/>
            </div>
          );
    }
  }
}

export default Page2;
