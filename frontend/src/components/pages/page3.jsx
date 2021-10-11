import React, { Component } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";
import profilepic from '../images/profilepic.jpg';

class Page3 extends Component {
  state = {
    menuSelection: 0,
    nameOfItem: "",

    User: [
      { id: 1, Username: "Mark Zuck", data: "Some basic overview information about some dude about something" },
      { id: 2, Username: "Pedo bear", data: "Some information" },
      { id: 4, Username: "egg", data: "Some information" },
    ],

    text: "",
    data: "0",
    selection: "0",
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
      this.setState({
        User: [
          ...this.state.User,
          {
            id: this.state.User.length + 1,
            Username: this.state.text,
            data: this.state.data,
          },
        ],
      });
  };

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };

  render() {
    let toggleShow = () => {
      console.log(this.state.show);
      this.setState({ show: !this.state.show });
    };
    return (
      <div class="">
        <h3>add a person</h3>
        <div class="container">
          <div class="row">
            <input
              placeholder="Name"
              class="form-control"
              name="text"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div class="row">
            <input
              placeholder="Some Data"
              class="form-control"
              name="data"
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
                <input class="col" type="text" value={user.data} />
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

