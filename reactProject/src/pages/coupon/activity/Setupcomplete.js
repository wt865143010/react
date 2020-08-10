import React, { Component } from 'react';
import './Setupcomplete.css'
import {Link} from 'react-router-dom'


class Setupcomplete extends Component {
    render() {
        return (
            <div className='setupcompletebox'>
                <div style={{height:'51px',marginTop:'40px',marginLeft:'20px'}} className='clearfix'>
                    <div  className='addstep'>1</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div className='addstep'>2</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div   className='addstep'>3</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div  className='addstep'>4</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div style={{background:'rgb(153,153,153)'}} className='addstep'>5</div>
                </div>
                <div style={{marginTop:'10px'}}>
                    <span style={{marginLeft:'19px'}} className='text1'>基本信息</span>
                    <span className='text1 jianju'>促销产品</span>
                    <span className='text1 jianju'>促销方案</span>
                    <span className='text1 jianju'>用户范围</span>
                    <span className='text1 jianju'>设置完成</span>
                </div>

                <div style={{color:'#333333',fontSize:'18px',fontWeight:'700',marginTop:'50px',marginBottom:'100px'}}>
                    活动已提供审批，审批通过后，可以发布并生效。
                </div>
                <div className='clearfix' style={{marginTop:'20px'}}>
               
                <Link to='/home/coupon/activity/Activitylist'>
                                <div className='secondbutton'>返回列表</div>
                            </Link>
                </div>
            </div>
        );
    }
}

export default Setupcomplete;