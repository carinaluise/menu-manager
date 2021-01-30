import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.styles.css'

import LandingPage from './pages/landing/landing';
import MenuPage from './pages/menu/menu';
import MenuManagerPage from './components/menu-manager/menu-manager';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={LandingPage}></Route>
      <Route exact path='/menu' component={MenuPage}></Route>
      {/* <Route exact path='/menu-manager' component={MenuManagerPage}></Route> */}
      </Switch>
    </div>
  );
}

export default App;
