import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import '../css/frontpage.css';

const appStates = {
  FrontPage: 1,
  Login: 2,
  Register: 3,
  Dashboard: 4,
};

class FrontPage extends React.Component {

  skipLogin = () => {
    if (localStorage.getItem("userID") != null) {
      console.log("User is logged in")
      console.log("User is logged in")
      this.props.changeState(appStates.Dashboard)
    }
  }

  render() {
    return (
      <div class="contentbody" style={{ border: "0" }}>
        {
          this.skipLogin()
        }
        <div class="row justify-content-left">
          <div class="col-3">
            <button class="button" style={{ borderStyle: "solid", borderRadius: "100px" }} onClick={() => this.props.changeState(appStates.Login)}>
              Login
            </button>
          </div>

          <div class="col-3">
            <button class="button" style={{ borderStyle: "solid", borderRadius: "100px" }} onClick={() => this.props.changeState(appStates.Register)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;