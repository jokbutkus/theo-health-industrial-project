import React, { Component } from 'react';
 
const appStates = {
    FrontPage: 1,
    Login: 2,
    Register: 3,
    Dashboard: 4,
  };

class Register extends React.Component {
    state = {
        newUsername : "",
        newPassword: "",
        newUsers: [
          { id: 1, username: "test", password: "test" },
        ],
    };

    handleChange = (event) => {
      // this.setState.drinks({product : Event.target.value});
      console.log(event.target.name);
      this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = () => {
      this.setState({
        newUsers: [
          ...this.state.newUsers,
          {
            id: this.state.newUsers.length + 1,
            username: this.state.newUsername,
            password: this.state.newPassword,
          },
        ],
      });
      console.log(this.state.newUsername + this.state.newPassword)
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
                <div class="form-group text-left">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="newUsername"
                    name="newUsername"
                    aria-describedby="Enter username here"
                    placeholder="Enter username"
                    onChange={this.handleChange}
                  />

                </div>
                <div class="form-group text-left">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="newPassword"
                    name="newPassword"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
                <div class="form-group text-left">
                  <label for="exampleInputPassword1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
                <button onClick = {this.handleSubmit} type="button" class="btn btn-primary">
                  Register
                </button>
              </form>
            </div>
            <form>


          <h2>newUsers</h2>
          {this.state.newUsers.map((user, index) => (
            <div key={index} class="container">
            <div class="row">

                <input class="m-2 col" type="text" value={user.username} />

                <input class="m-2 col" type="text" value={user.password} />
                <div style={{
                    display: this.state.show ? "inline-block" : "none",
                  }} class="m-2 col-3"><button
                  
                  name={"newUsers"}
                  id={user.id}
                  
                  class="btn btn-secondary bg-danger"
                  type="button"
                  onClick={this.handleDelete}
                >
                  Delete
                </button></div>
            </div>
          </div>
          ))}
        </form>
          </div>
        );
    }
}
 
export default Register;