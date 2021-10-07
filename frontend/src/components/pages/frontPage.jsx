import React, { Component } from "react";

const appStates = {
    FrontPage: 1,
    Login: 2,
    Register: 3,
    Dashboard: 4,
  };

class FrontPage extends React.Component {
    render() { 
        return (
          <div>
            <div>
              <button onClick={() => this.props.changeState(appStates.Login)}>
                Login
              </button>
            </div>
            <div>
              <button onClick={() => this.props.changeState(appStates.Register)}>
                Sign Up
              </button>
            </div>
          </div>
        );
    }
}
 
export default FrontPage;