import userStore from "./userStore";
import couponStore from "./couponStore";
import myOrder from "./myOrder";
import systemStore from "./systemStore";
import productStore from "./productStore";
import serviceAreaStore  from "./serviceAreaStore"
let user=new userStore();
let product=new productStore();
let service=new serviceAreaStore();
let coupon=new couponStore();
let myorder=new myOrder();
let system=new systemStore()
export default {
    user,
    product,
    service,
    coupon,
    myorder,
    system
}