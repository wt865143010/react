import React, {Component} from 'react';
import {inject,observer} from "mobx-react";
import {DatePicker, Table} from 'antd'
import './integral.css'
import {Link} from "react-router-dom";

const { RangePicker } = DatePicker;

@inject('user')
@observer
class IntegralUse extends Component {
    constructor() {
        super();
        this.state={
            news:[],
            integra:[],
            columns:[
                {
                    title: '序号',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '当前积分',
                    dataIndex: 'currPoint',
                    key: 'id',
                },
                {
                    title: '变动积分',
                    dataIndex: 'changePoint',
                    key: 'id',
                },
                {
                    title: '变动类型',
                    dataIndex: 'changeType',
                    key: 'id',
                },
                {
                    title: '变动渠道',
                    dataIndex: 'changeChannel',
                    key: 'id',
                },
                {
                    title: '变动原因',
                    dataIndex: 'changeReason',
                    key: 'id',
                },
                {
                    title: '测试时间',
                    dataIndex: 'changeTime',
                    key: 'id',
                }
            ],
            useTime:'',
            dateTime:'',
            mytype:'',
            myway:'',
            beginTime:'',
            endTime:''
        }
    }
    componentWillMount() {
        let usernews=this.props.location.query.usernews;
        this.setState({
            news:usernews
        })
        console.log(this.props.location.query.usernews.cardNumber)
        let obj={
            changeType:this.state.mytype,
            changeChannel:this.state.myway,
            cardNumber:this.props.location.query.usernews.cardNumber,
            beginTime:'',
            endTime:''
        }
        this.props.user.searchInt(obj)
            .then(data=>{
                this.setState({
                    integra:this.props.user.integra
                })
            })
    }
    searchInt=()=>{
        console.log(this.mytype.value)
        console.log(this.myway.value)
        this.setState({
            mytype:this.mytype.value,
            myway:this.myway.value,
        })
        let obj={
            changeType:this.mytype.value,
            changeChannel:this.myway.value,
            cardNumber:this.props.location.query.usernews.cardNumber,
            beginTime:this.state.beginTime,
            endTime:this.state.endTime
        }
        console.log(obj)
        this.props.user.searchInt(obj)
            .then(data=>{
                this.setState({
                    integra:this.props.user.integra
                })
            })
    }
    getTime=(data)=>{
        this.setState({
            beginTime:data[0]._d.toLocaleString(),
            endTime:data[1]._d.toLocaleString()
        })
    }
    reset=()=>{
        let obj={
            changeType:'',
            changeChannel:'',
            cardNumber:this.props.location.query.usernews.cardNumber,
            beginTime:'',
            endTime:''
        }
        this.setState({
            beginTime:'',
            endTime:'',
            mytype:'',
            myway:'',
        })
        this.props.user.searchInt(obj)
            .then(data=>{
                this.setState({
                    integra:this.props.user.integra
                })
            })
    }
    render() {
        return (
            <div>
                <div className='nav'>
                    <span>商城管理系统</span><span>></span>
                    <Link to='/home/user/UserList'>用户列表</Link><span>></span>
                    <Link to={{pathname:'/home/usernews',query:{user_cartId:this.props.location.query.usernews.cardNumber}}}>用户详情</Link><span>></span>
                    <span>积分详情</span>
                </div>
                <h1>积分使用</h1>
                <div>
                    <div className='topbox'>
                        <div>卡号：{this.state.news.cardNumber}</div>
                        <div>用户姓名：{this.state.news.userName}</div>
                        <div>用户手机号：{this.state.news.phoneNumber}</div>
                        <div>用户当前积分：{this.state.news.currPoint}</div>
                    </div>
                    <div className='middlebox'>
                        <div>
                            时间：<RangePicker
                            placeholder={['开始时间','结束时间']}
                            onChange={this.getTime}/>
                        </div>
                        <div>
                            变动类型：
                            <select name="" id="" ref={mytype=>this.mytype=mytype}>
                                <option value="">所有类型</option>
                                <option value="消费">消费</option>
                                <option value="追加">追加</option>
                            </select>
                        </div>
                        <div>
                            变更渠道：
                            <select name="" id="" ref={myway=>this.myway=myway}>
                                <option value="">所有渠道</option>
                                <option value="消费">消费</option>
                                <option value="追加">追加</option>
                            </select>
                        </div>
                    </div>
                    <div className='bottombox'>
                        <input type="button" value='搜索' onClick={this.searchInt}/>
                        <input type="button" value='重置' onClick={this.reset}/>
                    </div>
                    <div className='table'>
                        <Table pagination={{defaultCurrent:1,defaultPageSize:5}} columns={this.state.columns} dataSource={this.state.integra} />
                    </div>
                </div>
            </div>
        )
    }
}

export default IntegralUse
