import React, { Component } from "react";
import "../index.css";
import Login from "./pages/login";
import Register from "./pages/register"
import FrontPage from "./pages/frontPage";
import Dashboard from "./pages/dashboard";




const athlete1 = {
  username: "athlete1",
  usertype: "athlete"

};

const athlete2 = {
  username: "athlete2",
  usertype: "injuredathlete"
};

const athlete3 = {
  username: "athlete3",
  usertype: "athlete"
};

const personaltrainer1 = { 
  username: "personaltrainer1",
  usertype: "personaltrainer"
}


const physiotherapist1 = { 
  username: "physiotherapist1",
  usertype: "physiotherapist"
}

const appStates = {
  FrontPage: 1,
  Login: 2,
  Register: 3,
  Dashboard: 4,
};


class App extends Component {
  state = {
    appState: appStates.FrontPage,
    selection: 0,
  };

  changeState = (s) => this.setState({ appState: s });
  changeSelection = (s) => this.setState({ selection: s });

  

  render() {
    const sessionCookie = athlete1;
    const state = this.state.appState;
    switch (state) {
      

      case appStates.FrontPage:
        return (
          <div>
            <h2></h2>
            <FrontPage
              changeState={this.changeState}
              appState={this.state.appState}
              cookie={sessionCookie}
            />
          </div>
        );

      case appStates.Login:
        return (
          <div>
            <h2></h2>
            <Login
              changeState={this.changeState}
              appState={this.state.appState}
              cookie={sessionCookie}
            />
          </div>
        );

        case appStates.Register:
        return (
          <div>
            <h2></h2>
            <Register
              changeState={this.changeState}
              appState={this.state.appState}
              cookie={sessionCookie}
            />
          </div>
        );

        case appStates.Dashboard:
        switch(sessionCookie.usertype)
        {
          case "athlete":
            return (
              <div>
                <Dashboard
                  selection={this.state.selection}
                  changeSelection={this.changeSelection}
                />
                
              </div>
            );
          case "injuredathlete":
            return (
              <div>
                {sessionCookie.usertype}
                <Dashboard
                  selection={this.state.selection}
                  changeSelection={this.changeSelection}
                />
                
              </div>
            );
          case "personaltrainer":
            return (
              <div>
                {sessionCookie.usertype}
                <Dashboard
                  selection={this.state.selection}
                  changeSelection={this.changeSelection}
                />
                
              </div>
            );
          case "physiotherapist":
            return (
              <div>
                {sessionCookie.usertype}
                <Dashboard
                  selection={this.state.selection}
                  changeSelection={this.changeSelection}
                />
                
              </div>
            );
        }
      default:
        return false;
    }
  }
}

export default App;
