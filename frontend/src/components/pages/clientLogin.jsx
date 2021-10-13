import React, { Component } from "react";


const appStates = {
  FrontPage: 1,
  Login: 2,
  ClientLogin: 3,
  Register: 4,
  Dashboard: 5,
  UserDashboard: 6,
};

class Login extends Component {
  state = {isClient: false};
  
  constructor(){
    super();

    this.state = {
        username: '',
        password: '',
        
    }

    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  loginMethod = async() => {
    let res = await this.props.api.post('/login', { username: this.state.username, password: this.state.password })
    console.log(res.data)

    if (res.data.userID!=null) {
      //if (localStorage.getItem("role") === "trainer" || localStorage.getItem("role") === "physiopherapist") {
      localStorage.setItem("userID", res.data.userID);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.name);
      this.props.changeState(appStates.UserDashboard);
      
    
      
      // if (localStorage.getItem("role") === "trainer" || localStorage.getItem("role") === "physiopherapist") {
      //   this.props.changeState(appStates.Dashboard);
      //   console.log("sio");
      // }
      // if (localStorage.getItem("role") === "trainer" || localStorage.getItem("role") === "physiopherapist") {
      //   this.props.changeState(appStates.UserDashboard);
      // }
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
        
        <div class="container">
          <h1 class="card-title" style={{ color: "#f36d21"}}>Client Login</h1>
        </div>

        <div class="input-group mb-3 d-flex justify-content-center">
          <div class="input-group-prepend">
            <span class="input-group-text" style={{ borderColor: "ButtonShadow", marginRight: "5px" }}>Uesrname: </span>
          </div>
            <input style={{ borderRadius: "25px", padding: "3.5px 15px"}} type="text" id="username" placeholder="username" value={this.state.username} onChange={this.setUsername}/>
        </div>

        <div class="input-group mb-3 d-flex justify-content-center">
          <div class="input-group-prepend">
            <span class="input-group-text" style={{ borderColor: "ButtonShadow", marginRight: "9px" }}>Password: </span>
          </div>
            <input style={{ borderRadius: "25px", padding: "3.5px 15px"}} type="text" id="password" placeholder="password" value={this.state.password} onChange={this.setPassword}/>
        </div>

        <div>          
          <button
            class="btn btn-primary"
            style={{
              borderRadius: "25px",
              padding: "10px 25px",
              borderRadius: "50px",
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
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
