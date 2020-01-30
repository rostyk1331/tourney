import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import Page from './Page';
import Dnd from './Dnd';
import Inputs from './Inputs';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/page">
          <Page />
        </Route>
        <Route path="/dnd">
          <Dnd />
        </Route>
        <Route path="/input">
          <Inputs />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
