import React, { Component } from 'react';
import "../css/login.css";
import logo from '../images/Logo_1.png';

const appStates = {
  FrontPage: 1,
  Login: 2,
  Register: 3,
  Dashboard: 4,
};

class Register extends Component {
  constructor(){
    super();

    this.state = {
        name: '',
        username: '',
        password: '',
        failed: false
    }

    
    this.setName = this.setName.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setName(event) {
    this.setState({ name: event.target.value })
    console.log(this.state.name)
  }
  
  setUsername(event) {
    this.setState({ username: event.target.value })
    console.log(this.state.username)
  } 

  setPassword(event) {
    this.setState({ password: event.target.value })
    console.log(this.state.password)
  }

  signUpMethod = async() => {
    let res = await this.props.api.post('/signup', { name: this.state.name, username: this.state.username, password: this.state.password })
    
    console.log(res.data)
    if (res.data.userID!=null) {
      localStorage.setItem("userID", res.data.userID);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.name);
      this.props.changeState(appStates.Dashboard);
    }
    else {
      this.setState({name: '', username: '', password: '', failed:true});
    }
  }

  render() {
    return (
      <>
      
      <div class="box"></div>
      <div class="theologo">
            <img class='theologoimage' alt='theologo' src={logo} />
      </div>
      <div class="login-body centered-xy">

          <div class='d-flex justify-content-center'>
            <h1 class="card-title" style={{ fontSize: "5vh", color: "#000000", marginBottom: "15px" }}>Sign Up</h1>
          </div>

          <div class="input-group mb-2 d-flex justify-content-center">
              <input class="login" type="text" id="name" placeholder="name" value={this.state.name} onChange={this.setName} />
            </div>
            <div class="input-group mb-2 d-flex justify-content-center">
              <input class="login" type="text" id="username" placeholder="username" value={this.state.username} onChange={this.setUsername} />
            </div>
            <div class="input-group mb-2 d-flex justify-content-center">
              <input class="login" type="password" id="password" placeholder="password" value={this.state.password} onChange={this.setPassword} />
            </div>
            <div class="d-flex justify-content-center">     
              <button class="button" onClick={this.signUpMethod} type="button" >
                Register
              </button>
            </div>

        <div class="d-flex justify-content-center">
          <button class="button-2" onClick={() => this.props.changeState(appStates.FrontPage)}>
            Back
          </button>
        </div>
      </div>
      </>
    );
  }
}

export default Register;