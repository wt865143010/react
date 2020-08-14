import React, {Component} from 'react'
import './InvoiceDetail.css'


/*引入antd组件*/
import {Button,Steps,Table } from 'antd'

import { UserOutlined, SolutionOutlined, LoadingOutlined} from '@ant-design/icons';

import  {observer,inject} from 'mobx-react'
import {toJS} from "mobx";

const { Step } = Steps;
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
        dataIndex: 'product_id',
        align: 'center',
    },
    {
        title: '单位',
        dataIndex: 'en_unit',
        align: 'center',
    },
    {
        title: '数量',
        dataIndex: 'en_num',
        align: 'center',
    },
    {
        title: '销售单价',
        dataIndex: 'sale_Price',
        align: 'center',
    },
    {
        title: '实际购买价格',
        dataIndex: 'now_Price',
        align: 'center',
    },
    {
        title: '实收小计',
        dataIndex: 'now_money',
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
        product_id: '云南',
        en_unit:"猪猪",
        en_num:"123",
        sale_Price:"444",
        now_Price:"678",
        now_money:"909"
    },
    {
        key: '2',
        id: '2',
        product: '￥300.00',
        product_id: '云南',
        en_unit:"猪猪",
        en_num:"123",
        sale_Price:"444",
        now_Price:"678",
        now_money:"909"
    },
    {
        key: '3',
        id: '3',
        product: '￥300.00',
        product_id: '云南',
        en_unit:"猪猪",
        en_num:"123",
        sale_Price:"444",
        now_Price:"678",
        now_money:"909"
    },
];

@inject("myorder")

@observer
class InvoiceDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            invoiceYewuList:[],   //发货单业务类型
            invoiceHaveShop:[],   //发货单涉及产品
            invoiceShouhuoRen:[],  //发货单收货人信息

            invoiceDetailAllData:[],   //发货单详情的所有信息
        }
    }

    UNSAFE_componentWillMount() {
        let delNumber=this.props.location.query.delNumber;
        let temp={
            delNumber:delNumber,
            header:"charset=UTF-8"
        }
        /*业务类型*/
        /*this.props.myorder.invoiceOrderyewu(inviceOrderid)
            .then(data=>{
                console.log(data);
                let temp=this.props.myorder.myinvoiceOrderyewuList;
                this.setState({
                    invoiceYewuList:temp
                })
            })*/

        /*发货单产品*/
        // this.props.myorder.invoiceHaveShop(inviceOrderid)
        //     .then(data=>{
        //         console.log(data);
        //         let temp =this.props.myorder.myinvoiceHaveShopList;
        //         this.setState({
        //             invoiceHaveShop:temp
        //         })
        //     })


        /*发货单中收货人信息*/
        /*this.props.myorder.invoiceShouhuoRen(inviceOrderid)
            .then(data=>{
                console.log(data);
                let temp =this.props.myorder.myinvoiceShouHuoRenList;
                this.setState({
                    invoiceShouhuoRen:temp
                })
            })*/


        /*发货单详情中所有信息*/
        this.props.myorder.invoiceDetailAllData(temp)
            .then(data=>{
                console.log(data);
                let mm=toJS(data);
                let m={...mm};
                console.log(m[0])
                // let temp=this.props.myorder.myinvoiceDetailAllDataList;
                this.setState({
                    invoiceDetailAllData:m[0]
                })
            })
    }

    /*返回上一页*/
    prevBack(){
        window.history.back(-1);
    }
    render() {
        const {invoiceDetailAllData}=this.state
        // console.log(this.props.location.query.id);
        return (
            <div>
                <div className="myhead">
                    <div className="heng">|</div>
                    <span>订单详情</span>
                    <Button type="primary" className="myreturn" onClick={this.prevBack}>返回</Button>
                </div>

                <div className="mystate">
                    <h1>状态：<span>已完成</span></h1>
                </div>

                <div className="zhuangtai">
                    <div className="jindu">
                        <div className="mytitle">
                            <span >流转过程</span>
                        </div>
                        <Steps>
                            <Step status="finish" title="商品出库" icon={<UserOutlined />} />
                            <Step status="finish" title="等待收货" icon={<SolutionOutlined />} />
                            <Step status="process" title="完成" icon={<LoadingOutlined />} />
                            {/*<Step status="wait" title="等待收货" icon={<SmileOutlined />} />*/}
                            {/*<Step status="wait" title="完成" icon={<LaptopOutlined />} />*/}
                        </Steps>
                    </div>

                    <div className="myorder">
                        <div className="mydan">
                            {/*<p>业务类型：{invoiceDetailAllData.orId}</p>*/}
                            <p>业务类型：普通订单</p>
                            {/*<p>发货单号：{invoiceDetailAllData.caCardnumber}</p>*/}
                            <p>发货单号：T12314213</p>
                            {/*<p>来源订单：{invoiceDetailAllData.disOddnumber}</p>*/}
                            <p>来源订单：123141241</p>
                            <p>订单类型：自购</p>
                            {/*<p>订购人卡号：{invoiceDetailAllData.cardNumber }</p>*/}
                            <p>订购人卡号：CN123142</p>
                            {/*<p>订购人：{invoiceDetailAllData.uUsername}</p>*/}
                            <p>订购人：张</p>
                            {/*<p>订购人手机：{invoiceDetailAllData.uPhone}</p>*/}
                            <p>订购人手机：1234253</p>
                            {/*<p>代购人卡号：{invoiceDetailAllData.orPurcard}</p>*/}
                            <p>代购人卡号：43546347</p>
                            {/*<p>代购人：{invoiceDetailAllData.orPurchasing}</p>*/}
                            <p>代购人：李</p>
                            {/*<p>代购人手机：{invoiceDetailAllData.orPurnumber}</p>*/}
                            <p>代购人手机：12341251</p>
                        </div>
                        <div className="myyouhui">
                            <div className="xiangshou">
                                <span>享受活动:</span>
                                <span className="myone">2017年终LTO第一波</span>
                            </div>
                            <div className="youhuiquan">
                                <div>
                                    <span>优惠券信息:</span>
                                    <img src="" alt=""/>
                                </div>
                                <div>
                                    {/*<span>总商品金额:￥{invoiceDetailAllData.coTotal}</span>*/}
                                    <span>总商品金额:￥2000</span>
                                    {/*<span>优惠金额:￥{invoiceDetailAllData.coCoupon}</span>*/}
                                    <span>优惠金额:￥12</span>
                                    {/*<span>运费:￥{invoiceDetailAllData.coFore}</span>*/}
                                    <span>运费:￥10</span>
                                    {/*<span>实付金额:￥{invoiceDetailAllData.coActual}</span>*/}
                                    <span>实付金额:￥55</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*发货单*/}
                    <div className="yourHuo">
                        <h2>发货单</h2>

                        <div>
                            <div className="myHeadTitle">
                                发货单(F17020100)
                            </div>

                            {/*表格组件*/}
                            <Table
                                columns={columns}
                                dataSource={data}
                                bordered
                                border="1px solid black"
                                pagination={false}
                            />
                        </div>
                    </div>

                    {/*收货信息等*/}
                    <div className="shouhuo">
                        <div className="shouren">
                            <h3>收货人信息</h3>
                            {/*<p>收货人:  {invoiceDetailAllData.orConsignee}</p>*/}
                            <p>收货人:  老马</p>
                            {/*<p>收货地址:{invoiceDetailAllData.orConAdress}</p>*/}
                            <p>收货地址:云南</p>
                            {/*<p>联系电话:{invoiceDetailAllData.orConnumber}</p>*/}
                            <p>联系电话:777777</p>
                        </div>
                        <div className="peisong">
                            <h3>配送信息</h3>
                            {/*<p>物流方式:{invoiceDetailAllData.disType}</p>*/}
                            <p>物流方式:普通快读</p>
                            {/*<p>快递公司:{invoiceDetailAllData.disCompany}</p>*/}
                            <p>快递公司:申通</p>
                            {/*<p>运费:￥{invoiceDetailAllData.coFore}</p>*/}
                            <p>运费:￥1231</p>
                            {/*<p>付款方:{invoiceDetailAllData.disPay}</p>*/}
                            <p>付款方:自购</p>
                            {/*<p>物流单号:{invoiceDetailAllData.disOddnumber}</p>*/}
                            <p>物流单号:3451213</p>
                        </div>
                        <div className="zhifu">
                            <h3>支付信息</h3>
                            {/*<p>付款方式: {invoiceDetailAllData.payType}</p>*/}
                            <p>付款方式: 在线支付</p>
                            {/*<p>支付渠道: {invoiceDetailAllData.payChannel}</p>*/}
                            <p>支付渠道:微信</p>
                            {/*<p>付款时间: {invoiceDetailAllData.payTime}</p>*/}
                            <p>付款时间: 2017-09-09 12:21:10</p>
                            {/*<p>产品总金额: ￥{invoiceDetailAllData.coTotal}</p>*/}
                            <p>产品总金额: ￥122</p>
                            {/*<p>应支付金额: ￥{invoiceDetailAllData.coActual}</p>*/}
                            <p>应支付金额: ￥100</p>
                            {/*<p>运费金额: ￥{invoiceDetailAllData.coFore}</p>*/}
                            <p>运费金额: ￥10</p>
                            {/*<p>优惠金额: ￥{invoiceDetailAllData.coCoupon}</p>*/}
                            <p>优惠金额: ￥12</p>
                        </div>
                        <div className="fapiao">
                            <h3>发票信息</h3>
                            {/*<p>发票类型:{invoiceDetailAllData.inType}</p>*/}
                            <p>发票类型:增值票</p>
                            {/*<p>单位名称:{invoiceDetailAllData.inUnitname}</p>*/}
                            <p>单位名称:云图科技</p>
                            {/*<p>纳税人识别码:{invoiceDetailAllData.inIdcode}</p>*/}
                            <p>纳税人识别码:123142</p>
                            {/*<p>注册地址:{invoiceDetailAllData.registeredAddress}</p>*/}
                            <p>注册地址:云南</p>
                            {/*<p>注册电话:{invoiceDetailAllData.inRegisteredphone}</p>*/}
                            <p>注册电话:54745343</p>
                            {/*<p>开户银行:{invoiceDetailAllData.inOpenbank}</p>*/}
                            <p>开户银行:招商</p>
                            {/*<p>银行账户:{invoiceDetailAllData.inBankaccount}</p>*/}
                            <p>银行账户:333444556</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default InvoiceDetail