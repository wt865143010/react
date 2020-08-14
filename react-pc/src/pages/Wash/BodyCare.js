import React, {Component} from 'react'
import ProductBox from "../../component/product/productBox";
import Title from "../Title/Title"
class BodyCare extends Component {
    constructor(props) {
        super(props);
        this.state={
            productdata:[
                {
                    url:"baby.jpg",
                    title:"身体清洁",
                    content:"如新宝宝洁发沐浴摩丝",
                    price1:'145.00',
                    price2:'115.00'
                },
                {
                    url:"foot.jpg",
                    title:"身体滋润",
                    content:"如新足部润肤乳",
                    price1:'140.00',
                    price2:' 110.00'
                },
                {
                    url:"body.jpg",
                    title:"身体清洁",
                    content:"如新洁肤霸家庭装(暂为非直销品)",
                    price1:'410.00',
                    price2:'325.00'
                },
                {
                    url:"oil.jpg",
                    title:"身体滋润",
                    content:"如新ageLOC精护油",
                    price1:'375.00',
                    price2:'300.00'
                },
                {
                    url:"baby.jpg",
                    title:"身体清洁",
                    content:"如新宝宝洁发沐浴摩丝",
                    price1:'145.00',
                    price2:'115.00'
                },
                {
                    url:"foot.jpg",
                    title:"身体滋润",
                    content:"如新足部润肤乳",
                    price1:'140.00',
                    price2:' 110.00'
                },
                {
                    url:"body.jpg",
                    title:"身体清洁",
                    content:"如新洁肤霸家庭装(暂为非直销品)",
                    price1:'410.00',
                    price2:'325.00'
                },
                {
                    url:"oil.jpg",
                    title:"身体滋润",
                    content:"如新ageLOC精护油",
                    price1:'375.00',
                    price2:'300.00'
                },
                {
                    url:"baby.jpg",
                    title:"身体清洁",
                    content:"如新宝宝洁发沐浴摩丝",
                    price1:'145.00',
                    price2:'115.00'
                },
                {
                    url:"foot.jpg",
                    title:"身体滋润",
                    content:"如新足部润肤乳",
                    price1:'140.00',
                    price2:' 110.00'
                },
                {
                    url:"body.jpg",
                    title:"身体清洁",
                    content:"如新洁肤霸家庭装(暂为非直销品)",
                    price1:'410.00',
                    price2:'325.00'
                },
                {
                    url:"oil.jpg",
                    title:"身体滋润",
                    content:"如新ageLOC精护油",
                    price1:'375.00',
                    price2:'300.00'
                }
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
                <p style={{width:"100%",textAlign:"center",fontSize:"35px"}}>身体洗护</p>
                <Title></Title>
                {arr}
            </div>
        )
    }
}

export default BodyCare