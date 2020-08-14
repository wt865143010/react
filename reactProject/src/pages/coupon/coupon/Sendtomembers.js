import React, { Component } from 'react';
import './Sendtomembers.css'
import { Tabs,DatePicker,Checkbox,Table,Space,Row } from 'antd';
import {inject,observer} from "mobx-react";
import { Link } from 'react-router-dom'

import {toJS} from 'mobx'


const { TabPane } = Tabs;

// function callback(key) {
//   console.log(key);
// }

//   const Demo = () => (
//     <Tabs defaultActiveKey="1" onChange={callback}>
//       <TabPane tab="Tab 1" key="1">
//         Content of Tab Pane 1
//       </TabPane>
//       <TabPane tab="Tab 2" key="2">
//         Content of Tab Pane 2
//       </TabPane>
//       <TabPane tab="Tab 3" key="3">
//         Content of Tab Pane 3
//       </TabPane>
//     </Tabs>
//   );



@inject('coupon')

@observer
class Sendtomembers extends Component {
    constructor(){
        super();
        this.state={
            couponlist:[
                {
                    couponID:'123456',
                    couponnme:'1234657',
                    fixedAmount:'+100',
                    effectiveDate:'5个月内',
                }
            ],
            storedata:[
                {
                    storeId:'1',
                    storename:'上海店',
                    storeEname:'SH',
                    belong:'上海分公司',
                    storetype:'形象店',
                    isDirectStore:'是',
                },
                {
                    storeId:'1',
                    storename:'上海店',
                    storeEname:'SH',
                    belong:'上海分公司',
                    storetype:'形象店',
                    isDirectStore:'是',
                }
            ],  //店铺数据

            productrange:[
                {
                    OptionalProductName:'产品1',
                    
                },
                {
                    OptionalProductName:'产品2',
                    
                }

            ],

            userdata:[],
            suremodel:false,
            deleteuser:'',
            sendrecord:[],
            receivedata:[], //接收到的数据
            isproductshow:false, //添加产品模态框控制
            isshopshow:false,//添加店铺模态框控制
            project:'', //选择前端项目
            addproductdata:[      {
                key:1,
                OptionalProductName:'geLOC Me新智我仪器套装 ageLOC Me Device Kit',
                propertytype:'智芯组合产品',
                
              },{
                key:2,
                OptionalProductName:'asdasdasd',
                propertytype:'智芯组合产品',
                
              }],//添加商品搜索商品的数据
            choiceproduct:[],//选择后的商品数据
            choiceshop:[], //选择后的门店数据
            expandtype:'', //拓展属性列表
            coupontype:'', //选择标签
            attribute:'',//选择属性
            productnumber:'', //产品编号
            productname:'',//产品名称
            chooseproductitem:[],//多选产品
            userlogintimestrat:'', //用户注册开始时间
            userlogintimeend:'', //用户注册结束时间
            oncardstart:'',//开卡开始时间
            oncardend:'',//开卡结束时间
            onactivationstart:'',//激活开始时间
            onactivationend:'', //激活结束时间
            onsignstart:'', //签约开始时间
            onsignend:'',//签约结束时间
            shoppingpointsstart:'',//购物积分开始
            shoppingpointsend:'', //购物积分结束
            chooseusergrade:[], // 选择用户等级
            customertype:[],//选择用户类型
            chooseuserrank:[],//选择用户职级
            chooseuserrankhistory:[], //选择用户最高职级
            ordertart:'', //订单开始时间
            orderend:'', //订单结束时间
            deliveryproductdata:[],//需要传送的产品数据
            Symbol:'==',//数学符号
            directselling:'',//获取直销大区
            region:'',//获取地区
            shopid:'', //门店编号
            shopname:'',//门店名称


            addshopdata:[], //搜索后的门店信息

            
        }
    }


    UNSAFE_componentWillMount(){
        
        this.state.receivedata = toJS(this.props.coupon.receivedata)
        this.props.coupon.getsendcoupondata(this.props.history.location.state.record)//获取优惠券信息
        console.log(this.state.receivedata)
        this.props.coupon.getalluser(1,10) //获取第一页用户的信息
        this.state.userdata = toJS(this.props.coupon.userdata)
        console.log(this.state.userdata)
    }
    callback=(key)=> {
        console.log(key);
    }

    price(){

    }


    //注册时间
    onloginstart(date, dateString){
        console.log(dateString)
        this.state.userlogintimestrat = dateString
    }
    onloginend(date, dateString){
        console.log(dateString)
        this.state.userlogintimeend = dateString
    }

    //开卡时间
    oncardstart(date, dateString){
        console.log(dateString)
        this.state.oncardstart = dateString
    }
    oncardend(date, dateString){
        console.log(dateString)
        this.state.oncardend = dateString
    }

    //激活时间
    onactivationstart(date, dateString){
        console.log(dateString)
        this.state.onactivationstart = dateString
    }
    onactivationend(date, dateString){
        console.log(dateString)
        this.state.onactivationend = dateString
    }


    //签约时间
    onsignstart(date, dateString){
        console.log(dateString)
        this.state.onsignstart = dateString
    }
    onsignend(date, dateString){
        console.log(dateString)
        this.state.onsignend = dateString
    }


    //订单时间
    onordertart(data,dataString){
        this.state.ordertart = dataString
    }
    onorderend(data,dataString){
        this.state.orderend = dataString
    }

    //发送时间
    sendtime(data,dataString){

    }






    clearuser(data){
        console.log(data)
        console.log(this)
        this.setState({
            suremodel:true,
            deleteuser:data,
        })
    }

    closemodel(){
        console.log('-+-+-+-+-+')
        this.setState({
            suremodel:false,
            
        })
    }

    //选择前端项目
    chooseproject(e){
        this.state.project = e.target.value
    }

    //选择拓展属性列表
    expandtype(e){
        this.state.expandtype = e.target.value
    }

    //coupontype
    coupontype(e){
        this.state.coupontype = e.target.value
    }

    //选择属性
    attribute(e){
        this.state.attribute = e.target.value
    }

    //打开选择产品模态框
    openproduct(){
        this.setState({
            isproductshow:true
        })
    }


    //关闭选择产品模态框
    closeaddproduct(){
        this.setState({
            isproductshow:false
        })
    }

    //产品编号
    productnumber(e){
        this.state.productnumber = e.target.value
    }

    //产品名称
    productname(e){
        this.state.productname = e.target.value
    }

    //查询产品
    searchproduct(){
        let data = {
            'project':this.state.project,
            'expandtype':this.state.expandtype,
            'coupontype':this.state.coupontype,
            'attribute':this.state.attribute,
            'productnumber':this.state.productnumber,
            'productname':this.state.productname
        }
        console.log(data)
        this.props.coupon.sendpagesearchproduct(data)
        .then(data=>{
            this.setState({
                addproductdata:data
            })
            // this.state.addproductdata = data
        })
        
    }

    //添加产品到已添加
    chooseproduct(data){
        console.log(data)
        let obj = []
        this.state.choiceproduct.push(data)
        this.setState({
            choiceproduct:this.state.choiceproduct
        })
    }

    //删除全部产品
    alldeleteproduct(){
        this.setState({
            choiceproduct:[]
        })
    }


    //删除这一条产品
    delectthisproduct(data){
        console.log(data)
        let obj = this.state.choiceproduct
        let obj1=obj.filter((item)=>{
            return item.key !== data.key
        })
        this.setState({
            choiceproduct:obj1
        })
        console.log(obj1)
    }

    //多选产品
    chooseproductitem=(e,data)=>{
        console.log(e.target.checked)
        if(e.target.checked==true){
            this.state.chooseproductitem.push(data)
        }else{
            let obj = this.state.chooseproductitem.filter((item)=>{
                return item.key !== data.key
            })
            console.log( obj)
            this.state.chooseproductitem = obj
        }
        
        
        

        
        console.log(this.state.chooseproductitem)
    }


    //删除选择的产品
    deletechoose(){
        let obj = this.state.choiceproduct.concat(this.state.chooseproductitem).filter((v,i,arr)=>{
            // console.log(item)
            
            return arr.indexOf(v) === arr.lastIndexOf(v)
        })
        console.log(obj)
        this.setState({
            choiceproduct:obj
        })
    }

    //选择产品确定
    sendproductdetermine(){
        this.setState({
            productrange:this.state.choiceproduct
        })
        this.setState({
            isproductshow:false
        })
        
    }

    //获取购物积分开始
    changeshoppingpointsstart(e){
        this.state.shoppingpointsstart = e.target.value
    }

    //获取购物积分结束
    changeshoppingpointsend(e){
        this.state.shoppingpointsend = e.target.value
    }


    //选择用户等级
    chooseusergrade(checkedValues){
        console.log(checkedValues)
        this.state.chooseusergrade=checkedValues
        console.log(this.state.chooseusergrade)
    }


    //选择用户类型
    customertype(checkedValues){
        this.state.customertype=checkedValues
    }

    //选择用户职级
    chooseuserrank(checkedValues){
        this.state.chooseuserrank=checkedValues
    }

    //选择历史最高职级
    chooseuserrankhistory(checkedValues){
        this.state.chooseuserrankhistory=checkedValues
    }


    //添加产品数量
    addproductnumber(e,item){
        console.log(e.target.value)
        console.log(item)
        item.symbol = this.state.Symbol
        item.productnumber = e.target.value
        this.state.deliveryproductdata.push(item)


    }

    changeSymbol(e,item){
        console.log(e.target.value)
        this.state.Symbol = e.target.value

    }

    //添加店铺获取直销大区
    directselling(e){
        this.state.directselling = e.target.value
    }

    //获取地区
    region(e){
        this.state.region = e.target.value
    }

    //获取门店编号
    getshopid(e){
        this.state.shopid = e.target.value
    }

    //获取门店名称
    getshopname(e){
        this.state.shopname = e.target.value
    }

    //获取门店类型
    getshoptype(e){
        this.state.shoptype = e.target.value
    }

    //搜索门店
    searchshop(){
        let data = {
            'directselling':this.state.directselling,
            'region':this.state.region,
            'shopid':this.state.shopid,
            'shopname':this.state.shopname,
            'shoptype':this.state.shoptype
        }

        this.props.coupon.sendpagesearchshop(data)
        .then(data=>{
            this.setState({
                addshopdata:data
            })
        })
    }

    //打开门店
    openshop(e){
        this.setState({
            isshopshow:true
        })
    }

    //关闭门店
    closeshop(){
        this.setState({
            isshopshow:false
        })
    }

    //添加门店
    chooseshop(data){
        this.state.choiceshop.push(data)
        this.setState({
            choiceshop:this.state.choiceshop
        })
    }


    render() {
        //添加产品搜索后的表格
        const addproductcolumns=[
            {
                title:'图片',
                dataIndex:'img',
                key:'img',
                render:(record)=>(
                    <img src={record} style={{width:'57px',height:'37px'}} alt=""/>
                )
            },
            {
                title: '产品名称',
                dataIndex: 'OptionalProductName',
                key: 'OptionalProductName',

            },
            {
                title: '扩展属性类型',
                dataIndex: 'propertytype',
                key: 'propertytype',
            },
            {
                title: '全选',
                key: 'action',
                render:(text,record)=>(
                    <Space size="middle">
                        <a onClick={this.chooseproduct.bind(this,record)}>选择</a>
                    </Space>
                )
            },
        ]
        //添加店铺搜索后的表格
        const addshopcolumns=[
            {
                title:'门店编号',
                dataIndex:'shopId',
                key:'shopId',

            },
            {
                title: '门店中文名',
                dataIndex: 'shopcname',
                key: 'shopcname',

            },
            {
                title: '门店英文名',
                dataIndex: 'shopename',
                key: 'shopename',
            },
            {
                title: '所属分公司',
                dataIndex: 'branchoffice',
                key: 'branchoffice',
            },
            {
                title: '门店类型',
                dataIndex: 'shoptype',
                key: 'shoptype',
            },
            {
                title: '门店英文名',
                dataIndex: 'isdirect',
                key: 'isdirect',
            },
            {
                title: '全选',
                key: 'action',
                render:(text,record)=>(
                    <Space size="middle">
                        <a onClick={this.chooseshop.bind(this,record)}>选择</a>
                    </Space>
                )
            },
        ]

        const usercolumns=[
            {
                title: '序号',
                dataIndex: 'serialnumber',
                key: 'serialnumber',
            },
            {
                title: '卡号',
                dataIndex: 'cardID',
                key: 'cardID',
            },
            {
                title: '用户姓名',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: '用户类型',
                dataIndex: 'usertype',
                key: 'usertype',
            },
            {
                title: '手机号码',
                dataIndex: 'phonenumber',
                key: 'phonenumber',
            },
            {
                title: '账号类型',
                dataIndex: 'accounttype',
                key: 'accounttype',
            },
            {
                title: '注册时间',
                dataIndex: 'logintime',
                key: 'logintime',
            },            {
                title: '用户职级',
                dataIndex: 'userposition',
                key: 'userposition',
            },

            {
                title: '参考人编号',
                dataIndex: 'referenceID',
                key: 'referenceID',
            },
            {
                title: '参考人姓名',
                dataIndex: 'referencename',
                key: 'referencename',
            },
            {
                title: '用户状态',
                dataIndex: 'userstate',
                key: 'userstate',
            },
            {
                title: '用户等级',
                dataIndex: 'usergrade',
                key: 'usergrade',
            },
            {
                title: '资格数量',
                dataIndex: 'qualificationsnum',
                key: 'qualificationsnum',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        {/* <a>{this.operation1.bind(this)}</ a> */}
                        {/* <a className='operation1'>{ record.couponstate }</a> */}

                        {/* <a className='operation2' onClick={e=>this.oncouponstate(e)}>禁用</a> */}
                        <span onClick={()=>this.clearuser(record.username)}>移除</span>
                    </Space>
                ),
            },
        ]

        const sendrecord = [
            {
                title: '序号',
                dataIndex: 'serialnumber',
                key: 'serialnumber',
            },
            {
                title: '卡号',
                dataIndex: 'cardID',
                key: 'cardID',
            },
            {
                title: '用户姓名',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: '用户类型',
                dataIndex: 'usertype',
                key: 'usertype',
            },
            {
                title: '手机号码',
                dataIndex: 'phonenumber',
                key: 'phonenumber',
            },
            {
                title: '账号类型',
                dataIndex: 'accounttype',
                key: 'accounttype',
            },
            {
                title: '注册时间',
                dataIndex: 'logintime',
                key: 'logintime',
            },            {
                title: '用户职级',
                dataIndex: 'userposition',
                key: 'userposition',
            },

            {
                title: '参考人编号',
                dataIndex: 'referenceID',
                key: 'referenceID',
            },
            {
                title: '参考人姓名',
                dataIndex: 'referencename',
                key: 'referencename',
            },
            {
                title: '用户状态',
                dataIndex: 'userstate',
                key: 'userstate',
            },
            {
                title: '用户等级',
                dataIndex: 'usergrade',
                key: 'usergrade',
            },
            {
                title: '资格数量',
                dataIndex: 'qualificationsnum',
                key: 'qualificationsnum',
            },
        ]




        let symbol1 = null
        let deletemodel = null;
        let pricenum
        let symbol = this.state.couponlist[0].fixedAmount.split('')[0]
        
        
        if(symbol === '-'){
            let symbol2 = this.state.couponlist[0].fixedAmount.split('-')[1]
            console.log(symbol2)
            pricenum = <span>{symbol2}</span>
            symbol1 = <span>减</span>
        }else{
            let symbol2 = this.state.couponlist[0].fixedAmount.split('+')[1]
            console.log(symbol2)
            pricenum = <span>{symbol2}</span>
            symbol1 = <span>加</span>  
        }



        if(this.state.suremodel === true){
            deletemodel = <div>
                <div className='modeldelete'>
                    <div style={{textAlign:'center',marginTop:'50px'}}>
                        <span style={{fontSize:'14px'}}>确定删除</span>
                        <span style={{fontSize:'16px',color:'red'}}>{this.state.deleteuser}</span>
                    </div>
                    <div className='clearfix'>
                        <div style={{float:'left',marginLeft:'80px',marginTop:'40px',width:'50px',height:'30px',background:'red',textAlign:'center',lineHeight:'30px',borderRadius:'5px',cursor:'pointer'}}>确定</div>
                        <div onClick={this.closemodel.bind(this)} style={{float:'left',marginLeft:'40px',marginTop:'40px',width:'50px',height:'30px',border:'1px solid black',textAlign:'center',lineHeight:'30px',borderRadius:'5px',cursor:'pointer'}}>取消</div>
                    </div>
                    
                </div>
            </div>
        }

        //门店循环
        let storenum = this.state.storedata.map((item,i)=>{
            return (
                <div key={i} className='clearfix' style={{height:'25px',float:'left',marginRight:'15px'}}>
                    <span style={{float:'left'}}>{item.storename}</span>
                    <span style={{float:'left',color:'red',marginLeft:'5px',cursor:'pointer'}}>X</span>
                </div>
            )
        })

        //购买产品范围循环
        let productnum = this.state.productrange.map((item,i)=>{
            return (
                <div key={i} style={{float:'left'}}>
                    <span style={{color:'blue'}}>{item.OptionalProductName}</span>
                    <select onChange={e=>this.changeSymbol(e,item)} style={{width:'46px',height:'22px'}} id="coupontype" >
                                    
                                    <option value="==">==</option>
                                    <option value="!=">!=</option>
                                    <option value=">"> &gt; </option>
                                    <option value="<"> &lt; </option>
                                    <option value=">=">&gt;= </option>
                                    <option value="<=">&lt;= </option>
                    </select>
                    <input onChange={(e)=>this.addproductnumber(e,item)} style={{width:'25px',height:'25px'}}/>
                </div>
            )
        })

        let record = this.state.sendrecord.map((item,i)=>{
            return (
                <div key={i} >
                    
                </div>
            )
        })
        let model = null
        let productlist = null
        let shoplist = null
        let model1 = null
        
        let arr = this.state.choiceproduct.map((item,i)=>{
            return (
                <div key={i} style={{height:'75px',margin:'5px 10px',borderBottom:'1px solid black',position:'relative'}}>
                    <Checkbox style={{}} onChange={e=>this.chooseproductitem(e,item)}></Checkbox>
                    <img style={{}} src={item.src} style={{width:'60px',height:'60px'}}></img>
                    <div  style={{position:'absolute',fontSize:'13px',width:'165px',height:'34px',top:'10px',left:'80px'}}>{item.OptionalProductName}</div>
                    <div onClick={this.delectthisproduct.bind(this,item)} style={{position:'absolute',top:'20px',left:'245px',width:'25px',height:'25px',background:'red',cursor:'pointer',borderRadius:'50%',lineHeight:'25px',textAlign:'center'}}>X</div>
                </div>
            )
        })
        let arr1 = this.state.choiceshop.map((item,i)=>{
            return (
                <div key={i} style={{height:'75px',margin:'5px 10px',borderBottom:'1px solid black',position:'relative'}}>
                    <Checkbox style={{}} onChange={e=>this.chooseproductitem(e,item)}></Checkbox>
                    <img style={{}} src={item.src} style={{width:'60px',height:'60px'}}></img>
                    <div  style={{position:'absolute',fontSize:'13px',width:'165px',height:'34px',top:'10px',left:'80px'}}>{item.OptionalProductName}</div>
                    <div onClick={this.delectthisproduct.bind(this,item)} style={{position:'absolute',top:'20px',left:'245px',width:'25px',height:'25px',background:'red',cursor:'pointer',borderRadius:'50%',lineHeight:'25px',textAlign:'center'}}>X</div>
                </div>
            )
        })

        if(this.state.choiceproduct.length >= 0){
            productlist = 
            <div>
                <div style={{margin:'5px 10px',borderBottom:'1px solid black'}}>
                    <span onClick={this.deletechoose.bind(this)} style={{color:'rgb(140,164,213)',cursor:'pointer'}}>批量删除</span>
                    <span onClick={this.alldeleteproduct.bind(this)} style={{color:'rgb(140,164,213)',marginLeft:'40px',cursor:'pointer'}}>全部删除</span>
                </div>
                <div>
                    {arr}
                </div>
            </div>
        }

        if(this.state.choiceshop.length >= 0){
            shoplist = 
            <div>
                <div style={{margin:'5px 10px',borderBottom:'1px solid black'}}>
                    <span onClick={this.deletechoose.bind(this)} style={{color:'rgb(140,164,213)',cursor:'pointer'}}>批量删除</span>
                    <span onClick={this.alldeleteproduct.bind(this)} style={{color:'rgb(140,164,213)',marginLeft:'40px',cursor:'pointer'}}>全部删除</span>
                </div>
                <div>
                    {arr1}
                </div>
            </div>
        }
        if(this.state.isproductshow === true){
            model=
               <div style={{height:'518px',width:'914px',position:'fixed',top:'60px',left:'270px',zIndex:'500',background:'white'}} className='productshow'>
                   <div className='clearfix' style={{height:'50px',lineHeight:'50px',background:'rgb(215,215,215)'}}>
                       <span style={{fontWeight:'700',fontSize:'18px',marginLeft:'15px'}}>产品选择</span>
                       <span onClick={this.closeaddproduct.bind(this)} style={{float:'right',marginRight:'15px',cursor:'pointer'}}>关闭</span>
                   </div>
                   <div className='clearfix' style={{marginTop:'10px'}}>
                       <div style={{float:'left'}}>
                           <div style={{background:'rgb(242,242,242)',width:'594px',height:'87px',marginLeft:'10px'}}>
                               <div style={{paddingTop:'15px',marginBottom:'15px'}}>
                                   <span style={{fontSize:'14px',fontWeight:'700'}}>产品过滤:</span>
                                   <select onChange={this.chooseproject.bind(this)} style={{width:'140px',height:'22px',margin:'0 5px'}} >
                                       <option value="-1">请选择前端类目</option>
                                       <option value="0">ageLOC Me</option>
                                       <option value="1">---- 预见套</option>
                                   </select>
                                   <select onChange={this.expandtype.bind(this)} style={{width:'117px',height:'22px',margin:'0 5px'}} >
                                       <option value="-1">扩展属性类型</option>
                                       <option value="0">智芯精华</option>
                                       <option value="1">ageLOC Me 设备</option>
                                       <option value="2">化妆品</option>
                                       <option value="3">蜜儿餐</option>
                                   </select>
                                   <select onChange={this.coupontype.bind(this)} style={{width:'115px',height:'22px',margin:'0 5px'}} >
                                       <option value="-1">请选择标签</option>
                                       <option value="0">热卖</option>
                                       <option value="1">推荐</option>
                                       <option value="2">新品</option>
                                       <option value="3">推荐</option>
                                   </select>
                                   <select onChange={this.attribute.bind(this)} style={{width:'115px',height:'22px',margin:'0 5px'}} >
                                       <option value="-1">请选择属性</option>
                                       <option value="0">功效</option>
                                       <option value="1">---- 补水</option>
                                       <option value="2">---- 保湿</option>
                                       <option value="3">性别</option>
                                       <option value="4">---- 女</option>
                                       <option value="5">---- 男</option>
                                       <option value="6">---- 通用</option>
                                   </select>
                               </div>
                               <div>
                                   <span style={{fontSize:'14px',fontWeight:'700'}}>产品编号:</span>
                                   <input onChange={this.productnumber.bind(this)} style={{width:'114px',height:'25px',marginLeft:'10px',marginRight:"10px"}} />
                                   <span style={{fontSize:'14px',fontWeight:'700'}}>产品名称:</span>
                                   <input onChange={this.productname.bind(this)} style={{width:'227px',height:'25px',marginLeft:'10px',marginRight:"10px"}} />
                                   <button onClick={this.searchproduct.bind(this)} style={{width:'71px',height:'30px',background:'rgb(22,155,213)',color:'white',borderRadius:'5px',border:'none'}}>查询</button>
                               </div>
                           </div>
                           <div style={{width:'599px'}}>
                               <Table dataSource={this.state.addproductdata} columns={addproductcolumns} />;
                           </div>
                       </div>
                       <div style={{float:'right',width:'298px',height:'386px',background:'rgb(204,230,230)'}}>
                           {productlist}
                       </div>

                   </div>
                   <div className='clearfix' style={{height:'50px',background:'rgb(215,215,215)'}}>
                       <div onClick={this.closeaddproduct.bind(this)} style={{float:'right',width:'140px',height:'40px',lineHeight:'40px',textAlign:'center',marginTop:'5px',background:'rgb(22,155,213)',marginRight:'10px',borderRadius:'8px'}}>取消</div>
                       <div onClick={this.sendproductdetermine.bind(this)} style={{float:'right',width:'140px',height:'40px',borderRadius:'8px',background:'white',marginTop:'5px',lineHeight:'40px',textAlign:'center',marginRight:'10px'}}>确定</div>
                   </div>

               </div>
           
       }

       if(this.state.isshopshow == true){
           model1 = 
           <div style={{height:'518px',width:'914px',position:'fixed',top:'60px',left:'270px',zIndex:'500',background:'white'}} className='productshow'>
           <div className='clearfix' style={{height:'50px',lineHeight:'50px',background:'rgb(215,215,215)'}}>
               <span style={{fontWeight:'700',fontSize:'18px',marginLeft:'15px'}}>选择门店</span>
               <span onClick={this.closeshop.bind(this)} style={{float:'right',marginRight:'15px',cursor:'pointer'}}>关闭</span>
           </div>
           <div className='clearfix' style={{marginTop:'10px'}}>
               <div style={{float:'left'}}>
                   <div style={{background:'rgb(242,242,242)',width:'594px',height:'87px',marginLeft:'10px'}}>
                       <div style={{paddingTop:'15px',marginBottom:'15px'}}>
                           <span style={{fontSize:'14px',fontWeight:'700'}}>产品过滤:</span>
                           <select onChange={this.directselling.bind(this)} style={{width:'140px',height:'22px',margin:'0 5px'}} >
                               <option value="-1">所有直销大区</option>
                               <option value="0">黑辽吉晋鲁</option>
                               <option value="1">京津冀</option>
                               <option value="2">粤桂琼闽</option>
                               <option value="3">湘鄂赣豫皖</option>
                               <option value="4">滇黔渝川藏</option>
                           </select>
                           <select  style={{width:'117px',height:'22px',margin:'0 5px'}} >
                               
                               <option value="0">所有分公司</option>

                           </select>
                           <select onChange={this.region.bind(this)} style={{width:'115px',height:'22px',margin:'0 5px'}} >
                               <option value="-1">所有省市区</option>
                               <option value="0">上海/上海/徐汇区</option>
                         

                           </select>
                       </div>
                       <div>
                           <span style={{fontSize:'14px',fontWeight:'700'}}>门店编号:</span>
                           <input onChange={this.getshopid.bind(this)} style={{width:'114px',height:'25px',marginLeft:'10px',marginRight:"10px"}} />
                           <span style={{fontSize:'14px',fontWeight:'700'}}>门店名称:</span>
                           <input onChange={this.getshopname.bind(this)} style={{width:'118px',height:'25px',marginLeft:'10px',marginRight:"10px"}} />
                           <span style={{fontSize:'14px',fontWeight:'700'}}>门店类型:</span>
                           <select onChange={this.getshoptype.bind(this)} style={{width:'115px',height:'22px',margin:'0 5px'}} >
                               <option value="-1">全部</option>
                               <option value="0">形象店</option>
                               <option value="0">时尚店</option>
                           </select>
                           <button onClick={this.searchshop.bind(this)} style={{width:'71px',height:'30px',background:'rgb(22,155,213)',color:'white',borderRadius:'5px',border:'none'}}>查询</button>
                       </div>
                   </div>
                   <div style={{width:'599px'}}>
                       <Table dataSource={this.state.addshopdata} columns={addshopcolumns} />;
                   </div>
               </div>
               <div style={{float:'right',width:'298px',height:'386px',background:'rgb(204,230,230)'}}>
                   {shoplist}
               </div>

           </div>
           <div className='clearfix' style={{height:'50px',background:'rgb(215,215,215)'}}>
               <div onClick={this.closeshop.bind(this)} style={{float:'right',width:'140px',height:'40px',lineHeight:'40px',textAlign:'center',marginTop:'5px',background:'rgb(22,155,213)',marginRight:'10px',borderRadius:'8px'}}>取消</div>
               <div onClick={this.sendproductdetermine.bind(this)} style={{float:'right',width:'140px',height:'40px',borderRadius:'8px',background:'white',marginTop:'5px',lineHeight:'40px',textAlign:'center',marginRight:'10px'}}>确定</div>
           </div>

       </div>
       }
   




        return (
            <div className='sendpagebox'>
                {model}
                {model1}
                <h3  className='title' style={{fontWeight:'700',fontSize:'20px'}}>发送给会员</h3>
                <div className='line'></div>
                <div style={{fontWeight:'700',fontSize:'20px',color:'black'}} className='couponname'>优惠券信息 【{this.state.couponlist[0].couponID}】</div>
                <div style={{width:'263px',height:'165px',border:'1px solid black',marginTop:'10px'}}>
                    <div style={{height:'24px',textAlign:'center',marginTop:'5px',fontWeight:'700',fontSize:'20px',color:'black'}}>
                        {this.state.couponlist[0].couponnme}
                    </div>
                    <div>
                        <div>
                            {symbol1}￥{pricenum}
                            
                        </div>
                        <div>有效期:{this.state.couponlist[0].effectiveDate}</div>
                        <div>使用限制:{}</div>
                    </div>
                </div>
                <h3  className='title' style={{fontWeight:'700',fontSize:'20px',marginTop:'20px'}}>接收用户信息</h3>
                <div className='line' style={{marginBottom:'10px'}}>
                <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                    <TabPane tab="指定接收用户条件" key="1">
                        <div>
                            <div style={{width:'952px',height:'30px',background:'rgb(86,181,221)',lineHeight:'30px',border:'1px solid rgba(0,0,0,0.65)'}}>
                                用户信息
                            </div>
                            <div className='clearfix'>
                                <div className='titlename'>注册时间：</div>
                                <div style={{width:'356px',height:'30px',float:'left',border:'1px solid rgba(0,0,0,0.65)'}}>
                                    <DatePicker style={{marginLeft:'10px'}} className='timeinput' onChange={this.onloginstart.bind(this)} />-
                                    <DatePicker className='timeinput' onChange={this.onloginend.bind(this)} />
                                </div>
                                <div className='titlename'>开卡时间：</div>
                                <div style={{width:'356px',height:'30px',float:'left',border:'1px solid rgba(0,0,0,0.65)'}}>
                                    <DatePicker style={{marginLeft:'10px'}} className='timeinput' onChange={this.oncardstart.bind(this)} />-
                                    <DatePicker className='timeinput' onChange={this.oncardend.bind(this)} />
                                </div>
                            </div>
                            <div className='clearfix'>
                                <div className='titlename'>激活时间：</div>
                                <div style={{width:'356px',height:'30px',float:'left',border:'1px solid rgba(0,0,0,0.65)'}}>
                                    <DatePicker style={{marginLeft:'10px'}} className='timeinput' onChange={this.onactivationstart.bind(this)} />-
                                    <DatePicker className='timeinput' onChange={this.onactivationend.bind(this)} />
                                </div>
                                <div className='titlename'>签约时间：</div>
                                <div style={{width:'356px',height:'30px',float:'left',border:'1px solid rgba(0,0,0,0.65)'}}>
                                    <DatePicker style={{marginLeft:'10px'}} className='timeinput' onChange={this.onsignstart.bind(this)} />-
                                    <DatePicker className='timeinput' onChange={this.onsignend.bind(this)} />
                                </div>
                            </div>
                            <div className='clearfix'>
                                <div className='titlename'>购物积分：</div>
                                <div style={{width:'356px',height:'30px',float:'left',border:'1px solid rgba(0,0,0,0.65)'}}>
                                    <input onChange={this.changeshoppingpointsstart.bind(this)} className='integralinput'style={{marginLeft:'10px'}} />-<input onChange={this.changeshoppingpointsend.bind(this)} className='integralinput' />
                                </div>
                                <div className='titlename'>用户等级：</div>
                                <div style={{width:'356px',height:'30px',float:'left',border:'1px solid rgba(0,0,0,0.65)'}}>
                                    <Checkbox.Group onChange={this.chooseusergrade.bind(this)}>
                                        
                                    <Row>
                                        <Checkbox value='零售顾客'>零售顾客</Checkbox>
                                        <Checkbox value='优惠顾客'>优惠顾客</Checkbox>
                                        <Checkbox value='星级顾客'>星级顾客</Checkbox>
                                        </Row>
                                    </Checkbox.Group>
                                </div>
                            </div>
                            <div className='clearfix'>
                                <div className='titlename'>用户类型：</div>
                                <div style={{width:'832px',height:'30px',border:'1px solid rgba(0,0,0,0.65)',float:'left'}}>
                                    <Checkbox.Group onChange={this.customertype.bind(this)}>
                                        <Checkbox value='Retail'>Retail</Checkbox>
                                        <Checkbox value='PC'>PC</Checkbox>
                                        <Checkbox value='NFT'>NFT</Checkbox>
                                        <Checkbox value='DS'>DS</Checkbox>
                                        <Checkbox value='IM'>IM</Checkbox>
                                    </Checkbox.Group>

                                </div>
                            </div>
                            <div className='clearfix'>
                                <div className='titlename'>用户职级：</div>
                                <div style={{width:'832px',height:'30px',border:'1px solid rgba(0,0,0,0.65)',float:'left'}}>
                                    <Checkbox.Group onChange={this.chooseuserrank.bind(this)}>
                                        <Checkbox value='业务员'>业务员</Checkbox>
                                        <Checkbox value='高级业务员'>高级业务员</Checkbox>
                                        <Checkbox value='业务员经理'>业务员经理</Checkbox>
                                    </Checkbox.Group>
                                </div>
                            </div>
                            <div className='clearfix'>
                                <div className='titlename'>历史最高职级：</div>
                                <div style={{width:'832px',height:'30px',border:'1px solid rgba(0,0,0,0.65)',float:'left'}}>
                                <Checkbox.Group onChange={this.chooseuserrankhistory.bind(this)}>
                                        <Checkbox value='业务员'>业务员</Checkbox>
                                        <Checkbox value='高级业务员'>高级业务员</Checkbox>
                                        <Checkbox value='业务员经理'>业务员经理</Checkbox>
                                    </Checkbox.Group>
                                </div>
                            </div>
                            <div className='clearfix'>
                                <div className='titlename'>入职店铺：</div>
                                <div className='clearfix' style={{width:'832px',height:'30px',border:'1px solid rgba(0,0,0,0.65)',float:'left'}}>
                                    {storenum}

                                    <div onClick={this.openshop.bind(this)} className='addstore'>添加</div>
                                </div>
                            </div>
                            <div style={{width:'952px',height:'30px',background:'rgb(86,181,221)',lineHeight:'30px',border:'1px solid rgba(0,0,0,0.65)'}}>
                                订单信息
                            </div>
                            <div className='clearfix'>
                                <div className='titlename'>时间范围：</div>
                                <div style={{width:'832px',height:'30px',border:'1px solid rgba(0,0,0,0.65)',float:'left'}}>
                                    <DatePicker style={{marginLeft:'10px'}} className='timeinput' onChange={this.onordertart.bind(this)} />-
                                    <DatePicker className='timeinput' onChange={this.onorderend.bind(this)} />
                                </div>
                            </div>
                            <div className='clearfix'>
                                <div className='titlename'>购买产品范围：</div>
                                <div style={{width:'832px',height:'30px',border:'1px solid rgba(0,0,0,0.65)',float:'left'}}>
                                    {productnum}
                                    <div onClick={this.openproduct.bind(this)} className='addstore'>添加</div>
                                </div>
                            </div>

                        </div>
                        <div className='clearfix button'>
                            <div style={{background:'rgb(22,155,213)',width:'90px',height:'30px',borderRadius:'6px',textAlign:'center',lineHeight:'30px',float:'left',color:'white',margin:'0px 8px'}}>加入条件</div>
                            <div style={{width:'90px',height:'30px',borderRadius:'6px',textAlign:'center',lineHeight:'30px',float:'left',background:'rgb(153,153,153)',color:'white',margin:'0px 8px'}}>清空所有条件</div>
                        </div>
                        <div className='condition'>

                        </div>
                        <h3  className='title' style={{fontWeight:'700',fontSize:'20px'}}>发送给会员</h3>
                        <div className='line'></div>
                        <div className='sendbox'>
                            <span>发送时间：</span>
                            <DatePicker className='timeinput' onChange={this.sendtime.bind(this)} />

                            <span style={{marginLeft:'40px'}}>发送数量：</span>
                            <input className='sendnumber' />

                            <span style={{marginLeft:'40px'}}>循环发送规则：</span>
                            <select ref={this.state.coupontype} style={{width:'100px',height:'22px'}} id="coupontype" >
                                    <option value="0">一次性</option>
                                    <option value="1">每月</option>
                                    <option value="2"> 每年 </option>

                            </select>
                        </div>

                        <div className='sendbotton clearfix'>
                            <div className='suresend' style={{background:'rgb(22,155,213)',color:'white'}}>保存确认</div>
                            <div className='suresend' style={{border:'1px solid black',marginLeft:'60px'}}>返回列表</div>
                        </div>

                    </TabPane>
                    <TabPane tab="指定固定用户" key="2">
                         <div className='clearfix'>
                             <span>卡号：</span>
                             <input className='cardnumberbox' />
                             <span style={{marginLeft:'40px'}}>用户姓名：</span>
                             <input className='cardnumberbox' />
                             <span style={{marginLeft:'40px'}}>手机号码：</span>
                             <input className='cardnumberbox' />
                             <span style={{marginLeft:'40px'}}>手机号码：</span>
                             <select ref={this.state.coupontype} style={{width:'83px',height:'22px'}} id="coupontype" >
                                    <option value="0">临时</option>
                                    <option value="1">正常</option>
                                    <option value="2"> 不活动 </option>
                                    <option value="3"> 终止 </option>
                            </select>
                            
                            <div className='tab2_botton' style={{marginRight:'300px'}}>导入用户</div>
                            <div className='tab2_botton' style={{marginRight:'50px'}}>搜索</div>
                            
                         </div>
                         <div>
                            <Table dataSource={this.state.userdata} columns={usercolumns} />
                         </div>
                         {deletemodel}

                         <div className='clearfix'>
                             <div style={{background:'rgb(22,155,213)',color:'white'}} className='bottombutton'>立即发送</div>
                            <Link to='/Couponlist'>
                                <div style={{border:'1px solid black',marginLeft:'50px'}} className='bottombutton'>返回列表</div>
                            </Link>
                             
                         </div>
                    </TabPane>
                    <TabPane tab="查看发送记录" key="3">
                        <div>
                            <p style={{fontWeight:'700',fontSize:'18px',color:'black'}}>已接收用户列表</p>
                            <div>
                                <span>卡号：</span>
                                <input style={{width:'130px',height:'25px'}}/>
                                <span style={{marginLeft:'30px'}}>用户姓名：</span>
                                <input style={{width:'130px',height:'25px'}}/>
                                <span style={{marginLeft:'30px'}}>手机号码：</span>
                                <input style={{width:'130px',height:'25px'}}/>
                                <div style={{marginRight:'350px',background:'rgb(22,155,213)',color:'white'}} className='exportbotton'>导出用户</div>
                                <div style={{background:'rgb(22,155,213)',color:'white',marginRight:'50px'}} className='exportbotton'>搜索</div>
                            </div>
                            <div>
                                <Table dataSource={this.state.userdata} columns={sendrecord} />
                            </div>
                            <p style={{fontWeight:'700',fontSize:'18px',color:'black'}}>发送记录</p>
                            <div className='sendrecord'>
                                <textarea style={{width:'1000px'}}>

                                </textarea>
                            </div>
                        </div>
                         
                         
                    </TabPane>
                </Tabs>
                </div>
                <div className="adwqwd" style={{marginTop:'70px'}}>

                    
                </div>
            </div>
        );
    }
}

export default Sendtomembers;