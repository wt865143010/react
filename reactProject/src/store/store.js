import userStore from "./userStore";
import systemStore from "./systemStore";
import productStore from "./productStore";
let user=new userStore();
let system=new systemStore();
let product=new productStore()
export default {
    user,
    system,
    product
}