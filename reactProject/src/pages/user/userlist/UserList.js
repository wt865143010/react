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
                        if (item.accountType==0){
                            return (
                                <Space>
                                    <div>1</div>
                                </Space>
                            )
                        }else if (item.accountType==1){
                            return (
                                <Space style={{width:'100%',height:'100%',backgroundColor:'green'}}>
                                    <div>1</div>
                                </Space>
                            )
                        }else if (item.accountType==2){
                            return (
                                <Space style={{width:'100%',height:'100%',backgroundColor:'#61dafb'}}>
                                    <div>1</div>
                                </Space>
                            )
                        }
                    }
                },
                {
                    title: '卡号',
                    dataIndex: 'cardNumber',
                    key: 'id',
                },
                {
                    title: '姓名',
                    dataIndex: 'userName',
                    key: 'id',
                },
                {
                    title: '用户类型',
                    dataIndex: 'type',
                    key: 'id',
                },
                {
                    title: '绑定手机',
                    dataIndex: 'phone',
                    key: 'id',
                },
                {
                    title: '注册时间',
                    dataIndex: 'createDate',
                    key: 'id',
                },
                {
                    title: '状态',
                    dataIndex: 'state',
                    key: 'id',
                },
                {
                    title: '锁定',
                    dataIndex: 'locked',
                    key: 'id',
                    render: (locked,obj) => {
                        if (locked==0){
                            return (
                                <Space size="middle">
                                    <div className="icons-list">
                                        <Popconfirm
                                            title="确认锁定该用户吗?"
                                            onConfirm={()=>this.confirm(locked,obj.cardNumber)}
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
                                            onConfirm={()=>this.confirm(locked,obj.cardNumber)}
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
                    dataIndex: 'gradeName',
                    key: 'id',
                },
                {
                    title: '操作',
                    key: 'id',
                    dataIndex: 'cardNumber',
                    render: (cardNumber,obj) => {
                        if (obj.accountType==0){
                            return (
                                <Space size="middle">
                                    <Link to={{pathname:'/home/usernews',query:{user_cartId:cardNumber}}}>查看</Link>
                                    <Link to={{pathname:'/home/cooperative',query:{user_cartId:cardNumber,user_name:obj.userName}}}>开通合作伙伴</Link>
                                </Space>
                            )
                        }else{
                            return (
                                <Space size="middle">
                                    <Link to={{pathname:'/home/usernews',query:{user_cartId:cardNumber}}}>查看</Link>
                                </Space>
                            )
                        }
                    }
                },
            ],
            pageNum:1,
            pageSize:10,

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
        if (user_locking==0){
            let obj={cardNumber:user_cartId,locked:1}
            console.log(obj)
            this.props.user.lockUser(obj)
                .then(()=>{
                    this.props.user.searchUser({
                        cardNumber:this.state.userNo,
                        userName:this.state.userName,
                        phone:this.state.userTel,
                        idNumber:this.state.userId,
                        locked:this.state.userLock,
                        state:this.state.userSta,
                        sex:this.state.userSex,
                    })
                        .then(data=>{
                            this.setState({
                                user:this.props.user.userlist
                            })
                            message.success('已锁定');
                        })

                })
        }else {
            let obj1={cardNumber:user_cartId,locked:0}
            console.log(obj1)
            this.props.user.lockUser(obj1)
                .then(()=>{
                    this.props.user.searchUser({
                        cardNumber:this.state.userNo,
                        userName:this.state.userName,
                        phone:this.state.userTel,
                        idNumber:this.state.userId,
                        locked:this.state.userLock,
                        state:this.state.userSta,
                        sex:this.state.userSex,
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
            cardNumber:'',
            userName:'',
            phone:'',
            idNumber:'',
            locked:'',
            state:'',
            sex:''
        }
        console.log(obj)
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
            cardNumber:userNo,
            userName:userName,
            phone:userTel,
            idNumber:userId,
            locked:userLock,
            state:userSta,
            sex:userSex,
        }
        console.log(obj)

        this.setState({
            cardNumber:userNo,
            userName:userName,
            phone:userTel,
            idNumber:userId,
            locked:userLock,
            state:userSta,
            sex:userSex
        })
        console.log(obj)
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
                <div className='userSearch'>
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
                        用户状态： 
                        <input type="radio" name='sta' className='userSta' value='默认'/>默认
                        <input type="radio" name='sta' className='userSta' value='活动'/>活动
                        <input type="radio" name='sta' className='userSta' value='不活动'/>不活动
                        <input type="radio" name='sta' className='userSta' value='终止'/>终止
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

                <Table columns={this.state.columns} dataSource={this.state.user} pagination={{defaultCurrent:1,defaultPageSize:5}}/>
            </div>
        )
    }
}

export default UserList
