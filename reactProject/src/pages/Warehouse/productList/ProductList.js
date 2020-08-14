import React, {Component} from 'react'
import {Button, Checkbox, Input, Select, Typography,Table,DatePicker} from "antd";
import {inject,observer} from 'mobx-react';
const { Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;
const columns = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '产品编号',
        dataIndex: 'productNumber',
        key: 'productCode',
    },
    {
        title: '产品名称（中文和英文）',
        dataIndex: 'productName',
        key: 'productName',
    },
    {
        title: '所属仓库',
        dataIndex: 'wareHouse',
        key: 'wareHouse',
    },
    {
        title: '拆包线',
        dataIndex: 'unpackingLine',
        key: 'unpackingLine',
    },
    {
        title: '实体仓位',
        dataIndex: 'physicalPosition',
        key: 'physicalPosition',
    },
    {
        title: '网络仓位',
        dataIndex: 'networkPosition',
        key: 'networkPosition',
    },

];
const fixedColumns = [
    {
        title: 'Name',
        dataIndex: 'name',
        fixed: true,
        width: 100,
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
];
@inject('service')
@observer
class productList extends Component {
    constructor() {
        super();
        this.state={
            productList:[],
            code:'',
            name:'',
            unpackingLine:'',
            wareStore:'',
            startTime:'',
            endTime:''
        }
    }
    UNSAFE_componentWillMount() {
        this.props.service.productData()
            .then(data=>{
                console.log(data);
                this.setState({
                    productList:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
//==================input框值===============
    changeAll=(e,thekey)=>{
        console.log(e.target.value);
        this.setState({
            [thekey]:e.target.value
        })
    }
//==================下拉框值=================
    changeSelect=(e,thekey)=>{
        console.log(e);
        this.setState({
            [thekey]:e
        })

    }
//============获取时间================
    getTime=(data)=>{
        console.log(data[0]._d.toLocaleString())
        console.log(data[1]._d.toLocaleString())
        this.setState({
            startTime:data[0]._d.toLocaleString(),
            endTime:data[1]._d.toLocaleString()
        })
    }
//==============搜索====================
mySearch=()=>{
   let arr=[
       {code:this.state.code,
        name:this.state.name,
        unpackingLine:this.state.unpackingLine,
        wareStore:this.state.wareStore,
        startTime:this.state.startTime,
        endTime:this.state.endTime}
   ]
    console.log(arr[0])
    this.props.service.searchProduct(arr[0])
        .then(data=>{
            console.log(data);
            this.setState({
                productList:data
            })
        })
        .catch(err=>{
            console.log(err)
        })
}
//===================重置======================
    myReset=()=>{
        this.setState({
            code:'',
            name:'',
            unpackingLine:'',
            wareStore:'',
            startTime:'',
            endTime:''
        })
        this.props.service.productData()
            .then(data=>{
                console.log(data);
                this.setState({
                    productList:data
                })
            })
    }
    render() {
        const fixedData = [];
        for (let i = 0; i < 6; i += 1) {
            fixedData.push({
                key: i,
                name: i % 2 ? 'Light' : 'Bamboo',
                description: 'Everything that has a beginning, has an end.',
            });
        }
        return (
            <div style={{textAlign:"left",padding: "30px 0 0 30px"}}>
                <div style={{borderBottom:"1px solid",width:"100%"}}>
                    <h2 style={{fontWeight:"bolder"}}>产品列表</h2>
                </div>
                <div style={{display:"flex",margin:"30px 0 30px 0"}}>
                    <div style={{textAlign:"right",width:"110px"}}>
                        <p style={{lineHeight:"32px"}}>产品编号：</p>
                        <p style={{lineHeight:"32px"}}>仓库门店：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"code")} value={this.state.code} placeholder="产品编号" className="search" style={{height:"32px"}}/>
                        </p>
                        <div>
                            <Select onChange={(e)=>this.changeSelect(e,"wareStore")} value={this.state.wareStore} defaultValue="所有仓库和门店" style={{ width: 200,height:"32px"}}>
                                <Option value="所有仓库和门店">所有仓库和门店</Option>
                                <Option value="华东仓库">华东仓库</Option>
                                <Option value="华西仓库">华西仓库</Option>
                                <Option value="虚拟仓库">虚拟仓库</Option>
                                <Option value="广州门店">广州门店</Option>
                                <Option value="上海门店">上海门店</Option>
                            </Select>
                        </div>
                    </div>
                    <div style={{textAlign:"right",margin:"0 0 0 50px",width:"110px"}}>
                        <p style={{lineHeight:"32px"}}>产品名称：</p>
                        <p style={{lineHeight:"32px"}}>拆包线：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"name")} value={this.state.name} placeholder="产品名称" className="search" style={{height:"32px"}}/>
                        </p>
                        <div>
                            <Select onChange={(e)=>this.changeSelect(e,"unpackingLine")} value={this.state.unpackingLine} defaultValue="请选择拆包线" style={{ width: 200,height:"32px"}}>
                                <Option value="请选择拆包线">请选择拆包线</Option>
                                <Option value="NU SKIN">NU SKIN</Option>
                            </Select>
                        </div>
                    </div>
                    <div style={{margin:"0 0 0 50px"}}>
                        <span style={{lineHeight:"32px",textAlign:"right",width:"110px"}}>发布时间：</span>
                        <RangePicker onChange={this.getTime} />
                        <Button onClick={this.mySearch.bind(this)} type="primary" style={{width:"80px",margin:"13px 0 0 80px"}}>搜索</Button>
                        <Button type="primary" onClick={this.myReset.bind(this)} style={{width:"80px",backgroundColor:"darkgrey",border:"none",marginLeft:"30px"}}>重置</Button>
                    </div>
                </div>
{/*===================表格========================*/}
                <div>
                    <Table
                        columns={columns}
                        dataSource={this.state.productList}
                        pagination={false}
                        bordered
                        summary={pageData => {
                            let totalBorrow = 0;
                            let totalRepayment = 0;
//=============================统计==================================================
                            pageData.forEach(({ physicalPosition, networkPosition }) => {
                                totalBorrow += physicalPosition;
                                totalRepayment += networkPosition;
                            });
                            return (
                                <>
                                    <Table.Summary.Row>
                                        <Table.Summary.Cell>统计</Table.Summary.Cell>
                                        <Table.Summary.Cell></Table.Summary.Cell>
                                        <Table.Summary.Cell></Table.Summary.Cell>
                                        <Table.Summary.Cell></Table.Summary.Cell>
                                        <Table.Summary.Cell></Table.Summary.Cell>
                                        <Table.Summary.Cell>
                                            <Text>{totalBorrow}</Text>
                                        </Table.Summary.Cell>
                                        <Table.Summary.Cell>
                                            <Text>{totalRepayment}</Text>
                                        </Table.Summary.Cell>
                                    </Table.Summary.Row>
                                    {/*<Table.Summary.Row>*/}
                                    {/*    <Table.Summary.Cell>Balance</Table.Summary.Cell>*/}
                                    {/*    <Table.Summary.Cell colSpan={2}>*/}
                                    {/*        <Text type="danger">{totalBorrow - totalRepayment}</Text>*/}
                                    {/*    </Table.Summary.Cell>*/}
                                    {/*</Table.Summary.Row>*/}
                                </>
                            );
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default productList