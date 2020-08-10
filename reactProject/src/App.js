import React from 'react';
import './App.css';
import Login from "./pages/login/Login";
import Home from "./pages/index/Home";
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import PrivateRouter from "./component/PrivateRouter/PrivateRouter";

import addAccount from "./pages/system/security_center/UserList/addAccount";
import addAreaManage from "./pages/system/security_center/areaManage/addAreaManage";
import addRole from "./pages/system/security_center/roleList/addRole";
import Product_list from "./pages/product/pro_mange/Product_list";


// import UserList from "./pages/user/userlist/UserList";


/*引入订单管理组件*/
import Orderlist from './pages/order/Orderlist'
/*引入订单管理详情组件*/
import OrderlistDetail from './pages/order/OrderlistDetail'
/*引入发货单组件*/
import  Invoice from './pages/order/Invoice'
/*引入发货单详情组件*/
import  InvoiceDetail from './pages/order/InvoiceDetail'
/*引入退货单组件*/
import Return_Order from './pages/order/Return_Order'
/*引入退货单详情组件*/
import  Return_OrderDetail from './pages/order/Return_OrderDetail'


// import service_area from "./pages/Warehouse/service_area/service_area";
import AddService from "./pages/Warehouse/service_area/AddService";
import EditService from "./pages/Warehouse/service_area/EditService";
// import storeList from "./pages/Warehouse/storeList/storeList";
import AddStore from "./pages/Warehouse/storeList/AddStore";
import EditStore from "./pages/Warehouse/storeList/EditStore";
// import warehouseList from "./pages/Warehouse/warehouseList/warehouseList";
import AddWareHouse from "./pages/Warehouse/warehouseList/AddWareHouse";
import EditWareHouse from "./pages/Warehouse/warehouseList/EditWareHouse";
// import productList from "./pages/Warehouse/warehouseList/productList";
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
