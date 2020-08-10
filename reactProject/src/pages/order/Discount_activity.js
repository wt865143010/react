import React, {Component} from 'react'

import {Checkbox, Button, DatePicker, Popconfirm,  Table} from 'antd'
import moment from "moment";

import  {observer,inject} from 'mobx-react'

const { RangePicker } = DatePicker;

/*时间组件的函数*/
function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}


const columns = [
    {
        title: '序号',
        dataIndex: 'id',
        align: 'center',
    },
    {
        title: '促销编号',
        // className: 'discount_id',
        dataIndex: 'promoteSale_id',
        align: 'center',
    },
    {
        title: '促销类型',
        dataIndex: 'promoteSale_type',
        align: 'center',
    },
    {
        title: '促销名称',
        dataIndex: 'promoteSale_name',
        align: 'center',
    },
    {
        title: '销售渠道',
        dataIndex: 'promoteSale_road',
        align: 'center',
    },
    {
        title: '销售订单数量',
        dataIndex: 'promoteSaleOrder_num',
        align: 'center',
    },
    {
        title: '销售产品数量',
        dataIndex: 'promoteSaleShop_num',
        align: 'center',
    },
    {
        title: '销售金额',
        dataIndex: 'promoteSale_money',
        align: 'center',
    },
    {
        title: '优惠金额',
        dataIndex: 'promoteSaleDiscount_money',
        align: 'center',
    },
    {
        title: '参与用户数量',
        dataIndex: 'promoteSaleUsed_num',
        align: 'center',
    },
    {
        title: '参与率',
        dataIndex: 'promoteSaleUsed_rate',
        align: 'center',
    },
    {
        title: '重购用户数',
        dataIndex: 'reBuyUser_num',
        align: 'center',
    },
    {
        title: '重购率',
        dataIndex: 'reBuy_rate',
        align: 'center',
    }

];


const data=[
    {
        key: '1',
        id: '1',
        promoteSale_id: '7777',
        promoteSale_type: '12',
        promoteSale_name:"1",
        promoteSale_road:"2",
        promoteSaleOrder_num:"3",
        promoteSaleShop_num:"4",
        promoteSale_money:"5",
        promoteSaleDiscount_money:"6",
        promoteSaleUsed_num:"7",
        promoteSaleUsed_rate:"8",
        reBuyUser_num:"9",
        reBuy_rate:"11"
    }
]



@inject("user")

@observer
class Discount_activity extends Component {
    render() {
        return (
            <div>
                <h1>促销活动分析报表</h1>
                <form action="/discount_activity.do" method="post">
                    {/*第一行*/}
                    <div>
                        <label >促销编号:</label>
                        <input type="text"/>
                        <label >促销类型:</label>
                        <select name="" id="">
                            <option value="1">所有类型</option>
                            <option value="2">满减促销</option>
                            <option value="3">加价购促销</option>
                            <option value="4">满赠促销</option>
                            <option value="5">特价促销</option>
                        </select>
                        <label >促销名称:</label>
                        <input type="text"/>
                    </div>

                    {/*第二行*/}
                    <div>
                        <label >用户类型:</label>
                        {/*<input type="checkbox"/>Retail*/}
                        <Checkbox name="userType">Retail</Checkbox>
                        <Checkbox name="userType">PC</Checkbox>
                        <Checkbox name="userType">NF</Checkbox>
                        <Checkbox name="userType">DS</Checkbox>
                        <Checkbox name="userType">IMT</Checkbox>
                        <label >用户等级:</label>
                        <Checkbox name="userLevel">零售顾客</Checkbox>
                        <Checkbox name="userLevel">优惠顾客</Checkbox>
                        <Checkbox name="userLevel">星级顾客</Checkbox>
                        <label >销售渠道:</label>
                        <Checkbox name="saleRoad">360</Checkbox>
                        <Checkbox name="saleRoad">PC网页</Checkbox>
                        <Checkbox name="saleRoad">手机APP</Checkbox>
                        <Checkbox name="saleRoad">手机页面端</Checkbox>
                    </div>

                    {/*第三行*/}
                    <div>
                        <label >用户职级:</label>
                        <Checkbox name="userPosition">业务员</Checkbox>
                        <Checkbox name="userPosition">高级业务员</Checkbox>
                        <Checkbox name="userPosition">业务员经理</Checkbox>
                        <Checkbox name="userPosition">......</Checkbox>
                    </div>

                    {/*第四行*/}
                    <div>
                        <span>统计日期:</span>
                        <Button type="primary">今日</Button>
                        <Button>昨日</Button>
                        <Button >最近7日</Button>
                        <Button >最近30日</Button>
                        {/*时间插件*/}
                        <RangePicker
                            ranges={{
                                Today: [moment(), moment()],
                                'This Month': [moment().startOf('month'), moment().endOf('month')],
                            }}
                            onChange={onChange}
                        />
                    </div>

                    {/*第五行*/}
                    <div>
                        <Popconfirm

                            placement="bottom" title={()=>(
                            <div>
                                <h3>基础信息:</h3>
                                <div>
                                    <Checkbox name="baseMessage">促销编号</Checkbox>
                                    <Checkbox name="baseMessage">促销类型</Checkbox>
                                    <Checkbox name="baseMessage">促销名称</Checkbox>
                                    <Checkbox name="baseMessage">销售渠道</Checkbox>
                                    <Checkbox name="baseMessage">用户类型</Checkbox>
                                    <Checkbox name="baseMessage">用户等级</Checkbox>
                                    <Checkbox name="baseMessage">用户职级</Checkbox>
                                </div>
                                <h3>汇总信息:</h3>
                                <div>
                                    <Checkbox name="allMessage">销售订单数量</Checkbox>
                                    <Checkbox name="allMessage">累计销售产品数量</Checkbox>
                                    <Checkbox name="allMessage">销售产品数量</Checkbox>
                                    <Checkbox name="allMessage">累计销售产品数量</Checkbox>
                                    <Checkbox name="allMessage">销售金额</Checkbox>
                                    <Checkbox name="allMessage">累计销售金额</Checkbox>
                                </div>
                                <div>
                                    <Checkbox name="allMessage">优惠金额</Checkbox>
                                    <Checkbox name="allMessage">累计优惠金额</Checkbox>
                                    <Checkbox name="allMessage">参与用户数</Checkbox>
                                    <Checkbox name="allMessage">参与率</Checkbox>
                                    <Checkbox name="allMessage">累计参与用户数</Checkbox>
                                    <Checkbox name="allMessage">累计参与率</Checkbox>
                                </div>
                                <div>
                                    <Checkbox name="allMessage">重购用户数</Checkbox>
                                    <Checkbox name="allMessage">重购率</Checkbox>
                                    <Checkbox name="allMessage">累计重购用户数</Checkbox>
                                    <Checkbox name="allMessage">累计重购率</Checkbox>
                                    <Checkbox name="allMessage">点击PV</Checkbox>
                                    <Checkbox name="allMessage">累计点击PV</Checkbox>
                                </div>
                                <div>
                                    <Checkbox name="allMessage">点击PV</Checkbox>
                                    <Checkbox name="allMessage">累计点击PV</Checkbox>
                                </div>

                            </div>)}
                            okText="确定" cancelText="取消">
                            <Button>显示更多指标</Button>
                        </Popconfirm>
                        <Button type="primary">搜索</Button>
                        <Button>重置</Button>
                        <Button type="primary">下载</Button>
                    </div>
                </form>
                <hr/>

                {/*表格组件*/}
                <Table
                    // showHeader={false}
                    columns={columns}
                    dataSource={data}
                    // dataSource={this.state.orderList}
                    bordered="true"
                    border="1px solid black"
                    tableLayout="fixed"
                    pagination={{showQuickJumper: true,showSizeChanger:true,hideOnSinglePage:false}}    /*默认不使用分页功能*/

                    /*render={()=><Pagination showQuickJumper onChange={onChange2} total={500} defaultCurrent={2}>

                        </Pagination>}*/
                />

            </div>
        )
    }
}

export default Discount_activity