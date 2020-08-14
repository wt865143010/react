import React, {Component} from 'react'
import  './Return_Order.css'
import moment from 'moment';
import {observer,inject} from 'mobx-react'
import {Link} from 'react-router-dom'

/*antd组件的引入*/
import { DatePicker,Button,Table,Space} from 'antd';

const { RangePicker } = DatePicker;



/*表格*/
const columns = [
    {
        title: '序号',
        dataIndex: 'returnId',
        // render: text => <a href="#">{text}</a>,
        align: 'center',
    },
    {
        title: '申请单号',
        className: 'shenqing_order',
        dataIndex: 'reOddnumber',
        align: 'center',
    },
    {
        title: '所属订单号',
        dataIndex: 'orOddNumber',
        align: 'center',
    },
    {
        title: '申请人手机号',
        dataIndex: 'rePhonenumber',
        align: 'center',
    },
    {
        title: '申请人卡号',
        dataIndex: 'caCardNumber',
        align: 'center',
    },
    {
        title: '申请人姓名',
        dataIndex: 'uusername',
        align: 'center',
    },
    {
        title: '申请时间',
        dataIndex: 'reTime',
        align: 'center',
    },
    {
        title: '退货原因',
        dataIndex: 'reReason',
        align: 'center',
    },
    {
        title: '退货理由',
        dataIndex: 'reAccount',
        align: 'center',
    },
    {
        title: '退货人联系电话',
        dataIndex: 'rePhonenumber',
        align: 'center',
    },

    {
        title: '操作',
        dataIndex: 'your_role',
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
                {/*<Link to="/order/Return_order/Return_orderDetail">详情</Link>*/}
                <Link to={
                    {
                        pathname:"/home/Return_orderDetail",
                        query:{reOddnumber:record.reOddnumber}
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
//         shenqing_order: '￥300.00',
//         suoshu_order: '云南',
//         myPhone:"猪猪",
//         myCard:"2",
//         shenqing_name:"3",
//         shenqing_time:"4",
//         return_reason:"5",
//         return_why:"6",
//         return_phone:"7",
//     },
//     {
//         key: '2',
//         name: '2',
//         shenqing_order: '￥300.00',
//         suoshu_order: '云南',
//         myPhone:"猪猪",
//         myCard:"2",
//         shenqing_name:"3",
//         shenqing_time:"4",
//         return_reason:"5",
//         return_why:"6",
//         return_phone:"7",
//     },
//     {
//         key: '3',
//         name: '3',
//         shenqing_order: '￥300.00',
//         suoshu_order: '云南',
//         myPhone:"猪猪",
//         myCard:"2",
//         shenqing_name:"3",
//         shenqing_time:"4",
//         return_reason:"5",
//         return_why:"6",
//         return_phone:"7",
//     },
//     {
//         key: '4',
//         name: '4',
//         shenqing_order: '￥300.00',
//         suoshu_order: '云南',
//         myPhone:"猪猪",
//         myCard:"2",
//         shenqing_name:"3",
//         shenqing_time:"4",
//         return_reason:"5",
//         return_why:"6",
//         return_phone:"7",
//     },
//     {
//         key: '5',
//         name: '5',
//         shenqing_order: '￥300.00',
//         suoshu_order: '云南',
//         myPhone:"猪猪",
//         myCard:"2",
//         shenqing_name:"3",
//         shenqing_time:"4",
//         return_reason:"5",
//         return_why:"6",
//         return_phone:"7",
//     },
//     {
//         key: '6',
//         name: '6',
//         shenqing_order: '￥300.00',
//         suoshu_order: '云南',
//         myPhone:"猪猪",
//         myCard:"2",
//         shenqing_name:"3",
//         shenqing_time:"4",
//         return_reason:"5",
//         return_why:"6",
//         return_phone:"7",
//     },
//
// ];


@inject("myorder")

@observer
class Return_Order extends Component {

    constructor(props) {
        super(props);
        this.state={
            return_List:[],
            shenqingId:"",    //申请单号
            orderID:"",        //订单号
            chanpinId:"",     //含产品编号
            chanpinName:"",   //含产品名称
            shenqingStartTime:"",   //申请时间
            shenqingEndTime:"",     //结束时间
            shenqingPhone:"",      //申请人手机号
            shenqingIDCard:"",      //申请人卡号
        }

    }

    UNSAFE_componentWillMount() {
        let data={
            header:'charset=UTF-8'
        }
        this.props.myorder.return_list(data)
            .then(data=>{
                let temp=this.props.myorder.return_List;
                this.setState({
                    return_List:temp
                })
            })
    }

    /*时间插件函数*/
    onChangeReturn=(dates, dateStrings)=> {
        console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);

        this.setState({
            shenqingStartTime:dateStrings[0],
            shenqingEndTime:dateStrings[1]
        })
    }

    /*shenqingId=(e)=>{
        console.log(e.target.value);
        this.setState({
            shenqingId:e.target.value
        })
    }*/

    /*orderID=(e)=>{
        console.log(e.target.value);
        this.setState({
            orderID:e.target.value
        })
    }*/


    /*chanpinId=(e)=>{
        console.log(e.target.value);
        this.setState({
            chanpinId:e.target.value
        })
    }*/


    /*chanpinName=(e)=>{
        console.log(e.target.value);
        this.setState({
            chanpinName:e.target.value
        })
    }*/

    shenqingStartTime=(e)=>{
        console.log(e.target.value);
        this.setState({
            shenqingStartTime:e.target.value
        })
    }

    shenqingEndTime=(e)=>{
        console.log(e.target.value);
        this.setState({
            shenqingEndTime:e.target.value
        })
    }

    /*shenqingPhone=(e)=>{
        console.log(e.target.value);
        this.setState({
            shenqingPhone:e.target.value
        })
    }*/

    /*shenqingIDCard=(e)=>{
        console.log(e.target.value);
        this.setState({
            shenqingIDCard:e.target.value
        })
    }*/


    /*退货单所有input数据*/
    returnOrderData=(e,thekey)=>{
        console.log(e.target.value)
        this.setState({
            [thekey]:e.target.value
        })
    }
    /*重置*/
    resetReturn=()=>{
        this.setState({
            shenqingId:"",    //申请单号
            orderID:"",        //订单号
            chanpinId:"",     //含产品编号
            chanpinName:"",   //含产品名称
            shenqingStartTime:"",   //申请时间
            shenqingEndTime:"",     //结束时间
            shenqingPhone:"",      //申请人手机号
            shenqingIDCard:"",      //申请人卡号
        })
    }

    /*提交函数*/
    sendReturnData=()=>{
        let temp ={
            shenqingId:this.state.shenqingId,    //申请单号
            orderID:this.state.orderID,        //订单号
            chanpinId:this.state.chanpinId,     //含产品编号
            chanpinName:this.state.chanpinName,   //含产品名称
            shenqingStartTime:this.state.shenqingStartTime,   //申请时间
            shenqingEndTime:this.state.shenqingEndTime,     //结束时间
            shenqingPhone:this.state.shenqingPhone,      //申请人手机号
            shenqingIDCard:this.state.shenqingIDCard,      //申请人卡号
        }

        console.log(temp);
    }

    render() {
        return (
            <div className="return_my">
                <form action="./return_order.do" method="post">
                    <div className="line1">
                        <label >申请单号:</label>
                        {/*<input type="text" className="myshenqingid" onChange={this.shenqingId.bind(this)} value={this.state.shenqingId}/>*/}
                        <input type="text" className="myshenqingid" onChange={(e)=>this.returnOrderData(e,"shenqingId")} value={this.state.shenqingId}/>
                        <label >订单号:</label>
                        {/*<input type="text" placeholder="" className="myshenqingid" onChange={this.orderID.bind(this)} value={this.state.orderID}/>*/}
                        <input type="text" placeholder="" className="myshenqingid" onChange={(e)=>this.returnOrderData(e,"orderID")} value={this.state.orderID}/>
                        <label >含产品编号:</label>
                        <input type="text" placeholder="" className="myshenqingid" onChange={(e)=>this.returnOrderData(e,"chanpinId")} value={this.state.chanpinId}/>
                        <label >含产品名称:</label>
                        <input type="text" onChange={(e)=>this.returnOrderData(e,"chanpinName")} value={this.state.chanpinName}/>
                    </div>

                    <div className="line2">
                        <label >申请时间:</label>
                        <RangePicker
                            ranges={{
                                Today: [moment(), moment()],
                                'This Month': [moment().startOf('month'), moment().endOf('month')],
                            }}
                            onChange={this.onChangeReturn.bind(this)}
                        />

                        <label  className="myzuo">申请人手机号:</label>
                        {/*<input type="text" className="myput" onChange={this.shenqingPhone.bind(this)} value={this.state.shenqingPhone}/>*/}
                        <input type="text" className="myput" onChange={(e)=>this.returnOrderData(e,"shenqingPhone")} value={this.state.shenqingPhone}/>
                        <label  className="myzuo">申请人卡号:</label>
                        <input type="text" className="myput" onChange={(e)=>this.returnOrderData(e,"shenqingIDCard")} value={this.state.shenqingIDCard}/>
                    </div>

                    <div className="myBut3">
                        <Button type="primary" onClick={this.sendReturnData.bind(this)}>搜索</Button>
                        <Button type="reset" onClick={this.resetReturn.bind(this)}>重置</Button>
                        <Button type="primary">导出数据</Button>
                    </div>
                    <hr/>

                    {/*表格插件*/}
                    <Table
                        columns={columns}
                        dataSource={this.state.return_List}
                        bordered
                        border="1px solid black"
                        pagination={{showQuickJumper: true,showSizeChanger:true,hideOnSinglePage:false}}
                    />

                    {/*分页插件*/}
                    <div>
                        {/*<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                        <br />*/}
                        {/*<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />*/}
                    </div>
                </form>
            </div>
        )
    }
}

export default Return_Order