import React, {Component} from 'react'
import './product_list.css'
import { Input, Select,Button} from 'antd';
import { DatePicker, Space } from 'antd';
import {inject,observer} from "mobx-react";
import { Pagination } from 'antd';
import { Table } from 'antd';
import {toJS} from "mobx";

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
            product_num:"",//产品编号
            product_name:"",//产品名称
            product_type:"",//产品属性
            product_label:"",//产品标签
            start_time:"",
            end_time:'',
        }

    }

    UNSAFE_componentWillMount() {
        this.props.product.getAllproduct()

        }






    render() {
        const data=this.props.product.productAll
        const columns = [
            {
                title: '产品编号',
                dataIndex: 'id',
            },
            {
                title: '产品名称',
                dataIndex: 'product_name',
            },
            {
                title: '产品英文名',
                dataIndex: 'product_englishname',
            },
            {
                title: '是否直销',
                dataIndex: 'is_selling',
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
                                <a  onClick={this.recall}>撤回</a>
                            </Space>
                        )
                    }else {
                        return (
                            <Space size="middle">
                                <a >编辑</a>
                                <a >下架</a>
                            </Space>
                        )
                    }
                }
            },
        ];

        return (
            <div className="product_list">
                <div>产品管理>产品列表</div>
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
                        <Select  className="select-drop-down"  onChange={val=>this.getselectvalue('product_label',val)}>
                            <Option value="Zhejiang">Zhejiang</Option>
                            <Option value="Jiangsu">Jiangsu</Option>
                        </Select>

                    </Input.Group>
                    <Input.Group compact>
                        <Input style={{ width: '8%' }} defaultValue="产品属性:"bordered={false} />
                        <Select  className="select-drop-down"  onChange={val=>this.getselectvalue('product_type',val)}>
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
                        <Input style={{ width: '5%' }} onChange={val=>this.getvalue('product_num',val)} />
                    </Input.Group>

                    <Input.Group compact>
                        <Input style={{ width: '8%' }} defaultValue="产品名称:"bordered={false} />
                        <Input style={{ width: '5%' }} onChange={val=>this.getvalue('product_name',val)} />

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
                    <Button type="primary" onClick={this.totest}>下架</Button>
                    <Button type="primary">发布新产品</Button>
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
    gettime=(date)=>{
        this.setState({
            start_time:date[0]._d.toLocaleString(),
            end_time:date[1]._d.toLocaleString()
        })

    }
    getselectvalue=(key,val)=>{
        this.setState({
            [key]:val
        })
    }
    getvalue=(key,val)=>{
       this.setState({
           [key]:val.target.value
       })
    }
    serach=()=>{
        this.props.product.product_serach=this.state;
        this.props.product.getserach();
        console.log(this.props.product.product_serach)
    }

    showProduct=(key)=>{

        this.props.product.getproduct_byli(key);
    }
    totest=()=>{

        this.props.history.push("/Test")
    }
    approval=(product_id)=>{
        let aa=document.getElementsByClassName("ant-space-item")
        console.log(aa)
        this.props.product.updataproduct_type(product_id)

    }

}

export default Product_list
