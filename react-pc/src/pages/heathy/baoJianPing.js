import React, {Component} from 'react';
import ProductHead from "../../component/product/producthead";
import ProductBox from "../../component/product/productBox";
import './yangYang.css'


class baoJianPing extends Component {
    constructor() {
        super();
        this.state={
            Title:'保健品',
            yingYangPro:[
                {
                    id:1,
                    url:'baojianping1.jpg',
                    title:'保健食品',
                    content:'启动焕活套装',
                    price1:5000,
                    price2:4000,
                },
                {
                    id:2,
                    url:'baojianping2.jpg',
                    title:'保健食品',
                    content:'如新华茂牌如沛胶囊',
                    price1:640,
                    price2:510,
                },
                {
                    id:3,
                    url:'baojianping3.jpg',
                    title:'保健食品',
                    content:'如新华茂牌维生素E鱼油软胶囊（暂为非直销品）',
                    price1:235,
                    price2:185,
                }
            ],
        }
    }

    render() {
        let proArr=this.state.yingYangPro.map((item,index)=>{
            return (
                <div key={item.id}>
                    <ProductBox myurl={item.url} title={item.title} content={item.content} price1={item.price1}
                                price2={item.price2}/>
                </div>

            )
        })
        return (
            <div>
                <ProductHead Title={this.state.Title}/>
                <div  className='showProBox'>
                    {proArr}
                </div>



            </div>
        )
    }
}

export default baoJianPing