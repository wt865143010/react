import React from "react";
import { Form, Input, Button, Checkbox,message} from 'antd';
import {inject,observer} from "mobx-react";
import './login.css'

@inject('user')


@observer
class Login extends React.Component{
    render() {
        const layout = {
            labelCol: { span: 24 },
            wrapperCol: { span: 24 },
        };
        const tailLayout = {
            wrapperCol: { offset: 0, span: 24 },
        };

        const onFinish = values => {
            let obj={number:values.username,password:values.password}
            // let newObj=JSON.stringify(obj)
            // console.log('Success:', values);
            this.props.user.login(obj)
                .then(data=>{
                    console.log(data)
                    if (data===1){
                        message.success('登录成功')
                        this.props.history.push("/home")

                    }else {
                        message.error('登录失败')
                    }

                })
        };

        const onFinishFailed = errorInfo => {
            message.error('请输入正确的账号密码！')
        };

        return (
            <div>
                <div className='bigImg'>
                    <img src={require("../../static/bg2.jpg")} alt=""/>
                </div>
              <div className='loginBigBox'>
                <div className='loginBox'>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button className='primary' htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            </div>
        );
    }
}
export default Login
