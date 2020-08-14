import React, {Component} from 'react'
import ProductBox from "../../component/product/productBox";
import Title from "../Title/Title"
class Hair extends Component {
    constructor(props) {
        super(props);
        this.state={
            productdata:[
                {
                    url:"grass.jpg",
                    title:"护发",
                    content:"如新艾蒲护发素",
                    price1:'135.00',
                    price2:'105.00'
                },
                {
                    url:"grass_s.jpg",
                    title:"洗发",
                    content:"如新艾蒲草本护理洗发水",
                    price1:'150.00',
                    price2:' 120.00'
                },
                {
                    url:"kangxie.jpg",
                    title:"洗发",
                    content:"如新艾蒲抗屑洗发水",
                    price1:'150.00',
                    price2:'120.00'
                },
                {
                    url:"type.jpg",
                    title:"造型",
                    content:"丝昂持久造型喷雾250ml",
                    price1:'65.00',
                    price2:'50.00'
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
                <p style={{width:"100%",textAlign:"center",fontSize:"35px"}}>头发洗护</p>
                <Title></Title>
                {arr}
            </div>
        )
    }
}


export default Hair