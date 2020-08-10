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
                                <li className='ageLOC'>
                                    <div>王牌ageLOC</div>
                                    <div className='selBox'>
                                        <ul>
                                            <li>ageLOC LumiSpa</li>
                                            <li>ageLOC Spa</li>
                                            <li>ageLOC活颜抗老系列</li>
                                            <li>ageLOC焕新系列</li>
                                            <li>ageLOC R²</li>
                                            <li>ageLOC TR90(普通食品)</li>
                                        </ul>
                                        <ul>
                                            <li>ageLOC Me</li>
                                            <li>ageLOC Nutriol</li>
                                            <li>ageLOC睛致按摩眼霜</li>
                                            <li>ageLOC精油系列</li>
                                            <li>ageLOC TR90(保健食品)</li>
                                            <li>ageLOC Boost</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div>护肤</div>
                                </li>
                                <li>
                                    <div>身体护理</div>
                                </li>
                                <li>
                                    <div>彩妆</div>
                                </li>
                                <li>
                                    <div>养健康</div>
                                </li>
                                <li>
                                    <div>套装专区</div>
                                </li>
                                <li>
                                    <div>促销专区</div>
                                </li>
                                <li>
                                    <div>en悦家</div>
                                </li>
                                <li>
                                    <div>善的力量</div>
                                </li>
                                <li>
                                    <div>发现更多</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default header
