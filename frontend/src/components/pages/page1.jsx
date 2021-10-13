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


// All the colour values needed in order from green to red.
const list = [{ id: 0, color: "hue-rotate(95deg) saturate(200%)"},
              { id: 1, color: "hue-rotate(90deg) saturate(200%)"},
              { id: 2, color: "hue-rotate(85deg) saturate(200%)"},
              { id: 3, color: "hue-rotate(80deg) saturate(200%)"},
              { id: 4, color: "hue-rotate(75deg) saturate(200%)"},
              { id: 5, color: "hue-rotate(70deg) saturate(200%)"},
              { id: 6, color: "hue-rotate(65deg) saturate(200%)"},
              { id: 7, color: "hue-rotate(60deg) saturate(200%)"},
              { id: 8, color: "hue-rotate(55deg) saturate(200%)"},
              { id: 9, color: "hue-rotate(50deg) saturate(200%)"},
              { id: 10, color: "hue-rotate(45deg) saturate(200%)"},
              { id: 11, color: "hue-rotate(40deg) saturate(200%)"},
              { id: 12, color: "hue-rotate(35deg) saturate(200%)"},
              { id: 13, color: "hue-rotate(30deg) saturate(200%)"},
              { id: 14, color: "hue-rotate(25deg) saturate(200%)"},
              { id: 15, color: "hue-rotate(20deg) saturate(200%)"},
              { id: 16, color: "hue-rotate(15deg) saturate(200%)"},
              { id: 17, color: "hue-rotate(10deg) saturate(200%)"},
              { id: 18, color: "hue-rotate(5deg) saturate(200%)"},
              { id: 19, color: "hue-rotate(0deg) saturate(200%)"}];

const list_legs = ["r_left","r_right","q_left","q_right"];
var curr_time = "";
var max_time = "";

// Store all individual muscle images to a list on load - to not repeat a search.
// Iterate 4 times each loop (second) to generate 4 different random numbers
// Follow through on the loops and display each leg's colour

class BusinessMenu extends Component {

  constructor(props) {
    super(props);
    this.state = { exerciseData: null, pause: false, leg_element: [], currentID: 0, maxID: 0};
    this.pausePlay = this.pausePlay.bind(this);
    this.unPausePlay = this.unPausePlay.bind(this);
  }

  //to use the heatmap data just access it like this "this.state.exerciseData"
  componentDidMount(){
    this.findLegs();
    this.interval = setInterval(() => { this.randomNumber() }, 500);

    this.props.api.get(`/exercise/${this.props.exerciseID}`).then(res=>{
      this.setState({exerciseData: res.data})
      
      this.setState({currentID: this.state.exerciseData[0].recordingDataID});
      console.log(this.state.exerciseData);
      this.setState({maxID: this.state.exerciseData[(this.state.exerciseData.length - 1)].recordingDataID});
      console.log(this.state.currentID);
      console.log(this.state.maxID);
      this.timerUpdate();
    })
  }

  componentWillUnmount() {
    this.setState({leg_element: []});
    this.setState({exerciseData: []});
    clearInterval(this.interval);

  }

  // Play control functions
  pausePlay(){
    // this.timerUpdate();
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
  }

  // Random Number generator for demo
  randomNumber() {
    if (this.state.pause){
      if(this.state.leg_element.length === 4){
        if(this.state.currentID !== this.state.maxID){

          // If statement to compare Values to range
          //Once compared just apply colour to leg

          const rand = this.state.exerciseData.find(  ({ recordingDataID }) => recordingDataID === this.state.currentID);
          console.log(rand);

          for (var i = 0; i < 4; i++){
            var elem = document.getElementById(list_legs[i]);
            // console.log(elem);
            const {recordingDataID,sensor1,sensor2,sensor3,sensor4,time} = rand;
            var temp_find = {};

            if (eval("sensor"+((i+1).toString())) <= 50){
              temp_find = list.find(l_elem => l_elem.id === 0);
            } else if (eval("sensor"+((i+1).toString())) > 50 && (eval("sensor"+((i+1).toString())) <= 100)){
              temp_find = list.find(l_elem => l_elem.id === 1);
            } else if (eval("sensor"+((i+1).toString())) > 100 && (eval("sensor"+((i+1).toString())) <= 150)){
              temp_find = list.find(l_elem => l_elem.id === 2);
            } else if (eval("sensor"+((i+1).toString())) > 150 && (eval("sensor"+((i+1).toString())) <= 200)){
              temp_find = list.find(l_elem => l_elem.id === 3);
            } else if (eval("sensor"+((i+1).toString())) > 200 && (eval("sensor"+((i+1).toString())) <= 250)){
              temp_find = list.find(l_elem => l_elem.id === 4);
            } else if (eval("sensor"+((i+1).toString())) > 250 && (eval("sensor"+((i+1).toString())) <= 300)){
              temp_find = list.find(l_elem => l_elem.id === 5);
            } else if (eval("sensor"+((i+1).toString())) > 300 && (eval("sensor"+((i+1).toString())) <= 350)){
              temp_find = list.find(l_elem => l_elem.id === 6);
            } else if (eval("sensor"+((i+1).toString())) > 350 && (eval("sensor"+((i+1).toString())) <= 400)){
              temp_find = list.find(l_elem => l_elem.id === 7);
            } else if (eval("sensor"+((i+1).toString())) > 400 && (eval("sensor"+((i+1).toString())) <= 450)){
              temp_find = list.find(l_elem => l_elem.id === 8);
            } else if (eval("sensor"+((i+1).toString())) > 450 && (eval("sensor"+((i+1).toString())) <= 500)){
              temp_find = list.find(l_elem => l_elem.id === 9);
            } else if (eval("sensor"+((i+1).toString())) > 500 && (eval("sensor"+((i+1).toString())) <= 550)){
              temp_find = list.find(l_elem => l_elem.id === 10);
            } else if (eval("sensor"+((i+1).toString())) > 550 && (eval("sensor"+((i+1).toString())) <= 600)){
              temp_find = list.find(l_elem => l_elem.id === 11);
            } else if (eval("sensor"+((i+1).toString())) > 600 && (eval("sensor"+((i+1).toString())) <= 650)){
              temp_find = list.find(l_elem => l_elem.id === 12);
            } else if (eval("sensor"+((i+1).toString())) > 650 && (eval("sensor"+((i+1).toString())) <= 700)){
              temp_find = list.find(l_elem => l_elem.id === 13);
            } else if (eval("sensor"+((i+1).toString())) > 700 && (eval("sensor"+((i+1).toString())) <= 750)){
              temp_find = list.find(l_elem => l_elem.id === 14);
            } else if (eval("sensor"+((i+1).toString())) > 750 && (eval("sensor"+((i+1).toString())) <= 800)){
              temp_find = list.find(l_elem => l_elem.id === 15);
            } else if (eval("sensor"+((i+1).toString())) > 800 && (eval("sensor"+((i+1).toString())) <= 850)){
              temp_find = list.find(l_elem => l_elem.id === 16);
            } else if (eval("sensor"+((i+1).toString())) > 850 && (eval("sensor"+((i+1).toString())) <= 900)){
              temp_find = list.find(l_elem => l_elem.id === 17);
            } else if (eval("sensor"+((i+1).toString())) > 900 && (eval("sensor"+((i+1).toString())) <= 950)){
              temp_find = list.find(l_elem => l_elem.id === 18);
            } else {
              temp_find = list.find(l_elem => l_elem.id === 19);
            }

            curr_time = this.fixTime(time);
            // console.log(temp_find);

              const {id, color} = temp_find;
              elem.style.filter = (color);

          }
          this.setState(prevState => { return {currentID: prevState.currentID + 1} })
          console.log(this.state.currentID);

        // console.log(this.state.random);
        // this.changeColour();
        }
        this.setState.pause = true;
      }
    }

  }

  fixTime(wrong_time){
    return wrong_time = wrong_time.split("T").pop();
  }

  timerUpdate(){
    if (this.state.exerciseData != null){
      max_time = (this.state.exerciseData[(this.state.exerciseData.length - 1)].time).toString();
      max_time = this.fixTime(max_time);
    }
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
            <h4 style={{ flex: "8" , textAlign: "right"}} > {curr_time} </h4>
            <h4 style={{ flex:"1" , textAlign: "center" }}> / </h4>
            <h4 style={{ flex: "8" , textAlign: "left"}}> {max_time} </h4>
          </div>
        </div>
      </>
    );
  }
}

// style={{ position: "absolute", bottom:"20%", right:"10%"}}
export default BusinessMenu;
