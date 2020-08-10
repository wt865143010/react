import React, {Component} from 'react';
import "./setting.css";
import {Button} from "antd";
import {Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const fileList = [
    {
        uid: '-1',
        status: 'done',
        // url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        // thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }
];

const props = {
    action: 'http://172.16.2.3:2555/xiexie',
    listType: 'picture',
    name:'myFile',
    defaultFileList: [...fileList],
};


class setting1 extends Component {
    render() {
        return (
            <div>
                <form action="http://172.16.2.3:2555/haha" method='post'>
                    <table className='tableS'>
                        <tbody>
                        <tr>
                            <td><span>* </span>站点名称：</td>
                            <td></td>
                            <td>
                                <input type="text" name="stationName" className='input5' maxLength="60"/>
                                <div>
                                    站点名称为必填项，长度限制在60字符以内
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>站点标志：</td>
                            <td></td>
                            <td>
                                <Upload {...props}>
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
                            <td><textarea name="zhuCeXieYi" id="" cols="100" rows="10"></textarea></td>

                        </tr>
                        <tr>
                            <td><span>* </span>星级顾客(ARO)协议：</td>
                            <td></td>
                            <td><textarea name="AROXieYi" id="" cols="100" rows="10"></textarea></td>
                        </tr>

                        </tbody>
                    </table>
                    <Button type="primary" htmlType="submit" className='btn'>确认</Button>
                </form>
            </div>
        )
    }
}

export default setting1