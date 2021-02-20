import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import OpenedPokedex from './pages/opened-pokedex/opened-pokedex.component';
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/pokemon' component={OpenedPokedex} />
        </Switch>
      </div>
    );
  }
}


export default (App);
