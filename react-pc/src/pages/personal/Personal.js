import React, {Component} from 'react'
import './a.css'

class Personal extends Component {
    render() {
        return (
            <div>
                <div className={"btn"}>
                    <span style={{marginLeft: "40%",}}>en悦家会员点数抵扣除外的产品名单</span>
                    <span style={{marginLeft: "40%", fontSize: 30}} onClick={this.Close}>×</span>
                </div>
                <div>
                    <span>首页></span>
                    <span onClick={this.toA}>购物车></span>
                    <span onClick={this.toPersonal1}>个人中心></span>
                    <span>我的账号></span>
                    <span>个人信息</span>
                </div>
                <div>
                    <ul className={"myul"} >
                        <li style={{fontWeight:"bold"}}>交易管理</li>
                        <li className={"li"}>我的订单</li>
                        <li>我的优惠券</li>
                        <li>en悦家</li>
                        <li>ageLOC me</li>
                        <li>收货地址</li>
                        <li>发票管理</li>
                        <li>预约中心</li>
                        <li style={{fontWeight:"bold"}}>我的事业</li>
                        <li>NU 酷</li>
                        <li style={{fontWeight:"bold"}}>我的账户</li>
                        <li>个人信息</li>
                        <li>我的身份</li>
                        <li>我的消息</li>
                        <li>我的收藏</li>
                        <li>我的积分</li>
                    </ul>
                    <div>
                        <ul>
                            <li>个人信息</li>
                            <li>注册信息</li>
                            <li>账号密码</li>
                            <li>邮箱</li>
                            <li>手机</li>
                            <li>社交账号</li>
                        </ul>
                    </div>
                </div>
                

            </div>
        )
    }
    toPersonal1=()=>{
        this.props.history.push("/home/Home/Personal1")
    }
}

export default Personal
