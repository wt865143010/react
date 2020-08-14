import React, {Component} from 'react';
import './mycount.css'

class myOrder extends Component {
    render() {
        return (
            <div className='myOrder'>
                <h1>我的身份</h1>
                <h2>我现在的身份：<span>零售顾客</span></h2>
                <table className='tableA'>
                    <tbody>
                        <tr>
                            <td><strong>申请非全日制销售员工</strong></td>
                            <td>请到线下门店或通过NU合同签订非全日制销售员工劳动合同/劳务协议</td>
                        </tr>
                        <tr>
                            <td><strong>申请直销员</strong></td>
                            <td>直销员申请，培训考试后签订直销员推销合同，发放直销员证</td>
                        </tr>
                        <tr>
                            <td><strong>申请经销商</strong></td>
                            <td>经销商申请，审核通过后签订经销商合同</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        )
    }
}

export default myOrder