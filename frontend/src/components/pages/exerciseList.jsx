import React, { Component } from "react";

const appStates = {
    FrontPage: 1,
    Login: 2,
    Register: 3,
    Dashboard: 4,
};

class ExerciseList extends Component {
    state = {
        exerciseList: []
    }
    componentDidMount() {
        this.props.api.get(`/exercise-list/${this.props.userID}`).then(res => {
            this.setState({ exerciseList: res.data })
            console.log(this.state.exerciseList)
            this.state.exerciseList.map((exercise, index) => {
                console.log("Iteration")
            })
        })
    }
    render() {
        return (
            <div class="container">

                {this.state.exerciseList.map((exercise, index) => (
                    <div key={index}>                    
                    <input class="col m-2" type="text" value={exercise.date} readOnly/>
                    <input class="col m-2" type="text" value={exercise.recordingID} readOnly/>
                    </div>
                ))}
            </div>
        );
    }
}
export default ExerciseList;
