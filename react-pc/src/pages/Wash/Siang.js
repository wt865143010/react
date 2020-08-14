import React, {Component} from 'react'
import ProductBox from "../../component/product/productBox";
import Title from "../Title/Title";
class Siang extends Component {
    constructor(props) {
        super(props);
        this.state={
            productdata:[
                {
                    url:"hand.png",
                    title:"丝昂系列",
                    content:"丝昂洁手晶露（暂为非直销品）",
                    price1:'70.00',
                    price2:'55.00'
                },
                {
                    url:"tooth.jpg",
                    title:"丝昂系列",
                    content:"丝昂祛渍牙膏(暂为非直销品)",
                    price1:'60.00',
                    price2:' 45.00'
                },
                {
                    url:"body.jpg",
                    title:"丝昂系列",
                    content:"丝昂女士洁肤香露",
                    price1:'125.00',
                    price2:'100.00'
                },
                {
                    url:"lip.jpg",
                    title:"丝昂系列",
                    content:"丝昂防护润唇膏（暂为非直销品）",
                    price1:'60.00',
                    price2:'45.00'
                },
                {
                    url:"type.jpg",
                    title:"丝昂系列",
                    content:"丝昂持久造型喷雾250ml",
                    price1:'60.00',
                    price2:'45.00'
                },
            ]
        }
    }
    render() {
        let arr=this.state.productdata.map((item,index)=>{
            return <div key={index}>
                <ProductBox myurl={item.url} title={item.title} content={item.content} price1={item.price1} price2={item.price2}></ProductBox>
            </div>
        })
        return (
            <div style={{padding:"0 50px 0 50px",display:"flex",flexWrap:"wrap"}}>
                <p style={{width:"100%",textAlign:"center",fontSize:"35px"}}>丝昂系列</p>
                <Title></Title>
                {arr}
            </div>
        )
    }
}

export default Siang