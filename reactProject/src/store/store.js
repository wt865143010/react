import userStore from "./userStore";
import systemStore from "./systemStore";
let user=new userStore();
let system=new systemStore();
export default {
    user,
    system
}