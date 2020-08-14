import React, {Component} from 'react';
import './mycount.css';
import {Table} from "antd";

const columns = [
    {
        title: '详细',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '收入/支出',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '时间',
        dataIndex: 'address',
        key: 'address',
    },
];

class score extends Component {
    render() {
        return (
            <div className='score'>
                <h1>我的积分</h1>
                <div className='scoreTable'>
                    <div className='jiFen borderL'>
                        <p>0</p>
                        <p>我的积分</p>
                        <div className='btnCss'>去积分购物></div>
                    </div>
                    <div className='jiFen'>
                        <p>0</p>
                        <p>即将失效的积分</p>
                        <div className='btnCss'>查看更多></div>
                    </div>
                </div>
                <p><strong>积分记录</strong></p>
                <p>暂无积分记录</p>
                <Table columns={columns}  />
            </div>
        )
    }
}

export default score