import React, { Component } from 'react';
import './Activeusers.css'
import { Tabs,Checkbox,Table,Pagination,Modal,DatePicker,Col,Row } from 'antd';
import {Link} from 'react-router-dom'

const { TabPane } = Tabs;

class Activeusers extends Component {
    constructor(){
        super()
        this.state={
            productdata:[
                {
                    key:'1',
                    cardnumber:'CN123456',
                    username:'张飞',
                    useridentity:'游客',
                    phonenumber:'159****9012',
                    logintime:'2019-09-09 12:12:12',
                    entryshop:'店铺1',
                    shoppingpoints:'100',
                    userstate:'临时',
                    usergrade:'零售顾客',
                    userrank:'销售经理',

                    
                },
                {
                    key:'2',
                    cardnumber:'CN123456',
                    username:'册册王',
                    useridentity:'游客',
                    phonenumber:'159****9012',
                    logintime:'2019-09-09 12:12:12',
                    entryshop:'店铺1',
                    shoppingpoints:'100',
                    userstate:'临时',
                    usergrade:'零售顾客',
                    userrank:'销售经理',
                    
                },
                {
                    key:'3',
                    cardnumber:'CN123456',
                    username:'王册册',
                    useridentity:'游客',
                    phonenumber:'159****9012',
                    logintime:'2019-09-09 12:12:12',
                    entryshop:'店铺1',
                    shoppingpoints:'100',
                    userstate:'临时',
                    usergrade:'零售顾客',
                    userrank:'销售经理',
                    
                }
                
            ],
            visible: false,
            entryshop:[
                {
                    name:'店铺1'
                },
                {
                    name:'店铺2'
                }
            ],
            productrange:[
                {
                    name:'产品1'
                },
                {
                    name:'产品2'
                }
            ],
            activitytype:'222'
        }
    }

    UNSAFE_componentWillMount(){
        console.log(this.props.location.query.type)
        let type =(this.props.location.query.type)
        console.log(type)
        if(type == 0){
            this.setState({
                activitytype:'Discountpromotion'
            })
        }else if(type == 1){
            this.setState({
                activitytype:'Priceincrease'
            })
        }else if(type == 2){
            console.log(11111111111)
            this.setState({
                activitytype:'Fullgift'
            })
        }else{
            this.setState({
                activitytype:'specialpromotion'
            })
        }
        console.log(this.state.activitytype)
        
        // this.state.activitytype = this.props.location.query.type
    }

    callback(){

    }

    //状态选择
    changestatetype(){

    }

    //用户身份
    changeidentitytype(){

    }

    //用户等级
    changeGradetype(){

    }

    //职级名称
    changeranktype(){

    }

    //表格选择
    choose(){

    }

    //按用户规则的用户等级
    usergrade(checkedValues){
        console.log(checkedValues)
    }

    //按用户规则的用户类型
    usertype(checkedValues){
        console.log(checkedValues)
    }

    //按用户规则的用户职级
    userrank(checkedValues){
        console.log(checkedValues)
    }


    //按用户规则的最高用户职级
    highesthistoryrank(checkedValues){
        console.log(checkedValues)
    }




    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

      //固定用户新增用户注册时间
      onChangeLoginstart(date, dateString) {
        console.log(dateString)
        console.log(this.state)
        this.state.starttime = dateString
        console.log(this.state.starttime)
        
    };
    onChangeLoginend(date,dateString){
        console.log(dateString)
        this.state.endtime = dateString
        console.log(this.state.endtime)
    }

    //用户规则注册时间
    userrulesLoginstart(date, dateString) {
        console.log(dateString)
        console.log(this.state)
        this.state.starttime = dateString
        console.log(this.state.starttime)
        
    };
    userrulesLoginend(date,dateString){
        console.log(dateString)
        this.state.endtime = dateString
        console.log(this.state.endtime)
    }

    //开卡时间
    activatecardLoginstart(date, dateString) {
        console.log(dateString)
        console.log(this.state)
        this.state.starttime = dateString
        console.log(this.state.starttime)
        
    };
    activatecardLoginend(date,dateString){
        console.log(dateString)
        this.state.endtime = dateString
        console.log(this.state.endtime)
    }

    //激活时间
    activationstart(date, dateString) {
        console.log(dateString)
        console.log(this.state)
        this.state.starttime = dateString
        console.log(this.state.starttime)
        
    };
    activationend(date,dateString){
        console.log(dateString)
        this.state.endtime = dateString
        console.log(this.state.endtime)
    }

    //签约时间
    userrulessignupstart(date, dateString) {
        console.log(dateString)
        console.log(this.state)
        this.state.starttime = dateString
        console.log(this.state.starttime)
        
    };
    userrulessignupend(date,dateString){
        console.log(dateString)
        this.state.endtime = dateString
        console.log(this.state.endtime)
    }

    //所以用户
    changealluser(e){
        console.log(e.target.checked)
    }

    
    
    
    render() {
        
        let arr = this.state.entryshop.map((item,i)=>{
            return (
                <div key={i} style={{display:'inline-block',marginRight:'10px'}}>
                    <span>{item.name}</span>
                    <span style={{color:'red',fontSize:'14px'}}>X</span>
                </div>
            )
        })

        let productarr = this.state.productrange.map((item,i)=>{
            return (
                <div key={i} style={{display:'inline-block',marginRight:'10px'}}>
                    <span>{item.name}</span>
                    <span style={{color:'red',fontSize:'14px'}}>X</span>
                </div>
            )
        })

        let productrangearr = this.state.productrange.map((item,i)=>{
            return (
                <div key={i} style={{display:'inline-block',marginRight:'10px'}}>
                    <span>{item.name}</span>
                    <select  style={{width:'46px',height:'22px'}} id="coupontype" >                                   
                        <option value="0">==</option>
                        <option value="1">!=</option>
                        <option value="2"> &gt; </option>
                        <option value="3"> &lt; </option>
                        <option value="4">&gt;= </option>
                        <option value="5">&lt;= </option>
                    </select>
                    <input style={{width:'57px',height:'22px'}}/>
                    <span style={{color:'red',fontSize:'14px'}}>X</span>
                </div>
            )
        })

        const columns = [
            {
                title: '选择',
                key:'action',
                render:(record)=>(
                        <Checkbox onChange={this.choose.bind(this,record.key)}></Checkbox>
                    
                )
            },
            {
              title: '卡号',
              dataIndex: 'cardnumber',
              key:'cardnumber',
            },
            {
              title: '姓名',
              dataIndex: 'username',
              key:'username',
            },
            {
                title: '用户身份',
                dataIndex: 'useridentity',
                key:'useridentity',
              },
              {
                title: '手机号码',
                dataIndex: 'phonenumber',
                key:'phonenumber',
              },
              {
                title: '注册时间',
                dataIndex: 'logintime',
                key:'logintime',
              },
              {
                title: '入职店铺',
                dataIndex: 'entryshop',
                key:'entryshop',
              },

              {
              title: '购物积分',
              dataIndex: 'shoppingpoints',
              key:'shoppingpoints',
            },
            {
                title: '状态',
                dataIndex: 'userstate',
                key:'userstate',
              },
              {
                title: '用户等级',
                dataIndex: 'usergrade',
                key:'usergrade',
              },
              {
                title: '职级',
                dataIndex: 'userrank',
                key:'userrank',
              },
              {
                title: '操作',
                
                key:'action',
                render:(text,record)=>{
                    return (
                        <a>移除</a>
                    )
                }
              },

          ];
        return (
            <div className='activeusersbox'>
                <div style={{height:'51px',marginTop:'40px',marginLeft:'20px'}} className='clearfix'>
                    <div  className='addstep'>1</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div className='addstep'>2</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div   className='addstep'>3</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div style={{background:'rgb(153,153,153)'}} className='addstep'>4</div>
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
                <div>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="按固定用户" key="1">
                            <div style={{marginTop:'10px'}}>
                                <div className='clearfix'>
                                    <div onClick={this.showModal} className='buttonclass'>新增用户</div>
                                    <div className='buttonclass'>模板导入</div>
                                    <div className='buttonclass'>下载模板</div>
                                </div>
                                <div style={{marginTop:'5px'}}>
                                    <div style={{width:'1000px',height:'40px',lineHeight:'40px',background:'rgb(0,204,255)',fontSize:'18px',fontWeight:'700'}}>已选择用户</div>
                                    <div style={{marginTop:'5px'}}>
                                        <span>卡号：</span>
                                        <input style={{width:'120px',height:'25px',marginLeft:'40px'}}/>
                                        <span style={{marginLeft:'40px'}}>姓名：</span>
                                        <input style={{width:'120px',height:'25px',marginLeft:'27px'}}/>
                                        <span style={{marginLeft:'40px'}}>手机号码：</span>
                                        <input style={{width:'120px',height:'25px'}}/>
                                        <span style={{marginLeft:'40px'}}>状态：</span>
                                        <select onChange={this.changestatetype.bind(this)}  style={{width:'120px',height:'22px'}} >
                                            <option value="0"></option>
                                            <option value="1">临时</option>
                                            <option value="2">活动</option>
                                            <option value="3">不活动</option>
                                            <option value="4">终止</option>
                                        </select>
                                    </div>
                                    <div style={{marginTop:'5px'}}>
                                        <span style={{marginLeft:'0px'}}>用户身份:</span>
                                        <select  onChange={this.changeidentitytype.bind(this)}  style={{width:'120px',height:'22px',marginLeft:'22px'}} >
                                            <option value="0"></option>
                                            <option value="1">无卡用户</option>
                                            <option value="2">PC</option>
                                            <option value="3">NTF</option>
                                            <option value="4">DS</option>
                                            <option value="5">IM</option>
                                        </select>
                                        <span style={{marginLeft:'40px'}}>用户等级：</span>
                                        <select onChange={this.changeGradetype.bind(this)}  style={{width:'120px',height:'22px'}} >
                                            <option value="0"></option>
                                            <option value="1">零售顾客</option>
                                            <option value="2">优惠顾客</option>
                                            <option value="3">星级顾客</option>
                                            
                                        </select>
                                        <span style={{marginLeft:'40px'}}>职级名称：</span>
                                        <select onChange={this.changeranktype.bind(this)}  style={{width:'120px',height:'22px'}} >
                                            <option value="0"></option>
                                            <option value="1">主任</option>
                                            <option value="2">资深主任</option>
                  
                                        </select>
                                    </div>
                                
                                </div>
                                <Table  columns={columns} pagination={false} dataSource={this.state.productdata} />
                                <Pagination defaultCurrent={1} showSizeChanger total={this.state.productdata.length} />
                            </div>
                        </TabPane>
                        <TabPane tab="按用户规则" key="2">
                            <div>
                                <div className='activityusertable'>用户信息</div>
                                <div className='clearfix'>
                                    <div className='tableleft'>注册时间：</div>
                                    <div className='tableright'>
                                        <DatePicker style={{marginLeft:'30px',height:'25px',marginTop:'2.5px'}} onChange={this.userrulesLoginstart.bind(this)} />-
                                        <DatePicker style={{height:'25px',marginTop:'2.5px'}} onChange={this.userrulesLoginend.bind(this)} />
                                    </div>
                                    <div className='tableleft'>开卡时间：</div>
                                    <div className='tableright'>
                                        <DatePicker style={{marginLeft:'30px',height:'25px',marginTop:'2.5px'}} onChange={this.activatecardLoginstart.bind(this)} />-
                                        <DatePicker style={{height:'25px',marginTop:'2.5px'}} onChange={this.activatecardLoginend.bind(this)} />
                                    </div>
                                </div>
                                <div className='clearfix'>
                                    <div className='tableleft'>激活时间：</div>
                                    <div className='tableright'>
                                        <DatePicker style={{marginLeft:'30px',height:'25px',marginTop:'2.5px'}} onChange={this.activationstart.bind(this)} />-
                                        <DatePicker style={{height:'25px',marginTop:'2.5px'}} onChange={this.activationend.bind(this)} />
                                    </div>
                                    <div className='tableleft'>签约时间：</div>
                                    <div className='tableright'>
                                        <DatePicker style={{marginLeft:'30px',height:'25px',marginTop:'2.5px'}} onChange={this.userrulessignupstart.bind(this)} />-
                                        <DatePicker style={{height:'25px',marginTop:'2.5px'}} onChange={this.userrulessignupend.bind(this)} />
                                    </div>
                                </div>
                                <div className='clearfix'>
                                    <div className='tableleft'>购物积分：</div>
                                    <div className='tableright'>
                                        <input style={{width:'57px',height:'25px',marginLeft:'30px'}}/>-
                                        <input style={{width:'57px',height:'25px'}}/>
                                    </div>
                                    <div className='tableleft'>用户等级：</div>
                                    <div className='tableright'>
                                        <Checkbox.Group style={{ width: '100%',marginLeft:'30px' }} onChange={this.usergrade.bind(this)}>
                                            <Checkbox value="零售顾客">零售顾客</Checkbox>
                                            <Checkbox value="优惠顾客">优惠顾客</Checkbox>
                                            <Checkbox value="星级顾客">星级顾客</Checkbox>
                                        </Checkbox.Group>
                                    </div>
                                </div>
                                <div className='clearfix'>
                                    <div className='tableleft'>用户类型：</div>
                                    <div className='tableright'>
                                        <Checkbox.Group style={{ width: '100%',marginLeft:'30px' }} onChange={this.usertype.bind(this)}>
                                            <Checkbox value="Retail">Retail</Checkbox>
                                            <Checkbox value="PC">PC</Checkbox>
                                            <Checkbox value="NFT">NFT</Checkbox>
                                            <Checkbox value="DS">DS</Checkbox>
                                            <Checkbox value="IM">IM</Checkbox>
                                        </Checkbox.Group>
                                    </div>
                                </div>
                                <div className='clearfix'>
                                    <div className='tableleft'>用户职级：</div>
                                    <div className='tableright'>
                                        <Checkbox.Group style={{ width: '100%',marginLeft:'30px' }} onChange={this.userrank.bind(this)}>
                                            <Checkbox value="业务员">业务员</Checkbox>
                                            <Checkbox value="高级业务员">高级业务员</Checkbox>
                                            <Checkbox value="业务员经理">业务员经理</Checkbox>

                                        </Checkbox.Group>
                                    </div>
                                </div>
                                <div className='clearfix'>
                                    <div className='tableleft'>历史最高职级：</div>
                                    <div className='tableright'>
                                        <Checkbox.Group style={{ width: '100%',marginLeft:'30px' }} onChange={this.highesthistoryrank.bind(this)}>
                                            <Checkbox value="业务员">业务员</Checkbox>
                                            <Checkbox value="高级业务员">高级业务员</Checkbox>
                                            <Checkbox value="业务员经理">业务员经理</Checkbox>
                                        </Checkbox.Group>
                                    </div>
                                </div>
                                <div className='clearfix'>
                                    <div className='tableleft'>入职店铺：</div>
                                    <div className='tableright'>
                                        {arr}
                                        <span style={{fontSize:'20px'}}>+</span>
                                    </div>
                                </div>
                                <div className='activityusertable'>订单信息</div>
                                <div className='clearfix'>
                                    <div className='tableleft'>时间范围：</div>
                                    <div className='tableright'>
                                        <DatePicker style={{marginLeft:'30px',height:'25px',marginTop:'2.5px'}} onChange={this.userrulesLoginstart.bind(this)} />-
                                        <DatePicker style={{height:'25px',marginTop:'2.5px'}} onChange={this.userrulesLoginend.bind(this)} />
                                    </div>
                                </div>
                                <div className='clearfix'>
                                    <div className='tableleft'>购买产品范围：</div>
                                    <div className='tableright'>
                                        {productrangearr}
                                        <span style={{fontSize:'20px'}}>+</span>
                                    </div>
                                </div>
                                <div className='clearfix' style={{marginTop:'20px'}}>
                                    <div style={{background:'rgb(22,155,213)'}} className='userrulesbutton'>加入条件</div>
                                    <div style={{background:'rgb(153,153,153)'}} className='userrulesbutton'>清空所有条件</div>
                                </div>
                                
                            </div>
                        </TabPane>
                        <TabPane tab="所有用户" key="3">
                            <Checkbox onChange={this.changealluser.bind(this)} >所有用户可参加活动</Checkbox>
                        </TabPane>
                    </Tabs>
                    <div className='clearfix' style={{marginTop:'20px'}}>
                        <Link to={{pathname:`/home/coupon/activity/${this.state.activitytype}`}}>  
                            <div style={{background:'rgb(204,204,204)'}} className='secondbutton'>上一步</div>
                        </Link>
                            <Link to='/home/coupon/activity/Setupcomplete'>
                            
                                <div style={{background:'rgb(204,204,204)'}} className='secondbutton'>下一步</div>
                            </Link>
                            <Link to='/home/coupon/activity/Activitylist'>
                                <div className='secondbutton'>返回列表</div>
                            </Link>

                            
                        </div>
                </div>
            
                <Modal
                title="选择用户"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                width='1058px'
                >
                    <div>
                        <p style={{height:'32px',fontSize:'14px',fontWeight:'700',lineHeight:'32px',paddingLeft:'5px',background:'rgba(0, 204, 255, 1)'}}>用户信息</p>
                        <div>
                            <span style={{marginLeft:'40px'}}>卡号：</span>
                            <input style={{width:'120px',height:'25px'}}/>
                            <span style={{marginLeft:'50px'}}>姓名：</span>
                            <input style={{width:'120px',height:'25px'}}/>
                            <span style={{marginLeft:'40px'}}>手机号码：</span>
                            <input style={{width:'120px',height:'25px'}}/>
                            <span style={{marginLeft:'25px'}}>状态：</span>
                                        <select onChange={this.changestatetype.bind(this)}  style={{width:'120px',height:'22px'}} >
                                            <option value="0"></option>
                                            <option value="1">临时</option>
                                            <option value="2">活动</option>
                                            <option value="3">不活动</option>
                                            <option value="4">终止</option>
                            </select>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <span style={{marginLeft:'0px'}}>用户身份:</span>
                            <select  onChange={this.changeidentitytype.bind(this)}  style={{width:'120px',height:'22px',marginLeft:'22px'}} >
                                <option value="0"></option>
                                <option value="1">无卡用户</option>
                                <option value="2">PC</option>
                                <option value="3">NTF</option>
                                <option value="4">DS</option>
                                <option value="5">IM</option>
                            </select>
                            <span style={{marginLeft:'25px'}}>用户等级：</span>
                            <select onChange={this.changeGradetype.bind(this)}  style={{width:'120px',height:'22px'}} >
                                <option value="0"></option>
                                <option value="1">零售顾客</option>
                                <option value="2">优惠顾客</option>
                                <option value="3">星级顾客</option>
                                
                            </select>
                            <span style={{marginLeft:'40px'}}>职级名称：</span>
                            <select onChange={this.changeranktype.bind(this)}  style={{width:'120px',height:'22px'}} >
                                <option value="0"></option>
                                <option value="1">主任</option>
                                <option value="2">资深主任</option>
        
                            </select>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <span>注册时间：</span>
                            <DatePicker onChange={this.onChangeLoginstart.bind(this)} />-
                            <DatePicker onChange={this.onChangeLoginend.bind(this)} />
                            <span>入职店铺：</span>
                            {arr}
                            <span style={{fontSize:'20px'}}>+</span>

                            <span style={{marginLeft:'40px'}}>购物积分：</span>
                            <input style={{width:'57px',height:'25px'}}/>-
                            <input style={{width:'57px',height:'25px'}}/>
                        </div>
                    
                        <p style={{height:'32px',fontSize:'14px',fontWeight:'700',lineHeight:'32px',paddingLeft:'5px',background:'rgba(0, 204, 255, 1)'}}>历史订单</p>
                        <div>
                            <span>时间范围：</span>
                            <DatePicker onChange={this.onChangeLoginstart.bind(this)} />-
                            <DatePicker onChange={this.onChangeLoginend.bind(this)} />
                            <span>购买产品范围：</span>
                            {productarr}
                            <span style={{fontSize:'20px'}}>+</span>
                            <span style={{marginLeft:'40px'}}>购物积分：</span>
                            <select ref={this.state.coupontype} style={{width:'46px',height:'22px'}} id="coupontype" >
                                    
                                    <option value="0">==</option>
                                    <option value="1">!=</option>
                                    <option value="2"> &gt; </option>
                                    <option value="3"> &lt; </option>
                                    <option value="4">&gt;= </option>
                                    <option value="5">&lt;= </option>
                            </select>
                            <input style={{width:'57px',height:'25px'}}/>
                        </div>
                        <div style={{marginTop:'20px'}} className='clearfix'>
                            <div style={{marginLeft:'500px'}} className='chooseuserbutton'>搜索</div>
                            <div className='chooseuserbutton'>新增</div>
                            <div className='chooseuserbutton'>新增全部</div>
                            <div className='chooseuserbutton'>导出用户</div>
                        </div>
                            <Table  columns={columns} pagination={false} dataSource={this.state.productdata} />
                            <Pagination defaultCurrent={1} showSizeChanger total={this.state.productdata.length} />
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Activeusers;