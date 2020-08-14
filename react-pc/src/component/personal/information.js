import React, {Component} from 'react';
import './mycount.css'
class information extends Component {
    render() {
        return (
            <div className='personal'>
                <h1>个人信息</h1>
                <ul className='leftUl'>
                    <li>注册信息</li>
                    <li>账号密码</li>
                    <li>邮箱</li>
                    <li>手机</li>
                    <li>社交账号</li>
                    <li>.</li>
                    <li>.</li>
                    <li>.</li>
                    <li>ageLOC Me机器码</li>
                    <li>查看条款条例></li>
                </ul>
                <ul className='rightUl'>
                    <li>现在完善您的信息，有机会获得更多优惠</li>
                    <li>修改密码</li>
                    <li>绑定</li>
                    <li><span>185****8606</span> 修改</li>
                    <li>.</li>
                    <li><img src={require('../../assets/images/wechat.png')} alt=""/> 去绑定</li>
                    <li><img src={require('../../assets/images/sina.png')} alt=""/> 去绑定</li>
                    <li><img src={require('../../assets/images/qq.png')} alt=""/> 去绑定</li>
                    <li> 去绑定</li>
                </ul>

            </div>
        )
    }
}

export default information