import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
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
            let obj={username:values.username,pwd:values.password}
            // let newObj=JSON.stringify(obj)
            // console.log('Success:', values);
            this.props.user.login(obj)
                .then(data=>{
                    // console.log(this.props.user.user.menuInfo[0].menuName)
                        this.props.history.push("/home")
                })
                .catch(err=>{
                    console.log(err)
                })
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return (
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
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Login
