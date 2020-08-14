import React, {Component} from 'react'

import {observer,inject} from 'mobx-react'



import { Form,Input,Checkbox} from 'antd'
@inject("myorder")

@observer
class ss extends Component {

    constructor(props) {
        super(props);
        this.state={
            mykey:""
        }
    }

    formRef = React.createRef();
   /*UNSAFE_componentWillMount() {
       const [form] = Form.useForm();
   }*/

   /* onFill = () => {
        this.formRef.current.setFieldsValue({
            username: this.state.mykey,
        });
    };
    componentDidUpdate(){
        this.onFill()
    }*/

    myAllData=()=>{
        // let a = this.formRef.current.getFieldValue("username");
        /*let b = this.formRef.current.getFieldsValue(["Username","password"]);
        console.log(b);
        this.formRef.current.setFieldsValue({
            org:"成都"
        })*/
        let b = this.formRef.current.getFieldsValue();
        console.log(b)

        this.props.myorder.myform(b).then((data)=>{
                console.log(data)
        }

        )
    }

    /*设置表单的某些值*/
    /*onFill = () => {
        this.formRef.current.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };*/
    myInput=(e)=>{
        console.log(e.target.value);
        let a = this.formRef.current.getFieldValue("Username")
        console.log(a);
        let b=e.target.value;
        this.setState({
            mykey:b
        })
        // console.log(e.target.value);
    }

    resetValues=()=>{
        this.setState({
            mykey:""
        })
        // this.formRef.current.resetFields()
        /*this.formRef.current.setFieldsValue({
            password:""
        })*/
        this.formRef.current.resetFields();
    }
    render() {
        // const Demo = () => {
        //      const { getFieldDecorator } = this.props.form;


            const layout = {
                labelCol: { span: 4 },
                wrapperCol: { span: 16 },
            };
            const tailLayout = {
                wrapperCol: { offset: 4, span: 16 },
            };
            const onFinish = values => {
                console.log(values)
                console.log('Success:', values);

            };
            const onFinishFailed = errorInfo => {
                console.log('Failed:', errorInfo);
            };


        // }

        return (
            <div>
                {/*<Demo></Demo>*/}
                <Form

                    // form={form}
                    ref={this.formRef}
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    /*initialValues={{
                        Username: 'debug1',
                        password: 'debug2',
                         remember: true
                    }}*/
                >
                    <Form.Item
                        label="用户名"
                        name="Username"
                        // name="field"
                        // noStyle
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Form.Item>
                            <input  type="text"  value={this.state.mykey} onChange={this.myInput}/>
                            {/*<input type="text" placeholder="这是测试"/>*/}
                        </Form.Item>
                        {/*<Input />*/}


                    </Form.Item>


                    <Form.Item
                        label="密码"
                        name="password"
                        colon={false}
                        // noStyle
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password />
                        {/*<input type="text" initialvalues="" />*/}
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>记住密码</Checkbox>
                        {/*<input type="checkbox"/>记住密码*/}
                    </Form.Item>

                    <Form.Item label={"组织架构"} colon={false} name={"org"}>
                        <select >
                            <option value="四川">四川</option>
                            <option value="成都">成都</option>
                            <option value="云南">云南</option>
                        </select>
                    </Form.Item>
                    {/* <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>*/}
                    <button onClick={this.myAllData.bind(this)}>测试</button>
                    <Form.Item>
                        <button onClick={this.resetValues.bind(this)} type="button">重置</button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default ss