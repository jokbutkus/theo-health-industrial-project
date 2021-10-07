import React, { Component } from "react";
import "../index.css";
import Login from "./pages/login";
import LoginForm from "./pages/loginForm"
import Dashboard from "./pages/dashboard";


const appStates = {
  //npm start
  //Login: 1, //takes customer/business prop
  //LoginSuccess: 2, //takes customer/business prop
  Dashboard: 3,
};

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



class App extends Component {
  state = {
    appState: appStates.Login,
    selection: 3,
  };

  changeState = (s) => this.setState({ appState: s });
  changeSelection = (s) => this.setState({ selection: s });

  

  render() {
    const sessionCookie = athlete1;
    const state = this.state.appState;
    switch (state) {
      
      case appStates.Login:
        return (
          <div>
            <Login
              success={false}
              changeState={this.changeState}
              appState={this.state.appState}
              cookie={sessionCookie}
            />
          </div>
        );

      case appStates.LoginSuccess:
        return (
          <div>
            <Login success={true} changeState={this.changeState} appState={this.state.appState}/>
          </div>
        );
        case appStates.Dashboard:
        switch(sessionCookie.usertype)
        {
          case "athlete":
            return (
              <div>
                {sessionCookie.usertype}
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
