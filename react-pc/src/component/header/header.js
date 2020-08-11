import React, {Component} from 'react';
import {EnvironmentOutlined,SearchOutlined,UserOutlined,ShoppingCartOutlined} from '@ant-design/icons'
import './header.css'


class header extends Component {
    constructor() {
        super();
        this.state={
            username:'17828098852',
            userType:'零售顾客'
        }
    }
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
                                <div className='person'>
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
                                <li className='hufu'>
                                    <div>护肤</div>
                                    <div className='selBox1'>
                                        <div className='selBox1L'>
                                            <div>
                                                <ul>
                                                    <li>清洁爽肤</li>
                                                    <li>清洁</li>
                                                    <li>爽肤</li>
                                                </ul>
                                                <ul>
                                                    <li>面部精华</li>
                                                    <li>精华</li>
                                                    <li>精油</li>
                                                </ul>
                                                <ul>
                                                    <li>日夜乳霜</li>
                                                    <li>日间乳霜</li>
                                                    <li>夜间乳霜</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul>
                                                    <li>眼周呵护</li>
                                                    <li>眼霜</li>
                                                    <li>导头</li>
                                                </ul>
                                                <ul>
                                                    <li>面膜</li>
                                                    <li>涂抹式面膜</li>
                                                    <li>贴片面膜</li>
                                                </ul>
                                                <ul>
                                                    <li>防晒</li>
                                                    <li>防晒喷雾</li>
                                                    <li>防晒乳</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul>
                                                    <li>修护精华</li>
                                                    <li>精华精油</li>
                                                </ul>
                                                <ul>
                                                    <li>套装</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='selBox1R'>
                                            <ul>
                                                <li>产品系列</li>
                                                <li>ageLOC LumiSpa</li>
                                                <li>ageLOC焕新系列</li>
                                                <li>ageLOC睛致按摩眼霜</li>
                                                <li>ageLOC精油系列</li>
                                                <li>Epoch系列</li>
                                                <li>净肤系列</li>
                                                <li>周期保养系列</li>
                                                <li>活颜抗老系列</li>
                                                <li>滢透三效系列</li>
                                                <li>荟萃善秀系列</li>
                                                <li>晒特丽防晒系列</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='nursing'>
                                    <div>身体护理</div>
                                    <div className='selBox2'>
                                        <div className='selBox2L'>
                                            <div>
                                                <ul>
                                                    <li>身体洗护</li>
                                                    <li>身体清洁</li>
                                                    <li>身体滋润</li>
                                                </ul>
                                                <ul>
                                                    <li>头发洗护</li>
                                                    <li>造型</li>
                                                    <li>洗发</li>
                                                    <li>护发</li>
                                                </ul>
                                                <ul>
                                                    <li>其他</li>
                                                    <li>口腔清洁</li>
                                                    <li>唇部滋润</li>
                                                    <li>手部清洁护理</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul>
                                                    <li>身体防晒</li>
                                                    <li>防晒喷雾</li>
                                                    <li>防晒乳</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='selBox2R'>
                                            <ul>
                                                <li>产品系列</li>
                                                <li>ageLOC精油系列</li>
                                                <li>Epoch系列</li>
                                                <li>丝昂系列</li>
                                                <li>身体护理系列</li>
                                                <li>晒特丽防晒系列</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='NARS'>
                                    <div>彩妆</div>
                                    <div className='selBox3'>
                                        <div className='selBox3L'>
                                            <div>
                                                <ul>
                                                    <li>面部底妆</li>
                                                    <li>粉底液</li>
                                                    <li>粉饼蜜粉</li>
                                                </ul>
                                                <ul>
                                                    <li>唇部彩妆</li>
                                                    <li>唇膏</li>
                                                    <li>唇彩</li>
                                                </ul>
                                                <ul>
                                                    <li>眼部彩妆</li>
                                                    <li>睫毛膏</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul>
                                                    <li>卸妆</li>
                                                    <li>卸妆乳</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='selBox3R'>
                                            <ul>
                                                <li>产品系列</li>
                                                <li>凝韵系列</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='Nutrition'>
                                    <div>营养健康</div>
                                    <div className='selBox4'>
                                        <div className='selBox4L'>
                                            <ul>
                                                <li>基础营养</li>
                                                <li>保健食品</li>
                                                <li>保健食品</li>
                                            </ul>
                                            <ul>
                                                <li>自我保健</li>
                                                <li>辅助降血脂</li>
                                                <li>改善记忆力</li>
                                                <li>调节免疫力</li>
                                                <li>抗疲劳</li>
                                                <li>抗氧化</li>
                                            </ul>
                                            <ul>
                                                <li>健康生活系列</li>
                                            </ul>
                                        </div>
                                        <div className='selBox4R'>
                                            <ul>
                                                <li>产品系列</li>
                                                <li>基础营养系列</li>
                                                <li>自我保健系列</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='suit'>
                                    <div>套装专区</div>
                                    <div className='selBox5'>
                                        <div className='selBox5L'>
                                            <div>
                                                <ul>
                                                    <li>1000元以下</li>
                                                </ul>
                                                <ul>
                                                    <li>1000元-1999元</li>
                                                </ul>
                                                <ul>
                                                    <li>2000元-4999元</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul>
                                                    <li>5000元-9999元</li>
                                                </ul>
                                                <ul>
                                                    <li>10000元以上</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='selBox5R'>

                                        </div>
                                    </div>
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
                                <li className='Discover_more'>
                                    <div>发现更多</div>
                                    <div className='selBox6'>
                                        <div className='selBox6L'>
                                            <div>
                                                <ul>
                                                    <li> 蜜儿餐</li>
                                                    <li> 蜜儿餐（捐赠）</li>
                                                    <li>蜜儿餐（捐赠）</li>
                                                </ul>
                                                <ul>
                                                    <li> 积分商城</li>
                                                    <li> 积分商城</li>
                                                </ul>
                                                <ul>
                                                    <li> 星级顾客购物计划</li>
                                                    <li> 星级顾客购物计划</li>
                                                </ul>
                                                <ul>
                                                    <li> 成分百科&学术专区</li>
                                                    <li> 成分小百科</li>
                                                    <li> 学术专区</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul>
                                                    <li> 产品相关</li>
                                                    <li> 产品手册</li>
                                                    <li> S3生物光子扫描仪</li>
                                                </ul>
                                                <ul>
                                                    <li> 预约参观</li>
                                                    <li> 预约如新大中华创新总部园区</li>
                                                    <li> 预约华茂保健品生产基地</li>
                                                </ul>
                                                <ul>
                                                    <li> 活动专区</li>
                                                </ul>
                                                <ul>
                                                    <li> 我的尊享优惠</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='selBox6R'>

                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='headerPersonalCenter'>
                    <div>
                        用户名{this.state.username}
                    </div>
                    <div>
                        顾客类型{this.state.userType}
                    </div>
                    <button>个人中心</button>
                    <div>退出登陆</div>
                </div>
            </div>
        )
    }
}

export default header
