import React, {Component} from 'react';
import './role.css'
import {Button, message} from "antd";

class addRole extends Component {
    constructor() {
        super();
        let state={
            roleEdit:[]
        }
    }
    componentWillMount() {
        let query=this.props.location.query;
        if (query!==undefined&&query!==''){
            this.setState({
                roleEdit:query.item
            })
        }

    }
    ///确认新增或修改
    roleSure=()=>{
        let newData={
            roleMZ:this.roleMZ.value,
            roleNum:this.roleNum.value,
            roleStu:this.roleStu.value,
            stips:this.stips.value,
        };
        if (this.roleMZ.value===''||this.roleNum.value===''){
            message.error('账号和名称不能为空');
        }
        else{
            let query=this.props.location.query;
            if (query!==undefined&&query!==''){
                //修改的方法
                let Data={
                    roleMZ:this.roleMZ.value,
                    roleNum:this.roleNum.value,
                    roleStu:this.roleStu.value,
                    stips:this.stips.value,
                    id:query.item.id
                };
                this.props.system.roleXiuGai(Data)
                    .then(data=>{
                        this.props.history.push('/home/system/security_center/roleList/roleList')
                    })

            }else {
                //新增的方法
                this.props.system.roleNewAdd(newData)
                    .then(data=>{
                            this.props.history.push('/home/system/security_center/roleList/roleList')
                        }
                    )
            }
        }
    };
    ////取消修改
    noSave=()=>{
        this.props.history.push('/home/system/security_center/roleList/roleList')
    };


    render() {
        return (
            <div>
                <form action="" className='formT'>
                    <p>角色名称：<input type="text" ref={roleMZ=>this.roleMZ=roleMZ}/></p>
                    <p>角色编号：<input type="text" ref={roleNum=>this.roleNum=roleNum}/></p>
                    <p>
                        *状态：<select name="" id="" style={{width:'200px'}} ref={roleStu=>this.roleStu=roleStu}>
                        <option value="1">启用</option>
                        <option value="0">禁用</option>
                    </select>
                    </p>
                    <p >

                        描述：<textarea name="" id="" cols="30" rows="6" className='describe' ref={stips=>this.stips=stips}></textarea>
                    </p>
                    <p>
                        资源权限：<input type="checkbox"/>全选<br/>
                        <input type="checkbox"/>系统管理<br/>
                        <input type="checkbox"/>账号列表<br/>
                        <input type="checkbox"/>新增账号<br/>
                        <input type="checkbox"/>组织管理
                    </p>
                    <Button type="primary"  className='btn1' onClick={this.roleSure}>确认</Button>
                    <Button type="primary"  className='btn1' onClick={this.noSave}>取消</Button>
                </form>


            </div>
        )
    }
}

export default addRole