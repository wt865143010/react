import userStore from "./userStore";
import productStore from "./productStore";
import serviceAreaStore  from "./serviceAreaStore"
import serviceList from "./serviceList"
import wareHouseStore from "./wareHouseStore"
let user=new userStore();
let product=new productStore();
let wareHouse=new wareHouseStore();
let service=new serviceAreaStore();
let serviceLis=new serviceList();
export default {
    user,
    product,
    service,
    serviceLis,
    wareHouse,
}