import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {

    render() {
        return (
            <div>
                <div className='footerDiv'>
                    <div className='leftDiv'>
                        <div>
                            <ul>
                                <li><h2>公司信息</h2></li>
                                <li>加入事业</li>
                                <li>关于如新</li>
                                <li>新闻中心</li>
                                <li>公司公告</li>
                                <li>慈善事业</li>
                                <li>时尚物业</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><h2>帮助</h2></li>
                                <li>掌上如新</li>
                                <li>联系我们</li>
                                <li>查询店铺</li>
                                <li>防伪查询</li>
                                <li>售后服务</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><h2>其他</h2></li>
                                <li>合作方网站</li>
                                <li>员工招聘</li>
                                <li>集团官网</li>
                                <li>NU 酷</li>
                            </ul>
                        </div>

                    </div>
                    <div className='rightDiv'>
                        <div className='rightBox'>
                            <h1>关注我们</h1>
                            <div className='imgBox'>
                                <img src={require("../../assets/images/icon1.png")} title="weibo"/>
                                <img src={require("../../assets/images/icon2.png")} title="wechat" />
                                <img src={require("../../assets/images/icon4.png")} title="NU 酷"/>
                            </div>
                            <hr/>
                            <h2>全球市场</h2>

                        </div>


                    </div>

                </div>


            </div>
        )
    }
}

export default Footer