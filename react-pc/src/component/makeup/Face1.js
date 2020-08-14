import React, {Component} from 'react';
import MakeUpHeader from "../MakeUpHeader/MakeUpHeader";
import ProductBox from '../product/productBox'
import './face1.css'
class Face1 extends Component {
    constructor() {
        super();
        this.state={
            // product:this.props.product
        }
    }

    render() {
        console.log(this.props.product)
        let productArr=this.props.product.map(item=>{
            return (
                <div key={item.id}>
                    <ProductBox
                        myurl={item.url}
                        title={item.title}
                        content={item.content}
                        price1={item.price1}
                        price2={item.price2}
                    />
                </div>
            )
        })
        return (
            <div className='Face1'>
                <h1>{this.props.mytitle}</h1>
                <MakeUpHeader/>
                <div className='productShowBox'>
                    {productArr}
                </div>
            </div>
        )
    }
}

export default Face1
