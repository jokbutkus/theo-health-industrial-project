import React, { Component } from "react";

const appStates = {
  Dashboard: 3,
};

class Login extends Component {
  state = {
    correctValue : "athlete1",
    textValue : "",
    aSession : ""
  };
   myFunction = () => {
    this.state.textValue = document.getElementById("userID").value;
  }

  sessionCookie = (props) => {
    this.state.aSession = this.props.cookie.username;
  }

  render() {
    return (
      <div class="card text-center">
      <script>{this.sessionCookie()}</script>
        <h1>{
        this.state.aSession
        }</h1>
        <div class="card-header">
          
          <input type="text" id="userID"/>
          <a
            style={{ fontSize: 25 }}
            class="btn btn-secondary w-25 mx-auto"
            onClick={() => {
              this.myFunction()
              if (this.state.correctValue === this.state.textValue) {
              this.props.changeState(appStates.Dashboard)}}}
            href="#"
          >
            Login
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
