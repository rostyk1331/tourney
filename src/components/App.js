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
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
