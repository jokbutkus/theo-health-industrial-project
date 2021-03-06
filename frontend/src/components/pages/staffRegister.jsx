import React, { Component } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";
import "../css/staffRegister.css";
import profilepic from '../images/profilepic.jpg';

class StaffRegister extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
      username: '',
      password: '',
      dateOfBirth: '',
      gender: '',
      height: '',
      weight: '',
      User: [],
    }
    this.handleChange = this.handleChange.bind(this);
  }

  signUpMethod = async () => {
    let res = await this.props.api.post('/signup', {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      dateOfBirth: this.state.dateOfBirth,
      gender: this.state.gender,
      height: this.state.height,
      weight: this.state.weight,
    })

    // console.log(res.data)
    // if (res.data.userID != null) {
    // this.props.changeState(appStates.Dashboard);
    // }
    // else {
    //   this.setState({ name: '', username: '', password: '', failed: true });
    // }
  }
  state = {
    menuSelection: 0,
    nameOfItem: "",

    User: [
      {
        id: 1,
        Username: "Mark Zuck",
        DOB: "10/10/1900",
        Gender: "Male",
        Height: "3ft",
        Weight: "69kg",
      },
      {
        id: 2,
        Username: "Stan Smith",
        DOB: "10/10/2001",
        Gender: "Male",
        Height: "9ft",
        Weight: "420kg",
      },
      {
        id: 4,
        Username: "egg",
        DOB: "10/10/1994",
        Gender: "Female",
        Height: "5ft 6",
        Weight: "3kg",
      },
    ],

    name: "",
    DOB: "",
    Gender: "",
    Height: "",
    Weight: "",
    selection: "0",
    allowSubmit: true
  };

  // function with which we push data to the database to signup an athlete into it
  handleSubmit = async () =>{
    let res = await this.props.api.post('/athlete-signup', {
      staffId: localStorage.getItem("userID"),
      name: this.state.name, 
      username: this.state.username, 
      password: this.state.password,
      dateOfBirth: this.state.dateOfBirth,
      gender: this.state.gender,
      weight: this.state.weight, 
      height: this.state.height, 
    })
    if(res.data.userID != null) alert(`User created ${res.data.name} succcesfully`);
    else alert(`User couldnt be created`);

  }

  handleChange = (event) => {
    // this.setState.User({Username : Event.target.value});
    // console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDelete = (event) => {
    const newList = this.state[event.target.name].filter(
      (Username) => Username.id !== parseInt(event.target.id)
    );

    this.setState({
      [event.target.name]: newList,
    });
  };

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };


  // HTML component of the page with state handling for inputs to allow for eaasier access within the class component
  // Use this formating for addtions of any extra data to be added
  render() {
    return (
      <div class="">
        <div class="container add-client-container">
          <h3>Add a Client</h3>
            <input placeholder="Username" class="form-control centered" name="username" type="text" onChange={this.handleChange}/>
            <input placeholder="Password" class="form-control centered" name="password" type="password" onChange={this.handleChange}/>          
            <input placeholder="Name" class="form-control centered" name="name" type="text" onChange={this.handleChange}/>
            <input placeholder="DOB" class="form-control centered" name="dateOfBirth" type="date" onChange={this.handleChange}/>
            <input placeholder="Gender" class="form-control centered" name="gender" type="text" onChange={this.handleChange}/>
            <input placeholder="Height" class="form-control centered" name="height" type="text" onChange={this.handleChange}/>
            <input placeholder="Weight" class="form-control centered" name="weight" type="text" onChange={this.handleChange}/>

            <button class="button" type="button" onClick={this.handleSubmit}>
              Submit
            </button>

        </div>
      </div>
    );
  }
}

export default StaffRegister;

