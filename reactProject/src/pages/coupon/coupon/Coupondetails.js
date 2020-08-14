import React, { Component } from 'react';
import './Coupondetails.css'
import {inject,observer} from "mobx-react";
import { Link } from 'react-router-dom'

import { Table,Space,Pagination } from 'antd'
import {toJS} from 'mobx'

@inject('coupon')

@observer
class Coupondetails extends Component {
    constructor(){
        super()
        this.state={
            chooseproduct:[], //必选产品数据
            choosegift:[], //必选赠品数据
            optionaldata:[], //可选产品数据
            optionalgift:[], //可选赠品数据
            userdetailsdata:[], //用户数据
            coupondetailsdata:[],//优惠券详情数据
            cid:'', //卡号
            username:'',//姓名
            phone:'',//用户手机号
            cardNumber:'', //卡号
            usertype:'',//用户类型
            posName:'',//用户职级
            date:'',//领取时间
            type:'',//领取方式
            userDate:'', //使用时间
            status:'', //状态
            oddNumber:'', //订单单号
            usergrade:'',//用户等级
        }
    }

    UNSAFE_componentWillMount(){
        this.props.coupon.getalldetails(this.props.history.location.state)
        .then(res=>{
            console.log(res)
            this.setState({
                coupondetailsdata:res.Coupon,
                
            })
        })

        console.log(this.props.history.location.state)
        this.state.coupondetailsdata = toJS(this.props.coupon.coupondetailsdata)
        this.state.choosegift=toJS(this.props.coupon.choosegift)
        this.state.optionalgift=toJS(this.props.coupon.optionalgift)
        this.state.chooseproduct = toJS(this.props.coupon.chooseproduct)
        this.state.optionaldata = toJS(this.props.coupon.optionaldata)
        this.state.userdetailsdata = toJS(this.props.coupon.userdetailsdata)
    }


    //存储卡号
    changecardid(e){
        this.state.cid = e.target.value
        
    }

    //存储姓名
    changename(e){
        this.state.username = e.target.value
    }

    //存储手机
    changephone(e){
        this.state.phone = e.target.value
    }

    //存储状态
    changestatus(e){
        this.state.status = e.target.value
    }

    //存储用户类型
    changeusertype(e){
        this.state.usertype = e.target.value
    }

    //存储用户等级
    changeusergrade(e){
        this.state.usergrade = e.target.value
    }

    //存储用户职级
    changeuserpos(e){
        this.state.posName = e.target.value
    }

    //搜索
    clicksearch(e){
        console.log(this.state)
    }

    //搜索用户
    screen(e){

        console.log(e.target.innerHTML)
        this.props.coupon.getuser(e.target.innerHTML)
    }
    //改变页码
    changepage(current,pagesize){
        console.log(current)
        console.log(pagesize)
    }


    render() {


        const columns = [
            {
                title: '产品名称',
                dataIndex: 'requiredProductName',
                key: 'requiredProductName',
            },
            {
                title: '销售价格',
                dataIndex: 'sellingprice',
                key: 'sellingprice',
            },
            
            {
                title: '必选数量',
                dataIndex:'choosenumber',
                key: 'choosenumber',

            },

        ]
        const optionalcolumns = [
            {
                title: '产品名称',
                dataIndex: 'OptionalProductName',
                key: 'OptionalProductName',
            },
            
            {
                title: '销售价格',
                dataIndex:'sellingprice',
                key: 'sellingprice',

            },
            
        ]

        const userdatacolumns=[
            {
                title: '优惠券编码',
                dataIndex: 'couponID',
                key: 'couponID',
            },
            
            {
                title: '用户姓名',
                dataIndex:'username',
                key: 'username',

            },
            {
                title: '用户手机',
                dataIndex: 'userphone',
                key: 'userphone',
            },
            {
                title: '卡号',
                dataIndex: 'cardID',
                key: 'cardID',
            },
            {
                title: '用户类型',
                dataIndex: 'usertype',
                key: 'usertype',
            },
            {
                title: '用户等级',
                dataIndex: 'usergrade',
                key: 'usergrade',
            },
            {
                title: '用户职级',
                dataIndex: 'userposition',
                key: 'userposition',
            },
            {
                title: '领取时间',
                dataIndex: 'collectiontime',
                key: 'collectiontime',
            },
            {
                title: '领取方式',
                dataIndex: 'collectionaction',
                key: 'collectionaction',
            },
            {
                title: '使用时间',
                dataIndex: 'usertime',
                key: 'usertime',
            },
            {
                title: '状态',
                key: 'state',
                render:(text,record)=> {
                    if(record.state === 0){
                        return (<div>已使用</div>)
                    }else if(record.state === 1){
                        return (
                            <div>已占用</div>
                        )
                    }else if(record.state === 2){
                        return (<div>
                            已转让
                            </div>)
                    }else if(record.state === 3){
                        return (
                            <div>
                                未使用
                            </div>
                        )
                    }else if(record.state === 4){
                        return (
                            <div>
                                已过期
                            </div>
                        )
                    }else{
                        return (
                            <div>
                                已作废
                            </div>
                        )
                    }
                },
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => {
                    if(record.state === 0){
                        return (<div></div>)
                    }else if(record.state === 1){
                        return (
                            <div></div>
                        )
                    }else if(record.state === 2){
                        return (<div>
                            <a>查看轨迹</a>
                            </div>)
                    }else if(record.state === 3){
                        return (
                            <div>
                                <a>作废</a>
                                <a>查看轨迹</a>
                            </div>
                        )
                    }else if(record.state === 4){
                        return (
                            <div>

                            </div>
                        )
                    }else{
                        return (
                            <div>
                                <a style={{color:'red'}}>作废原因</a>
                            </div>
                        )
                    }
                }
            },
        ]
        return (
            <div className='detailsbox'>
                <h3  className='title' style={{fontWeight:'700',fontSize:'20px'}}>优惠券详情</h3>
                <div className='line'></div>
                <div className='detailscontent clearfix'>
                    <div className='top'>
                        <div className='fristline clearfix'>
                                <div className='addleft'>优惠券编号：</div>
                                <div className='addright'>123456</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>优惠券类型：</div>
                                <div className='addright'>优惠券</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>优惠券名称：</div>
                                <div className='addright'>新人礼品券</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>* 优惠金额：</div>
                                <div className='addright'>固定金额优惠（金额：减￥100.00，业绩：加100.00，奖金基数：加0，基数：减10）

</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>优惠券种类：</div>
                                <div className='addright'>产品券</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>* 满足金额：</div>
                                <div className='addright'>不限制</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>发放总量：</div>
                                <div className='addright'>1000000张</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>有效日期：</div>
                                <div className='addright'>指定日期 2017-10-10 至 2017-10-15</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>是否可转让：</div>
                                <div className='addright'>否</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>是否可叠加：</div>
                                <div className='addright'>是</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>优惠价格类型：</div>
                                <div className='addright'>常规价格类型</div>
                        </div>
                        <div className='fristline choosecouponline clearfix'>
                        <div className='choosecouponleft'>可用券产品：</div>
                        <div className='choosecouponright'>
                            <div className='choosecoupontop'>
                                <div>
                                    <span className='mandatory'>必选产品</span>
                                    
                                </div>
                                <div>
                                    <Table pagination={false} bordered dataSource={this.state.chooseproduct} columns={columns} />
                                </div>
                            </div>
                            <div className='choosecouponbottom'>
                                <div>
                                    <span className='mandatory'>可选产品</span>
                                    

                                </div>
                                <div>
                                    <Table pagination={false} bordered dataSource={this.state.optionaldata} columns={optionalcolumns} />
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div style={{height:'auto'}} className='fristline choosecouponline clearfix'>
                            <div className='choosecouponleft'>赠送礼品：</div>
                            <div className='choosecouponright'>
                            <div className='choosecoupontop'>
                                    <div>
                                        <span className='mandatory'>必送赠品</span>
                                        
                                    </div>
                                    <div>
                                        <Table pagination={false} bordered dataSource={this.state.choosegift} columns={columns} />;
                                    </div>
                                </div>
                                <div className='choosecouponbottom'>
                                    <div>
                                        <span className='mandatory'>可选赠品</span>
                                        
                                        <span>指定产品中任选</span>
                                        <span>1</span>
                                        <span>件</span>
                                    </div>
                                    <div>
                                        <Table pagination={false} bordered dataSource={this.state.optionalgift} columns={optionalcolumns} />;
                                    </div>
                                    <div></div>
                                </div>
                                </div>
                        </div>
                    </div>
                    </div>

                </div>
                <div className='clearfix' style={{marginTop:'15px'}}>
                    <h3  className='title' style={{fontWeight:'700',fontSize:'20px'}}>使用详情</h3>
                    <div style={{width:'600px',height:'31px',marginLeft:'100px',marginTop:'2px',lineHeight:'31px'}}>
                        <span style={{fontWeight:'700',color:'#0000FF'}}>发送数：</span>
                        <span>10000张</span>
                        <span style={{fontWeight:'700',color:'#0000FF',marginLeft:'20px'}}>已使用：</span>
                        <span>10000张</span>
                        <span style={{fontWeight:'700',color:'#0000FF',marginLeft:'20px'}}>转让数量：</span>
                        <span>10000张</span>
                        <span style={{fontWeight:'700',color:'#0000FF',marginLeft:'20px'}}>失效数量：</span>
                        <span>10000张</span>
                    </div>
                    <div className='line'></div>


                    <div style={{marginTop:'20px',paddingBottom:'100px'}}>
                        <div>
                            <div>
                                <span style={{marginLeft:'40px'}}>卡号：</span>
                                <input onChange={this.changecardid.bind(this)} style={{width:'120px',height:'25px'}}/>
                                <span style={{marginLeft:'60px'}}>姓名：</span>
                                <input onChange={this.changename.bind(this)} style={{width:'120px',height:'25px'}}/>
                                <span style={{marginLeft:'60px'}}>手机号码：</span>
                                <input onChange={this.changephone.bind(this)} style={{width:'120px',height:'25px'}}/>
                                <span style={{marginLeft:'60px'}}>状态：</span>
                                <select onChange={this.changestatus.bind(this)} style={{width:'100px',height:'22px'}} id="coupontype" >
                                    <option value="-1"> </option>
                                    <option value="0">临时</option>
                                    <option value="1">活动</option>
                                    <option value="2"> 不活动 </option>
                                    <option value="3"> 终止 </option>

                                </select>
                            </div>
                            <div style={{marginTop:'20px',lineHeight:'40px'}} className='clearfix'>
                                <span style={{marginLeft:'12px'}}>用户类型：</span>
                                <input onChange={this.changeusertype.bind(this)} style={{width:'120px',height:'25px'}}/>
                                <span style={{marginLeft:'32px'}}>用户等级：</span>
                                <input onChange={this.changeusergrade.bind(this)} style={{width:'120px',height:'25px'}}/>
                                <span style={{marginLeft:'60px'}}>职级名称：</span>

                                <select onChange={this.changeuserpos.bind(this)} style={{width:'120px',height:'22px',marginLeft:'0px'}} id="coupontype" >
                                    <option value="-1"> </option>
                                    <option value="0">主任</option>
                                    <option value="1">资深主任</option>
                                </select>
                                <div style={{marginRight:'70px'}} className='detailsbotton'> 数据导出</div>
                                <Link to='/home/coupon/coupon/couponlist'>
                                     <div style={{marginRight:'20px'}} className='detailsbotton'> 返回列表</div>
                                </Link>
                                
                                <div onClick={this.clicksearch.bind(this)} style={{marginRight:'20px',cursor:'pointer'}} className='detailsbotton'> 搜索</div>
                                
                            </div>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <div className='clearfix'>
                                <div onClick={this.screen.bind(this)} className='choosebutton'>全部</div>
                                <div onClick={this.screen.bind(this)} className='choosebutton'>已使用</div>
                                <div onClick={this.screen.bind(this)} className='choosebutton'>已占用</div>
                                <div onClick={this.screen.bind(this)} className='choosebutton'>已转让</div>
                                <div onClick={this.screen.bind(this)} className='choosebutton'>未使用</div>
                                <div onClick={this.screen.bind(this)} className='choosebutton'>已过期</div>
                                <div onClick={this.screen.bind(this)} className='choosebutton'>已作废</div>
                            </div>
                            <div>
                                <Table pagination={false} bordered dataSource={this.state.userdetailsdata} columns={userdatacolumns} />
                                <Pagination defaultCurrent={1} onChange={this.changepage.bind(this)} showSizeChanger total={this.state.userdetailsdata.length} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Coupondetails;