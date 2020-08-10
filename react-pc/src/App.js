import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Redirect} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Route path="/" exact render={()=><Redirect to={'/login/Login'}/>}></Route>
          <Route path="/login" exact render={()=><Redirect to={'/login/Login'}/>}></Route>
          <Route path='/login/Login' component={Login}></Route>
          <Route path='/login/Register' component={Register}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
