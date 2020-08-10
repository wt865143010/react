import {observable,action} from "mobx";
import Axios from "../util/Axios";
import Api from '../api/allApi'
export default class userStore {
    @observable user=[];
    @observable isLogin=false;
    @observable token="";
    @observable orderList=[];/*订单表*/

    @action login=(obj)=>{
        console.log(obj)
        return new Promise((resolve, reject) => {
            Axios.post(Api.user.userLogin,
                {params:obj})
                .then(res=>{
                    if (res.data.returnCode===200){
                        this.user=res.data.data;
                        this.token=res.data.token
                        resolve(res);
                    }else {
                        reject("登录失败")
                    }

            })
            // Axios({
            //     url:Api.user.userLogin,
            //     type:'GET',
            //     data:{
            //         params:obj
            //     }
            // })
        })


    }

    /*订单表渲染*/
    @action myOrder=()=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.user.myOrder)
                .then(resp=>{
                    console.log(resp.data.order);
                    this.orderList=resp.data.order;
                    // console.log(this.orderList);
                    resolve("渲染成功");
                })
                .catch(e=>{
                    console.log(e);
                })
        })

    }

}