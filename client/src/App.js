import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
            <Route exact path = "/"  component = {Home}></Route>
            <Route exact path = "/signup"  component = {Signup}></Route>
            <Route exact path = "/login"  component = {Login}></Route>
          
        </div>
      </Router>
    );
  }
}

export default App;
