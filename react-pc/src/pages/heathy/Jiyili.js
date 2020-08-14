import React, {Component} from 'react';
import ProductHead from "../../component/product/producthead";
import ProductBox from "../../component/product/productBox";
import './yangYang.css'


class Jiyili extends Component {
    constructor() {
        super();
        this.state={
            Title:'改善记忆力',
            yingYangPro:[
                {
                    id:1,
                    url:'jiyili1.jpg',
                    title:'改善记忆力',
                    content:'如新华茂牌银杏螺旋藻胶囊',
                    price1:270,
                    price2:215,
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

export default Jiyili