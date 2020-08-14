import React, {Component} from 'react';
import ProductHead from "../../component/product/producthead";
import ProductBox from "../../component/product/productBox";
import './yangYang.css'


class yingYang extends Component {
    constructor() {
        super();
        this.state={
            Title:'基础营养',
            yingYangPro:[
                {
                    id:1,
                    url:'jichuyingyang1.jpg',
                    title:'普通食品',
                    content:'如新华茂升源固体饮料（单盒装）（暂为非直销',
                    price1:295,
                    price2:235,
                },
                {
                    id:2,
                    url:'jichuyingyang2.jpg',
                    title:'普通食品',
                    content:'如新华茂升源固体饮料（双盒装）（暂为非直销',
                    price1:525,
                    price2:420,
                },
                {
                    id:3,
                    url:'jichuyingyang3.png',
                    title:'普通食品',
                    content:'如新华茂牌妍控秘饮固体饮料(单盒装)(暂为非直销',
                    price1:400,
                    price2:320,
                },
                {
                    id:4,
                    url:'jichuyingyang4.png',
                    title:'普通食品',
                    content:'如新华茂牌妍控秘饮固体饮料(双盒装)(暂为非直销',
                    price1:725,
                    price2:580,
                } ,{
                    id:5,
                    url:'jichuyingyang5.png',
                    title:'普通食品',
                    content:'如新华茂牌朗润舒固体饮料（单盒装）（暂为非直',
                    price1:295,
                    price2:235,
                },
                {
                    id:6,
                    url:'jichuyingyang6.png',
                    title:'普通食品',
                    content:'如新华茂升源固体饮料（单盒装）（暂为非直销',
                    price1:295,
                    price2:235,
                },
                {
                    id:7,
                    url:'jichuyingyang7.jpg',
                    title:'普通食品',
                    content:'如新华茂牌益生菌固体饮料（单盒装）（暂为非直',
                    price1:525,
                    price2:420,
                },
                {
                    id:8,
                    url:'jichuyingyang8.jpg',
                    title:'普通食品',
                    content:'如新华茂牌益生菌固体饮料（双盒装）（暂为非直',
                    price1:200,
                    price2:160,
                },
                {
                    id:9,
                    url:'jichuyingyang9.png',
                    title:'普通食品',
                    content:'g3活能混合果汁饮料（盒装）（暂为非直销品',
                    price1:365,
                    price2:290,
                },
                {
                    id:10,
                    url:'jichuyingyang10.jpg',
                    title:'普通食品',
                    content:'g3活能混合果汁饮料（盒装）（暂为非直销品',
                    price1:735,
                    price2:585,
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
                <ProductHead title={this.state.Title}/>
                <div  className='showProBox'>
                    {proArr}
                </div>



            </div>
        )
    }
}

export default yingYang