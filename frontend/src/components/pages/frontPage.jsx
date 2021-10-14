import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import '../css/frontpage.css';
import logo from '../images/Logo_1.png';

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
          <>
          <div class="theologo">
            <img class='theologoimage' alt='theologo' src={logo} />
          </div>
          <div class="box"></div>
          <div class="content-body">
            <div class=" d-flex justify-content-center">
              <button class="button" onClick={() => this.props.changeState(appStates.Login)}>
                Login
              </button>
            </div>


              <div class=" d-flex justify-content-center">
                <button class="button" onClick={() => this.props.changeState(appStates.Register)}>
                  Sign Up
                </button>
              </div>
                
          </div>
          </>
        );
    }
}

export default FrontPage;