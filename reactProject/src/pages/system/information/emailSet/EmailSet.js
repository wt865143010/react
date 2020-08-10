import React, {Component} from 'react';
import {Button} from "antd";
import './emailSet.css'

class emailSet extends Component {
    render() {
        return (
            <div>
                <table className='tableEmail' cellPadding='10'>
                    <tbody>
                    <tr>
                        <td> 邮件发送模式：</td>
                        <td><input type="radio"/> SMTP发送</td>
                    </tr>
                    <tr>
                        <td> *发信人邮箱：</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>* SMTP服务器：</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>*  SMTP服务器端口：</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>SMTP用户身份验证：</td>
                        <td>
                            <input type="radio"/>开启 <input type="radio"/>关闭
                            开启后，SMTP服务器要求通过身份验证才可发送邮件
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2' style={{textAlign:'center'}}><Button>确认</Button></td>
                    </tr>
                    <tr>
                        <td>测试邮件模板：</td>
                        <td><span className='textE'>邮件主题</span><span className='textE'>这是一封测试邮件</span></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><span className='textE'>邮件正文</span><span className='textE'>test</span></td>
                    </tr>
                    <tr>
                        <td>测试接收邮箱：</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td colSpan='2' style={{textAlign:'center'}}><Button>开始测试</Button></td>
                    </tr>

                    </tbody>
                </table>




            </div>
        )
    }
}

export default emailSet