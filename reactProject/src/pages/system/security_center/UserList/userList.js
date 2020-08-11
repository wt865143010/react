import React, {Component} from 'react';
import {Button, Table,Space} from 'antd';
import {Link} from "react-router-dom";
import { Pagination } from 'antd';

import {inject,observer} from "mobx-react";
import './userList.css';


@inject('system')

@observer
class userList extends Component {
    constructor() {
        super();
        this.state={
            getUseList:[],
            columns: [
                {
                    title: '序号',
                    align:'center',
                    dataIndex: 'id',
                    key:'id'
                },
                {
                    title: '用户账号',
                    dataIndex: 'number',
                    key:'id'
                },
                {
                    title: '名称',
                    dataIndex: 'username',
                    key:'id'
                },
                {
                    title: '所属角色',
                    dataIndex: 'roleName',
                    key:'id'
                },
                {
                    title: '创建时间',
                    dataIndex: 'createTime',
                    key:'id'
                },
                {
                    title: '状态',
                    dataIndex: 'status',
                    key:'id',
                    render:(status)=>{
                        if (status===0){
                            return (
                                <Space>
                                    <div>禁用</div>
                                </Space>
                            )

                        }
                        else{
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
                    key:'action',
                    render: (item) => {
                        if (item.status===0){
                            return (
                                <Space>
                                    <Link to={{pathname:'/home/addAccount',query:{item:item}}} style={{ marginRight: 16 }}>编辑</Link>
                                    <a onClick={()=>this.disableUser(item)}>启用</a>
                                </Space>
                            )

                        }
                        else{
                            return (
                                <Space>
                                    <Link to={{pathname:'/home/addAccount',query:{item:item}}} style={{ marginRight: 16 }}>编辑</Link>
                                    <a onClick={()=>this.disableUser(item)}>禁用</a>
                                </Space>
                            )
                        }
                    }

                },
            ],
            role:[
                {
                    name:'管理员'
                },
                {
                    name:'经理'
                },
                {
                    name:'销售'
                },
                {
                    name:'客户经理'
                }
            ],
            pageNum:'',
            account:'',
            userName:''
        }
    };

    ////账户列表数据渲染
    componentWillMount() {
        let search={
            account:'',
            userName:'',
            pageNumber:1,
            pageSize:10
        };
        this.props.system.searchMsg(search)
            .then((data)=>{
                this.setState({
                    getUseList:this.props.system.UserList
                })
            })

    }

    ///点击搜索功能
    searchMsg=()=>{
        console.log(this.account.value);
        console.log(this.user_name.value);
        let search={
            account:this.account.value,
            userName:this.user_name.value,
            pageNum:this.state.pageNum,
            pageSize:10
        };
        this.setState({
            account:this.account.value,
            userName:this.user_name.value
        });
        this.props.system.searchMsg(search)
            .then(data=>{
                        this.setState({
                            getUseList:this.props.system.UserList
                        })
            })
    };

    ///点击重置按钮，刷新数据
    removeValue=()=>{
        this.account.value='';
        this.user_name.value='';
        let search={
            account:'',
            userName:'',
            pageNum:1,
            pageSize:10
        };
        this.props.system.searchMsg(search)
            .then((data)=>{
                this.setState({
                    getUseList:this.props.system.UserList
                })
            })
        this.setState({
            account:'',
            userName:'',
            pageNum:1
        })
    };


    ////修改账户状态
    disableUser=(item)=>{
        console.log(item);
        let obj={id:item.id,status:item.statue};
        this.props.system.disableUser(obj)
            .then(data=>{
                this.props.system.searchMsg({
                    account:'',
                    userName:'',
                    pageNum:1,
                    pageSize:10
                })
                    .then((data)=>{
                        this.setState({
                            getUseList:this.props.system.UserList
                        })
                    })
             })
    };

    ///分页功能
    onChange=(pageNumber,pageSize) =>{
        console.log('Page: ', pageNumber);
        console.log('pageSize: ', pageSize);
        this.setState({
            pageNum:pageNumber
        })
        let obj={
            account:this.state.account,
            userName:this.state.user_name,
            pageNum:pageNumber,
            pageSize:10
        }
        this.props.system.searchMsg(obj)
            .then(data=>{
                this.setState({
                    getUseList:this.props.system.UserList
                })
            })
    }
    render(){
        let arr=this.state.role.map((item,i)=>{
            return (
                <option value={item.name} key={i}>{item.name}</option>
            )
        });
        return (
            <div>
                <div>
                    <div className='searchBox'>
                        <div className='twoLine'>
                            用户账号： <input type='text'  ref={account=>this.account=account}/>
                            <span className='w50'></span>
                            名称： <input type='text' ref={user_name=>this.user_name=user_name}/>
                        </div>
                        <div >
                            所属角色：
                            <select name="" id="">
                                <option value="">所有角色</option>
                                {arr}
                            </select>
                            <span className='w50'></span>
                            状态： <select name="" id="">
                            <option value="">所有</option>
                            <option value="1">启用</option>
                            <option value="0">禁用</option>
                        </select>
                        </div>
                    </div>
                    <div className='btnBox'>
                        <Button type="primary"  className='btn1' onClick={this.searchMsg}>确认</Button>
                        <Button  className='btn1' onClick={this.removeValue}>重置</Button>
                        <Link to='/home/addAccount'><Button type="primary"  className='btn1' >新增账号</Button></Link>
                    </div>
                </div>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.getUseList}
                    bordered-
                    pagination={false}
                />,
                <Pagination showQuickJumper
                            defaultCurrent={2}
                            total={this.state.getUseList.length}
                            onChange={this.onChange} />

            </div>
        )
    }
}

export default userList