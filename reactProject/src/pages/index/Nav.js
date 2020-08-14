import React, {Component} from 'react';
import { Menu } from 'antd';
// import {LaptopOutlined} from '@ant-design/icons';
import {inject,observer} from "mobx-react";
import {Link} from "react-router-dom";
import './nav.css'
import {toJS} from "mobx";

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
            if (item.moduleChildren===null){
                return  <Menu.Item key={item.id}>
                    <Link to={item.pathName}>{item.moduleName}</Link>
                </Menu.Item>
            }else {
                return <SubMenu key={item.id} title={item.moduleName}>
                    {this.bindMenu(item.moduleChildren)}
                </SubMenu>
            }

        })
        return menuList;
    };
    UNSAFE_componentWillMount() {
        console.log(typeof this.props.user.user)
        let menulist=this.bindMenu(this.props.user.user)
        this.setState({
            menuList:menulist
        })
    }

    render() {
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
