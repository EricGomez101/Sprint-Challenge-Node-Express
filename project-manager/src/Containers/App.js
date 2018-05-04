import React, { Component } from 'react';
import classes from './App.css';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {DisplayProjects} from '../Components/DisplayProjects';
import {getProjects} from '../Actions/projectActions';

class App extends Component {
  componentDidMount() {
    getProjects();
  }
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.App__Header}>
          <h1 className={classes.App__HeaderText}>Project Manager</h1>
        </header>
        <div className={classes.App__ProjectsContainer}>
          <h2>hello world!</h2>
          <Router>
            <DisplayProjects/>
          </Router>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state
  }
}
export default connect(mapStateToProps, {getProjects})(App);
