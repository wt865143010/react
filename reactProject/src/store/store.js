import userStore from "./userStore";
import couponStore from "./couponStore";
import myOrder from "./myOrder";
import systemStore from "./systemStore";
import productStore from "./productStore";
import serviceAreaStore  from "./serviceAreaStore"
import serviceList from "./serviceList"
import wareHouseStore from "./wareHouseStore"
let user=new userStore();
let product=new productStore();
let wareHouse=new wareHouseStore();
let service=new serviceAreaStore();
let serviceLis=new serviceList();
let coupon=new couponStore();
let myorder=new myOrder();
let system=new systemStore()
export default {
    user,
    product,
    service,
    serviceLis,
    wareHouse,
    coupon,
    myorder,
    system
}