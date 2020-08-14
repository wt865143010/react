import React, {Component} from 'react';
import {EnvironmentOutlined,SearchOutlined,UserOutlined,ShoppingCartOutlined} from '@ant-design/icons'
import './header.css'
import {Table} from "antd";
import {Link} from "react-router-dom";


class header extends Component {
    constructor() {
        super();
        this.state={
            username:'17828098852',
            userType:'零售顾客',
            myProduct:[
                {
                    id:1,
                    name:'ageLOC',
                    number:5,
                    price:'￥255'
                },
                {
                    id:2,
                    name:'防晒霜',
                    number:2,
                    price:'￥255'
                },
                {
                    id:3,
                    name:'爽肤水',
                    number:1,
                    price:'￥255'
                },
                {
                    id:4,
                    name:'卸妆水',
                    number:3,
                    price:'￥255'
                },

            ],

        }
    }

    goToCart=()=>{
        this.props.history.push('/')
    }
    render() {
        let arr=this.state.myProduct.map(item=>{
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.number}</td>
                    <td>{item.price}</td>
                </tr>
            )
        })
        return (
            <div className='homeHeader'>
                <div className='headerBody'>
                    <Link to='/home/Home/Index'><img src={require('../../assets/images/log.png')} alt=""/></Link>
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
                                    <div className='headerPersonalCenter'>
                                        <div>
                                            用户名{this.state.username}
                                        </div>
                                        <div>
                                            顾客类型{this.state.userType}
                                        </div>
                                        <button>
                                            <Link to='/home/Home/Personal1'>个人中心</Link>
                                            </button>
                                        <div>
                                            <Link to='/'>退出登陆</Link>
                                            </div>
                                    </div>
                                </div>
                                <div className='myCartBox'>
                                    <ShoppingCartOutlined style={{fontSize:'25px'}}/>
                                    购物车
                                    <div className='shopBox'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>我的购物车</td>
                                                    <td>数量</td>
                                                    <td>零售价格</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {arr}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td>共计0件商品</td>
                                                    <td></td>
                                                    <td>合计 ￥0</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <Link to={'/home/Home/buyCart'} >
                                        <input className='seeCart' type="button" value='查看购物车'/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='headerRightBottom'>
                            <ul>
                                <li className='ageLOC'>
                                    <div>王牌ageLOC</div>
                                    <div className='selBox'>
                                        <ul>
                                            <li>
                                                <Link to='/home/Home/AgeLOC2'>ageLOC LumiSpa</Link>
                                            </li>
                                            <li>
                                                <Link to='/home/Home/AgeLOC1'>ageLOC Spa</Link>
                                            </li>
                                            <li>
                                                <Link to='/home/Home/AgeLOC3'>ageLOC活颜抗老系列</Link>
                                            </li>
                                            <li>
                                                <Link to='/home/Home/AgeLOC4'>ageLOC焕新系列</Link>
                                            </li>
                                            <li>
                                                <Link to='/home/Home/AgeLOC5'>ageLOC R²</Link>
                                            </li>
                                            <li>
                                                <Link to='/home/Home/AgeLOC6'>ageLOC TR90(普通食品)</Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <Link to='/home/Home/AgeLOC7'>ageLOC Me</Link>
                                            </li>
                                            <li>
                                                <Link to='/home/Home/AgeLOC8'>ageLOC Nutriol</Link>
                                            </li>
                                            <li>
                                                <Link to='/home/Home/AgeLOC9'>ageLOC睛致按摩眼霜</Link>
                                            </li>
                                            <li>
                                                <Link to='/home/Home/AgeLOC10'>ageLOC精油系列</Link>
                                            </li>
                                            <li>
                                                <Link to='/home/Home/AgeLOC11'>ageLOC TR90(保健食品)</Link>
                                            </li>
                                            <li>
                                                <Link to='/home/Home/AgeLOC12'>ageLOC Boost</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='hufu'>
                                    <div>护肤</div>
                                    <div className='selBox1'>
                                        <div className='selBox1L'>
                                            <div>
                                                <ul>
                                                    {/*<li>清洁爽肤</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/qjsf",
                                                        query:{title:"清洁爽肤"}
                                                    }}>清洁爽肤</Link>
                                                    {/*<li>清洁</li>*/} <br/>
                                                    <Link to={{
                                                        pathname:"/home/Home/qj",
                                                        query:{title:"清洁"}
                                                    }}>清洁</Link>  <br/>
                                                    {/*<li>爽肤</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/sf",
                                                        query:{title:"爽肤"}
                                                    }}>爽肤</Link>   <br/>
                                                </ul>
                                                <ul>
                                                    {/*<li>面部精华</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/mbjh",
                                                        query:{title:"面部精华"}
                                                    }}>面部精华</Link>   <br/>
                                                    {/*<li>精华</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/jh",
                                                        query:{title:"精华"}
                                                    }}>精华</Link>   <br/>
                                                    {/*<li>精油</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/jy",
                                                        query:{title:"精油"}
                                                    }}>精油</Link>  <br/>
                                                </ul>
                                                <ul>
                                                    {/*<li>日夜乳霜</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/ryrs",
                                                        query:{title:"日夜乳霜"}
                                                    }}>日夜乳霜</Link>      <br/>
                                                    {/*<li>日间乳霜</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/rjrs",
                                                        query:{title:"日间乳霜"}
                                                    }}>日间乳霜</Link>   <br/>
                                                    {/*<li>夜间乳霜</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/yjrs",
                                                        query:{title:"夜间乳霜"}
                                                    }}>夜间乳霜</Link>  <br/>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul>
                                                    {/*<li>眼周呵护</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/yzhh",
                                                        query:{title:"眼周呵护"}
                                                    }}>眼周呵护</Link>  <br/>
                                                    {/*<li>眼霜</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/ys",
                                                        query:{title:"眼霜"}
                                                    }}>眼霜</Link>  <br/>
                                                    {/*<li>导头</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/dt",
                                                        query:{title:"导头"}
                                                    }}>导头</Link>   <br/>
                                                </ul>
                                                <ul>
                                                    {/*<li>面膜</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/mm",
                                                        query:{title:"面膜"}
                                                    }}>面膜</Link>    <br/>
                                                    {/*<li>涂抹式面膜</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/tmsmm",
                                                        query:{title:"涂抹式面膜"}
                                                    }}>涂抹式面膜</Link> <br/>
                                                    {/*<li>贴片面膜</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/tpmm",
                                                        query:{title:"贴片面膜"}
                                                    }}>贴片面膜</Link>   <br/>
                                                </ul>
                                                <ul>
                                                    {/*<li>防晒</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/fs",
                                                        query:{title:"防晒"}
                                                    }}>防晒</Link>  <br/>
                                                    {/*<li>防晒喷雾</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/fspw",
                                                        query:{title:"防晒喷雾"}
                                                    }}>防晒喷雾</Link>  <br/>
                                                    {/*<li>防晒乳</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/fsr",
                                                        query:{title:"防晒乳"}
                                                    }}>防晒乳</Link>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul>
                                                    {/*<li>修护精华</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/xhjh",
                                                        query:{title:"修护精华"}
                                                    }}>修护精华</Link>  <br/>
                                                    {/*<li>精华精油</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/jhjy",
                                                        query:{title:"精华精油"}
                                                    }}>精华精油</Link>
                                                </ul>
                                                <ul>
                                                    {/*<li>套装</li>*/}
                                                    <Link to={{
                                                        pathname:"/home/Home/tz",
                                                        query:{title:"套装"}
                                                    }}>套装</Link>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='selBox1R'>
                                            <ul>
                                                <li>产品系列</li>
                                                {/*<li>ageLOC LumiSpa</li>*/}
                                                <Link to={{
                                                    pathname:"/home/Home/age_Lumispa",
                                                    query:{title:"ageLOC LumiSpa"}
                                                }}>ageLOC LumiSpa</Link>   <br/>
                                                {/*<li>ageLOC焕新系列</li>*/}
                                                <Link to={{
                                                    pathname:"/home/Home/age_huanxin",
                                                    query:{title:"ageLOC焕新系列"}
                                                }}>ageLOC焕新系列</Link>  <br/>
                                                {/*<li>ageLOC睛致按摩眼霜</li>*/}
                                                <Link to={{
                                                    pathname:"/home/Home/age_yanzhi",
                                                    query:{title:"ageLOC睛致按摩眼霜"}
                                                }}>ageLOC睛致按摩眼霜</Link>  <br/>
                                                {/*<li>ageLOC精油系列</li>*/}
                                                <Link to={{
                                                    pathname:"/home/Home/age_jingyou",
                                                    query:{title:"ageLOC精油系列"}
                                                }}>ageLOC精油系列</Link>  <br/>
                                                {/*<li>Epoch系列</li>*/}
                                                <Link to={{
                                                    pathname:"/home/Home/epoch",
                                                    query:{title:"Epoch系列"}
                                                }}>Epoch系列</Link>     <br/>
                                                {/*<li>净肤系列</li>*/}
                                                <Link to={{
                                                    pathname:"/home/Home/jfxL",
                                                    query:{title:"净肤系列"}
                                                }}>净肤系列</Link>     <br/>
                                                {/*<li>周期保养系列</li>*/}
                                                <Link to={{
                                                    pathname:"/home/Home/zqby",
                                                    query:{title:"周期保养系列"}
                                                }}>周期保养系列</Link>   <br/>
                                                {/*<li>活颜抗老系列</li>*/}
                                                <Link to={{
                                                    pathname:"/home/Home/hykL",
                                                    query:{title:"活颜抗老系列"}
                                                }}>活颜抗老系列</Link>   <br/>
                                                {/*<li>滢透三效系列</li>*/}
                                                <Link to={{
                                                    pathname:"/home/Home/ytsx",
                                                    query:{title:"滢透三效系列"}
                                                }}>滢透三效系列</Link>    <br/>
                                                {/*<li>荟萃善秀系列</li>*/}
                                                <Link to={{
                                                    pathname:"/home/Home/hcsx",
                                                    query:{title:"荟萃善秀系列"}
                                                }}>荟萃善秀系列</Link> <br/>
                                                {/*<li>晒特丽防晒系列</li>*/}
                                                <Link to={{
                                                    pathname:"/home/Home/stLfs",
                                                    query:{title:"晒特丽防晒系列"}
                                                }}>晒特丽防晒系列</Link>
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
                                                    <li>
                                                        <Link to='/home/Home/BodyCare'>身体洗护</Link>
                                                    </li>
                                                    <li>身体清洁</li>
                                                    <li>身体滋润</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link to='/home/Home/Hair'>头发洗护</Link>
                                                    </li>
                                                    <li>造型</li>
                                                    <li>洗发</li>
                                                    <li>护发</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link to='/home/Home/Other'>其他</Link>
                                                    </li>
                                                    <li>口腔清洁</li>
                                                    <li>唇部滋润</li>
                                                    <li>手部清洁护理</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul>
                                                    <li>
                                                        <Link to='/home/Home/Body'>身体防晒</Link>
                                                    </li>
                                                    <li>防晒喷雾</li>
                                                    <li>防晒乳</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='selBox2R'>
                                            <ul>
                                                <li>产品系列</li>
                                                <li>
                                                    <Link to='/home/Home/Oil'>ageLOC精油系列</Link>
                                                </li>
                                                <li>
                                                    <Link to='/home/Home/EpochI'>Epoch系列</Link>
                                                </li>
                                                <li>
                                                    <Link to='/home/Home/Siang'>丝昂系列</Link>
                                                </li>
                                                <li>
                                                    <Link to='/home/Home/BodyCareLis'>身体护理系列</Link>
                                                </li>
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
                                                    <li>
                                                        <Link to={{pathname:'/home/Home/MakePage1',query:{title:'粉底液'}}}>粉底液</Link>
                                                    </li>
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
                                                <li>
                                                    <Link to='/home/Home/yingYang'>基础营养</Link>
                                                </li>
                                                <li>
                                                    <Link to='/home/Home/baoJianPing'>保健食品</Link>
                                                </li>
                                                <li>保健食品</li>
                                            </ul>
                                            <ul>
                                                <li>自我保健</li>
                                                <li><Link to='/home/Home/Jiangdixuezhi'>辅助降血脂</Link></li>
                                                <li><Link to='/home/Home/Jiyili'>改善记忆力</Link></li>
                                                <li><Link to='/home/Home/Mianyili'>调节免疫力</Link></li>
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
                                                    <li><Link to='/home/Home/yiqianuan'>1000元以下</Link></li>
                                                </ul>
                                                <ul>
                                                    <li><Link  to='/home/Home/yiqianuan1'>1000元-1999元</Link></li>
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

            </div>
        )
    }
}

export default header
