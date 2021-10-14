import React, { Component } from "react";
import HeatMap from "./heatmap";

const appStates = {
  FrontPage: 1,
  Login: 2,
  Register: 3,
  Dashboard: 4,
};

const appStates2 = {
  NotSelected: 1,
  Selected: 2,
};

class ExerciseList extends Component {
  state = {
    exerciseList: [],
    appState2: appStates2.NotSelected,
    selectedExercise: "",
  };
  componentDidMount() {
    this.props.api.get(`/exercise-list/${this.props.userID}`).then((res) => {
      this.setState({ exerciseList: res.data });
      console.log(this.state.exerciseList);
      this.state.exerciseList.map((exercise, index) => {
        console.log("Iteration");
      });
    });
  }

  changeState2 = (s) => this.setState({ appState2: s });

  render() {
    const state = this.state.appState2;
    switch (state) {
      case appStates2.NotSelected:
        return (
          <div class="container">
            {this.state.exerciseList.map((exercise, index) => (
              <div key={index}
                
              >
                  <button
                  onClick={() => {
                    
                    this.setState({ selectedExercise: exercise.recordingID });
                    this.changeState2(2);
                  }}
                  >button</button>
                <div key={index}>
                  <input
                    class="col m-2"
                    type="text"
                    value={exercise.date}
                    readOnly
                  />
                  <input
                    class="col m-2"
                    type="text"
                    value={exercise.recordingID}
                    readOnly
                  />
                </div>
              </div>
            ))}
          </div>
        );
      case appStates2.Selected:
        return (
          <div>
              
            <HeatMap
              api={this.props.api}
              exerciseID={this.state.selectedExercise}
            />
          </div>
        );
    }
  }
}
export default ExerciseList;
