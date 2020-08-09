import {observable,action} from "mobx";
import Axios from "../util/Axios";
import Api from '../api/allApi'
export default class systemStore {
    @observable user_eva=[];
    @observable leaveMsg=[];
    @observable paylist=[];
    @observable newstem=[];
    @observable NewsMod=[];
    @observable NewsWay=[];

    @action getUserEva=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.getUserEva)
                .then(res=>{
                    this.user_eva=res.data.data.eva;
                    console.log(this.user_eva)
                    resolve('获取成功！')
                })
        })
    }
    @action getLeaveMsg=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.getLeaveMsg)
                .then(res=>{
                    this.leaveMsg=res.data.data.msg;
                    resolve('获取成功！')
                })
        })
    }
    @action getPayList=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.getPayList)
                .then(res=>{
                    this.paylist=res.data.data.pay;
                    resolve('获取成功！')
                })
        })
    }
    @action getNewsTem=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.getNewsTem)
                .then(res=>{
                    this.newstem=res.data.data.tem;
                    resolve('获取成功！')
                })
        })
    }


    @action searchEva=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.searchEva,{params:obj})
                .then(res=>{
                    this.user_eva=res.data.data.eva;
                    resolve('获取成功！')
                })
        })
    }
    @action searchMsg=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.searchMsg,{params:obj})
                .then(res=>{
                    this.leaveMsg=res.data.data.msg;
                    resolve('获取成功！')
                })
        })
    }
    @action searchPay=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.searchPay,{params:obj})
                .then(res=>{
                    this.paylist=res.data.data.pay;
                    resolve('获取成功！')
                })
        })
    }
    @action searchNews=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.system.searchNews,{params:obj})
                .then(res=>{
                    this.newstem=res.data.data.tem;
                    resolve('获取成功！')
                })
        })
    }


    @action addPay=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.addPay,obj)
                .then(res=>{

                    resolve('添加成功！')
                })
        })
    }
    @action addNews=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.system.addNews,obj)
                .then(res=>{

                    resolve('添加成功！')
                })
        })
    }

    @action eidtPay=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.put(Api.system.eidtPay,obj)
                .then(res=>{

                    resolve('修改成功！')
                })
        })
    }
    @action eidtNews=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.put(Api.system.eidtNews,obj)
                .then(res=>{

                    resolve('修改成功！')
                })
        })
    }



    @action changeStatus=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.put(Api.system.changeStatus,obj)
                .then(res=>{

                    resolve('修改成功！')
                })
        })
    }


    @action changePayStatus=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.put(Api.system.changePayStatus,obj)
                .then(res=>{

                    resolve('修改成功！')
                })
        })
    }






}