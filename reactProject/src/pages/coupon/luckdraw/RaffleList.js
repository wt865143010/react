import React, {Component} from 'react'
import {Button, Input, Space, Table} from "antd";

import {Link} from 'react-router-dom'
const columns = [
    {
        title:'序号',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '抽奖活动名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '抽奖活动内容',
        dataIndex: 'content',
        key: 'content',
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
    },
    {
        title: '活动开始时间',
        dataIndex: 'activeTime',
        key: 'activeTime',
    },
    {
        title: '活动结束时间',
        dataIndex: 'deadlineTime',
        key: 'deadlineTime',
    },
    {
        title: '状态',
        dataIndex: 'activeState',
        key: 'activeState',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <span style={{ cursor:"pointer",color:"#1890FF"}}>编辑</span>
                <span style={{ cursor:"pointer",color:"#1890FF"}}>禁用</span>
                <span style={{ cursor:"pointer",color:"#1890FF"}}>删除</span>
            </Space>
        ),
    },
];
class RaffleList extends Component {
    constructor(){
        super()
        this.state={
            rafflelist:[]
        }
    }
    render() {
        return (
            <div style={{textAlign:"left",padding: "30px 0 0 50px"}}>
                <h2 style={{fontWeight:"bolder",paddingBottom:"20px", borderBottom:"1px solid"}}>抽奖活动列表</h2>
                <div>
                    <span>抽奖活动名称：</span>
                    <Input placeholder="" style={{width:"250px"}}/>
                    <Button type="primary" style={{width:"100px",margin:"0 0 0 30px",backgroundColor:"#169BD5"}}>搜索</Button>
                    <Link to='/home/coupon/luckdraw/CreateRaffle'>
                        <Button type="primary" style={{margin:"0 0 0 30px",backgroundColor:"#009900",border:"none",width:"110px"}}>新增抽奖活动</Button>
                    </Link>
                    
                </div>
                <div>
                    <Table columns={columns} dataSource={this.state.rafflelist} style={{width:"1100px"}} />
                </div>
            </div>
        )
    }
}

export default RaffleList