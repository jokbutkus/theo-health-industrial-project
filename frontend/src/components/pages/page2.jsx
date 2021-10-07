import React, { Component } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.css";
import profilepic from '../images/profilepic.jpg';

class BusinessMenu extends Component {
  state = {
  };

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };

  render() {
    return (
      <>
      <div>
      <img class='clientpic' alt='profilepicture' src={profilepic} />
      <img class='clientpic' alt='profilepicture' src={profilepic} />
      <img class='clientpic' alt='profilepicture' src={profilepic} />
      <img class='clientpic' alt='profilepicture' src={profilepic} />
      <img class='clientpic' alt='profilepicture' src={profilepic} />
      <img class='clientpic' alt='profilepicture' src={profilepic} />
      </div>

      <div>
      <h1></h1>
      <img class='clientpic' alt='profilepicture' src={profilepic} />
      <img class='clientpic' alt='profilepicture' src={profilepic} />
      <img class='clientpic' alt='profilepicture' src={profilepic} />
      <img class='clientpic' alt='profilepicture' src={profilepic} />
      <img class='clientpic' alt='profilepicture' src={profilepic} />
      <img class='clientpic' alt='profilepicture' src={profilepic} />
      </div>
      </>
    );
  }
}

export default BusinessMenu;
