import React, {Component} from 'react';
import {Table} from "antd";
import {inject,observer} from "mobx-react";
import './cooperative.css'
import {Link} from "react-router-dom";


@inject('user')
@observer
class CooperativePartner extends Component {
    constructor() {
        super();
        this.state={
            columns:[
                {
                    title: '序号',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '姓名',
                    dataIndex: 'fri_name',
                    key: 'id',
                },
                {
                    title: '配偶或合作伙伴类型',
                    dataIndex: 'fri_type',
                    key: 'id',
                },
                {
                    title: '证件类型',
                    dataIndex: 'cart_type',
                    key: 'id',
                },
                {
                    title: '证件号码',
                    dataIndex: 'cart_id',
                    key: 'id',
                },
            ],
            friend:[]
        }
    }
    componentWillMount() {
        let user_cartId=this.props.location.query.user_cartId;
        this.props.user.getFriend({user_cartId:user_cartId})
            .then(data=>{
                this.setState({
                    friend:this.props.user.friend
                })
            })
    }
    addCoo=()=>{
        console.log(this.coo_name.value)
        console.log(this.cart_type.value)
        console.log(this.cart_id.value)
        this.props.user.addCoo()
            .then(data=>{
                this.setState({
                    friend:this.props.user.friend
                })
            })
    }
    render() {
        return (
            <div>
                <div className='nav'>
                    <span>商城管理系统</span><span>></span>
                    <Link to='/home/user/UserList'>用户列表</Link><span>></span>
                    <span>开通费合作伙伴</span>
                </div>
                <h1>开通合作伙伴</h1>
                <div>
                    <div className='TopBox'>
                        <div>
                            姓名：<input type="text" ref={coo_name=>this.coo_name=coo_name}/>
                        </div>
                        <div>
                            身份证类型：
                            <select name="" id="" ref={cart_type=>this.cart_type=cart_type}>
                                <option value="身份证">身份证</option>
                                <option value="军官证">军官证</option>
                                <option value="护照">护照</option>
                            </select>
                        </div>
                        <div>
                            证件号码：<input type="text" placeholder='请输入对应的证件号码' ref={cart_id=>this.cart_id=cart_id}/>
                        </div>
                        <input type="button" value='开通合作伙伴' onClick={this.addCoo}/>
                    </div>
                    <Table pagination={false} columns={this.state.columns} dataSource={this.state.friend} />
                </div>

            </div>
        )
    }
}

export default CooperativePartner
