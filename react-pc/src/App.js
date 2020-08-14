import React from 'react';


import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import './App.css';
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Improve_information from "./pages/login/Improve_information";
import Home from "./pages/home/Home";
import MyOrder from "./pages/personal/MyOrder";
import Index from "./pages/home/Index";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Route path="/" exact render={()=><Redirect to={'/login/Login'}/>}></Route>
          <Route path="/login" exact render={()=><Redirect to={'/login/Login'}/>}></Route>
          <Route path='/login/Login' component={Login}></Route>
          <Route path='/login/Register' component={Register}></Route>
          <Route path='/login/Improve_information' component={Improve_information}></Route>
          <Route path='/home/Home' render={()=>
            <Home>
              {/*<Route path='/home/Home/'  exact component={Index}></Route>*/}
              {/*<Route path='/home/Home/Index'  component={Index}></Route>*/}
            </Home>
          }></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
