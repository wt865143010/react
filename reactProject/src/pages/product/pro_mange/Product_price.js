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
            product_price:"",
            gift_price:"",
        };

    }
    UNSAFE_componentWillMount() {
        this.props.product.getsale_price();
        this.props.product.getprice_type();
    }


    onChange = (e,num )=> {
        if(num==1){
            console.log('radio checked', e.target.value);
            this.setState({
                value: e.target.value,
            });
        }
        if(num==2){
            console.log('radio checked', e.target.value);
            this.setState({
                value1: e.target.value,
            });
        }

    };
    render() {

        let price_type=this.props.product.price_type.map((item,index)=>{
            return (<Radio value={index+1} key={index}>{item.sale_price_name}</Radio>)
        })//显示价格类型分类

        let sale_price=this.props.product.sale_price.map((item,index)=>{
            if(item.type==this.state.value){
                return ( <tr className="midtable"key={index}>
                    <td>{item.price_type}</td>
                    <td>{item.price_type_descripition}</td>
                    <td>{item.sale_price}</td>
                    <td>{item.altvol}</td>
                    <td>{item.pv}</td>
                    <td>{item.nrsv}</td>
                    <td>{item.discount_rate}</td>
                </tr>)
            }
        })
        return (
            <div>
                <table>
                    <tbody className="product_price">
                    <tr>
                        <td>零售单价</td>
                        <td><input type="text"placeholder={"￥100"} onChange={val=>this.product_price('product_price',val)}/></td>
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
                                <Radio value={5}>纯现金兑换<input type="text"   style={{width:60,height:25}}/></Radio>
                                <Radio value={6}>纯积分兑换<input type="text"   style={{width:60,height:25}}/></Radio>
                                <Radio value={7}>积分加现金兑换   <input type="text"   style={{width:60,height:25}}/><span style={{marginLeft:10}}>加</span><input type="text"   style={{marginLeft:10,width:60,height:25}}/></Radio>
                            </Radio.Group>
                        </td>
                    </tr>
                    <tr>
                        <td>赠品价格</td>
                        <td>F3非卖品：<input type="text" onChange={val=>this.product_price('gift_price',val)}  style={{width:60,height:25}}/></td>
                    </tr>
                   {/* <tr>
                        <td>其他</td>
                        <td>
                            <a href="">新增价格类型</a>
                        </td>
                    </tr>*/}
                    </tbody>
                </table>
                <div className="btn">
                    <Button type="primary" block onClick={this.toProduct_baseinfo} id="up">
                        上一步
                    </Button>
                    <Button type="primary" block className="next" onClick={this.toProduct_pricing}>
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
        console.log(this.state.gift_price)


    }

    toProduct_baseinfo=()=>{
        this.props.toProduct_baseinfo(1)

    }
    toProduct_pricing=()=>{
        console.log(this.state.value)
        console.log(this.state.productId)
        this.props.toProduct_baseinfo(8)
        this.props.product.addProduct_price.product_price=this.state.product_price
        this.props.product.addProduct_price.gift_price=this.state.gift_price
        this.props.product.addProduct_price.product_price_type=this.state.value
       /* this.props.product.addproduct_price()*/
}

}

export default Product_price
