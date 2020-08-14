import React, {Component} from 'react'
import {Button, Checkbox, Input, Pagination, Select, Space, Table} from "antd";
import {Link} from "react-router-dom";
import City from "../City";
import {inject, observer} from "mobx-react";
const { Option } = Select;
@inject('service')
@observer
class editWareHouse extends Component {
    constructor() {
        super();
        this.state={
            mykey:'',
            wareList:[],
            storeList:[],
            wearCode:'',
            chinese:'',
            english:'',
            number:'',
            fax:'',
            address:'',
            terminationCheck:false,
            allWareCheck:false,
            selectCompany:"上海分公司"
        }
    }
    UNSAFE_componentWillMount() {
        console.log(this.props.location.state.record)
        this.setState({
            wareList:this.props.location.state.record,
            mykey:this.props.location.state.record.key
        })
 //==========获取门店=========
        this.props.service.wareStoreList()
            .then(data=>{
                //    成功拿到数据
                console.log(data);
                this.setState({
                    storeList:data
                })
            })
            .catch(err=>{
                console.log(err)
            })

        if (this.props.location.state.record.termination=="终止"){
            this.setState({
                terminationCheck:true
            })
        }
    }
//========================input框的值===================
    changeAll=(e,thekey)=>{
        console.log(e.target.value)
        this.setState({
            [thekey]:e.target.value
        })
    }
 //======================复选框的值====================
    changeCheck(e,thekey) {
        console.log(e.target.checked);
        this.setState({
            [thekey]:e.target.checked
        })
    }
//======================下拉框的值====================
   changeSelect=(e,thekey)=>{
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
//========================确认提交=====================
 myConfirm=()=>{
     let arr=[
         {
             mykey: this.state.mykey,
             wearCode:this.state.wearCode,
             chinese:this.state.chinese,
             english:this.state.english,
             number:this.state.number,
             fax:this.state.fax,
             allWareCheck:this.state.allWareCheck,
             selectCompany:this.state.selectCompany,
             province:document.getElementsByClassName("myprovince")[0].value,
             city:document.getElementsByClassName("mycity")[0].value,
             county:document.getElementsByClassName("mycounty")[0].value,
             address:this.state.address,
             storeList:this.state.storeList
         }
     ]
     console.log(arr[0])
     this.props.service.editWare(arr[0])
         .then(data=>{
             console.log(data);
         })
         .catch(err=>{
             console.log(err)
         })
     this.props.history.push("/home/Warehouse/warehouseList/WarehouseList")
}
//=======================取消=========================
    myCancel=()=>{
        this.props.history.push("/home/Warehouse/warehouseList/WarehouseList")
    }
//========================分页===========================
    changePage=(page,pageSize)=>{
        console.log("页码："+page +","+"每页条数："+pageSize)
    }

//================删除门店========================
    myDelete=(obj)=>{
        console.log(obj);
        this.props.service.deleteWareStore(obj)
            .then(data=>{
                console.log(data);
                this.setState({
                    storeList:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '门店编号',
                dataIndex: 'storeCode',
                key: 'storeCode',
            },
            {
                title: '门店类型',
                dataIndex: 'storeType',
                key: 'storeType',
            },
            {
                title: '门店中文名称',
                dataIndex: 'chineseName',
                key: 'chineseName',
            },
            {
                title: '门店地址',
                dataIndex: 'storeUrl',
                key: 'storeUrl',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <span onClick={()=>this.myDelete(record)} style={{cursor:"pointer",color:"#1890FF"}}>移除</span>
                    </Space>
                ),
            },
        ];
        return (
            <div style={{textAlign:"left",padding: "30px 0 0 30px"}}>
{/*数据编辑区*/}
                <div style={{display:"flex"}}>
                    <div style={{textAlign:"right"}}>
                        <p style={{lineHeight:"32px"}}>
                            <span style={{color:"red"}}>*</span>
                            <span>仓库编号：</span>
                        </p>
                        <p style={{lineHeight:"32px"}}>*中文名称：</p>
                        <p style={{lineHeight:"32px"}}>*是否同时为总仓：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"wearCode")} value={this.state.wearCode} placeholder="仓库编号" className="search" style={{height:"32px"}}/>
                        </p>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"chinese")} value={this.state.chinese} placeholder="中文名称" className="search" style={{height:"32px"}}/>
                        </p>
                        <p>
                            <Checkbox onChange={(e)=>this.changeCheck(e,"allWareCheck")} checked={this.state.allWareCheck} style={{lineHeight:"32px"}}>是</Checkbox>
                        </p>
                    </div>
                    <div style={{textAlign:"right",margin:"0 0 0 50px"}}>
                        <p style={{lineHeight:"32px"}}>
                            <span style={{color:"red"}}>*</span>
                            <span>所属公司：</span>
                        </p>
                        <p style={{lineHeight:"32px"}}>*英文名称：</p>
                        <p style={{lineHeight:"32px"}}></p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <div>
                            <Select onChange={(e)=>this.changeSelect(e,"selectCompany")} value={this.state.selectCompany} defaultValue="上海分公司" style={{ width: 200,marginBottom:"15px"}} >
                                <Option value="上海分公司">上海分公司</Option>
                                <Option value="广东分公司">广东分公司</Option>
                            </Select>
                        </div>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"english")} value={this.state.english} placeholder="英文名称" className="search" style={{height:"32px"}}/>
                        </p>
                        <p></p>
                    </div>
                    <div style={{textAlign:"right",margin:"0 0 0 50px"}}>
                        <p style={{lineHeight:"32px"}}>联系电话：</p>
                        <p style={{lineHeight:"32px"}}>传真：</p>
                        <p style={{lineHeight:"32px"}}></p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"number")} value={this.state.number} placeholder="联系电话" className="search" style={{height:"32px"}}/>
                        </p>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"fax")} value={this.state.fax} placeholder="传真" className="search" style={{height:"32px"}}/>
                        </p>
                        <p></p>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                        <p style={{lineHeight:"32px",width:"118px",textAlign:"right"}}>仓库地址：</p>
                    <div style={{display:"flex"}}>
                        <City parent={this}></City>
                        <Input onChange={(e)=>this.changeAll(e,"address")} value={this.state.address} placeholder="具体地址" style={{width:"300px",margin:"0 0 0 10px",height:"32px"}}/>
                    </div>
                </div>
{/* 数据仅展示区*/}
                <div style={{display:"flex",margin:"30px 0 0 0"}}>
                    <div style={{textAlign:"right"}}>
                        <p style={{height:"32px"}}>*实体仓编号：</p>
                        <p style={{height:"32px"}}>是否终止门店：</p>
                        <p style={{height:"32px"}}>创建时间：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p style={{height:"32px"}}>{this.state.wareList.warehouseId}</p>
                        <p style={{height:"32px"}}>
                            <Checkbox checked={this.state.terminationCheck}>是</Checkbox>
                        </p>
                        <p style={{height:"32px"}}>7777</p>
                    </div>
                    <div style={{textAlign:"right",margin:"0 0 0 200px"}}>
                        <p style={{height:"32px"}}>*网络仓编号：</p>
                        <p style={{height:"32px"}}>终止时间：</p>
                        <p style={{height:"32px"}}>修改人：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p style={{height:"32px"}}>6666</p>
                        <p style={{height:"32px"}}>{this.state.wareList.terminationTime}</p>
                        <p style={{height:"32px"}}>9999</p>
                    </div>
                    <div style={{textAlign:"right",margin:"0 0 0 200px"}}>
                        <p style={{height:"32px"}}></p>
                        <p style={{height:"32px"}}>创建人：</p>
                        <p style={{height:"32px"}}>修改时间：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p style={{height:"32px"}}></p>
                        <p style={{height:"32px"}}>0000</p>
                        <p style={{height:"32px"}}>1111</p>
                    </div>
                </div>
                <div style={{display:'flex',marginTop:'30px'}}>
                    <Link to="/home/addStore"><Button type="primary" className="button3" >新增门店</Button></Link>
                </div>
{/*=========================表格======================================*/}
                <div style={{margin:"30px 0 0 0"}}>
                    <Table dataSource={this.state.storeList} pagination={false} bordered columns={columns}  style={{border:"3px solid #E7E7E7",width:"1000px"}}/>
                    <Pagination onChange={this.changePage} defaultCurrent={6} total='' style={{margin:"30px 0 0 0"}}/>
                </div>
                <div style={{margin:"30px 0 50px 200px",textAlign:"left"}}>
                    <Button onClick={this.myConfirm.bind(this)} type="primary" style={{width:"120px"}}>确认</Button>
                    <Button onClick={this.myCancel.bind(this)} type="primary" style={{margin:"0 0 0 30px",backgroundColor:"darkgrey",border:"none",width:"120px"}}>取消</Button>
                </div>
            </div>
        )
    }
}

export default editWareHouse