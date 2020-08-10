import React, {Component} from 'react';
import { Tabs } from 'antd';
import Setting1 from "./setting1";
import Setting2 from "./setting2";
import Setting3 from "./setting3";
import Setting4 from "./setting4";
const { TabPane } = Tabs;
class setting extends Component {
    render() {
        function callback(key) {
            // console.log(key)
        }
        return (
            <div>
                <Tabs onChange={callback} type="card">
                    <TabPane tab="站点信息" key="1">
                        <Setting1></Setting1>
                    </TabPane>
                    <TabPane tab="安全设置" key="2">
                        <Setting2></Setting2>
                    </TabPane>
                    <TabPane tab="订单设置" key="3">
                        <Setting3></Setting3>
                    </TabPane>
                    <TabPane tab="产品设置" key="4">
                        <Setting4></Setting4>
                    </TabPane>
                </Tabs>

            </div>
        )
    }
}

export default setting