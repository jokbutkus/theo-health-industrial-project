import React, { Component } from "react";
import "../../index.css";
import '../css/page1.css';
import "bootstrap/dist/css/bootstrap.css";
import profilepic from '../images/profilepic.jpg';
import logo from '../images/theo.PNG';
import back_BG from '../images/Back.jpg';
import front_BG from '../images/Front.jpg';
import L_H from '../images/L-H.png';
import R_H from '../images/R-H.png';
import L_Q from '../images/L-Q.png';
import R_Q from '../images/R-Q.png';




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
          <div className="frontLegs">
            <img class='image_BG legs ' alt='frontBG' src={front_BG} />
            <img class='front q_right legs' alt='Right_Q' src={R_Q} />
            <img class='front q_left legs' alt='Left_Q' src={L_Q} />
          </div>

          <div className="backLegs">
            <img class='legs image_BG' alt='back_BG' src={back_BG} />
            <img class='back r_right legs' alt='Right_H' src={R_H} />
            <img class='back r_left legs' alt='Left_H' src={L_H} />
          </div>
        </div>
      </>
    );
  }
}

export default BusinessMenu;
