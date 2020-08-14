import React, {Component} from 'react'
import ProductBox from "../../component/product/productBox";
import Title from "../Title/Title"
class Oil extends Component {
    constructor(props) {
        super(props);
        this.state={
            productdata:[
                {
                    url:"oil.jpg",
                    title:"ageLOC精油系列",
                    content:"如新ageLOC精护油",
                    price1:'220.00',
                    price2:'175.00'
                },
                {
                    url:"oil_2.jpg",
                    title:"ageLOC精油系列",
                    content:"如新ageLOC舒缓精油",
                    price1:'160.00',
                    price2:' 125.00'
                },
                {
                    url:"oil_3.jpg",
                    title:"如新ageLOC舒缓精油",
                    content:"如新润手露",
                    price1:'125.00',
                    price2:'100.00'
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
                <p style={{width:"100%",textAlign:"center",fontSize:"35px"}}>ageLOC精油系列</p>
                <Title></Title>
                {arr}
            </div>
        )
    }
}

export default Oil