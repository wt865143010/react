import React, {Component} from 'react';
import './userList.css';
import { Transfer } from 'antd';
import {inject,observer} from "mobx-react";
import {Button,message} from "antd";

@inject('system')

@observer
class addAccount extends Component {
    constructor() {
        super();
        this.state = {
            mockData: [],
            targetKeys: [],
            editor:[]
        };
    }
    componentWillMount() {
        ///是否有传参数
        let query=this.props.location.query;
        if (query!==undefined&&query!==''){
            this.setState({
                editor:query.item
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
    ///确认新增或修改
    saveSure=()=>{
        let newData={
            account:this.account.value,
            accountName:this.accountName.value,
            statueNew:this.statueNew.value,
            stips:this.stips.value,
            roleNew:this.state.targetKeys
        };
        if (this.account.value===''||this.accountName.value===''){
            message.error('账号和名称不能为空');
        }
        else{
            let query=this.props.location.query;
            if (query!==undefined&&query!==''){
               //修改的方法
                let Data={
                    account:this.account.value,
                    accountName:this.accountName.value,
                    statueNew:this.statueNew.value,
                    stips:this.stips.value,
                    roleNew:this.state.targetKeys,
                    id:query.item.id
                };
                this.props.system.saveEdit(Data)
                    .then(data=>{
                        this.props.history.push('/home/system/security_center/UserList/userList')
                    })

            }else {
                //新增的方法
                this.props.system.saveSure(newData)
                    .then(data=>{
                            this.props.history.push('/home/system/security_center/UserList/userList')
                        }
                    )
            }

            }
        };
    ////取消修改
    noSave=()=>{
        this.props.history.push('/home/system/security_center/UserList/userList')
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
                        *用户账号：<input type='text' className='input5' defaultValue={this.state.editor.number}
                        ref={account=>this.account=account} />

                        <span className='w50'></span>
                        *用户姓名：<input type='text' className='input5' defaultValue={this.state.editor.name}
                        ref={accountName=>this.accountName=accountName}/>
                        <span className='w50'></span>

                        *状态：<select name="" id="" style={{width:'200px'}} defaultValue={this.state.editor.statue}
                        ref={statueNew=>this.statueNew=statueNew}>
                        <option value="1">启用</option>
                        <option value="0">禁用</option>
                    </select>

                    </div>
                    <div className='stips'>
                        <span>备注：</span>
                        <textarea name="" id="" cols="80" rows="6" ref={stips=>this.stips=stips}></textarea>
                    </div>
                </div>
                <div>
                    <h1 className='title'>用户角色选择</h1>
                    <div className='role'>未分配角色<span className='w200'></span>已分配角色</div>
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
                <Button type="primary" className='btnSure' onClick={this.saveSure}>确认</Button>
                <Button className='btnSure' onClick={this.noSave}>取消</Button>



            </div>
        )
    }
}

export default addAccount