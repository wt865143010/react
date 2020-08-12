import React, {Component} from 'react';
import {DatePicker,Space, Table} from "antd";
import {inject,observer} from "mobx-react";
import {Link} from "react-router-dom";
import './coupon.css'
const { RangePicker } = DatePicker;

@inject('user')
@observer
class JoinActivity extends Component {
    constructor() {
        super();
        this.state={
            columns:[
                {
                    title: '活动编号',
                    dataIndex: 'activityNum',
                    key: 'id',
                },
                {
                    title: '活动类型',
                    dataIndex: 'activityType',
                    key: 'id',
                    render:(activityType)=>{
                        if (activityType==0){
                            return (
                                <Space>
                                    <div>特价促销</div>
                                </Space>
                            )
                        }else if (activityType==1){
                            return (
                                <Space>
                                    <div>满额促销</div>
                                </Space>
                            )
                        }else if (activityType==2){
                            return (
                                <Space>
                                    <div>满量促销</div>
                                </Space>
                            )
                        }
                    }
                },
                {
                    title: '活动名称',
                    dataIndex: 'activityName',
                    key: 'id',
                },
                {
                    title: '参与时间',
                    dataIndex: 'joinTime',
                    key: 'id',
                },
                {
                    title: '参与订单',
                    dataIndex: 'oddNumber',
                    key: 'id',
                    render:(oddNumber)=>{
                            return (
                                <Space size="middle">
                                    <Link to=''>{oddNumber}</Link>
                                </Space>
                            )
                    }
                },
            ],
            activity:[],
            joinTime:[],
            act_type:'',
            act_no:'',
            act_name:'',
            startTime:'',
            endTime:'',
        }
    }
    componentWillMount() {
        let obj={
            activityType:'',
            activityNum:'',
            activityName:'',
            startTime:'',
            endTime:'',
            cardNumber:this.props.location.query.user_cartId
        }
        this.props.user.searchAct(obj)
            .then(data=>{
                this.setState({
                    activity:this.props.user.activity
                })
            })
    }
    searchAct=()=>{

        this.setState({
            act_type:this.act_type.value,
            act_no:this.act_no.value,
            act_name:this.act_name.value,
        })
        let obj={
            activityType:this.act_type.value,
            activityNum:this.act_no.value,
            activityName:this.act_name.value,
            startTime:this.state.startTime,
            endTime:this.state.endTime,
            cardNumber:this.props.location.query.user_cartId
        }
        console.log(obj)
        this.props.user.searchAct(obj)
            .then(data=>{
                this.setState({
                    activity:this.props.user.activity
                })
            })
    }
    getTime=(data)=>{
        this.setState({
            startTime:data[0]._d.toLocaleString(),
            endTime:data[1]._d.toLocaleString()
        })
    }

    reset=()=>{
        this.act_type.value='';
        this.act_no.value='';
        this.act_name.value='';
        let obj={
            activityType:'',
            activityNum:'',
            activityName:'',
            startTime:'',
            endTime:'',
            cardNumber:this.props.location.query.user_cartId
        }
        this.props.user.searchAct(obj)
            .then(data=>{
                this.setState({
                    activity:this.props.user.activity
                })
            })
    }
    render() {
        return (
            <div>
                <div className='nav'>
                    <span>商城管理系统</span><span>></span>
                    <Link to='/home/user/UserList'>用户列表</Link><span>></span>
                    <Link to={{pathname:'/home/usernews',query:{user_cartId:this.props.location.query.user_cartId}}}>用户详情</Link><span>></span>
                    <span>参加活动详情</span>
                </div>
                <div>
                    <div className='allTopBox'>
                        <div className='topBox'>
                            活动编号：<input type="text" ref={act_no=>this.act_no=act_no}/>
                        </div>
                        <div className='topBox'>
                            活动类型：
                            <select name="" id="" ref={act_type=>this.act_type=act_type}>
                                <option value="">所有</option>
                                <option value="0">特价促销</option>
                                <option value="1">满额促销</option>
                                <option value="2">满量促销</option>
                            </select>
                        </div>
                        <div className='topBox'>
                            活动名称：  <input type="text" ref={act_name=>this.act_name=act_name}/>
                        </div>
                    </div>
                    <div className='middleBox'>
                        <div>
                            参与时间：<RangePicker placeholder={['开始时间','结束时间']}
                                              onChange={this.getTime}/>
                        </div>
                        <div>
                            参与订单：<input type="text"/>
                        </div>
                    </div>
                    <div className='bottomBox'>
                        <input type="button" value='搜索' onClick={this.searchAct}/>
                        <input type="button" value='重置' onClick={this.reset}/>
                        <input type="button" value='导出数据'/>
                    </div>
                    <div>
                        <Table pagination={{defaultCurrent:1,defaultPageSize:5}} columns={this.state.columns} dataSource={this.state.activity} />
                    </div>
                </div>
            </div>
        )
    }
}

export default JoinActivity
