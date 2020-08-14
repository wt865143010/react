import React, {Component} from 'react';
import './register.css'

class register extends Component {
    render() {
        return (
            <div className='register'>
                <h1>完善注册信息</h1>
                <div className='msgBox'>
                    <h3>现在完善您的信息，有机会获得更多优惠</h3>
                    <p>1. 满足一定条件即可成为星级顾客，尊享8折的购物价格。</p>
                    <p>2. 星级顾客有机会获得尊享专属优惠。</p>
                    <p>3. 成为en悦家会员，有机会尊享en悦家会员点数权益。</p>
                </div>
                <form action="">
                    <p>姓名*</p>
                    <input type="text" placeholder='请输入姓名'/>
                    <p>证件类型*</p>
                    <select name="" id="">
                        <option value="">身份证</option>
                        <option value="">护照</option>
                        <option value="">台湾居民来往大陆通行证</option>
                        <option value="">军官证</option>
                        <option value="">港澳居民来往内地通行证</option>
                    </select>
                    <p>证件号码*</p>
                    <input type="text" placeholder='请输入证件号码'/>
                    <p>证件号码确认*</p>
                    <input type="text" placeholder='请输入证件号码'/>
                    <p>您是如何认识如新（中国）的？（此项为市场调研资料,请填写其中一项）</p>
                    <input type="radio" name='realize'/>有介绍
                    <input type="radio" name='realize'/>无介绍
                    <input type="radio" name='realize'/>其他
                    <p>如新账号</p>
                    <input type="checkbox"/> 同意<span className='role'>《如新（中国）优惠顾客/星级顾客注册申请书 及en悦家会员点数获取规则》</span>
                    <div className='btnRegister'>
                        <button>暂不</button>
                        <button type='submit'>提交</button>
                    </div>


                </form>

            </div>
        )
    }
}

export default register