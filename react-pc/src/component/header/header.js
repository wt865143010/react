import React, {Component} from 'react';
import {EnvironmentOutlined,SearchOutlined,UserOutlined,ShoppingCartOutlined} from '@ant-design/icons'
import './header.css'


class header extends Component {
    render() {
        return (
            <div className='homeHeader'>
                <div className='headerBody'>
                    <img src={require('../../assets/images/log.png')} alt=""/>
                    <div className='headerR'>
                        <div className='headerRightTop'>
                            <div>
                                <div>
                                    <EnvironmentOutlined />
                                    上海
                                </div>
                                <div>|</div>
                                <div>产品目录</div>
                                <div>|</div>
                                <div>加入事业</div>
                                <div>|</div>
                                <div>店铺查询</div>
                                <div>|</div>
                                <div>NU酷</div>
                            </div>
                            <div className='headerRightTopUser'>
                                <div>
                                    <SearchOutlined style={{fontSize:'25px'}}/>
                                </div>
                                <div>
                                    <UserOutlined style={{fontSize:'25px'}}/>
                                </div>
                                <div>
                                    <ShoppingCartOutlined style={{fontSize:'25px'}}/>
                                    购物车
                                </div>
                            </div>
                        </div>
                        <div className='headerRightBottom'>
                            <ul>
                                <li>王牌ageLOC</li>
                                <li>护肤</li>
                                <li>身体护理</li>
                                <li>彩妆</li>
                                <li>营养健康</li>
                                <li>套装专区</li>
                                <li>促销专区</li>
                                <li>en悦家</li>
                                <li>善的力量</li>
                                <li>发现更多</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default header
