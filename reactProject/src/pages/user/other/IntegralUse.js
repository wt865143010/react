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
                    dataIndex: 'int_now',
                    key: 'id',
                },
                {
                    title: '变动积分',
                    dataIndex: 'int_ch',
                    key: 'id',
                },
                {
                    title: '变动类型',
                    dataIndex: 'int_type',
                    key: 'id',
                },
                {
                    title: '变动渠道',
                    dataIndex: 'int_channel',
                    key: 'id',
                },
                {
                    title: '变动原因',
                    dataIndex: 'int_reason',
                    key: 'id',
                },
                {
                    title: '测试时间',
                    dataIndex: 'int_time',
                    key: 'id',
                }
            ],
            useTime:'',
            dateTime:'',
            mytype:'',
            myway:'',
        }
    }
    componentWillMount() {
        let user_cartId=this.props.location.query.user_cartId;
        let userNews=this.props.user.userlist.filter(item=>{
            return item.user_cartId===user_cartId
        })
        this.setState({
            news:userNews[0]
        })
        let obj={
            dateTime:this.state.dateTime,
            mytype:this.state.mytype,
            myway:this.state.myway,
            useTime:this.state.useTime,
            user_cartId:this.props.location.query.user_cartId
        }
        this.props.user.searchInt(obj)
            .then(data=>{
                this.setState({
                    integra:this.props.user.integra
                })
            })
    }
    searchInt=()=>{
        this.setState({
            mytype:this.mytype.value,
            myway:this.myway.value,
        })
        let obj={
            dateTime:this.state.dateTime,
            mytype:this.state.mytype,
            myway:this.state.myway,
            useTime:this.state.useTime,
            user_cartId:this.props.location.query.user_cartId
        }
        this.props.user.searchInt(obj)
            .then(data=>{
                this.setState({
                    integra:this.props.user.integra
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
            useTime:date
        })
    }
    reset=()=>{
        let obj={
            dateTime:'',
            mytype:'',
            myway:'',
            useTime:'',
            user_cartId:this.props.location.query.user_cartId
        }
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
                    <Link to={{pathname:'/home/usernews',query:{user_cartId:this.props.location.query.user_cartId}}}>用户详情</Link><span>></span>
                    <span>积分详情</span>
                </div>
                <h1>积分使用</h1>
                <div>
                    <div className='topbox'>
                        <div>卡号：{this.state.news.user_cartId}</div>
                        <div>用户姓名：{this.state.news.user_name}</div>
                        <div>用户手机号：{this.state.news.user_tel}</div>
                        <div>用户当前积分：{this.state.news.shop_rank}</div>
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
                                <option value="所有类型">所有类型</option>
                                <option value="消费">消费</option>
                                <option value="追加">追加</option>
                            </select>
                        </div>
                        <div>
                            变更渠道：
                            <select name="" id="" ref={myway=>this.myway=myway}>
                                <option value="所有渠道">所有渠道</option>
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
                        <Table pagination={false} columns={this.state.columns} dataSource={this.state.integra} />
                    </div>
                </div>
            </div>
        )
    }
}

export default IntegralUse
