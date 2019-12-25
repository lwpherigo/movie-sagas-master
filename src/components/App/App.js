import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// components
import MovieList from '../MovieList/MovieList';
// import MovieListItem from '../MovieListItem/MovieListItem';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <p>MOVIES!</p>
          <Route 
            exact path="/" 
            component={MovieList} 
          />
          {/* <Route 
            exact path="/description"  
            component={MovieDescription} 
          /> */}

        </Router>   
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);