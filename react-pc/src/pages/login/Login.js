import React, {Component} from 'react';
import { Tabs, Radio } from 'antd';
import './login.css'
import Footer from "../../component/footer/Footer";
import {Link} from "react-router-dom";

const { TabPane } = Tabs;




    
class Login extends Component {

    register=()=>{
        this.props.history.push('/login/Register')
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <img src={require('../../assets/images/log.png')} alt="" className='logImg'/>
                    <strong className='wel'>欢迎登录</strong>
                    <div className='headerR'>
                        <span>
                            <Link to='/home/Home'>返回主页</Link>
                        </span>|
                        <span>终止卡号激活</span>|
                        <span>开通服务密码</span>
                    </div>
                </div>
                <img src={require('../../assets/images/loginImg.jpg')} alt="" className='logBg'/>
                <div className='loginBox'>
                    <Tabs defaultActiveKey="1" type="line" size='large'>
                        <TabPane tab="账号登录" key="1" >
                            <div className='loginL'>
                                <form action="">
                                    <input type="text" placeholder='CN号/证件号/手机号/邮箱'/>  <br/>
                                    <input type="text" placeholder='密码'/>
                                    <div>忘记密码？</div>
                                    <div>
                                        <input type="submit" value='登录'/>
                                        <input type="button" value='立即注册' onClick={this.register}/>
                                    </div>
                                    <div>
                                        <span>社交账号登录</span>
                                        <img src={require('../../assets/images/wechat.png')} alt=""/>
                                        <img src={require('../../assets/images/sina.png')} alt=""/>
                                        <img src={require('../../assets/images/qq.png')} alt=""/>
                                    </div>
                                </form>
                            </div>
                        </TabPane>
                        <TabPane tab="手机验证码登录" key="2">
                            <div className='loginR'>
                                <form action="">
                                    <input type="text" placeholder='请输入手机号'/>
                                    <div>
                                        <input type="text" placeholder='请输入手机验证码'/>
                                        <input type="button" value='获取验证码'/>
                                    </div>
                                    <div>忘记密码？</div>
                                    <div>
                                        <input type="submit" value='登录'/>
                                        <input type="button" value='立即注册' onClick={this.register}/>
                                    </div>
                                    <div>
                                        <span>社交账号登录</span>
                                        <img src={require('../../assets/images/wechat.png')} alt=""/>
                                        <img src={require('../../assets/images/sina.png')} alt=""/>
                                        <img src={require('../../assets/images/qq.png')} alt=""/>
                                    </div>
                                </form>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Login
