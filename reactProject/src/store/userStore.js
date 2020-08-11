import {observable,action} from "mobx";
import Axios from "../util/Axios";
import Api from '../api/allApi'
export default class userStore {
    @observable user=[];
    @observable userlist=[];
    @observable relation=[];
    @observable distributor=[];
    @observable coupon=[];
    @observable activity=[];
    @observable friend=[];
    @observable integra=[];
    @observable isLogin=false;
    @observable token="";
    //登录
    @action login=(obj)=>{
        console.log('登录')
        return new Promise((resolve, reject) => {
            Axios.post(Api.user.userLogin, obj)
                .then(res=>{
                    console.log(res.data.data)
                        this.user=res.data.data;
                        // this.token=res.data.token
                        resolve(res);
                        reject("登录失败")

            })
        })

}

    //获取用户列表
    @action getUser=(obj)=>{
       return new Promise((resolve, reject) => {
           Axios.get(Api.user.getUser,{params: obj})
               .then(res=>{
                   // console.log(res.data)
                   this.userlist=res.data
                   // console.log(this.userlist)
                   resolve(res.data);
               })
       })
    }

    //锁定用户
    @action lockUser=(obj)=>{
        console.log('锁定用户')
        return new Promise((resolve, reject) => {
            Axios.post(Api.user.lockUser,obj)
                .then(res=>{
                    resolve('解锁')
                })
        })

    }

    //合作伙伴
    @action cooperation=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.user.cooperation,obj)
                .then(res=>{
                    
                })
        })

    }

    //获取指定用户的关系账号，联系方式，地址信息，操作日志
    @action getrelation=(obj)=>{
        console.log('获取合作伙伴')
        return new Promise((resolve, reject) => {
            Axios.get(Api.user.relation,{params:obj})
                .then(res=>{
                    this.relation=res.data.data
                    resolve('获取成功！')
                })
        })
    }

    //经销商基本信息，银行账户信息，股东信息
    @action getdistributorNews=(obj)=>{
        console.log('获取经销商信息')
        return new Promise((resolve, reject) => {
            Axios.get(Api.user.distributor,{params:obj})
                .then(res=>{
                    this.distributor=res.data.data
                    // console.log(this.distributor)
                    resolve(this.distributor)
                })
        })
    }

    //优惠券
    @action couponUse=(obj)=>{
        console.log('获取优惠券使用')
        return new Promise((resolve, reject) => {
            Axios.get(Api.user.couponuse,{params:obj})
                .then(res=>{
                    this.coupon=res.data.data.con
                    resolve(this.coupon)
                })
        })
    }

    //参加活动
    @action joinActivity=(obj)=>{
        console.log('获取参加活动情况')
        return new Promise((resolve, reject) => {
            Axios.get(Api.user.activity,{params:obj})
                .then(res=>{
                    this.activity=res.data.data.act
                    resolve(this.activity)
                })
        })
    }

    //合作伙伴账号
    @action getFriend=(obj)=>{
        console.log('获取合作伙伴账号')
        return new Promise((resolve, reject) => {
            Axios.get(Api.user.getFriend,{params:obj})
                .then(res=>{
                    this.friend=res.data.data.fri
                    resolve(this.activity)
                })
        })
    }

    //积分使用情况
    @action getIntegra=(obj)=>{
        console.log('获取积分使用')
        return new Promise((resolve, reject) => {
            Axios.get(Api.user.getIntegra,{params:obj})
                .then(res=>{
                    this.integra=res.data.data.int;
                    resolve(this.activity)
                })
        })
    }


    //用户多条件搜索
    @action searchUser=(obj)=>{
        console.log('查询用户')
        return new Promise((resolve, reject) => {
            Axios.get(Api.user.searchUser,{params:obj})
                .then(res=>{
                    this.userlist=res.data;
                    resolve(this.activity)
                })
        })
    }
    //优惠券查询
    @action searchCou=(obj)=>{
        console.log('查询优惠券使用')
        console.log(obj)
        return new Promise((resolve, reject) => {
            Axios.get(Api.user.searchCou,{params:obj})
                .then(res=>{
                    this.coupon=res.data.data.con;
                    resolve(this.activity)
                })
        })
    }

    //积分查询
    @action searchInt=(obj)=>{
        console.log('查询积分使用')
        return new Promise((resolve, reject) => {
            Axios.get(Api.user.searchInt,{params:obj})
                .then(res=>{
                    this.integra=res.data.data.int;
                    resolve(this.activity)
                })
        })
    }
    //参加活动查询
    @action searchAct=(obj)=>{
        console.log('查询参加活动')
        return new Promise((resolve, reject) => {
            Axios.get(Api.user.searchAct,{params:obj})
                .then(res=>{
                    this.activity=res.data.data.act;
                    resolve(this.activity)
                })
        })
    }

    //开通合作伙伴
    @action addCoo=(obj)=>{
        console.log('开通合作伙伴')
        return new Promise((resolve, reject) => {
            Axios.get(Api.user.addCoo,{params:obj})
                .then(res=>{
                    this.activity=res.data.data.act;
                    resolve(this.activity)
                })
        })
    }

    @action delCon=(obj)=>{
        console.log('回收优惠券')
        console.log(obj)
        return new Promise((resolve, reject) => {
            Axios.delete(Api.user.delCon,{params:obj})
                .then(res=>{

                    resolve('回收成功')
                })
        })
    }
}