import React, { Component } from 'react';
import './addactivity.css';
import { Radio,DatePicker,Checkbox,Table,Space,Popconfirm  } from 'antd';
import {Link} from 'react-router-dom'

class addactivity extends Component {
    constructor(){
        super()
        this.state={
            promotiontype:[],
            activitytype:0
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

    onChangedisplay = e => {

        
        console.log(e.target.checked);
       
      }

    render() {
        console.log(this.state.activitytype)
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
                        <Radio.Group  onChange={this.onChange} value={this.state.value}>
                            <Radio value={0}>产品促销</Radio>
                            <Radio value={1}>订单促销</Radio>    
                        </Radio.Group>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>* 促销编号：</span>
                        <input style={{width:'245px',height:'25px'}}/>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>* 促销名称：</span>
                        <input style={{width:'245px',height:'25px'}}/>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>* 开始时间：</span>
                        <DatePicker style={{width:'245px',height:'25px'}} onChange={this.onChangestart.bind(this)} />
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>* 开始时间：</span>
                        <DatePicker style={{width:'245px',height:'25px'}} onChange={this.onChangestart.bind(this)} />
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>是否显示在活动专区：</span>
                        <Checkbox onChange={this.onChangedisplay}></Checkbox>是
                        <span style={{color:'#999999',marginLeft:'50px'}}>勾选显示活动专区，要求必须上传活动介绍图</span>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>促销活动介绍图：</span>
                        <img style={{width:'793px',height:'185px'}}/>
                    </div>
                    <div style={{marginTop:'10px',position:'relative'}}>
                        <span style={{marginRight:'23px',position:'absolute',top:'0px'}}>促销活动说明：</span>
                        <textarea style={{width:'666px',position:'absolute',left:'125px'}}></textarea>
                    </div>

                    <div style={{marginTop:'100px'}}>
                        <span style={{marginRight:'5px'}}>促销享受限制：</span>
                        <Checkbox onChange={this.onChangedisplay}></Checkbox>每人可享受次数
                        
                    </div>

                    <div style={{marginTop:'10px'}}>
                        <span style={{marginRight:'5px'}}>促销使用券限制：</span>
                        <Checkbox onChange={this.onChangedisplay}></Checkbox>允许使用优惠券
                        
                    </div>


                    <div style={{marginTop:'20px', height:'100px'}}>
                        <Link to={{pathname:'/home/coupon/activity/Addactivitysecond',query:{type:this.state.activitytype}}}>
                            <div className='firststepbutton'>下一步</div>
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