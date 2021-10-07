import React, { Component } from "react";

const appStates = {
  FrontPage: 1,
  Login: 2,
  Register: 3,
  Dashboard: 4,
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
        <div>
          <button
            onClick={() => this.props.changeState(appStates.FrontPage)}
            type="submit"
            class="btn btn-primary"
          >
            Back
          </button>
        </div>
        <script>{this.sessionCookie()}</script>
        <h1>{this.state.aSession}</h1>
        <div class="card-header">
          <input type="text" id="userID" />

        </div>
        <div>          <button
            class="btn btn-primary"
            onClick={() => {
              this.myFunction();
              if (this.state.correctValue === this.state.textValue) {
                this.props.changeState(appStates.Dashboard);
              }
            }}
            href="#"
          >
            Login
          </button></div>
      </div>
    );
  }
}

export default Login;
