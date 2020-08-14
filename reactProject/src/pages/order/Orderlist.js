import React, {Component} from 'react'
import './Orderlist.css'
import moment from 'moment';
import {observer,inject} from 'mobx-react'
import {Link} from 'react-router-dom'

// import OrderlistDetail from './OrderlistDetail'


/*antd组件的引入*/
import { DatePicker,Button,Table,Space, Tabs} from 'antd';

// import zhCN from 'antd/es/locale/zh_CN'

const { RangePicker } = DatePicker;

const { TabPane } = Tabs;



const aaa=[];
// const data = [
//     {
//         key: '1',
//         name: '1',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '2',
//         name: '2',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '3',
//         name: '3',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '4',
//         name: '4',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '5',
//         name: '5',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '6',
//         name: '6',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '7',
//         name: '7',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '8',
//         name: '8',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '9',
//         name: '9',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '10',
//         name: '10',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '11',
//         name: '11',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '12',
//         name: '12',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '13',
//         name: '13',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '14',
//         name: '14',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '15',
//         name: '15',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '16',
//         name: '16',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '17',
//         name: '17',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '18',
//         name: '18',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '19',
//         name: '19',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '20',
//         name: '20',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '21',
//         name: '21',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
// ];


/*分页组件的函数*/
/*function onChange2(pageNumber) {
    console.log('Page: ', pageNumber);
}*/

/*function myrun() {
    this.props.history.push('/OrderlistDetail')
}*/

@inject("myorder")

@observer
class Orderlist extends Component {
    constructor(){
        super();
        this.state={
            orderList:[],   //订单列表
            orderId:"",     //订单单号
            thePhone:"",    //手机号
            productId:"",   //产品编号
            thePlatform:"", //平台
            orderStartTime:"",   //下单起始时间
            orderEndTime:"",   //下单截止时间
            buyerCard:"",   //订购人卡号
            otherBuyerCard:"",    //代购人卡号
            myallTime:"",

            orderList1:[]
        }
    }


    UNSAFE_componentWillMount() {
        let temp={
            // header:'charset=UTF-8',
            "pageSize":10,
            "pageNum":1
        }
        this.props.myorder.myOrder(temp)
            .then((data)=>{
                let temp=this.props.myorder.orderList

                this.setState({
                    orderList:temp
                })
            })

    }

    componentWillUnmount() {
        /*let aa=this.state.orderDetailAllData[0];
        console.log(aa.uusername);*/

        this.setState = (state, callback) => {
            return
        }
    }


    /*时间组件的函数*/
    onChangeTime=(dates, dateStrings) =>{
        // console.log('From: ', dates[0], ', to: ', dates[1]);
        // console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);

        console.log("起始时间:"+dateStrings[0]);
        console.log("截止时间:"+dateStrings[1]);

        this.setState({
            orderStartTime:dateStrings[0],
            orderEndTime:dateStrings[1]
        })
    }

    myrun=(data)=>{
        console.log(data);
        this.props.myorder.orderDetailAllData(data)
            .then(data=>{
                /*console.log(data);
                let temp=this.props.myorder.myorderDetailAllDataList;
                console.log(temp)*/
                /*let atm=JSON.parse((JSON.stringify(temp)))[0];
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
                console.log(bbbb[0].orId)*/
                /*this.setState({
                    orderDetailAllData:temp
                })*/

            });

        this.props.history.push("/home/OrderlistDetail")
    }

    /*callback=(key)=>{
        console.log(key);
        this.setState({
            mykey:key
        })
    }*/

    /*mytest=()=> {
        console.log(this.state.mykey)
        let a=parseInt(this.state.mykey)+1;
        let b=String(a);
        this.setState({
            mykey:b
        })
    }*/
    /*订单单号*/
    /*orderId=(e)=>{
        console.log(e.target.value);
        this.setState({
            orderId:e.target.value
        })
    };*/
    /*手机*/
    /*thePhone=(e)=>{
        console.log(e.target.value);
        this.setState({
            thePhone:e.target.value
        })
    };*/
    /*订单产品*/
    /*productId=(e)=>{
        console.log(e.target.value);
        this.setState({
            productId:e.target.value
        })
    };*/
    /*来源平台*/
    thePlatform=(e)=>{
        // if(e.target.checked==true)
        console.log(e.target.value);
        this.setState({
            thePlatform:e.target.value
        })
    };
    /*订购人卡号*/
    /*buyerCard=(e)=>{
        console.log(e.target.value);
        this.setState({
            buyerCard:e.target.value
        })
    };*/
    /*代购人卡号*/
    /*otherBuyerCard=(e)=>{
        console.log(e.target.value);
        this.setState({
            otherBuyerCard:e.target.value
        })
    };*/


    /*订单里所有数据*/
    orderAlldata=(e,thekey)=>{

        console.log(e.target.value)
        this.setState({
            [thekey]:e.target.value
        })
    }

    /*重置*/
    mysetData=()=>{
        this.setState({
            orderId:"",     //订单单号
            thePhone:"",    //手机号
            productId:"",   //产品编号
            thePlatform:"", //平台
            orderStartTime:"",   //下单起始时间
            orderEndTime:"",   //下单截止时间
            buyerCard:"",   //订购人卡号
            otherBuyerCard:"" ,   //代购人卡号
            myallTime:""
        })
    };


    /*一次打包所有输入框的数据*/
    allData=()=>{
        let temp={
            orOddnumber:String(this.state.orderId),
            uPhone:String(this.state.thePhone),
            productNumber:String(this.state.productId),
            orSource:String(this.state.thePlatform),
            orTime:String(this.state.orderStartTime),
            endTime:String(this.state.orderEndTime),
            caCardnumber:String(this.state.buyerCard),
            orPurcard:String(this.state.otherBuyerCard),
            pageSize:"10",
            pageNum:"1"
        }

        console.log(temp);

        this.props.myorder.orderSearch(temp)
            .then(data=>{
                console.log(data);
                this.setState({
                    orderList:this.props.myorder.orderSearchList
                })
            })
    }


    /*标签函数*/
    callback=(key)=> {
        console.log(key);
        let b=parseInt(key)-1;
        console.log(b);

        this.state.orderList.map((item,index)=>{
            if(parseInt(item.orType)==b){
                aaa.push(item);
            }
        })
        console.log(aaa)
        this.setState({
            orderList1:aaa
        })
        console.log(this.state.orderList1)
    }
    /*切换*/
    theStyle=(thekey)=>{

        let a=[];
        this.state.orderList.map((item,index)=>{
            if(item.orType==thekey){
                a.push(item);
            }
        })
        this.setState({
            orderList1:a
        })

    }


    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'orid',
                // render: text => <a href="#">{text}</a>,
                align: 'center',
            },
            {
                title: '订单来源',
                className: 'column-money',
                dataIndex: 'orSource',
                align: 'center',
            },
            {
                title: '业务类型',
                dataIndex: 'orBusinesstype',
                align: 'center',
            },
            {
                title: '订单单号',
                dataIndex: 'orOddnumber',
                align: 'center',
            },
            {
                title: '代购人',
                dataIndex: 'orPurchasing',
                align: 'center',
            },
            {
                title: '代购人手机',
                dataIndex: 'orPurnumber',
                align: 'center',
            },
            {
                title: '代购人卡号',
                dataIndex: 'orPurcard',
                align: 'center',
            },
            {
                title: '订购人',
                dataIndex: 'uusername',
                align: 'center',
            },
            {
                title: '订购人手机',
                dataIndex: 'uphone',
                align: 'center',
            },
            {
                title: '订购人卡号',
                dataIndex: 'caCardnumber',
                align: 'center',
            },
            {
                title: '收货人',
                dataIndex: 'orConsignee',
                align: 'center',
            },
            {
                title: '收货人手机',
                dataIndex: 'orConnumber',
                align: 'center',
            },
            {
                title: '支付信息',
                dataIndex: 'orPayinformation',
                align: 'center',
            },
            {
                title: '下单时间',
                dataIndex: 'orTime',
                align: 'center',
            },
            {
                title: '操作',
                dataIndex: 'handle',
                align: 'center',
                /*render: (text, record) => (
                    <Space size="middle">
                        {/!*<a>Invite {record.name}</a>*!/}
                        <a href="#">详情</a>
                        {/!*<span>详情</span>*!/}
                    </Space>
                ),*/
                render:(text,record)=>(
                    <Space  size="middle">
                        {/*<span onClick={this.myrun.bind(this,record.orOddnumber)}>详情</span>*/}
                        {/*<a href="" onClick={this.myrun}>详情</a>*/}
                        {/*<Route path="/order/OrderlistDetail" component={OrderlistDetail}>*/}
                        {/*通过这样传key值*/}
                        {/*<Link to={"/home/order/Orderlist/OrderlistDetail/"+record.orOddnumber}>详情</Link>*/}
                        <Link to={
                            {
                                pathname:"/home/OrderlistDetail",
                                query:{orOddnumber:record.orOddnumber}
                            }
                        }>详情</Link>

                        {/*<a href="">{record.key}</a>*/}
                        {/*</Route>*/}

                    </Space>
                )
            }
        ];
        /*const Demo = () => (
            <Tabs activeKey={this.state.mykey} onChange={this.callback} defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1" >
                    Content of Tab Pane 1
                    {/!*<Button onClick={this.mytest}>下一步</Button>*!/}
                    <MyBU myshow={this.mytest}></MyBU>
                    1
                </TabPane>
                <TabPane tab="Tab 2" key="2" >
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3" >
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        );*/


        return (
            <div className="myOrderlist">
                {/*<Demo />*/}
                {/*<Route path="/order/Orderlist/OrderlistDetail" component="OrderlistDetail"></Route>*/}
                <form  >
                    <div className="firstLine">
                        <label >订单单号:</label>
                        {/*<input type="text" onChange={this.orderId.bind(this)} value={this.state.orderId}/>*/}
                        <input type="text" onChange={(e)=>this.orderAlldata(e,"orderId")} value={this.state.orderId}/>
                        <label className="myLeft">手机:</label>
                        {/*<input type="text" onChange={this.thePhone.bind(this)} placeholder="订单所属人手机,或订单" value={this.state.thePhone}/>*/}
                        <input type="text" onChange={(e)=>this.orderAlldata(e,"thePhone")} placeholder="订单所属人手机,或订单" value={this.state.thePhone}/>
                        <label className="myLeft">订单包含产品:</label>
                        {/*<input type="text" onChange={this.productId.bind(this)} placeholder="输入产品编码" value={this.state.productId}/>*/}
                        <input type="text" onChange={(e)=>this.orderAlldata(e,"productId")} placeholder="输入产品编码" value={this.state.productId}/>
                        <label className="myLeft">来源平台:</label>
                        <select  onChange={this.thePlatform.bind(this)} value={this.state.thePlatform}>
                            <option value="Shopping Cart">Shopping Cart</option>
                            <option value="门店">门店</option>
                            <option value="360">360</option>
                        </select>
                    </div>

                    <div className="yourOd">
                        <label >下单时间:</label>
                        {/*时间插件*/}
                        <RangePicker
                            // value={this.state.myallTime}
                            ranges={{
                                Today: [moment(), moment()],
                                'This Month': [moment().startOf('month'), moment().endOf('month')],
                            }}
                            onChange={this.onChangeTime}
                        />

                        <label className="myLeft2">订购人卡号:</label>
                        <input type="text" onChange={(e)=>this.orderAlldata(e,"buyerCard")} value={this.state.buyerCard}/>
                        <label className="myLeft2">代购人卡号:</label>
                        <input type="text" onChange={(e)=>this.orderAlldata(e,"otherBuyerCard")} value={this.state.otherBuyerCard}/>
                    </div>

                    <div className="myBut">
                        <Button type="primary" onClick={this.allData.bind(this)}>搜索</Button>
                        <Button type="reset" onClick={this.mysetData.bind(this)}>重置</Button>
                        <Button type="primary">导出数据</Button>

                    </div>
                    <hr/>
                </form>

                <div className="stateCss">

                    <Tabs onChange={this.callback.bind(this)} type="card" centered>

                        <TabPane tab="所有订单" key="1">
                            {/*Content of Tab Pane 1*/}

                            {/*表格组件*/}
                            <Table
                                columns={columns}
                                // dataSource={data}
                                dataSource={this.state.orderList}
                                bordered="true"
                                border="1px solid black"
                                tableLayout="fixed"
                                pagination={{showQuickJumper: true,showSizeChanger:true,hideOnSinglePage:false}}    /*默认不使用分页功能*/

                                /*render={()=><Pagination showQuickJumper onChange={onChange2} total={500} defaultCurrent={2}>

                                    </Pagination>}*/
                            />
                        </TabPane>

                        <TabPane tab="已支付" key="2" >
                            {/*Content of Tab Pane 2*/}
                            <Table
                                columns={columns}
                                // dataSource={data}
                                dataSource={this.state.orderList1}
                                bordered="true"
                                border="1px solid black"
                                tableLayout="fixed"
                                pagination={{showQuickJumper: true,showSizeChanger:true,hideOnSinglePage:false}}    /*默认不使用分页功能*/

                                /*render={()=><Pagination showQuickJumper onChange={onChange2} total={500} defaultCurrent={2}>

                                    </Pagination>}*/
                            />
                        </TabPane>

                        <TabPane tab="待付款" key="3" >
                            {/*Content of Tab Pane 3*/}
                            <Table
                                columns={columns}
                                // dataSource={data}
                                dataSource={this.state.orderList1}
                                bordered="true"
                                border="1px solid black"
                                tableLayout="fixed"
                                pagination={{showQuickJumper: true,showSizeChanger:true,hideOnSinglePage:false}}    /*默认不使用分页功能*/

                                /*render={()=><Pagination showQuickJumper onChange={onChange2} total={500} defaultCurrent={2}>

                                    </Pagination>}*/
                            />
                        </TabPane>

                        <TabPane tab="发货中" key="4" >
                            {/*Content of Tab Pane 4*/}
                            <Table
                                columns={columns}
                                // dataSource={data}
                                dataSource={this.state.orderList1}
                                bordered="true"
                                border="1px solid black"
                                tableLayout="fixed"
                                pagination={{showQuickJumper: true,showSizeChanger:true,hideOnSinglePage:false}}    /*默认不使用分页功能*/

                                /*render={()=><Pagination showQuickJumper onChange={onChange2} total={500} defaultCurrent={2}>

                                    </Pagination>}*/
                            />
                        </TabPane>

                        <TabPane tab="交易完成" key="5" >
                            {/*Content of Tab Pane 5*/}
                            <Table
                                columns={columns}
                                // dataSource={data}
                                dataSource={this.state.orderList1}
                                bordered="true"
                                border="1px solid black"
                                tableLayout="fixed"
                                pagination={{showQuickJumper: true,showSizeChanger:true,hideOnSinglePage:false}}    /*默认不使用分页功能*/

                                /*render={()=><Pagination showQuickJumper onChange={onChange2} total={500} defaultCurrent={2}>

                                    </Pagination>}*/
                            />
                        </TabPane>

                        <TabPane tab="已取消" key="6" >
                            {/*Content of Tab Pane 6*/}
                            <Table
                                columns={columns}
                                // dataSource={data}
                                dataSource={this.state.orderList1}
                                bordered="true"
                                border="1px solid black"
                                tableLayout="fixed"
                                pagination={{showQuickJumper: true,showSizeChanger:true,hideOnSinglePage:false}}    /*默认不使用分页功能*/

                                /*render={()=><Pagination showQuickJumper onChange={onChange2} total={500} defaultCurrent={2}>

                                    </Pagination>}*/
                            />
                        </TabPane>


                    </Tabs>,

                    {/*<Button >所有订单</Button>
                    <Button >已支付</Button>
                    <Button >待付款</Button>
                    <Button >发货中</Button>
                    <Button >交易完成</Button>
                    <Button >已取消</Button>*/}
                </div>



                {/*分页组件*/}
                <div>
                    {/*<ConfigProvider locale={zhCN}>*/}
                    {/*    <Pagination showQuickJumper defaultCurrent={2} total={11} onChange={onChange2} />*/}
                    {/*</ConfigProvider>*/}

                    {/*<br />*/}
                    {/*<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />*/}
                </div>

            </div>

        )
    }
}

export default Orderlist