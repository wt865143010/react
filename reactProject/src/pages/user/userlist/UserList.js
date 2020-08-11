import React, {Component} from 'react';
import { Pagination,Table,Space,Popconfirm, message } from 'antd';
import {inject,observer} from "mobx-react";
import {Link} from "react-router-dom";
import './userlist.css'
import {
    LockOutlined
} from '@ant-design/icons';

@inject('user')
@observer
class UserList extends Component {
    constructor() {
        super();
        this.state={
            pageArr:[5,10,15,20],
            user:[],
            columns:[
                {
                    title: '序号',
                    dataIndex: 'id',
                    key: 'id',
                    render:(id,item)=>{
                        if (item.user_t===0){
                            return (
                                <Space>
                                    <div>{id}</div>
                                </Space>
                            )
                        }else if (item.user_t===1){
                            return (
                                <Space style={{width:'100%',height:'100%',backgroundColor:'green'}}>
                                    <div>{id}</div>
                                </Space>
                            )
                        }else if (item.user_t===2){
                            return (
                                <Space style={{width:'100%',height:'100%',backgroundColor:'#61dafb'}}>
                                    <div>{id}</div>
                                </Space>
                            )
                        }
                    }
                },
                {
                    title: '卡号',
                    dataIndex: 'user_cartId',
                    key: 'id',
                },
                {
                    title: '姓名',
                    dataIndex: 'user_name',
                    key: 'id',
                },
                {
                    title: '用户类型',
                    dataIndex: 'user_type',
                    key: 'id',
                },
                {
                    title: '绑定手机',
                    dataIndex: 'user_tel',
                    key: 'id',
                },
                {
                    title: '注册时间',
                    dataIndex: 'user_retime',
                    key: 'id',
                },
                {
                    title: '状态',
                    dataIndex: 'user_status',
                    key: 'id',
                },
                {
                    title: '锁定',
                    dataIndex: 'user_locking',
                    key: 'id',
                    render: (user_locking,obj) => {
                        if (user_locking===0){
                            return (
                                <Space size="middle">
                                    <div className="icons-list">
                                        <Popconfirm
                                            title="确认锁定该用户吗?"
                                            onConfirm={()=>this.confirm(user_locking,obj.user_cartId)}
                                            onCancel={this.cancel}
                                            okText="确认"
                                            cancelText="取消"
                                        >
                                            <LockOutlined style={{color:'darkgrey'}}/>
                                        </Popconfirm>

                                    </div>
                                </Space>
                            )
                        }else {
                            return (
                                <Space size="middle">
                                    <div className="icons-list">
                                        <Popconfirm
                                            title="确认解锁该用户吗?"
                                            onConfirm={()=>this.confirm(user_locking,obj.user_cartId)}
                                            onCancel={this.cancel}
                                            okText="确认"
                                            cancelText="取消"
                                        >
                                            <LockOutlined style={{color:'black'}}/>
                                        </Popconfirm>

                                    </div>
                                </Space>
                            )
                        }
                    }
                },
                {
                    title: '用户等级',
                    dataIndex: 'user_grade',
                    key: 'id',
                },
                {
                    title: '操作',
                    key: 'id',
                    dataIndex: 'user_cartId',
                    render: (user_cartId,obj) => {
                        if (obj.user_t===0){
                            return (
                                <Space size="middle">
                                    <Link to={{pathname:'/home/usernews',query:{user_cartId:user_cartId}}}>查看</Link>
                                    <Link to={{pathname:'/home/cooperative',query:{user_cartId:user_cartId,user_name:obj.user_name}}}>开通合作伙伴</Link>
                                </Space>
                            )
                        }else{
                            return (
                                <Space size="middle">
                                    <Link to={{pathname:'/home/usernews',query:{user_cartId:user_cartId}}}>查看</Link>
                                </Space>
                            )
                        }
                    }
                },
            ],
            pageNum:'',
            pageSize:'',

            userNo:'',
            userName:'',
            userTel:'',
            userId:'',
            userLock:'',
            userSta:'',
            userSex:''
        }
    }

    //锁定
    confirm=(user_locking,user_cartId)=> {
        let obj={user_cartId:user_cartId,user_locking:user_locking}
        if (user_locking===0){
            this.props.user.lockUser(obj)
                .then(()=>{
                    this.props.user.searchUser({
                        userNo:this.state.userNo,
                        userName:this.state.userName,
                        userTel:this.state.userTel,
                        userId:this.state.userId,
                        userLock:this.state.userLock,
                        userSta:this.state.userSta,
                        userSex:this.state.userSex,
                        pageNum:this.state.pageNum,
                        pageSize:this.state.pageSize,
                        user_cartId:user_cartId
                    })
                        .then(data=>{
                            this.setState({
                                user:this.props.user.userlist
                            })
                            message.success('已锁定');
                        })

                })
        }else {
            this.props.user.lockUser(obj)
                .then(()=>{
                    this.props.user.searchUser({
                        userNo:this.state.userNo,
                        userName:this.state.userName,
                        userTel:this.state.userTel,
                        userId:this.state.userId,
                        userLock:this.state.userLock,
                        userSta:this.state.userSta,
                        userSex:this.state.userSex,
                        pageNum:this.state.pageNum,
                        pageSize:this.state.pageSize,
                        user_cartId:user_cartId
                    })
                        .then(data=>{
                            this.setState({
                                user:this.props.user.userlist
                            })
                            message.success('已取消锁定');
                        })


                })
        }
    }
    cancel=(e)=> {
        message.error('取消');
    }



    componentWillMount() {
        let obj={
            userNo:'',
            userName:'',
            userTel:'',
            userId:'',
            userLock:'',
            userSta:'',
            userSex:'',
            pageNum:1,
            pageSize:10
        }
        this.props.user.searchUser(obj)
            .then(data=>{
                this.setState({
                    user:this.props.user.userlist
                })
            })
    }

    //切换每页展示条数
    SizeChange=(pageNumber,pageSize)=>{
        this.setState({
            pageNum:pageNumber,
            pageSize:pageSize
        })
        let obj={
            userNo:this.state.userNo,
            userName:this.state.userName,
            userTel:this.state.userTel,
            userId:this.state.userId,
            userLock:this.state.userLock,
            userSta:this.state.userSta,
            userSex:this.state.userSex,
            pageNum:pageNumber,
            pageSize:pageSize
        }
        this.props.user.searchUser(obj)
            .then(data=>{
                this.setState({
                    user:this.props.user.userlist
                })
            })
    }
    //切换页数
    onChange=(pageNumber,pageSize)=>{
        this.setState({
            userNo:this.state.userNo,
            userName:this.state.userName,
            userTel:this.state.userTel,
            userId:this.state.userId,
            userLock:this.state.userLock,
            userSta:this.state.userSta,
            userSex:this.state.userSex,
            pageNum:pageNumber,
            pageSize:pageSize
        })
        let obj={
            userNo:this.state.userNo,
            userName:this.state.userName,
            userTel:this.state.userTel,
            userId:this.state.userId,
            userLock:this.state.userLock,
            userSta:this.state.userSta,
            userSex:this.state.userSex,
            pageNum:pageNumber,
            pageSize:pageSize
        }
        this.props.user.searchUser(obj)
            .then(data=>{
                this.setState({
                    user:this.props.user.userlist
                })
            })
    }
    //搜索
    searchUser=()=>{
        let userNo=document.getElementById('userNo').value;
        let userName=document.getElementById('userName').value;
        let userTel=document.getElementById('userTel').value;
        let userId=document.getElementById('userId').value;
        let userLock;
        if(document.getElementById('userLock').checked){
            userLock=1;
        }else {
            userLock=0;
        }
        let userSta=''
        let arr=document.getElementsByClassName('userSta')
        for (let i=0;i<arr.length;i++){
            if (arr[i].checked){
                userSta=arr[i].value;
            }
        }
        let userSex=''
        let arr1=document.getElementsByClassName('userSex')
        for (let i=0;i<arr1.length;i++){
            if (arr1[i].checked){
                userSex=arr1[i].value;
            }
        }
        let obj={
            userNo:userNo,
            userName:userName,
            userTel:userTel,
            userId:userId,
            userLock:userLock,
            userSta:userSta,
            userSex:userSex
        }
        console.log(obj)

        this.setState({
            userNo:userNo,
            userName:userName,
            userTel:userTel,
            userId:userId,
            userLock:userLock,
            userSta:userSta,
            userSex:userSex
        })
        this.props.user.searchUser(obj)
            .then(data=>{
                this.setState({
                    user:this.props.user.userlist
                })
            })
    }

    //重置
    reset=()=>{
       document.getElementById('userNo').value='';
        document.getElementById('userName').value='';
        document.getElementById('userTel').value='';
        document.getElementById('userId').value='';
        this.setState({
            userNo:'',
            userName:'',
            userTel:'',
            userId:'',
            userLock:'',
            userSta:'',
            userSex:''
        })
        let obj={
            userNo:'',
            userName:'',
            userTel:'',
            userId:'',
            userLock:'',
            userSta:'',
            userSex:'',
            pageNum:1,
            pageSize:10
        }
        this.props.user.searchUser(obj)
            .then(data=>{
                this.setState({
                    user:this.props.user.userlist
                })
            })
    }
    render() {
        return (
            <div>
                <div className='nav'>
                    <span>商城管理系统</span><span>></span>
                    <span>用户列表</span>
                </div>
                <strong className='title'>用户列表</strong>
                <div className='search'>
                    <div>
                        卡号：<input type="text" id='userNo'/>
                    </div>
                    <div>
                        姓名：<input type="text" id='userName'/>
                    </div>
                    <div>
                        手机号码：<input type="text" id='userTel'/>
                    </div>
                    <div>
                        卡身份证：<input type="text" id='userId'/>
                    </div>
                    <div>
                        锁定状态：<input type="checkbox" id='userLock'/> 锁定
                    </div>
                    <div>
                        性别：<input type="radio" name='sex' className='userSex' value='男'/>男
                        <input type="radio" name='sex' className='userSex' value='女'/>女
                    </div>
                    <div>
                        用户状态： <input type="radio" className='userSta' value='默认'/>默认
                        <input type="radio" className='userSta' value='活动'/>活动
                        <input type="radio" className='userSta' value='不活动'/>不活动
                        <input type="radio" className='userSta' value='终止'/>终止
                    </div>
                </div>
                <div className='searchB'>
                    <div className='btn' onClick={this.searchUser}>搜索</div>
                    <div className='btn' onClick={this.reset}>重置</div>
                    <div className='btn'>导出数据</div>
                    <div className='showBox'>
                        <span></span><span>夫妻副号</span>
                        <span></span><span>合作伙伴副号</span>
                    </div>
                </div>

                <Table columns={this.state.columns} dataSource={this.state.user} pagination={false}/>
                <Pagination showSizeChanger='true'
                            showQuickJumper defaultCurrent={1}
                            total={this.state.user.length}
                            onShowSizeChange={this.SizeChange}
                            onChange={this.onChange}
                            pageSizeOptions={this.state.pageArr}/>
            </div>
        )
    }
}

export default UserList
