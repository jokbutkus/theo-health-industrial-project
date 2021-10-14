import React, { Component } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";
import profilepic from '../images/profilepic.jpg';
import UserInformation from "./userInformation";
import '../css/main.css';

const appStates = {
  NotSelected : 1,
  UserSelected : 2
};

class ClientList extends Component {

  state = {
    appState: appStates.NotSelected,
    User: [],
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
  };

    //to use the heatmap data just access it like this "this.state.exerciseData"
    componentDidMount(){
      console.log("did mount", localStorage.getItem("userID"))
      this.props.api.get(`/client-list/${localStorage.getItem("userID")}`).then(res=>{
        this.setState({User: res.data})
      })
    }

  changeState = (s) => this.setState({ appState: s });

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };

  render() {
    this.state.User.map((user, index) => {
      console.log('render')
      console.log(user.athlete)
    });
    let toggleShow = () => {
      console.log(this.state.show);
      this.setState({ show: !this.state.show });
    };
    const state = this.state.appState;
    switch (state) {
      case appStates.NotSelected:
        return (
          <div>
            <form>
              <h2>Clients</h2>
              {this.state.User.map((user, index) => (
                <div key={index} class="row">
                  <img
                    style={{ maxHeight: 100, maxWidth: 100}}
                    src={profilepic}
                    alt=""
                    class="row m-2"
                  />
                  <div>
                    <input class="col m-2" type="text" readonly value={user.athlete.username} />
                  </div>
                  <div>
                    <input class="col m-2" type="text" value={user.athlete.name} />
                  </div>
                  <div 
                  style={{ display: this.state.show ? "block" : "none" }}
                  class="row m-2">
                    <div class='infocontainer'>
                    <input class="forminfo" type="text" value={user.athlete.dateOfBirth} />
                    <input class="forminfo" type="text" value={user.athlete.gender} />
                    <input class="forminfo" type="text" value={user.athlete.weight} />
                    <input class="forminfo" type="text" value={user.athlete.height} />
                    </div>
                  </div>
                  <div class="col-3">
                  <button
                      name={"User"}
                      id={user.id}
                      class="btn btn-secondary bg-primary m-1"
                      type="button"
                      onClick={toggleShow}
                    >
                      Display Client's Information
                    </button>

                  </div>
                  <br />
                  <br />
                  <br />
                </div>
              ))}
            </form>
          </div>
        );
      case appStates.NotSelected:
          return(
            <div>
            </div>
          );
    }
  }
}

export default ClientList;
