import React, {Component} from 'react';
import "./setting.css";
import {Button,message} from "antd";
import {Upload} from 'antd';
import {inject,observer} from "mobx-react";
import { UploadOutlined } from '@ant-design/icons';
const fileList = [

];

const props = {
    action: 'http://172.16.2.14:8080/NSChina/upload',
    listType: 'picture',
    headers:{
        Authorization:sessionStorage.getItem('token'),
    },
    name:'file',
    defaultFileList: [...fileList],
};
@inject('system')

@observer
class setting1 extends Component {
    constructor() {
        super();
        this.state={
            filename:'',
        }
    }
    submitX=()=>{
    let submit={
        siteName:this.siteName.value,
        registerAgreement:this.registerAgreement.value,
        arpAgreement:this.arpAgreement.value,
        logo:this.state.filename
    };
        console.log(submit);
    this.props.system.setting(submit)
        .then(data=>{
            if (data==200){
                message.success('提交成功')
            }
        })
    };
    onChange=(file)=>{
        console.log(file)
        let url=file.file.response;
          this.setState({
            filename:( url|| {}).fileUrl
        })



    };
    render() {
        return (
            <div>
                    <table className='tableS'>
                        <tbody>
                        <tr>
                            <td><span>* </span>站点名称：</td>
                            <td></td>
                            <td>
                                <input type="text" name="siteName" className='input5' maxLength="60" ref={siteName=>this.siteName=siteName}/>
                                <div>
                                    站点名称为必填项，长度限制在60字符以内
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>站点标志：</td>
                            <td></td>
                            <td>
                                <Upload {...props} onChange={this.onChange}>
                                    <Button>
                                        <UploadOutlined />点击上传
                                    </Button>
                                </Upload>
                                <br />
                            </td>

                        </tr>
                        <tr>
                            <td><span>* </span>会员注册协议：</td>
                            <td></td>
                            <td><textarea name="registerAgreement" id="" cols="100" rows="10" ref={registerAgreement=>this.registerAgreement=registerAgreement}></textarea></td>

                        </tr>
                        <tr>
                            <td><span>* </span>星级顾客(ARO)协议：</td>
                            <td></td>
                            <td><textarea name="arpAgreement" id="" cols="100" rows="10" ref={arpAgreement=>this.arpAgreement=arpAgreement}></textarea></td>
                        </tr>
                        </tbody>
                    </table>
                    <Button type="primary"  className='btn' onClick={this.submitX}>提交</Button>
            </div>
        )
    }
}

export default setting1