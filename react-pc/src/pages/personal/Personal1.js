import React, {Component} from 'react'
import { Layout, Menu } from 'antd';
import './a.css'
import {Link} from "react-router-dom";

const { Content, Footer, Sider } = Layout;


class Personal1 extends Component {

    constructor() {
        super();
        this.state={
            navName:[

                {name:"我的订单",url:"/home/Home/Personal1/Myorder"},
                {name:"我的优惠券",url:"/home/Home/Personal1/coupon"},
                {name:"en悦家"},
                {name:"ageLOC me"},
                {name:"收货地址",url:"/home/Home/Personal1/Address"},
                {name:"发票管理",url:"/home/Home/Personal1/Invoice"},
                {name:"预约中心"},




            ],
            navName1:[
                {name:"个人信息",url:"/home/Home/Personal1/PersonalInfo"},
                {name:"我的身份",url:'/home/Home/Personal1/myownOrder'},
                {name:"我的消息",url:'/home/Home/Personal1/myNews'},
                {name:"我的收藏",url:'/home/Home/Personal1/collect'},
                {name:"我的积分",url:'/home/Home/Personal1/score'},
            ]
        }
    }
    render() {
        let navarr=this.state.navName.map((item,index)=>{
            return (
                <Menu.Item key={index+1} style={{backgroundColor:"white"}}>
                    <Link to={{
                        pathname:item.url
                    }} style={{color:"black"}}>{item.name}</Link>
                </Menu.Item>
            )
        })

        let navarr1=this.state.navName1.map((item,index)=>{
            return (
                <Menu.Item key={index+1} style={{backgroundColor:"white"}}>
                    <Link to={{
                        pathname:item.url
                    }} style={{color:"black"}}>{item.name}</Link>
                </Menu.Item>
            )
        })
        return (
            <div className={"personal1"}>
                <div className={"btn"}>
                    <span style={{marginLeft: "40%",}}>en悦家会员点数抵扣除外的产品名单</span>
                    <span style={{marginLeft: "40%", fontSize: 30}} onClick={this.Close}>×</span>
                </div>
                <div style={{fontWeight:"bold",marginTop:"20px"}}>
                    <span>首页></span>
                    <span onClick={this.toA}>购物车></span>
                    <span onClick={this.toPersonal1}>个人中心></span>
                    <span>我的账号></span>
                    <span>个人信息</span>
                </div>
                <Layout style={{marginTop:"20px"}}>
                    <Sider

                        theme="light"
                        breakpoint="lg"
                        collapsedWidth="0"
                        className="mysider"
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        <div className="logo" />
                        <span style={{color:"black",fontWeight:"bold",marginLeft:"22px",marginTop:"20px"}}>
                             交易管理
                            </span>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} style={{backgroundColor:"white"}}>

                            {navarr}
                        </Menu>
                        <span style={{color:"black",fontWeight:"bold",marginLeft:"22px",marginTop:"20px"}}>
                             我的事业
                        </span>
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} style={{backgroundColor:"white"}}>
                            <Menu.Item  style={{backgroundColor:"white"}}>
                                NU 酷
                            </Menu.Item>
                        </Menu>
                        <span style={{color:"black",fontWeight:"bold",marginLeft:"22px",marginTop:"20px"}}>
                             我的账户
                        </span>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} style={{backgroundColor:"white"}}>

                            {navarr1}
                        </Menu>
                    </Sider>
                    <Layout>
                      {/*  <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />*/}
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                               {this.props.children}
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>,
            </div>
        )
    }
}

export default Personal1
