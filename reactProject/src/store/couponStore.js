import {observable,action, observe} from "mobx";
import Axios from "../util/Axios";
import Api from '../api/allApi'


export default class couponStore{
    @observable dataSource=[
        {
            key:1,
            couponnumber:'123213',
            coupontype: '优惠券',
            couponname: '名称1',
            couponstarttime: '2017-10-10',
            datatype:'指定日期',
            effectivedate:'2017-10-10至2017-10-20',
            sendnumber:200,
            usenumber:10,
            couponstate:'已禁用',
            
          },
          {
            key:2,
            couponnumber:'123213',
            coupontype: '优惠券',
            couponname: '名称2',
            couponstarttime: '2017-10-10',
            datatype:'指定日期',
            effectivedate:'2017-10-10至2017-10-20',
            sendnumber:200,
            usenumber:10,
            couponstate:'进行中'
          },
          {
            key:3,
            couponnumber:'123213',
            coupontype: '优惠券',
            couponname: '名称3',
            couponstarttime: '2017-10-10',
            datatype:'指定日期',
            effectivedate:'2017-10-10至2017-10-20',
            sendnumber:200,
            usenumber:10,
            couponstate:'进行中'
          },
          {
            key:4,
            couponnumber:'123213',
            coupontype: '优惠券',
            couponname: '名称4',
            couponstarttime: '2017-10-10',
            datatype:'指定日期',
            effectivedate:'2017-10-10至2017-10-20',
            sendnumber:200,
            usenumber:10,
            couponstate:'进行中'
          },
          {
            key:5,
            couponnumber:'123213',
            coupontype: '优惠券',
            couponname: '名称5',
            couponstarttime: '2017-10-10',
            datatype:'指定日期',
            effectivedate:'2017-10-10至2017-10-20',
            sendnumber:200,
            usenumber:10,
            couponstate:'进行中'
          },
          {
            key:6,
            couponnumber:'123213',
            coupontype: '优惠券',
            couponname: '名称6',
            couponstarttime: '2017-10-10',
            datatype:'指定日期',
            effectivedate:'2017-10-10至2017-10-20',
            sendnumber:200,
            usenumber:10,
            couponstate:'进行中'
          },
          {
            key:7,
            couponnumber:'123213',
            coupontype: '优惠券',
            couponname: '名称7',
            couponstarttime: '2017-10-10',
            datatype:'指定日期',
            effectivedate:'2017-10-10至2017-10-20',
            sendnumber:200,
            usenumber:10,
            couponstate:'进行中'
          },
          {
            key:8,
            couponnumber:'123213',
            coupontype: '优惠券',
            couponname: '名称8',
            couponstarttime: '2017-10-10',
            datatype:'指定日期',
            effectivedate:'2017-10-10至2017-10-20',
            sendnumber:200,
            usenumber:10,
            couponstate:'进行中'
          },
          {
            key:9,
            couponnumber:'123213',
            coupontype: '优惠券',
            couponname: '名称9',
            couponstarttime: '2017-10-10',
            datatype:'指定日期',
            effectivedate:'2017-10-10至2017-10-20',
            sendnumber:200,
            usenumber:10,
            couponstate:'进行中'
          },
          {
            key:10,
            couponnumber:'123213',
            coupontype: '优惠券',
            couponname: '名称12',
            couponstarttime: '2017-10-10',
            datatype:'指定日期',
            effectivedate:'2017-10-10至2017-10-20',
            sendnumber:200,
            usenumber:10,
            couponstate:'进行中'
          },
          {
            key:11,
            couponnumber:'123213',
            coupontype: '优惠券',
            couponname: '名称11',
            couponstarttime: '2017-10-10',
            datatype:'指定日期',
            effectivedate:'2017-10-10至2017-10-20',
            sendnumber:200,
            usenumber:10,
            couponstate:'进行中'
          },


  
    ]

    //详情页必选产品
    @observable chooseproduct=[
      {
        key:1,
        requiredProductName:'产品中文名+产品英文名',
        sellingprice: 'ECOUPON：￥80.00',
        choosenumber:2

        
      },
    ]

    //详情页可选产品
    @observable optionaldata=[
      {
        key:1,
        OptionalProductName:'产品中文名+产品英文名',
        sellingprice: 'ECOUPON：￥80.00',
      }
    ]

        //详情页必选赠品
        @observable choosegift=[
          {
            key:1,
            OptionalProductName:'产品中文名+产品英文名',
            productnumber:'1',
            sellingprice: 'ECOUPON：￥80.00',
          }
        ]
        //详情页可选赠品
        @observable optionalgift=[
          {
            key:1,
            OptionalProductName:'产品中文名+产品英文名',
            sellingprice: 'ECOUPON：￥80.00',
          }
        ]
    


    @observable designatedproductsdata=[
      {
        key:1,
        OptionalProductName:'产品中文名+产品英文名',
        productnumber:'1',
        sellingprice: 'ECOUPON：￥80.00',
      }
    ]


    @observable addproductdata=[
      {
        key:1,
        OptionalProductName:'geLOC Me新智我仪器套装 ageLOC Me Device Kit',
        propertytype:'智芯组合产品',
        
      }
    ]

    @observable userdata =[
      {
        key:1,
        serialnumber:1,
        cardID:123456,
        username:'王册册',
        usertype:'PC',
        phonenumber:'10086',
        accounttype:'配偶账号',
        logintime:'2016-10-10',
        userposition:'',
        referenceID:'CN123456',
        referencename:'册册王',
        userstate:'不正常',
        usergrade:'零售顾客',
        qualificationsnum:'2',
      }
    ]




    @observable userdetailsdata=[
      {
        key:1,
        couponID:'123465',
        username:'王册册',
        userphone:10086,
        cardID:'cs123165',
        usertype:'PC',
        usergrade:'零售顾客',
        userposition:'业务经理',
        collectiontime:'2017-10-15 23:59:00',
        collectionaction:'系统发券',
        usertime:'',
        state:4
      },
      {
        key:2,
        couponID:'123465',
        username:'王册册',
        userphone:10086,
        cardID:'cs123165',
        usertype:'PC',
        usergrade:'零售顾客',
        userposition:'业务经理',
        collectiontime:'2017-10-15 23:59:00',
        collectionaction:'系统发券',
        usertime:'',
        state:2
      },
      {
        key:3,
        couponID:'123465',
        username:'王册册',
        userphone:10086,
        cardID:'cs123165',
        usertype:'PC',
        usergrade:'零售顾客',
        userposition:'业务经理',
        collectiontime:'2017-10-15 23:59:00',
        collectionaction:'系统发券',
        usertime:'',
        state:4
      },
      {
        key:4,
        couponID:'123465',
        username:'王册册',
        userphone:10086,
        cardID:'cs123165',
        usertype:'PC',
        usergrade:'零售顾客',
        userposition:'业务经理',
        collectiontime:'2017-10-15 23:59:00',
        collectionaction:'系统发券',
        usertime:'',
        state:2
      },
      {
        key:5,
        couponID:'123465',
        username:'王册册',
        userphone:10086,
        cardID:'cs123165',
        usertype:'PC',
        usergrade:'零售顾客',
        userposition:'业务经理',
        collectiontime:'2017-10-15 23:59:00',
        collectionaction:'系统发券',
        usertime:'',
        state:4
      },
      {
        key:6,
        couponID:'123465',
        username:'王册册',
        userphone:10086,
        cardID:'cs123165',
        usertype:'PC',
        usergrade:'零售顾客',
        userposition:'业务经理',
        collectiontime:'2017-10-15 23:59:00',
        collectionaction:'系统发券',
        usertime:'',
        state:2
      },
      {
        key:7,
        couponID:'123465',
        username:'王册册',
        userphone:10086,
        cardID:'cs123165',
        usertype:'PC',
        usergrade:'零售顾客',
        userposition:'业务经理',
        collectiontime:'2017-10-15 23:59:00',
        collectionaction:'系统发券',
        usertime:'',
        state:4
      },
      {
        key:8,
        couponID:'123465',
        username:'王册册',
        userphone:10086,
        cardID:'cs123165',
        usertype:'PC',
        usergrade:'零售顾客',
        userposition:'业务经理',
        collectiontime:'2017-10-15 23:59:00',
        collectionaction:'系统发券',
        usertime:'',
        state:2
      },
      {
        key:9,
        couponID:'123465',
        username:'王册册',
        userphone:10086,
        cardID:'cs123165',
        usertype:'PC',
        usergrade:'零售顾客',
        userposition:'业务经理',
        collectiontime:'2017-10-15 23:59:00',
        collectionaction:'系统发券',
        usertime:'',
        state:4
      },
      {
        key:10,
        couponID:'123465',
        username:'王册册',
        userphone:10086,
        cardID:'cs123165',
        usertype:'PC',
        usergrade:'零售顾客',
        userposition:'业务经理',
        collectiontime:'2017-10-15 23:59:00',
        collectionaction:'系统发券',
        usertime:'',
        state:2
      },
      {
        key:11,
        couponID:'123465',
        username:'王册册',
        userphone:10086,
        cardID:'cs123165',
        usertype:'PC',
        usergrade:'零售顾客',
        userposition:'业务经理',
        collectiontime:'2017-10-15 23:59:00',
        collectionaction:'系统发券',
        usertime:'',
        state:4
      },
      {
        key:12,
        couponID:'123465',
        username:'王册册',
        userphone:10086,
        cardID:'cs123165',
        usertype:'PC',
        usergrade:'零售顾客',
        userposition:'业务经理',
        collectiontime:'2017-10-15 23:59:00',
        collectionaction:'系统发券',
        usertime:'',
        state:2
      },
      
    ]

    @observable activitydata=[
      {
        key:1,
        serialnumber:1,
        activityNum:'12345',
        activityName:'',
        activityType:'满减促销',
        createdDate:'2020-1-1',
        activityStartTime:'2020-8-4',
        activityStopTime:'2020-8-20',
        status:0
      },
      {
        key:2,
        serialnumber:1,
        activityNum:'12345',
        activityName:'',
        activityType:'满减促销',
        createdDate:'2020-1-1',
        activityStartTime:'2020-8-4',
        activityStopTime:'2020-8-20',
        status:2
      },
      {
        key:3,
        serialnumber:1,
        activityNum:'12345',
        activityName:'',
        activityType:'满减促销',
        createdDate:'2020-1-1',
        activityStartTime:'2020-8-4',
        activityStopTime:'2020-8-20',
        status:1
      },
      {
        key:4,
        serialnumber:1,
        activityNum:'12345',
        activityName:'',
        activityType:'满减促销',
        createdDate:'2020-1-1',
        activityStartTime:'2020-8-10',
        activityStopTime:'2020-8-20',
        status:1
      },
      {
        key:5,
        serialnumber:1,
        activityNum:'12345',
        activityName:'',
        activityType:'满减促销',
        createdDate:'2020-1-1',
        activityStartTime:'2020-7-10',
        activityStopTime:'2020-7-20',
        status:1
      }
    ]


    @observable coupondetailsdata=[] //优惠券详细数据

    @observable receivedata=[] //发送页优惠券信息

    @observable sendpagealluser=[] //发送页用户的信息


    //发送页面查询产品数据
    @observable sendpageproduct=[]

    




    @action isDisable=(text,record)=>{
        console.log(text)
        console.log(record)
        let obj = {
          id:record,
          status:text
        }
        // Axios.get(Api.coupon.disable,{
        //   params:text
        // })
        // .then(res=>{
        //   this.dataSource = res
        // })
        return new Promise((resolve,reject)=>{
          Axios.post(Api.coupon.xiugizhaungtai,{
            id:record,
            status:text
          })
          .then(res=>{
            console.log(res)
            resolve(res.data.code)
          })
        })
        
    }

    @action searchAll=(obj)=>{
      // console.log(obj)
      // Axios.get(Api.coupon.searchcoupon,{
      //   params:obj,
      // }).then(res=>{
      //   this.dataSource = res
      // })
    }

    @action getallcoupon=(obj)=>{
      return new Promise((resolve, reject) => {
        Axios.post(Api.coupon.getallcoupon,{
          limit:10,
          page:1
        })
            .then(res=>{
                console.log(res)
                    // this.user=res.data.data;
                
                    // this.token=res.data.token
                    resolve(res.data.data);
                    

        })
    })
    }

    //优惠券详情
    @action getalldetails=(obj)=>{
      console.log(obj)
      return new Promise((resolve,reject)=>{
        Axios.post(Api.coupon.getcoupondetalis,{
          id:obj.record.id,
          limit:10,
          page:1
        })
        .then(res=>{
          // console.log(res)
          resolve(res.data)
        })
      })
      console.log(obj)
    }

    //优惠券详情页面的用户
    @action getuser=(obj)=>{
      console.log(obj)
    }

    //优惠券列表分页
    @action changepage_couponlist(current,pagesize){
      console.log(current,pagesize)
    }


    //发送给用户页面获取优惠券信息
    getsendcoupondata(data){
      console.log(data)
      const obj = JSON.parse(JSON.stringify(this.activitydata).replace(/key/g,"id"));
      console.log(obj)

    }


    //获取发送页第一页用户的信息
    @action getalluser(current,pagesize){

    }


    //发送页面获取产品
    @action sendpagesearchproduct(data){
      return new Promise((resolve, reject) => {
        // Axios.post(Api.user.lockUser,obj)
            // .then(res=>{
                // resolve(res)
            // })
  })
    }

    //获得所有的活动
    @action getallactivity(){
      console.log(12346578948)
      return new Promise((resolve, reject) => {

      })
      
    }

    //搜索活动
    @action searchactivity(data){
      return new Promise((resolve, reject) => {

      })
    }

    //活动详情页分页
    @action changepage_activitylist(pagedata){
      console.log(pagedata)
      return new Promise((resolve,reject)=>{

      })
    }

    @action chooseitem(data){
      return new Promise((resolve,reject)=>{
        
      })
    }

    //添加活动第二页搜索产品
    @action addactivitysearchproduct(data){
      return new Promise((resolve,reject)=>{

      })
      console.log(data)
    }


    @action addactivitysecondmainsearch(data){
      console.log(data)
      return new Promise((resolve,reject)=>{
        
      })
      
    }

    //满减促销发送数据
    @action fullreduction(data,isRuleCirculation){
      console.log(data)
      console.log(isRuleCirculation)
      return new Promise((resolve,reject)=>{
        
      })
    } 


    @action conditionsearch(data){
      return new Promise((resolve,reject)=>{

      })
    }
}