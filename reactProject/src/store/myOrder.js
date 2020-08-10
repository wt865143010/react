import {observable,action} from "mobx";
import Axios from "../util/Axios";
import Api from '../api/allApi'



export default class myOrder {
    @observable orderList=[];/*订单表*/
    @observable invoiceList=[];/*发货单表*/
    @observable return_List=[];/*发货单表*/

    @observable businessList=[];   /*业务订单数组*/
    @observable receiveShopInfoList=[]; /*收货人信息*/
    @observable  thezhifuInfoList=[];     /*支付信息*/
    @observable  fapiaoInfoList=[];      /*发票信息*/
    @observable  myreturnOrderInfoList=[];      /*退货单详情*/
    @observable  myreturnOrderShopList=[];      /*退货单涉及产品详情*/
    @observable  myinvoiceOrderyewuList=[];      /*发货单详情的业务类型*/
    @observable  myinvoiceHaveShopList=[];      /*发货单涉及产品*/
    @observable  myinvoiceShouHuoRenList=[];      /*发货单收货人信息*/

    @observable  myinvoiceDetailAllDataList=[];      /*发货单详情中的所有数据*/
    @observable  myorderDetailAllDataList=[];      /*订单详情中的所有数据*/
    @observable  myreturnDetailAllDataList=[];      /*退货单详情中的所有数据*/


    /*订单表渲染*/
    @action myOrder=()=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myOrder)
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


    /*发货单渲染*/
    @action invoiceOrder=()=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myInvoice)
                .then(resp=>{
                    console.log(resp.data.data);
                    this.invoiceList=resp.data.data;
                    resolve("发货单渲染成功");
                })
                .catch(e=>{
                    console.log(e);
                })
        })
    }


    /*退货单渲染*/
    @action return_list=()=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myReturn_order)
                .then(resp=>{
                    console.log(resp.data.data);
                    this.return_List=resp.data.data;
                    resolve("退货单渲染成功");
                })
                .catch(e=>{
                    console.log(e);
                })
        })
    }


    /*订单业务类型数组*/
    @action  businesslist=()=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myBusiness)
                .then(resp=>{
                    console.log(resp.data.data);
                    this.businessList=resp.data.data;
                    resolve("业务类型返回成功");
                })
                .catch(e=>{
                    console.log(e)
                })
        })
    }


    /*订单收货人信息*/
    @action receiveShop=()=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myReceiveShop)
                .then(resp=>{
                    console.log(resp.data.data);
                    this.receiveShopInfoList=resp.data.data;
                    resolve("收货人信息返回成功");
                })
                .catch(e=>{
                    console.log(e)
                })
        })
    }


    /*订单支付信息*/
    @action  zhifuInfo=()=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myzhifuInfo)
                .then(resp=>{
                    console.log(resp.data.data);
                    this.thezhifuInfoList=resp.data.data;
                    resolve("支付信息返回成功");
                })
                .catch(e=>{
                    console.log(e)
                })
        })
    }


    /*订单发票信息*/
    @action fapiaoInfo=()=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myfapiaoInfo)
                .then(resp=>{
                    console.log(resp.data.data);
                    this.fapiaoInfoList=resp.data.data;
                    resolve("支付信息返回成功");
                })
                .catch(e=>{
                    console.log(e)
                })
        })
    }

    /*@action myform=(data)=>{
        return new Promise((resolve,reject)=>{
            Axios.post(Api.the_order.myform,{params:data})
                .then(resp=>{
                    console.log(resp.data.data);
                    this.fapiaoInfoList=resp.data.data;
                    resolve("支付信息返回成功");
                })
                .catch(e=>{
                    console.log(e)
                })
        })
    }*/

    /*退货单详情的基本信息*/
    @action  returnOrderInfo=(theId)=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myreturnOrderInfo)
                .then(resp=>{
                    console.log(resp.data.data);
                    this.myreturnOrderInfoList=resp.data.data;
                    resolve("支付信息返回成功");
                })
                .catch(e=>{
                    console.log(e)
                })
        })
    }

    /*退货单涉及的产品详情*/
    @action  orderhaveShopInfo=(theid)=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myreturnOrderShop)
                .then(resp=>{
                    console.log(resp.data.data);
                    this.myreturnOrderShopList=resp.data.data;
                    resolve("支付信息返回成功");
                })
                .catch(e=>{
                    console.log(e)
                })
        })
    }


    /*发货单业务类型*/
    @action invoiceOrderyewu=()=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myinvoiceOrderyewu)
                .then(resp=>{
                    console.log(resp.data.data);
                    this.myinvoiceOrderyewuList=resp.data.data;
                    resolve("支付信息返回成功");
                })
                .catch(e=>{
                    console.log(e)
                })
        })
    }

    /*发货单产品*/
    @action invoiceHaveShop=()=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myinvoiceHaveShop)
                .then(resp=>{
                    console.log(resp.data.data);
                    this.myinvoiceHaveShopList=resp.data.data;
                    resolve("支付信息返回成功");
                })
                .catch(e=>{
                    console.log(e)
                })
        })
    }


    /*发货单中的收货人信息*/
    @action invoiceShouhuoRen=()=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myinvoiceShouHuoRen)
                .then(resp=>{
                    console.log(resp.data.data);
                    this.myinvoiceShouHuoRenList=resp.data.data;
                    resolve("支付信息返回成功");
                })
                .catch(e=>{
                    console.log(e)
                })
        })
    }


    /*发货单详情中所有的数据*/
    @action invoiceDetailAllData=(theid)=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myinvoiceDetailAllData)
                .then(resp=>{
                    console.log(resp.data.data);
                    this.myinvoiceDetailAllDataList=resp.data.data;
                    resolve("支付信息返回成功");
                })
                .catch(e=>{
                    console.log(e)
                })
        })
    }


    /*订单列表的详情页所有数据*/
    @action orderDetailAllData=(theid)=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myorderDetailAllData)
                .then(resp=>{
                    console.log(resp.data.data);
                    this.myorderDetailAllDataList=resp.data.data;
                    resolve("支付信息返回成功");
                })
                .catch(e=>{
                    console.log(e)
                })
        })
    }


    /*退货单详情页所有信息*/
    @action returnDetailAllData=(theid)=>{
        return new Promise((resolve,reject)=>{
            Axios.get(Api.the_order.myreturnDetailAllData)
                .then(resp=>{
                    console.log(resp.data.data);
                    this.myreturnDetailAllDataList=resp.data.data;
                    resolve("支付信息返回成功");
                })
                .catch(e=>{
                    console.log(e)
                })
        })
    }
}