import React, {Component} from 'react'
import './lotteryDetail.css'
import {Space, Table} from "antd";
import {Link} from 'react-router-dom'
const columns = [
    {
        title:'序号',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '活动编码',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: '活动名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '活动类型',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: '创建人',
        dataIndex: 'create',
        key: 'create',
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
                <span style={{ cursor:"pointer",color:"#1890FF"}}>活动详情</span>
            </Space>
        ),
    },
];
const myColumns=[
    {
        title:'序号',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '抽奖人名称',
        dataIndex: 'luckyName',
        key: 'luckyName',
    },
    {
        title: '身份证',
        dataIndex: 'luckyId',
        key: 'luckyId',
    },
    {
        title: '抽奖次数',
        dataIndex: 'num',
        key: 'num',
    },
    {
        title: '抽奖门店',
        dataIndex: 'lotteryStore',
        key: 'lotteryStore',
    },

    {
        title: '对应订单号',
        dataIndex: 'orderNumber',
        key: 'orderNumber',
    },
    {
        title: '对应促销活动',
        dataIndex: 'active',
        key: 'active',
    },
    {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
    },
    {
        title: '抽奖时间',
        dataIndex: 'time',
        key: 'time',
    }
]
class lotteryDetails extends Component {

    render() {
        return (
            <div style={{textAlign:"left",padding: "30px 0 0 50px"}}>
                <div>
                    <table className="mytable">
                        <tr>
                            <td style={{width:"200px"}} className="tableHead">* 抽奖活动名称：</td>
                            <td className="right">111</td>
                        </tr>
                        <tr>
                            <td className="tableHead">抽奖活动内容：</td>
                            <td className="right">222</td>
                        </tr>
                        <tr>
                            <td className="tableHead">活动时间：</td>
                            <td className="right">333</td>
                        </tr>
                        <tr>
                            <td className="tableHead">创建人：</td>
                            <td className="right">444</td>
                        </tr>
                        <tr>
                            <td className="tableHead">创建时间：</td>
                            <td className="right">555</td>
                        </tr>
                        <tr>
                            <td className="tableHead">活动状态：</td>
                            <td className="right">666</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <h2 style={{fontWeight:"bolder",margin:"30px 0 30px 0"}}>被引用的促销活动</h2>
                </div>
{/*======================antd表格====================*/}
                <div>
                    <Table columns={columns} dataSource="" style={{width:"1100px"}} />
                    {/*<Table dataSource="" bordered columns={columns} style={{width:"1100px"}}/>*/}
                </div>
                <div>
                    <h2 style={{fontWeight:"bolder",margin:"30px 0 30px 0"}}>抽奖人信息</h2>
                </div>
                <div>
                    <Table dataSource="" bordered columns={myColumns} style={{width:"1100px"}}/>
                </div>
                <div className="return">
                    <Link to='/home/coupon/luckdraw/RaffleList'>
                        <span>返回列表</span>
                    </Link>
                    
                </div>
            </div>
        )
    }
}

export default lotteryDetails