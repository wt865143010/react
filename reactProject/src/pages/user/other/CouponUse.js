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
                    dataIndex: 'cid',
                    key: 'id',
                },
                {
                    title: '优惠券类型',
                    dataIndex: 'couponType',
                    key: 'id',
                    render:(couponType)=>{
                       if (couponType==0){
                           return (
                               <Space>
                                   <div>资格券</div>
                               </Space>
                           )
                       }else if(couponType==1){
                           return (
                               <Space>
                                   <div>优惠券</div>
                               </Space>
                           )
                       }else {
                           return (
                               <Space>
                                   <div>免运费券</div>
                               </Space>
                           )
                       }
                    }
                },
                {
                    title: '优惠券名称',
                    dataIndex: 'couponName',
                    key: 'id',
                },
                {
                    title: '领取时间',
                    dataIndex: 'receiveDate',
                    key: 'id',
                },
                {
                    title: '领取方式',
                    dataIndex: 'receiveType',
                    key: 'id',
                },
                {
                    title: '状态',
                    dataIndex: 'couponStatus',
                    key: 'id',
                    render:(couponStatus,item)=>{
                        if (couponStatus==1){
                            return (
                                <Space size="middle">
                                    <div>未转让</div>
                                </Space>
                            )
                        }else if(couponStatus==2){
                            return (
                                <Space size="middle">
                                    <div>已过期</div>
                                </Space>
                            )
                        }else if (couponStatus==0){
                            return (
                                <Space size="middle">
                                    <div>已使用</div>
                                </Space>
                            )
                        }else if (couponStatus==3){
                            return (
                                <Space size="middle">
                                    <div>已作废</div>
                                </Space>
                            )
                        }else if (couponStatus==4){
                            return (
                                <Space size="middle">
                                    <div>已转让</div>
                                </Space>
                            )
                        }
                    }
                },
                {
                    title: '使用时间',
                    dataIndex: 'useDate',
                    key: 'id',
                },
                {
                    title: '使用方式',
                    dataIndex: 'useType',
                    key: 'id',
                },
                {
                    title: '操作',
                    dataIndex: 'couponStatus',
                    key: 'id',
                    render:(couponStatus,item)=>{
                        if (couponStatus==2||couponStatus==3){
                            return (
                                <Space size="middle">
                                    <Link to=''>查看轨迹</Link>
                                </Space>
                            )
                        }else{
                            return (
                                <Space size="middle">
                                    <span onClick={()=>{
                                        this.recovery(item.cid)
                                    }}>收回</span>
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
            cid:'',
            couponType:'',
            couponName:'',
            receiveType:'',
            restartDate:'',
            reendDate:'',
            usestartDate:'',
            useendDate:'',
            cardNumber:this.props.location.query.user_cartId
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
        this.props.user.delCon({cid:no})
            .then(data=>{
                this.props.user.searchCou({
                    cid:this.state.cou_no,
                    couponType:this.state.cou_type,
                    couponName:this.state.cou_name,
                    receiveType:this.state.cou_way,
                    restartDate:this.state.restartDate,
                    reendDate:this.state.reendDate,
                    usestartDate:this.state.usestartDate,
                    useendDate:this.state.useendDate,
                    cardNumber:this.props.location.query.user_cartId
                })
                    .then(data=>{
                        this.setState({
                            coupon:this.props.user.coupon
                        })
                    })
            })
     }
     getTime1=(data)=>{
         this.setState({
             restartDate:data[0]._d.toLocaleString(),
             reendDate:data[1]._d.toLocaleString(),
         })
     }
     getTime2=(data)=>{
         this.setState({
             usestartDate:data[0]._d.toLocaleString(),
             useendDate:data[1]._d.toLocaleString(),
         })
     }
     searchCou=()=>{
         let obj={
             cid:this.cou_no.value,
             couponType:this.cou_type.value,
             couponName:this.cou_name.value,
             receiveType:this.cou_way.value,
             restartDate:this.state.restartDate,
             reendDate:this.state.reendDate,
             usestartDate:this.state.usestartDate,
             useendDate:this.state.useendDate,
             cardNumber:this.props.location.query.user_cartId
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
             cid:'',
             couponType:'',
             couponName:'',
             receiveType:'',
             restartDate:'',
             reendDate:'',
             usestartDate:'',
             useendDate:'',
             cardNumber:this.props.location.query.user_cartId
         }
         this.setState({
             cou_no:'',
             cou_type:'',
             cou_name:'',
             cou_way:'',
             restartDate:'',
             reendDate:'',
             usestartDate:'',
             useendDate:'',
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
                                <option value="">全部</option>
                                <option value="0">优惠券</option>
                                <option value="1">免运费券</option>
                                <option value="2">资格券</option>
                            </select>
                        </div>
                        <div className='topBox'>
                            优惠券名称：  <input type="text" ref={cou_name=>this.cou_name=cou_name}/>
                        </div>
                        <div className='topBox'>
                            领取方式：
                            <select name="" id="" ref={cou_way=>this.cou_way=cou_way}>
                                <option value="">全部</option>
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
                        <Table pagination={{defaultCurrent:1,defaultPageSize:5}} columns={this.state.columns} dataSource={this.state.coupon} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CouponUse
