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
            <table class="table table-hover list">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Recording ID</th>
                </tr>
              </thead>
              <tbody>
              {this.state.exerciseList.map((exercise, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    this.setState({ selectedExercise: exercise.recordingID });
                    this.changeState2(2);
                  }}
                >
                  <td>{exercise.date}</td>
                  <td>{exercise.recordingID}</td>
                </tr>
              ))}
              </tbody>
            </table>
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
