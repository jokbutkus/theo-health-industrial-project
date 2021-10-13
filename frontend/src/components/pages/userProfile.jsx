import React, { Component } from "react";


const appStates = {
  FrontPage: 1,
  Login: 2,
  Register: 3,
  Dashboard: 4,
};

class UserProfile extends Component {
  state = {
     userData: [] 
  }
  componentDidMount(){
    this.props.api.get(`/user/${localStorage.getItem("userID")}`).then(res=>{
      this.setState({userData: res.data})
      console.log(this.state.userData)
    })
  }
  render() {
    return (
      <div class="container">
        <input value='Name' readOnly></input>
        <input value={this.state.userData.name} readOnly></input><br></br>
        <input value='Username' readOnly></input>
        <input value={this.state.userData.username} readOnly></input><br></br>
        <input value='Date of Birth' readOnly></input>
        <input value={this.state.userData.dateOfBirth} readOnly></input><br></br>
        <input value='Gender' readOnly></input>
        <input value={this.state.userData.gender} readOnly></input><br></br>
        <input value='Height (cm)' readOnly></input>
        <input value={this.state.userData.height} readOnly></input><br></br>
        <input value='Weight (kg)' readOnly></input>
        <input value={this.state.userData.weight} readOnly></input><br></br>
      </div>
    );
  }
}
export default UserProfile;
