import React, {Component} from 'react';
import './Organization.css';
import {Button,Divider,Layout ,Menu } from "antd";
import OrganizaForm from "./OrganizaForm";
const {  Sider, Content } = Layout;
const { SubMenu } = Menu;
class Organization extends Component {
    constructor() {
        super();
        this.state={
            title:'编辑基本信息'
        }
    }
    handleClick = e => {
        console.log('click ', e);
    };
    addOrganize=()=>{
        this.setState({
            title:'新增基本信息'
        })


    };

    render() {
        return (
            <div>
                <Layout>
                    <Sider width={220} style={{backgroundColor:'white'}}>
                        <div className='white'>
                            如新中国公司
                            <span className='white' onClick={this.addOrganize}><button>+添加分公司</button></span>
                        </div>
                        <Menu
                            onClick={this.handleClick}
                            style={{ width: '100%' }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu key="sub2"  title="四川分公司">
                                <Menu.Item key="5">成都子公司</Menu.Item>
                                <Menu.Item key="6">绵阳子公司</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title="北京分公司">
                                <Menu.Item key="7">朝阳子公司</Menu.Item>
                                <Menu.Item key="8">xx子公司</Menu.Item>

                            </SubMenu>

                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{backgroundColor:'white'}}>
                            <div id='titleO'>{this.state.title}</div>
                            <OrganizaForm></OrganizaForm>

                        </Content>
                    </Layout>
                </Layout>




            </div>
        );
    }
}

export default Organization