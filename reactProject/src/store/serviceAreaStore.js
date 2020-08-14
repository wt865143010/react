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
            Axios.post(Api.warehouse.getServeList,{page:'',pageSize:''})
                .then(res=>{
                    let serveList=[]
                    let a=res.data.data.map((item,index)=>{
                        let temp=Object.assign({key:index+1},item);
                        serveList.push(temp);
                    })
                    resolve(serveList)
                })
        })
    }
//服务区删除
    @action deleteData=(obj)=>{
        // console.log(obj)
        return new Promise((resolve, reject) => {
            Axios.put(Api.warehouse.getDelete,obj)
                .then(res=>{
                    resolve(res.data.data)
                })
        })

    }
//服务区搜索请求
    @action myserch=(obj,myobj)=>{
        console.log("store里发的请求参数：");
        let parm = {
            serName:obj,
            serCode:myobj
        }
        console.log(obj);
        return new Promise((resolve, reject) => {
            Axios.post(Api.warehouse.getSearch,
                parm)
                .then(res=>{
                    let myList=[]
                    let a=res.data.data.map((item,index)=>{
                        let temp=Object.assign({key:index+1},item);
                        myList.push(temp);
                    })
                    resolve(myList)
                })
        })
    }
//服务区编辑提交
    @action serviceConfirm=(obj)=>{
        console.log(obj);
        return new Promise((resolve, reject) => {
            Axios.put(Api.warehouse.getEdit,
                obj)
                .then(res=>{
                    resolve(res.data.data)
                })
        })
    }
//服务区新增
    @action serviceAdd=(obj)=>{
        console.log(obj);
        return new Promise((resolve, reject) => {
            Axios.post(Api.warehouse.serveAdd,
                obj)
                .then(res=>{
                    resolve(res.data.data)
                })
        })
    }
//门店列表
    @action storeData=()=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.warehouse.getStoreList,{page:1,pageSize:10})
                .then(res=>{
                    let myList=[]
                    let a=res.data.data.map((item,index)=>{
                        let temp=Object.assign({key:index+1},item);
                        myList.push(temp);
                    })
                    resolve(myList)
                })
        })
    }
    //门店搜索
    @action searchStore=(obj)=>{
        console.log(obj)
        return new Promise((resolve, reject) => {
            Axios.post(Api.warehouse.searchStoreList,obj)
                .then(res=>{
                    let myList=[]
                    let a=res.data.data.map((item,index)=>{
                        let temp=Object.assign({key:index+1},item);
                        myList.push(temp);
                    })
                    resolve(myList)
                })
        })
    }
    //门店删除
    @action deleteStore=(obj)=>{
        console.log(obj)
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse.deleteStoreData,{params:obj})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
    //门店页的服务区删除
    @action delServeArea=(obj)=>{
        console.log(obj)
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse.deleteServeArea,{params:obj})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
    //编辑页的门店地址
    @action storeUrl=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse.getStoreUrl)
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
    //门店编辑页的删除门店地址
    @action delStoreUrl=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse. deleteStoreUrl,{params:obj})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
    //编辑页面的门店服务区域
    @action storeServe=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse.getStoreServe)
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
    //门店编辑页的删除服务区域
    @action delStoreArea=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse. deleteStoreArea,{params:obj})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
    //门店编辑提交
    @action editStore=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.warehouse.postEditStore,{obj})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
//新增门店的服务区域
    @action serveArea=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse.getServeArea)
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
  //新增门店提交
  @action addStore=(obj)=>{
      return new Promise((resolve, reject) => {
          Axios.post(Api.warehouse.postAddStore,{obj})
              .then(res=>{
                  resolve(res.data)
              })
      })
  }
  //仓库列表
    @action wareList=()=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.warehouse.wareHouseData,{page:1,pageSize:100})
                .then(res=>{
                    // console.log(res)
                    resolve(res.data.data)
                })
        })
    }
//仓库搜索
    @action searchWare=(obj)=>{
        console.log('仓库')
        return new Promise((resolve, reject) => {
            Axios.post(Api.warehouse.wareSearch,obj)
                .then(res=>{
                    console.log(res.data)
                    resolve(res.data)
                })
        })
    }
//仓库编辑
    @action editWare=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.warehouse.wareEdit,{obj})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
//仓库页面的门店列表
  @action wareStoreList=()=>{
      return new Promise((resolve, reject) => {
          Axios.get(Api.warehouse.getWareStoreList)
              .then(res=>{
                  resolve(res.data.data)
              })
      })
  }
  //删除仓库门店列表
    @action deleteWareStore=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse.delWareStore,{params:obj})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
  //删除仓库列表
    @action deleteWare=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse.delWare,{params:obj})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
    //新增仓库
    @action addWare=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.post(Api.warehouse.addWareHouse,{obj})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }
    //产品列表
    @action productData=()=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse.productList)
                .then(res=>{
                    console.log(res)
                    resolve(res.data.data)
                })
        })
    }
    //产品搜索
    @action searchProduct=(obj)=>{
        return new Promise((resolve, reject) => {
            Axios.get(Api.warehouse.productSearch,{params:obj})
                .then(res=>{
                    resolve(res.data)
                })
        })
    }

}

