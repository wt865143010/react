import React, {Component} from 'react';
import './nwes.css'
import {DatePicker, Table,Space,Popconfirm, message} from "antd";
import {inject,observer} from "mobx-react";
import {Link} from "react-router-dom";

const { RangePicker } = DatePicker;


@inject('system')
@observer
class NewsTemplateList extends Component {
    constructor() {
        super();
        this.state={
            sys_news:[],
            columns:[
                {
                    title: '序号',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '消息渠道',
                    dataIndex: 'tem_way',
                    key: 'id',
                },
                {
                    title: '消息类型',
                    dataIndex: 'tem_type',
                    key: 'id',
                },
                {
                    title: '模板编码',
                    dataIndex: 'tem_no',
                    key: 'id',
                },
                {
                    title: '模板名称',
                    dataIndex: 'tem_name',
                    key: 'id',
                },
                {
                    title: '新建时间',
                    dataIndex: 'add_time',
                    key: 'id',
                },
                {
                    title: '报备时间',
                    dataIndex: 'rep_time',
                    key: 'id',
                },
                {
                    title: '报备状态',
                    dataIndex: 'rep_sta',
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
                        }else {
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
                    dataIndex: 'rep_sta',
                    key: 'id',
                    render:(rep_sta,item)=>{
                        if (rep_sta==='未报备'){
                            if (item.status===0){
                                return (
                                    <Space>
                                        <Link to={{pathname:'/home/addNewsTem',query:{item:item}}}>编辑</Link>
                                        <Popconfirm
                                            title="是否启用该消息模板?"
                                            onConfirm={()=>this.confirm(item)}
                                            onCancel={this.cancel}
                                            okText="是"
                                            cancelText="否"
                                        >
                                            <div onClick={()=>this.changeStatus(item)}>启用</div>
                                        </Popconfirm>
                                        <div onClick={()=>this.changeRepTime(item)}>报备</div>
                                    </Space>
                                )
                            }else {
                                return (
                                    <Space>
                                        <Link to={{pathname:'/home/addNewsTem',query:{item:item}}}>编辑</Link>
                                        <Popconfirm
                                            title="是否禁用该消息模板?"
                                            onConfirm={()=>this.confirm(item)}
                                            onCancel={this.cancel}
                                            okText="是"
                                            cancelText="否"
                                        >
                                            <div onClick={()=>this.changeStatus(item)}>禁用</div>
                                        </Popconfirm>

                                        <div onClick={()=>this.changeRepTime(item)}>报备</div>
                                    </Space>
                                )
                            }
                        }else {
                            if (item.status===0){
                                return (
                                    <Space>
                                        <Link to={{pathname:'/home/addNewsTem',query:{item:item}}}>编辑</Link>
                                        <Popconfirm
                                            title="是否启用该消息模板?"
                                            onConfirm={()=>this.confirm(item)}
                                            onCancel={this.cancel}
                                            okText="是"
                                            cancelText="否"
                                        >
                                            <div onClick={()=>this.changeStatus(item)}>启用</div>
                                        </Popconfirm>
                                    </Space>
                                )
                            }else {
                                return (
                                    <Space>
                                        <Link to={{pathname:'/home/addNewsTem',query:{item:item}}}>编辑</Link>
                                        <Popconfirm
                                            title="是否禁用该消息模板?"
                                            onConfirm={()=>this.confirm(item)}
                                            onCancel={this.cancel}
                                            okText="是"
                                            cancelText="否"
                                        >
                                            <div onClick={()=>this.changeStatus(item)}>禁用</div>
                                        </Popconfirm>
                                    </Space>
                                )
                            }
                        }
                    }
                },
            ],
            addTime:[],
            NewsMod:[],
            NewsWay:[],
            newWay:'',
            temName:'',
            newType:'',
            newSta:'',
            sta:'',
        }
    }
    confirm=(item)=> {
        if (item.status===0){
            this.changeStatus(item)
            message.success('启用成功');
        }else {
            this.changeStatus(item)
            message.success('禁用成功');
        }
    }

    cancel=(e)=> {
        message.error('已取消');
    }
    changeStatus=(item)=>{
        let obj={
            id:item.id,
            status:item.status
        }
        this.props.system.changeStatus(obj)
            .then(data=>{
                this.props.system.searchNews({
                    newWay:this.newWay.value,
                    temName:this.temName.value,
                    newType:this.newType.value,
                    newSta:this.newSta.value,
                    sta:this.sta.value,
                    addTime:this.state.addTime
                })
                    .then(data=>{
                        this.setState({
                            sys_news:this.props.system.newstem
                        })
                        // if (item.status===0){
                        //     this.changeStatus(item)
                        //     message.success('启用成功');
                        // }else {
                        //     this.changeStatus(item)
                        //     message.success('禁用成功');
                        // }
                    })
            })
    }

    changeRepTime=(item)=>{
        let obj={
            id:item.id,
            status:item.rep_sta
        }
        this.props.system.changeStatus(obj)
            .then(data=>{
                this.props.system.searchNews({
                    newWay:this.newWay.value,
                    temName:this.temName.value,
                    newType:this.newType.value,
                    newSta:this.newSta.value,
                    sta:this.sta.value,
                    addTime:this.state.addTime
                })
                    .then(data=>{
                        this.setState({
                            sys_news:this.props.system.newstem
                        })
                    })
            })
    }


    componentWillMount() {
        let obj={
            newWay:'',
            temName:'',
            newType:'',
            newSta:'',
            sta:'',
            addTime:''
        }
        this.props.system.searchNews(obj)
            .then(data=>{
                this.setState({
                    sys_news:this.props.system.newstem
                })
            })


    }
    addNewsTem=()=>{
        this.props.history.push('/home/addNewsTem')
    }
    getTime=(data)=>{
        let date={start:data[0]._d.toLocaleString(),end:data[1]._d.toLocaleString()}
        this.setState({
             addTime:date
        })
        console.log(date)
    }
    searchNews=()=>{
        let obj={
            newWay:this.newWay.value,
            temName:this.temName.value,
            newType:this.newType.value,
            newSta:this.newSta.value,
            sta:this.sta.value,
            addTime:this.state.addTime
        }
        this.setState({
            newWay:this.newWay.value,
            temName:this.temName.value,
            newType:this.newType.value,
            newSta:this.newSta.value,
            sta:this.sta.value
        })
        this.props.system.searchNews(obj)
            .then(data=>{
                this.setState({
                    sys_news:this.props.system.newstem
                })
            })
    }
    reset=()=>{
        this.newWay.value='';
        this.temName.value='';
        this.newType.value='';
        this.newSta.value='';
        this.sta.value='';
        let obj={
            newWay:'',
            temName:'',
            newType:'',
            newSta:'',
            sta:'',
            addTime:''
        }
        this.props.system.searchNews(obj)
            .then(data=>{
                this.setState({
                    sys_news:this.props.system.newstem
                })
            })
    }
    render() {
        return (
            <div>
                <div className='nav'>
                    <span>商城管理系统</span><span>></span>
                    <span>系统管理</span><span>></span>
                    <span>消息管理</span><span>></span>
                    <span>消息模板列表</span>
                </div>
                <div>
                    <div className='newsTop'>
                         <div>
                             消息渠道：
                             <select name="" id="" ref={newWay=>this.newWay=newWay}>
                                 <option value="">请选择</option>
                                 <option value="官方商城消息">官方商城消息</option>
                                 <option value="商户后台消息">商户后台消息</option>
                                 <option value="平台后台消息">平台后台消息</option>
                                 <option value="app消息">app消息</option>
                                 <option value="短信消息">短信消息</option>
                                 <option value="邮件消息">邮件消息</option>
                             </select>
                         </div>
                        <div>
                            模板名称：
                            <input type="text" ref={temName=>this.temName=temName}/>
                        </div>
                        <div>
                            消息类型：
                            <select name="" id="" ref={newType=>this.newType=newType}>
                                <option value="">请选择</option>
                                <option value="系统通知">系统通知</option>
                                <option value="订单消息">订单消息</option>
                                <option value="活动消息">活动消息</option>
                            </select>
                        </div>
                    </div>
                    <div className='newsMiddle'>
                        <div>
                            报备状态：
                            <select name="" id="" ref={newSta=>this.newSta=newSta}>
                                <option value="">请选择</option>
                                <option value="已报备">已报备</option>
                                <option value="进行中">进行中</option>
                                <option value="未报备">未报备</option>
                            </select>
                        </div>
                        <div>
                            状态：
                            <select name="" id="" ref={sta=>this.sta=sta}>
                                <option value="">请选择</option>
                                <option value="启用">启用</option>
                                <option value="禁用">禁用</option>
                            </select>
                        </div>
                        <div>
                            新建时间：
                            <RangePicker placeholder={['开始时间','结束时间']}
                            onChange={this.getTime}/>
                        </div>
                    </div>
                    <div className='newsBottom'>
                        <input type="button" value='搜索' onClick={this.searchNews}/>
                        <input type="button" value='重置' onClick={this.reset}/>
                        <input type="button" value='新增' onClick={this.addNewsTem}/>
                    </div>
                    <div className='newsTab'>
                        <Table pagination={false} columns={this.state.columns} dataSource={this.state.sys_news} />
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsTemplateList
