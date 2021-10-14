import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import '../css/frontpage.css';
import bgImage from '../images/theobackground.jpg';
import logo from '../images/theo.PNG';

const appStates = {
    FrontPage: 1,
    Login: 2,
    Register: 3,
    Dashboard: 4,
  };

class FrontPage extends React.Component {
    render() { 
        return (
          <div>
          <img class="image" src={bgImage}></img>
            <div class="contentbody" style={{border:"0", backgroundColor: "transparent", width:"420px", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}}>
              <div class="row justify-content-center">
                <div class="row col-3" style={{width: "200px"}}>
                  <button class="button" style={{borderStyle:"solid", borderRadius:"100px"}} onClick={() => this.props.changeState(appStates.Login)}>
                    Login
                  </button>
                </div>

                <div class="row col-3" style={{width: "200px"}}>
                  <button class="button" style={{borderStyle:"solid", borderRadius:"100px"}} onClick={() => this.props.changeState(appStates.Register)}>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default FrontPage;