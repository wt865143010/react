import {action, observable} from "mobx";
import Axios from "../util/Axios";
import Api from "../api/allApi";

export default class serviceAreaStore {
    // @observable user=[];
    // @observable isLogin=false;
    // @observable token="";
   // @observable servicedata=[];
//服务区列表
    @action serveData=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse.getServeList,{page:1,pageSize:10})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
//服务区删除
    @action deleteData=(obj)=>{
        console.log(obj)
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse.getDelete,{params:obj})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
//服务区搜索请求
    @action myserch=(obj)=>{
        console.log("store里发的请求参数：");
        console.log(obj);
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse.getSearch,
                {params:obj})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
//服务区编辑提交
    @action serviceConfirm=(obj)=>{
        console.log(obj);
        return new Promise((resolve, reject) => {
            Axios.post(Api.warehouse.getEdit,
                {obj})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
//服务区新增
    @action serviceAdd=(obj)=>{
        console.log(obj);
        return new Promise((resolve, reject) => {
            Axios.post(Api.warehouse.serveAdd,
                {obj})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
//门店列表
    @action storeData=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse.getStoreList,{page:1,pageSize:10})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
}
