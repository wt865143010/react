import React, {Component} from 'react';
import ProductHead1 from "../../component/product/producthead1";
import ProductBox from "../../component/product/productBox";
import './yangYang.css'


class yiqianyuan1 extends Component {
    constructor() {
        super();
        this.state={
            Title:'1000元- 1999元',
            yingYangPro:[
                {
                    id:1,
                    url:'1000-19991.png',
                    title:'1000元- 1999元',
                    content:'新动控油净肤露限定套装（适用油性肌肤）',
                    price1:885,
                    price2:705,
                },
                {
                    id:2,
                    url:'1000-19992.png',
                    title:'1000元- 1999元',
                    content:'如新净肤系列套装[礼盒版]',
                    price1:1130,
                    price2:895,
                },
                {
                    id:3,
                    url:'1000-19993.jpg',
                    title:'1000元- 1999元',
                    content:'如新净肤系列套装[礼盒版]',
                    price1:1130,
                    price2:895,
                },
                {
                    id:4,
                    url:'1000-19994.jpg',
                    title:'1000元- 1999元',
                    content:'如新净肤系列套装[礼盒版]',
                    price1:1130,
                    price2:895,
                },
                {
                    id:5,
                    url:'1000-19995.jpg',
                    title:'1000元- 1999元',
                    content:'如新净肤系列套装[礼盒版]',
                    price1:1130,
                    price2:895,
                }
                ,{
                    id:6,
                    url:'1000-19996.jpg',
                    title:'1000元- 1999元',
                    content:'如新净肤系列套装[礼盒版]',
                    price1:1130,
                    price2:895,
                },
                {
                    id:7,
                    url:'1000-19997.jpg',
                    title:'1000元- 1999元',
                    content:'如新净肤系列套装[礼盒版]',
                    price1:1130,
                    price2:895,
                },
                {
                    id:8,
                    url:'1000-19998.jpg',
                    title:'1000元- 1999元',
                    content:'如新净肤系列套装[礼盒版]',
                    price1:1130,
                    price2:895,
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
                <ProductHead1 Title={this.state.Title}/>
                <div  className='showProBox'>
                    {proArr}
                </div>
            </div>
        )
    }
}

export default yiqianyuan1