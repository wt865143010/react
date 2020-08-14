import React, {Component} from 'react';
import {Button, Table, Space, DatePicker} from 'antd';
import {Link} from "react-router-dom";
import './role.css';
import {inject,observer} from "mobx-react";
const { RangePicker } = DatePicker;

@inject('system')


@observer
class roleList extends Component {
    constructor() {
        super();
        this.state={
            keyValue:'',
            roleData:[],
            rolename:'',
            roleStaute:'',
            startTime:'',
            endTime:'',
            columns: [
                {
                    title: '序号',
                    dataIndex: 'id',
                    align:'center',
                    key:'id'
                    // render: text => <a>{text}</a>,
                },
                {
                    title: '角色名称',
                    dataIndex: 'name',
                    key:'id'
                },
                {
                    title: '描述',
                    dataIndex: 'roleDesc',
                    key:'id'
                },
                {
                    title: '创建人',
                    dataIndex: 'creator',
                    key:'id'
                },
                {
                    title: '创建时间',
                    dataIndex: 'createdDate',
                    key:'id'
                },

                {
                    title: '状态',
                    dataIndex: 'status',
                    key:'id',
                    render:(status)=>{
                        if (status==0){
                            return (
                                <Space>
                                    <div>禁用</div>
                                </Space>
                            )
                        }else{
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
                    render: (item) =>{
                        if (item.status==0){
                            return (
                                <Space>
                                    <Link to={{pathname:'/home/addRole',query:{item:item}}} style={{ marginRight: 16 }}>编辑</Link>
                                    <a onClick={()=>this.disableUser(item)}>启用</a>
                                </Space>
                            )
                        }
                        else{
                            return (
                                <Space>
                                    <Link to={{pathname:'/home/addRole',query:{item:item}}} style={{ marginRight: 16 }}>编辑</Link>
                                    <a onClick={()=>this.disableUser(item)}>禁用</a>
                                </Space>
                            )
                        }
                    }
                },
            ],

        }
    }
    componentWillMount(){
        let roleS={
            roleName:'',
            status:'',
            startTime:'',
            endTime:'',
        };
        this.props.system.roleSearch(roleS)
            .then(data=>{
                this.setState({
                    roleData:this.props.system.roleList
                })
            })
    }
    ////条件搜索,初始化大区列表
    roleSearch=()=>{
        let roleS={
            roleName:this.rolename.value,
            status:this.roleStaute.value,
            startTime:this.state.startTime,
            endTime:this.state.endTime,
        }
        this.props.system.roleSearch(roleS)
            .then(data=>{
                this.setState({
                    roleData:this.props.system.roleList
                })
            })
    };
    ////重置按钮
    removeS=()=>{
        this.rolename.value='';
        this.roleStaute.value='';
        let roleS={
            roleName:'',
            status:'',
            startTime:'',
            endTime:'',
        };
        this.props.system.roleSearch(roleS)
            .then(data=>{
                this.setState({
                    roleData:this.props.system.roleList
                })
            });
        this.setState({
            rolename:'',
            roleStaute:'',
            startTime:'',
            endTime:'',
            keyValue:new Date()
        })
    };
    ////修改状态
    disableUser=(item)=>{
        let id=0;
        if (item.status==0){
            id=1
        }else{
            id=0
        }
        let obj={id:item.id,status:id};
        this.props.system.disableUser1(obj)
            .then(data=>{
                this.props.system.roleSearch({
                    roleName:'',
                    status:'',
                    pageNum:1,
                    pageSize:10
                })
                    .then((data)=>{
                        this.setState({
                            roleData:this.props.system.roleList
                        })
                    })
            })
    };
    ///时间改变，获取时间
    getTime=(data)=> {
        this.setState({
            startTime :data[0]._d.toLocaleString(),
            endTime:data[1]._d.toLocaleString()
        })

    };
    render() {
        return (
            <div>
                <div>
                    <div className='searchBox'>
                        <div className='twoLine'>
                            角色名称： <input type='text' ref={rolename=>this.rolename=rolename}/>
                            <span className='w50'></span>
                            状态： <select name="" id="" ref={roleStaute=>this.roleStaute=roleStaute}>
                            <option value="">空</option>
                            <option value="0">禁用</option>
                            <option value="1">启用</option>
                        </select>
                        </div>
                        <div >
                            创建时间：<RangePicker bordered={true} onChange={this.getTime} key={this.state.keyValue} allowClear={false}/>
                        </div>
                    </div>
                    <div className='btnBox'>
                        <Button type="primary"  className='btn1' onClick={this.roleSearch}>搜索</Button>
                        <Button  className='btn1' onClick={this.removeS}>重置</Button>
                        <Link to='/home/addRole'><Button type="primary"  className='btn1'>新增角色</Button></Link>
                    </div>

                </div>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.roleData}
                    bordered-
                />,
            </div>
        )
    }
}

export default roleList