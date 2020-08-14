import {observable,action} from "mobx";
import Axios from "../util/Axios";
import Api from '../api/allApi'
export default class userStore {
    @observable user=[
        // {
        //     "id": 1,
        //     "moduleName": "用户管理",
        //     "menuUrl": "/user/userlist",
        //     "pathName": "/home/user",/*===模块的名称==*/
        //     "url": "user",//---
        //     "menuImgClass": "el-icon-s-custom",
        //     "menuState": "0",
        //     "moduleChildren": [
        //         {
        //             "id": 2,
        //             "moduleName": "用户列表",
        //             "menuUrl": "/user/userlist/UserList",
        //             "pathName": "/home/user/UserList",/*===模块的名称==*/
        //             "url": "user/userlist/UserList",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": null
        //         }
        //     ]
        // },
        // {
        //     "id": 3,
        //     "moduleName": "产品管理",
        //     "menuUrl": "/index/role",
        //     "pathName": "/home/product",
        //     "url": "product",
        //     "menuImgClass": "el-icon-eleme",
        //     "menuState": "0",
        //     "moduleChildren": [//-------------------子菜单
        //         {
        //             "id": 4,
        //             "moduleName": "产品管理",
        //             "menuUrl": "/home/product/pro_mange",
        //             "pathName": "/home/product/pro_mange",/*===模块的名称==*/
        //             "url": "product/pro_mange",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": [
        //                 {
        //                     "id": 5,
        //                     "moduleName": "发布新产品",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/product/pro_mange/Productadd",/*===模块的名称==*/
        //                     "url": "product/pro_mange/Productadd",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 },
        //                 {
        //                     "id": 6,
        //                     "moduleName": "所有产品列表",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/product/pro_mange/Product_list",/*===模块的名称==*/
        //                     "url": "product/pro_mange/Product_list",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 }
        //             ]
        //         },
        //         {
        //             "id": 8,
        //             "moduleName": "产品配置",
        //             "menuUrl": "/index/user",
        //             "pathName": "/home/product/product_config",/*===模块的名称==*/
        //             "url": "product/product_config",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": [
        //
        //                 {
        //                     "id": 10,
        //                     "moduleName": "产品标签",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/product/product_config/Product_lable",/*===模块的名称==*/
        //                     "url": "product/product_config/Product_lable",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 },
        //                 {
        //                     "id": 13,
        //                     "moduleName": "产品价格类型",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/product/product_config/Pro_price_type",/*===模块的名称==*/
        //                     "url": "product/product_config/Pro_price_type",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     "id": 13,
        //     "moduleName": "仓库管理",
        //     "menuUrl": "/index/role/rolelist",
        //     "pathName": "/home/Warehouse",
        //     "url": "Warehouse",
        //     "menuImgClass": "",
        //     "menuState": "0",
        //     "moduleChildren": [
        //         {
        //             "id": 14,
        //             "moduleName": "服务区管理",
        //
        //             "menuUrl": "/home/Warehouse/service_area/Service_area",
        //             "pathName": "/home/Warehouse/service_area/Service_area",/*===模块的名称==*/
        //             "url": "Warehouse/service_area/Service_area",//---
        //
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": null
        //         },
        //         {
        //             "id": 15,
        //             "moduleName": "门店列表",
        //             "menuUrl": "/home/Warehouse/storeList/StoreList",
        //             "pathName": "/home/Warehouse/storeList/StoreList",/*===模块的名称==*/
        //             "url": "Warehouse/storeList/StoreList",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": null
        //         },
        //         {
        //             "id": 16,
        //             "moduleName": "仓库列表",
        //             "menuUrl": "/home/Warehouse/warehouseList/WarehouseList",
        //             "pathName": "/home/Warehouse/warehouseList/WarehouseList",/*===模块的名称==*/
        //             "url": "Warehouse/warehouseList/WarehouseList",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": null
        //         },
        //         {
        //             "id": 17,
        //             "moduleName": "产品列表",
        //             "menuUrl": "/home/Warehouse/productList/ProductList",
        //             "pathName": "/home/Warehouse/productList/ProductList",/*===模块的名称==*/
        //             "url": "Warehouse/productList/ProductList",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": null
        //         }
        //     ]
        // },
        // {
        //     "id": 18,
        //     "moduleName": "订单管理",
        //     "menuUrl": "/index/role/rolelist",
        //     "pathName": "/home/order",
        //     "url": "order",
        //     "menuImgClass": "",
        //     "menuState": "0",
        //     "moduleChildren": [
        //         {
        //             "id": 19,
        //             "moduleName": "订单列表",
        //             "menuUrl": "/order/Orderlist",
        //             "pathName": "/home/order/Orderlist",/*===模块的名称==*/
        //             "url": "order/Orderlist",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": null
        //         },
        //         {
        //             "id": 20,
        //             "moduleName": "发货单详情",
        //             "menuUrl": "/order/Invoice",
        //             "pathName": "/home/order/Invoice",/*===模块的名称==*/
        //             "url": "order/Invoice",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": null
        //         },
        //         {
        //             "id": 21,
        //             "moduleName": "退货单申请",
        //             "menuUrl": "/order/Return_Order",
        //             "pathName": "/home/order/Return_Order",/*===模块的名称==*/
        //             "url": "order/Return_Order",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": null
        //         }
        //     ]
        // },
        // {
        //     "id": 22,
        //     "moduleName": "营销管理",
        //     "menuUrl": "/home/coupon",
        //     "pathName": "/home/coupon",
        //     "url": "coupon",
        //     "menuImgClass": "",
        //     "menuState": "0",
        //     "moduleChildren": [
        //         {
        //             "id": 23,
        //             "moduleName": "优惠券管理",
        //             "menuUrl": "/home/coupon/coupon",
        //             "pathName": "/home/coupon/coupon",/*===模块的名称==*/
        //             "url": "coupon/coupon",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": [
        //                 {
        //                     "id": 24,
        //                     "moduleName": "优惠券列表",
        //                     "menuUrl": "/home/coupon/coupon/couponlist",
        //                     "pathName": "/home/coupon/coupon/Couponlist",/*===模块的名称==*/
        //                     "url": "coupon/coupon/Couponlist",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 }
        //             ]
        //         },
        //         {
        //             "id": 25,
        //             "moduleName": "促销活动管理",
        //             "menuUrl": "/home/coupon/activity",
        //             "pathName": "/home/coupon/activity",/*===模块的名称==*/
        //             "url": "coupon/activity",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": [
        //                 {
        //                     "id": 26,
        //                     "moduleName": "促销活动列表",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/coupon/activity/Activitylist",/*===模块的名称==*/
        //                     "url": "coupon/activity/Activitylist",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 },
        //                 {
        //                     "id": 27,
        //                     "moduleName": "新增促销活动",
        //                     "menuUrl": "/home/coupon/activity/Addactivity",
        //                     "pathName": "/home/coupon/activity/Addactivity",/*===模块的名称==*/
        //                     "url": "coupon/activity/Addactivity",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren":null
        //                 },
        //
        //
        //
        //             ]
        //         },
        //         {
        //             "id": 32,
        //             "moduleName": "抽奖活动管理",
        //             "menuUrl": "/home/coupon/luckdraw",
        //             "pathName": "/home/coupon/luckdraw",/*===模块的名称==*/
        //             "url": "coupon/luckdraw",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": [
        //                 {
        //                     "id": 33,
        //                     "moduleName": "抽奖活动列表",
        //                     "menuUrl": "/home/coupon/luckdraw/RaffleList",
        //                     "pathName": "/home/coupon/luckdraw/RaffleList",/*===模块的名称==*/
        //                     "url": "coupon/luckdraw/RaffleList",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 },
        //                 {
        //                     "id": 34,
        //                     "moduleName": "抽奖活动明细",
        //                     "menuUrl": "/home/coupon/luckdraw/lotteryDetails",
        //                     "pathName": "/home/coupon/luckdraw/lotteryDetails",/*===模块的名称==*/
        //                     "url": "coupon/luckdraw/lotteryDetails",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 }
        //             ]
        //         },
        //         {
        //             "id": 35,
        //             "moduleName": "营销报表",
        //             "menuUrl": "/index/user",
        //             "pathName": "/home/order",/*===模块的名称==*/
        //             "url": "order",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": [
        //                 {
        //                     "id": 36,
        //                     "moduleName": "优惠券分析报表",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/order/Coupon_analyse",/*===模块的名称==*/
        //                     "url": "order/Coupon_analyse",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 },
        //                 {
        //                     "id": 37,
        //                     "moduleName": "促销活动分析报表",
        //                     "menuUrl": "/order/Discount_activity",
        //                     "pathName": "/home/order/Discount_activity",/*===模块的名称==*/
        //                     "url": "order/Discount_activity",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 }
        //             ]
        //         }
        //
        //     ]
        // },
        // {
        //     "id": 38,
        //     "moduleName": "系统管理",
        //     "menuUrl": "/index/role/rolelist",
        //     "pathName": "/home/system",
        //     "url": "system",
        //     "menuImgClass": "",
        //     "menuState": "0",
        //     "moduleChildren": [
        //         {
        //             "id": 39,
        //             "moduleName": "基本设置",
        //             "menuUrl": "/system/setting/setting",
        //             "pathName": "/home/system/setting",/*===模块的名称==*/
        //             "url": "system/setting/Setting",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren":null
        //         },
        //         {
        //             "id": 40,
        //             "moduleName": "安全中心",
        //             "menuUrl": "/index/user",
        //             "pathName": "/home/system/security_center",/*===模块的名称==*/
        //             "url": "system/security_center",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": [
        //                 {
        //                     "id": 41,
        //                     "moduleName": "账号列表",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/system/security_center/UserList/userList",/*===模块的名称==*/
        //                     "url": "system/security_center/UserList/userList",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 },
        //                 {
        //                     "id": 42,
        //                     "moduleName": "大区管理",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/system/security_center/areaManage/areaManager",/*===模块的名称==*/
        //                     "url": "system/security_center/areaManage/areaManager",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 },
        //                 {
        //                     "id": 43,
        //                     "moduleName": "组织管理",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/system/security_center/Organization/Organization",/*===模块的名称==*/
        //                     "url": "system/security_center/Organization/Organization",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 },
        //                 {
        //                     "id": 44,
        //                     "moduleName": "角色列表",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/system/security_center/roleList/roleList",/*===模块的名称==*/
        //                     "url": "system/security_center/roleList/roleList",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 },
        //                 {
        //                     "id": 45,
        //                     "moduleName": "操作日志",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/system/security_center/OperationLog/OperationLog",/*===模块的名称==*/
        //                     "url": "system/security_center/OperationLog/OperationLog",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 }
        //             ]
        //         },
        //         {
        //             "id": 46,
        //             "moduleName": "消息管理",
        //             "menuUrl": "/index/user",
        //             "pathName": "/home/system/information/",/*===模块的名称==*/
        //             "url": "system/information/",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": [
        //                 {
        //                     "id": 47,
        //                     "moduleName": "消息模板列表",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/system/information/NewsTemplateList",/*===模块的名称==*/
        //                     "url": "system/information/NewsTemplateList",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 },
        //                 {
        //                     "id": 48,
        //                     "moduleName": "邮件消息配置",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/system/information/emailSet/EmailSet",/*===模块的名称==*/
        //                     "url": "system/information/emailSet/EmailSet",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 }
        //             ]
        //         },
        //         {
        //             "id": 49,
        //             "moduleName": "支付设置",
        //             "menuUrl": "/index/user",
        //             "pathName": "/home/system/payment",/*===模块的名称==*/
        //             "url": "system/payment",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": [
        //                 {
        //                     "id": 50,
        //                     "moduleName": "支付方式列表",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/system/payment/PayList",/*===模块的名称==*/
        //                     "url": "system/payment/PayList",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 }
        //             ]
        //         },
        //         {
        //             "id": 51,
        //             "moduleName": "用户反馈",
        //             "menuUrl": "/index/user",
        //             "pathName": "/home/system/user_feedback",/*===模块的名称==*/
        //             "url": "system/user_feedback",//---
        //             "menuImgClass": "el-icon-s-custom",
        //             "menuState": "0",
        //             "moduleChildren": [
        //                 {
        //                     "id": 52,
        //                     "moduleName": "订单评价",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/system/user_feedback/OrderEvaluation",/*===模块的名称==*/
        //                     "url": "system/user_feedback/OrderEvaluation",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 },
        //                 {
        //                     "id": 53,
        //                     "moduleName": "用户留言",
        //                     "menuUrl": "/index/user",
        //                     "pathName": "/home/system/user_feedback/LeaveMsg",/*===模块的名称==*/
        //                     "url": "system/user_feedback/LeaveMsg",//---
        //                     "menuImgClass": "el-icon-s-custom",
        //                     "menuState": "0",
        //                     "moduleChildren": null
        //                 }
        //             ]
        //         }
        //     ]
        // }
    ];
    @observable userlist=[];
    @observable relation=[];
    @observable distributor=[];
    @observable coupon=[];
    @observable activity=[];
    @observable friend=[];
    @observable integra=[];
    @observable isLogin=false;
    @observable token="";
    @observable userNewsInfo=[];


    //登录
    @action login=(obj)=>{
        console.log('登录')
        return new Promise((resolve, reject) => {
            Axios.post(Api.user.userLogin, obj)
                .then(res=>{
                    console.log(res)
                    if (res.data.code=="200"){
                        this.user=res.data.data;
                        sessionStorage.setItem('username',obj.number)
                        this.token=res.data.token
                        sessionStorage.setItem('token',res.data.token);
                        resolve(1);
                    }else {
                        reject("登录失败")
                    }
            })
        })

}

    //获取用户列表
    @action getUser=(obj)=>{
       return new Promise((resolve, reject) => {
           Axios.get(Api.user.getUser,{
               params: obj,
               headers:this.token
           })
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
            Axios.post(Api.user.distributor,obj)
                .then(res=>{
                    console.log(res.data)
                    this.distributor=res.data
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
            Axios.post(Api.user.getFriend,obj)
                .then(res=>{
                    console.log(res.data)
                    this.friend=res.data.AllCooperate
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
            Axios.post(Api.user.searchUser,obj)
                .then(res=>{
                    this.userlist=res.data.data;
                    resolve(this.activity)
                })
        })
    }

    //用户详情基本信息
    @action getUserInfo=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.user.getUserInfo,obj)
                .then(res=>{
                    console.log(res.data)
                    this.userNewsInfo=res.data;
                    resolve(res.data.data)
                })
        })
    }
    //优惠券查询
    @action searchCou=(obj)=>{
        console.log('查询优惠券使用')
        console.log(obj)
        return new Promise((resolve, reject) => {
            Axios.post(Api.user.searchCou,obj)
                .then(res=>{
                    console.log(res.data)
                    this.coupon=res.data.userCoupons;
                    resolve(this.activity)
                })
        })
    }

    //积分查询
    @action searchInt=(obj)=>{
        console.log('查询积分使用')
        return new Promise((resolve, reject) => {
            Axios.post(Api.user.searchInt,obj)
                .then(res=>{
                    console.log(res.data)
                    this.integra=res.data.pointsearches;
                    resolve(this.activity)
                })
        })
    }
    //参加活动查询
    @action searchAct=(obj)=>{
        console.log('查询参加活动')
        return new Promise((resolve, reject) => {
            Axios.post(Api.user.searchAct,obj)
                .then(res=>{
                    console.log(res.data)
                    this.activity=res.data.userActivities;
                    resolve(this.activity)
                })
        })
    }

    //开通合作伙伴
    @action addCoo=(obj)=>{
        console.log('开通合作伙伴')
        return new Promise((resolve, reject) => {
            Axios.post(Api.user.addCoo,obj)
                .then(res=>{
                    resolve(this.activity)
                })
        })
    }

    @action delCon=(obj)=>{
        console.log('回收优惠券')
        console.log(obj)
        return new Promise((resolve, reject) => {
            Axios.post(Api.user.delCon,obj)
                .then(res=>{

                    resolve('回收成功')
                })
        })
    }
}