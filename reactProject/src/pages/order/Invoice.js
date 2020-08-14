import React, {Component} from 'react'
import moment from 'moment';
import './Invoice.css'
import {Link} from 'react-router-dom'

import {observer,inject} from 'mobx-react'

/*antd组件的引入*/
import { DatePicker,Button,Table,Space,Tabs,Form,Input} from 'antd';
const { RangePicker } = DatePicker;

const { TabPane } = Tabs;

/*表格插件*/
const columns = [
    {
        title: '序号',
        dataIndex: 'invoiceId',
        // render: text => <a href="#">{text}</a>,
        align: 'center',
    },
    {
        title: '业务类型',
        className: 'column-money',
        dataIndex: 'delBusinessType',
        align: 'center',
    },
    {
        title: '发货单号',
        dataIndex: 'delNumber',
        align: 'center',
    },
    {
        title: '来源订单号',
        dataIndex: 'orOddnumber',
        align: 'center',
    },
    {
        title: '用户',
        dataIndex: 'uusername',
        align: 'center',
    },
    {
        title: '手机号码',
        dataIndex: 'uphone',
        align: 'center',
    },
    {
        title: '卡号',
        dataIndex: 'caCardnumber',
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
        title: '状态',
        dataIndex: 'delType',
        align: 'center',
    },

    {
        title: '操作',
        dataIndex: 'the_role',
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
                {/*<a href="">详情</a>*/}
                {/*<Link to="/order/Invoice/InvoiceDetail">详情</Link>*/}
                <Link to={
                    {
                        pathname:"/home/InvoiceDetail" ,
                        query:{delNumber:record.delNumber}
                    }

                }>详情</Link>
            </Space>
        )
    }
];

/*表格数据*/
// const data = [
//     {
//         key: '1',
//         name: '1',
//         money: '￥300.00',
//         address: '云南',
//         lai_order:"1",
//         theuser:"2",
//         thePhone:"3",
//         theCard:"4",
//         zhifu_detail:"5",
//         order_time:"6",
//         the_zhuangtai:"7",
//         the_role:"8"
//     },
//     {
//         key: '2',
//         name: '2',
//         money: '￥300.00',
//         address: '云南',
//         lai_order:"1",
//         theuser:"2",
//         thePhone:"3",
//         theCard:"4",
//         zhifu_detail:"5",
//         order_time:"6",
//         the_zhuangtai:"7",
//         the_role:"8"
//     },
//     {
//         key: '3',
//         name: '3',
//         money: '￥300.00',
//         address: '云南',
//         lai_order:"1",
//         theuser:"2",
//         thePhone:"3",
//         theCard:"4",
//         zhifu_detail:"5",
//         order_time:"6",
//         the_zhuangtai:"7",
//         the_role:"8"
//     },
//     {
//         key: '4',
//         name: '4',
//         money: '￥300.00',
//         address: '云南',
//         lai_order:"1",
//         theuser:"2",
//         thePhone:"3",
//         theCard:"4",
//         zhifu_detail:"5",
//         order_time:"6",
//         the_zhuangtai:"7",
//         the_role:"8"
//     },
//     {
//         key: '5',
//         name: '5',
//         money: '￥300.00',
//         address: '云南',
//         lai_order:"1",
//         theuser:"2",
//         thePhone:"3",
//         theCard:"4",
//         zhifu_detail:"5",
//         order_time:"6",
//         the_zhuangtai:"7",
//         the_role:"8"
//     },
// ];



@inject("myorder")

@observer
class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state={
            InvoiceList:[],
            fahuoOrderId:"",   //发货单号
            laiyuanOrderId:"",  //来源订单号
            fahuoShopId:"",     //包含产品
            wuliuOrderId:"",    //物流单号
            theStartTime:"",    //下单时间
            theEndTime:"",      //下单截止时间
            receiveName:"",     //收货人姓名
            receivePhone:"",    //收货人手机
            suoshuId:"",        //订单所属卡号
        }
    }

    // formRef = React.createRef();
    UNSAFE_componentWillMount() {
        let temp={
            header:'charset=UTF-8',
        }
        this.props.myorder.invoiceOrder(temp)
            .then(data=>{
                let temp=this.props.myorder.invoiceList;
                this.setState({
                    InvoiceList:temp
                })
            })
    }

    /*标签函数*/
    callback=(key)=> {
        console.log(key);
    }


    /*时间插件函数*/
    onChangeInvoice=(dates, dateStrings)=> {
        console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);

        this.setState({
            theStartTime:dateStrings[0],
            theEndTime:dateStrings[1]
        })
    }

    /*fahuoOrderId=(e)=>{
        console.log(e.target.value);
        // console.log(this.formRef.current.getFieldValue("mm"))
        this.setState({
            fahuoOrderId:e.target.value
        })
    }*/

    /*laiyuanOrderId=(e)=>{
        console.log(e.target.value);
        this.setState({
            laiyuanOrderId:e.target.value
        })
    }*/

    /*fahuoShopId=(e)=>{
        console.log(e.target.value);
        this.setState({
            fahuoShopId:e.target.value
        })
    }*/

    /*wuliuOrderId=(e)=>{
        console.log(e.target.value);
        this.setState({
            wuliuOrderId:e.target.value
        })
    }*/

    /*receiveName=(e)=>{
        console.log(e.target.value);
        this.setState({
            receiveName:e.target.value
        })
    }*/

    /*receivePhone=(e)=>{
        console.log(e.target.value);
        this.setState({
            receivePhone:e.target.value
        })
    }*/

    /*suoshuId=(e)=>{
        console.log(e.target.value);
        this.setState({
            suoshuId:e.target.value
        })
    }*/


    /*所有输入框的改变*/
    changeWord=(e,thekey)=>{
        console.log(e.target.value);
        this.setState({
            [thekey]:e.target.value
        })
    }

    /*重置*/
    receiveReset=()=>{
        this.setState({
            fahuoOrderId:"",   //发货单号
            laiyuanOrderId:"",  //来源订单号
            fahuoShopId:"",     //包含产品
            wuliuOrderId:"",    //物流单号
            // theStartTime:"",    //下单时间
            // theEndTime:"",      //下单截止时间
            receiveName:"",     //收货人姓名
            receivePhone:"",    //收货人手机
            suoshuId:"",        //订单所属卡号
        })
    }


    /*打包所有数据*/
    AllReceiveData=()=>{
        console.log(this.state);
        // let b=JSON.stringify(this.state);
        // console.log(typeof b);
        let a=this.state;
        let b=delete  a["InvoiceList"];
        console.log(a);
        // console.log(this.state.splice(0,1));
        let temp={
            fahuoOrderId:this.state.fahuoOrderId,   //发货单号
            laiyuanOrderId:this.state.laiyuanOrderId,  //来源订单号
            fahuoShopId:this.state.fahuoShopId,     //包含产品
            wuliuOrderId:this.state.wuliuOrderId,    //物流单号
            theStartTime:this.state.theStartTime,    //下单时间
            theEndTime:this.state.theEndTime,      //下单截止时间
            receiveName:this.state.receiveName,     //收货人姓名
            receivePhone:this.state.receivePhone,    //收货人手机
            suoshuId:this.state.suoshuId,        //订单所属卡号
        }

        // console.log(temp);
    }
    render() {

        const onFinish = values => {
            console.log(this.formRef.current.getFieldsValue())
            console.log(values)
            console.log('Success:', values);

        };
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className="Myinvoice">
                {/*<Form
                    ref={this.formRef}
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >*/}


                <form action="./invoice.do" method="post">
                    {/*<Form.Item >*/}


                    <div className="wuliu">
                        {/*<Form.Item >*/}
                        {/*    <Form.Item label="发货单号" name="fahuo1" >*/}
                        {/*        <Form.Item name="sendid" label="发货单号">*/}
                        {/*<Form.Item >*/}
                        <label >发货单号:</label>
                        {/*    <input type="text"/>*/}
                        {/*    <input type="text" className="fahuo1" onChange={this.fahuoOrderId.bind(this)} value={this.state.fahuoOrderId}/>*/}
                        {/*</Form.Item>*/}
                        {/*</Form.Item>*/}

                        {/*</Form.Item>*/}
                        {/*<Form.Item label="来源订单号" name="dingdan" noStyle>*/}
                        {/*<Form.Item noStyle>
                                    <label htmlFor="">来源订单号</label>
                                    <input type="text" placeholder="" className="fahuo1" onChange={this.laiyuanOrderId.bind(this)} value={this.state.laiyuanOrderId}/>
                                </Form.Item>*/}

                        {/*<Form.Item noStyle>
                                    <label htmlFor="">发货单包含产品</label>
                                    <input type="text" placeholder="" className="fahuo1" onChange={this.fahuoShopId.bind(this)} value={this.state.fahuoShopId}/>
                                </Form.Item>*/}
                        {/*<Form.Item  name="asd" label="物流单号">*/}
                        {/*    <Form.Item >*/}
                        {/*        <label htmlFor="">物流单号</label>*/}
                        {/*<Input className="abc"/>*/}
                        {/*    <input type="text" onChange={this.wuliuOrderId.bind(this)} value={this.state.wuliuOrderId}/>*/}
                        {/*</Form.Item>*/}
                        {/*</Form.Item>*/}
                        {/**/}

                        {/*</Form.Item>*/}

                        {/*/!* <label >发货单号:</label>*/}
                        {/* <input type="text" className="fahuo1" onChange={this.fahuoOrderId.bind(this,"fahuoOrderId")} value={this.state.fahuoOrderId}/>*/}
                        <input type="text" className="fahuo1" onChange={(e)=>this.changeWord(e,"fahuoOrderId")} value={this.state.fahuoOrderId}/>
                        <label >来源订单号:</label>
                        <input type="text" placeholder="" className="fahuo1" onChange={(e)=>this.changeWord(e,"laiyuanOrderId")} value={this.state.laiyuanOrderId}/>
                        <label >发货单包含产品:</label>
                        <input type="text" placeholder="" className="fahuo1" onChange={(e)=>this.changeWord(e,"fahuoShopId")} value={this.state.fahuoShopId}/>
                        <label >物流单号:</label>
                        <input type="text" onChange={(e)=>this.changeWord(e,"wuliuOrderId")} value={this.state.wuliuOrderId}/>
                        {/*</Form.Item>*/}
                    </div>
                    {/*</Form.Item>*/}
                    <div className="invoiceLine2">
                        <label >下单时间:</label>
                        <RangePicker

                            ranges={{
                                Today: [moment(), moment()],
                                'This Month': [moment().startOf('month'), moment().endOf('month')],
                            }}
                            onChange={this.onChangeInvoice}
                        />

                        <label className="receiveN">收货人姓名:</label>
                        <input type="text"  className="myinput" onChange={(e)=>this.changeWord(e,"receiveName")} value={this.state.receiveName}/>
                        <label className="receiveN">收货人手机号:</label>
                        <input type="text" placeholder="收货人手机号" className="myinput" onChange={(e)=>this.changeWord(e,"receivePhone")} value={this.state.receivePhone}/>
                        <label className="receiveN">订单所属卡号:</label>
                        <input type="text" className="myinput" onChange={(e)=>this.changeWord(e,"suoshuId")} value={this.state.suoshuId}/>
                    </div>
                    {/*<Form.Item>*/}
                    <div className="myTT">
                        <Button type="primary" onClick={this.AllReceiveData.bind(this)}>搜索</Button>
                        <Button type="reset" onClick={this.receiveReset.bind(this)}>重置</Button>

                        {/*<Button type="primary" htmlType="submit">
                                    登录
                                </Button>*/}


                    </div>
                    {/*</Form.Item>*/}
                    {/*<div className="mmyy">
                         <Form.Item>
                             <Button type="primary" htmlType="submit" >
                                 登录
                             </Button>
                         </Form.Item>
                     </div>*/}

                    <hr/>
                </form>
                {/*</Form>*/}

                <div className="stateCss">


                    <Tabs onChange={this.callback.bind(this)} type="card" centered>

                        <TabPane tab="所有发货单" key="1">
                            {/*Content of Tab Pane 1*/}

                            {/*表格插件*/}
                            <Table
                                columns={columns}
                                // dataSource={data}
                                dataSource={this.state.InvoiceList}
                                bordered
                                border="1px solid black"
                                pagination={{showQuickJumper: true,showSizeChanger:true,hideOnSinglePage:false}}
                            />
                        </TabPane>

                        <TabPane tab="待付款" key="2">
                            Content of Tab Pane 2
                        </TabPane>

                        <TabPane tab="已发货" key="3">
                            Content of Tab Pane 3
                        </TabPane>

                        <TabPane tab="已完成" key="4">
                            Content of Tab Pane 4
                        </TabPane>

                        <TabPane tab="已取消" key="5">
                            Content of Tab Pane 5
                        </TabPane>

                        <TabPane tab="待发货" key="6">
                            Content of Tab Pane 6
                        </TabPane>


                    </Tabs>

                    {/*<Button >待发货</Button>
                    <Button >待付款</Button>
                    <Button >已发货</Button>
                    <Button >已完成</Button>
                    <Button >已取消</Button>
                    <Button >所有发货单</Button>*/}
                </div>



                {/*分页插件*/}
                <div>
                    {/*<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />*/}
                    {/*<br />*/}
                    {/*<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />*/}
                </div>
            </div>
        )
    }
}

export default Invoice