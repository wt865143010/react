import React, {Component} from 'react'
import './productDetail.css'

import {Button,Carousel } from "antd";

class productDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            myNum:1
        }
    }


    jian=()=>{
        this.setState({
            myNum:this.state.myNum-1
        })

        if(this.state.myNum==1){
            this.setState({
                myNum:1
            })
        }
    }


    addNum=()=>{
        this.setState({
            myNum:this.state.myNum+1
        })
    }
    render() {
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };
        function onChange(a, b, c) {
            // console.log(a, b, c);
        }
        return (
            <div className="theProductDetail">
                {/*<h1>产品详情</h1>*/}
                 <section>
                     <div className="theHead">
                         <div>
                             <span>首页 ></span>
                             <span>护肤 ></span>
                             <span>产品系列 ></span>
                             <span>荟萃善秀系列</span>
                         </div>
                     {/*图片详情部分*/}
                         <div className="myPic">
                             <div className="thePicture">
                                 {/*<img src="../../assets/images/homeProduct/ia_100000058.png" alt=""/>*/}
                                 <img src={require("../../assets/images/homeProduct/ia_100000058.png")} alt=""/>
                             </div>
                             {/*详细信息*/}
                             <div className="productDetail">
                                 <p>产品编号   29102711</p>
                                 <p>如新活水深层润泽面膜</p>
                                 <p>Creamy Hydrating Masque</p>
                                 <p>荟萃善秀系列</p>
                                 <p className="thediscount">优惠顾客价 ¥ 216.00 <span>(可优惠¥ 24.00)</span></p>
                                 <p className="thediscount">星级顾客价 ¥ 190.00 <span>(可优惠¥ 50.00)</span></p>
                                 <p ><span>零售顾客价</span> ￥240.00</p>
                                 <p><span className="cuxiao">促销活动</span>  <span className="manzeng">满赠</span>  <span>八月EXPO满额礼</span></p>
                                 <p className="addDel">
                                     <span onClick={this.jian.bind(this)}>-</span>
                                     <input type="text"  value={this.state.myNum} readOnly/>
                                     <span onClick={this.addNum.bind(this)}>＋</span>
                                 </p>
                                 <div className="myCart">
                                     <span className="car">
                                         <img src={require("../../assets/images/homeProduct/ia_100000131.png")} alt=""/>
                                     </span>加入购物车


                                 </div>
                                 <span className="myStore">
                                         <img src={require("../../assets/images/homeProduct/favicon.png")} alt=""/>
                                     </span>加入收藏夹
                             </div>
                             {/*右侧*/}
                             <div className="rightPic">
                                 <span>
                                    <img src={require("../../assets/images/homeProduct/ia_100000026.png")} alt=""/>
                                 </span>
                                 <p>更多素材</p>
                                 <span>
                                     <img src={require("../../assets/images/homeProduct/ia_100000027.png")} alt=""/>
                                 </span>
                                 <p>精选美文</p>
                             </div>
                         </div>
                         {/*小图展示*/}
                         <div className="smallPic">
                             <img src={require("../../assets/images/homeProduct/ia_100000058.png")} alt=""/>
                         </div>
                     </div>
                 </section>

                {/*轮播图*/}
                <section className="ssWiper">
                    <h1>推荐搭配</h1>
                    <Carousel  autoplay>
                        <div className="sswipp1">
                            <div className="theleft">
                                <img src={require("../../assets/images/homeProduct/ia_100000058.png")} alt=""/>
                            </div>
                            <div>
                                <p>如新柔润爽肤水</p>
                                <p>￥140</p>
                                <div className="swipperCart">
                                    {/*<span >*/}
                                         <img src={require("../../assets/images/homeProduct/ia_100000131.png")} alt=""/>加入购物车
                                     {/*</span> */}
                                </div>
                            </div>
                            {/*<h3 style={contentStyle}>1</h3>*/}
                        </div>
                        <div className="sswipp1">
                            {/*<h3 style={contentStyle}>2</h3>*/}
                            <div className="theleft">
                                <img src={require("../../assets/images/homeProduct/ia_100000043.jpg")} alt=""/>
                            </div>
                            <div>
                                <p>如新柔润爽肤水</p>
                                <p>￥140</p>
                                <div className="swipperCart">
                                    {/*<span >*/}
                                    <img src={require("../../assets/images/homeProduct/ia_100000131.png")} alt=""/>加入购物车
                                    {/*</span> */}
                                </div>
                            </div>
                        </div>
                        <div className="sswipp1">
                            {/*<h3 style={contentStyle}>3</h3>*/}
                            <div className="theleft">
                                <img src={require("../../assets/images/homeProduct/ia_100000060.jpg")} alt=""/>
                            </div>
                            <div>
                                <p>如新柔润爽肤水</p>
                                <p>￥140</p>
                                <div className="swipperCart">
                                    {/*<span >*/}
                                    <img src={require("../../assets/images/homeProduct/ia_100000131.png")} alt=""/>加入购物车
                                    {/*</span> */}
                                </div>
                            </div>
                        </div>
                        <div className="sswipp1">
                            {/*<h3 style={contentStyle}>4</h3>*/}
                            <div className="theleft">
                                <img src={require("../../assets/images/homeProduct/ia_100000049.jpg")} alt=""/>
                            </div>
                            <div>
                                <p>如新柔润爽肤水</p>
                                <p>￥140</p>
                                <div className="swipperCart">
                                    {/*<span >*/}
                                    <img src={require("../../assets/images/homeProduct/ia_100000131.png")} alt=""/>加入购物车
                                    {/*</span> */}
                                </div>
                            </div>
                        </div>
                    </Carousel>,
                </section>

                {/*产品描述*/}
                <section>
                    <div className="productTitile">
                        <p><span>产品详情:</span>
                            如新活水深层润泽面膜富含逆境植萃元，搭配仙人掌和松球果精华，满格的滋润力可为肌肤注入大量水分，有效缓解干燥，随心畅享滋润感受，令肌肤散发自然水润光泽。
                        </p>
                        <p>
                            <span>产品规格:</span>
                            100ml
                        </p>
                    </div>
                </section>

                {/*常见问题*/}
                <section className="theQ">
                    <h1>常见问题</h1>
                    <div className="userQuestion">

                        <div>
                            <img src={require("../../assets/images/homeProduct/Qpc.png")} alt=""/>
                        </div>
                        <div className="wordQ">
                            <h6>全新荟萃善秀系列可以帮皮肤增强适应能力，为何会有不同肌肤类型产品的区分？</h6>
                            <p>
                                不同的皮肤类型具有不同的先天需求。例如，油性皮肤的人通常更喜欢更清爽的保湿产品和更强的清洁产品；
                                干性皮肤的人通常会享受更滋润的乳霜和更温和的清洁产品。NUSKIN专门研发了满足不同消费者需求的产品，
                                全新荟萃善秀系列在核心成分、功能、包装方面进行了升级。每一支产品均加入“逆境植萃元”成分，
                                萃取5大逆境植物精萃，应对多变的环境与挑战，帮助您的皮肤适应各种环境，
                                并在多种环境下保持更佳状态。
                            </p>
                        </div>
                    </div>
                </section>

                {/*使用方法*/}
                <section className="theaction">
                    <h1>使用方法</h1>
                    <p>在清洁后的脸部和颈部均匀的敷上厚厚一层面膜，停留10分钟后用温水洗净。后续根据需要选用您喜爱的爽肤和保湿产品。</p>
                </section>

                {/*精选美文*/}
                <section className="selectBeauti">
                    <h1>精选美文</h1>
                    <div className="beauti1">
                        <span>1</span>
                        <span>涂抹式面膜怎么选？如新产品部同事大揭秘！</span>
                        <span>查看更多</span>
                        <img src={require("../../assets/images/homeProduct/link.png")} alt=""/>
                    </div>
                    <div className="beauti2">
                        <span>2</span>
                        <span>全新升级的周期护理产品，难道只有你还不知道？</span>
                        <span>查看更多</span>
                        <img src={require("../../assets/images/homeProduct/link.png")} alt=""/>
                    </div>
                </section>
            </div>
        )
    }
}

export default productDetail