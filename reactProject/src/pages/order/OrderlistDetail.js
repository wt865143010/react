import React, {Component} from 'react'

import './OrderlistDetail.css'


/*引入antd组件*/
import {Button,Steps,Table } from 'antd'


import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined,LaptopOutlined } from '@ant-design/icons';

import {observer,inject} from 'mobx-react'
import {toJS} from "mobx";
const { Step } = Steps;
// const { RangePicker } = DatePicker;


const columns = [
    {
        title: '序号',
        dataIndex: 'id',
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
        dataIndex: 'the_unit',
        align: 'center',
    },
    {
        title: '数量',
        dataIndex: 'the_num',
        align: 'center',
    },
    {
        title: '销售单价',
        dataIndex: 'sale_price',
        align: 'center',
    },
    {
        title: '实际购买价格',
        dataIndex: 'real_price',
        align: 'center',
    },
    {
        title: '实收小计',
        dataIndex: 'real_money',
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
        the_unit:"猪猪",
        the_num:"123",
        sale_price:"888",
        real_price:"666",
        real_money:"567"
    },
    {
        key: '2',
        id: '2',
        product: '￥300.00',
        product_id: '云南',
        the_unit:"猪猪",
        the_num:"123",
        sale_price:"888",
        real_price:"666",
        real_money:"567"
    },
    {
        key: '3',
        id: '3',
        product: '￥300.00',
        product_id: '云南',
        the_unit:"猪猪",
        the_num:"123",
        sale_price:"888",
        real_price:"666",
        real_money:"567"
    },
];
// const  aaaaa=8

const bbbb=[]

@inject("myorder")

@observer
class OrderlistDetail extends Component {

    constructor(props) {
        super(props);
        this.state={
            businessList:[],      //业务类型数组

            orderDetailAllData:[],   //订单详情页所有数据

            mytestList:{},
            bbbb:[],
            temp:""
        }
    }


    UNSAFE_componentWillMount() {
        /*console.log(this.props.location.query.orOddnumber)
        let temp={
            orOddnumber:this.props.location.query.orOddnumber
        }
        this.props.myorder.orderDetailAllData(temp)
            .then(data=>{
                console.log(data);
                let a=toJS(data);
                this.setState({
                    mytestList:a
                })
            });*/
        // console.log(this.props.myorder.myorderDetailAllDataList);
        /* console.log(this.props.location.query.orOddnumber)
         let temp={
             orOddnumber:this.props.location.query.orOddnumber
         }
         this.props.myorder.orderDetailAllData(temp)
             .then(data=>{
                 console.log(data);
             },()=>{console.log(this.props.myorder.myorderDetailAllDataList)})*/
        // console.log(this.props.myorder.myorderDetailAllDataList)
        // console.log(JSON.parse((JSON.stringify(this.props.myorder.myorderDetailAllDataList))))
        /* this.setState({
             temp:JSON.parse((JSON.stringify(this.props.myorder.myorderDetailAllDataList)))
         })*/
        // let temp=
        // let orderDetailId=this.props.location.query.orOddnumber
        // console.log(orderDetailId);
        /*this.props.myorder.orderDetailAllData(orderDetailId)
            .then(data=>{
                console.log(data);
                let temp=this.props.myorder.myorderDetailAllDataList;
                console.log(temp)
                let atm=JSON.parse((JSON.stringify(temp)))[0];
                console.log(atm)
                for(let am in atm){
                    // let aaa=am

                    // let ab={am:a[am]}
                    let ab={};
                    ab[am]=atm[am];
                    // console.log(am)
                    // console.log(a[am]);
                    bbbb.push(ab)
                }
                console.log(bbbb)
                console.log(bbbb[0])
                console.log(bbbb[0].orId)
            /!*this.setState({
                orderDetailAllData:temp
            })*!/

        });*/

        // console.log(this.state.orderDetailAllData)
    }

    componentDidMount() {
        console.log(this.props.location.query.orOddnumber)
        let temp={
            orOddnumber:this.props.location.query.orOddnumber
        }
        this.props.myorder.orderDetailAllData(temp)
            .then(data=>{
                console.log(data);
                let a=toJS(data);
                let aa={...a};
                console.log(aa[0]);
                console.log(aa[0].orBusinesstype)
                this.setState({
                    mytestList:aa[0]
                })
            });
        // console.log(this.props.myorder.myorderDetailAllDataList)
        /*console.log(this.props.location.query.orOddnumber)
        let temp={
            orOddnumber:this.props.location.query.orOddnumber
        }
        this.props.myorder.orderDetailAllData(temp)
            .then(data=>{
                console.log(data);
                this.setState({
                    mytestList:data
                })
            });*/
        // console.log(this.props.myorder.myorderDetailAllDataList);

        // let mm =this.props.myorder.myorderDetailAllDataList
        // console.log(mm)

    }

    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(this.props.myorder.myorderDetailAllDataList)
    }*/

    /*componentWillUnmount() {
        /!*let aa=this.state.orderDetailAllData[0];
        console.log(aa.uusername);*!/

        /!*this.setState = (state, callback) => {
            return
        }*!/



    }*/
    componentWillUnmount() {
        /*console.log(JSON.parse((JSON.stringify(this.props.myorder.myorderDetailAllDataList))))
        this.setState({
            temp:JSON.parse((JSON.stringify(this.props.myorder.myorderDetailAllDataList)))
        })*/
        /* console.log(temp[0])
         console.log(temp[0].orId)*/
        // this.setState = ()=>false;
    }
    /*点击返回上一页函数*/
    prevBack(){
        // console.log(this.props.myorder.myorderDetailAllDataList)
        /*let a=this.state.temp
        console.log(a);*/
        window.history.back(-1)
    }


    render() {
        const {mytestList}=this.state;
        // console.log(JSON.stringify(mytestList))
        // console.log(mytestList[0].orId)
        // console.log(this.props.myorder.myorderDetailAllDataList)
        /* let aa=this.state.orderDetailAllData[0];
         let bb=toJS(aa)*/
        // console.log(bb.orId);
        // console.log(this.state.orderDetailAllData[0][uusername])
        // console.log(JSON.parse((JSON.stringify(this.state.orderDetailAllData)))[0][uusername])
        /*let a=JSON.parse((JSON.stringify(this.state.orderDetailAllData)))[0];
        console.log(a)
        for(let am in a){
            let aaa=am

            // let ab={am:a[am]}
            let ab={};
            ab[am]=a[am];
            // console.log(am)
            // console.log(a[am]);
            bbbb.push(ab)
        }
        console.log(bbbb);*/
        // console.log(toJS(this.props.myorder.myorderDetailAllDataList)[0])
        // console.log(this.props.myorder.myorderDetailAllDataList[0].caCardnumber)
        /* let b=[]
         let a=this.props.myorder.myorderDetailAllDataList.map((item,index)=>{
             console.log(item);
             console.log(item.caCardnumber)
             b.push(item);
         })
         console.log(b);*/
        // console.log(this.state.orderDetailAllData)
        // console.log(this.state.orderDetailAllData!==[])

        /*if(this.state.orderDetailAllData!=[]){
            console.log(9999999999)
            let a=toJS(this.state.orderDetailAllData);
            console.log(a[0].caCardnumber);
        }*/
        // console.log(this.props.location.query.orOddnumber)

        // console.log(a[0].orId);


        //
        // console.log(toJS(this.state.orderDetailAllData)[0].orBusinesstype)
        // console.log(toJS(this.state.orderDetailAllData)[0].orbusinesstype)
        return (
            <div>
                {/*<div style="1px solid red" width="0px" height="5px"></div>*/}
                <div className="myhead">
                    <div className="heng">|</div>
                    <span>订单详情</span>
                    <Button type="primary" className="myreturn" onClick={this.prevBack.bind(this)}>返回</Button>
                </div>

                <div className="zhuangtai">
                    <div className="jindu">
                        <div className="mytitle">
                            <span >订单流转过程</span>
                        </div>
                        <Steps>
                            <Step status="finish" title="提交订单" icon={<UserOutlined />} />
                            <Step status="finish" title="付款成功" icon={<SolutionOutlined />} />
                            <Step status="process" title="待发货" icon={<LoadingOutlined />} />
                            <Step status="wait" title="等待收货" icon={<SmileOutlined />} />
                            <Step status="wait" title="完成" icon={<LaptopOutlined />} />
                        </Steps>
                    </div>

                    <div className="myorder">
                        <div className="mydan">
                            {/*<p>业务类型：普通订单</p>*/}
                            <p>业务类型：{mytestList.orId}</p>
                            {/*<p>订单号：2017061600001</p>*/}
                            <p>订单号：{mytestList.caCardnumber}</p>
                            {/*<p>订单类型：自购</p>*/}
                            <p>订单类型：{mytestList.orBusinesstype}</p>
                            {/*<p>订购人卡号：CN123456</p>*/}
                            <p>订购人卡号：{mytestList.caCardnumber}</p>
                            <p>订购人：{mytestList.uusername}</p>
                            <p>订购人手机：{mytestList.uphone}</p>
                            <p>代购人卡号：{mytestList.orPurcard}</p>
                            <p>代购人：{mytestList.orPurchasing}</p>
                            <p>代购人手机：{mytestList.orPurnumber}</p>
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
                                    {/*<span>总商品金额:￥{mytestList.cototal}</span>*/}
                                    <span>总商品金额:￥11100</span>
                                    {/*<span>优惠金额:￥{mytestList.cocoupon}</span>*/}
                                    <span>优惠金额:￥10</span>
                                    {/*<span>运费:￥{mytestList.cofore}</span>*/}
                                    <span>运费:￥15</span>
                                    {/*<span>实付金额:￥{mytestList.coactual}</span>*/}
                                    <span>实付金额:￥11090</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/*收货信息等*/}
                <div className="shouhuo">
                    <div className="shouren">
                        <h3>收货人信息</h3>
                        <p>收货人:  {mytestList.orConsignee}</p>
                        <p>收货地址:{mytestList.orConAdress }</p>
                        <p>联系电话:{mytestList.orConnumber}</p>
                    </div>
                    <div className="zhifu">
                        <h3>支付信息</h3>
                        {/*<p>付款方式: {mytestList.payType}</p>*/}
                        <p>付款方式: 在线支付</p>
                        {/*<p>支付渠道: {mytestList.payChannel}</p>*/}
                        <p>支付渠道: 微信</p>
                        {/*<p>付款时间: {mytestList.payTime}</p>*/}
                        <p>付款时间: 2017-09-09 12:12:11</p>
                        {/*<p>产品总金额: ￥{mytestList.coTotal}</p>*/}
                        <p>产品总金额: ￥11130</p>
                        {/*<p>应支付金额: ￥{mytestList.coActual}</p>*/}
                        <p>应支付金额: ￥11392</p>
                        {/*<p>运费金额: ￥{mytestList.coFore}</p>*/}
                        <p>运费金额: ￥15</p>
                        {/*<p>优惠金额: ￥{mytestList.coCoupon}</p>*/}
                        <p>优惠金额: ￥10</p>
                    </div>
                    <div className="fapiao">
                        <h3>发票信息</h3>
                        {/*<p>发票类型:{mytestList.inType}</p>*/}
                        <p>发票类型:增值票</p>
                        {/*<p>单位名称:{mytestList.inUnitname}</p>*/}
                        <p>单位名称:余韵科技</p>
                        {/*<p>纳税人识别码:{mytestList.inIdcode}</p>*/}
                        <p>纳税人识别码:34523123141</p>
                        {/*<p>注册地址:{mytestList.inRegisteredaddress}</p>*/}
                        <p>注册地址:广州市</p>
                        {/*<p>注册电话:{mytestList.inRegisteredphone}</p>*/}
                        <p>注册电话:55677</p>
                        {/*<p>开户银行:{mytestList.inOpenbank}</p>*/}
                        <p>开户银行:中国银行</p>
                        {/*<p>银行账户:{mytestList.inBankaccount}</p>*/}
                        <p>银行账户:555666777}</p>
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
            </div>
        )
    }
}

export default OrderlistDetail