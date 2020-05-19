import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import './App.css';
import LandingPage from './pages/LandingPage';
import SpecialistsPage from './pages/SpecialistsPage';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/specialists" component={SpecialistsPage} />
        </Switch>
      </>
    );
  }
}

export default App;
