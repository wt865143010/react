import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './addpay.css'
import {inject,observer} from "mobx-react";

@inject('system')
@observer
class addPay extends Component {
    constructor() {
        super();
        this.state={
            item:[]
        }
    }
    componentWillMount() {

        let query=this.props.location.query
        console.log(query)
        if (query!==undefined&&query.item!==''){
            this.setState({
                item:query.item
            })
        }
    }

    save=()=>{
        console.log(this.payType.value)
        console.log(this.payName.value)
        let query=this.props.location.query
        if (query!==undefined&&query.item!==''){
            let newobj={
                paymentType:this.payType.value,
                paymentName:this.payName.value,
                id:query.item.id
            }
            this.props.system.eidtPay(newobj)
                .then(data=>{
                    this.props.history.push("/home/system/payment/PayList")
                })
        }else {
            this.props.system.addPay({
                paymentType:this.payType.value,
                paymentName:this.payName.value,
                username:'admin',
            })
                .then(data=>{
                    this.props.history.push("/home/system/payment/PayList")
                })
        }
    }
    Back=()=>{
        this.props.history.push("/home/system/payment/PayList")
    }
    render() {
        return (
            <div>
                <div className='nav'>
                    <span>商城管理系统</span><span>></span>
                    <span>系统管理</span><span>></span>
                    <span>支付设置</span><span>></span>
                    <Link to='system/payment/PayList'>支付方式列表</Link><span>></span>
                    <span>新增支付</span>
                </div>
                <div>
                    <div className='box1'>
                        *支付接口类型：
                        <select name="" id="" ref={payType=>this.payType=payType} defaultValue={this.state.item.paymentType}>
                            <option value="">请选择接口类型</option>
                            <option value="支付宝扫码支付">支付宝扫码支付</option>
                            <option value="微信扫码支付">微信扫码支付</option>
                            <option value="积分">积分</option>
                            <option value="银行卡">银行卡</option>
                        </select>
                    </div>
                    <div className='box2'>
                        *支付方式名称：
                        <input
                            type="text"
                            placeholder='名称不能为空'
                            defaultValue={this.state.item.paymentName}
                        ref={payName=>this.payName=payName}/>
                    </div>
                    <div className='box3'>
                        <input type="button" value='确认' onClick={this.save}/>
                    </div>
                    <input type="button" value='取消' className='btn' onClick={this.Back}/>
                </div>
            </div>
        )
    }
}

export default addPay
