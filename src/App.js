import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as createAction from "./store/actions/actions";
import { Spinner } from "reactstrap";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col">
          <h2>
            Your age:<span>{this.props.age}</span>
          </h2>
          {this.props.loading && <Spinner type="grow" color="primary" />}
          <br />
          <button className="button" onClick={this.props.onAgeUp}>
            <strong>Age Up</strong>
            <p>with loading Spinner</p>
          </button>
          <button className="button" onClick={this.props.onAgeDown}>
            <strong> Age Down</strong>
            <p>without loading Spinner</p>
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    age: state.age,
    loading: state.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: val => dispatch(createAction.Age_up(1)),
    onAgeDown: val => dispatch(createAction.Age_Down(1))
    //loading: () => dispatch(createAction.loading()) // loading dispatch will be in a Async function not here
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
