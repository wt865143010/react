import React, {Component} from 'react';
import "./setting.css";
import { Button } from 'antd';

class setting2 extends Component {
    setproblem(){
        let pText=document.getElementById('checkYes').style.display;
        if (pText==='none'||pText===''){
            document.getElementById('checkYes').style.display='inline-block'
        }
        else{
            document.getElementById('checkYes').style.display='none'
        }
    };

    render() {
        return (
            <div>
                <form action="" method='post'>
                <table className='tableS'>
                    <tbody>
                    <tr>
                        <td>找回密码是否需要回答问题：</td>
                        <td></td>
                        <td><input type="checkbox"  value="1" name="answer" className='inputyes' onChange={this.setproblem}/> 是
                            <p id='checkYes'> 回答问题时，需要正确回答三个问题中几个： <input type='text' className='input2' name='questionNum'/>
                            <span id='numberQ'>必须填写1~3数字</span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>登录是否需要图型验证码：</td>
                        <td></td>
                        <td><input type="checkbox"  value="1" name="yanZhengMa" className='inputyes'/> 是</td>

                    </tr>
                    <tr>
                        <td><span>* </span>自动锁定用户设置：</td>
                        <td></td>
                        <td>当天连续输入 <input type='text' className="input1" name='times'/> 次错误密码，自动锁定用户。</td>

                    </tr>
                    <tr>
                        <td><span>* </span>锁定后自动解锁时间：</td>
                        <td></td>
                        <td><input type='text' className="input1" name='hour'/> 小时</td>
                    </tr>
                    <tr>
                        <td><span>* </span>手机验证码的有效时间：</td>
                        <td></td>
                        <td><input type='text' className="input1" name='minute'/> 分钟</td>
                    </tr>
                    <tr>
                        <td><span>* </span> 可重发手机验证码时间：</td>
                        <td></td>
                        <td><input type='text' className="input1" name='second'/> 秒后</td>
                    </tr>
                    <tr>
                        <td><span>* </span>每个账号验证手机号码：</td>
                        <td></td>
                        <td>需要每 <input type='text' className='input2' name='day'/> 天验证一次，在此期间，如果有业务已验证过该手机，就从该验证时间算起。</td>
                    </tr>
                    </tbody>
                </table>
                    <Button type="primary" htmlType="submit" className='btn'>确认</Button>
                </form>
            </div>
        )
    }
}

export default setting2