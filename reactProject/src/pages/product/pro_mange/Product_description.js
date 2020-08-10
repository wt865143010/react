import React, {Component} from 'react'

import {Upload, Modal, Button, Input} from 'antd';
import { PlusOutlined } from '@ant-design/icons';


import { Checkbox } from 'antd';
import {inject,observer} from "mobx-react";



function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
@inject('product')
@observer class Product_description extends Component {
constructor() {
    super();
    this.state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },

        ],
        checkedValues:"",
        productDescription:"",
        lableName:"",
        labelDescription:"",
        plainOptions : ['苹果', 'Pear', 'Orange'],
         arr:[],

    };
}


    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {//点击图片放大
        console.log(111111111)
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    handleChange = ({file, fileList }) => {
        console.log(2222)
        console.log(JSON.stringify(file)); // file 是当前正在上传的 单个 img
        console.log(JSON.stringify(fileList)); // fileList 是已上传的全部 img 列表

        return this.setState({ fileList });
    }




    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {

        this.props.product.addproduct_lable.lableName=this.state.lableName
        this.props.product.addproduct_lable.labelDescription=this.state.labelDescription


        this.props.product.add_lable()//新添加一个产品标签
        this.setState({
            visible: false,
        });
    };

    handleCanceladd = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };





    render() {
        console.log(this.props.product.productId)
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        // const plainOptions = ['苹果', 'Pear', 'Orange'];



        return (
            <div>
                <div style={{display:"flex",marginTop:"50px"}}>
                    <span>产品图片：</span>
                    <div>
                        <Upload
                            name="myfile"
                            action="http://localhost:3210/test/addimg"

                            listType="picture-card"
                            fileList={fileList}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload>
                        <Modal
                            visible={previewVisible}
                            title={previewTitle}
                            footer={null}
                            onCancel={this.handleCancel}
                        >
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                        <span>支持jpg,gif,png格式。建议为500x500像素</span>
                    </div>

                </div>
                <div style={{display:"flex",marginTop:"50px"}}>
                    <span>产品标签</span>
                    <Checkbox.Group options={this.state.plainOptions} onChange={this.onChange} style={{marginLeft:"40px"}}/>

                        <Button type="primary" onClick={this.showModal} style={{borderRadius:"10px",marginLeft:"20px"}}>
                            新增
                        </Button>
                        <Modal
                            title="新增产品标签"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCanceladd}
                        >

                            <Input.Group compact>
                                <Input style={{ width: '30%',height:'40px' }} defaultValue="标签名称:" bordered={false} />
                                <Input style={{ width: '30%',height:'40px' }} onChange={val=>this.getvalue('lableName',val)} />


                            </Input.Group>
                            <Input.Group compact style={{marginTop:"10px"}}>
                                <Input style={{ width: '30%',height:'40px' }} defaultValue="标签描述:" bordered={false} />
                                <Input style={{ width: '30%',height:'40px' }} onChange={val=>this.getvalue('labelDescription',val)} />


                            </Input.Group>
                        </Modal>

                </div>
                <div style={{display:"flex",width:"500px",marginTop:"20px"}}>
                    <span>产品介绍:</span>
                    <textarea name="" id="" cols="60" rows="5" style={{marginLeft:"10px"}} onChange={this.gettextareavalue}></textarea>
                </div>



                <div style={{marginTop:"50px"}}>


                <Button type="primary" style={{marginLeft:"-300px",width:"150px",borderRadius:"10px",backgroundColor:"#999999"}}onClick={this.to_Product_price}>上一步</Button>
                <Button type="primary" style={{marginLeft:"50px",width:"150px",borderRadius:"10px"}} onClick={this.to_UpperandLower}>下一步</Button>
                <Button type="primary" style={{marginLeft:"50px",width:"150px",borderRadius:"10px"}}>提交审批</Button>
                </div>

            </div>
        )
    }
    onChange=(checkedValues)=> {
        console.log(this.state.plainOptions)




        this.setState({
            checkedValues:checkedValues
        })
        console.log('checked = ', checkedValues);

    }
    gettextareavalue=(val)=>{
        console.log(val.target.value)
        this.setState({
            productDescription:val.target.value
        })
    }
    to_Product_price=()=>{
        this.props.to_Product_price(2)
    }
    getvalue=(key,val)=>{//获取新添加标签的名称

        this.setState({
            [key]:val.target.value
        })
    }
    to_UpperandLower=()=>{

        for(let i=0;i<this.state.checkedValues.length;i++){
            for(let j=0;j<this.state.plainOptions.length;j++){
                if(this.state.checkedValues[i]==this.state.plainOptions[j]){
                    console.log(this.state.plainOptions[j],j,i)
                    this.state.arr.push({labelId:j+1})
                }
            }
        }


        this.props.product.addProduct_description=this.state.arr
        this.props.product.addProduct_description.push({productDescription:this.state.productDescription})
        console.log( this.props.product.addProduct_description)
        //this.props.product.addproduct_description()
        this.setState({
            arr:[]
        })
        this.props.to_UpperandLower(8)


    }
}

export default Product_description
