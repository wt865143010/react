import React, {Component} from 'react'
import './Product_prics.css'
import { Radio } from 'antd';
import {inject,observer} from "mobx-react";

import { DatePicker ,Button} from 'antd';


@inject('product')

@observer class Product_price extends Component {


    constructor() {
        super();
        this.state = {
            value: 1,
            value1:1,
            product_price:"",//销售价格
            discount_price:"",//折后价
            priceTypeId:"",//销售价格类型id
            gift_price:"",
            discountRate:""//折后率

        };

    }
    UNSAFE_componentWillMount() {
        this.props.product.getsale_price();
        //this.props.product.getprice_type();
    }


    onChange = (e,num )=> {
        if(num==1){
            console.log('价格类型', e.target.value);

            this.setState({
                value: e.target.value,
            });
        }
        if(num==2){
            console.log('礼品积分兑换', e.target.value);
            this.setState({
                value1: e.target.value,
            });
        }

    };
    render() {
        console.log(this.props.product.productId)

        let price_type=this.props.product.sale_price.map((item,index)=>{
            return (<Radio value={index+1} key={index}>{item.name}</Radio>)
        })//显示价格类型分类

        let sale_price=this.props.product.sale_price.map((item,index)=>{
            if((index+1)==this.state.value){
                this.state.discount_price=item.discount*this.state.product_price;
                this.state.priceTypeId=item.id;
                this.state.discountRate=item.discount
                return ( <tr className="midtable"key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.discount*this.state.product_price}</td>
                    <td>{item.altvol}</td>
                    <td>{item.pv}</td>
                    <td>{item.nrsv}</td>
                    <td>{item.discount}</td>
                </tr>)
            }
        })
        return (
            <div>
                <table>
                    <tbody className="product_price">
                    <tr>
                        <td>零售单价</td>
                        <td><input style={{width:160,height:25}}type="text"placeholder={"￥100"} onChange={val=>this.product_price('product_price',val)}/></td>
                    </tr>
                    <tr>
                        <td>价格类型分类</td>
                        <td>

                            <Radio.Group onChange={e=>this.onChange(e,1)} value={this.state.value}>
                                {price_type}
                            </Radio.Group>
                        </td>

                    </tr>
                    <tr>
                        <td>销售价格</td>
                        <td>
                            <table>
                            <tbody>
                                <tr className="midtable">
                                    <td>价格类型</td>
                                    <td>价格类型描述</td>
                                    <td>折后销售单价</td>
                                    <td>业绩分数</td>
                                    <td>奖级基金</td>
                                    <td>基数</td>
                                    <td>折后率</td>
                                </tr>
                               {sale_price}
                            </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>礼品积分兑换</td>
                        <td>
                            <Radio.Group onChange={e=>this.onChange(e,2)} value={this.state.value1}>
                                <Radio value={1}>纯现金兑换<input type="text"   style={{width:60,height:25}}/></Radio>
                                <Radio value={2}>纯积分兑换<input type="text"   style={{width:60,height:25}}/></Radio>
                                <Radio value={3}>积分加现金兑换   <input type="text"   style={{width:60,height:25}}/><span style={{marginLeft:10}}>加</span><input type="text"   style={{marginLeft:10,width:60,height:25}}/></Radio>
                            </Radio.Group>
                        </td>
                    </tr>
                    <tr>
                        <td>赠品价格</td>
                        <td>F3非卖品：<input type="text" onChange={val=>this.product_price('gift_price',val)}  style={{width:60,height:25}}/></td>
                    </tr>
                    </tbody>
                </table>
                <div className="btn">
                    <Button type="primary" block onClick={this.toProduct_baseinfo} className="up">
                        上一步
                    </Button>
                    <Button type="primary" block onClick={this.toProduct_description} className="next">
                        下一步
                    </Button>
                    <Button type="primary" block onClick={this.toProduct_price} className="next">
                       提交审批
                    </Button>
                </div>
            </div>
        )

    }
    product_price=(key,val)=>{
        this.setState({
           [key]:val.target.value
        })



    }

    toProduct_baseinfo=()=>{
        this.props.toProduct_baseinfo(1)

    }
    toProduct_description=()=>{

        this.props.toProduct_description(3)
        this.props.product.addProduct_price.originalPrice=this.state.product_price
        this.props.product.addProduct_price.priceTypeId=this.state.priceTypeId
        this.props.product.addProduct_price.sellingPrice=this.state.discount_price
        this.props.product.addProduct_price.discountRate=this.state.discountRate

       /* this.props.product.addproduct_price()*/

}

}

export default Product_price
