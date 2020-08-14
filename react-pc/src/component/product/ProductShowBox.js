import React, {Component} from 'react';
import ProductBox from './productBox'


class ProductShowBox extends Component {
    constructor() {
        super();
        this.state={
            product:[
                {
                    id:1,
                    url:'1.png',
                    title:'爽肤水',
                    content:'静享丝滑',
                    price1:1300,
                    price2:1500,
                },
                {
                    id:2,
                    url:'2.png',
                    title:'爽肤水',
                    content:'静享丝滑',
                    price1:1100,
                    price2:1200,
                },
                {
                    id:3,
                    url:'3.png',
                    title:'爽肤水',
                    content:'静享丝滑',
                    price1:1900,
                    price2:2500,
                },
                {
                    id:4,
                    url:'4.png',
                    title:'爽肤水',
                    content:'静享丝滑',
                    price1:1300,
                    price2:1600,
                },
                {
                    id:5,
                    url:'5.png',
                    title:'防晒霜',
                    content:'静享丝滑',
                    price1:1700,
                    price2:3500,
                },
                {
                    id:6,
                    url:'6.jpg',
                    title:'卸妆水',
                    content:'静享丝滑',
                    price1:1700,
                    price2:1800,
                },
            ]
        }
    }
    render() {
        let productArr=this.state.product.map(item=>{
            return (
                <div key={item.id}>
                    <ProductBox myurl={item.url} title={item.title} content={item.content} price1={item.price1} price2={item.price2}/>
                </div>
            )
        })
        return (
            <div>
                {productArr}
            </div>
        )
    }
}

export default ProductShowBox
