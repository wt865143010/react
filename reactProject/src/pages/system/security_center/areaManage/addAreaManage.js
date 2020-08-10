import React, {Component} from 'react';
import './areaManage.css';
import {Transfer,message} from 'antd';
import {inject,observer} from "mobx-react";
import {Button} from "antd";

@inject('system')

@observer
class addAreaManage extends Component {
    constructor() {
        super();
        this.state = {
            mockData:[],
            targetKeys:[],
            editData:[]
        };
    }
    componentWillMount() {
        ///是否有传参数
        let query=this.props.location.query;
        if (query!==undefined&&query!==''){
            this.setState({
                editData:query.item
            })
        }
        //发请求
        this.props.system.getRole()
            .then(data=>{
                console.log(this.props.system.role)
                this.setState({
                    mockData:this.props.system.role
                })
            })

    };
    saveAreaMsg=()=>{
        let dataNew={
            areaNew:this.state.targetKeys,
            chinese:this.chinese.value,
            English:this.English.value,
            tips:this.tips.value
        };
        if (this.chinese.value===''||this.English.value===''){
            message.error('大区名称不能为空');
        }
        else{
            let query=this.props.location.query;
            if (query!==undefined&&query!==''){
                //修改的方法
                let Data={
                    English:this.English.value,
                    chinese:this.chinese.value,
                    tips:this.tips.value,
                    areaNew:this.state.targetKeys,
                    id:query.item.id
                };
                this.props.system.editAreaMsg(Data)
                    .then(data=>{
                        this.props.history.push('/home/system/security_center/areaManage/areaManager')
                    })

            }else {
                //新增的方法
                this.props.system.newAreaMsg(dataNew)
                    .then(data=>{
                            this.props.history.push('/home/system/security_center/areaManage/areaManager')
                        }
                    )
            }

        }


    };
    ////取消修改
    noSave=()=>{
        this.props.history.push('/home/system/security_center/areaManage/areaManager')
    };




    handleChange = (targetKeys, direction, moveKeys) => {
        console.log(targetKeys, direction, moveKeys);
        this.setState({ targetKeys });
    };

    renderItem = item => {
        const customLabel = (
            <span className="custom-item">
        {item.title} - {item.description}
      </span>
        );

        return {
            label: customLabel, // for displayed item
            value: item.title, // for title and filter matching
        };
    };
    render() {
        return (
            <div>
                <div>
                    <div className='editLine'>
                        *大区中文名称：<input type='text' className='input5'
                                       ref={chinese=>this.chinese=chinese}
                                       defaultValue={this.state.editData.chineseName}/>
                        <span className='w50'></span>
                        *大区英文名称：<input type='text' className='input5'
                                       ref={English=>this.English=English}
                                       defaultValue={this.state.editData.englishName}/>
                    </div>
                    <div className='stips'>
                        <span>备注：</span>
                        <textarea name="" id="" cols="80" rows="6"
                                  ref={tips=>this.tips=tips}
                                  defaultValue={this.state.editData.tips}></textarea>
                    </div>
                </div>
                <div>
                    <h1 className='title'>配置管理区域</h1>
                    <div className='role'>未选择管理区域<span className='w200'></span>已选择管理区域</div>
                    <Transfer
                        dataSource={this.state.mockData}
                        listStyle={{
                            width: 300,
                            height: 300,
                        }}
                        targetKeys={this.state.targetKeys}
                        onChange={this.handleChange}
                        render={this.renderItem}
                    />

                </div>
                <Button type="primary" className='btnSure' onClick={this.saveAreaMsg}>确认</Button>
                <Button className='btnSure' onClick={this.noSave}>取消</Button>



            </div>
        )
    }
}

export default addAreaManage