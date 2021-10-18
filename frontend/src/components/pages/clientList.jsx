import React, { Component } from "react";
import profilepic from '../images/profilepic.jpg';
import UserInformation from "./userInformation";
import ExerciseList from "./exerciseList";

import "bootstrap/dist/css/bootstrap.css";
import '../css/main.css';
import "../../index.css";
import '../css/clientList.css';

const appStates = {
  NotSelected : 1,
  UserSelected : 2,
};

class ClientList extends Component {

  state = {
    appState: appStates.NotSelected,
    User: [],
    // Temporary data from previous developments that was used as a template
    // User: [
    //   {
    //     id: 1,
    //     Username: "Mark Zuck",
    //     DOB: "10/10/1900",
    //     Gender: "Male",
    //     Height: "3ft",
    //     Weight: "69kg",
    //   },
    //   {
    //     id: 2,
    //     Username: "Stan Smith",
    //     DOB: "10/10/2001",
    //     Gender: "Male",
    //     Height: "9ft",
    //     Weight: "420kg",
    //   },
    //   {
    //     id: 4,
    //     Username: "egg",
    //     DOB: "10/10/1994",
    //     Gender: "Female",
    //     Height: "5ft 6",
    //     Weight: "3kg",
    //   },
    // ],
    show: false,
    selectedUser : ""
  };

    //to use the heatmap data just access it like this "this.state.exerciseData"
    componentDidMount(){
      // console.log("did mount", localStorage.getItem("userID"))
      this.props.api.get(`/client-list/${localStorage.getItem("userID")}`).then(res=>{
        // console.log(res.data)
        this.setState({User: res.data})
      })
    }

  changeState = (s) => this.setState({ appState: s });
    
  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };

  render() {
    let toggleShow = () => {
      // console.log(this.state.show);
      this.setState({ show: !this.state.show });
    };

    const state = this.state.appState;
    switch (state) {
      case appStates.NotSelected:   
      return (
        <div>
          <h2>Clients</h2>
          <table class="table table-hover list">
            <thead>
              <tr>
                <th class="client-img-cell" scope="col"></th>
                <th scope="col">Username</th>
                <th scope="col">Name</th>
                <th scope="col">DOB</th>
                <th scope="col">Gender</th>
                <th scope="col">Weight</th>
                <th scope="col">Height</th>
              </tr>
            </thead>
            <tbody>
              {this.state.User.map((user, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    this.setState({ selectedUser: user.athlete.id });
                    this.changeState(2);
                  }}
                >
                  <td class="client-img-cell"><img class="client-img" src={profilepic}/></td>
                  <td>{user.athlete.username}</td>
                  <td>{user.athlete.name}</td>
                  <td>{user.athlete.dateOfBirth}</td>
                  <td>{user.athlete.gender}</td>
                  <td>{user.athlete.weight}</td>
                  <td>{user.athlete.height}</td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
      );
      case appStates.UserSelected:
          return (
            <div>
              <ExerciseList
                api={this.props.api}
                userID={this.state.selectedUser}
              />
            </div>
          );
    }
  }
}

export default ClientList;
