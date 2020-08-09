import React, {Component} from 'react';
import {inject,observer} from "mobx-react";
import {Table,Collapse } from "antd";
import {Link} from "react-router-dom";
import './userNews.css'
const { Panel } = Collapse;

@inject('user')
@observer
class UserNews extends Component {
    constructor() {
        super();
        this.state={
            usernews:[],
            columns:[
                {
                    title: '序号',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '关联账号',
                    dataIndex: 'account',
                    key: 'id',
                },
                {
                    title: '用户名',
                    dataIndex: 'userName',
                    key: 'id',
                },
                {
                    title: '账号关系',
                    dataIndex: 'account_rea',
                    key: 'id',
                },
                {
                    title: '身份证号',
                    dataIndex: 'cart_id',
                    key: 'id',
                },
                {
                    title: '账号类型',
                    dataIndex: 'type',
                    key: 'id',
                }
            ],
            columns1:[
                {
                    title: '序号',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '联络方式',
                    dataIndex: 'type',
                    key: 'id',
                },
                {
                    title: '号码',
                    dataIndex: 'tel',
                    key: 'id',
                },
                {
                    title: '联络人姓名',
                    dataIndex: 'name',
                    key: 'id',
                },
                {
                    title: '选用',
                    dataIndex: 'isuse',
                    key: 'id',
                }
            ],
            columns2:[
                {
                    title: '序号',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '详情地址',
                    dataIndex: 'address',
                    key: 'id',
                },
                {
                    title: '邮编',
                    dataIndex: 'email',
                    key: 'id',
                },
                {
                    title: '地址类型',
                    dataIndex: 'type',
                    key: 'id',
                },
                {
                    title: '收货人',
                    dataIndex: 'name',
                    key: 'id',
                },
                {
                    title: '收货人手机号码',
                    dataIndex: 'phone',
                    key: 'id',
                },
                {
                    title: '是否默认',
                    dataIndex: 'isDef',
                    key: 'id',
                }
            ],
            columns3:[
                {
                    title: '序号',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '操作人',
                    dataIndex: 'name',
                    key: 'id',
                },
                {
                    title: '操作时间',
                    dataIndex: 'time',
                    key: 'id',
                },
                {
                    title: '操作内容',
                    dataIndex: 'content',
                    key: 'id',
                },
            ],
            relation:[]
        }
    }
    componentWillMount() {
        let user_cartId=this.props.location.query.user_cartId;
        let userNews=this.props.user.userlist.filter(item=>{
            return item.user_cartId===user_cartId
        })
        this.setState({
            usernews:userNews[0]
        })
        this.props.user.getrelation({user_cartId:user_cartId})
            .then(data=>{
                this.setState({
                    relation:this.props.user.relation
                })
            })
    }
    render() {
        let user_locking=this.state.usernews.user_locking;
        let str=''
        if (user_locking===1){
            str='已锁定'
        }else if (user_locking===0){
            str='未锁定'
        }
        return (
            <div>
                <div className='nav'>
                    <span>商城管理系统</span><span>></span>
                    <Link to='/home/user/UserList'>用户列表</Link><span>></span>
                    <span>用户详情</span>
                </div>
                {/*this.props.location.query.user_cartId*/}
                <strong className='userNewsTitle'>用户基本信息</strong>
                <div>
                    <table  width="100%" border="0" cellSpacing="0" cellPadding="0" >
                        <tbody>
                        <tr height='30px'>
                            <td width='33%'>卡号：{this.state.usernews.user_cartId}</td>
                            <td width='33%'>性别：{this.state.usernews.user_sex}</td>
                            <td width='33%'>账号状态：{this.state.usernews.user_status}</td>
                        </tr>
                        <tr height='30px'>
                            <td>用户名：{this.state.usernews.user_name}</td>
                            <td>生日：{this.state.usernews.user_bir}</td>
                            <td>锁定状态：{str}</td>
                        </tr>
                        <tr height='30px'>
                            <td>用户类型：{this.state.usernews.user_type}</td>
                            <td>用户职级：{this.state.usernews.user_rank}</td>
                            <td>用户等级：{this.state.usernews.user_grade}</td>
                        </tr>
                        <tr height='30px'>
                            <td>历史最高职级：{this.state.usernews.user_Mrank}</td>
                            <td>注册时间：{this.state.usernews.user_retime}</td>
                            <td>激活时间：{this.state.usernews.act_time}</td>
                        </tr>
                        <tr height='30px'>
                            <td>签约时间：{this.state.usernews.sign_time}</td>
                            <td>开卡时间：{this.state.usernews.openCart_time}</td>
                            <td>购物积分：
                                <Link to={{
                                    pathname:'/home/integral',
                                    query:{user_cartId:this.state.usernews.user_cartId
                                    }}}>{this.state.usernews.shop_rank}</Link></td>
                        </tr>
                        <tr height='30px'>
                            <td>直销体验点：{this.state.usernews.exp_point}</td>
                            <td>证件类型：{this.state.usernews.cart_type}</td>
                            <td>证件号码：{this.state.usernews.cart_id}</td>
                        </tr>
                        <tr height='30px'>
                            <td>绑定手机号：{this.state.usernews.user_tel}</td>
                            <td>绑定邮箱地址：{this.state.usernews.user_email}</td>
                            <td>经销商商户名称：
                                <Link to={{pathname:'/home/Distributor',query:{user_cartId:this.state.usernews.user_cartId}}}>
                                    {this.state.usernews.distributor}
                                </Link>
                            </td>
                        </tr>
                        <tr height='30px'>
                            <td>配偶身份证：{this.state.usernews.spouse_cart}</td>
                            <td>配偶姓名：{this.state.usernews.spouse_name}</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <strong className='userNewsTitle'>夫妻账号/合作伙伴账号</strong>
                <Table pagination={false} columns={this.state.columns} dataSource={this.state.relation.relation} />
                <strong className='userNewsTitle'>用户联系方式</strong>
                <Table pagination={false} columns={this.state.columns1} dataSource={this.state.relation.telArr} />
                <strong className='userNewsTitle'>用户地址</strong>
                <Table pagination={false} columns={this.state.columns2} dataSource={this.state.relation.addressArr} />

                <div className='box'>
                    <strong>用户历史订单</strong>
                    <Link to=''><span>点击进入订单查询列表</span></Link>
                </div>
                <div className='box'>
                    <strong>用户券使用情况</strong>
                    <Link to={{pathname:'/home/CouponUse',query:{user_cartId:this.state.usernews.user_cartId}}}><span>点击查看</span></Link>
                </div>
                <div className='box'>
                    <strong>用户参与活动情况</strong>
                    <Link to={{pathname:'/home/JoinActivity',query:{user_cartId:this.state.usernews.user_cartId}}}><span>点击查看</span></Link>
                </div>
                <div>
                    <Collapse accordion>
                        <Panel header="操作日志" key="1">
                            <Table pagination={false} columns={this.state.columns3} dataSource={this.state.relation.useArr} />
                        </Panel>
                    </Collapse>
                </div>
            </div>
        )
    }
}

export default UserNews
