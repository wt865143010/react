import React, {Component} from 'react'
import ProductBox from "../../component/product/productBox";
import Title from "../Title/Title"
class other extends Component {
    constructor(props) {
        super(props);
        this.state={
            productdata:[
                {
                    url:"hand.png",
                    title:"手部清洁护理",
                    content:"丝昂洁手晶露（暂为非直销品）",
                    price1:'70.00',
                    price2:'55.00'
                },
                {
                    url:"tooth.jpg",
                    title:"口腔清洁",
                    content:"丝昂祛渍牙膏(暂为非直销品)",
                    price1:'60.00',
                    price2:' 45.00'
                },
                {
                    url:"hand_h.jpg",
                    title:"手部清洁护理",
                    content:"如新润手露",
                    price1:'125.00',
                    price2:'100.00'
                },
                {
                    url:"lip.jpg",
                    title:"唇部滋润",
                    content:"丝昂防护润唇膏（暂为非直销品）",
                    price1:'60.00',
                    price2:'45.00'
                },
                {
                    url:"hand.png",
                    title:"手部清洁护理",
                    content:"丝昂洁手晶露（暂为非直销品）",
                    price1:'70.00',
                    price2:'55.00'
                },
                {
                    url:"tooth.jpg",
                    title:"口腔清洁",
                    content:"丝昂祛渍牙膏(暂为非直销品)",
                    price1:'60.00',
                    price2:' 45.00'
                },
                {
                    url:"hand_h.jpg",
                    title:"手部清洁护理",
                    content:"如新润手露",
                    price1:'125.00',
                    price2:'100.00'
                },
                {
                    url:"lip.jpg",
                    title:"唇部滋润",
                    content:"丝昂防护润唇膏（暂为非直销品）",
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
                <p style={{width:"100%",textAlign:"center",fontSize:"35px"}}>其他</p>
                <Title></Title>
                {arr}
            </div>
        )
    }
}

export default other