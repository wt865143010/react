import React, {Component} from 'react'
import './PersonalInfo.css'

class PersonalInfo extends Component {
    render() {
        return (
            <div className={"PersonalInfo"}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h1 style={{fontWeight:"bold"}}>个人信息</h1>
                </div>
                <div style={{
                    marginTop:'30px'
                }}>
                    <table>
                        <tbody>
                            <tr>
                                <td>注册信息</td>
                                <td><span>现在完善你的信息，有机会获得更多优惠</span></td>
                            </tr>
                            <tr>
                                <td>账号密码</td>
                                <td>修改密码</td>
                            </tr>
                            <tr>
                                <td>邮箱</td>
                                <td>绑定</td>
                            </tr>
                            <tr>
                                <td>手机</td>
                                <td><span style={{color:"black"}}>137****27</span><span> 修改</span>  </td>
                            </tr>
                            <tr>
                                <td>社交账号</td>
                                <td>
                                    <p>微信</p>
                                    <p>QQ</p>
                                    <p>微博</p>
                                </td>
                            </tr>
                            <tr>
                                <td>ageLOC Me机器码</td>
                                <td>去绑定</td>
                            </tr>
                            <tr>
                                <td style={{color:"#00A0AF",fontSize:"12px" }}>查看条款管理></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default PersonalInfo
