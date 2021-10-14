import React, { Component } from "react";
// import "../css/main.css";


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
      <>
        <div class='d-flex justify-content-center'>
          <h1 class="card-title" style={{ fontSize: "5vh", color: "#000000", marginBottom: "15px" }}>My Profile</h1>
        </div>
      <div class="profile-container d-flex flex-row justify-content-center">
        <div class="d-flex flex-column">
          <label class='profiletext'>Name</label>
          <label class='profiletext'>Username</label>
          <label class='profiletext'>Date of Birth</label>
          <label class='profiletext'>Gender</label>
          <label class='profiletext'>Height (cm)</label>
          <label class='profiletext'>Weight (kg)</label>
        </div>

        <div class="d-flex flex-column">
          <input class="test" value={this.state.userData.name} readOnly></input>
          <input class="test" value={this.state.userData.username} readOnly></input>
          <input class="test" value={this.state.userData.dateOfBirth} readOnly></input>
          <input class="test" value={this.state.userData.gender} readOnly></input>
          <input class="test" value={this.state.userData.height} readOnly></input>
          <input class="test" value={this.state.userData.weight} readOnly></input>
        </div>
      </div>
      </>
    );
  }
}
export default UserProfile;
