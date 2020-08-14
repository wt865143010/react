import React, {Component} from 'react';
import {Button, Divider} from "antd";

class OrganizaForm extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <Divider orientation="left" >基本信息</Divider>
                    <div className='organizeBox'>
                        <table className='organize'  cellPadding='4' >
                            <tbody>
                            <tr>
                                <td>*组织编号：</td>
                                <td><input type="text"/></td>
                                <td>*父组织编号：</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td>*组织名称：</td>
                                <td><input type="text"/></td>
                                <td>*组织简称：</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td>*组织英文名称：</td>
                                <td><input type="text"/></td>
                                <td>社会信用代码：</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td>*组织等级：</td>
                                <td><input type="text"/></td>
                                <td>*组织排序：</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td>*组织类型：</td>
                                <td><input type="text"/></td>
                                <td>*服务区域：</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td>*所属直销大区：</td>
                                <td>
                                    <select name="" id="">
                                        <option value="">黑辽吉晋鲁</option>
                                        <option value="">京津冀</option>
                                        <option value="">粤桂琼闽</option>
                                        <option value="">湘鄂赣豫皖</option>
                                        <option value="">滇黔渝川藏</option>
                                    </select>
                                </td>
                                <td>直销分部名称：</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td>注册资本：</td>
                                <td><input type="text"/></td>
                                <td>员工数量：</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td>*组织地址：</td>
                                <td><input type="text"/></td>
                                <td colSpan='2' style={{textAlign:"left"}}><input type="text"  style={{width:'92%'}}/></td>
                                {/*<td></td>*/}
                            </tr>
                            <tr>
                                <td>法人姓名：</td>
                                <td><input type="text"/></td>
                                <td>法人身份证号码：</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td>公司电话：</td>
                                <td><input type="text"/></td>
                                <td>公司邮箱：</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td>传真：</td>
                                <td><input type="text"/></td>
                                <td><input type="checkbox"/></td>
                                <td>是否补偿门店</td>
                            </tr>
                            <tr>
                                <td>邮编：</td>
                                <td><input type="text"/></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='sureBtn'>
                        <Button type='primary' htmlType='submit'>确认</Button>
                        <Button htmlType='reset'>取消</Button>
                    </div>

                </form>
            </div>
        )
    }
}

export default OrganizaForm