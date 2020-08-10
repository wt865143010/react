import React, { Component } from 'react';
import './Sendtomembers.css'
import { Tabs,DatePicker,Checkbox,Table,Space } from 'antd';
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
                    productname:'产品1',
                    productnumber:'>20'
                },
                {
                    productname:'产品2',
                    productnumber:'==10'
                }

            ],

            userdata:[],
            suremodel:false,
            deleteuser:'',
            sendrecord:[],
        }
    }


    UNSAFE_componentWillMount(){
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
    }
    onloginend(date, dateString){
        console.log(dateString)
    }

    //开卡时间
    oncardstart(date, dateString){
        console.log(dateString)
    }
    oncardend(date, dateString){
        console.log(dateString)
    }

    //激活时间
    onactivationstart(date, dateString){
        console.log(dateString)
    }
    onactivationend(date, dateString){
        console.log(dateString)
    }


    //签约时间
    onsignstart(date, dateString){
        console.log(dateString)
    }
    onsignend(date, dateString){
        console.log(dateString)
    }


    //订单时间
    onordertart(data,dataString){

    }
    onorderend(data,dataString){
        
    }

    //发送时间
    sendtime(data,dataString){

    }




    //用户等级
    onChange1(e){
        console.log(e.target.checked)
    }
    onChange2(e){

    }

    onChange3(e){

    }

    //用户类型
    customertype1(e){

    }
    customertype2(e){
        
    }
    customertype3(e){
        
    }
    customertype4(e){
        
    }
    customertype5(e){
        
    }

    //用户职级
    onRank1(e){

    }
    onRank2(e){

    }
    onRank3(e){

    }


    //历史最高职级
    onRankhistory1(e){

    }
    onRankhistory2(e){
        
    }
    onRankhistory3(e){
        
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






    render() {
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
                    <span style={{color:'blue'}}>{item.productname}</span>
                    <select ref={this.state.coupontype} style={{width:'46px',height:'22px'}} id="coupontype" >
                                    
                                    <option value="0">==</option>
                                    <option value="1">!=</option>
                                    <option value="2"> &gt; </option>
                                    <option value="3"> &lt; </option>
                                    <option value="4">&gt;= </option>
                                    <option value="5">&lt;= </option>
                    </select>
                    <input style={{width:'25px',height:'25px'}}/>
                </div>
            )
        })

        let record = this.state.sendrecord.map((item,i)=>{
            return (
                <div key={i} >
                    
                </div>
            )
        })



        return (
            <div className='sendpagebox'>
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
                                    <input className='integralinput'style={{marginLeft:'10px'}} />-<input className='integralinput' />
                                </div>
                                <div className='titlename'>用户等级：</div>
                                <div style={{width:'356px',height:'30px',float:'left',border:'1px solid rgba(0,0,0,0.65)'}}>
                                    <Checkbox onChange={this.onChange1.bind(this)}>零售顾客</Checkbox>
                                    <Checkbox onChange={this.onChange2.bind(this)}>优惠顾客</Checkbox>
                                    <Checkbox onChange={this.onChange3.bind(this)}>星级顾客</Checkbox>
                                </div>
                            </div>
                            <div className='clearfix'>
                                <div className='titlename'>用户类型：</div>
                                <div style={{width:'832px',height:'30px',border:'1px solid rgba(0,0,0,0.65)',float:'left'}}>
                                    <Checkbox onChange={this.customertype1.bind(this)}>Retail</Checkbox>
                                    <Checkbox onChange={this.customertype2.bind(this)}>PC</Checkbox>
                                    <Checkbox onChange={this.customertype3.bind(this)}>NFT</Checkbox>
                                    <Checkbox onChange={this.customertype4.bind(this)}>DS</Checkbox>
                                    <Checkbox onChange={this.customertype5.bind(this)}>IM</Checkbox>

                                </div>
                            </div>
                            <div className='clearfix'>
                                <div className='titlename'>用户职级：</div>
                                <div style={{width:'832px',height:'30px',border:'1px solid rgba(0,0,0,0.65)',float:'left'}}>
                                    <Checkbox onChange={this.onRank1.bind(this)}>业务员</Checkbox>
                                    <Checkbox onChange={this.onRank2.bind(this)}>高级业务员</Checkbox>
                                    <Checkbox onChange={this.onRank3.bind(this)}>业务员经理</Checkbox>
                                </div>
                            </div>
                            <div className='clearfix'>
                                <div className='titlename'>历史最高职级：</div>
                                <div style={{width:'832px',height:'30px',border:'1px solid rgba(0,0,0,0.65)',float:'left'}}>
                                    <Checkbox onChange={this.onRankhistory1.bind(this)}>业务员经理</Checkbox>
                                    <Checkbox onChange={this.onRankhistory2.bind(this)}>业务员经理</Checkbox>
                                    <Checkbox onChange={this.onRankhistory3.bind(this)}>业务员经理</Checkbox>
                                </div>
                            </div>
                            <div className='clearfix'>
                                <div className='titlename'>入职店铺：</div>
                                <div className='clearfix' style={{width:'832px',height:'30px',border:'1px solid rgba(0,0,0,0.65)',float:'left'}}>
                                    {storenum}

                                    <div className='addstore'>添加</div>
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