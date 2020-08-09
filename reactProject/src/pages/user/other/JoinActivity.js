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
                    dataIndex: 'act_no',
                    key: 'id',
                },
                {
                    title: '活动类型',
                    dataIndex: 'act_type',
                    key: 'id',
                },
                {
                    title: '活动名称',
                    dataIndex: 'act_name',
                    key: 'id',
                },
                {
                    title: '参与时间',
                    dataIndex: 'join_time',
                    key: 'id',
                },
                {
                    title: '参与订单',
                    dataIndex: 'order_no',
                    key: 'id',
                    render:(order_no)=>{
                            return (
                                <Space size="middle">
                                    <Link to=''>{order_no}</Link>
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
        }
    }
    componentWillMount() {
        let obj={
            act_type:'',
            act_no:'',
            act_name:'',
            joinTime:'',
            user_cartId:this.props.location.query.user_cartId
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
            act_type:this.state.act_type,
            act_no:this.state.act_no,
            act_name:this.state.act_name,
            joinTime:this.state.joinTime,
            user_cartId:this.props.location.query.user_cartId
        }
        this.props.user.searchAct(obj)
            .then(data=>{
                this.setState({
                    activity:this.props.user.activity
                })
            })
    }
    getTime=(data)=>{
        console.log(data[0]._d.toLocaleString())
        console.log(data[1]._d.toLocaleString())
        let date={
            start:data[0]._d.toLocaleString(),
            end:data[1]._d.toLocaleString()
        }
        this.setState({
            joinTime:date
        })
    }

    reset=()=>{
        let obj={
            act_type:'',
            act_no:'',
            act_name:'',
            joinTime:'',
            user_cartId:this.props.location.query.user_cartId
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
                                <option value="所有">所有</option>
                                <option value="特价促销">特价促销</option>
                                <option value="满额促销">满额促销</option>
                                <option value="满量促销">满量促销</option>
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
                        <Table pagination={false} columns={this.state.columns} dataSource={this.state.activity} />
                    </div>
                </div>
            </div>
        )
    }
}

export default JoinActivity
