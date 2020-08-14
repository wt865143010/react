import React, { Component } from 'react';
import './specialpromotion.css'
import { Tabs,Table,Pagination,Checkbox } from 'antd';
import {Link} from 'react-router-dom'


const { TabPane } = Tabs;

class specialpromotion extends Component {
    constructor(){
        super()
        this.state={
            productdata:[
                {
                    key:'1',
                    productnumber:'12456',
                    productname:'123456',
                    
                },
                {
                    key:'2',
                    productnumber:'456789',
                    productname:'123456',
                    
                },
                {
                    key:'3',
                    productnumber:'11111',
                    productname:'123456',
                    
                }
            ],
            moneyproductdata:[
                {
                    key:'1',
                    productnumber:'12456',
                    productname:'123456',
                    
                },
                {
                    key:'2',
                    productnumber:'456789',
                    productname:'123456',
                    
                },
                {
                    key:'3',
                    productnumber:'11111',
                    productname:'123456',
                    
                }
            ],
            temporary:[],
            activitytype:3
            
        }
    }
    callback(){

    }
    delete(){

    }


    choose(){

    }




    render() {
        const moneycolumns=[
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
              title: '销售价格',
              key:'priceByProduct',
              render:(record)=>{
                  return (
                      <input placeholder='1000' style={{width:'90px',height:'25px'}}/>
                  )
              }
            },
        ];
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
              title: '金额折算(%)',
              key:'discountByProduct',
              render:(record)=>{
                  return (
                      <input placeholder='1000' style={{width:'90px',height:'25px'}}/>
                  )
              }
            },

          ];
        return (
            <div className="specialbox">
                <div style={{height:'51px',marginTop:'40px',marginLeft:'20px'}} className='clearfix'>
                    <div  className='addstep'>1</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div className='addstep'>2</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div style={{background:'rgb(153,153,153)'}}  className='addstep'>3</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div  className='addstep'>4</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div  className='addstep'>5</div>
                </div>
                <div style={{marginTop:'10px'}}>
                    <span style={{marginLeft:'19px'}} className='text1'>基本信息</span>
                    <span className='text1 jianju'>促销产品</span>
                    <span className='text1 jianju'>促销方案</span>
                    <span className='text1 jianju'>用户范围</span>
                    <span className='text1 jianju'>设置完成</span>
                </div>
                <div style={{marginLeft:'20px'}}>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="统一直接打折" key="1">
                        <div>
                            <span>金额折算为原金额：</span>
                            <input style={{width:'95px',height:'25px'}}/>
                            <span>%</span>
                        </div>
                    </TabPane>
                    <TabPane tab="统一固定金额出售" key="2">
                        <div>
                            <span>出售金额：</span>
                            <input style={{width:'95px',height:'25px'}}/>
                            <span>元</span>
                        </div>
                    </TabPane>
                    <TabPane tab="按产品设置折扣" key="3">
                        <div>
                            <div style={{width:'900px',height:'40px',background:'rgb(200,211,223)',lineHeight:'40px',fontSize:'14px',fontWeight:'700'}}>己选商品列表</div>
                            <div style={{marginTop:'20px'}} className='clearfix'>
                                    <div style={{float:'left'}}>
                                        <span>产品编号：</span>
                                        <input style={{width:'130px',height:'25px'}}/>
                                    </div>
                                    <div style={{float:'left',marginLeft:'20px'}}>
                                        <span>产品名称：</span>
                                        <input style={{width:'130px',height:'25px'}}/>
                                    </div>
                                    <div style={{float:'left',marginLeft:'20px',width:'95px',height:'30px',lineHeight:'30px',textAlign:'center',borderRadius:'5px',color:'white',background:'rgb(22,155,213)'}}>
                                        搜索
                                    </div>
                                    <Table  columns={columns} pagination={false} dataSource={this.state.productdata} />
                                    <div className='clearfix' style={{marginTop:'20px'}}>
                                        <div onClick={this.delete.bind(this)} style={{width:'95px',color:'white',float:'left',height:'30px',borderRadius:'5px',lineHeight:'30px',cursor:'pointer',textAlign:'center',background:'rgb(255,102,153)'}}>
                                            批量删除
                                        </div>
                                        <div style={{float:'left',marginLeft:'400px'}}>
                                            <Pagination defaultCurrent={1} showSizeChanger total={this.state.productdata.length} />
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="按产品设置金额" key="4">
                        <div>
                                <div style={{width:'900px',height:'40px',background:'rgb(200,211,223)',lineHeight:'40px',fontSize:'14px',fontWeight:'700'}}>己选商品列表</div>
                                <div style={{marginTop:'20px'}} className='clearfix'>
                                        <div style={{float:'left'}}>
                                            <span>产品编号：</span>
                                            <input style={{width:'130px',height:'25px'}}/>
                                        </div>
                                        <div style={{float:'left',marginLeft:'20px'}}>
                                            <span>产品名称：</span>
                                            <input style={{width:'130px',height:'25px'}}/>
                                        </div>
                                        <div style={{float:'left',marginLeft:'20px',width:'95px',height:'30px',lineHeight:'30px',textAlign:'center',borderRadius:'5px',color:'white',background:'rgb(22,155,213)'}}>
                                            搜索
                                        </div>
                                        <Table  columns={moneycolumns} pagination={false} dataSource={this.state.moneyproductdata} />
                                        <div className='clearfix' style={{marginTop:'20px'}}>
                                            <div onClick={this.delete.bind(this)} style={{width:'95px',color:'white',float:'left',height:'30px',borderRadius:'5px',lineHeight:'30px',cursor:'pointer',textAlign:'center',background:'rgb(255,102,153)'}}>
                                                批量删除
                                            </div>
                                            <div style={{float:'left',marginLeft:'400px'}}>
                                                <Pagination defaultCurrent={1} showSizeChanger total={this.state.productdata.length} />
                                            </div>
                                        </div>
                                </div>
                            </div>
                    </TabPane>
                </Tabs>
                </div>

                        <div className='clearfix' style={{marginTop:'20px'}}>
                            <Link to={{pathname:'/home/coupon/activity/Addactivitysecond',query:{type:this.state.activitytype}}}>
                               <div style={{background:'rgb(204,204,204)'}} className='secondbutton'>上一步</div>
                            </Link>
                            
                            <Link to={{pathname:'/home/coupon/activity/Activeusers',query:{type:this.state.activitytype}}}>
                              <div style={{background:'rgb(204,204,204)'}} className='secondbutton'>下一步</div>
                            </Link>
                            <Link to='/home/coupon/activity/Activitylist'>
                                <div className='secondbutton'>返回列表</div>
                            </Link>
                        </div>
            </div>
        );
    }
}

export default specialpromotion;