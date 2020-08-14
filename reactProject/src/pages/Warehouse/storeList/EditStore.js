import React, {Component} from 'react'
import {Button, Checkbox, Input, Select, Space, Table} from "antd";
import {Link} from "react-router-dom";
import {inject, observer} from "mobx-react";
const { Search } = Input;
const { Option } = Select;
@inject('service')
@observer
class editStore extends Component {
    constructor() {
        super();
        this.state={
            storeList:{},
            storeUrl:[],
            storeServe:[],
            myKey:'',
            storeCode:'',
            storeChinese:'',
            storeNumber:'',
            directCheck:false,
            storeEnglish:'',
            storeFax:'',
            postcode:'',
            directCompany:'',
            storeType:"全部",
            ownCompany:"上海分公司",
            mycolumns : [
                {
                    title: '序号',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '省/州',
                    dataIndex: 'seng',
                    key: 'province',
                },
                {
                    title: '市',
                    dataIndex: 'shi',
                    key: 'city',
                },
                {
                    title: '县/区',
                    dataIndex: 'qu',
                    key: 'county',
                },
                {
                    title: '操作',
                    key: 'action',
                    render: (text, record) => (
                        <Space size="middle">
                            <span onClick={()=>this.DelArea(record)} style={{ cursor:"pointer",color:"#1890FF"}}>删除</span>
                        </Space>
                    ),
                },
            ]
        }
    }
    UNSAFE_componentWillMount() {
        console.log(this.props.location.query.record);
        this.setState({
            storeList:this.props.location.query.record,
            myKey:this.props.location.query.record.key
        })
        console.log(this.state.storeList)
//门店地址列表
        this.props.service.storeUrl()
            .then(data=>{
                console.log(data);
                this.setState({
                    storeUrl:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
//门店服务区域
        this.props.service.storeServe()
            .then(data=>{
                //    成功拿到数据
                console.log(data);
                this.setState({
                    storeServe:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }


//=====================删除门店地址=============
    myDel=(obj)=>{
        this.props.service.delStoreUrl(obj)
            .then(data=>{
                console.log(data);
                this.setState({
                    storeUrl:data
                })
            })
    }
    //===============删除服务区域==============
    DelArea=(obj)=>{
        this.props.service.delStoreArea({
            serId:obj.serId
        })
            .then(data=>{
               this.props.service.searchStore({
                   snumber:this.state.storeList.snumber,
                   schinaname:'',
                   sengname:'',
                   stype:'',
                   scompany:'',
                   swisdirect:'',
                   sisstop:'',
                   screationtime:'',
                   sfounder:''
               })
                   .then(data=>{
                       this.setState({
                           storeList:data
                       })
                   })
            })
    }
//=============获取各input框的值===============
    changeAll=(e,thekey)=>{
        console.log(e.target.value);
        this.setState({
            [thekey]:e.target.value
        })
    }
//==============获取复选框的值===================
    checkedAll=(e,thekey)=> {
        console.log(e.target.checked);
        this.setState({
            [thekey]:e.target.checked
        })
    }
//==============获取下拉框的值=======================
    changeSelect=(e,thekey)=> {
        console.log(e);
        this.setState({
            [thekey]:e
        })
    }
//===============确认提交==========================
    myConfirm=()=>{
        let str=''
        if (this.state.directCheck){
            str='是'
        }else {
            str='否'
        }
        let arr=
            {
                sid:this.state.storeList.sid,
                snumber:this.state.storeCode,
                schinName:this.state.storeChinese,
                sphoneNumber:this.state.storeNumber,
                swisdirect:str,
                sengName:this.state.storeEnglish,
                sfax:this.state.storeFax,
                spostcode:this.state.postcode,
                sdirectName:this.state.directCompany,
                stype:this.state.storeType,
                scompany:this.state.ownCompany,
                storeUrl:this.state.storeUrl,
                storeServe:this.state.storeServe
            }
        this.props.service.editStore(arr)
            .then(data=>{
                console.log(data);
                this.props.history.push("/home/Warehouse/storeList/StoreList")
            })
            .catch(err=>{
                console.log(err)
            })

    }
//===============取消============================
    myCancel=()=>{
        this.props.history.push("/home/Warehouse/storeList/StoreList")
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
                title: '具体地址',
                dataIndex: 'specificAddress',
                key: 'specificAddress',
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
        // const mycolumns = [
        //     {
        //         title: '序号',
        //         dataIndex: 'id',
        //         key: 'id',
        //     },
        //     {
        //         title: '省/州',
        //         dataIndex: 'province',
        //         key: 'province',
        //     },
        //     {
        //         title: '市',
        //         dataIndex: 'city',
        //         key: 'city',
        //     },
        //     {
        //         title: '县/区',
        //         dataIndex: 'county',
        //         key: 'county',
        //     },
        //     {
        //         title: '操作',
        //         key: 'action',
        //         render: (text, record) => (
        //             <Space size="middle">
        //                 <span onClick={()=>this.DelArea(record)} style={{ cursor:"pointer",color:"#1890FF"}}>删除</span>
        //             </Space>
        //         ),
        //     },
        // ];
        return (
            <div style={{textAlign:"left",padding: "30px 0 0 30px"}}>
                <div style={{display:"flex"}}>
                    <div style={{textAlign:"right"}}>
                        <p style={{height:"32px"}}>
                            <span style={{color:"red"}}>*</span>
                            <span>门店编号：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>*</span>
                            <span>中文名称：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>联系电话：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>是否直销门店：</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <Input defaultValue={this.state.storeList.snumber} onChange={(e)=>this.changeAll(e,"storeCode")} placeholder="门店编号" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                    </p>
                        <p>
                            <Input defaultValue={this.state.storeList.schinaname} onChange={(e)=>this.changeAll(e,"storeChinese")}  placeholder="中文名称" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input defaultValue={this.state.storeList.sphoneNumber} onChange={(e)=>this.changeAll(e,"storeNumber")}  placeholder="联系电话" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                        <p style={{textAlign:"left"}}>
                            {/*<Checkbox onChange={(e)=>this.changeAll(e,"storeDerect")} checked={this.state.storeDerect} >是</Checkbox>*/}
                            <Checkbox onChange={(e)=>this.checkedAll(e,"directCheck")} checked={this.state.directCheck}>是</Checkbox>
                        </p>
                    </div>
                    <div style={{textAlign:"right"}}>
                        <p style={{height:"32px"}}>
                            <span>*</span>
                            <span>门店类型：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>*</span>
                            <span>英文名称：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>传真：</span>
                        </p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <div style={{height:"32px",marginBottom:"15px"}}>
                            <Select defaultValue={this.state.storeList.stype} style={{width:"200px"}} onChange={e=>this.changeSelect(e,"storeType")} >
                                <Option value="">全部</Option>
                                <Option value="形象店">形象店</Option>
                                <Option value="时尚店">时尚店</Option>
                            </Select>
                        </div>
                        <p>
                            <Input defaultValue={this.state.storeList.sengname} onChange={(e)=>this.changeAll(e,"storeEnglish")}  placeholder="英文名称" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input defaultValue={this.state.storeList.sfax} onChange={(e)=>this.changeAll(e,"storeFax")}  placeholder="传真" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>

                    </div>
                    <div style={{textAlign:"right"}}>
                        <p style={{height:"32px"}}>
                            <span style={{color:"red"}}>*</span>
                            <span>所属公司：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>*</span>
                            <span>邮编：</span>
                        </p>
                        <p style={{height:"32px"}}>
                            <span>直销公司名称：</span>
                        </p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <div  style={{height:"32px",marginBottom:"15px"}}>
                            <Select defaultValue={this.state.storeList.scompany} onChange={e=>this.changeSelect(e,"ownCompany")}  style={{ width: 200}} >
                                <Option value="上海分公司">上海分公司</Option>
                                <Option value={this.state.storeList.scompany}>{this.state.storeList.scompany}</Option>
                                <Option value="广东分公司">广东分公司</Option>
                            </Select>
                        </div>
                        <p>
                            <Input defaultValue={this.state.storeList.spostCode} onChange={(e)=>this.changeAll(e,"postcode")}  placeholder="邮编" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input defaultValue={this.state.storeList.sdirectName} onChange={(e)=>this.changeAll(e,"directCompany")}  placeholder="直销公司名称" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                    </div>
                </div>
{/*===============数据仅展示区=================*/}
                <div style={{display:"flex"}}>
                    <div style={{textAlign:"right"}}>
                        <p>实体仓编号：</p>
                        <p>是否终止门店：</p>
                        <p>创建时间：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p>{this.state.storeList.sentityId}</p>
                        <p style={{height:"22px"}}>{this.state.storeList.sisstop}</p>
                        <p>{this.state.storeList.sCreationtime}</p>
                    </div>
                    <div style={{textAlign:"right",margin:"0 0 0 200px"}}>
                        <p>网络仓编号：</p>
                        <p>终止时间：</p>
                        <p>修改人：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p>{this.state.storeList.snetworkId}</p>
                        <p style={{height:"22px"}}>{this.state.storeList.sCreationtime}</p>
                        <p>{this.state.storeList.sysName}</p>
                    </div>
                    <div style={{textAlign:"right",margin:"0 0 0 200px"}}>
                        <p style={{height:"22px"}}></p>
                        <p>创建人：</p>
                        <p>修改时间：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p style={{height:"22px"}}></p>
                        <p>{this.state.storeList.sfounder}</p>
                        <p>{this.state.storeList.wReviserTime}</p>
                    </div>
                </div>
                <div>
                    <h2 style={{fontWeight:"bolder"}}>门店官方地址</h2>
                    <p>上海市浦东区XXXXXX大厦88号</p>
                </div>
                <div>
                    <h2 style={{fontWeight:"bolder"}}>设置门店地址</h2>
                    <Table dataSource={this.state.storeUrl} bordered columns={columns}  style={{border:"3px solid #E7E7E7",width:"700px"}}/>;
                </div>
                <div>
                    <h2 style={{fontWeight:"bolder"}}>设置门店服务区域</h2>
                    <Table dataSource={[this.state.storeList]} bordered columns={this.state.mycolumns}  style={{border:"3px solid #E7E7E7",width:"700px"}}/>;
                </div>
                <div style={{margin:"30px 0 50px 200px",textAlign:"left"}}>
                    <Button onClick={this.myConfirm.bind(this)} type="primary" style={{width:"120px"}}>确认</Button>
                    <Button onClick={this.myCancel.bind(this)} type="primary" style={{margin:"0 0 0 30px",backgroundColor:"darkgrey",border:"none",width:"120px"}}>取消</Button>
                </div>
            </div>
        )
    }
}

export default editStore