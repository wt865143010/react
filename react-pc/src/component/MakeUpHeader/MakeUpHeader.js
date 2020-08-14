import React, {Component} from 'react';
import {Tabs} from 'antd'
import './MakeUpHeader.css'
const { TabPane } = Tabs;
class MakeUpHeader extends Component {
    callback=(key)=>{
        console.log(key);
    }
    render() {
        return (
            <div className='MakeUpHeadBox'>
                <div className='MakeUpHeadBoxTop'>
                    <strong>功效</strong>
                    <div>
                        <Tabs defaultActiveKey="1" onChange={this.callback}>
                            <TabPane tab="面部底妆" key="1">
                                <span className='tabs_tags'>粉底液</span>
                                <span className='tabs_tags'>粉饼蜜粉</span>
                            </TabPane>
                            <TabPane tab="唇部彩妆" key="2">
                                <span className='tabs_tags'>唇膏</span>
                                <span className='tabs_tags'>唇彩</span>
                            </TabPane>
                            <TabPane tab="眼部彩妆" key="3">
                                <span className='tabs_tags'>睫毛膏</span>
                            </TabPane>
                            <TabPane tab="卸妆" key="4">
                                <span className='tabs_tags'>卸妆乳</span>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className='MakeUpHeadBoxMid'>
                    <strong>系列</strong>
                    <span>凝韵系列</span>
                </div>
                <div className='MakeUpHeadBoxBot'>
                    <strong>排序</strong>
                    <ul>
                        <li>综合排序</li>
                        <li>销量排序</li>
                        <li>人气排序</li>
                        <li>价格正序</li>
                        <li>价格倒序</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MakeUpHeader
