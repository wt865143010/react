import React, { Component } from 'react';
import './addactivity.css';
import { Radio,DatePicker,Checkbox,Table,Space,Popconfirm  } from 'antd';
import {Link} from 'react-router-dom'

class addactivity extends Component {
    constructor(){
        super()
        this.state={
            promotiontype:[],
            activitytype:0, //促销类型
            activityClazz:0, //促销种类
            activityNum:'', //促销编号
            activityName:'', //活动名称
            StartTime:'', // 开始时间
            StopTime:'', //结束时间
            isDisplay:0, //是否显示在活动专区
            activityDescription:'',//活动说明
            activityLimit:0,//是否享受限制
            activityUserLimit:0, //每人可享受次数

        }
    }


    onChangestart(){

    }
    onChangeend(){
        
    }

    //活动类型
    changeactivitytype=(e)=>{
        console.log(e)
        console.log(e.target.value)
       
        this.setState({
            activitytype:e.target.value
        })
        console.log(typeof this.state.activitytype)
    }

    //活动种类
    changeactivityClazz(e){
        console.log(e.target.value)
        this.setState({
            activityClazz:e.target.value
        })
        
    }

    onChangedisplay = e => {
        console.log(e.target.checked);
        if(e.target.checked == true){
            this.state.isDisplay = 1
        }else{
            this.state.isDisplay = 0
        }
      }

    //获取活动编号
    changeactivitynumber(e){
        this.state.activityNum = e.target.value
    }

    //获取活动名称
    changeactivityName(e){
        this.state.activityName = e.target.value
    }

    //获取开始时间
    onChangestart(data,dataString){
        this.state.StartTime = dataString
    }

    //获取结束时间
    onChangeend(data,dataString){
        this.state.StopTime = dataString
    }

    //获取活动说明
    changeactivityDescription(e){
        this.state.activityDescription = e.target.value
    }

    //是否享受限制
    changeactivityLimit(e){
        if(e.target.checked == true){
            
            this.setState({
                activityLimit:1
            })
        }else{
            this.setState({
                activityLimit:0
            })
            
        }
        console.log(e.target.checked)
        console.log(this.state.activityLimit)
    }

    //获取次数
    changefrequency(e){
        this.state.activityUserLimit = e.target.value
        console.log(this.state.activityUserLimit)
    }

    //下一页传参
    submitfrist(e){
        let data = {
            ...this.state
        }
        console.log(data)
    }




    render() {
        
        let numberinput=null

        if(this.state.activityLimit == 1){
            numberinput = 
            <div style={{display:'inline-block'}}>
                <input onChange={this.changefrequency.bind(this)} style={{width:'64px',height:'25px'}}/>
                <span>次</span>
            </div>
        }
        return (
            <div className='addactivitybox'>
                <div style={{height:'51px',marginTop:'40px',marginLeft:'20px'}} className='clearfix'>
                    <div style={{background:'rgb(153,153,153)'}} className='addstep'>1</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div className='addstep'>2</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div className='addstep'>3</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div className='addstep'>4</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div className='addstep'>5</div>
                </div>
                <div style={{marginTop:'10px'}}>
                    <span style={{marginLeft:'19px'}} className='text1'>基本信息</span>
                    <span className='text1 jianju'>促销产品</span>
                    <span className='text1 jianju'>促销方案</span>
                    <span className='text1 jianju'>用户范围</span>
                    <span className='text1 jianju'>设置完成</span>
                </div>

                <div style={{marginTop:'30px'}}>
                    <div>
                        <span style={{marginRight:'5px'}}>* 促销类型：</span>
                        <select onChange={this.changeactivitytype.bind(this)}  style={{width:'245px',height:'22px'}} >
                            <option value="0">满减促销</option>
                            <option value="1">加价购促销</option>
                            <option value="2">满赠促销</option>
                            <option value="3">特价促销</option>
                        </select>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>* 促销种类：</span>
                        <Radio.Group  onChange={this.changeactivityClazz.bind(this)} value={this.state.activityClazz}>
                            <Radio value={0}>产品促销</Radio>
                            <Radio value={1}>订单促销</Radio>    
                        </Radio.Group>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>* 促销编号：</span>
                        <input onChange={this.changeactivitynumber.bind(this)} style={{width:'245px',height:'25px'}}/>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>* 促销名称：</span>
                        <input onChange={this.changeactivityName.bind(this)} style={{width:'245px',height:'25px'}}/>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>* 开始时间：</span>
                        <DatePicker style={{width:'245px',height:'25px'}} onChange={this.onChangestart.bind(this)} />
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>* 结束时间：</span>
                        <DatePicker style={{width:'245px',height:'25px'}} onChange={this.onChangeend.bind(this)} />
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>是否显示在活动专区：</span>
                        <Checkbox onChange={this.onChangedisplay.bind(this)}></Checkbox>是
                        <span style={{color:'#999999',marginLeft:'50px'}}>勾选显示活动专区，要求必须上传活动介绍图</span>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>促销活动介绍图：</span>
                        <img style={{width:'793px',height:'185px'}}/>
                    </div>
                    <div style={{marginTop:'10px',position:'relative'}}>
                        <span style={{marginRight:'23px',position:'absolute',top:'0px'}}>促销活动说明：</span>
                        <textarea onChange={this.changeactivityDescription.bind(this)} style={{width:'666px',position:'absolute',left:'125px'}}></textarea>
                    </div>

                    <div style={{marginTop:'100px'}}>
                        <span style={{marginRight:'5px'}}>促销享受限制：</span>
                        <Checkbox onChange={this.changeactivityLimit.bind(this)}></Checkbox>每人可享受次数
                        {numberinput}
                    </div>

                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>促销使用券限制：</span>
                        <Checkbox onChange={this.onChangedisplay}></Checkbox>允许使用优惠券
                        
                    </div>


                    <div style={{marginTop:'20px', height:'100px'}}>
                        <Link to={{pathname:'/home/coupon/activity/Addactivitysecond',query:{type:this.state.activitytype}}}>
                            <div onClick={this.submitfrist.bind(this)} className='firststepbutton'>下一步</div>
                        </Link>
                        
                        <Link to='/home/coupon/activity/Activitylist'>
                                <div className='secondbutton'>返回列表</div>
                            </Link>

                    </div>

                </div>
            </div>
        );
    }
}

export default addactivity;