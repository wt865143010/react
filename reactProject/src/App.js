import React from 'react';
import './App.css';
import Login from "./pages/login/Login";
import Home from "./pages/index/Home";
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import PrivateRouter from "./component/PrivateRouter/PrivateRouter";
// import UserList from "./pages/user/userlist/UserList";
import UserNews from "./pages/user/userlist/UserNews";
import Distributor from "./pages/user/other/Distributor";
import CouponUse from "./pages/user/other/CouponUse";
import JoinActivity from "./pages/user/other/JoinActivity";
import CooperativePartner from "./pages/user/other/CooperativePartner";
import IntegralUse from "./pages/user/other/IntegralUse";
import addPay from "./pages/system/payment/addPay";
import addNewsTem from "./pages/system/information/addNewsTem";

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route path="/" exact render={()=><Redirect to={"/login"}/>}></Route>
                <Route path="/login" component={Login}></Route>
                {/*<Route path="/home" component={Home}></Route>*/}
                <Route path='/home' render={()=>
                    <Home>
                        <PrivateRouter/>
                        <Route path='/home/usernews' component={UserNews}></Route>
                        <Route path='/home/Distributor' component={Distributor}></Route>
                        <Route path='/home/CouponUse' component={CouponUse}></Route>
                        <Route path='/home/JoinActivity' component={JoinActivity}></Route>
                        <Route path='/home/cooperative' component={CooperativePartner}></Route>
                        <Route path='/home/integral' component={IntegralUse}></Route>


                        <Route path='/home/addPay' component={addPay}></Route>
                        <Route path='/home/addNewsTem' component={addNewsTem}></Route>
                    </Home>
                }>
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
