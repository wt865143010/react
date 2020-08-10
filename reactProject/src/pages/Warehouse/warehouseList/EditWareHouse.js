import React, {Component} from 'react'
import {Button, Checkbox, Input, Pagination, Select, Space, Table} from "antd";
import {Link} from "react-router-dom";
import City from "../City";
const { Option } = Select;
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
                <a>移除</a>
            </Space>
        ),
    },
];
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
function handleChange(value) {
    console.log(`selected ${value}`);
}
class editWareHouse extends Component {
//========================分页===========================
    changePage=(page,pageSize)=>{
        console.log("页码："+page +","+"每页条数："+pageSize)
    }
    render() {
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
                            <Input placeholder="仓库编号" className="search" style={{height:"32px"}}/>
                        </p>
                        <p>
                            <Input placeholder="中文名称" className="search" style={{height:"32px"}}/>
                        </p>
                        <p>
                            <Checkbox onChange={onChange} style={{lineHeight:"32px"}}>是</Checkbox>
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
                        <p>
                            <Select defaultValue="上海分公司" style={{ width: 210}} onChange={handleChange}>
                                <Option value="上海分公司">上海分公司</Option>
                                <Option value="广东分公司">广东分公司</Option>
                            </Select>
                        </p>
                        <p>
                            <Input placeholder="英文名称" className="search" style={{height:"32px"}}/>
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
                            <Input placeholder="联系电话" className="search" style={{height:"32px"}}/>
                        </p>
                        <p>
                            <Input placeholder="传真" className="search" style={{height:"32px"}}/>
                        </p>
                        <p></p>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                        <p style={{lineHeight:"32px",width:"118px",textAlign:"right"}}>仓库地址：</p>
                    <div style={{display:"flex"}}>
                        <City></City>
                        <Input placeholder="具体地址" style={{width:"300px",margin:"0 0 0 10px",height:"32px"}}/>
                    </div>
                </div>
{/* 数据仅展示区*/}
                <div style={{display:"flex",margin:"30px 0 0 0"}}>
                    <div style={{textAlign:"right"}}>
                        <p style={{lineHeight:"32px"}}>*实体仓编号：</p>
                        <p style={{lineHeight:"32px"}}>是否终止门店：</p>
                        <p style={{lineHeight:"32px"}}>创建时间：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p style={{lineHeight:"32px"}}>777</p>
                        <p style={{lineHeight:"32px"}}>
                            <Checkbox onChange={onChange}>是</Checkbox>
                        </p>
                        <p style={{lineHeight:"32px"}}>000000</p>
                    </div>
                    <div style={{textAlign:"right",margin:"0 0 0 200px"}}>
                        <p style={{lineHeight:"32px"}}>*网络仓编号：</p>
                        <p style={{lineHeight:"32px"}}>终止时间：</p>
                        <p style={{lineHeight:"32px"}}>修改人：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p style={{lineHeight:"32px"}}>888</p>
                        <p style={{lineHeight:"32px"}}>999</p>
                        <p style={{lineHeight:"32px"}}>chenyao</p>
                    </div>
                    <div style={{textAlign:"right",margin:"0 0 0 200px"}}>
                        <p style={{height:"32px"}}></p>
                        <p style={{lineHeight:"32px"}}>创建人：</p>
                        <p style={{lineHeight:"32px"}}>修改时间：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p style={{height:"32px"}}></p>
                        <p style={{lineHeight:"32px"}}>张三</p>
                        <p style={{lineHeight:"32px"}}>77777</p>
                    </div>
                </div>
                <div style={{display:'flex',marginTop:'30px'}}>
                    <Link to="/addStore"><Button type="primary" className="button3" >新增门店</Button></Link>
                </div>
{/*=========================表格======================================*/}
                <div style={{margin:"30px 0 0 0"}}>
                    <Table dataSource="" pagination={false} bordered columns={columns}  style={{border:"3px solid #E7E7E7",width:"1000px"}}/>
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

export default editWareHouse