import React, { Component } from "react";


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
      <div class="container">
        <div class="btn btn-outline-primary">
          <button
            onClick={() => this.props.changeState(appStates.FrontPage)}
            type="submit"
            class="btn"
          >
            Back
          </button>
        </div>
        <h1>{this.state.aSession}</h1>
        <div class="card-header">
          <input style={{ borderRadius: "25px", padding: "3.5px 10px"}} type="text" id="username" placeholder="username" value={this.state.username} onChange={this.setUsername}/>
        </div>
        <div class="card-header">
          <input style={{ borderRadius: "25px", padding: "3.5px 10px"}} type="text" id="password" placeholder="password" value={this.state.password} onChange={this.setPassword}/>
        </div>
        <div>          
          <button
            class="btn btn-primary"
            style={{
              borderRadius: "25px",
              margin: "10px 0 0 0",
              position: "relative",
              float: "right",
              left: "-50%",
              textAlign: "left"
            }}
            onClick={() => {
              this.loginMethod(this.state.username, this.state.password);
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
