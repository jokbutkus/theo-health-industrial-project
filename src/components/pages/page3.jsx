import React, { Component } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";
import profilepic from '../images/profilepic.jpg';

class Page3 extends Component {
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

  handleSubmit = () => {
    
    if (this.state.name == "" || !this.state.name.replace(/\s/g, '').length) {
      alert("Please enter client's name!");
      this.state.allowSubmit = false;
    }
    else if(this.state.DOB == "") 
    {
      alert('you have not entered a date of birth!');
    }
    else if (this.state.Gender == "" || !this.state.Gender.replace(/\s/g, '').length) {
      alert("Please enter client's gender!");
      this.state.allowSubmit = false;
    }
    else if (this.state.Height == "" || !this.state.Height.replace(/\s/g, '').length) {
      alert("Please enter client's height!");
      this.state.allowSubmit = false;
    }
    else if (this.state.Weight == "" || !this.state.Weight.replace(/\s/g, '').length) {
      alert("Please enter client's weight!");
      this.state.allowSubmit = false;
    } else {
      this.state.allowSubmit = true;
    }

    if (this.state.allowSubmit == true){
      this.setState({
        User: [
          ...this.state.User,
          {
            id: this.state.User.length + 1,
            Username: this.state.name,
            DOB: this.state.DOB,
            Gender: this.state.Gender,
            Height: this.state.Height,
            Weight: this.state.Weight,
          },
        ],
      });
    }
    alert(this.state.allowSubmit);
    
  };

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };

  render() {
    return (
      <div class="">
        <h3>add a person</h3>
        <div class="container">
          <div class="row">
            <input
              placeholder="Name"
              class="form-control"
              name="name"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div class="row">
            <input
              placeholder="DOB"
              class="form-control"
              name="DOB"
              type="date"
              onChange={this.handleChange}
            />
          </div>
          <div class="row">
            <input
              placeholder="Gender"
              class="form-control"
              name="Gender"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div class="row">
            <input
              placeholder="Height"
              class="form-control"
              name="Height"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div class="row">
            <input
              placeholder="Weight"
              class="form-control"
              name="Weight"
              type="text"
              onChange={this.handleChange}
            />
          </div>

          <div class="row">
            <button
              class="btn btn-secondary"
              type="button"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <br />
        <br />
        {/* Display Person */}
        <h2>This is just for testing and wouldn't be on the page</h2>
        <form>
          <h2>Clients</h2>
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

export default Page3;

