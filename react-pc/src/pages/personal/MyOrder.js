import React, {Component} from 'react'


import { Input } from 'antd';
import { Tabs } from 'antd';
import { Table } from 'antd';
import {render} from "react-dom";


const { TabPane } = Tabs;
const columns = [
    {
        title: '订单详情',
        dataIndex: 'name',
    },
    {
        title: '数量',
        dataIndex: 'age',
    },
    {
        title: '收货人',
        dataIndex: 'address',
    },{
        title: '金额',
        dataIndex: 'address',
    },{
        title: '状态',
        dataIndex: 'address',
    },{
        title: '操作',
        dataIndex: 'edit',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        edit:<div>
            <a>删除</a>
            <a>查看</a>
        </div>
    },

];
function callback(key) {
    console.log(key);
}



const { Search } = Input;


class MyOrder extends Component {
    render() {
        return (
            <div>

                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h1 style={{fontWeight:"bold"}}>我的订单</h1>
                    <Search
                        placeholder="产品名称/编号/订单号"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                </div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="全部订单" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="待付款(0)" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="已支付(0)" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="待练配(0)" key="4">
                        Content of Tab Pane 4
                    </TabPane>
                    <TabPane tab="已取消" key="5">
                        Content of Tab Pane 5
                    </TabPane>
                    <TabPane tab="已完成" key="6">
                        Content of Tab Pane 6
                    </TabPane>
                </Tabs>
                <Table columns={columns} dataSource={data} size="middle" />
            </div>

        )
    }
}

export default MyOrder
