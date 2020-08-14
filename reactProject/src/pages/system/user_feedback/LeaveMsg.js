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
                    dataIndex: 'cardNumber',
                    key: 'id',
                },
                {
                    title: '用户手机号',
                    dataIndex: 'phoneNumber',
                    key: 'id',
                },
                {
                    title: '用户姓名',
                    dataIndex: 'username',
                    key: 'id',
                },
                {
                    title: '反馈类型',
                    dataIndex: 'feedbackType',
                    key: 'id',
                },
                {
                    title: '整体满意度',
                    dataIndex: 'satisfaction',
                    key: 'id',
                },
                {
                    title: '反馈时间',
                    dataIndex: 'feedbackTime',
                    key: 'id',
                },
                {
                    title: '反馈内容',
                    dataIndex: 'feedbackContent',
                    key: 'id',
                },
            ],
            msg_time:[],
            id_no:'',
            user_tel:'',
            user_name:'',
            msg_type:'',
            msg_eva:'',
            start:'',
            end:''
        }
    }
    componentWillMount() {
        let obj={
            cardNumber:'',
            phoneNumber:'',
            username:'',
            feedbackType:'',
            satisfaction:'',
            feedbackTime:'',
            start:'',
            end:''
        }
        this.props.system.searchMsg1(obj)
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
             start:data[0]._d.toLocaleString(),
             end:data[1]._d.toLocaleString()
         })
     }

    searchMsg=()=>{
        let obj={
            cardNumber:this.id_no.value,
            phoneNumber:this.user_tel.value,
            username:this.user_name.value,
            feedbackType:this.msg_type.value,
            satisfaction:this.msg_eva.value,
            feedbackTime:this.state.msg_time,
            start:this.state.start,
            end:this.state.end
        }
        this.setState({
            cardNumber:this.id_no.value,
            phoneNumber:this.user_tel.value,
            username:this.user_name.value,
            feedbackType:this.msg_type.value,
            satisfaction:this.msg_eva.value,
            feedbackTime:this.state.msg_time,
        })
        console.log(obj)
        this.props.system.searchMsg1(obj)
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
            cardNumber:'',
            phoneNumber:'',
            username:'',
            feedbackType:'',
            satisfaction:'',
            feedbackTime:'',
            start:'',
            end:''
        })
        let obj={
            cardNumber:'',
            phoneNumber:'',
            username:'',
            feedbackType:'',
            satisfaction:'',
            feedbackTime:'',
            start:'',
            end:''
        }
        this.props.system.searchMsg1(obj)
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
                                <option value="">所有</option>
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
                        <Table columns={this.state.columns} pagination={{defaultCurrent:1,defaultPageSize:5}} dataSource={this.state.msg} />
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaveMsg
