import React, {Component} from 'react'
import {Table, Tag, Space, DatePicker, Select} from 'antd';
import {inject,observer} from "mobx-react";





const { RangePicker } = DatePicker;

const { Option } = Select;
@inject('product')
@observer class Test extends Component {


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
                dataIndex: 'address',
            },


        {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a onClick={this.approval.bind(this,record.id)}>批准</a>
                        <a onClick={this.recall}>撤回</a>
                    </Space>
                ),
            },
        ];


        return (
            <div>
                <h1>laile </h1>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
    approval=(product_id)=>{
       this.props.product.updataproduct_type(product_id)

    }


}

export default Test
