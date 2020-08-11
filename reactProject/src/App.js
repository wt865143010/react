import React from 'react';
import './App.css';
import Login from "./pages/login/Login";
import Home from "./pages/index/Home";
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import PrivateRouter from "./component/PrivateRouter/PrivateRouter";

import addAccount from "./pages/system/security_center/UserList/addAccount";
import addAreaManage from "./pages/system/security_center/areaManage/addAreaManage";
import addRole from "./pages/system/security_center/roleList/addRole";




import AddService from "./pages/Warehouse/service_area/AddService";
import EditService from "./pages/Warehouse/service_area/EditService";
import AddStore from "./pages/Warehouse/storeList/AddStore";
import EditStore from "./pages/Warehouse/storeList/EditStore";
import AddWareHouse from "./pages/Warehouse/warehouseList/AddWareHouse";
import EditWareHouse from "./pages/Warehouse/warehouseList/EditWareHouse";
function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route path="/" exact render={()=><Redirect to={"/login"}/>}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path='/home' render={()=>
                    <Home>
                        <PrivateRouter/>
                            <Route path="/home/AddService" component={AddService} ></Route>
                            <Route path="/home/EditWareHouse" component={EditWareHouse} ></Route>
                            <Route path="/home/AddStore" component={AddStore} ></Route>
                            <Route path="/home/EditStore" component={EditStore} ></Route>
                            <Route path="/home/AddWareHouse" component={AddWareHouse} ></Route>
                            <Route path="/home/EditService" component={EditService} ></Route>
                            <Route path='/home/addAccount' component={addAccount}></Route>
                            <Route path='/home/addAreaManage' component={addAreaManage}></Route>
                            <Route path='/home/addRole' component={addRole}></Route>
                    </Home>
                }>
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
