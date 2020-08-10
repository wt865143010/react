import React, { Component,userState,createRef} from 'react';
import './couponlist.css'
import { DatePicker } from 'antd';
import {inject,observer} from "mobx-react";
import {Link} from 'react-router-dom'
import {toJS} from 'mobx'

import { Table, Space, Input, InputNumber, Popconfirm, Form , Pagination } from 'antd';




  


@inject('coupon')  


@observer
class couponlist extends Component {
    constructor(){
        super()
        this.state={
            dataSource:[],
            couponname:createRef(),
            coupontype:createRef(),
            starttime:'',
            endtime:'',
            data: [],
            pagination: {
                current: 1,
                pageSize: 10,
            },
            loading: false,
            
        }
    }



    UNSAFE_componentWillMount(){

        this.state.dataSource = toJS(this.props.coupon.dataSource)
        let operation1 = document.getElementsByClassName('operation1')
        console.log(this.state.dataSource.length)
        console.log(operation1.length)

        for(let i = 0; i < operation1.length; i ++){
            console.log(operation1[i])
            
            if(operation1[i].innerHTML == '进行中'){
                operation1[i].innerHTML = '发送给会员'
            }
        }
    }

    // addcoupon(){
    //     this.history.push('/Addcoupon')
    // }

    oncouponstate(e){
        console.log(e.target.innerHTML)
        if(e.target.innerHTML == '禁用'){
            this.props.coupon.isDisable(e.target.innerHTML)
            e.target.innerHTML = '已启用'
            
        }else{
            this.props.coupon.isDisable(e.target.innerHTML)
            e.target.innerHTML = '禁用'
        }
    }

    search(){
        console.log(this.state.couponname.current.value)
        console.log(this.state.coupontype.current.value)
        console.log(this.state)
        const data = {
            couponname : this.state.couponname.current.value,
            coupontype : this.state.coupontype.current.value,
            createdDate : this.state.starttime +"+"+this.state.endtime
        }
        this.props.coupon.searchAll(data)
        
    }
    onChangestart(date, dateString) {
        console.log(dateString)
        console.log(this.state)
        this.state.starttime = dateString
        console.log(this.state.starttime)
        
    };
    onChangeend(date,dateString){
        console.log(dateString)
        this.state.endtime = dateString
        console.log(this.state.endtime)
    }

    
    // operation1(text){
    //     console.log(text)
    //     if(this.state.dataSource.couponstate[1] == '进行中'){
    //         return(
    //             '123456'
    //         ) 
    //     }
    // }

    render() {
        
        let aa = document.getElementsByClassName('operation1')
        console.log(aa)
        for(let i =0; i < aa.length; i++){
            console.log(aa[i].innerHTML)
            if(aa[i].innerHTML == '进行中'){
                aa[i].innerHTML = '发送给会员'
            }
        }
    //    const aaa=()=>{
    //         console.log(123456)
    //     }
        const columns = [
            {
              title: '优惠券编号',
              dataIndex: 'couponnumber',
              key: 'couponnumber',
            },
            {
              title: '优惠券类型',
              dataIndex: 'coupontype',
              key: 'coupontype',
            },
            {
              title: '优惠券名称',
              dataIndex: 'couponname',
              key: 'couponname',
            },
            {
                title: '创建时间',
                dataIndex: 'couponstarttime',
                key: 'couponstarttime',
            },
            {
                title: '日期类型',
                dataIndex: 'datatype',
                key: 'datatype',
            },
            {
                title: '有效日期',
                dataIndex: 'effectivedate',
                key: 'effectivedate',
            },
            {
                title: '发放数量',
                dataIndex: 'sendnumber',
                key: 'sendnumber',
            },
            {
                title: '已使用数',
                dataIndex: 'usenumber',
                key: 'usenumber',
            },
            {
                title: '状态',
                dataIndex: 'couponstate',
                key: 'couponstate',
            },
            
                {
                    title: '操作',
                    key: 'action',
                    render: (text, record) => {

                        const editable = record.couponstate;
                        console.log(record.couponnumber)
                        if(editable == '进行中'){
                            return (
                            <Space size="middle">
                                <Link to={{pathname:'/home/coupon/coupon/Sendtomembers',state:{record}}}>
                                    <a className='operation1'>发送给会员</a>
                                </Link>
                                
 
    
                                <a className='operation2' onClick={e=>this.oncouponstate(e)}>禁用</a>
                                <Link to={{pathname:'/home/coupon/coupon/Coupondetails',state:{record}}}>
                                    <a>查看详情</ a>
                                </Link>
                            </Space>
                            )
                        }else{
                            return (
                                <Space size="middle">
                                    <Link to={{pathname:'/home/coupon/coupon/Editcoupon/',state:{record}}}>
                                    <a className='operation1'>编辑</a>
                                    </Link>

                                    <a className='operation2' onClick={e=>this.oncouponstate(e)}>已启用</a>
                                    <Link to={{pathname:'/home/coupon/coupon/Coupondetails',state:{record}}}>
                                        <a>查看详情</ a>
                                    </Link>
                                    
                                </Space>
                            )
                        }
                    }
                        

                        
                    
                },
            
        
        
        
          ];

        // function onChangestart(date, dateString) {
        //     console.log(dateString)
            
        //     // this.state.starttime = dateString
        // };
        // function onChangeend(date,dateString){
        //     console.log(dateString)
        //     this.state.endtime = dateString
        // }
        return (
            
            <div className='box clearfix'>
                <h3 className='title'>优惠券列表</h3>
                <div className='line'></div>
                <div className='content'>
                    <div className='inputbox'>
                        <div className='input_top clearfix'>
                            <div className='left1'>
                                <span>优惠券名称</span>
                                <input ref={this.state.couponname} type='text'/>
                            </div>
                            <div className='left2'>
                                <span>优惠券类型</span>
                                <select ref={this.state.coupontype} id="coupontype" >
                                    <option value="-1"></option>
                                    <option value="0">优惠券</option>
                                    <option value="1">资格券</option>
                                    <option value="2">免运费券</option>
                                </select>
                            </div>
                        </div>
                        <div className='input_bottom clearfix'>
                            <div className='searchtime'>
                                <span className='starttime'>创建时间</span>
                                <DatePicker onChange={this.onChangestart.bind(this)} />
                                <span className='endtime'>至</span>
                                <DatePicker onChange={this.onChangeend.bind(this)} />
                            </div>
                            <div className='buttonlist'>
                                <button onClick={this.search.bind(this)} className='searchbutton'>查询</button>
                                <Link to='/home/coupon/coupon/Addcoupon'>
                                <button className='addcoupon' onClick={this.addcoupon}>+新增优惠券</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='couponlist'>
                        <div className='couponbutton'>
                            <div>
                                <ul className='clearfix buttonbox'>
                                    <li>全部</li>
                                    <li>进行中</li>
                                    <li>已禁用</li>
                                </ul>
                            </div>
                        </div>
                        <div className='couponcontent'>
                        <Table dataSource={this.state.dataSource} pagination={false}  columns={columns} />;
                        <Pagination defaultCurrent={1} showSizeChanger total={this.state.dataSource.length} />
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default couponlist;