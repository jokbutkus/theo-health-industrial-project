import React, { Component } from "react";
import "../../index.css";
import '../css/page1.css';
import '../css/main.css';
import "bootstrap/dist/css/bootstrap.css";
// import profilepic from '../images/profilepic.jpg';
// import logo from '../images/theo.PNG';
import back_BG from '../images/Back.jpg';
import front_BG from '../images/Front.jpg';
import L_H from '../images/L-H.png';
import R_H from '../images/R-H.png';
import L_Q from '../images/L-Q.png';
import R_Q from '../images/R-Q.png';

// var hulk = "hue-rotate(90deg) saturate(200%)";
// var red = "hue-rotate(0deg) saturate(200%)";
// var orange = "hue-rotate(45deg) saturate(200%)"

const list = [{ id: 0, color: "hue-rotate(90deg) saturate(200%)"},
              { id: 1, color: "hue-rotate(0deg) saturate(200%)"},
              { id: 2, color: "hue-rotate(45deg) saturate(200%)"}];

const list_legs = ["q_right","q_left","r_right","r_left"];


// Store all individual muscle images to a list on load - to not repeat a search.
// Iterate 4 times each loop (second) to generate 4 different random numbers
// Follow through on the loops and display each leg's colour


class BusinessMenu extends Component {

  constructor(props) {
    super(props);
    this.pausePlay = this.pausePlay.bind(this);
    this.unPausePlay = this.unPausePlay.bind(this);
    this.state = { random: 0, pause: false, leg_element: []};
  }

  // Play control functions
  pausePlay(){
    this.setState({pause: false});
    console.log(this.state.leg_element);
    // this.findLegs();
  }

  unPausePlay(){
    this.setState({pause: true});
  }
  
  findLegs(){
    var temp_array = [];
    for (var i = 0; i < 4; i++){
      var joined = this.state.leg_element.concat((document.getElementById(list_legs[i])));
      temp_array.push(joined);

      // console.log(joined);
      // console.log(temp_array);
      // console.log("element: ");
      // console.log(this.state.leg_element);
    }
    // console.log(this.state.leg_element);
    this.setState({ leg_element: temp_array });
    // console.log("END!");
  }  

  // Random Number generator for demo
  randomNumber() {
    if (this.state.pause){
      if(this.state.leg_element.length === 4){
        for (var i = 0; i < 4; i++){
          const rand = Math.floor(Math.random() * 3);
          // this.setState({random: rand})
  
          var elem = document.getElementById(list_legs[i]); 
          // this.state.leg_element[i];
          console.log(elem);
          const temp_find = list.find(l_elem => l_elem.id === rand);
          const {id, color} = temp_find;
          console.log(color);

          // this.state.leg_element[i].style.filter = (color);
  
          elem.style.filter = (color);
        }
      
      
      // console.log(this.state.random);
      // this.changeColour();
      }
    }
    
  }

  // Change the colour of a specific leg
  // changeColour(){
    

  //   // console.log(id);
    
  // }

  componentDidMount(){
    this.findLegs();
    this.interval = setInterval(() => { this.randomNumber() }, 500);
    
  }

  componentWillUnmount() {
    this.setState({leg_element: []});
    clearInterval(this.interval);
  }
  

  changeSelected = (tab) => {
    this.props.changeSelection(tab);
  };
  
  render() {
    return (
      <>
        <div className='image-container'>
          <div className="frontLegs">
            <img class='image_BG legs' alt='frontBG' src={front_BG} />
            <img class='front q_right legs' id="q_right" alt='Right_Q' src={R_Q} />
            <img class='front q_left legs' id="q_left" alt='Left_Q' src={L_Q} />
          </div>
          <div className="backLegs">
            <img class='legs image_BG' alt='back_BG' src={back_BG} />
            <img class='back r_right legs' id="r_right" alt='Right_H' src={R_H} />
            <img class='back r_left legs' id="r_left" alt='Left_H' src={L_H} />
            
          </div>
        </div>
        <div className="timeControl">
          <div className="buttonContainer">
            <button class='heatmapbutton'  onClick={this.pausePlay}>Pause</button>
            <button class='heatmapbutton'  onClick={this.unPausePlay}>Play</button>
          </div>
          <div className="textBox">
            <h4 style={{ flex: "8" , textAlign: "right"}} >14/z2/z3/z44</h4>
            <h4 style={{ flex:"1" , textAlign: "center" }}> / </h4>
            <h4 style={{ flex: "8" , textAlign: "left"}} >15/z3/z4/z55</h4>
          </div>
        </div>
      </>
    );
  }
}

// style={{ position: "absolute", bottom:"20%", right:"10%"}}
export default BusinessMenu;