import {observable,action} from "mobx";

import Axios from "../util/Axios";
import Api from "../api/allApi";
import {toJS} from "mobx";


export default  class productStore {
    @observable productId="";//新增产品的id
    @observable product_type=""
    @observable productAll=[]//装所有产品
    @observable productall=[]//过渡型变量
    @observable product_serach={}//条件搜索产品的值存在这个对象中


    @observable obj=[]


    @observable addProductbaseinfo={};//新增产品基本信息
    @observable addProduct_price={//新增产品定价
        product_price:"",//产品价格
        product_id:"",
        gift_price:"",//赠品价格
        product_price_type:""
    };
    @observable addProduct_time={
        up_time:'',
        down_time:"",
        type:"1"
    }
    @observable price_type=[//新增产品的定价信息

    ]
    @observable sale_price=[]//销售价格


    @action addproductbaseinfo(){//新增产品基本信息
        console.log(toJS(this.addProductbaseinfo))
        return new Promise((resolve, reject) => {
            Axios.post(Api.product.addproductbaseinfo,
                {params:this.addProductbaseinfo,product_id:this.productId})

                .then(res=>{

                    if (res.status===200){//添加新产品基本信息成功

                        this.addProduct_price.product_id=this.productId=res.data//获取到添加产品信息的id
                        resolve("添加产品基本信息成功")
                    }else {//添加新产品失败

                    }

                })

        })


    }
    @action addproduct_price(){//新增产品定价信息
        console.log(toJS(this.addProduct_price))
        return new Promise((resolve,reject)=>{
            Axios.post(Api.product.addproduct_price,{query:this.addProduct_price}).then(res=>{
                if (res.status===200){//添加新产品基本信息成功

                    this.addProduct_price.product_id=this.productId=res.data//获取到添加产品信息的id
                    resolve("添加产品定价成功")
                }else {//添加新产品失败

                }
            })
        })
    }


    @action getsale_price(){//获取所有的价格类型。。。产品定价页面需要
        return new Promise(((resolve, reject) => {
            Axios.get(Api.product.getsale_price).then(res=>{
                console.log(res.status)
                if (res.status===200){//添加新产品基本信息成功
                    this.sale_price=res.data

                }
            })
        }))

    }
    @action getprice_type(){//获取产品的价格类型
        return new Promise(((resolve, reject) => {
            Axios.get(Api.product.getprice_type).then(res=>{
                if (res.status===200){
                    this.price_type=res.data
                    console.log(this.price_type)
                }
            })
        }))
    }
    @action addproduct_time(){//获取产品的上架时间
        console.log(this.addProduct_time)
        return new Promise(((resolve, reject) => {
            Axios.post(Api.product.addproduct_time,
                {params:this.addProduct_time,product_id:this.productId}
                ).then(res=>{
                    resolve("获取上架时间成功")

            })
        }))
    }
    @action getAllproduct(){//获取所有的产品
        return new Promise((resolve, reject) => {
            Axios.get(Api.product.getAllproduct).then(res=>{
                console.log(res)
                if(res.status==200){

                    res.data.map((item,index)=>{
                        this.productall.push(Object.assign({}, item, { key: String(index) }))
                    })
                    this.productAll=this.productall
                    this.productall=[]
                    resolve("渲染成功");
                }

                console.log(toJS(this.productAll))

            })
        })
    }
    @action updataproduct_type(product_id){//传入产品id进行修改


        return new Promise((resolve, reject) => {
            Axios.put(Api.product.updataproduct_type,{params:product_id}).then(res=>{
                console.log(res)
                if(res.status==200){
                    console.log(this.productAll)

                    this.getAllproduct();

                }

            })
        })


    }
    @action getserach(){//按搜索条件查询产品
        return new Promise((resolve, reject) => {
            console.log(this.product_serach)
            Axios.get(Api.product.getserach,{params:this.product_serach})
        })
    }
    @action getproduct_byli(key){//按点击每个li的时候搜索出产品
        return new Promise((resolve, reject) => {
            Axios.get(Api.product.getproduct_byli,{params:{id:key}}).then(res=>{
                console.log(res)
                if(res.status==200){
                    res.data.map((item,index)=>{
                        this.productall.push(Object.assign({}, item, { key: String(index) }))
                    })
                    this.productAll=this.productall
                    this.productall=[]
                    resolve("渲染成功");
                }
            })
        })

    }





}
