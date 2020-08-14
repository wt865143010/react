import React, {Component} from 'react';
import './role.css'
import {Button, message} from "antd";
import { useState } from 'react';
import { Tree } from 'antd';
import {inject, observer} from "mobx-react";
@inject('system')


@observer
class addRole extends Component {
    constructor() {
        super();
        this.state={
            roleEdit:[],
            role:[],
            reeData:[],
            checked:[],
            arr:[],
            myRole:[]
        }
    }
    componentWillMount() {
        //没有数据直接渲染全部角色
        this.props.system.getRoleA()
            .then(data=>{
                this.setState({
                    role:this.props.system.allRole
                })
            });
        let query=this.props.location.query;

        if (query!==undefined&&query!==''){
            let obj={id:query.item.id}
            this.setState({
                roleEdit:query.item
            })
            this.props.system.getRoleModTree(obj)
                .then(data=>{
                    let arr=[]
                    this.props.system.myQuan.map(item=>{
                        arr.push(item)
                    })
                    this.setState({
                        myRole:arr
                    })


                })
        }




    }
    ///确认新增或修改
    roleSure=()=>{
        let newData={
            name:this.roleMZ.value,
            number:this.roleNum.value,
            status:this.roleStu.value,
            roleDesc:this.stips.value,
            moduleId:this.state.checked
        };
        console.log(newData)
        if (this.roleMZ.value===''||this.roleNum.value===''){
            message.error('账号和名称不能为空');
        }
        else{
            let query=this.props.location.query;
            if (query!==undefined&&query!==''){
                //修改的方法
                let Data={
                    name:this.roleMZ.value,
                    number:this.roleNum.value,
                    status:this.roleStu.value,
                    roleDesc:this.stips.value,
                    moduleId:this.state.checked,
                    id:query.item.id
                };
                console.log(Data)
                this.props.system.roleXiuGai(Data)
                    .then(data=>{
                        message.success("修改成功")
                        this.props.history.push('/home/system/security_center/roleList/roleList')
                    })

            }else {
                //新增的方法
                this.props.system.roleNewAdd(newData)
                    .then(data=>{
                        message.success("新增成功")
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

    bindNav=(list)=>{
        console.log(list)
    }

    render() {


        var treeData= JSON.parse(JSON.stringify(this.state.role).replace(/moduleName/g,"title"));
        var aa= JSON.parse(JSON.stringify(treeData).replace(/id/g,"key"));
        var bb= JSON.parse(JSON.stringify(aa).replace(/moduleChildren/g,"children"));
        console.log(bb)


        const Demo=()=> {


            const [expandedKeys, setExpandedKeys] = useState(['0-0-0', '0-0-1']);
            const [checkedKeys, setCheckedKeys] = useState(this.state.myRole);
            const [selectedKeys, setSelectedKeys] = useState([]);
            const [autoExpandParent, setAutoExpandParent] = useState(true);

            const onExpand = expandedKeys => {
                console.log('onExpand', expandedKeys); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
                // or, you can remove all expanded children keys.

                setExpandedKeys(expandedKeys);
                setAutoExpandParent(false);
            };

            const onCheck = checkedKeys => {
                console.log('onCheck', checkedKeys);
               this.state.checked=checkedKeys
                setCheckedKeys(checkedKeys);

            };

            const onSelect = (selectedKeys, info) => {
                console.log('onSelect', info);
                setSelectedKeys(selectedKeys);
            };
            return (
                <Tree
                    checkable
                    onExpand={onExpand}
                    expandedKeys={expandedKeys}
                    autoExpandParent={autoExpandParent}
                    onCheck={onCheck}
                    checkedKeys={checkedKeys}
                    onSelect={onSelect}
                    selectedKeys={selectedKeys}
                    treeData={bb}

                />
            );
        }

        return (
            <div>
                <form action="" className='formT'>
                    <p>角色名称：<input type="text" ref={roleMZ=>this.roleMZ=roleMZ} defaultValue={this.state.roleEdit.name}/></p>
                    <p>角色编号：<input type="text" ref={roleNum=>this.roleNum=roleNum} defaultValue={this.state.roleEdit.number}/></p>
                    <p>
                        *状态：<select name="" id="" style={{width:'200px'}} ref={roleStu=>this.roleStu=roleStu} defaultValue={this.state.roleEdit.status}>
                        <option value="1">启用</option>
                        <option value="0">禁用</option>
                    </select>
                    </p>
                    <p >

                        描述：<textarea name="" id="" cols="30" rows="6" className='describe' ref={stips=>this.stips=stips} defaultValue={this.state.roleEdit.roleDesc}></textarea>
                    </p>
                    {/*<p>*/}
                    {/*    资源权限：<input type="checkbox"/>全选<br/>*/}
                    {/*    <input type="checkbox"/>系统管理<br/>*/}
                    {/*    <input type="checkbox"/>账号列表<br/>*/}
                    {/*    <input type="checkbox"/>新增账号<br/>*/}
                    {/*    <input type="checkbox"/>组织管理*/}
                    {/*</p>*/}
                    <div className='tree'>
                        <Demo />
                    </div>

                    <Button type="primary"  className='btn1' onClick={this.roleSure}>确认</Button>
                    <Button type="primary"  className='btn1' onClick={this.noSave}>取消</Button>
                </form>


            </div>
        )
    }
}

export default addRole