import React, {Component} from 'react'
import '../service_area/service_area.css'
import {Input, Button, Select, Checkbox, Table, Space, Pagination,DatePicker} from 'antd';
import {Link} from 'react-router-dom'
import {toJS} from 'mobx'
import {inject,observer} from 'mobx-react'
const { Search } = Input;
const { Option } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
@inject('service')
@observer
class storeList extends Component {
    constructor() {
        super();
        this.state={
            myList:[],
            myBox:false
        }
    }
    UNSAFE_componentWillMount() {
        // this.state.myList=toJS(this.props.serviceLis.listdata)
        this.props.service.storeData()
            .then(data=>{
                //    成功拿到数据
                console.log(data);
                this.setState({
                    myList:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
//=====================分页==================
    changePage=(page, pageSize)=>{
        console.log("页码："+page +","+"每页条数："+pageSize)
    }
//====================日期选择================
    changeDate=(date, dateString)=> {
        console.log(date, dateString);
    }
    render() {
//=======================表头数据======================
        const columns = [
            {
                title: '门店编号',
                dataIndex: 'code',
                key: 'code',
            },
            {
                title: '所属公司',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '中文名称',
                dataIndex: 'chineseName',
                key: 'chineseName',
            },
            {
                title: '英文名称',
                dataIndex: 'english',
                key: 'english',
            },
            {
                title: '门店类别',
                dataIndex: 'type',
                key: 'type',
            },
            {
                title: '是否直销门店',
                dataIndex: 'directSelling',
                key: 'directSelling',
            },
            {
                title: '终止状态',
                dataIndex: 'termination',
                key: 'termination',
            },
            {
                title: '创建人',
                dataIndex: 'Founder',
                key: 'Founder',
            },
            {
                title: '创建时间',
                dataIndex: 'creationTime',
                key: 'creationTime',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Link to="/home/editStore">
                            <span style={{ cursor:"pointer",color:"#1890FF"}}>查看</span>
                        </Link>
                        <Link to="/home/editStore">
                            <span style={{ cursor:"pointer",color:"#1890FF"}}>编辑</span>
                        </Link>
                        <span style={{ cursor:"pointer",color:"#1890FF"}}>删除</span>
                    </Space>
                ),
            },
        ];
        return (
            <div style={{textAlign:"left",padding: "30px 0 0 10px"}}>
                <div style={{display:"flex"}}>
                    <div style={{display:"flex",height:"32px"}}>
                        <div className="textHead">门店编号</div>
                        <Input placeholder="门店编号" style={{width:"150px",margin:"0 25px 0 0",height:"32px"}} />
                    </div>
                    <div style={{display:"flex",height:"32px"}}>
                        <div className="textHead">门店中文名称</div>
                        <Input placeholder="门店中文名称" style={{width:"150px",margin:"0 25px 0 0",height:"32px"}} />
                    </div>
                    <div style={{display:"flex",height:"32px"}}>
                        <div className="textHead">门店英文名称</div>
                        <Input placeholder="门店英文名称" style={{width:"150px",margin:"0 25px 0 0",height:"32px"}} />
                    </div>
                    <div style={{display:"flex",height:"32px"}}>
                        <div className="textHead">所属公司</div>
                        <Select defaultValue="全部公司" style={{ width: 150}} onChange={handleChange}>
                            <Option value="全部公司">全部公司</Option>
                            <Option value="如新总部">如新总部</Option>
                        </Select>
                    </div>
                </div>
                <div style={{display:"flex",margin:"30px 0 0 0"}}>
                    <span style={{lineHeight:"32px",margin:"0 10px 0 0"}}>门店类型</span>
                    <Select defaultValue="全部" style={{ width: 160 }} onChange={handleChange}>
                        <Option value="全部">全部</Option>
                        <Option value="形象店">形象店</Option>
                        <Option value="时尚店">时尚店</Option>
                    </Select>
                    <span style={{margin:"0 10px 0 40px",lineHeight:"32px"}}>直销门店</span>
                    <Checkbox onChange={onChange} style={{margin:"0 20px 0 0",lineHeight:"32px"}}>是</Checkbox>
                    <span style={{margin:"0 10px 0 0",lineHeight:"32px"}}>终止状态</span>
                    <Checkbox onChange={onChange} style={{lineHeight:"32px"}}>是</Checkbox>
                    <div style={{display:"flex",height:"32px",margin:"0 0 0 20px"}}>
                        <div className="textHead" style={{width:"70px"}}>创建人</div>
                        <Input placeholder="创建人" style={{width:"160px",height:"32px"}} />
                    </div>
                    <div style={{display:"flex",height:"32px",margin:"0 0 0 30px"}}>
                        <div className="textHead" style={{width:"80px"}}>创建时间</div>
                        <DatePicker onChange={this.changeDate} style={{width:"150px",height:"32px"}} />
                        {/*<Input placeholder="创建时间" style={{width:"150px",height:"32px"}} />*/}
                    </div>
                </div>
                <div style={{display:'flex',marginTop:'30px'}}>
                    <Button type="primary">搜索</Button>
                    <Button type="primary" style={{backgroundColor:"darkgrey",border:"none",marginLeft:"60px"}}>重置</Button>
                    <Link to="/home/addStore">
                        <Button type="primary" style={{marginLeft:"60px"}}>新增门店</Button>
                    </Link>
                </div>
                <div>
                    <Table dataSource={this.state.myList} pagination={false} bordered columns={columns}  style={{border:"3px solid #E7E7E7",width:"1200px",margin:"30px 0 0 0"}}/>;
                    <Pagination onChange={this.changePage} defaultCurrent={6} total={this.state.myList.length} style={{margin:"30px 0 0 0"}}/>
                </div>
            </div>
        )
    }
}

export default storeList