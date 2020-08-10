import React, {Component} from 'react';
import './register.css'
import {Link} from "react-router-dom";
import {Modal} from  'antd'

class Register extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    arugement=()=>{
        let check=document.getElementById('argue').checked
        if (check){
            this.showModal()
        }
    }
    back=()=>{
        this.props.history.push('/login/Login')
    }
    render() {
        return (
            <div>
                <div className='BigBox'>
                   <div className='regHeader'>
                       <img src={require('../../assets/images/log.png')} alt=""/>
                       <span>欢迎注册</span>
                       <div>
                           已有账号？<Link to='/login/Login'>去登录</Link>
                       </div>
                   </div>
                    <div className='regBody'>
                        <form action="">
                            <div>手机号码</div>
                            <input type="text" placeholder='请输入手机号码'/>
                            <div>验证</div>
                            <input type="text" placeholder='验证码'/>
                            <img src={require('../../assets/images/verification.jpg')} alt=""/>
                            <span>换一张</span>
                            <div>手机短信验证</div>
                            <div>
                                <input type="text" placeholder='请输入手机验证码' className='phone'/>
                                <input type="button" value='获取验证码' className='btnPhone'/>
                            </div>
                            <div>设置密码</div>
                            <input type="text" placeholder='密码长度为6-20位字符，必须包含字母、数字、下划线'/>
                            <div>确认密码</div>
                            <input type="text" placeholder='请再次确认密码'/>  <br/>
                            <div className='argue'>
                                <input type="checkbox" onClick={this.arugement} id='argue'/>
                                <div>同意《如新用户注册协议》</div>
                            </div>
                            <input type="button" value='取消' onClick={this.back}/>
                            <input type="submit" value='下一步'/>
                        </form>
                    </div>
                </div>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    okText='同意'
                    cancelButtonProps={false}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}

export default Register
