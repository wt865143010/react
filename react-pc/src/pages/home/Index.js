import React, {Component} from 'react';
import './index.css'
import Rotation from "../../component/Rotation";
import ShowProduct from "../../component/showProduct/ShowProduct";
import a1 from '../../assets/images/a1.jpg'
import a2 from '../../assets/images/a2.jpg'
import a3 from '../../assets/images/a3.jpg'
import a4 from '../../assets/images/a4.jpg'
import a5 from '../../assets/images/a5.jpg'
import a6 from '../../assets/images/a6.jpg'
import a7 from '../../assets/images/a7.jpg'
import a8 from '../../assets/images/a8.jpg'
import s8 from '../../assets/images/s8.jpg'

class Index extends Component {
    constructor() {
        super();
        this.state={
            arr1:[
                {
                    id:1,
                    PicPath:'s1.jpg',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
                {
                    id:2,
                    PicPath:'s3.jpg',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
                {
                    id:3,
                    PicPath:'s5.jpg',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
                {
                    id:4,
                    PicPath:'s7.jpg',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
            ],
            arr2:[
                {
                    id:1,
                    PicPath:'s8.jpg',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
                {
                    id:2,
                    PicPath:'s9.jpg',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
                {
                    id:3,
                    PicPath:'s10.jpg',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
                {
                    id:4,
                    PicPath:'s11.png',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
            ],
            arr3:[
                {
                    id:1,
                    PicPath:'s12.jpg',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
                {
                    id:2,
                    PicPath:'s13.jpg',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
                {
                    id:3,
                    PicPath:'s15.png',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
                {
                    id:4,
                    PicPath:'s17.png',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
            ],
            arr4:[
                {
                    id:1,
                    PicPath:'s21.jpg',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
                {
                    id:2,
                    PicPath:'s23.jpg',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
                {
                    id:3,
                    PicPath:'s25.jpg',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
                {
                    id:4,
                    PicPath:'s27.png',
                    theStoreColor:'collect.png',
                    productName:'如新活水深层润泽面膜',
                    productPrice:'￥240'
                },
            ],
        }
    }
    render() {
        let arr1=this.state.arr1.map(item=>{
            return (
                <div key={item.id}>
                    <ShowProduct PicPath={item.PicPath}
                                 theStoreColor={item.theStoreColor}
                                 productName={item.productName}
                                 productPrice={item.productPrice}/>
                </div>
            )
        })
        let arr2=this.state.arr2.map(item=>{
            return (
                <div key={item.id}>
                    <ShowProduct PicPath={item.PicPath}
                                 theStoreColor={item.theStoreColor}
                                 productName={item.productName}
                                 productPrice={item.productPrice}/>
                </div>
            )
        })
        let arr3=this.state.arr3.map(item=>{
            return (
                <div key={item.id}>
                    <ShowProduct PicPath={item.PicPath}
                                 theStoreColor={item.theStoreColor}
                                 productName={item.productName}
                                 productPrice={item.productPrice}/>
                </div>
            )
        })
        let arr4=this.state.arr4.map(item=>{
            return (
                <div key={item.id}>
                    <ShowProduct PicPath={item.PicPath}
                                 theStoreColor={item.theStoreColor}
                                 productName={item.productName}
                                 productPrice={item.productPrice}/>
                </div>
            )
        })
        return (
            <div>
                <div>
                    <Rotation/>
                </div>
                <div className='h1Style'>
                    <h1>热销排行</h1>
                    <div className='productShowBox'>
                        {arr1}
                    </div>
                </div>
                <img src={a1} alt="" className='imgSize'/>
                <div className='h1Style'>
                    <div className='productShowBox'>
                        {arr2}
                    </div>
                </div>
                <img src={s8} alt="" className='imgSize'/>
                <div className='h1Style'>
                    <div className='productShowBox'>
                        {arr3}
                    </div>
                </div>
                <img src={a2} alt="" className='imgSize'/>
                <div className='h1Style'>
                    <div className='productShowBox'>
                        {arr4}
                    </div>
                </div>
                <img src={a3} alt="" className='imgSize'/>
                <div className='joinMe'>加入事业</div>
                <div className='h1Style'>
                    <h1>时尚物语</h1>
                   <div className='othBox'>
                      <div>
                          <img src={a4} alt=""/>
                          <p>达人推荐|秒变“小电眼”的秘诀在这儿</p>
                          <p>清明将至，打算怎么过⥥</p>
                      </div>
                       <div>
                           <img src={a5} alt=""/>
                           <p>歪，做我的最佳春游拍档好不好？</p>
                           <p>怎么小雨越下，我心越浪~</p>
                       </div>
                   </div>
                </div>
                <div className='joinMe'>查看更多</div>
                <div className='h1Style'>
                    <h1>走进如新</h1>
                    <div className='othBox'>
                        <div>
                            <img src={a6} alt=""/>
                            <p>如新集团</p>
                            <p>关于我们</p>
                            <p>Nu Skin 如新集团于1984年创立于美国犹他州普罗沃市，
                                并于1996年在纽约证券交易所挂牌上市，业务遍及亚洲、
                                美洲、欧洲、非洲及太平洋地区等……</p>
                        </div>
                        <div>
                            <img src={a7} alt=""/>
                            <p>如新中国</p>
                            <p>关于我们</p>
                            <p>2014年4月，投资近5亿人民币的
                                NU SKIN如新大中华创新总部园区在上海落成。
                                这是NU SKIN 如新集团发展史上最大的海外投资专案。……</p>
                        </div>
                        <div>
                            <img src={a8} alt=""/>
                            <p>慈善事业</p>
                            <p>善的力量</p>
                            <p>授之以渔：帮助受助者自力更生，从根本上解决问题
                                人人参与：不要求一个人做到百分之百而是希望每个人都可以做百分之一。持续行善……</p>
                        </div>
                    </div>
                </div>
                <div className='joinMe finalBtn'>查看更多</div>
            </div>
        )
    }
}

export default Index
