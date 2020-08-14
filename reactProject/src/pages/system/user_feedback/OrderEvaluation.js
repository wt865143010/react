import React, {Component} from 'react';
import {DatePicker, Space, Table, Rate, Pagination} from 'antd'
import {Link} from "react-router-dom";
import {inject,observer} from "mobx-react";
import './eva.css'

const { RangePicker } = DatePicker;


@inject('system')
@observer
class OrderEvaluation extends Component {
    constructor() {
        super();
        this.state={
            pageArr:[5,10,15,20],
            eva:[],
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
                    title: '评价订单',
                    dataIndex: 'orderNumber',
                    key: 'id',
                    render:(ord_no)=>{
                        return (
                            <Space>
                                <Link to=''>{ord_no}</Link>
                            </Space>
                        )
                    }
                },
                {
                    title: '综合评价',
                    dataIndex: 'comprehensiveEvaluation',
                    key: 'id',
                },
                {
                    title: '产品评价',
                    dataIndex: 'productEvaluation',
                    key: 'id',
                    render:(pro_eva)=>{
                        return (
                            <Space>
                                <Rate disabled allowHalf  defaultValue={pro_eva} />
                            </Space>
                        )
                    }
                },
                {
                    title: '物流评价',
                    dataIndex: 'logisticsEvaluation',
                    key: 'id',
                    render:(log_eva)=>{
                        return (
                            <Space>
                                <Rate disabled allowHalf  defaultValue={log_eva} />
                            </Space>
                        )
                    }
                },
                {
                    title: '意见和建议',
                    dataIndex: 'opinion',
                    key: 'id',
                },
            ],
            eva_time:[],
            pageNum:'',
            pageSize:'',
            eva_no:'',
            user_tel:'',
            user_name:'',
            order_no:'',
            all_eva:'',
            start:'',
            end:''
        }
    }
    componentWillMount() {
        let obj={
            cardNumber:'',
            phoneNumber:'',
            username:'',
            orderNumber:'',
            comprehensiveEvaluation:'',
            evaluationTime:[],
            start:'',
            end:''
        }
        this.props.system.searchEva(obj)
            .then(data=>{
                this.setState({
                    eva:this.props.system.user_eva
                })
            })
    }

    getTime=(data)=>{
        // let date={start:data[0]._d.toLocaleString(),end:data[1]._d.toLocaleString()}
        this.setState({
            start:data[0]._d.toLocaleString(),
            end:data[1]._d.toLocaleString()
        })
    }
    searchEva=()=>{
        let obj={
            cardNumber:this.eva_no.value,
            phoneNumber:this.user_tel.value,
            username:this.user_name.value,
            orderNumber:this.order_no.value,
            evaluationTime:this.state.eva_time, /*{start:2017,end:2020}*/
            comprehensiveEvaluation:this.all_eva.value,
            start:this.state.start,
            end:this.state.end
        }
        console.log(obj)
        this.setState({
            cardNumber:this.eva_no.value,
            phoneNumber:this.user_tel.value,
            username:this.user_name.value,
            orderNumber:this.order_no.value,
            comprehensiveEvaluation:this.all_eva.value,
            start:'',
            end:''
        })
        this.props.system.searchEva(obj)
            .then(data=>{
                this.setState({
                    eva:this.props.system.user_eva
                })
            })
    }
    reset=()=>{
        this.eva_no.value=''
        this.user_tel.value=''
        this.user_name.value=''
        this.order_no.value=''
        this.setState({
            cardNumber:'',
            phoneNumber:'',
            username:'',
            orderNumber:'',
            comprehensiveEvaluation:'',
            evaluationTime:'',
            start:'',
            end:''
        })
        let obj={
            cardNumber:'',
            phoneNumber:'',
            username:'',
            orderNumber:'',
            comprehensiveEvaluation:'',
            evaluationTime:'',
            start:'',
            end:''
        }
        this.props.system.searchEva(obj)
            .then(data=>{
                this.setState({
                    eva:this.props.system.user_eva
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
                    <span>订单评价</span>
                </div>
                <div>
                    <div className='evaTop'>
                        <div>
                            卡号：<input type="text" ref={eva_no=>this.eva_no=eva_no}/>
                        </div>
                        <div>
                            用户手机号：<input type="text" ref={user_tel=>this.user_tel=user_tel}/>
                        </div>
                        <div>
                            用户姓名：<input type="text" ref={user_name=>this.user_name=user_name}/>
                        </div>
                        <div>
                            订单编号：<input type="text" ref={order_no=>this.order_no=order_no}/>
                        </div>
                    </div>
                    <div className='evaMiddle'>
                        <div>
                            评价时间：<RangePicker placeholder={['开始时间','结束时间']}
                        onChange={this.getTime}/>
                        </div>
                        <div>
                            综合评价：
                            <select name="" id="" ref={all_eva=>this.all_eva=all_eva}>
                                <option value="">全部</option>
                                <option value="好评">好评</option>
                                <option value="中评">中评</option>
                                <option value="差评">差评</option>
                            </select>
                        </div>
                    </div>
                    <div className='evaBottom'>
                        <input type="button" value='搜索' onClick={this.searchEva}/>
                        <input type="button" value='重置' onClick={this.reset}/>
                        <input type="button" value='数据导出'/>
                    </div>
                    <div className='evaTab'>
                        <Table columns={this.state.columns} pagination={{defaultCurrent:1,defaultPageSize:5}} dataSource={this.state.eva} />
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderEvaluation
