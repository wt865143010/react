import React, { Component } from 'react';
import './addactivitysecond.css'
import { Table, Button,Checkbox,Pagination, } from 'antd';
import {Link} from 'react-router-dom'






class Addactivitysecond extends Component {
    constructor(){
        super()
        this.state={
            productdata:[
                {
                    key:'1',
                    productnumber:'12456',
                    productname:'123456',
                    sellingprice:'零售顾客折扣：￥100.00'
                },
                {
                    key:'2',
                    productnumber:'456789',
                    productname:'123456',
                    sellingprice:'零售顾客折扣：￥100.00'
                },
                {
                    key:'3',
                    productnumber:'11111',
                    productname:'123456',
                    sellingprice:'零售顾客折扣：￥100.00'
                }
            ],
            temporary:[],
            acitivitytype:''
            
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
                      <input placeholder='1000' style={{width:'90px',height:'25px'}}/>
                  )
              }
            },
            {
                title: '销售价格',
                dataIndex: 'sellingprice',
                key:'sellingprice',
              },
          ];

        return (
            <div className='secondbox'>
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
                    <p style={{color:'#169BD5'}}>新增产品</p>
                    <div className='secondcontent'>
                        <div style={{width:'809px',height:'40px',background:'rgb(200,211,223)',lineHeight:'40px',fontSize:'16px',fontWeight:'700',paddingLeft:'20px'}}>己选产品列表</div>
                        <div className='clearfix' style={{marginTop:'10px'}}>
                            <span>产品编号：</span>
                            <input style={{width:'130px',height:'25px'}}/>
                            <span>产品名称：</span>
                            <input style={{width:'130px',height:'25px'}}/>
                            <div className='secondsearch'>搜索</div>
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