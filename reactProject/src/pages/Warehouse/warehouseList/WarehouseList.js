import React, {Component} from 'react'
import {Input, Select, Table, Button, Checkbox, Space, Pagination} from 'antd';
import {Link} from "react-router-dom";
import {toJS} from "mobx";
import {inject, observer} from "mobx-react";

@inject('service')
@observer
class warehouseList extends Component {
    constructor() {
        super();
        this.state={
            wareHouseList:[],
            wareHouseCode:'',
            wareHouseChinese:'',
            wareHouseEnglish:'',
            founder:'',
            founderTime:'',
            allWare:false,
            termination:false
        }
    }
    UNSAFE_componentWillMount() {
        this.props.service.wareList()
            .then(data=>{
                console.log(data);
                this.setState({
                    wareHouseList:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
 //========================分页===========================
    changePage=(page,pageSize)=>{
        console.log("页码："+page +","+"每页条数："+pageSize)
    }
 //==============input框的值====================
    changeAll=(e,thekey)=>{
        console.log(e.target.value);
        this.setState({
            [thekey]:e.target.value
        })
    }
//=================复选框的值================
    changeCheck=(e,thekey)=>{
        console.log(e.target.checked);
        this.setState({
            [thekey]:e.target.checked
        })
    }
//================搜索======================
    mySearch=()=>{
        let arr=[{
            wareHouseCode:this.state.wareHouseCode,
            wareHouseChinese:this.state.wareHouseChinese,
            wareHouseEnglish:this.state.wareHouseEnglish,
            founder:this.state.founder,
            founderTime:this.state.founderTime,
            allWare:this.state.allWare,
            termination:this.state.termination
        }]
        console.log(arr[0])
        this.props.service.searchWare(arr[0])
            .then(data=>{
                console.log(data);
                this.setState({
                    wareHouseList:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
 //==================重置======================
    myReset=()=>{
        this.setState({
            wareHouseCode:'',
            wareHouseChinese:'',
            wareHouseEnglish:'',
            founder:'',
            founderTime:'',
            allWare:false,
            termination:false
        })
        this.props.service.wareList()
            .then(data=>{
                console.log(data);
                this.setState({
                    wareHouseList:data
                })
            })
    }
//=================删除=======================
    myDelete=(obj)=>{
        console.log(obj);
        this.props.service.deleteWare(obj)
            .then(data=>{
                console.log(data);

                this.setState({
                    wareHouseList:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
    render() {
//================表头数据=================
        const columns = [
            {
                title: '仓库编号',
                dataIndex: 'number',
                key: 'warehouseId',
            },
            {
                title: '中文名称',
                dataIndex: 'chinaName',
                key: 'chineseName',
            },
            {
                title: '英文名称',
                dataIndex: 'engName',
                key: 'English',
            },
            {
                title: '是否总仓',
                dataIndex: 'isGeneral',
                key: 'allWare',
            },
            {
                title: '所属公司',
                dataIndex: 'company',
                key: 'company',
            },
            {
                title: '终止状态',
                dataIndex: 'stopType',
                key: 'termination',
            },
            {
                title: '终止时间',
                dataIndex: 'stopTime',
                key: 'terminationTime',
            },
            {
                title: '仓库地址',
                dataIndex: 'address',
                key: 'wareHouseUrl',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Link to={{pathname:"/home/editWareHouse",state:{record}}}>
                            <span style={{ cursor:"pointer",color:"#1890FF"}}>查看</span>
                        </Link>
                       <Link to={{pathname:"/home/editWareHouse",state:{record}}}>
                            <span style={{ cursor:"pointer",color:"#1890FF"}}>编辑</span>
                       </Link>
                        <span onClick={()=>this.myDelete(record)} style={{ cursor:"pointer",color:"#1890FF"}}>删除</span>
                    </Space>
                ),
            },
        ];
        return (
            <div style={{textAlign:"left",padding: "30px 0 0 30px"}}>
                <div>
                    <div  style={{display:"flex"}}>
                        <div style={{display:"flex",height:"32px"}}>
                            <div style={{backgroundColor:"#F2F2F2",padding:"0 2px",lineHeight:"32px"}}>仓库编号</div>
                            <Input onChange={(e)=>this.changeAll(e,"wareHouseCode")} value={this.state.wareHouseCode} placeholder="仓库编号"  style={{height:"32px",width:"200px"}} />
                        </div>
                        <div style={{display:"flex",height:"32px"}}>
                            <div style={{backgroundColor:"#F2F2F2",padding:"0 2px",lineHeight:"32px",margin:"0 0 0 50px"}}>中文名称</div>
                            <Input onChange={(e)=>this.changeAll(e,"wareHouseChinese")} value={this.state.wareHouseChinese} placeholder="中文名称" style={{height:"32px",width:"200px"}}/>
                        </div>
                        <div style={{display:"flex",height:"32px"}}>
                            <div style={{backgroundColor:"#F2F2F2",padding:"0 2px",lineHeight:"32px",margin:"0 0 0 50px"}}>英文名称</div>
                            <Input onChange={(e)=>this.changeAll(e,"wareHouseEnglish")} value={this.state.wareHouseEnglish} placeholder="英文名称"  style={{height:"32px",width:"200px"}}/>
                        </div>
                    </div>
                    <div style={{display:"flex",margin:"30px 0 0 0 "}}>
                        <p>
                            <span>是否总仓：</span>
                            <Checkbox onChange={(e)=>this.changeCheck(e,"allWare")} checked={this.state.allWare}>是</Checkbox>
                        </p>
                        <p style={{margin:"0 0 0 15px"}}>
                            <span>终止状态：</span>
                            <Checkbox onChange={(e)=>this.changeCheck(e,"termination")} checked={this.state.termination} >是</Checkbox>
                        </p>
                        <div style={{display:"flex",height:"32px"}}>
                            <div style={{backgroundColor:"#F2F2F2",padding:"0 2px",lineHeight:"32px", margin:"0 0 0 65px"}}>创建人</div>
                            <Input onChange={(e)=>this.changeAll(e,"founder")} value={this.state.founder} placeholder="创建人"  style={{width:"210px",height:"32px"}}/>
                        </div>
                        <div style={{display:"flex",height:"32px"}}>
                            <div style={{backgroundColor:"#F2F2F2",padding:"0 2px",lineHeight:"32px", margin:"0 0 0 55px"}}>创建时间</div>
                            <Input onChange={(e)=>this.changeAll(e,"founderTime")} value={this.state.founderTime} placeholder="创建时间"  style={{width:"200px",height:"32px"}}/>
                        </div>
                     </div>
                </div>
                <div style={{display:'flex',marginTop:'30px'}}>
                    <Button onClick={this.mySearch.bind(this)} type="primary" className="button1">搜索</Button>
                    <Button onClick={this.myReset.bind(this)} type="primary" className="button2">重置</Button>
                    <Link to="/home/addWareHouse"><Button type="primary" className="button3" >新增仓库</Button></Link>
                </div>
{/*======================表格===========================*/}
                <div style={{margin:"30px 0 0 0"}}>
                    <Table dataSource={this.state.wareHouseList} pagination={false} columns={columns}  style={{border:"3px solid #E7E7E7",width:"1000px"}}/>
                    <Pagination onChange={this.changePage} defaultCurrent={6} total='' style={{margin:"30px 0 0 0"}}/>
                </div>
            </div>
        )
    }
}

export default warehouseList