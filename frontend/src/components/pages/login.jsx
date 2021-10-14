import React, { Component } from "react";
import "../css/login.css";
import logo from '../images/Logo_1.png';


const appStates = {
  FrontPage: 1,
  Login: 2,
  Register: 3,
  Dashboard: 4,
};

class Login extends Component {

  constructor(){
    super();
    this.state = {
        username: '',
        password: ''
    }

    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  loginMethod = async() => {
    let res = await this.props.api.post('/login', { username: this.state.username, password: this.state.password })

    if (res.data.userID!=null) {
      localStorage.setItem("userID", res.data.userID);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.name);
      this.props.changeState(appStates.Dashboard);
    }
    else {
      this.setState({username: '', password: ''});
    }
  }

  setUsername(event) {
    this.setState({ username: event.target.value })
  }

  setPassword(event) {
    this.setState({ password: event.target.value })
  }

  render() {
    return (
      <>
      <div class="box"></div>
      <div class="theologo">
            <img class='theologoimage' alt='theologo' src={logo} />
      </div>
      <div class="login-body">
      <div class="container">
        
        <div class='d-flex justify-content-center'>
          <h1 class="card-title" style={{ fontSize: "5vh", color: "#000000", marginBottom: "15px" }}>Welcome</h1>
        </div>

        <div class="input-group mb-2 d-flex justify-content-center">
            <input  class="login" type="text" id="username" placeholder="username" value={this.state.username} onChange={this.setUsername}/>
        </div>

        <div class="input-group mb-2 d-flex justify-content-center">
            <input class="login" type="text" id="password" placeholder="password" value={this.state.password} onChange={this.setPassword}/>
        </div>

        <div class="d-flex justify-content-center">     
          <button class="button" onClick={() => {this.loginMethod(this.state.username, this.state.password);}}href="#">
            Login
          </button>
        </div>
        <div class="d-flex justify-content-center">
          <button class="button-2" onClick={() => this.props.changeState(appStates.FrontPage)}>
            Back
          </button>
        </div>
        </div>
      </div>
      </>
    );
  }
}
export default Login;
