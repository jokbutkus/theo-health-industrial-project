import React, { Component } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";
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

    console.log(res.data)
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
    console.log(event.target.name);
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


  render() {
    return (
      <div class="">
        <div class="container">
          <h3>Add a Client</h3>
            <input placeholder="Username" class="form-control" name="username" type="text" onChange={this.handleChange}/>
            <input placeholder="Password" class="form-control" name="password" type="text" onChange={this.handleChange}/>          
            <input placeholder="Name" class="form-control" name="name" type="text" onChange={this.handleChange}/>
            <input placeholder="DOB" class="form-control" name="dateOfBirth" type="date" onChange={this.handleChange}/>
            <input placeholder="Gender" class="form-control" name="gender" type="text" onChange={this.handleChange}/>
            <input placeholder="Height" class="form-control" name="height" type="text" onChange={this.handleChange}/>
            <input placeholder="Weight" class="form-control" name="weight" type="text" onChange={this.handleChange}/>

            <button class="button" type="button" onClick={this.handleSubmit}>
              Submit
            </button>

        </div>


        {/* Display Person */}
        {/* ?? Please look into this part of the code if its important. */}
        <form>
          {/* <h2>Clients</h2> */} 
          {this.state.User.map((user, index) => (
            <div key={index} class="row">
              <img
                style={{ maxHeight: 100, maxWidth: 100 }}
                src={profilepic}
                alt=""
                class="row m-2"
              />
              <div>
                <input class="col m-2" type="text" value={user.Username} />
              </div>
              <div class="row m-2">
                <input class="" type="text" value={user.DOB} />
                <input class="" type="text" value={user.Gender} />
                <input class="" type="text" value={user.Height} />
                <input class="" type="text" value={user.Weight} />
              </div>
              <div class="col-3">
                <button
                  name={"User"}
                  id={user.id}
                  class="btn btn-secondary bg-danger m-2"
                  type="button"
                  onClick={this.handleDelete}
                >
                  Delete
                </button>
              </div>
              <br />
              <br />
              <br />
            </div>
          ))}
        </form>

        <br />
      </div>
    );
  }
}

export default StaffRegister;

