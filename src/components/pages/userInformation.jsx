import React, { Component } from 'react';

const appStates = {
    NotSelected : 1,
    UserSelected : 2
  };

class UserInformation extends React.Component {
    render() { 
        return <div>
            <div>
              <button onClick={() => this.props.changeState(appStates.FrontPage)} type="submit" class="btn btn-primary">
                Back
              </button>
            </div>
            {/* {this.props.userInfo} */}
            </div>;
    }
}
 
export default UserInformation;