import React, { Component } from 'react';
 

const appStates = {
    Dashboard: 3,
  };

class LoginForm extends React.Component {
    state = {
        x : 0
    };



    handleSubmitClick = (e) => {
        //e.preventDefault();
        this.setState({userID : document.getElementById('userID').value});
        console.log(this.state.userID);

        if(this.userID !== this.state.correctID) {
             console.log("Wrong ID");
        }
        else {
            this.props.changeState(appStates.Dashboard)
        }
    }

    render() { 
        return (
            <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <form>
                <div className="form-group text-left">
                <label for="userID">Enter your ID</label>
                <input type="text" 
                       className="form-control" 
                       id="userID" 
                       aria-describedby="loginHelp" 
                       placeholder="Enter ID"
                />
                <small id="extraInfo" className="form-text text-muted">please enter your ID.</small>
                </div>
                
                <a
            style={{ fontSize: 25 }}
            class="btn btn-secondary w-25 mx-auto"
            onClick={() => {
                if (this.state.x === document.getElementById('userID').value) {
                this.props.changeState(appStates.Dashboard)}}}
            href="#"
          > 
            Login
          </a>
            </form>
        </div>
    );
    };
}
 
export default LoginForm;