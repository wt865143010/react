import React, {Component} from 'react';
import './setting.css'
import {Button} from "antd";
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class setting3 extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <form action="" method='post'>
                    {/*<ReactHTMLTableToExcel*/}
                    {/*    id="test-table-xls-button"*/}
                    {/*    className="download-table-xls-button"*/}
                    {/*    table="table-to-xls"*/}
                    {/*    filename="tablexls"*/}
                    {/*    sheet="tablexls"*/}
                    {/*    buttonText="Download as XLS"/>*/}
                <table className='tableS' id='table-to-xls'>
                    <tbody>
                    <tr>
                        <td><span>* </span>订单关闭设置：</td>
                        <td></td>
                        <td>订单提交后，<input type='text' className="input1" name='minute1'/> 分钟后未支付，系统自动关闭订单。</td>
                    </tr>
                    <tr>
                        <td><span>* </span>订单取消设置：</td>
                        <td></td>
                        <td>订单支付后，<input type='text' className="input1" name='minute2'/> 分钟内可手工取消订单。</td>

                    </tr>
                    <tr>
                        <td><span>* </span>订单中单品数量上限设置：</td>
                        <td></td>
                        <td>一笔订单中，某个单品数量上限为 <input type='text' className="input2" name='pcs'/> 件</td>

                    </tr>
                    <tr>
                        <td><span>* </span>星级门槛金额：</td>
                        <td></td>
                        <td>门槛金额 <input type='text' className="input3" name='yuan1'/> 元</td>
                    </tr>
                    <tr>
                        <td>星级门槛优惠对象：</td>
                        <td></td>
                        <td><input type="checkbox"  value="1" name="card" className='inputyes'/> 有卡用户
                            <p className='w50'></p>
                            <input type="checkbox"  value="0" name="card" className='inputyes'/> 无卡用户
                        </td>
                    </tr>
                    <tr>
                        <td><span>* </span>订单运费：</td>
                        <td></td>
                        <td>单笔订单运费 <input type='text' className="input3" name='yuan2'/> 元</td>
                    </tr>
                    <tr>
                        <td>允许时尚店自提：</td>
                        <td></td>
                        <td><input type="checkbox"  value="ziTi" name="1" className='inputyes'/> 是</td>
                    </tr>
                    <tr>
                        <td>绑定手机号才可订单：</td>
                        <td></td>
                        <td><input type="checkbox"  value="ziTi" name="1" className='inputyes'/> 是</td>
                    </tr>
                    <tr>
                        <td><span>* </span>订单编号初始号段：</td>
                        <td></td>
                        <td> <input type='text' className='input2' name='number1'/> <input type='text' className='input4' name='number2'/></td>
                    </tr>
                    <tr>
                        <td><span>* </span>订单交易编号初始号段：</td>
                        <td></td>
                        <td> <input type='text' className='input2' name='dealNum1'/> <input type='text' className='input4' name='dealNum2'/></td>
                    </tr>
                    <tr>
                        <td><span>* </span>拆分包裹编号初始号段：</td>
                        <td></td>
                        <td> <input type='text' className='input2' name='pack1'/> <input type='text' className='input4' name='pack2'/></td>
                    </tr>
                    </tbody>
                </table>
                <Button type="primary" className='btn' htmlType="submit">确认</Button>
                </form>
            </div>
        )
    }
}

export default setting3