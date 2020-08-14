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
        this.props.coupon.getallcoupon()
        .then(res=>{
            for(let item in res){
                res[item].key = res[item].id
            }
            console.log(res)
            this.setState({
                dataSource:res
            })
        })
        // this.state.dataSource = toJS(this.props.coupon.dataSource)

    }

    //改变页码
    changepage(current,pagesize){
        this.props.coupon.changepage_couponlist(current,pagesize)
    }
    // addcoupon(){
    //     this.history.push('/Addcoupon')
    // }

    oncouponstate(e,record){
        console.log(e.target.innerHTML)
        console.log(record)
        if(record.status == 0){
            console.log('++++++')
            this.props.coupon.isDisable(1,record.id)
            .then(res=>{
                if(res == 200){
                   
                }
            })
            e.target.innerHTML = '启用'
            
        }else{
            this.props.coupon.isDisable(0,record.id)
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

    conditionsearch(e){
        console.log(e.target.innerHTML)
        this.props.coupon.conditionsearch(e.target.innerHTML)
        .then(res=>{
            this.setState({
                dataSource:res,
            })
        })
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
              dataIndex: 'cid',
              key: 'cid',
            },
            {
              title: '优惠券类型',
              
              key: 'couponType',
              render:(text,record)=>{
                  if(record.couponType == 0){
                      return (
                        <div>优惠券</div>
                      )
                  }else if(record.couponType == 1){
                      return (
                          <div>资格券</div>
                      )
                  }else{
                      return (
                          <div>免运费券</div>
                      )
                  }
              }
            },
            {
              title: '优惠券名称',
              dataIndex: 'couponName',
              key: 'couponName',
            },
            {
                title: '创建时间',
                dataIndex: 'createdDate',
                key: 'createdDate',
            },
            {
                title: '开始时间',
                dataIndex: 'createdDate',
                key: 'createdDate',
            },
            {
                title: '结束时间',
                dataIndex: 'endDate',
                key: 'endDate',
            },
            {
                title: '发放数量',
                dataIndex: 'usedQuantity',
                key: 'usedQuantity',
            },
            {
                title: '已使用数',
                dataIndex: 'usedQuantity',
                key: 'usedQuantity',
            },
            {
                title: '状态',
                key: 'status',
                render:(text,record)=>{
                    if(record.status == 0){
                        return (
                            <div>进行中</div>
                        )
                    }else{
                        return (
                            <div>已禁用</div>
                        )
                    }
                }
            },
            
                {
                    title: '操作',
                    key: 'action',
                    render: (text, record) => {

                        const editable = record.status;
                        
                        if(editable == 0){
                            return (
                            <Space size="middle">
                                <Link to={{pathname:'/home/coupon/coupon/Sendtomembers',state:{record}}}>
                                    <span className='operation1'>发送给会员</span>
                                </Link>
                                
 
    
                                <a className='operation2' onClick={e=>this.oncouponstate(e,record)}>禁用</a>
                                <Link to={{pathname:'/home/coupon/coupon/Coupondetails',state:{record}}}>
                                    <span>查看详情</ span>
                                </Link>
                            </Space>
                            )
                        }else{
                            return (
                                <Space size="middle">
                                    <Link to={{pathname:'/home/coupon/coupon/Editcoupon/',state:{record}}}>
                                    <span className='operation1'>编辑</span>
                                    </Link>

                                    <a className='operation2' onClick={e=>this.oncouponstate(e,record)}>启用</a>
                                    <Link to={{pathname:'/home/coupon/coupon/Coupondetails',state:{record}}}>
                                        <span >查看详情</ span>
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
            
            <div className='couponlistbox clearfix'>
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
                                <span className='couponstarttime'>创建时间</span>
                                <DatePicker onChange={this.onChangestart.bind(this)} />
                                <span className='couponendtime'>至</span>
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
                                    <li onClick={this.conditionsearch.bind(this)}>全部</li>
                                    <li onClick={this.conditionsearch.bind(this)}>进行中</li>
                                    <li onClick={this.conditionsearch.bind(this)}>已禁用</li>
                                </ul>
                            </div>
                        </div>
                        <div className='couponcontent'>
                        <Table width={1000} dataSource={this.state.dataSource} pagination={false}  columns={columns} />;
                        <Pagination defaultCurrent={1} onChange={this.changepage.bind(this)} showSizeChanger total={this.state.dataSource.length} />
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default couponlist;