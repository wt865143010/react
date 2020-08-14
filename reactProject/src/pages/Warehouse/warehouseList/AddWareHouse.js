import React, {Component} from 'react'
import {Button, Checkbox, Input, Pagination, Space, Table} from "antd";
import {Link} from "react-router-dom";
import {inject,observer} from 'mobx-react'
import City from "../City";
@inject('service')
@observer
class addWareHouse extends Component {
    constructor() {
        super();
        this.state={
            storeList:[],
            wareCode:'',
            chinese:'',
            fax:'',
            physicalWarehouse:'',
            english:'',
            number:'',
            network:'',
            allWare:false,
            address:''

        }
    }
    UNSAFE_componentWillMount() {
//===============获取门店============
        this.props.service.wareStoreList()
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
    //============input框的值=================
    changeAll=(e,thekey)=>{
        console.log(e.target.value)
        this.setState({
            [thekey]:e.target.value
        })
    }
    //==========复选框的值=======================
    changeCheck=(e)=> {
        console.log(e.target.checked);
        this.setState({
            allWare:e.target.checked
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
    //========================确认提交==================
    myConfirm=()=>{
        let arr=[
            {
                wareCode:this.state.wareCode,
                chinese:this.state.chinese,
                fax:this.state.fax,
                physicalWarehouse:this.state.physicalWarehouse,
                english:this.state.english,
                number:this.state.number,
                network:this.state.network,
                allWare:this.state.allWare,
                province:document.getElementsByClassName("myprovince")[0].value,
                city:document.getElementsByClassName("mycity")[0].value,
                county:document.getElementsByClassName("mycounty")[0].value,
                address:this.state.address,
                storeList:this.state.storeList
            }
        ]
        console.log(arr[0])
        this.props.service.addWare(arr[0])
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log(err)
            })
        this.props.history.push("/home/Warehouse/warehouseList/WarehouseList")
    }
    //=======================取消===========================
    myCancel=()=>{
        this.props.history.push("/home/Warehouse/warehouseList/WarehouseList")
    }
    //========================分页===========================
    changePage=(page,pageSize)=>{
        console.log("页码："+page +","+"每页条数："+pageSize)
    }

    render() {
//=============表头数据=============
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
                title: '门店名称',
                dataIndex: 'storeName',
                key: 'storeName',
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
                <div style={{display:"flex"}}>
                    <div style={{textAlign:"right"}}>
                        <p style={{lineHeight:"32px"}}>
                            <span style={{color:"red"}}>*</span>
                            <span>仓库编号：</span>
                        </p>
                        <p style={{lineHeight:"32px"}}>*中文名称：</p>
                        <p style={{lineHeight:"32px"}}>传真：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"wareCode")} value={this.state.wareCode} placeholder="仓库编号" className="search" style={{height:"32px"}}/>
                        </p>
                       <p>
                           <Input onChange={(e)=>this.changeAll(e,"chinese")} value={this.state.chinese} placeholder="中文名称" className="search" style={{height:"32px"}}/>
                       </p>
                       <p>
                           <Input onChange={(e)=>this.changeAll(e,"fax")} value={this.state.fax} placeholder="传真" className="search" style={{height:"32px"}}/>
                       </p>

                    </div>
                    <div style={{textAlign:"right",margin:"0 0 0 30px"}}>
                        <p style={{lineHeight:"32px"}}>
                            <span style={{color:"red"}}>*</span>
                            <span>所属公司：</span>
                        </p>
                        <p style={{lineHeight:"32px"}}>*是否同时为总仓：</p>
                        <p style={{lineHeight:"32px"}}>*实体仓编号：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p style={{lineHeight:"32px"}}>如新中国</p>
                        <p>
                            <Checkbox onChange={this.changeCheck} style={{lineHeight:"32px"}}>是</Checkbox>
                        </p>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"physicalWarehouse")} value={this.state.physicalWarehouse} placeholder="实体仓编号" className="search" style={{height:"32px"}}/>
                        </p>
                    </div>
                    <div style={{textAlign:"right",margin:"0 0 0 50px"}}>
                        <p style={{lineHeight:"32px"}}>*英文名称：</p>
                        <p style={{lineHeight:"32px"}}>*联系电话：</p>
                        <p style={{lineHeight:"32px"}}>*网络仓编号：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"english")} value={this.state.english} placeholder="英文名称" className="search" style={{height:"32px"}}/>
                        </p>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"number")} value={this.state.number} placeholder="联系电话" className="search" style={{height:"32px"}}/>
                        </p>
                        <p>
                            <Input onChange={(e)=>this.changeAll(e,"network")} value={this.state.network} placeholder="网络仓编号" className="search" style={{height:"32px"}}/>
                        </p>
                    </div>
                </div>
                <div style={{height:"32px",display:"flex",marginTop:"10px"}}>
                    <p style={{lineHeight:"32px"}}>仓库地址：</p>
                    <City parent={this}></City>
                    <Input onChange={(e)=>this.changeAll(e,"address")} value={this.state.address} placeholder="具体地址" style={{width:"300px",margin:"0 0 0 10px",height:"32px"}}/>
                </div>
                <div style={{display:'flex',marginTop:'30px'}}>
                    <Link to="/home/addStore"><Button type="primary" className="button3" >新增门店</Button></Link>
                </div>
{/*==================表格===================*/}
                <div style={{margin:"30px 0 0 0"}}>
                    <Table dataSource={this.state.storeList} pagination bordered columns={columns}  style={{border:"3px solid #E7E7E7",width:"700px"}}/>
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

export default addWareHouse