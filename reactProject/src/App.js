import React from 'react';
import './App.css';
import Login from "./pages/login/Login";
import Home from "./pages/index/Home";
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import PrivateRouter from "./component/PrivateRouter/PrivateRouter";
import Product_details from "./pages/product/pro_mange/Product_details";




import Addcoupon from './pages/coupon/coupon/Addcoupon'
import Coupondetails from './pages/coupon/coupon/Coupondetails'
import Sendtomembers from './pages/coupon/coupon/Sendtomembers'
import Editcoupon from './pages/coupon/coupon/Editcoupon'
import Activeusers from './pages/coupon/activity/Activeusers'
import Addactivitysecond from './pages/coupon/activity/Addactivitysecond'
import Discountpromotion from './pages/coupon/activity/Discountpromotion'
import Fullgift from './pages/coupon/activity/Fullgift'
import Priceincrease from './pages/coupon/activity/Priceincrease'
import Setupcomplete from './pages/coupon/activity/Setupcomplete'
import specialpromotion from './pages/coupon/activity/specialpromotion'
import Addactivity from './pages/coupon/activity/Addactivity'
import CreateRaffle from './pages/coupon/luckdraw/CreateRaffle'
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

                        <Route path={"/home/product/pro_mange/Product_details"} component={Product_details}/>
                        <Route path='/home/addPay' component={addPay}></Route>
                        <Route path='/home/addNewsTem' component={addNewsTem}></Route>




                        <Route path='/home/coupon/coupon/Addcoupon' component={Addcoupon}></Route>
                        <Route path='/home/coupon/coupon/Coupondetails' component={Coupondetails}></Route>
                        <Route path='/home/coupon/coupon/Sendtomembers' component={Sendtomembers}></Route>
                        <Route path='/home/coupon/coupon/Editcoupon' component={Editcoupon}></Route>
                        <Route path='/home/coupon/activity/Activeusers' component={Activeusers}></Route>
                        <Route path='/home/coupon/activity/Addactivitysecond' component={Addactivitysecond}></Route>
                        <Route path='/home/coupon/activity/Discountpromotion' component={Discountpromotion}></Route>
                        <Route path='/home/coupon/activity/Priceincrease' component={Priceincrease}></Route>
                        <Route path='/home/coupon/activity/Setupcomplete' component={Setupcomplete}></Route>
                        <Route path='/home/coupon/activity/specialpromotion' component={specialpromotion}></Route>
                        <Route path='/home/coupon/activity/Fullgift' component={Fullgift}></Route>
                        <Route path='/home/coupon/activity/Addactivity' component={Addactivity}></Route>
                        <Route path='/home/coupon/luckdraw/CreateRaffle' component={CreateRaffle}></Route>
                    </Home>
                }>
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
