import React from 'react';
<<<<<<< HEAD


import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from "./pages/Home";
=======
>>>>>>> 040f1c3fdb56251c1813989bbdcec7971a89fd57
import './App.css';
import {BrowserRouter as Router,Route,Redirect} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Improve_information from "./pages/login/Improve_information";
import Home from "./pages/home/Home";
function App() {
  return (
<<<<<<< HEAD
      <Router>
        <div className="App">
          <Route path="/" exact component={Home}></Route>
          {/*<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>*/}

        </div>
      </Router>
=======
    <Router>
      <div className="App">
        <div>
          <Route path="/" exact render={()=><Redirect to={'/login/Login'}/>}></Route>
          <Route path="/login" exact render={()=><Redirect to={'/login/Login'}/>}></Route>
          <Route path='/login/Login' component={Login}></Route>
          <Route path='/login/Register' component={Register}></Route>
          <Route path='/login/Improve_information' component={Improve_information}></Route>
          <Route path='/home/Home' component={Home}></Route>
        </div>
      </div>
    </Router>
>>>>>>> 040f1c3fdb56251c1813989bbdcec7971a89fd57
  );
}

export default App;
