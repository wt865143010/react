import React, {Component} from 'react'
import './product_list.css'
import { Input, Select,Button} from 'antd';
import { DatePicker, Space } from 'antd';
import {inject,observer} from "mobx-react";

import { Table} from 'antd';


function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}








const { RangePicker } = DatePicker;

const { Option } = Select;
@inject('product')
@observer class Product_list extends Component {
    constructor() {
        super();
        this.state={//搜索框的值
            productNumber:null,//产品编号
            productName:null,//产品名称
            attributesName:null,//产品属性
            labelName:null,//产品标签
            start_time:null,
            end_time:null,
        }

    }

    UNSAFE_componentWillMount() {
        this.props.product.getAllproduct()

        }






    render() {
        console.log(this.props.product.productAll)
        const data=this.props.product.productAll
        const columns = [
            {
                title: '产品编号',
                dataIndex: 'productNumber',
            },
            {
                title: '产品名称',
                dataIndex: 'productName',
            },
            {
                title: '产品分类',
                dataIndex: 'productClassification',
            },
            {
                title: '是否直销',
                dataIndex: 'preSale',
            },
            {
                title: '出售状态',
                dataIndex: 'product_up_type',
            },
            {
                title: '申请状态',
                dataIndex: 'product_type',
            },

            {
                title: '操作',
                align:"center",
                key: 'action',
                render: (text, record) => {
                    if (record.product_up_type=="待审批"){
                       return (
                            <Space size="middle">
                                <a  onClick={this.approval.bind(this,record.id)}>批准</a>
                                <a  onClick={this.recall.bind(this,record.id)}>撤回</a>
                            </Space>
                        )
                    }else {
                        return (
                            <Space size="middle">
                                <a onClick={this.edit.bind(this,record.id)}>编辑</a>
                                <a onClick={this.undercarriage.bind(this,record.id)}>下架</a>
                            </Space>
                        )
                    }
                }
            },
        ];

        return (
            <div className="product_list">
                <div style={{textAlign:"left"}}>产品管理>产品列表</div>
                <hr/>
                <div className={"title"}>
                    <h2>产品列表</h2>
                    <span>平台所有的产品，您可以对产品进行搜索，也能对产品进行编辑、上架、下架等操作</span>
                </div>
                <hr/>
                <div id={"serach"}>
                    <Input.Group compact>
                        <Input style={{ width: '8%' }} defaultValue="前端类目:"bordered={false} />
                        <Select  className="select-drop-down">
                            <Option value="Zhejiang">Zhejiang</Option>
                            <Option value="Jiangsu">Jiangsu</Option>
                        </Select>

                    </Input.Group>
                    <Input.Group compact>
                        <Input style={{ width: '8%' }} defaultValue="扩展属性类型:"bordered={false} />
                        <Select  className="select-drop-down">
                            <Option value="Zhejiang">Zhejiang</Option>
                            <Option value="Jiangsu">Jiangsu</Option>
                        </Select>

                    </Input.Group>
                    <Input.Group compact>
                        <Input style={{ width: '8%' }} defaultValue="产品标签:"bordered={false} />
                        <Select  className="select-drop-down"  onChange={val=>this.getselectvalue('labelName',val)}>
                            <Option value="Zhejiang">Zhejiang</Option>
                            <Option value="Jiangsu">Jiangsu</Option>
                        </Select>

                    </Input.Group>
                    <Input.Group compact>
                        <Input style={{ width: '8%' }} defaultValue="产品属性:"bordered={false} />
                        <Select  className="select-drop-down"  onChange={val=>this.getselectvalue('attributesName',val)}>
                            <Option value="Zhejiang">Zhejiang</Option>
                            <Option value="Jiangsu">Jiangsu</Option>
                        </Select>

                    </Input.Group>
                    <Input.Group compact>
                        <Input style={{ width: '8%' }} defaultValue="拆包线:"bordered={false} />
                        <Select  className="select-drop-down" >
                            <Option value="Zhejiang">Zhejiang</Option>
                            <Option value="Jiangsu">Jiangsu</Option>
                        </Select>

                    </Input.Group>
                    <Input.Group compact>
                        <Input style={{ width: '8%' }} defaultValue="产品编号:"bordered={false} />
                        <Input style={{ width: '5%' }} onChange={val=>this.getvalue('productNumber',val)} />
                    </Input.Group>

                    <Input.Group compact>
                        <Input style={{ width: '8%' }} defaultValue="产品名称:"bordered={false} />
                        <Input style={{ width: '5%' }} onChange={val=>this.getvalue('productName',val)} />

                    </Input.Group>
                    <Input.Group compact>
                        <Input style={{ width: '8%' }} defaultValue="发布时间:"bordered={false} />

                        <Space direction="vertical" size={5} >
                            <RangePicker onChange={this.gettime} />

                        </Space>
                    </Input.Group>
                    <Input.Group compact>
                        <Button type="primary" className={"serach_btn"} onClick={this.serach}>搜索</Button>
                    </Input.Group>

                </div>



                <div className={"productlist_btn"}>
                    {/*<Button type="primary" onClick={this.totest}>下架</Button>*/}
                    <Button type="primary" onClick={this.addProduct}>发布新产品</Button>
                    <Button type="primary">发布组合产品</Button>
                </div>


               <ul className={"allproduct"}>
                   <li onClick={this.showProduct.bind(this,1)}>所有产品</li>
                   <li onClick={this.showProduct.bind(this,2)}>出售中</li>
                   <li onClick={this.showProduct.bind(this,3)}>已下架</li>
                   <li>草稿箱</li>
                   <li onClick={this.showProduct.bind(this,5)}>待审批</li>
                   <li onClick={this.showProduct.bind(this,6)}>待生效</li>
               </ul>
                <Table
                        columns={columns} dataSource={data}
                        tableLayout="fixed"
                        size="small" pagination={{showQuickJumper:true,defaultCurrent:1,total:this.props.product.productAll.length}}/>


            </div>
        )
    }
    gettime=(date)=>{//获取开始时间到结束时间
        this.setState({
            start_time:date[0]._d.toLocaleString(),
            end_time:date[1]._d.toLocaleString()
        })

    }
    getselectvalue=(key,val)=>{//获取选项框的搜索内容
        this.setState({
            [key]:val
        })
    }
    getvalue=(key,val)=>{//获取输入框的内容
       this.setState({
           [key]:val.target.value
       })
    }
    serach=()=>{//点击搜索去搜索
        this.props.product.product_serach=this.state;
        this.props.product.getserach();
        console.log(this.props.product.product_serach)
    }

    showProduct=(key)=>{//点击按钮搜索对应的产品

        this.props.product.getproduct_byli(key);
    }

    approval=(product_id)=>{//批准上架
        let aa=document.getElementsByClassName("ant-space-item")
        console.log(aa)
        this.props.product.updataproduct_type(product_id)

    }
    recall=(product_id)=>{//撤回

    }
    edit=(product_id)=>{//编辑产品

        this.props.history.push({pathname:"/home/product/pro_mange/Product_details",product_id:product_id})
    }
    undercarriage=(product_id)=>{//下架产品

    }
    addProduct=()=>{//发布新产品
        this.props.history.push({pathname:"/home/product/pro_mange/Productadd"})
    }

}

export default Product_list
