import React, {Component} from 'react';
import { Menu } from 'antd';
// import {LaptopOutlined} from '@ant-design/icons';
import {inject,observer} from "mobx-react";
import {Link} from "react-router-dom";
import './nav.css'

const { SubMenu } = Menu;

@inject("user")


@observer
class Nav extends Component {
    constructor() {
        super();
        this.state={
            menuList:[]
        }
    };
    bindMenu(list){
        let menuList= list.map(item=>{
            if (item.menuChilds.length===0){
                return  <Menu.Item key={item.menuId}>
                    <Link to={item.pathname}>{item.menuName}</Link>
                </Menu.Item>
            }else {
                return <SubMenu key={item.menuId} title={item.menuName}>
                    {this.bindMenu(item.menuChilds)}
                </SubMenu>
            }

        })
        return menuList;
    };
    UNSAFE_componentWillMount() {
        let menulist=this.bindMenu(this.props.user.user.menuInfo)
        this.setState({
            menuList:menulist
        })
    }

    render() {
        console.log(this.props.user.user.menuInfo[0].menuName)
        return (
            <div className='marginT'>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                >
                    {this.state.menuList}
                </Menu>
            </div>
        )
    }
}

export default Nav
