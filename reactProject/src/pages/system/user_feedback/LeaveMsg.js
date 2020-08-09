import React, {Component} from 'react';
import {DatePicker, Space, Table, Rate, Pagination} from 'antd'
import {Link} from "react-router-dom";
import {inject,observer} from "mobx-react";
import './eva.css'

const { RangePicker } = DatePicker;


@inject('system')
@observer
class LeaveMsg extends Component {
    constructor() {
        super();
        this.state={
            pageArr:[5,10,15,20],
            msg:[],
            columns:[
                {
                    title: '序号',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '卡号',
                    dataIndex: 'msg_no',
                    key: 'id',
                },
                {
                    title: '用户手机号',
                    dataIndex: 'phone',
                    key: 'id',
                },
                {
                    title: '用户姓名',
                    dataIndex: 'user_name',
                    key: 'id',
                },
                {
                    title: '反馈类型',
                    dataIndex: 'msg_type',
                    key: 'id',
                },
                {
                    title: '整体满意度',
                    dataIndex: 'msg_sat',
                    key: 'id',
                },
                {
                    title: '反馈时间',
                    dataIndex: 'msg_time',
                    key: 'id',
                },
                {
                    title: '反馈内容',
                    dataIndex: 'msg_content',
                    key: 'id',
                },
            ],
            msg_time:[],
            pageNum:'',
            pageSize:'',
            id_no:'',
            user_tel:'',
            user_name:'',
            msg_type:'',
            msg_eva:'',
        }
    }
    componentWillMount() {
        let obj={
            id_no:'',
            user_tel:'',
            user_name:'',
            msg_type:'',
            msg_eva:'',
            msg_time:'',
            pageNum:1,
            pageSize:10
        }
        this.props.system.searchMsg(obj)
            .then(data=>{
                this.setState({
                    msg:this.props.system.leaveMsg
                })
            })
    }
    getTime=(data)=>{
         console.log(data[0]._d.toLocaleString())
         console.log(data[1]._d.toLocaleString())
         let date={start:data[0]._d.toLocaleString(),end:data[1]._d.toLocaleString()}
         this.setState({
             msg_time:date
         })
     }

    searchMsg=()=>{
        let obj={
            id_no:this.id_no.value,
            user_tel:this.user_tel.value,
            user_name:this.user_name.value,
            msg_type:this.msg_type.value,
            msg_eva:this.msg_eva.value,
            msg_time:this.state.msg_time,
            pageNum:this.state.pageNum,
            pageSize:this.state.pageSize
        }
        this.setState({
            id_no:this.id_no.value,
            user_tel:this.user_tel.value,
            user_name:this.user_name.value,
            msg_type:this.msg_type.value,
            msg_eva:this.msg_eva.value,
        })
        console.log(obj)
        this.props.system.searchMsg(obj)
            .then(data=>{
                this.setState({
                    msg:this.props.system.leaveMsg
                })
            })
    }
    SizeChange=(pageNumber,pageSize)=>{
        this.setState({
            pageNum:pageNumber,
            pageSize:pageSize
        })
        let obj={
            id_no:this.state.id_no,
            user_tel:this.state.user_tel,
            user_name:this.state.user_name,
            msg_type:this.state.msg_type,
            msg_eva:this.state.msg_eva,
            msg_time:this.state.msg_time,
            pageNum:pageNumber,
            pageSize:pageSize
        }
        this.props.system.searchMsg(obj)
            .then(data=>{
                this.setState({
                    msg:this.props.system.leaveMsg
                })
            })
    }
    onChange=(pageNumber,pageSize)=>{
        this.setState({
            pageNum:pageNumber,
            pageSize:pageSize
        })
        let obj={
            id_no:this.state.id_no,
            user_tel:this.state.user_tel,
            user_name:this.state.user_name,
            msg_type:this.state.msg_type,
            msg_eva:this.state.msg_eva,
            msg_time:this.state.msg_time,
            pageNum:pageNumber,
            pageSize:pageSize
        }
        this.props.system.searchMsg(obj)
            .then(data=>{
                this.setState({
                    msg:this.props.system.leaveMsg
                })
            })
    }
    reset=()=>{
        this.id_no.value=''
        this.user_tel.value=''
        this.user_name.value=''
        this.setState({
            id_no:'',
            user_tel:'',
            user_name:'',
            msg_type:'',
            msg_eva:'',
            msg_time:'',
            pageNum:1,
            pageSize:10
        })
        let obj={
            id_no:'',
            user_tel:'',
            user_name:'',
            msg_type:'',
            msg_eva:'',
            msg_time:'',
            pageNum:1,
            pageSize:10
        }
        this.props.system.searchMsg(obj)
            .then(data=>{
                this.setState({
                    msg:this.props.system.leaveMsg
                })
            })
    }
    render() {
        return (
            <div>
                <div className='nav'>
                    <span>商城管理系统</span><span>></span>
                    <span>系统管理</span><span>></span>
                    <span>用户反馈</span><span>></span>
                    <span>用户留言</span>
                </div>
                <div>
                    <div className='evaTop'>
                        <div>
                            卡号：<input type="text" ref={id_no=>this.id_no=id_no}/>
                        </div>
                        <div>
                            用户手机号：<input type="text" ref={user_tel=>this.user_tel=user_tel}/>
                        </div>
                        <div>
                            用户姓名：<input type="text" ref={user_name=>this.user_name=user_name}/>
                        </div>
                        <div>
                            反馈类型：
                            <select name="" id="" ref={msg_type=>this.msg_type=msg_type}>
                                <option value="服务建议">服务建议</option>
                                <option value="网站建设">网站建设</option>
                                <option value="产品建议">产品建议</option>
                            </select>
                        </div>
                    </div>
                    <div className='evaMiddle'>
                        <div>
                            反馈时间：<RangePicker placeholder={['开始时间','结束时间']}
                        onChange={this.getTime}/>
                        </div>
                        <div>
                            反馈评价：
                            <select name="" id="" ref={msg_eva=>this.msg_eva=msg_eva}>
                                <option value="好评">好评</option>
                                <option value="中评">中评</option>
                                <option value="差评">差评</option>
                            </select>
                        </div>
                    </div>
                    <div className='evaBottom'>
                        <input type="button" value='搜索' onClick={this.searchMsg}/>
                        <input type="button" value='重置' onClick={this.reset}/>
                        <input type="button" value='数据导出'/>
                    </div>
                    <div className='evaTab'>
                        <Table pagination='false' columns={this.state.columns} dataSource={this.state.msg} />
                        <Pagination showSizeChanger='true'
                                    showQuickJumper defaultCurrent={1}
                                    total={this.state.msg.length}
                                    onShowSizeChange={this.SizeChange}
                                    onChange={this.onChange}
                                    pageSizeOptions={this.state.pageArr}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaveMsg
