import React, {Component} from 'react';
import ProductHead from "../../component/product/producthead";
import ProductBox from "../../component/product/productBox";
import './yangYang.css'


class Mianyili extends Component {
    constructor() {
        super();
        this.state={
            Title:'调节免疫力',
            yingYangPro:[
                {
                    id:1,
                    url:'mianyili1.jpg',
                    title:'调节免疫力',
                    content:'如新华茂牌灵芝胶囊',
                    price1:325,
                    price2:500,
                },
                {
                    id:2,
                    url:'mianyili2.jpg',
                    title:'调节免疫力',
                    content:'如新华茂牌花粉胶囊',
                    price1:335,
                    price2:265,
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

export default Mianyili