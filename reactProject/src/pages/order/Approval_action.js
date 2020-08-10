import React, {Component} from 'react'

import {Table, Descriptions, Button, Space,Form,Input,Select,Checkbox} from 'antd'


import './Approval_action.css'
import Mycity from './city'

const { Option } = Select;

const columns=[
    /*{
        title: '选择',
        dataIndex: 'choose',
        align: 'center',
        // className:"table_title myColumn",
        // width:100
    },*/
    {
        title: '产品编号',
        dataIndex: 'product_num',
        align: 'center',
        className:"table_title"
        // className:"table_title myColumn",
        // width:100
    },
    {
        title: '产品名称',
        dataIndex: 'product_Name',
        align: 'center',
        className:"table_title"
        // className:"table_title myColumn",
        // width:100
    },
    {
        title: '活动库存',
        dataIndex: 'activity_Num',
        align: 'center',
        className:"table_title",
        // className:"table_title myColumn",
        // width:100
        render:(text,record)=>(
            <Space  size="middle">
                {/*通过这样传key值*/}
                {/*<Link to={"/order/Orderlist/OrderlistDetail/"+record.key}>详情</Link>*/}
                <input type="text" placeholder="1000"/>
            </Space>
        )
    },
    {
        title: '销售价',
        dataIndex: 'price_Sale',
        align: 'center',
        className:"table_title"
        // className:"table_title myColumn",
        // width:100
    }
];

const data=[
    {
        key: '1',
        product_num: '5435432',
        product_Name: '客官的茶',
        // activity_Num: '￥380.00',
        price_Sale: "优惠顾客折扣:￥90.00"
    },
    {
        key: '2',
        product_num: '5435432',
        product_Name: '客官的茶',
        // activity_Num: '￥380.00',
        price_Sale: "优惠顾客折扣:￥90.00"
    },
];


/*产品名称*/
const product_nameColumn=[
    {
        title: '产品名称',
        dataIndex: 'product_Name',
        align: 'center',
        className:"table_title"
        // className:"table_title myColumn",
        // width:100
    },
    {
        title: '销售价格',
        dataIndex: 'product_Price',
        align: 'center',
        className:"table_title"
        // className:"table_title myColumn",
        // width:100
    }
];
const product_nameData=[
    {
        key: '1',
        product_Name: '客官的茶',
        product_Price: '优惠顾客折扣￥999.00',
        // activity_Num: '￥380.00',
        // price_Sale: "优惠顾客折扣:￥90.00"
    },
    {
        key: '2',
        product_Name: '桂花酒酿',
        product_Price: '优惠顾客折扣￥100.00',
        // activity_Num: '￥380.00',
        // price_Sale: "优惠顾客折扣:￥90.00"
    },
];


/*赠品表格数据*/
const  sendGiftColumn=[
    {
        title: '礼品名称',
        dataIndex: 'gift_Name',
        align: 'center',
        className:"table_title"
        // className:"table_title myColumn",
        // width:100
    },
    {
        title: '零售单价',
        dataIndex: 'gift_Price',
        align: 'center',
        className:"table_title"
        // className:"table_title myColumn",
        // width:100
    },
];

const sendGiftData=[
    {
        key: '1',
        gift_Name: '油纸伞',
        gift_Price: '￥100.00',
        // activity_Num: '￥380.00',
        // price_Sale: "优惠顾客折扣:￥90.00"
    },
    {
        key: '2',
        gift_Name: '满天星',
        gift_Price: '￥222.00',
        // activity_Num: '￥380.00',
        // price_Sale: "优惠顾客折扣:￥90.00"
    },
];


/*审批操作*/
const  approvalActionColumn=[
    {
        title: '序号',
        dataIndex: 'id',
        align: 'center',
        className:"table_title"
        // className:"table_title myColumn",
        // width:100
    },
    {
        title: '操作人姓名',
        dataIndex: 'action_name',
        align: 'center',
        className:"table_title"
        // className:"table_title myColumn",
        // width:100
    },
    {
        title: '操作时间',
        dataIndex: 'action_time',
        align: 'center',
        className:"table_title"
        // className:"table_title myColumn",
        // width:100
    },
    {
        title: '操作内容',
        dataIndex: 'action_content',
        align: 'center',
        className:"table_title"
        // className:"table_title myColumn",
        // width:100
    },
    {
        title: '备注说明',
        dataIndex: 'remark',
        align: 'center',
        className:"table_title"
        // className:"table_title myColumn",
        // width:100
    },
];

const approvalActionData=[
    {
        key: '1',
        id: '1',
        action_name: '小秋',
        action_time:"2017-12-12 12:12:12",
        action_content:"申请发货产品",
        remark:""
    },
    {
        key: '2',
        id: '2',
        action_name: '小苏',
        action_time:"2017-12-12 12:12:12",
        action_content:"申请通过",
        remark:""
    },
]

// const [form] = Form.useForm();
class Approval_action extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedRowKeys: [],
            myKey:"",
            sheng:"",
            shi:"",
            qu:""

        };
        // this.username=React.createRef();
    }
    /*单选框的函数*/
    selectRow = (record) => {
        const selectedRowKeys = [...this.state.selectedRowKeys];
        if (selectedRowKeys.indexOf(record.key) >= 0) {
            selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
        } else {
            selectedRowKeys.push(record.key);
        }
        this.setState({ selectedRowKeys });
    }

    onSelectedRowKeysChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
    }



    /*myreset=()=>{
        // this.username.current.value="";
        console.log(this.username.current.value);
    }*/
    /*onChange = ({ target: { value } }) => {
        console.log(value)
        console.log(this.state.value);
        this.setState({ value });
    };*/

    /*Input输入框的改变*/
    /*inputChange1=(e)=>{
        console.log(e.target.value);
        let a=e.target.value
        // console.log(a);
        this.setState({
            myKey:a
        },()=>console.log(this.state.myKey))
        // console.log(this.state.myKey)

    }*/

    /*resetNum=()=>{
        console.log(this.state.myKey);
        /!*this.setState({
            myKey:""
        })*!/
    }*/
    /*获取子组件传过来的省*/
    getProvice=(value)=>{
        console.log(value);
        this.setState({
            sheng:value.mysheng,
            shi:value.myshi,
            qu:value.myqu
        })
    }
    /*获取子组件传过来的市*/
    getShi=(value)=>{
        console.log(value);
        this.setState({
            shi:value
        })
    }
    /*获取子组件传过来的区*/
    getQu=(value)=>{
        console.log(value);
        this.setState({
            qu:value
        })
    }

    /*获取省市区的值*/
    myQuyu=()=>{
        /*console.log(this.state.sheng);
        console.log(this.state.shi);
        console.log(this.state.qu);*/
        let sheng=document.getElementsByClassName("myprovince")[0].value;
        let shi=document.getElementsByClassName("mycity")[0].value;
        let qu=document.getElementsByClassName("mycounty")[0].value;
        console.log(sheng);
        console.log(shi);
        console.log(qu);
    }

    render() {
        // const [form] = Form.useForm();
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectedRowKeysChange,
        };
        const demo=()=>{

        }
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 4, span: 16 },
        };
        const onFinish = values => {
            console.log(values)
            console.log('Success:', values);

        };
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className="myAPPro">

                {/*<label >用户名:</label>
                <Input placeholder="Basic usage"  onChange={this.inputChange1} value={this.state.myKey}/>
                <Button onClick={this.resetNum.bind(this)}>重置</Button>*/}

                {/*<Mycity theCity={this.getProvice.bind(this)} >

                </Mycity>
                <Button onClick={this.myQuyu.bind(this)}>获取省市区</Button>*/}

                <h2>创建人信息</h2>
                <hr/>
                {/*创建人信息*/}
                <div>
                    <Descriptions>
                        <Descriptions.Item label="用户名" className="myBold">张三</Descriptions.Item>
                        <Descriptions.Item label="手机号码">13810002000</Descriptions.Item>
                        <Descriptions.Item label="所属部门">英雄联盟LPL</Descriptions.Item>
                    </Descriptions>
                </div>

                <h2>活动基本信息</h2>
                <hr/>
                <div>
                    <Descriptions>
                        <Descriptions.Item label="活动类型">满减促销</Descriptions.Item>
                        <Descriptions.Item label="活动编号">13810002000</Descriptions.Item>
                        <Descriptions.Item label="活动名称">买满10000元,减1000元</Descriptions.Item>
                        <Descriptions.Item label="开始时间" className="mySta1">2019-09-09 09:09:10</Descriptions.Item>
                        <Descriptions.Item label="结束时间" className="mySta2">2019-09-09 10:09:10</Descriptions.Item>
                        <Descriptions.Item label="开始限制" className="mySta3">允许使用优惠券,允许重复参与</Descriptions.Item>
                        <Descriptions.Item label="价格类型" className="mySta4">优惠顾客折扣(P3)</Descriptions.Item>
                        <Descriptions.Item label="活动说明" span={2} className="mySta5">买满10000元,减1000元,允许代购,允许使用优惠券</Descriptions.Item>
                    </Descriptions>
                </div>

                <h2>活动参加产品</h2>
                <hr/>
                <h3>部分产品</h3>

                <div className="quanxuan">
                    <span className="myQuan">全选</span>
                    <span className="myChoo">选择</span>
                    <h2>已选产品列表</h2>
                    {/*<form action="/chooseProduct.do" method="get">
                        <label >产品编号:</label>
                        <input type="text"/>
                        <label >产品名称:</label>
                        <input type="text"/>
                        <Button type="primary">搜索</Button>
                    </form>*/}


                    <Table
                        className="mytab1"
                        pagination={{showQuickJumper: true,showSizeChanger:true,hideOnSinglePage:false}}
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={data}
                        onRow={(record) => ({
                            onClick: () => {
                                this.selectRow(record);
                            },
                        })}
                    />
                </div>

                <h2>活动促销方案</h2>
                <hr/>

                <div className="ac_approval">
                    <table className="activityPlan">
                        <tbody>
                            <tr className="myCengji">
                                <td>层级</td>
                                <td>优惠门槛</td>
                                <td>优惠方式</td>
                            </tr>

                            <tr>
                                <td rowSpan={2}>1</td>
                                <td>满1000元</td>
                                <td>0.8折,可购买以下产品</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <Table
                                        columns={product_nameColumn}
                                        dataSource={product_nameData}
                                        bordered
                                        border="1px solid black"
                                        pagination={false}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>2</td>
                                <td>满4000元</td>
                                <td>免费赠送</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <Button type="primary">赠品</Button>
                                    <Button >券</Button>
                                    <Table
                                        className="myQuanZ"
                                        columns={sendGiftColumn}
                                        dataSource={sendGiftData}
                                        bordered
                                        border="1px solid black"
                                        pagination={false}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>活动目标用户</h2>
                <hr/>

                <div className="myRu">
                    <p>指定用户规则</p>
                    {/*<form>
                        <fieldset>
                            <legend>条件描述</legend>

                            <table className="theRule">
                                <tbody>
                                <tr>
                                    <td>用户信息</td>
                                    <td>客官的茶</td>
                                    <td>注册时间</td>
                                    <td>2017-01-03至2017-03-20</td>
                                    <td>用户积分</td>
                                    <td>100-200</td>
                                    <td>价格等级</td>
                                    <td>星级顾客</td>
                                </tr>
                                <tr>
                                    <td>订单信息</td>
                                    <td>好嗨哟</td>
                                    <td>时间范围</td>
                                    <td>2017-01-03至2017-03-20</td>
                                    <td>购买产品范围</td>
                                    <td>产品1</td>
                                    <td>产品数量</td>
                                    <td>100</td>
                                </tr>
                                </tbody>

                            </table>
                        </fieldset>
                    </form>*/}
                </div>


                <h2>审批操作</h2>
                <hr/>
                <div className="myShenpi">
                    <Table
                        columns={approvalActionColumn}
                        dataSource={approvalActionData}
                        bordered
                        border="1px solid black"
                        pagination={false}
                    />

                    {/*<form action="" method="post" >
                        <div className="approAc">
                            <label >审批操作:</label>
                            <select name="" >
                                <option value="1">审批通过</option>
                                <option value="2">审批不通过</option>
                            </select>
                        </div>

                        <br/>
                        <div className="myRemark1">
                            <label >备注说明:</label>
                            <textarea name="" id="" cols="60" rows="6"></textarea>
                        </div>

                        <br/>
                        <Button type="primary">审批确认</Button>
                        <Button type="primary">返回列表</Button>
                    </form>*/}
                </div>
            </div>
        )
    }
}

export default Approval_action