import React, {Component} from 'react'
import './product_lable_title.css'

import {inject,observer} from "mobx-react";
import { Input,  Select,Button } from 'antd';
import { Table, Tag, Space } from 'antd';
import {toJS} from "mobx";

const { Option } = Select;









@inject('product')
@observer class Pro_price_type extends Component {
    constructor() {
        super();
        this.state={
            name:"",//价格类型
            number:"",//价格类型分类
            description:"",//价格类型描述

        }
    }

    UNSAFE_componentWillMount() {
        this.props.product.serachallproduct_type()//获取所有的价格类型
    }

    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: '价格类型分类',
                dataIndex: 'number',
                key: 'age',
            },
            {
                title: '价格类型',
                dataIndex: 'description',
                key: 'address',
            },
            {
                title: '价格类型描述',
                dataIndex: 'description',
                key: 'address',
            },

            {
                title: '备注',
                dataIndex: 'discount',
                key: 'address',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a>编辑</a>
                        <a onClick={this.delete_product_type.bind(this,record.id)}>删除</a>
                    </Space>
                ),
            },
        ];
/*        const data = [
            {
                key: '1',
                id:"1",
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',

            },
            {
                key: '2',
                id:"2",
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',

            },
            {
                key: '3',
                id:"3",
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',

            },
        ];*/
const data=this.props.product.allproduct_type
        console.log(toJS(this.props.product.allproduct_type))
       /* const data=this.props.product.serachallproduct_type
        console.log(data)*/
      /* console.log(this.props.product.allproduct_type)*/
        return (
            <div>
                <div className={"product_lable_title"}>
                    <div>产品管理>产品配置</div>
                    <hr/>
                    <div>
                        <span>产品价格类型</span>
                    </div>
                    <hr/>
                </div>
                <div className={"pro_type_serach"}>
                    <Input.Group compact>
                        <Input style={{ width: '30%',height:'30px' }} defaultValue="价格类型:" bordered={false} />
                        <Input style={{ width: '30%',height:'30px' }} onChange={val=>this.getvalue('name',val)} />
                    </Input.Group>
                    <Input.Group compact>
                        <Input style={{ width: '35%',height:'30px' }} defaultValue="价格类型分类:" bordered={false} />
                        <Select  className="select-drop-down"  onChange={val=>this.getselectvalue(val)} defaultValue={"请选择"} style={{ width: '30%',height:'30px' }}>
                            <Option value="请选择">请选择</Option>
                            <Option value="销售价格">销售价格</Option>
                            <Option value="礼品积分兑换">礼品积分兑换</Option>
                            <Option value="赠品价格">赠品价格</Option>
                            <Option value="其它">其它</Option>
                        </Select>
                    </Input.Group>
                    <Input.Group compact>
                        <Input style={{ width: '35%',height:'30px' }} defaultValue="价格类型描述:" bordered={false} />
                        <Input style={{ width: '30%',height:'30px' }} onChange={val=>this.getvalue('description',val)} />
                    </Input.Group>
                    <Button type="primary" onClick={this.serach_pro_type} style={{borderRadius:"5px"}}>
                        搜索
                    </Button>
                    <Button type="primary" onClick={this.addpro_type} style={{marginLeft:"20px",borderRadius:"5px"}}>
                      新增价格类型
                    </Button>

                </div>
                <Table columns={columns} dataSource={data} style={{marginTop:"30px"}}/>


            </div>
        )
    }
    getvalue=(key,val)=>{
        this.setState({
            [key]:val.target.value
        })
    }
    serach_pro_type=()=>{//搜索产品价格类型

        this.props.product.serach_pro_type(this.state)
    }
    addpro_type=()=>{
        console.log("新增价格类型")
        this.props.history.push("/home/product/product_config/addproduct_price_type")
    }
    getselectvalue=(val)=>{
        console.log(val)
       this.setState({
           number:val
       })


    }
    delete_product_type=(pro_price_type_id)=>{
        console.log(pro_price_type_id)
        this.props.product.delete_product_type(pro_price_type_id)
    }

}

export default Pro_price_type
