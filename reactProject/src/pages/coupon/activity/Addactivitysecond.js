import React, { Component } from 'react';
import './addactivitysecond.css'
import { Table, Button,Checkbox,Pagination,Space } from 'antd';
import {Link} from 'react-router-dom'
import Search from 'antd/lib/input/Search';
import {inject,observer} from "mobx-react";




@inject('coupon')

@observer
class Addactivitysecond extends Component {
    constructor(){
        super()
        this.state={
            productdata:[
                {
                    key:'1',
                    productnumber:'12456',
                    productname:'123456',
                    sellingprice:'零售顾客折扣：￥100.00',
                    num:1000
                },
                {
                    key:'2',
                    productnumber:'456789',
                    productname:'123456',
                    sellingprice:'零售顾客折扣：￥100.00',
                    num:1000
                },
                {
                    key:'3',
                    productnumber:'11111',
                    productname:'123456',
                    sellingprice:'零售顾客折扣：￥100.00',
                    num:1000
                }
            ],
            temporary:[],
            acitivitytype:'',
            addedproduct:[],//添加后产品
            isproductshow:false, //控制模态框
            addproductdata:[
                {
                    key:1,
                    productnumber:'123',
                    productname:'geLOC Me新智我仪器套装 ageLOC Me Device Kit',
                    propertytype:'智芯组合产品',
                    
                  }
            ], //搜索后的产品
            project:'', //选择前端项目
            expandtype:'', //拓展属性列表
            coupontype:'', //选择标签
            attribute:'',//选择属性
            productnumber:'', //产品编号
            productname:'',//产品名称
            mainproductnumber:'',//主table产品编号
            mainproductname:'', //主table产品名称
            
        }
    }


    UNSAFE_componentWillMount(){
        console.log(this.props.location.query.type)
        let type = parseInt(this.props.location.query.type)
        if(type == 0){
            this.setState({
                acitivitytype:'Discountpromotion'
            })
        }else if(type == 1){
            this.setState({
                acitivitytype:'Priceincrease'
            })
        }else if(type == 2){
            this.setState({
                acitivitytype:'Fullgift'
            })
        }else{
            this.setState({
                acitivitytype:'specialpromotion'
            })
        }
        
    }

    choose=(data,e)=>{
        // console.log(e.target.checked)

        let productnumberstate = {
            key:data
        }
        if(e.target.checked === true){
            this.state.temporary.push(productnumberstate)
            // console.log(this.state.temporary)
        }else{
            
            this.state.temporary.splice(data.key-1,1)
            // console.log(this.state.temporary)
        }
        // console.log(this.state.temporary)
    }

    delete=()=>{
        console.log(123456)
        let newdata;
        // console.log(this.state.temporary[0])
        for(let i = 0; i < this.state.temporary.length; i++){
            console.log(this.state.temporary[i].key-1)
            this.state.productdata.splice(this.state.temporary[i].key-1,1)
            console.log(this.state.productdata)
            // console.log(newdata)

            // console.log(this.state.productdata)
        }
        newdata = this.state.productdata
        console.log(newdata)


        // let a =  this.state.productdata.filter((item,i)=>{
        //     console.log(item)
        //     console.log(this.state.temporary)
        //     return item.key != this.state.temporary[0]   
        // })
        // console.log(a)

        this.setState({
            productdata:newdata 
        })
    }

    //打开模态框
    openmodel(e){
        this.setState({
            isproductshow:true
        })
    }

    //关闭模态框
    closeaddproduct(e){
        this.setState({
            isproductshow:false
        })
    }


    //添加产品
    addproduct(record){
        let obj = this.state.addedproduct
        obj.push(record)
        this.setState({
            addedproduct:obj
        })
    }

    //删除所有添加的产品
    deleteall(e){
        this.setState({
            addedproduct:[]
        })
    }

    //删除一项产品
    deleteitem(data){
        let obj = this.state.addedproduct
        let obj1=obj.filter((item)=>{
            return item.key !== data.key
        })
        this.setState({
            addedproduct:obj1
        })
    }

    //确定保存
    determineadd(){
        this.setState({
            productdata:this.state.addedproduct
        })
    }

    //添加库存
    changeactivitystock(e,data){
        
        console.log(e.target.value)
        console.log(data)
        
        for(let item in this.state.productdata){
            console.log(item)
            if(this.state.productdata[item].productnumber == data.productnumber){
                this.state.productdata[item].num = e.target.value
            }
            console.log(this.state.productdata[item])
        }
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
    //产品编号
    productnumber(e){
        this.state.productnumber = e.target.value
    }

    //产品名称
    productname(e){
        this.state.productname = e.target.value
    }

    //搜索产品
    searchproduct(){
        let data={
            'project':this.state.project,
            'expandtype':this.state.project,
            'coupontype':this.state.coupontype,
            'attribute':this.state.attribute,
            'productnumber':this.state.productnumber,
            'productname':this.state.productname
        }

        this.props.coupon.addactivitysearchproduct(data)
    }

    //主table搜索产品编号
    mainproductnumber(e){
        this.state.mainproductnumber = e.target.value
    }


    //主table搜索产品名称
    mainproductname(e){
        this.state.mainproductname = e.target.value
    }

    //主table搜索
    mainsearch(e){
        let data ={
            'productnumber':this.state.mainproductnumber,
            'productname':this.state.mainproductname
        }

        this.props.coupon.addactivitysecondmainsearch(data)
        .then(res=>{
            this.setState({
                productdata:res
            })
        })
    }

    
    render() {
        console.log(this.state.acitivitytype)
        const columns = [
            {
                title: '选择',
                key:'action',
                render:(record)=>(
                        <Checkbox onChange={this.choose.bind(this,record.key)}></Checkbox>
                    
                )
            },
            {
              title: '产品编号',
              dataIndex: 'productnumber',
              key:'productnumber',
            },
            {
              title: '产品名称',
              dataIndex: 'productname',
              key:'productname',
            },
            {
              title: '活动库存',
              key:'activitystock',
              render:(record)=>{
                  return (
                      <input onChange={(e)=>this.changeactivitystock(e,record)} placeholder='1000' style={{width:'90px',height:'25px'}}/>
                  )
              }
            },
            {
                title: '销售价格',
                dataIndex: 'sellingprice',
                key:'sellingprice',
              },
          ];

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
                        <a onClick={this.addproduct.bind(this,record)}>选择</a>
                    </Space>
                )
            },
          ]

          let model=null;
          let productlist=null;
          let arr = this.state.addedproduct.map((item,i)=>{
            return (
                <div key={i} style={{height:'75px',margin:'5px 10px',borderBottom:'1px solid black',position:'relative'}}>
                    <Checkbox style={{}} onChange={this.chooseproductitem}></Checkbox>
                    <img style={{}} src={item.src} style={{width:'60px',height:'60px'}}></img>
                    <div style={{position:'absolute',fontSize:'13px',width:'165px',height:'34px',top:'10px',left:'80px'}}>{item.OptionalProductName}</div>
                    <div onClick={this.deleteitem.bind(this,item)} style={{position:'absolute',top:'20px',left:'245px',width:'25px',height:'25px',background:'red',cursor:'pointer',borderRadius:'50%',lineHeight:'25px',textAlign:'center'}}>X</div>
                </div>
            )
        })


        if(this.state.addedproduct.length >= 0){
            productlist = 
            <div>
                <div style={{margin:'5px 10px',borderBottom:'1px solid black'}}>
                    <span style={{color:'rgb(140,164,213)',cursor:'pointer'}}>批量删除</span>
                    <span onClick={this.deleteall.bind(this)} style={{color:'rgb(140,164,213)',marginLeft:'40px',cursor:'pointer'}}>全部删除</span>
                </div>
                <div>
                    {arr}
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
                            <div onClick={this.determineadd.bind(this)}  style={{float:'right',width:'140px',height:'40px',borderRadius:'8px',background:'white',marginTop:'5px',lineHeight:'40px',textAlign:'center',marginRight:'10px'}}>确定</div>
                        </div>

                    </div>
                
            }

        return (
            
            <div className='secondbox'>
                {model}
                <div style={{height:'51px',marginTop:'40px',marginLeft:'20px'}} className='clearfix'>
                    <div  className='addstep'>1</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div style={{background:'rgb(153,153,153)'}} className='addstep'>2</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div className='addstep'>3</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div className='addstep'>4</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div className='addstep'>5</div>
                </div>
                <div style={{marginTop:'10px'}}>
                    <span style={{marginLeft:'19px'}} className='text1'>基本信息</span>
                    <span className='text1 jianju'>促销产品</span>
                    <span className='text1 jianju'>促销方案</span>
                    <span className='text1 jianju'>用户范围</span>
                    <span className='text1 jianju'>设置完成</span>
                </div>
                <div style={{marginTop:'20px',marginLeft:'20px',width:'809px'}}>
                    <p onClick={this.openmodel.bind(this)} style={{color:'#169BD5'}}>新增产品</p>
                    <div className='secondcontent'>
                        <div style={{width:'809px',height:'40px',background:'rgb(200,211,223)',lineHeight:'40px',fontSize:'16px',fontWeight:'700',paddingLeft:'20px'}}>己选产品列表</div>
                        <div className='clearfix' style={{marginTop:'10px'}}>
                            <span>产品编号：</span>
                            <input onChange={this.mainproductnumber.bind(this)} style={{width:'130px',height:'25px'}}/>
                            <span>产品名称：</span>
                            <input onChange={this.mainproductname.bind(this)} style={{width:'130px',height:'25px'}}/>
                            <div onClick={this.mainsearch.bind(this)} className='secondsearch'>搜索</div>
                        </div>
                        <div>
                            <Table  columns={columns} pagination={false} dataSource={this.state.productdata} />
                        </div>
                        <div className='clearfix' style={{marginTop:'20px'}}>
                            <div onClick={this.delete.bind(this)} style={{width:'95px',color:'white',float:'left',height:'30px',borderRadius:'5px',lineHeight:'30px',cursor:'pointer',textAlign:'center',background:'rgb(255,102,153)'}}>
                                批量删除
                            </div>
                            <div style={{float:'left',marginLeft:'400px'}}>
                                <Pagination defaultCurrent={1} showSizeChanger total={this.state.productdata.length} />
                            </div>
                        </div>

                        <div className='clearfix' style={{marginTop:'20px'}}>
                            <Link to={{pathname:'/home/coupon/activity/addactivity',state:{}}}>
                                <div style={{background:'rgb(204,204,204)'}} className='secondbutton'>上一步</div>
                            </Link>
                            
                            <Link to={{pathname:`/home/coupon/activity/${this.state.acitivitytype}`}}>
                                <div style={{background:'rgb(204,204,204)'}} className='secondbutton'>下一步</div>
                            </Link>
                            
                            <Link to='/home/coupon/activity/Activitylist'>
                                <div className='secondbutton'>返回列表</div>
                            </Link>
                            
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Addactivitysecond;