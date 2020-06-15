import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/homes/Home'
import NavigationBar from './components/navigationbars/NavigationBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
