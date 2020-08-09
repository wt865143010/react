import React, {Component} from 'react';
import {DatePicker,Space, Table} from 'antd';
import {inject,observer} from "mobx-react";
import {Link} from "react-router-dom";
import './coupon.css'

const { RangePicker } = DatePicker;

 @inject('user')
 @observer
class CouponUse extends Component {
    constructor() {
        super();
        this.state={
            columns:[
                {
                    title: '优惠券编号',
                    dataIndex: 'con_no',
                    key: 'id',
                },
                {
                    title: '优惠券类型',
                    dataIndex: 'con_type',
                    key: 'id',
                },
                {
                    title: '优惠券名称',
                    dataIndex: 'con_name',
                    key: 'id',
                },
                {
                    title: '领取时间',
                    dataIndex: 'in_time',
                    key: 'id',
                },
                {
                    title: '领取方式',
                    dataIndex: 'in_type',
                    key: 'id',
                },
                {
                    title: '状态',
                    dataIndex: 'use_type',
                    key: 'id',
                    render:(use_type,item)=>{
                        if (use_type===1){
                            return (
                                <Space size="middle">
                                    <div>已转让</div>
                                </Space>
                            )
                        }else if(use_type===2){
                            return (
                                <Space size="middle">
                                    <div>已使用</div>
                                </Space>
                            )
                        }else if (use_type===0){
                            return (
                                <Space size="middle">
                                    <div>未使用</div>
                                </Space>
                            )
                        }
                    }
                },
                {
                    title: '使用时间',
                    dataIndex: 'use_time',
                    key: 'id',
                },
                {
                    title: '使用方式',
                    dataIndex: 'use_type',
                    key: 'id',
                    render:(use_type,item)=>{
                        if (use_type===1){
                            return (
                                <Space size="middle">
                                    <div>付款消费</div>
                                </Space>
                            )
                        }else if(use_type===2){
                            return (
                                <Space size="middle">
                                    <div>已转让</div>
                                </Space>
                            )
                        }
                    }
                },
                {
                    title: '操作',
                    dataIndex: 'use_type',
                    key: 'id',
                    render:(use_type,item)=>{
                        if (use_type===0){
                            return (
                                <Space size="middle">
                                    <span onClick={()=>{
                                        this.recovery(item.con_no)
                                    }}>收回</span>
                                    <Link to=''>查看轨迹</Link>
                                </Space>
                            )
                        }else if (use_type===1){
                            return (
                                <Space size="middle">
                                    <span onClick={()=>{
                                        this.recovery(item.con_no)
                                    }}>收回</span>
                                </Space>
                            )
                        }else if (use_type===2){
                            return (
                                <Space size="middle">
                                    <Link to=''>查看轨迹</Link>
                                </Space>
                            )
                        }
                    }
                },
            ],
            coupon:[],
            getTime:[],
            useTime:[],
            cou_no:'',
            cou_type:'',
            cou_name:'',
            cou_way:'',
        }
    }
    componentWillMount() {
        let obj={
            cou_no:'',
            cou_type:'',
            cou_name:'',
            cou_way:'',
            getTime:'',
            useTime:'',
            user_cartId:this.props.location.query.user_cartId
        }
        this.props.user.searchCou(obj)
            .then(data=>{
                this.setState({
                    coupon:this.props.user.coupon
                })
            })
    }
    //收回优惠券
     recovery=(no)=>{
        let obj={con_no:no}
        this.props.user.delCon(obj)
            .then(data=>{
                this.props.user.searchCou({
                    cou_no:this.state.cou_no,
                    cou_type:this.state.cou_type,
                    cou_name:this.state.cou_name,
                    cou_way:this.state.cou_way,
                    getTime:this.state.getTime,
                    useTime:this.state.useTime,
                    user_cartId:this.props.location.query.user_cartId
                })
                    .then(data=>{
                        this.setState({
                            coupon:this.props.user.coupon
                        })
                    })
            })
     }
     getTime1=(data)=>{
         let time1={
             start:data[0]._d.toLocaleString(),
             end:data[1]._d.toLocaleString()
         }
         this.setState({
             getTime:time1
         })
     }
     getTime2=(data)=>{
         let time2={
             start:data[0]._d.toLocaleString(),
             end:data[1]._d.toLocaleString()
         }
         this.setState({
             useTime:time2
         })
     }
     searchCou=()=>{
         let obj={
             cou_no:this.state.cou_no,
             cou_type:this.state.cou_type,
             cou_name:this.state.cou_name,
             cou_way:this.state.cou_way,
             getTime:this.state.getTime,
             useTime:this.state.useTime,
             user_cartId:this.props.location.query.user_cartId
         }
         this.setState({
             cou_no:this.cou_no.value,
             cou_type:this.cou_type.value,
             cou_name:this.cou_name.value,
             cou_way:this.cou_way.value,
         })

         this.props.user.searchCou(obj)
             .then(data=>{
                 this.setState({
                     coupon:this.props.user.coupon
                 })
             })
     }
     reset=()=>{
         this.cou_no.value=''
         this.cou_type.value=''
         this.cou_name.value=''
         this.cou_way.value=''
         let obj={
             cou_no:'',
             cou_type:'',
             cou_name:'',
             cou_way:'',
             getTime:'',
             useTime:'',
             user_cartId:this.props.location.query.user_cartId
         }
         this.setState({
             cou_no:'',
             cou_type:'',
             cou_name:'',
             cou_way:'',
             getTime:'',
             useTime:'',
         })
         this.props.user.searchCou(obj)
             .then(data=>{
                 this.setState({
                     coupon:this.props.user.coupon
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
                    <span>优惠券详情</span>
                </div>
                <div>
                    <div className='allTopBox'>
                        <div className='topBox'>
                            优惠券编号：<input type="text" ref={cou_no=>this.cou_no=cou_no}/>
                        </div>
                        <div className='topBox'>
                            优惠券类型：
                            <select name="" id="" ref={cou_type=>this.cou_type=cou_type}>
                                <option value="全部">全部</option>
                                <option value="优惠券">优惠券</option>
                                <option value="免运费券">免运费券</option>
                                <option value="资格券">资格券</option>
                            </select>
                        </div>
                        <div className='topBox'>
                            优惠券名称：  <input type="text" ref={cou_name=>this.cou_name=cou_name}/>
                        </div>
                        <div className='topBox'>
                            领取方式：
                            <select name="" id="" ref={cou_way=>this.cou_way=cou_way}>
                                <option value="全部">全部</option>
                                <option value="系统发放">系统发放</option>
                                <option value="主动领取">主动领取</option>
                                <option value="用户转让">用户转让</option>
                        </select>
                        </div>
                    </div>
                    <div className='middleBox'>
                        <div>
                            领取时间：<RangePicker placeholder={['开始时间','结束时间']} onChange={this.getTime1}/>
                        </div>
                        <div>
                            使用时间：<RangePicker placeholder={['开始时间','结束时间']} onChange={this.getTime2}/>
                        </div>
                    </div>
                    <div className='bottomBox'>
                        <input type="button" value='搜索' onClick={this.searchCou}/>
                        <input type="button" value='重置' onClick={this.reset}/>
                        <input type="button" value='导出数据'/>
                    </div>
                    <div>
                        {/*<ul className='myUl'>*/}
                        {/*    <li>全部</li>*/}
                        {/*    <li>已使用</li>*/}
                        {/*    <li>未使用</li>*/}
                        {/*    <li>已过期</li>*/}
                        {/*    <li>已作废</li>*/}
                        {/*    <li>已转让</li>*/}
                        {/*</ul>*/}
                        <Table pagination={false} columns={this.state.columns} dataSource={this.state.coupon} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CouponUse
