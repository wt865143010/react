import React, {Component} from 'react'
import {Link} from "react-router-dom";
import { Input,Select,Button} from 'antd';
import {inject,observer} from 'mobx-react'
import './service_area.css'
import City from "../City";
const { Option } = Select;
const { TextArea } = Input;
@inject('service')
@observer
class editService extends Component {
    constructor() {
        super();
        this.state={
            myKey:0,
            serveCode:'',
            serveState:'正常发货',
            serveLate:''
        }
    }
    UNSAFE_componentWillMount() {
        console.log(this.props.location.state.record.serId);
         this.state.myKey=this.props.location.state.record.serId;
    }
//================服务区编码输入框==================
    changeCode=(e)=>{
        console.log(e.target.value);
        this.setState({
            serveCode:e.target.value
        })
    }
//==================发货状态下拉框===================
    handleChange=(value)=> {
        console.log(value);
        this.setState({
            serveState : value
        })
    }
//=================延时原因文字框====================
    changeLate=(e)=>{
        console.log(e.target.value);
        this.setState({
            serveLate:e.target.value
        })
    }
//===================省市区下拉框===================
    getProvince(e){
       console.log(e)
    }
    getCity(e){
        console.log(e)
    }
    getCounty(e){
        console.log(e)
    }
//=======================取消=======================
    myCancel=()=>{
        this.props.history.push("/home/Warehouse/service_area/Service_area")
}
//=======================确认提交========================
    myConfirm=()=>{
        let arr=
            {
                serId:this.state.myKey,
                serCode: this.state.serveCode,
                serType:this.state.serveState,
                serReason:this.state.serveLate,
                serPro:document.getElementsByClassName("myprovince")[0].value,
                serCity:document.getElementsByClassName("mycity")[0].value,
                serCounty:document.getElementsByClassName("mycounty")[0].value,
            }
        console.log(arr)
        this.props.service.serviceConfirm(arr)
            .then(data=>{
                //成功拿到数据
                console.log(data);
            }).catch(err=>{
            console.log(err)
        })
        this.props.history.push("/home/Warehouse/service_area/Service_area")

    }
    render() {
//===============延时原因文字框判断===================
        let mytext=null;
        if (this.state.serveState === "延时发货"){
            mytext=
                <div style={{display:"flex",marginLeft:"-72px"}}>
                    <p style={{marginTop:"40px"}}>
                        <span style={{color:"red"}}>*</span>
                        <span>延时原因：</span>
                    </p>
                    <TextArea value={this.state.serveLate} onChange={this.changeLate} rows={4} style={{width:"300px",margin:"30px 0 0 0"}}/>
                </div>
        }
        return (
            <div className="addService">
                <div style={{display:"flex"}}>
                    <div style={{textAlign:"right",marginTop:"5px"}}>
                        <p>
                            <span style={{color:"red"}}>*</span>
                            <span>服务区编码：</span>
                        </p>
                        <p style={{marginTop:"40px"}}>
                            <span>服务区状态：</span>
                        </p>
                    </div>
{/*=======================input框===========================*/}
                    <div>
                        <Input placeholder="服务区编码" onChange={this.changeCode} value={this.state.serveCode} className="myinput" style={{height:"32px"}}/><br/>
                        <Select defaultValue="正常发货" value={this.state.serveState} style={{ width: 250,marginTop:"30px" }} onChange={this.handleChange.bind(this)}>
                            <Option value="正常发货">正常发货</Option>
                            <Option value="延时发货">延时发货</Option>
                        </Select>
                    </div>
                    <div style={{display:"flex",margin:"0 0 0 70px",height:"50px"}}>
                        <div style={{textAlign:"right",marginTop:"5px"}}>
                            <p>
                                <span style={{color:"red"}}>*</span>
                                <span>服务区：</span>
                            </p>
                        </div>
                        <div>
                            <City parent={this}></City>
                                {/*<City  theProvice={this.getProvince.bind(this)} theCity={this.getCity.bind(this)} theCountry={this.getCounty.bind(this)}></City> <br/>*/}
                            {mytext}
                        </div>
                    </div>
                </div>
                <div style={{margin:"90px 0 0 200px"}}>
                    <Button type="primary" onClick={this.myConfirm.bind(this)} style={{width:"120px"}}>确认</Button>
                    <Button  onClick={this.myCancel.bind(this)} type="primary" style={{margin:"0 0 0 30px",backgroundColor:"darkgrey",border:"none",width:"120px"}}>取消</Button>

                </div>
            </div>
        )
    }
}

export default editService