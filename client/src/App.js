import React from 'react';
import {Route} from 'react-router-dom';
import './App.styles.css'

import LandingPage from './pages/landing/landing';
import MenuPage from './pages/menu/menu';
import MenuManagerPage from './pages/menu-manager/menu-manager';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage}></Route>
      <Route exact path='/menu' component={MenuPage}></Route>
      <Route exact path='/menu-manager' component={MenuManagerPage}></Route>
    </div>
  );
}

export default App;
