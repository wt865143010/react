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
    @observable productinfo=[]
    @observable allproduct_type=[]//所有的产品属性
    @observable allproductLabel=[]//所有的标签



    @observable getproductinfo=[]//获取到的产品信息
    @observable getproduct_priceinfo=[]//获取到的产品定价信息
    @observable getproduct_descriptioninfo=[]//获取到的产品描述信息
    @observable getproduct_upperandLowerinfo=[]//获取到的上架信息


    @observable obj=[]


    @observable addProductbaseinfo={};//新增产品基本信息所需要的字段


    @observable addProduct_price={//新增产品定价所需要的字段
        originalPrice:"",//产品价格
        productId:"",
        priceTypeId:"",//价格类型id,
        sellingPrice:"",
        discountRate:"",
    };


    @observable addProduct_description={
        productDescription:"",
        labelId:'',
        productImage:""
    }



    //放新增产品描述所需要的字段





    @observable addproduct_lable={//新增标签的对象
        labelName:"",
        labelDescription:"",

    }





    @observable addProduct_time={
        onShelfTime:'',
        offShelfTime:"",
        shelfType:"1"
    }
    @observable price_type=[//新增产品的定价信息

    ]
    @observable sale_price=[]//销售价格


    @action addproductbaseinfo(){//新增产品基本信息


        console.log(this.addProduct_description)
        console.log(this.addProduct_price)
        console.log(this.addProduct_time)

        this.addProductbaseinfo.productDescription=this.addProduct_description
        this.addProductbaseinfo.productPrice=this.addProduct_price
        this.addProductbaseinfo.productShelf=this.addProduct_time



        console.log(toJS(this.addProductbaseinfo))


        console.log(toJS(this.addProductbaseinfo))
        return new Promise((resolve, reject) => {
            Axios.post(Api.product.addproductbaseinfo,{"product":this.addProductbaseinfo})

                .then(res=>{

                    if (res.status===200){//添加新产品基本信息成功

                        this.addProduct_price.productId=this.productId=res.data//获取到添加产品信息的id
                        resolve("添加产品基本信息成功")
                    }else {//添加新产品失败

                    }

                })

        })


    }
    @action addproduct_price(){//新增产品定价信息
        console.log(this.productId)
        console.log((JSON.stringify(this.addProduct_price)))//如果需要传递json对象形式的参数
        return new Promise((resolve,reject)=>{
            Axios.post(Api.product.addproduct_price,{params:this.addProduct_price}).then(res=>{
                if (res.status===200){//添加新产品基本信息成功

                    this.addProduct_price.productId=this.productId=res.data//获取到添加产品信息的id
                    resolve("添加产品定价成功")
                }else {//添加新产品失败

                }
            })
        })
    }


    @action addproduct_description(){
        console.log(this.productId)
        this.addProduct_description.push({
            productId:this.productId
        })
        console.log(JSON.stringify(this.addProduct_description))//json对象
        return new Promise((resolve, reject) => {
            Axios.post(Api.product.addproduct_description,{params:this.addProduct_description}).then(res=>{
               if(res.status==200) {
                   this.addProduct_description=[]
               }
            })
        })
    }

    @action getsale_price(){//获取所有的价格类型。。。产品定价页面需要
        return new Promise(((resolve, reject) => {
            Axios.get(Api.product.getsale_price).then(res=>{
                console.log(res.status)
                console.log(res)
                if (res.status===200){//添加新产品基本信息成功
                    this.sale_price=res.data.data

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
        console.log(this.productId)
        console.log(toJS(this.addProduct_time))
        console.log(JSON.stringify(this.addProduct_time))//json格式的对象
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

                    res.data.data.map((item,index)=>{
                        for(let i in item){
                            if(item[i]==true){
                                item[i]="是"
                            }
                            if(item[i]==false){
                                item[i]="否"
                            }
                        }
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
    @action updataproduct_type(productId){//传入产品id进行修改   批准上架

        console.log(productId)
        return new Promise((resolve, reject) => {
            Axios.put(Api.product.updataproduct_type,{params:productId}).then(res=>{
                console.log(res)
                if(res.status==200){
                    console.log(this.productAll)

                    this.getAllproduct();

                }

            })
        })


    }
    @action getserach(){//按搜索条件查询产品
        console.log(JSON.stringify(this.product_serach))//json格式对象
        return new Promise((resolve, reject) => {
            console.log(this.product_serach)
            Axios.post(Api.product.getserach,this.product_serach).then(res=>{
                console.log(res)
            })
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





    @action getAlllabel(){
        return new Promise((resolve, reject) => {
            Axios.get(Api.product.getAlllabel).then(res=>{
                console.log(res)
                this.allproductLabel=res.data.data;

                let alllabel=[];
                res.data.data.map((item,index)=>{
                    alllabel.push(Object.assign(item,{key:index+1}))
                })
                this.allproductLabel=alllabel


                resolve("获取成功")
            })
        })
    }
    //产品标签页面的请求
    @action delete_lable(label_id){//删除标签==================={params:{id:label_id}}
        console.log(label_id)
        return new Promise((resolve, reject) => {
            Axios.delete(Api.product.delete_lable+'/'+label_id).then(res=>{
                console.log(res)
                if(res.status==200){
                    this.getAlllabel()
                    resolve("删除成功")
                }
            })
        })

    }

    @action add_lable(){//添加一个新标签========================params:this.addproduct_lable
        return new Promise((resolve, reject) => {
            Axios.post(Api.product.add_lable,this.addproduct_lable).then(res=>{
                if(res.status==200){
                    resolve("添加成功")
                    this.getAlllabel()
                }

            })
        })

    }

    //产品价格类型的请求
    @action serachallproduct_type(){//获取所有的价格类型

        return new Promise((resolve, reject) => {
            Axios.get(Api.product.getallproduct_price_type).then(res=>{
                console.log(res.data.data)



                this.allproduct_type=res.data.data
/*新添加代码 ，key值*/
                let addallproduct_type=[]
                res.data.data.map((item,index)=>{
                    addallproduct_type.push(Object.assign(item,{key:(index+1)}))
                })
                this.allproduct_type=addallproduct_type





                console.log(this.allproduct_type)
                resolve("获取成功")
            })

        })

    }
    @action serach_pro_type(obj){//obj是一个对象 传入过来的搜索信息=======params:obj
        console.log(obj)

        return new Promise((resolve, reject) => {
            Axios.get(Api.product.serach_pro_type,{params:obj}).then(res=>{

            })
        })

    }
    @action delete_product_type(producttype_id){//删除价格类型========{params:{id:producttype_id}}
        console.log(producttype_id)
        return new Promise((resolve, reject) => {
            Axios.delete(Api.product.delete_product_type+'/'+producttype_id).then(res=>{
                if(res.status==200){
                    this.serachallproduct_type();
                }
            })
        })

    }
    @action addproduct_price_type(obj){//添加一个新的产品价格类型============params:obj
        console.log(obj)
        return new Promise((resolve, reject) => {
            Axios.post(Api.product.addproduct_price_type,obj).then(res=>{
                console.log(res)
                resolve("添加成功")
            })
        })
    }




    @action addimg(obj){
        return new Promise((resolve, reject) => {
            Axios.post(Api.product.addimg,{params:obj}).then(res=>{
                console.log(res)
            })
        })
    }



    @action getinfo(product_id){//获取产品详情
        return new Promise((resolve, reject) => {
            Axios.get(Api.product.getinfo+'/'+product_id).then(res=>{
                console.log(res.data.data)
                this.getproductinfo=res.data.data
            })
        })
    }

    @action getproduct_price(id){
        return new Promise((resolve, reject) => {
            Axios.get(Api.product.getproduct_price+'/'+id).then(res=>{
                console.log(res.data.data)
                this.getproduct_priceinfo=res.data.data
            })
        })
    }
    @action getproduct_description(id){
        return new Promise((resolve, reject) => {
            Axios.get(Api.product.getproduct_description+'/'+id).then(res=>{
                console.log(res.data.data)
                this.getproduct_descriptioninfo=res.data.data
            })
        })
    }
    @action getproduct_upperandLower(id){
        return new Promise((resolve, reject) => {
            Axios.get(Api.product.getproduct_upperandLower+'/'+id).then(res=>{
                console.log(res.data)
                this.getproduct_upperandLowerinfo=res.data
            })
        })
    }




}
