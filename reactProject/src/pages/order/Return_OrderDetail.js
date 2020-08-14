import React, {Component} from 'react'
import './Return_OrderDetail.css'


/*引入antd组件*/
import {Button,Table,Descriptions} from 'antd'

import {observer,inject} from 'mobx-react'


// import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined,LaptopOutlined } from '@ant-design/icons'

// const { Step } = Steps;
// const { RangePicker } = DatePicker;


const columns = [
    {
        title: '序号',
        dataIndex: 'id',
        // render: text => <a href="#">{text}</a>,
        align: 'center',
    },
    {
        title: '产品',
        className: 'column-money',
        dataIndex: 'product',
        align: 'center',
    },
    {
        title: '产品编号',
        dataIndex: 'theP_id',
        align: 'center',
    },
    {
        title: '单位',
        dataIndex: 'theUnit',
        align: 'center',
    },
    {
        title: '退货数量',
        dataIndex: 'theReturn_num',
        align: 'center',
    },
    {
        title: '销售单价',
        dataIndex: 'theSale_price',
        align: 'center',
    },
    {
        title: '小计',
        dataIndex: 'theSale_money',
        align: 'center',
    },
    {
        title: '实收金额',
        dataIndex: 'theAll_money',
        align: 'center',
    },
    {
        title: '对应发货单',
        dataIndex: 'the_invoiceOrder',
        align: 'center',
    },


    /*{
        title: '操作',
        dataIndex: 'address',
        align: 'center',
        render: (text, record) => (
            <Space size="middle">
                {/!*<a>Invite {record.name}</a>*!/}
                <a href="#">详情</a>
                {/!*<span>详情</span>*!/}
            </Space>
        ),
    }*/
];

/*渲染表格数据的data*/
const data = [
    {
        key: '1',
        id: '1',
        product: '￥300.00',
        theP_id: '云南',
        theUnit:"猪猪",
        theReturn_num:"1222",
        theSale_price:"234",
        theSale_money:"78",
        theAll_money:"677",
        the_invoiceOrder:"0909"
    },
    {
        key: '2',
        id: '2',
        product: '￥300.00',
        theP_id: '云南',
        theUnit:"猪猪",
        theReturn_num:"1222",
        theSale_price:"234",
        theSale_money:"78",
        theAll_money:"677",
        the_invoiceOrder:"0909"
    },
    {
        key: '3',
        id: '3',
        product: '￥300.00',
        theP_id: '云南',
        theUnit:"猪猪",
        theReturn_num:"1222",
        theSale_price:"234",
        theSale_money:"78",
        theAll_money:"677",
        the_invoiceOrder:"0909"
    },
];

@inject("myorder")

@observer
class Return_OrderDetail extends Component {
    constructor(){
        super();
        this.state={
            returnOrderInfo:[],    //退货单详情基本信息
            returnOrderShopInfo:[],  //退货单涉及产品详情

            returnDetailAllData:[],   //退货单详情页所有数据
        }
    }

    prevBack(){
        window.history.back(-1)
    }

    UNSAFE_componentWillMount() {
        let reOddnumber=this.props.location.query.reOddnumber;
        // console.log(returnOrderId)

        let temp={
            reOddnumber:reOddnumber,
            header:'charset=UTF-8',
        }
        /*退货单基本信息*/
        /*this.props.myorder.returnOrderInfo(returnOrderId)
            .then(data=>{
                console.log(data);
                let temp=this.props.myorder.myreturnOrderInfoList;
                this.setState({
                    returnOrderInfo:temp
                })
            })
            .catch(e=>{
                console.log(e);
            })*/


        /*退货单涉及产品信息*/
        /*this.props.myorder.orderhaveShopInfo(returnOrderId)
            .then(data=>{
                console.log(data);
                let temp=this.props.myorder.myreturnOrderShopList;
                this.setState({
                    returnOrderShopInfo:temp
                })
            })*/


        /*退货单详情页所有信息*/
        this.props.myorder.returnDetailAllData(temp)
            .then(data=>{
                console.log(data);
                let temp=this.props.myorder.myreturnDetailAllDataList;
                this.setState({
                    returnDetailAllData:temp
                })
            })
    }

    render() {
        // console.log(this.props.location.query.id);
        return (
            <div>
                <div className="myhead3">
                    {/*<div className="heng">|</div>*/}
                    <span>退货单详情</span>
                    <Button type="primary" className="myreturn" onClick={this.prevBack}>返回</Button>
                </div>

                <h1>基本信息</h1>
                <hr/>

                <div>
                    <Descriptions>
                        <Descriptions.Item label="申请单号">CN29102843</Descriptions.Item>
                        <Descriptions.Item label="所属订单号">CN29102843</Descriptions.Item>
                        <Descriptions.Item label="申请人手机号">13810002000</Descriptions.Item>
                        <Descriptions.Item label="申请人卡号">CN29102843</Descriptions.Item>
                        <Descriptions.Item label="申请人姓名">1989-09-09</Descriptions.Item>
                        <Descriptions.Item label="申请时间">1989-09-09</Descriptions.Item>
                        <Descriptions.Item label="退货原因">物流太慢</Descriptions.Item>
                        <Descriptions.Item label="退货联系人">业务经理</Descriptions.Item>
                        <Descriptions.Item label="退货联系电话">优惠折扣价格</Descriptions.Item>
                        <Descriptions.Item label="退货理由" span={3} column="1px" className="return_Rea"></Descriptions.Item>
                    </Descriptions>
                    {/*<div className="row1">
                        <div className="danhao">
                            <span>申请单号</span>
                            <span className="myleft">CN29102843</span>
                        </div>
                        <div className="dingdan">
                            <span>所属订单号</span>
                            <span className="myleft">CN29102843</span>
                        </div>
                        <div className="phone">
                            <span>申请人手机号</span>
                            <span className="myleft">13800138000</span>
                        </div>

                    </div>

                    <div className="row2">
                        <div className="kahao">
                            <span>申请人卡号</span>
                            <span className="myleft">CN29102843</span>
                        </div>
                        <div className="heName">
                            <span>申请人姓名</span>
                            <span className="myleft">1989-09-09</span>
                        </div>
                        <div className="heTime">
                            <span>申请时间</span>
                            <span className="myleft">1989-09-09</span>
                        </div>

                    </div>


                    <div className="row3">
                        <div className="tuihuo">
                            <span>退货原因</span>
                            <span className="myleft">物流太慢</span>
                        </div>
                        <div className="lianxiren">
                            <span>退货联系人</span>
                            <span className="myleft">业务经理</span>
                        </div>
                        <div className="thePhone">
                            <span>退货联系电话</span>
                            <span className="myleft">优惠折扣价格</span>
                        </div>

                    </div>

                    <div className="row4">
                        <div className="yourReason">
                            <span>退货理由</span>
                            <span></span>
                        </div>
                    </div>*/}
                    {/*<table className="return_detail">*/}
                    {/*    <tbody>*/}
                    {/*        /!*第一行*!/*/}
                    {/*        <tr>*/}
                    {/*            <td>申请单号:</td>*/}
                    {/*            <td>CN29102843</td>*/}
                    {/*            <td>所属订单号:</td>*/}
                    {/*            <td>CN29102843</td>*/}
                    {/*            <td>申请人手机号:</td>*/}
                    {/*            <td>13810002000</td>*/}
                    {/*        </tr>*/}
                    {/*        /!*第二行*!/*/}
                    {/*        <tr>*/}
                    {/*            <td>申请人卡号:</td>*/}
                    {/*            <td>CN29102843</td>*/}
                    {/*            <td>申请人姓名:</td>*/}
                    {/*            <td>1989-09-05</td>*/}
                    {/*            <td>申请时间:</td>*/}
                    {/*            <td>1988-08-08</td>*/}
                    {/*        </tr>*/}
                    {/*        /!*第三行*!/*/}
                    {/*        <tr>*/}
                    {/*            <td>退货原因:</td>*/}
                    {/*            <td>物流太慢</td>*/}
                    {/*            <td>退货联系人:</td>*/}
                    {/*            <td>业务经理</td>*/}
                    {/*            <td>退货联系电话:</td>*/}
                    {/*            <td>优惠折扣价格</td>*/}
                    {/*        </tr>*/}
                    {/*        /!*第四行*!/*/}
                    {/*        <tr>*/}
                    {/*            <td>退货理由:</td>*/}
                    {/*            <td colSpan="5"></td>*/}
                    {/*        </tr>*/}
                    {/*    </tbody>*/}
                    {/*</table>*/}


                </div>

                <h1>申请退货产品</h1>
                <hr/>

                {/*表格组件*/}
                <Table
                    columns={columns}
                    // dataSource={this.state.returnOrderShopInfo}
                    dataSource={data}
                    bordered
                    border="1px solid black"
                    pagination={false}
                />
            </div>
        )
    }
}

export default Return_OrderDetail