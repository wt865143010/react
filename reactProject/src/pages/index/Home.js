import React, {Component} from 'react';
import Nav from "./Nav";
import { Layout, Menu ,Breadcrumb } from 'antd';
import {withRouter} from 'react-router-dom'
import './home.css';
import logo from '../../static/log.png'
const { Header, Content, Footer, Sider } = Layout;


@withRouter
class Home extends Component {
    logout=()=>{
        console.log(this)
        this.props.history.push('/login')
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');

    }
    render() {
        return (
            <div>
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="logo" />
                        <img src={logo} alt="" className='logoImg'/>
                        <input type="button" value='退出登录' onClick={this.logout} className='logOutBtn'/>
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
