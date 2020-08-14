import React, {Component} from 'react';
import ProductHead from "../../component/product/producthead";
import ProductBox from "../../component/product/productBox";
import './yangYang.css'


class Jiangdixuezhi extends Component {
    constructor() {
        super();
        this.state={
            Title:'辅助降血脂',
            yingYangPro:[
                {
                    id:1,
                    url:'jiangdixuezhi1.jpg',
                    title:'辅助降血脂',
                    content:'如新华茂牌红曲胶囊',
                    price1:425,
                    price2:340,
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

export default Jiangdixuezhi