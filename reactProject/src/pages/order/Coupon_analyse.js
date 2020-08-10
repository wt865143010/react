import React, {Component} from 'react'

import {Checkbox, Button, DatePicker, Popconfirm, Table} from 'antd'
import moment from "moment";

import {observer,inject} from 'mobx-react'

import './Coupon_analyse.css'
const { RangePicker } = DatePicker;

/*const text = 'Are you sure to delete this task?';*/

/*时间组件的函数*/
function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

/*弹出更多指标的函数*/
/*function confirm() {
    message.info('Clicked on Yes.');
}*/


const columns = [
    {
        title: '序号',
        dataIndex: 'id',
        align: 'center',
    },
    {
        title: '优惠编号',
        // className: 'discount_id',
        dataIndex: 'discount_id',
        align: 'center',
    },
    {
        title: '优惠券类型',
        dataIndex: 'coupon_type',
        align: 'center',
    },
    {
        title: '优惠券名称',
        dataIndex: 'coupon_name',
        align: 'center',
    },
    {
        title: '销售渠道',
        dataIndex: 'sale_road',
        align: 'center',
    },
    {
        title: '销售订单数量',
        dataIndex: 'saleOrder_num',
        align: 'center',
    },
    {
        title: '销售产品数量',
        dataIndex: 'saleShop_num',
        align: 'center',
    },
    {
        title: '销售金额',
        dataIndex: 'sale_money',
        align: 'center',
    },
    {
        title: '优惠金额',
        dataIndex: 'discount_money',
        align: 'center',
    },
    {
        title: '使用数量',
        dataIndex: 'used_num',
        align: 'center',
    },
    {
        title: '使用率',
        dataIndex: 'used_rate',
        align: 'center',
    },
    {
        title: '转让数量',
        dataIndex: 'transfer_num',
        align: 'center',
    },
    {
        title: '转让率',
        dataIndex: 'transfer_rate',
        align: 'center',
    }

];

const data=[
    {
        key: '1',
        id: '1',
        discount_id: '7777',
        coupon_type: '12',
        coupon_name:"1",
        sale_road:"2",
        saleOrder_num:"3",
        saleShop_num:"4",
        sale_money:"5",
        discount_money:"6",
        used_num:"7",
        used_rate:"8",
        transfer_num:"9",
        transfer_rate:"11"
    }
]


@inject("user")

@observer
class Coupon_analyse extends Component {

    myselect=(e)=>{
        console.log(e.target.value);
    }

    mychange=(e)=>{
        console.log(e.target.checked)
        console.log(e.target.value)
    }

    oncheckChange=(checkedValues)=>{
        console.log('checked = ', checkedValues);
    }

    oncheckChange2=(checkedValues)=>{
        console.log('checked2 = ', checkedValues);
    }

    oncheckChange3=(checkedValues)=>{
        console.log('checked3 = ', checkedValues);
    }

    oncheckChange4=(checkedValues)=>{
        console.log('checked4 = ', checkedValues);
    }

    oncheckChange5=(checkedValues)=>{
        console.log('checked5 = ', checkedValues);
    }

    oncheckChange6=(checkedValues)=>{
        console.log('checked6 = ', checkedValues);
    }

    oncheckChange7=(checkedValues)=>{
        console.log('checked7 = ', checkedValues);
    }

    oncheckChange8=(checkedValues)=>{
        console.log('checked8 = ', checkedValues);
    }

    oncheckChange9=(checkedValues)=>{
        console.log('checked9 = ', checkedValues);
    }
    render() {
        return (
            <div className="coupon_analyse">
                <h1>优惠券分析报表</h1>
                <form action="/coupon_analyse.do" method="post">
                    {/*第一行*/}
                    <div className="lineOne">
                        <label >优惠编号:</label>
                        <input type="text"/>
                        <label  className="couponType">优惠券类型:</label>
                        <select name="myType" id="" onChange={(e)=>this.myselect(e)}>
                            <option value="所有类型">所有类型</option>
                            <option value="优惠券">优惠券</option>
                            <option value="资格券">资格券</option>
                            <option value="免运费券">免运费券</option>
                        </select>
                        <label className="couponType">优惠券名称:</label>
                        <input type="text"/>
                    </div>

                    {/*第二行*/}
                    <div className="lineTwo">
                        <label >用户类型:</label>
                        {/*<input type="checkbox"/>Retail*/}
                        <Checkbox.Group name="myuserType" onChange={this.oncheckChange.bind(this)}>
                            <Checkbox  value="Retail" onChange={(e)=>this.mychange(e)}>Retail</Checkbox>
                            <Checkbox  value="PC" onChange={(e)=>this.mychange(e)}>PC</Checkbox>
                            <Checkbox value="NF"  onChange={(e)=>this.mychange(e)}>NF</Checkbox>
                            <Checkbox value="DS" onChange={(e)=>this.mychange(e)}>DS</Checkbox>
                            <Checkbox  value="IMT" onChange={(e)=>this.mychange(e)}>IMT</Checkbox>
                        </Checkbox.Group>

                        <label >用户等级:</label>

                        <Checkbox.Group name="myuserLevel" onChange={this.oncheckChange2.bind(this)}>
                            <Checkbox value="零售顾客" onChange={(e)=>this.mychange(e)}>零售顾客</Checkbox>
                            <Checkbox value="优惠顾客" onChange={(e)=>this.mychange(e)}>优惠顾客</Checkbox>
                            <Checkbox value="星级顾客" onChange={(e)=>this.mychange(e)}>星级顾客</Checkbox>
                        </Checkbox.Group>
                            <label >销售渠道:</label>
                        <Checkbox.Group name="mysaleRoad" onChange={this.oncheckChange3.bind(this)}>
                            <Checkbox value="360" onChange={(e)=>this.mychange(e)}>360</Checkbox>
                            <Checkbox value="PC网页" onChange={(e)=>this.mychange(e)}>PC网页</Checkbox>
                            <Checkbox value="手机APP" onChange={(e)=>this.mychange(e)}>手机APP</Checkbox>
                            <Checkbox value="手机页面端" onChange={(e)=>this.mychange(e)}>手机页面端</Checkbox>
                        </Checkbox.Group>

                    </div>

                    {/*第三行*/}
                    <div className="lineThree">
                        <label >用户职级:</label>
                        <Checkbox.Group name="myUserzhiji" onChange={this.oncheckChange4.bind(this)}>
                            <Checkbox value="业务员" onChange={(e)=>this.mychange(e)}>业务员</Checkbox>
                            <Checkbox value="高级业务员" onChange={(e)=>this.mychange(e)}>高级业务员</Checkbox>
                            <Checkbox value="业务员经理" onChange={(e)=>this.mychange(e)}>业务员经理</Checkbox>
                            <Checkbox value="......" onChange={(e)=>this.mychange(e)}>......</Checkbox>
                        </Checkbox.Group>
                    </div>

                    {/*第四行*/}
                    <div className="lineFour">
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
                    <div className="lineFive">
                        <Popconfirm

                            placement="bottom" title={()=>(
                                <div>
                                    <h3>基础信息:</h3>
                                    <div>
                                        <Checkbox.Group name="myUserzhiji1" onChange={this.oncheckChange5.bind(this)}>
                                            <Checkbox value="优惠编号" onChange={(e)=>this.mychange(e)}>优惠编号</Checkbox>
                                            <Checkbox value="优惠券类型" onChange={(e)=>this.mychange(e)}>优惠券类型</Checkbox>
                                            <Checkbox value="优惠券名称" onChange={(e)=>this.mychange(e)}>优惠券名称</Checkbox>
                                            <Checkbox value="销售渠道" onChange={(e)=>this.mychange(e)}>销售渠道</Checkbox>
                                            <Checkbox value="用户类型" onChange={(e)=>this.mychange(e)}>用户类型</Checkbox>
                                            <Checkbox value="用户等级" onChange={(e)=>this.mychange(e)}>用户等级</Checkbox>
                                            <Checkbox value="用户职级" onChange={(e)=>this.mychange(e)}>用户职级</Checkbox>
                                        </Checkbox.Group>
                                    </div>
                                    <h3>汇总信息:</h3>
                                    <div>
                                        <Checkbox.Group name="myUserzhiji2" onChange={this.oncheckChange6.bind(this)}>
                                            <Checkbox value="销售订单数量" onChange={(e)=>this.mychange(e)}>销售订单数量</Checkbox>
                                            <Checkbox value="累计销售产品数量" onChange={(e)=>this.mychange(e)}>累计销售产品数量</Checkbox>
                                            <Checkbox value="销售产品数量" onChange={(e)=>this.mychange(e)}>销售产品数量</Checkbox>
                                            <Checkbox value="累计销售产品数量" onChange={(e)=>this.mychange(e)}>累计销售产品数量</Checkbox>
                                            <Checkbox value="销售金额" onChange={(e)=>this.mychange(e)}>销售金额</Checkbox>
                                            <Checkbox value="累计销售金额" onChange={(e)=>this.mychange(e)}>累计销售金额</Checkbox>
                                        </Checkbox.Group>
                                    </div>
                                    <div>
                                        <Checkbox.Group name="myUserzhiji3" onChange={this.oncheckChange7.bind(this)}>
                                            <Checkbox value="优惠金额" onChange={(e)=>this.mychange(e)}>优惠金额</Checkbox>
                                            <Checkbox value="累计优惠金额" onChange={(e)=>this.mychange(e)}>累计优惠金额</Checkbox>
                                            <Checkbox value="使用数量" onChange={(e)=>this.mychange(e)}>使用数量</Checkbox>
                                            <Checkbox value="使用率" onChange={(e)=>this.mychange(e)}>使用率</Checkbox>
                                            <Checkbox value="累计使用数量" onChange={(e)=>this.mychange(e)}>累计使用数量</Checkbox>
                                            <Checkbox value="累计使用率" onChange={(e)=>this.mychange(e)}>累计使用率</Checkbox>
                                        </Checkbox.Group>
                                    </div>
                                    <div>
                                        <Checkbox.Group name="myUserzhiji4" onChange={this.oncheckChange8.bind(this)}>
                                            <Checkbox value="转让数量" onChange={(e)=>this.mychange(e)}>转让数量</Checkbox>
                                            <Checkbox value="转让率" onChange={(e)=>this.mychange(e)}>转让率</Checkbox>
                                            <Checkbox value="累计转让数量" onChange={(e)=>this.mychange(e)}>累计转让数量</Checkbox>
                                            <Checkbox value="累计转让率" onChange={(e)=>this.mychange(e)}>累计转让率</Checkbox>
                                            <Checkbox value="过期数量" onChange={(e)=>this.mychange(e)}>过期数量</Checkbox>
                                            <Checkbox value="过期率" onChange={(e)=>this.mychange(e)}>过期率</Checkbox>
                                        </Checkbox.Group>
                                    </div>
                                    <div>
                                        <Checkbox.Group name="myUserzhiji5" onChange={this.oncheckChange9.bind(this)}>
                                            <Checkbox value="累计过期数量" onChange={(e)=>this.mychange(e)}>累计过期数量</Checkbox>
                                            <Checkbox value="累计过期率" onChange={(e)=>this.mychange(e)}>累计过期率</Checkbox>
                                            <Checkbox value="作废数量" onChange={(e)=>this.mychange(e)}>作废数量</Checkbox>
                                            <Checkbox value="作废率" onChange={(e)=>this.mychange(e)}>作废率</Checkbox>
                                            <Checkbox value="累计作废数量" onChange={(e)=>this.mychange(e)}>累计作废数量</Checkbox>
                                            <Checkbox value="累计作废率" onChange={(e)=>this.mychange(e)}>累计作废率</Checkbox>
                                        </Checkbox.Group>
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

export default Coupon_analyse