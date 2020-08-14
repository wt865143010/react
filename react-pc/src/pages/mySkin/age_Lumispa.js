import React, {Component} from 'react'
import ProList from "../../component/showProduct/StyleShow";
import ProBox from "../../component/product/productBox";

class age_Lumispa extends Component {
    constructor() {
        super();
        this.state={
            product:[
                {
                    myurl:'s19.png',
                    title:'ageLOC LumiSpa',
                    content:'新动控油净肤露限定套装（适用油性肌肤）',
                    price1:'454.00',
                    price2:'322.00',
                },
                {
                    myurl:'s9.jpg',
                    title:'ageLOC LumiSpa',
                    content:'新动控油净肤露限定套装（适用油性肌肤）',
                    price1:'454.00',
                    price2:'322.00',
                },
                {
                    myurl:'s26.png',
                    title:'ageLOC LumiSpa',
                    content:'新动控油净肤露限定套装（适用油性肌肤）',
                    price1:'454.00',
                    price2:'322.00',
                },
                {
                    myurl:'s27.png',
                    title:'ageLOC LumiSpa',
                    content:'新动控油净肤露限定套装（适用油性肌肤）',
                    price1:'454.00',
                    price2:'322.00',
                },
                {
                    myurl:'s25.jpg',
                    title:'ageLOC LumiSpa',
                    content:'新动控油净肤露限定套装（适用油性肌肤）',
                    price1:'454.00',
                    price2:'322.00',
                },
            ]
        }
    }
    render() {
        let arr=this.state.product.map(item=>{
            return (
                <div key={item.id}>
                    <ProBox myurl={item.myurl}
                            title={item.title}
                            content={item.content}
                            price1={item.price1}
                            price2={item.price2}/>
                </div>
            )
        })
        return (
            <div>
                <ProList mytitle={this.props.location.query.title}/>
                <div className='productShowBox'>
                    {arr}
                </div>
            </div>
        )
    }
}

export default age_Lumispa