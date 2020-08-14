import React, {Component} from 'react'
import "./Product_details.css"


import  {Table,Descriptions } from 'antd'
import {inject,observer} from "mobx-react";
import {toJS} from "mobx";

const  price_column=[
    {
        title: '价格类型',
        dataIndex: 'price_type',
        align: 'center',
        className:"table_title myColumn",
        width:100
    },
    {
        title: '价格类型描述',
        dataIndex: 'priceType_detail',
        align: 'center',
        className:"table_title myColumn",
        width:100
    },
    {
        title: '折后销售单价',
        dataIndex: 'discount_price',
        align: 'center',
        className:"table_title myColumn",
        width:100
    },
    {
        title: '折扣率',
        dataIndex: 'discount_rate',
        align: 'center',
        className:"table_title myColumn",
        width:100
    }
];

const  price_data=[
    {
        key: '1',
        price_type: 'P1',
        priceType_detail: '零售无折扣',
        discount_price: '￥500.00',
        discount_rate: "0"
    },
    {
        key: '2',
        price_type: 'P3',
        priceType_detail: '优惠顾客折扣',
        discount_price: '￥450.00',
        discount_rate: "10"
    },
    {
        key: '3',
        price_type: '23',
        priceType_detail: '星级顾客价格',
        discount_price: '￥400.00',
        discount_rate: "20"
    },
];


const other_column=[
    {
        title: '价格类型',
        dataIndex: 'price_type',
        align: 'center',
        className:"table_title myColumn",
        width:100
    },
    {
        title: '价格类型描述',
        dataIndex: 'priceType_detail',
        align: 'center',
        className:"table_title myColumn",
        width:100
    },
    {
        title: '折后销售单价',
        dataIndex: 'discount_price',
        align: 'center',
        className:"table_title myColumn",
        width:100
    },
    {
        title: '折扣率',
        dataIndex: 'discount_rate',
        align: 'center',
        className:"table_title myColumn",
        width:100
    }
];


const other_data=[
    {
        key: '1',
        price_type: 'C6',
        priceType_detail: '合约价格',
        discount_price: '￥380.00',
        discount_rate: "22"
    },
]
@inject('product')
@observer class Product_details extends Component {
    constructor(){
        super();
        this.state={
            price_data:[],   /*价格类型的数组*/

        }
    }
   UNSAFE_componentWillMount() {
       let product_id=this.props.location.product_id//获取到当前点击要获取详情的产品id
       console.log(product_id)
        this.props.product.getinfo(product_id)//请求产品详情信息
       this.props.product.getproduct_price(product_id)//请求产品定价信息
       this.props.product.getproduct_description(product_id)//请求产品描述信息
       this.props.product.getproduct_upperandLower(product_id)//请求产品上架信息
    }

    render() {
        console.log(toJS(this.props.product.getproductinfo))
        console.log(toJS(this.props.product.getproduct_priceinfo))
        console.log(toJS(this.props.product.getproduct_descriptioninfo))
        console.log(toJS(this.props.product.getproduct_upperandLowerinfo))
        let aa=this.props.product.getproduct_priceinfo.map((item,index)=>{
            console.log(item)
            return (

                <Descriptions.Item label="零售单价">零售单价:{item.originalPrice}</Descriptions.Item>


            )
        })
        return (
            <div>
                <div>
                    {/*产品基本信息表格*/}
                    <h2>产品基本信息</h2>
                    <hr/>


                    <div>
                        <Descriptions layout="horizontal" column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                            <Descriptions.Item label="产品编号" >{this.props.product.getproductinfo.productNumber}</Descriptions.Item>
                            <Descriptions.Item label="产品分类(Oracle专用)" >NuSkin</Descriptions.Item>
                            <Descriptions.Item label="是否直销">是</Descriptions.Item>
                            <Descriptions.Item label="产品中文名称">ageLOC Me新智我仪器套装</Descriptions.Item>
                            <Descriptions.Item label="产品英文名称">ageLOC Me Device Kit</Descriptions.Item>
                            <Descriptions.Item label="直销核准日期">2017-09-09</Descriptions.Item>
                            <Descriptions.Item label="计量单位">1盒</Descriptions.Item>
                            <Descriptions.Item label="外包装尺寸(cm)">长度:10,宽度:20,高度:50</Descriptions.Item>
                            <Descriptions.Item label="外包装材料">布吉岛</Descriptions.Item>
                            <Descriptions.Item label="产品重量">哎哟喂</Descriptions.Item>
                            <Descriptions.Item label="税率(%)">6.8%</Descriptions.Item>
                            <Descriptions.Item label="警戒库存">2000</Descriptions.Item>
                            <Descriptions.Item label="是否需要运费">是</Descriptions.Item>
                            <Descriptions.Item label="允许自提">是</Descriptions.Item>
                            <Descriptions.Item label="是否预售">否</Descriptions.Item>
                            <Descriptions.Item label="是否类目显示">否</Descriptions.Item>
                            <Descriptions.Item label="允许混单">是</Descriptions.Item>
                            <Descriptions.Item label="是否出货">是</Descriptions.Item>
                            <Descriptions.Item label="出货扫码">是</Descriptions.Item>
                            <Descriptions.Item label="退货扫码">否</Descriptions.Item>
                            {/*<Descriptions.Item label="零售单价">{this.props.product.getproduct_priceinfo[0].originalPrice}</Descriptions.Item>*/}
                            {aa}
                            <Descriptions.Item label="价格类型分类" column="1px" span={3} className="myPrice">销售价格，礼品积分兑换，赠品价格，其它</Descriptions.Item>
                        </Descriptions>
                        <div>
                            <table className="mySale">
                                <tbody>
                                    <tr>
                                        <td className="myweight">销售价格:</td>
                                        <td>
                                            <Table
                                                columns={price_column}
                                                dataSource={price_data}
                                                // dataSource={this.state.orderList}
                                                bordered="true"
                                                // border="1px solid black"
                                                tableLayout="fixed"
                                                pagination={false}    /*默认不使用分页功能*/


                                            />
                                        </td>
                                    </tr>

                                    <tr >
                                        <td className="myJifen myweight" >礼品积分兑换:</td>
                                        <td className="myleft">RH 纯积分兑换:2000 RG积分加现金兑换:1000+￥100.00</td>
                                    </tr>
                                    <tr>
                                        <td className="myweight">赠品价格:</td>
                                        <td className="myleft">￥0.00</td>
                                    </tr>
                                    <tr>
                                        <td className="myweight">其它:</td>
                                        <td>
                                            <Table

                                                columns={other_column}
                                                dataSource={other_data}
                                                // dataSource={this.state.orderList}
                                                bordered="true"
                                                // border="1px solid black"
                                                tableLayout="fixed"
                                                pagination={false}    /*默认不使用分页功能*/


                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>




                    {/*搜索优化表格*/}
                    <div className="mysousuo">
                        <h2>搜索优化(SEO)</h2>
                        <hr/>
                        <table className="search_you">
                            <tbody>
                                {/*第一行*/}
                                <tr>
                                    <td className="myweight">站内搜索关键字:</td>
                                    <td>预见套</td>
                                </tr>
                                {/* 第二行*/}
                                <tr>
                                    <td className="myweight">站外搜索标题:</td>
                                    <td>ageLOC Me新智我仪器套装</td>
                                </tr>
                                {/*第三行*/}
                                <tr>
                                    <td className="myweight">站外搜索关键字:</td>
                                    <td>预见套</td>
                                </tr>
                                {/*第四行*/}
                                <tr>
                                    <td className="myweight">搜索描述:</td>
                                    <td>ageLOC Me新智我仪器套装</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/*上下架配置表格*/}
                    <div className="mysousuo">
                        <h2>上下架配置</h2>
                        <hr/>
                        <table className="upDownSetting">
                            <tbody>
                                {/*第一行*/}
                                <tr>
                                    <td className="myweight">上架时间:</td>
                                    <td>2017-12-09 10:10:09</td>
                                </tr>
                                {/*第二行*/}
                                <tr>
                                    <td className="myweight">下架时间:</td>
                                    <td>ageLOC ME新智我仪器套装</td>
                                </tr>
                                {/*第三行*/}
                                <tr>
                                    <td className="myweight">上架渠道:</td>
                                    <td>线上渠道,形象店渠道</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/*物流信息表格*/}
                    <div className="mysousuo">
                        <h2>物流信息</h2>
                        <hr/>
                        <table className="LogMessage">
                            <tbody>
                                {/*第一行*/}
                                <tr>
                                    <td className="myweight">产品虚拟库存:</td>
                                    <td>3000</td>
                                    <td className="myweight">库存检查:</td>
                                    <td>检查分仓库存</td>
                                    <td className="myweight">是否需要拆包:</td>
                                    <td>是</td>
                                </tr>

                                {/*第二行*/}
                                <tr>
                                    <td className="myweight">拆包线:</td>
                                    <td>UN SKIN</td>
                                    <td className="myweight">生效时间:</td>
                                    <td>2017-12-09 10:10:09</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product_details