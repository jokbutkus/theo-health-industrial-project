import React, { Component } from "react";
import "../../index.css";
import '../css/page1.css';
import "bootstrap/dist/css/bootstrap.css";
import profilepic from '../images/profilepic.jpg';
import logo from '../images/theo.PNG';
import back_BG from '../images/Back.jpg';
import front_BG from '../images/Front.jpg';



class BusinessMenu extends Component {
  state = {
  };

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };

  
  render() {
    return (
      <>
        <div className='image-container'>
          <img class='image_BG' alt='frontBG' src={front_BG} />
          <img class='image_BG' alt='back_BG' src={back_BG} />

          

        </div>
      </>
    );
  }
}

export default BusinessMenu;