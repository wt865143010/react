import React, {Component} from 'react'


import { Tabs } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const { TabPane } = Tabs;
const menu = (
    <Menu style={{marginTop:"-50px"}}>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
        <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
);
function callback(key) {
    console.log(key);
}
class Coupon extends Component {
    render() {
        return (
            <div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h1 style={{fontWeight:"bold"}}>我的优惠劵</h1>
                </div>
                <div style={{display:"flex", justifyContent: "space-between"}}>


                    <Tabs defaultActiveKey="1" onChange={callback} style={{width:"80%"}}>
                        <TabPane tab="未使用(0)" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="已使用(0)" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="已转让(0)" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="已失效(0)" key="4">
                            Content of Tab Pane 4
                        </TabPane>
                    </Tabs>
                    <Dropdown overlay={menu} >
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            所有优惠劵 <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default Coupon
