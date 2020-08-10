import React, {Component} from 'react'
import {Input, Select, Table, Button, Checkbox, Space, Pagination} from 'antd';
import {Link} from "react-router-dom";
import {toJS} from "mobx";
import {inject,observer} from "mobx-react";

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
@inject('wareHouse')
@observer
class warehouseList extends Component {
    constructor() {
        super();
        this.state={
            wareHouseList:[]
        }
    }
    UNSAFE_componentWillMount() {
        this.state.wareHouseList=toJS(this.props.wareHouse.waredata)
    }
 //========================分页===========================
    changePage=(page,pageSize)=>{
        console.log("页码："+page +","+"每页条数："+pageSize)
    }

    render() {
        const columns = [
            {
                title: '仓库编号',
                dataIndex: 'warehouseId',
                key: 'warehouseId',
            },
            {
                title: '中文名称',
                dataIndex: 'chineseName',
                key: 'chineseName',
            },
            {
                title: '英文名称',
                dataIndex: 'English',
                key: 'English',
            },
            {
                title: '是否总仓',
                dataIndex: 'allWare',
                key: 'allWare',
            },
            {
                title: '所属公司',
                dataIndex: 'company',
                key: 'company',
            },
            {
                title: '终止状态',
                dataIndex: 'termination',
                key: 'termination',
            },
            {
                title: '终止时间',
                dataIndex: 'terminationTime',
                key: 'terminationTime',
            },
            {
                title: '仓库地址',
                dataIndex: 'wareHouseUrl',
                key: 'wareHouseUrl',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Link to='/home/editWareHouse'>
                            <span style={{ cursor:"pointer",color:"#1890FF"}}>查看</span>
                        </Link>
                       <Link to='/home/editWareHouse'>
                            <span style={{ cursor:"pointer",color:"#1890FF"}}>编辑</span>
                       </Link>
                        <span style={{ cursor:"pointer",color:"#1890FF"}}>删除</span>
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
                            <Input placeholder="仓库编号" className="myinput" style={{height:"32px"}} />
                        </div>
                        <div style={{display:"flex",height:"32px"}}>
                            <div style={{backgroundColor:"#F2F2F2",padding:"0 2px",lineHeight:"32px",margin:"0 0 0 50px"}}>中文名称</div>
                            <Input placeholder="中文名称" className="myinput" style={{height:"32px"}}/>
                        </div>
                        <div style={{display:"flex",height:"32px"}}>
                            <div style={{backgroundColor:"#F2F2F2",padding:"0 2px",lineHeight:"32px",margin:"0 0 0 50px"}}>英文名称</div>
                            <Input placeholder="英文名称" className="myinput" style={{height:"32px"}}/>
                        </div>
                    </div>
                    <div style={{display:"flex",margin:"30px 0 0 0 "}}>
                        <p>
                            <span>是否总仓：</span>
                            <Checkbox onChange={onChange} >是</Checkbox>
                        </p>
                        <p style={{margin:"0 0 0 15px"}}>
                            <span>终止状态：</span>
                            <Checkbox onChange={onChange} >是</Checkbox>
                        </p>
                        <div style={{display:"flex",height:"32px"}}>
                            <div style={{backgroundColor:"#F2F2F2",padding:"0 2px",lineHeight:"32px", margin:"0 0 0 115px"}}>创建人</div>
                            <Input placeholder="创建人"  style={{width:"270px",height:"32px"}}/>
                        </div>
                        <div style={{display:"flex",height:"32px"}}>
                            <div style={{backgroundColor:"#F2F2F2",padding:"0 2px",lineHeight:"32px", margin:"0 0 0 45px"}}>创建时间</div>
                            <Input placeholder="创建时间"  style={{width:"250px",height:"32px"}}/>
                        </div>
                     </div>
                </div>
                <div style={{display:'flex',marginTop:'30px'}}>
                    <Button type="primary" className="button1">搜索</Button>
                    <Button type="primary" className="button2">重置</Button>
                    <Link to="/home/addWareHouse"><Button type="primary" className="button3" >新增仓库</Button></Link>
                </div>
{/*======================表格===========================*/}
                <div style={{margin:"30px 0 0 0"}}>
                    <Table dataSource={this.state.wareHouseList} pagination={false} columns={columns}  style={{border:"3px solid #E7E7E7",width:"1000px"}}/>;
                    <Pagination onChange={this.changePage} defaultCurrent={6} total='' style={{margin:"30px 0 0 0"}}/>
                </div>
            </div>
        )
    }
}

export default warehouseList