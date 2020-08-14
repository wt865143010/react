import React, {Component} from 'react'
import './product_lable_title.css'

import {Table,  Space, Input} from 'antd';
import {inject,observer} from "mobx-react";

import { Modal, Button } from 'antd';



@inject('product')
@observer class Product_lable extends Component {
    constructor() {
        super();
        this.state={
            labelName:"",
            labelDescription:"",
            visible: false
        }
    }

    UNSAFE_componentWillMount() {
        this.props.product.getAlllabel()
    }


    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {

        console.log(this.state)
        this.props.product.addproduct_lable.labelName=this.state.labelName
        this.props.product.addproduct_lable.labelDescription=this.state.labelDescription


        this.props.product.add_lable()//新添加一个产品标签
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {


        const columns = [
            {
                title: '标签名',
                dataIndex: 'labelName',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: '描述',
                dataIndex: 'labelDescription',
                key: 'name',
                render: text => <a>{text}</a>,
            },

            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a onClick={this.delete_lable.bind(this,record.id)}>删除</a>
                    </Space>
                ),
            },
        ];
       /* const data = [
            {
                key: '1',
                name: 'John Brown',
                id:"1"

            },
            {
                key: '2',
                name: 'Jim Green',
                id:"2"

            },
            {
                key: '3',
                name: 'Joe Black',
                id:"3"

            },
        ];*/
       const data=this.props.product.allproductLabel;
        return (
            <div>





                <div className={"product_lable_title"}>
                    <div>产品配置>产品标签</div>
                    <hr/>
                    <div>
                        <span>产品标签</span>
                        <div>定义产品所属的各个标签，如果在上架产品时给产品指定了标签，则首页会浏览到各标签中所指定的产品</div>
                    </div>

                    <hr/>
                </div>
                <div className={"product_lable_content"}>


                    <div className={"addlabel"}>
                        <Button type="primary" onClick={this.showModal}>
                            新增产品标签
                        </Button>
                        <Modal
                            title="新增产品标签"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >

                            <Input.Group compact>
                                <Input style={{ width: '30%',height:'40px' }} defaultValue="标签名称:" bordered={false} />
                                <Input style={{ width: '30%',height:'40px' }} onChange={val=>this.getvalue('labelName',val)} />


                            </Input.Group>
                            <Input.Group compact style={{marginTop:"10px"}}>
                                <Input style={{ width: '30%',height:'40px' }} defaultValue="标签描述:" bordered={false} />
                                <Input style={{ width: '30%',height:'40px' }} onChange={val=>this.getvalue('labelDescription',val)} />


                            </Input.Group>
                        </Modal>
                    </div>





                    <Table columns={columns} dataSource={data} style={{marginTop:"20px"}}/>
                </div>


            </div>
        )
    }


    delete_lable=(lable_id)=>{//删除该标签
        this.props.product.delete_lable(lable_id)
    }
    getvalue=(key,val)=>{//获取新添加标签的名称

        this.setState({
           [key]:val.target.value
        })
    }

}

export default Product_lable
