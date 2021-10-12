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
      {
        id: 1,
        Username: "Mark Zuck",
        DOB: "10/10/1900",
        Gender: "Male",
        Height: "3ft",
        Weight: "69kg",
      },
      {
        id: 2,
        Username: "Stan Smith",
        DOB: "10/10/2001",
        Gender: "Male",
        Height: "9ft",
        Weight: "420kg",
      },
      {
        id: 4,
        Username: "egg",
        DOB: "10/10/1994",
        Gender: "Female",
        Height: "5ft 6",
        Weight: "3kg",
      },
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
            <form>
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
                <input class="" type="text" value={user.DOB} />
                <input class="" type="text" value={user.Gender} />
                <input class="" type="text" value={user.Height} />
                <input class="" type="text" value={user.Weight} />
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
