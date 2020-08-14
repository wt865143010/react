import React, {Component} from 'react'
import ProductBox from "../../component/product/productBox";
import Title from "../Title/Title";

class Epoch extends Component {
    constructor(props) {
        super(props);
        this.state={
            productdata:[
                {
                    url:"foot.jpg",
                    title:"Epoch系列",
                    content:"Epoch系列",
                    price1:'70.00',
                    price2:'55.00'
                },
                {
                    url:"grass.jpg",
                    title:"Epoch系列",
                    content:"如新艾蒲护发素",
                    price1:'60.00',
                    price2:' 45.00'
                },
                {
                    url:"grass.jpg",
                    title:"Epoch系列",
                    content:"如新艾蒲草本护理洗发水",
                    price1:'125.00',
                    price2:'100.00'
                },
                {
                    url:"kangxie.jpg",
                    title:"Epoch系列",
                    content:"如新艾蒲抗屑洗发水",
                    price1:'60.00',
                    price2:'45.00'
                },
                {
                    url:"baby.jpg",
                    title:"Epoch系列",
                    content:"如新宝宝洁发沐浴摩丝",
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
                <p style={{width:"100%",textAlign:"center",fontSize:"35px"}}>Epoch系列</p>
                <Title></Title>
                {arr}
            </div>
        )
    }
}

export default Epoch