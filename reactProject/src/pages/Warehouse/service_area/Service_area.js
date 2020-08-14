import React, {Component,createRef} from 'react'
import { Input, Button, Table, Space,Pagination } from 'antd';
import './service_area.css'
import {toJS} from 'mobx'
import {Link} from "react-router-dom"
import {inject,observer} from 'mobx-react'
const { Search } = Input;

@inject('service')
@observer
class service_area extends Component {
    constructor() {
        super();
        this.state={
            servicedata:[],
            myBox:false,
            myServeName:createRef(),
            myServeCode:createRef(),
            key:'',
            serName:"",
            serCode:"",
        }
    }
    UNSAFE_componentWillMount() {
        // this.state.servicedata=toJS(this.props.service.servicedata)
        this.props.service.serveData()
            .then(data=>{
                //成功拿到数据
                console.log("服务区列表：");
                console.log(data);
                this.setState({
                    servicedata:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
//===================删除=========================
    myDelete=(obj)=>{
        let a={
            header:"charset=UTF-8",
            serId:obj
        }
        // console.log(obj);
        this.props.service.deleteData(a)
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log(err)
            })
        this.props.service.serveData()
            .then(data=>{
                console.log("服务区列表：");
                console.log(data);
                this.setState({
                    servicedata:data
                })
            })
    }
//=====================延迟原因====================
    openBox=(obj)=>{
        console.log(obj);
        this.setState({
                myBox:true,
                key:obj.key-1,
            })
    }
    close=()=>{
        this.setState({
                myBox:false
            })
    }
//===================重置=========================
    myreset=()=>{
        this.setState({
            serveName:"",
            serveCode:""
        })
        this.props.service.serveData()
            .then(data=>{
                console.log(data);
                this.setState({
                    servicedata:data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
    myChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            serName:e.target.value
        })
    }
    myOtherChange=(a)=>{
        console.log(a.target.value);
        this.setState({
            serCode:a.target.value
        })
    }
//========================搜索========================
    search=()=>{
        // console.log(this.state.myServeName.current.state.value);
        // console.log(this.state.myServeCode.current.state.value);
        let obj=this.state.serName;
        let myobj=this.state.serCode;
            this.props.service.myserch(obj,myobj)
                .then(data=>{
                //成功拿到数据
                    console.log(data);
                    this.setState({
                        servicedata:data
                    })
                })
                .catch(err=>{
                    console.log(err)
                })
    }
//====================分页=======================
    changePage=(page, pageSize)=>{
        console.log("页码："+page +","+"每页条数："+pageSize)
    }

    render() {
//=======================表头数据===================
        const columns = [
            {
                title: '服务区编码',
                dataIndex: 'serCode',
                // key: 'serCode'
            },
            {
                title: '服务区名称',
                dataIndex: 'serCity',
                // key: 'serName',
            },
            {
                title: '服务区状态',
                dataIndex: 'serType',
                // key: 'serType',
            },
            {
                title: '延时原因',
                dataIndex: 'serReason',
                // key: 'serReason',
            },
            {
                title: '操作',
                // key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <span onClick={()=>this.openBox(record)} style={{ cursor:"pointer",color:"#1890FF"}}>查看</span>
                        <Link to={{pathname:"/home/editService",state:{record}}}>
                            <span style={{ cursor:"pointer",color:"#1890FF"}}>编辑</span>
                        </Link>
                        <span onClick={()=>this.myDelete(record.serId)} style={{ cursor:"pointer",color:"#1890FF"}}>删除</span>
                    </Space>
                ),
            },
        ];
 //=================查看的模态框=======================
        let textBox=null;
        if (this.state.myBox===true){
           textBox=
               <div>
                   <div className="bg"></div>
                   <div className="textBox">
                       <div className="out" onClick={()=>this.close()}>×</div>
                       <div style={{textAlign:"right",width:"120px"}}>
                           <p>服务区编码：</p>
                           <p>服务区名称：</p>
                           <p>服务区状态：</p>
                           <p id="late" style={{display:"block"}}>延时原因：</p>
                       </div>
                       <div style={{textAlign:"left",margin:"0 0 0 30px"}}>
                           <p>{this.state.servicedata[this.state.key].serCode}</p>
                           <p>{this.state.servicedata[this.state.key].serName}</p>
                           <p>{this.state.servicedata[this.state.key].serType}</p>
                           <p>{this.state.servicedata[this.state.key].serReason}</p>
                       </div>
                   </div>
               </div>
        }
        return (
            <div className="service_area">
                <div style={{display:"flex"}}>
                    <div style={{display:"flex"}}>
                        <div style={{backgroundColor:"#F2F2F2",padding:"0 2px",lineHeight:"32px"}}>服务区名称</div>

                        <Input onChange={this.myChange} placeholder="服务区名称"  value={this.state.serveName}  style={{height:"32px"}} className="search"/>
                    </div>
                    <div style={{display:"flex"}}>
                        <div style={{backgroundColor:"#F2F2F2",padding:"0 2px",lineHeight:"32px",margin:"0 0 0 50px"}}>服务区编码</div>
                        {/*<input type="text" id="serveCode"  placeholder="服务区编码" ref={this.state.myServeCode} style={{height:"32px"}} className="search2"/>*/}
                        <Input placeholder="服务区编码" onChange={this.myOtherChange} value={this.state.serveCode} style={{height:"32px"}} className="search2"/>
                    </div>

                    {/*<Search placeholder="服务区编码" onSearch={value => console.log(value)} enterButton className="search2"/>*/}
                </div>
               <div style={{display:'flex',marginTop:'30px'}}>
                   <Button type="primary" className="button1" onClick={this.search.bind(this)}>搜索</Button>
                   <Button type="primary" className="button2" onClick={this.myreset.bind(this)}>重置</Button>
                   <Link to="/home/addService"><Button type="primary" className="button3" >新增服务区</Button></Link>
               </div>
 {/*====================表格=====================*/}
                <div>
                    <Table dataSource={this.state.servicedata} pagination={true} bordered columns={columns} className="table" />
                    {/*<Pagination onChange={this.changePage} defaultCurrent={6} total={this.state.servicedata.length} style={{margin:"30px 0 0 0"}}/>*/}
                </div>
                {textBox}
            </div>

    )
    }
}

export default service_area