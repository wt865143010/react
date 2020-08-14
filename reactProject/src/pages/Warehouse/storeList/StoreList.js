import React, {Component} from 'react'
import '../service_area/service_area.css'
import {Input, Button, Select, Checkbox, Table, Space, Pagination,DatePicker} from 'antd';
import {Link} from 'react-router-dom'
import {toJS} from 'mobx'
import {inject,observer} from 'mobx-react'
const { Search } = Input;
const { Option } = Select;
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
            myBox:false,
            storeFounder:'',
            storeCode:'',
            storeChinese:'',
            storeEnglish:'',
            storeType:'',
            ownCompany:'',
            directCheck:false,
            terminationCheck:false,
            createTime:'',
            mykey:"否",
            swisdirect:"否",
            sisstop:"否"

        }
    }
    UNSAFE_componentWillMount() {
        // this.state.myList=toJS(this.props.serviceLis.listdata)
        this.props.service.storeData()
            .then(data=>{
                //成功拿到数据
                console.log("门店列表：")
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
        console.log(date);
        this.setState({
            createTime:date
        })
    }
//=============获取各input框的值===============
    changeAll=(e,thekey)=>{

        console.log(e.target.value);
        this.setState({
            [thekey]:e.target.value
        })
    }
//==============下拉框的值=======================
    changeSelect=(e,thekey)=> {
        console.log(e);
        this.setState({
            [thekey]:e
        })
    }
//==============获取复选框的值===================
    checkedAll=(e,thekey,keyTwo)=> {
        let temp=e.target.checked?this.setState({[keyTwo]:"是"}):this.setState({[keyTwo]:"否"});
        // console.log(temp);
        //三元运算符：条件为真执行？后第一条，反之执行第二条
        console.log(e.target.checked);
            this.setState({
             [thekey]:e.target.checked
            })
    }
//================搜索==========================
    storeSearch=()=>{
        console.log(this.state.swisdirect)
        console.log(this.state.sisstop)
        let arr=
            {
                snumber:this.state.storeCode,
                schinaname:this.state.storeChinese,
                sengname:this.state.storeEnglish,
                stype:this.state.storeType,
                scompany:this.state.ownCompany,
                swisdirect:this.state.swisdirect,
                sisstop:this.state.sisstop,
                screationtime:this.state.createTime,
                sfounder:this.state.storeFounder
            }

        console.log(arr)
        this.props.service.searchStore(arr)
            .then(data=>{
                //成功拿到数据
                console.log(data);
                this.setState({
                    myList:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
//==============重置=========================
    myreset=()=>{
        this.setState({
            storeFounder:'',
            storeCode:'',
            storeChinese:'',
            storeEnglish:'',
            storeType:'',
            ownCompany:'',
            directCheck:false,
            terminationCheck:false,
            createTime:'',
            mykey:"否",
            swisdirect:"否",
            sisstop:"否"
        })
        this.props.service.storeData()
            .then(data=>{
                console.log(data);
                this.setState({
                    myList:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
//================删除========================
    myDelete=(obj)=>{
        console.log(obj);
        this.props.service.deleteStore(obj)
            .then(data=>{
                console.log(data);
                this.setState({
                    myList:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
    render() {
//=======================表头数据======================
        const columns = [
            {
                title: '门店编号',
                dataIndex: 'snumber',
                // key: 'code',
            },
            {
                title: '所属公司',
                dataIndex: 'scompany',
                // key: 'name',
            },
            {
                title: '中文名称',
                dataIndex: 'schinaname',
                // key: 'chineseName',
            },
            {
                title: '英文名称',
                dataIndex: 'sengname',
                // key: 'english',
            },
            {
                title: '门店类别',
                dataIndex: 'stype',
                // key: 'type',
            },
            {
                title: '是否直销门店',
                dataIndex: 'swisdirect',
                // key: 'swisdirect',
            },
            {
                title: '终止状态',
                dataIndex: 'sisstop',
                // key: 'termination',
            },
            {
                title: '创建人',
                dataIndex: 'sfounder',
                // key: 'Founder',
            },
            {
                title: '创建时间',
                dataIndex: 'sCreationtime',
                // key: 'creationTime',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Link to={{pathname:"/home/editStore",query:{record:record}}}>
                            <span style={{ cursor:"pointer",color:"#1890FF"}}>查看</span>
                        </Link>
                        <Link to={{pathname:"/home/editStore",query:{record:record}}}>
                            <span style={{ cursor:"pointer",color:"#1890FF"}}>编辑</span>
                        </Link>
                        <span onClick={()=>this.myDelete(record)} style={{ cursor:"pointer",color:"#1890FF"}}>删除</span>
                    </Space>
                ),
            },
        ];
        return (
            <div style={{textAlign:"left",padding: "30px 0 0 10px"}}>
                <div style={{display:"flex"}}>
                    <div style={{display:"flex",height:"32px"}}>
                        <div className="textHead">门店编号</div>
                        <Input onChange={(e)=>this.changeAll(e,"storeCode")} value={this.state.storeCode} placeholder="门店编号" style={{width:"150px",margin:"0 25px 0 0",height:"32px"}} />
                    </div>
                    <div style={{display:"flex",height:"32px"}}>
                        <div className="textHead">门店中文名称</div>
                        <Input onChange={(e)=>this.changeAll(e,"storeChinese")} value={this.state.storeChinese} placeholder="门店中文名称" style={{width:"150px",margin:"0 25px 0 0",height:"32px"}} />
                    </div>
                    <div style={{display:"flex",height:"32px"}}>
                        <div className="textHead">门店英文名称</div>
                        <Input onChange={(e)=>this.changeAll(e,"storeEnglish")} value={this.state.storeEnglish} placeholder="门店英文名称" style={{width:"150px",margin:"0 25px 0 0",height:"32px"}} />
                    </div>
                    <div style={{display:"flex",height:"32px"}}>
                        <div className="textHead">所属公司</div>
                        <Select onChange={e=>this.changeSelect(e,"ownCompany")} value={this.state.ownCompany} style={{ width: 150}}>
                            <Option>全部公司</Option>
                            <Option value="如新总部">如新总部</Option>
                        </Select>
                    </div>
                </div>
                <div style={{display:"flex",margin:"30px 0 0 0"}}>
                    <span style={{lineHeight:"32px",margin:"0 10px 0 0"}}>门店类型</span>
                    <Select onChange={e=>this.changeSelect(e,"storeType")} value={this.state.storeType}  style={{ width: 160 }} >
                        <Option>全部</Option>
                        <Option value="形象店">形象店</Option>
                        <Option value="时尚店">时尚店</Option>
                    </Select>
                    <span style={{margin:"0 10px 0 40px",lineHeight:"32px"}}>直销门店</span>
                    <Checkbox defaultChecked={false} onChange={(e)=>this.checkedAll(e,"directCheck","swisdirect")} checked={this.state.directCheck} style={{margin:"0 20px 0 0",lineHeight:"32px"}}>是</Checkbox>
                    <span style={{margin:"0 10px 0 0",lineHeight:"32px"}}>终止状态</span>
                    <Checkbox defaultChecked={false} onChange={(e)=>this.checkedAll(e,"terminationCheck","sisstop")} checked={this.state.terminationCheck} style={{lineHeight:"32px"}}>是</Checkbox>
                    <div style={{display:"flex",height:"32px",margin:"0 0 0 20px"}}>
                        <div className="textHead" style={{width:"70px"}}>创建人</div>
                        <Input onChange={(e)=>this.changeAll(e,"storeFounder")} value={this.state.storeFounder}  placeholder="创建人" style={{width:"160px",height:"32px"}} />
                    </div>
                    <div style={{display:"flex",height:"32px",margin:"0 0 0 30px"}}>
                        <div className="textHead" style={{width:"80px"}}>创建时间</div>
                        <DatePicker onChange={this.changeDate} style={{width:"150px",height:"32px"}} />
                        {/*<Input placeholder="创建时间" style={{width:"150px",height:"32px"}} />*/}
                    </div>
                </div>
                <div style={{display:'flex',marginTop:'30px'}}>
                    <Button onClick={this.storeSearch.bind(this)} type="primary">搜索</Button>
                    <Button type="primary" onClick={this.myreset.bind(this)} style={{backgroundColor:"darkgrey",border:"none",marginLeft:"60px"}}>重置</Button>
                    <Link to="/home/addStore">
                        <Button type="primary" style={{marginLeft:"60px"}}>新增门店</Button>
                    </Link>
                </div>
                <div>
                    <Table dataSource={this.state.myList} pagination={false} bordered columns={columns}  style={{border:"3px solid #E7E7E7",width:"1200px",margin:"30px 0 0 0"}}/>
                    <Pagination onChange={this.changePage} defaultCurrent={6} total={this.state.myList.length} style={{margin:"30px 0 0 0"}}/>
                </div>
            </div>
        )
    }
}

export default storeList