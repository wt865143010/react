import React, {Component} from 'react'
import {Button, Checkbox, Input, Pagination, Select, Space, Table} from "antd";
import City from "../City";
import {inject, observer} from "mobx-react";

function handleChange(value) {
    console.log(`selected ${value}`);
}
const { Option } = Select;
@inject('service')
@observer
class addStore extends Component {
    constructor() {
        super();
        this.state={
            storeServe:[],
            directCheck:false,
            storeCode:'',
            storeChinese:'',
            postcode:'',
            storeEnglish:'',
            storeNumber:'',
            physicalWarehouse:'',
            storeFax:'',
            directName:'',
            networkWarehouse:'',
            address:'',
            ownCompany:'上海分公司',
            storeType:'形象店'
        }
    }
    UNSAFE_componentWillMount() {
        this.props.service.serveArea()
            .then(data=>{
                console.log(data);
                this.setState({
                    storeServe:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
    //===============复选框的值====================
    changeCheck=(e)=> {
        console.log(e.target.checked);
        this.setState({
            directCheck:e.target.checked
        })
    }
    //==============input框的值====================
    changeAll=(e,thekey)=>{
        console.log(e.target.value);
        this.setState({
                      [thekey]:e.target.value
                  })
    }
    //==============获取下拉框的值=======================
    changeSelect=(e,thekey)=> {
        console.log(e);
        this.setState({
            [thekey]:e
        })
    }
    //===================省市区下拉框===================
    getProvince(e){
        console.log(e)
    }
    getCity(e){
        console.log(e)
    }
    getCounty(e){
        console.log(e)
    }
//====================确认提交====================
    myConfirm=()=>{
        let arr=[{
            directCheck:this.state.directCheck,
            storeCode:this.state.storeCode,
            storeChinese:this.state.storeChinese,
            postcode:this.state.postcode,
            storeEnglish:this.state.storeEnglish,
            storeNumber:this.state.storeNumber,
            physicalWarehouse:this.state.physicalWarehouse,
            storeFax:this.state.storeFax,
            directName:this.state.directName,
            networkWarehouse:this.state.networkWarehouse,
            ownCompany:this.state.ownCompany,
            storeType:this.state.storeType,
            province:document.getElementsByClassName("myprovince")[0].value,
            city:document.getElementsByClassName("mycity")[0].value,
            county:document.getElementsByClassName("mycounty")[0].value,
            address:this.state.address,
            storeServe:this.state.storeServe
        }]
        console.log(arr[0])
        this.props.service.addStore(arr[0])
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log(err)
            })
        this.props.history.push("/home/Warehouse/storeList/StoreList")
    }
    //=====================删除服务区域=============
    myDel=(obj)=>{
        this.props.service.delServeArea(obj)
            .then(data=>{
                console.log(data);
                this.setState({
                    storeServe:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
    //=====================分页=====================
    changePage=(page, pageSize)=>{
        console.log("页码："+page +","+"每页条数："+pageSize)
    }
    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '省/州',
                dataIndex: 'province',
                key: 'province',
            },
            {
                title: '市',
                dataIndex: 'city',
                key: 'city',
            },
            {
                title: '县/区',
                dataIndex: 'county',
                key: 'county',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <span onClick={()=>this.myDel(record)} style={{ cursor:"pointer",color:"#1890FF"}}>删除</span>
                    </Space>
                ),
            },
        ];
        return (
            <div style={{padding:"30px 0 0 20px"}}>
                <div style={{display:"flex"}}>
                    <div style={{textAlign:"right",width:"110px"}}>
                        <p style={{height:"32px"}}>
                            <span style={{color:"red"}}>*</span>
                            <span>门店编号：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>*</span>
                            <span>中文名称：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>邮编：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>是否直销门店：</span>
                        </p>
                    </div>
                    <div style={{margin:"0 40px 0 0"}}>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"storeCode")} value={this.state.storeCode} placeholder="门店编号" style={{width:"200px",height:"32px"}} />
                        </p>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"storeChinese")} value={this.state.storeChinese} placeholder="中文名称" style={{width:"200px",height:"32px"}} />
                        </p>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"postcode")} value={this.state.postcode}  placeholder="邮编" style={{width:"200px",height:"32px"}} />
                        </p>
                        <p style={{textAlign:"left"}}>
                            <Checkbox onChange={this.changeCheck} style={{height:"32px"}}>是</Checkbox>
                        </p>
                    </div>
                    <div style={{textAlign:"right",width:"100px"}}>
                        <p style={{height:"32px"}}>
                            <span>*</span>
                            <span>门店类型：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>*</span>
                            <span>英文名称：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>联系电话：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>*实体仓编号：</span>
                        </p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <div style={{marginBottom:"15px"}}>
                            <Select onChange={e=>this.changeSelect(e,"storeType")} value={this.state.storeType} defaultValue="全部" style={{ width: 200}} >
                                <Option value="全部">全部</Option>
                                <Option value="形象店">形象店</Option>
                                <Option value="时尚店">时尚店</Option>
                            </Select>
                        </div>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"storeEnglish")} value={this.state.storeEnglish} placeholder="英文名称" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"storeNumber")} value={this.state.storeNumber} placeholder="联系电话" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"physicalWarehouse")} value={this.state.physicalWarehouse} placeholder="实体仓编号" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                    </div>
                    <div style={{textAlign:"right",width:"110px"}}>
                        <p style={{height:"32px"}}>
                            <span style={{color:"red"}}>*</span>
                            <span>所属公司：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>*</span>
                            <span>传真：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>直销公司名称：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>*网络仓编号：</span>
                        </p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <div style={{marginBottom:"15px"}}>
                            <Select onChange={e=>this.changeSelect(e,"ownCompany")} value={this.state.ownCompany} defaultValue="上海分公司" style={{ width: 200}} >
                                <Option value="上海分公司">上海分公司</Option>
                                <Option value="广东分公司">广东分公司</Option>
                            </Select>
                        </div>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"storeFax")} value={this.state.storeFax} placeholder="传真" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"directName")} value={this.state.directName} placeholder="直销公司名称" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"networkWarehouse")} value={this.state.networkWarehouse} placeholder="网络仓编号" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                    </div>
                </div>
                <div style={{textAlign:"left"}}>
                    <h2 style={{fontWeight:"bolder"}}>门店官方地址</h2>
                    <div style={{display:"flex"}}>
                        <City parent={this}></City>
                        <Input onChange={(e)=>this.changeAll(e,"address")} value={this.state.address} placeholder="详细地址" style={{width:"300px",borderRadius:"5px",marginLeft:"10px",height:"32px"}}/>
                    </div>

                </div>
                <div style={{textAlign:"left",margin:"30px 0 0 0"}}>
                    <h2 style={{fontWeight:"bolder"}}>设置门店服务区域</h2>
{/*=================表格============================*/}
                        <Table dataSource={this.state.storeServe} bordered columns={columns} pagination={false} style={{border:"3px solid #E7E7E7",width:"700px"}}/>
                        <Pagination onChange={this.changePage} defaultCurrent={6} total='' style={{margin:"30px 0 0 0"}}/>
                </div>
                <div style={{margin:"30px 0 50px 200px",textAlign:"left"}}>
                    <Button onClick={this.myConfirm.bind(this)} type="primary" style={{width:"120px"}}>确认</Button>
                    <Button type="primary" style={{margin:"0 0 0 30px",backgroundColor:"darkgrey",border:"none",width:"120px"}}>取消</Button>
                </div>
            </div>

        )
    }
}

export default addStore