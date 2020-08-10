import React, {Component} from 'react'
import {Button, Checkbox, Input, Pagination, Select, Space, Table} from "antd";
import City from "../City";
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
function handleChange(value) {
    console.log(`selected ${value}`);
}
const { Option } = Select;
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
                <a>删除</a>
                <a>新增</a>
            </Space>
        ),
    },
];
class addStore extends Component {
 //=====================分页=====================
    changePage=(page, pageSize)=>{
        console.log("页码："+page +","+"每页条数："+pageSize)
    }

    render() {
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
                            <Input placeholder="门店编号" style={{width:"200px",height:"32px"}} />
                        </p>
                        <p>
                            <Input placeholder="中文名称" style={{width:"200px",height:"32px"}} />
                        </p>
                        <p>
                            <Input placeholder="邮编" style={{width:"200px",height:"32px"}} />
                        </p>
                        <p style={{textAlign:"left"}}>
                            <Checkbox onChange={onChange} style={{height:"32px"}}>是</Checkbox>
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
                        <p>
                            <Select defaultValue="全部" style={{ width: 200}} onChange={handleChange}>
                                <Option value="全部">全部</Option>
                                <Option value="形象店">形象店</Option>
                                <Option value="时尚店">时尚店</Option>
                            </Select>
                        </p>
                        <p>
                            <Input placeholder="英文名称" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input placeholder="联系电话" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input placeholder="实体仓编号" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
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
                        <p>
                            <Select defaultValue="上海分公司" style={{ width: 200}} onChange={handleChange}>
                                <Option value="上海分公司">全部</Option>
                                <Option value="广东分公司">形象店</Option>
                            </Select>
                        </p>
                        <p>
                            <Input placeholder="传真" style={{width:"200px",margin:"0 60px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input placeholder="直销公司名称" style={{width:"200px",margin:"0 60px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input placeholder="网络仓编号" style={{width:"200px",margin:"0 60px 0 0",height:"32px"}} />
                        </p>
                    </div>
                </div>
                <div style={{textAlign:"left"}}>
                    <h2 style={{fontWeight:"bolder"}}>门店官方地址</h2>
                    <div style={{display:"flex"}}>
                        <City></City>
                        <Input placeholder="详细地址" style={{width:"300px",borderRadius:"5px",marginLeft:"10px",height:"32px"}}/>
                    </div>

                </div>
                <div style={{textAlign:"left",margin:"30px 0 0 0"}}>
                    <h2 style={{fontWeight:"bolder"}}>设置门店服务区域</h2>
{/*=================表格============================*/}
                        <Table dataSource="" bordered columns={columns} pagination={false} style={{border:"3px solid #E7E7E7",width:"700px"}}/>
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

export default addStore