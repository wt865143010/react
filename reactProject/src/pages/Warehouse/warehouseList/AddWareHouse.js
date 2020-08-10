import React, {Component} from 'react'
import {Button, Checkbox, Input, Pagination, Space, Table} from "antd";
import {Link} from "react-router-dom";
import City from "../City";
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
                <a>移除</a>
            </Space>
        ),
    },
];
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
class addWareHouse extends Component {
    //========================分页===========================
    changePage=(page,pageSize)=>{
        console.log("页码："+page +","+"每页条数："+pageSize)
    }
    render() {
        return (
            <div style={{textAlign:"left",padding: "30px 0 0 50px"}}>
                <div style={{display:"flex"}}>
                    <div style={{textAlign:"right"}}>
                        <p style={{lineHeight:"32px"}}>
                            <span style={{color:"red"}}>*</span>
                            <span>仓库编号：</span>
                        </p>
                        <p style={{lineHeight:"32px"}}>*中文名称：</p>
                        <p style={{lineHeight:"32px"}}>传真：</p>
                        <p style={{lineHeight:"32px"}}>仓库地址：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p>
                            <Input placeholder="仓库编号" className="search" style={{height:"32px"}}/>
                        </p>
                       <p>
                           <Input placeholder="中文名称" className="search" style={{height:"32px"}}/>
                       </p>
                       <p>
                           <Input placeholder="传真" className="search" style={{height:"32px"}}/>
                       </p>
                        <p>
                            <City></City>
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
                        <p style={{lineHeight:"32px"}}>2222</p>
                        <p>
                            <Checkbox onChange={onChange} style={{lineHeight:"32px"}}>是</Checkbox>
                        </p>
                        <p>
                            <Input placeholder="实体仓编号" className="search" style={{height:"32px"}}/>
                        </p>
                    </div>
                    <div style={{textAlign:"right",margin:"0 0 0 50px"}}>
                        <p style={{lineHeight:"32px"}}>*英文名称：</p>
                        <p style={{lineHeight:"32px"}}>*联系电话：</p>
                        <p style={{lineHeight:"32px"}}>*网络仓编号：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p>
                            <Input placeholder="英文名称" className="search" style={{height:"32px"}}/>
                        </p>
                        <p>
                            <Input placeholder="联系电话" className="search" style={{height:"32px"}}/>
                        </p>
                        <p>
                            <Input placeholder="网络仓编号" className="search" style={{height:"32px"}}/>
                        </p>
                    </div>
                </div>
                <div style={{display:'flex',marginTop:'30px'}}>
                    <Link to="/home/addStore"><Button type="primary" className="button3" >新增门店</Button></Link>
                </div>
{/*==================表格===================*/}
                <div style={{margin:"30px 0 0 0"}}>
                    <Table dataSource="" pagination bordered columns={columns}  style={{border:"3px solid #E7E7E7",width:"700px"}}/>
                    <Pagination onChange={this.changePage} defaultCurrent={6} total='' style={{margin:"30px 0 0 0"}}/>
                </div>
                <div style={{margin:"30px 0 50px 200px",textAlign:"left"}}>
                    <Button type="primary" style={{width:"120px"}}>确认</Button>
                    <Button type="primary" style={{margin:"0 0 0 30px",backgroundColor:"darkgrey",border:"none",width:"120px"}}>取消</Button>
                </div>
            </div>

        )
    }
}

export default addWareHouse