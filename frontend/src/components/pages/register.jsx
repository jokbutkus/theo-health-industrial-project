import React, { Component } from 'react';

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
      <div>
        <div>
          <button onClick={() => this.props.changeState(appStates.FrontPage)} type="submit" class="btn btn-primary">
            Back
          </button>
        </div>

        <div class="card col-12 col-lg-4 login-card mt-2 hv-center">
          <form>
          <div class="card-header">
              <input type="text" id="name" placeholder="name" value={this.state.name} onChange={this.setName} />
            </div>
            <div class="card-header">
              <input type="text" id="username" placeholder="username" value={this.state.username} onChange={this.setUsername} />
            </div>
            <div class="card-header">
              <input type="text" id="password" placeholder="password" value={this.state.password} onChange={this.setPassword} />
            </div>
            <button onClick={this.signUpMethod} type="button" class="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;