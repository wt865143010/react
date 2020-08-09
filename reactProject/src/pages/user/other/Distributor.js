import React, {Component} from 'react';
import {inject,observer} from "mobx-react";
import './distributor.css'
import logo from '../../../static/logo.jpg'
import {Link} from "react-router-dom";

@inject('user')
@observer
class Distributor extends Component {
    constructor() {
        super();
        this.state={
            info:[],
            bankNews:[],
            shareholder:[]
        }
    }
    componentWillMount() {
        let user_cartId=this.props.location.query.user_cartId;
        this.props.user.getdistributorNews({user_cartId:user_cartId})
            .then(data=>{
                this.setState({
                    info:this.props.user.distributor.info[0],
                    bankNews:this.props.user.distributor.bankNews[0],
                    shareholder:this.props.user.distributor.shareholder[0]
                })
            })
        console.log(this.distributorArr)
    }

    render() {
        return (
            <div>
                <div className='nav'>
                    <span>商城管理系统</span><span>></span>
                    <Link to='/home/user/UserList'>用户列表</Link><span>></span>
                    <Link to={{pathname:'/home/usernews',query:{user_cartId:this.props.location.query.user_cartId}}}>用户详情</Link><span>></span>
                    <span>经销商详情</span>
                </div>
                <strong className='Title'>经销商信息</strong>
                <div>
                    {/*基本信息*/}
                    <strong className='DisTitle'>基本信息</strong>
                    <div className='infoBox'>
                        <table  width="100%" border="0" cellSpacing="0" cellPadding="0" >
                            <tbody>
                            <tr height='30px'>
                                <td width='33%'>卡号：{this.state.info.cart_Id}</td>
                                <td width='33%'>性别：{this.state.info.sex}</td>
                                <td width='33%'>用户名：{this.state.info.name}</td>
                            </tr>
                            <tr height='30px'>
                                <td>身份证：{this.state.info.cartID}</td>
                                <td>商号负责人/法定代表人：{this.state.info.person}</td>
                                <td>婚姻状况 ：{this.state.info.ismarriage}</td>
                            </tr>
                            <tr height='30px'>
                                <td>营业执照登记的注册地址：{this.state.info.business_address}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr height='30px'>
                                <td>经营场所是否与注册地址一致：{this.state.info.isequally_add}</td>
                                <td>是否已取得《食品流通许可证》：{this.state.info.isgain}</td>
                                <td>是否已取得《保健食品经营许可证》：{this.state.info.isgain1}</td>
                            </tr>
                            <tr height='30px'>
                                <td>配偶姓名：{this.state.info.spouse_name}</td>
                                <td>配偶身份证号 ：{this.state.info.spouse_id}</td>
                                <td>纳税人识别号 ：{this.state.info.taxpayer_id}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*//营业执照*/}
                    <strong className='DisTitle'>营业执照</strong>
                    <div className='infoBox'>
                        <img src={logo} alt=""/>
                    </div>
                    {/*商户银行账户资料*/}
                    <strong className='DisTitle'>商户银行账户资料</strong>
                    <div className='infoBox'>
                        <table  width="100%" border="0" cellSpacing="0" cellPadding="0" >
                            <tbody>
                            <tr height='30px'>
                                <td width='33%'>商户银行账号：{this.state.bankNews.bank_account}</td>
                                <td width='33%'>开户省：{this.state.bankNews.province}</td>
                                <td width='33%'>开户市：{this.state.bankNews.city}</td>
                            </tr>
                            <tr height='30px'>
                                <td>开户行：{this.state.bankNews.bank}</td>
                                <td>户名：{this.state.bankNews.bank_name}</td>
                                <td>商号名称：{this.state.bankNews.distributor_name}</td>
                            </tr>
                            <tr height='30px'>
                                <td>联系地址：{this.state.bankNews.address}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr height='30px'>
                                <td>邮政编码 ：{this.state.bankNews.postal_code}</td>
                                <td>手机：{this.state.bankNews.phone}</td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*股东*/}
                    <strong className='DisTitle'>股东</strong>
                    <div className='infoBox'>
                        <table  width="100%" border="0" cellSpacing="0" cellPadding="0" >
                            <tbody>
                            <tr height='30px'>
                                <td width='50%'>股东：{this.state.shareholder.shareholder_name}</td>
                                <td width='50%'>身份证：{this.state.shareholder.shareholder_cartId}</td>
                            </tr>
                           
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Distributor
