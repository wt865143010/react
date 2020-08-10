import React, {Component} from 'react';
import Nav from "./Nav";
import { Layout, Menu ,Breadcrumb } from 'antd';
import {Route} from 'react-router-dom'
import './home.css'
import addproduct_price_type from "../product/product_config/addproduct_price_type";
const { Header, Content, Footer, Sider } = Layout;



class Home extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                    >
                        <div className="logo" />
                        <Nav/>
                    </Sider>
                    <Layout className="site-layout" style={{ marginLeft: 200 }}>
                        <Header className="site-layout-background" style={{ padding: 0 }} />
                        <Content style={{ overflow: 'initial' }}>
                            <div className="site-layout-background" style={{ textAlign: 'center' }}>
                                 {/*展示所有子节点*/}
                                {this.props.children}

                                <Route path={"/home/product/product_config/addproduct_price_type"} component={addproduct_price_type}/>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Home
