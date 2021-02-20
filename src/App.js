import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import ClosedPokedex from './pages/closed-pokedex/closed-pokedex.component';
import OpenedPokedex from './pages/opened-pokedex/opened-pokedex.component';
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ClosedPokedex} />
          <Route path='/pokemon' component={OpenedPokedex} />
        </Switch>
      </div>
    );
  }
}


export default (App);
