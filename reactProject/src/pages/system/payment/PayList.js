import React, {Component} from 'react';
import {Table,Space,Popconfirm, message} from "antd";
import {Link} from "react-router-dom";
import {inject,observer} from "mobx-react";
import './pay.css'

@inject('system')
@observer
class PayList extends Component {
    constructor() {
        super();
        this.state={
            paylist:[],
            columns:[
                {
                    title: '序号',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '支付方式',
                    dataIndex: 'pay_way',
                    key: 'id',
                },
                {
                    title: '创建人',
                    dataIndex: 'founder_name',
                    key: 'id',
                },
                {
                    title: '创建时间',
                    dataIndex: 'founder_time',
                    key: 'id',
                },
                {
                    title: '状态',
                    dataIndex: 'status',
                    key: 'id',
                    render:(status)=>{
                        if (status===0){
                            return (
                                <Space>
                                    <div>禁用</div>
                                </Space>
                            )
                        }else if (status===1){
                            return (
                                <Space>
                                    <div>启用</div>
                                </Space>
                            )
                        }
                    }
                },
                {
                    title: '操作',
                    dataIndex: 'id',
                    key: 'id',
                    render:(id,item)=>{
                        if (item.status===0){
                            return (
                                <Space>
                                    <Link to={{pathname:'/home/addPay',query:{item:item}}}>编辑</Link>
                                    <Popconfirm
                                        title="是否启用该支付模板?"
                                        onConfirm={()=>this.confirm(item)}
                                        onCancel={this.cancel}
                                        okText="是"
                                        cancelText="否"
                                    >
                                        <div>启用</div>
                                    </Popconfirm>
                                </Space>
                            )
                        }else if (item.status===1){
                            return (
                                <Space>
                                    <Link to={{pathname:'/home/addPay',query:{item:item}}}>编辑</Link>
                                    <Popconfirm
                                        title="是否禁用该支付模板?"
                                        onConfirm={()=>this.confirm(item)}
                                        onCancel={this.cancel}
                                        okText="是"
                                        cancelText="否"
                                    >
                                        <div>禁用</div>
                                    </Popconfirm>
                                </Space>
                            )
                        }
                    }
                },
            ],
            payWay:'',
            paySta:'',
        }
    }
    confirm=(item)=> {
        if (item.status===0){
            this.changePayStatus(item)
            message.success('启用成功');
        }else {
            this.changePayStatus(item)
            message.success('禁用成功');
        }

    }

    cancel=(e)=> {
        console.log(e);
        message.error('已取消');
    }

    changePayStatus=(item)=>{
        let obj={
            id:item.id,
            status:item.status
        }
        this.props.system.changePayStatus(obj)
            .then(data=>{
                this.props.system.searchPay({
                    payWay:'',
                    paySta:'',
                })
                    .then(data=>{
                        this.setState({
                            paylist:this.props.system.paylist
                        })
                    })
            })
    }
    componentWillMount() {
        let obj={
            payWay:'',
            paySta:'',
        }
        this.props.system.searchPay(obj)
            .then(data=>{
                this.setState({
                    paylist:this.props.system.paylist
                })
            })
    }
    addPay=()=>{
        this.props.history.push("/home/addPay")
    }
    searchPay=()=>{
        let obj={
            payWay:this.payWay.value,
            paySta:this.paySta.value,
        }
        this.setState({
            payWay:this.payWay.value,
            paySta:this.paySta.value,
        })
        this.props.system.searchPay(obj)
            .then(data=>{
                this.setState({
                    paylist:this.props.system.paylist
                })
            })
    }
    reset=()=>{
        this.payWay.value=''
        this.paySta.value=''
        this.setState({
            payWay:'',
            paySta:'',
        })
        let obj={
            payWay:'',
            paySta:'',
        }
        this.props.system.searchPay(obj)
            .then(data=>{
                this.setState({
                    paylist:this.props.system.paylist
                })
            })
    }

    render() {
        return (
            <div>
                <div className='nav'>
                    <span>商城管理系统</span><span>></span>
                    <span>系统管理</span><span>></span>
                    <span>支付设置</span><span>></span>
                    <span>支付方式列表</span>
                </div>
                <div>
                    <div className='payTop'>
                        <div>
                            支付方式：
                            <input type="text" ref={payWay=>this.payWay=payWay}/>
                        </div>
                        <div>
                            状态：
                            <select name="" id="" ref={paySta=>this.paySta=paySta}>
                                <option value="启用">启用</option>
                                <option value="禁用">禁用</option>
                            </select>
                        </div>
                    </div>
                    <div className='payBottom'>
                        <input type="button" value='搜索' onClick={this.searchPay}/>
                        <input type="button" value='重置' onClick={this.reset}/>
                        <input type="button" value='新增支付方式' onClick={this.addPay}/>
                    </div>
                    <div className='payTab'>
                        <Table pagination='false' columns={this.state.columns} dataSource={this.state.paylist} />
                    </div>
                </div>
            </div>
        )
    }
}

export default PayList
