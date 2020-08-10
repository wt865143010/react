import React, {Component} from 'react'
import {Button, Checkbox, Input, Select, Space, Table} from "antd";
import {Link} from "react-router-dom";
const { Search } = Input;
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
        title: '具体地址',
        dataIndex: 'specificAddress',
        key: 'specificAddress',
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
const mycolumns = [
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
function handleChange(value) {
    console.log(`selected ${value}`);
}
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
class editStore extends Component {
    render() {
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
                            <Input placeholder="门店编号" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input placeholder="中文名称" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input placeholder="联系电话" style={{width:"200px",margin:"0 40px 0 0",height:"32px"}} />
                        </p>
                        <p style={{textAlign:"left"}}>
                            <Checkbox onChange={onChange} >是</Checkbox>
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
                        <div>
                            <Select defaultValue="全部" style={{ width: 200}} onChange={handleChange}>
                                <Option value="全部">全部</Option>
                                <Option value="形象店">形象店</Option>
                                <Option value="时尚店">时尚店</Option>
                            </Select>
                        </div>
                        <p>
                            <Input placeholder="英文名称" style={{width:"200px",margin:"0 50px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input placeholder="传真" style={{width:"200px",margin:"0 50px 0 0",height:"32px"}} />
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
                        <div>
                            <Select defaultValue="上海分公司" style={{ width: 200}} onChange={handleChange}>
                                <Option value="上海分公司">上海分公司</Option>
                                <Option value="广东分公司">广东分公司</Option>
                            </Select>
                        </div>
                        <p>
                            <Input placeholder="邮编" style={{width:"200px",margin:"0 60px 0 0",height:"32px"}} />
                        </p>
                        <p>
                            <Input placeholder="直销公司名称" style={{width:"200px",margin:"0 60px 0 0",height:"32px"}} />
                        </p>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{textAlign:"right"}}>
                        <p>实体仓编号：</p>
                        <p>是否终止门店：</p>
                        <p>创建时间：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </div>
                    <div style={{textAlign:"right",margin:"0 0 0 260px"}}>
                        <p>网络仓编号：</p>
                        <p>终止时间：</p>
                        <p>修改人：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                    </div>
                    <div style={{textAlign:"right",margin:"0 0 0 260px"}}>
                        <p style={{height:"22px"}}></p>
                        <p>创建人：</p>
                        <p>修改时间：</p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p style={{height:"22px"}}></p>
                        <p>5</p>
                        <p>6</p>
                    </div>
                </div>
                <div>
                    <h2 style={{fontWeight:"bolder"}}>门店官方地址</h2>
                    <p>上海市浦东区XXXXXX大厦88号</p>
                </div>
                <div>
                    <h2 style={{fontWeight:"bolder"}}>设置门店地址</h2>
                    <Table dataSource="" bordered columns={columns}  style={{border:"3px solid #E7E7E7",width:"700px"}}/>;
                </div>
                <div>
                    <h2 style={{fontWeight:"bolder"}}>设置门店服务区域</h2>
                    <Table dataSource="" bordered columns={mycolumns}  style={{border:"3px solid #E7E7E7",width:"700px"}}/>;
                </div>
                <div style={{margin:"30px 0 50px 200px",textAlign:"left"}}>
                    <Button type="primary" style={{width:"120px"}}>确认</Button>
                    <Button type="primary" style={{margin:"0 0 0 30px",backgroundColor:"darkgrey",border:"none",width:"120px"}}>取消</Button>
                </div>
            </div>
        )
    }
}

export default editStore