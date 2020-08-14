import React, {Component} from 'react';
import './setting.css'
import {Button} from "antd";

class setting4 extends Component {
    render() {
        return (
            <div>
                <form action="" method='post'>
                <table className='tableS'>
                    <tbody>
                        <tr>
                            <td><span>* </span>非直销产品限制：</td>
                            <td></td>
                            <td>
                                限购职级：
                                <input type="checkbox"  value="1" name="职级" className='inputyes'/> 职级1<span className='w10'></span>
                                <input type="checkbox"  value="2" name="职级" className='inputyes'/> 职级2<span className='w10'></span>
                                <input type="checkbox"  value="3" name="职级" className='inputyes'/> 职级3<span className='w10'></span>
                                <input type="checkbox"  value="more" name="职级" className='inputyes'/> ....<br/>
                                每人最多可购买 <input type='text' className="input2" name='pcs'/> 件/月
                            </td>
                        </tr>
                        <tr>
                            <td><span>* </span>是否可手动输入尊享代码</td>
                            <td></td>
                            <td>
                                <input type='checkbox' className="input1" value='1' name='zunXiangDaiMa'/>是
                                <input type='checkbox' className="input1" value='0' name='zunXiangDaiMa'/>否
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Button type="primary" className='btn' htmlType="submit">确认</Button>
                </form>

            </div>
        )
    }
}

export default setting4