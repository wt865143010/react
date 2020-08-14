import React, { Component } from 'react';
import './activitylist.css'
import {DatePicker,Table,Space,Pagination} from 'antd'
import {inject,observer} from "mobx-react";
import {Link} from 'react-router-dom'
import {toJS} from 'mobx'



@inject('coupon')  

@observer
class activitylist extends Component {
    constructor(){
        super()
        this.state={
            promotiontype:'',
            activitydata:[],
            activityname:'', //活动名称
            activitytype:'', //活动类型
            createdDatestart:'',//创建开始时间
            createdDateend:'',//创建结束时间
            StopTime:'', //结束时间
            StartTime:'', //开始时间
            
        }
    }

    UNSAFE_componentWillMount(){
        this.state.activitydata = toJS(this.props.coupon.activitydata)
        this.props.coupon.getallactivity()
        .then(data=>{
            this.setState({
                activitydata:data
            })
        })
    }



    //创建时间
    createdDatestart(data,dataString){
        this.state.createdDatestart = dataString
    }
    createdDateend(data,dataString){
        this.state.createdDateend = dataString
    }

    //有效时间
    StartTime(data,dataString){
        this.state.StartTime = dataString
    }
    StopTime(data,dataString){
        this.state.StopTime = dataString
    }

    //活动类型
    changeactivitytype(e){
        console.log('+++++++++++')
        console.log(e.target.value)
    }

    choose(e){
        console.log(e.target.innerHTML)
        this.props.coupon.chooseitem(e.target.innerHTML)
        // .then(res=>{
        //     this.setState({
        //         activitydata:res
        //     })
        // })  
    }

    //获取活动名称
    getactivityname(e){
        this.state.activityname = e.target.value
    }

    //获取活动类型
    getactivitytype(e){
        this.state.activitytype = e.target.value
    }

    //搜索活动
    searchactivity(e){
        let data = {
            'activityName':this.state.activityname,
            'activityType':this.state.activitytype,
            'createdDatestart':this.state.createdDatestart,
            'createdDateend':this.state.createdDateend,
            'StartTime':this.state.starttime,
            'StopTime':this.state.StopTime,
            'page':1,
            'limit':10,
        }

        console.log(data)
        this.props.coupon.searchactivity(data)
        .then(res=>{
            this.setState({
                activitydata:res
            })
        })
    }

    //分页
    changepage(current,pagesize){
        let pagedata = {
            'page':current,
            'limit':pagesize
        }
        this.props.coupon.changepage_activitylist(pagedata)
        .then(data=>{
            this.setState({
                activitydata:data
            })
        })
    }

    
    render() {
        const activitycolumns = [
            {
                title: '序号',
                dataIndex: 'serialnumber',
                key: 'serialnumber',
            },
            
            {
                title: '活动编码',
                dataIndex:'activityNum',
                key: 'activityNum',

            },
            {
                title: '活动名称',
                dataIndex: 'activityName',
                key: 'activityName',
            },
            {
                title: '活动类型',
                dataIndex: 'activityType',
                key: 'activityType',
            },
            {
                title: '创建时间',
                dataIndex: 'createdDate',
                key: 'createdDate',
            },
            {
                title: '活动开始时间',
                dataIndex: 'activityStartTime',
                key: 'activityStartTime',
            },
            {
                title: '活动结束时间',
                dataIndex: 'activityStopTime',
                key: 'activityStopTime',
            },
            {
                title: '状态',
                key: 'status',
                render:(record) =>{
                    const state = record.status
                    const mydate = new Date()
                    var starttime = new Date(record.activityStartTime)
                    var endtime = new Date(record.activityStopTime)
                    
                    if(state == 0){
                        return (
                            <span>待审批</span>
                        )
                    }else if(state == 2){
                        return (
                            <span>审批不通过</span>
                        )
                    }else if(state == 1){
                        if(mydate < starttime){
                            return (
                                <span>待生效</span>
                            )
                        }else if(mydate > endtime){
                            return (
                                <span>已结束</span>
                            )
                        }else{
                            return (
                                <span>进行中</span>
                            )
                        }
                    }
                },

            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => {
                    let mytext = text.status
                    const mydate = new Date()
                    var starttime = new Date(record.activityStartTime)
                    var endtime = new Date(record.activityStopTime)
                    if(mytext == 1){
                        if(mydate<starttime){
                            return(
                                <Space size="middle">
                                {/* <a>{this.operation1.bind(this)}</ a> */}
                                    <a className='operation1'>活动详情</a>
                                    <a className='operation1'>编辑</a>
                                </Space>
                            )
                        }else if(mydate >endtime){
                            return(
                                <Space size="middle">
                                {/* <a>{this.operation1.bind(this)}</ a> */}
                                    <a className='operation1'>活动详情</a>
                                    <a className='operation1'>复制发布</a>
                                </Space>
                            )
                        }else{
                            return(
                                <Space size="middle">
                                {/* <a>{this.operation1.bind(this)}</ a> */}
                                    <a className='operation1'>活动详情</a>
                                    <a  className='operation1'>禁用</a>
                                </Space>
                            )
                        }
                        
                    }
                    if(mytext == 0){
                        return (
                            <Space size="middle">
                            {/* <a>{this.operation1.bind(this)}</ a> */}
                                <a className='operation1'>活动详情</a>
                                <a className='operation1'>审批确认</a>
                            </Space>
                        )
                    }
                    if(mytext == 2 ){
                        return (
                            <Space size="middle">
                            {/* <a>{this.operation1.bind(this)}</ a> */}
                                <a className='operation1'>活动详情</a>
                                <a className='operation1'>编辑</a>
                            </Space>
                        )
                    }
      
                },
            },
        ]
        return (
            <div className='activitylistbox'>
                <div className='actionbox'>
                    <div>
                        <span style={{marginLeft:'20px'}}>活动名称</span>
                        <input onChange={this.getactivityname.bind(this)} style={{width:'160px',height:'25px',marginLeft:'20px'}}/>
                        <span style={{marginLeft:'20px'}}>活动类型</span>
                        <select  onChange={this.getactivitytype.bind(this)} id="coupontype" >
                            <option value="-1">请选择类型</option>
                            <option value="0">满减促销</option>
                            <option value="1">特价促销</option>
                            <option value="2">满量促销</option>
                            <option value="3">满额促销</option>
                        </select>
                        <span style={{marginLeft:'40px'}}>创建时间</span>
                        <DatePicker style={{marginLeft:'20px',marginRight:'10px'}} onChange={this.createdDatestart.bind(this)} />
                        至
                        <DatePicker style={{marginLeft:'10px'}} onChange={this.createdDateend.bind(this)} />
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <span style={{marginLeft:'20px'}}>有效时间</span>
                        <DatePicker style={{marginLeft:'20px',marginRight:'10px'}} onChange={this.StartTime.bind(this)} />
                        至
                        <DatePicker style={{marginLeft:'10px'}} onChange={this.StopTime.bind(this)} />
                    </div>
                    <div className='clearfix' style={{marginTop:'18px'}}>
                        <div onClick={this.searchactivity.bind(this)} style={{background:'rgb(51,153,255)'}} className='activitybox'>搜索</div>
                        <div style={{background:'rgb(204,204,204)'}} className='activitybox'>重置</div>
                        <Link to='/home/coupon/activity/Addactivity'>
                            <div style={{background:'rgb(51,153,255)'}} className='activitybox'>新增</div>
                        </Link>
                        
                    </div>
                </div>
                <div className='activitycontent'>
                    <div style={{marginLeft:'25px'}}>
                        <div className='clearfix' style={{marginTop:'20px'}}>
                            <div onClick={this.choose} className='activitytype'>所有活动</div>
                            <div onClick={this.choose} className='activitytype'>进行中</div>
                            <div onClick={this.choose} className='activitytype'>待审批</div>
                            <div onClick={this.choose} className='activitytype'>待生效</div>
                            <div onClick={this.choose} className='activitytype'>已结束</div>
                            <div onClick={this.choose} className='activitytype'>草稿箱</div>
                            <div onClick={this.choose} className='activitytype'>禁用</div>
                        </div>
                        <div>
                        <Table dataSource={this.state.activitydata} pagination={false}  columns={activitycolumns} />

                        <Pagination defaultCurrent={1} onChange={this.changepage.bind(this)} showSizeChanger total={this.state.activitydata.length} />
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default activitylist;