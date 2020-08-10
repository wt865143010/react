import React, { Component } from 'react';
import './Coupondetails.css'
import {inject,observer} from "mobx-react";

import { Table,Space,Pagination } from 'antd'
import {toJS} from 'mobx'

@inject('coupon')

@observer
class Coupondetails extends Component {
    constructor(){
        super()
        this.state={
            chooseproduct:[],
            optionaldata:[],
            userdetailsdata:[],
        }
    }

    UNSAFE_componentWillMount(){
        this.state.chooseproduct = toJS(this.props.coupon.chooseproduct)
        this.state.optionaldata = toJS(this.props.coupon.optionaldata)
        this.state.userdetailsdata = toJS(this.props.coupon.userdetailsdata)
    }
    render() {
        const columns = [
            {
                title: '产品名称',
                dataIndex: 'requiredProductName',
                key: 'requiredProductName',
            },
            {
                title: '销售价格',
                dataIndex: 'sellingprice',
                key: 'sellingprice',
            },
            
            {
                title: '必选数量',
                dataIndex:'choosenumber',
                key: 'choosenumber',

            },

        ]
        const optionalcolumns = [
            {
                title: '产品名称',
                dataIndex: 'OptionalProductName',
                key: 'OptionalProductName',
            },
            
            {
                title: '销售价格',
                dataIndex:'sellingprice',
                key: 'sellingprice',

            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        {/* <a>{this.operation1.bind(this)}</ a> */}
                        <a className='operation1'>移除</a>
                    </Space>
                ),
            },
        ]

        const userdatacolumns=[
            {
                title: '优惠券编码',
                dataIndex: 'couponID',
                key: 'couponID',
            },
            
            {
                title: '用户姓名',
                dataIndex:'username',
                key: 'username',

            },
            {
                title: '用户手机',
                dataIndex: 'userphone',
                key: 'userphone',
            },
            {
                title: '卡号',
                dataIndex: 'cardID',
                key: 'cardID',
            },
            {
                title: '用户类型',
                dataIndex: 'usertype',
                key: 'usertype',
            },
            {
                title: '用户等级',
                dataIndex: 'usergrade',
                key: 'usergrade',
            },
            {
                title: '用户职级',
                dataIndex: 'userposition',
                key: 'userposition',
            },
            {
                title: '领取时间',
                dataIndex: 'collectiontime',
                key: 'collectiontime',
            },
            {
                title: '领取方式',
                dataIndex: 'collectionaction',
                key: 'collectionaction',
            },
            {
                title: '使用时间',
                dataIndex: 'usertime',
                key: 'usertime',
            },
            {
                title: '状态',
                dataIndex: 'state',
                key: 'state',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    
  
                    <Space size="middle">
                        {/* <a>{this.operation1.bind(this)}</ a> */}
                        <a className='operation1'>移除</a>
                    </Space>
                ),
            },
        ]
        return (
            <div className='detailsbox'>
                <h3  className='title' style={{fontWeight:'700',fontSize:'20px'}}>发送给会员</h3>
                <div className='line'></div>
                <div className='detailscontent clearfix'>
                    <div className='top'>
                        <div className='fristline clearfix'>
                                <div className='addleft'>优惠券编号：</div>
                                <div className='addright'>123456</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>优惠券类型：</div>
                                <div className='addright'>优惠券</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>优惠券名称：</div>
                                <div className='addright'>新人礼品券</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>* 优惠金额：</div>
                                <div className='addright'>固定金额优惠（金额：减￥100.00，业绩：加100.00，奖金基数：加0，基数：减10）

</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>优惠券种类：</div>
                                <div className='addright'>产品券</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>* 满足金额：</div>
                                <div className='addright'>不限制</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>发放总量：</div>
                                <div className='addright'>1000000张</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>有效日期：</div>
                                <div className='addright'>指定日期 2017-10-10 至 2017-10-15</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>是否可转让：</div>
                                <div className='addright'>否</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>是否可叠加：</div>
                                <div className='addright'>是</div>
                        </div>
                        <div className='fristline clearfix'>
                                <div className='addleft'>优惠价格类型：</div>
                                <div className='addright'>常规价格类型</div>
                        </div>
                        <div className='fristline choosecouponline clearfix'>
                        <div className='choosecouponleft'>*选择可用券范围：</div>
                        <div className='choosecouponright'>
                            <div className='choosecoupontop'>
                                <div>
                                    <span className='mandatory'>必选产品</span>
                                    
                                </div>
                                <div>
                                    <Table pagination={false} bordered dataSource={this.state.chooseproduct} columns={columns} />
                                </div>
                            </div>
                            <div className='choosecouponbottom'>
                                <div>
                                    <span className='mandatory'>可选产品</span>
                                    

                                </div>
                                <div>
                                    <Table pagination={false} bordered dataSource={this.state.optionaldata} columns={optionalcolumns} />
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className='fristline choosecouponline clearfix'>
                            <div className='choosecouponleft'>赠送礼品：</div>
                            <div className='choosecouponright'>
                            <div className='choosecoupontop'>
                                    <div>
                                        <span className='mandatory'>必送赠品</span>
                                        <span className='addproduct'>新增赠品</span>
                                    </div>
                                    <div>
                                        <Table pagination={false} bordered dataSource={this.state.chooseproduct} columns={columns} />;
                                    </div>
                                </div>
                                <div className='choosecouponbottom'>
                                    <div>
                                        <span className='mandatory'>可选赠品</span>
                                        <span className='addproduct'>新增赠品</span>
                                        <span>指定产品中任选</span>
                                        <input placeholder='1' className='itemnumber'/>
                                        <span>件</span>
                                    </div>
                                    <div>
                                        <Table pagination={false} bordered dataSource={this.state.optionaldata} columns={optionalcolumns} />;
                                    </div>
                                    <div></div>
                                </div>
                                </div>
                        </div>
                    </div>
                    </div>

                </div>
                <div className='clearfix' style={{marginTop:'15px'}}>
                    <h3  className='title' style={{fontWeight:'700',fontSize:'20px'}}>使用详情</h3>
                    <div style={{width:'600px',height:'31px',marginLeft:'100px',marginTop:'2px',lineHeight:'31px'}}>
                        <span style={{fontWeight:'700',color:'#0000FF'}}>发送数：</span>
                        <span>10000张</span>
                        <span style={{fontWeight:'700',color:'#0000FF',marginLeft:'20px'}}>已使用：</span>
                        <span>10000张</span>
                        <span style={{fontWeight:'700',color:'#0000FF',marginLeft:'20px'}}>转让数量：</span>
                        <span>10000张</span>
                        <span style={{fontWeight:'700',color:'#0000FF',marginLeft:'20px'}}>失效数量：</span>
                        <span>10000张</span>
                    </div>
                    <div className='line'></div>


                    <div style={{marginTop:'20px',paddingBottom:'100px'}}>
                        <div>
                            <div>
                                <span style={{marginLeft:'40px'}}>卡号：</span>
                                <input style={{width:'120px',height:'25px'}}/>
                                <span style={{marginLeft:'60px'}}>姓名：</span>
                                <input style={{width:'120px',height:'25px'}}/>
                                <span style={{marginLeft:'60px'}}>手机号码：</span>
                                <input style={{width:'120px',height:'25px'}}/>
                                <span style={{marginLeft:'60px'}}>状态：</span>
                                <select ref={this.state.coupontype} style={{width:'100px',height:'22px'}} id="coupontype" >
                                    <option value="-1"> </option>
                                    <option value="0">临时</option>
                                    <option value="1">活动</option>
                                    <option value="2"> 不活动 </option>
                                    <option value="3"> 终止 </option>

                                </select>
                            </div>
                            <div style={{marginTop:'20px',lineHeight:'40px'}} className='clearfix'>
                                <span style={{marginLeft:'12px'}}>用户类型：</span>
                                <input style={{width:'120px',height:'25px'}}/>
                                <span style={{marginLeft:'32px'}}>用户等级：</span>
                                <input style={{width:'120px',height:'25px'}}/>
                                <span style={{marginLeft:'60px'}}>职级名称：</span>

                                <select ref={this.state.coupontype} style={{width:'120px',height:'22px',marginLeft:'0px'}} id="coupontype" >
                                    <option value="-1"> </option>
                                    <option value="0">主任</option>
                                    <option value="1">资深主任</option>
                                </select>
                                <div style={{marginRight:'300px'}} className='detailsbotton'> 数据导出</div>
                                <div style={{marginRight:'20px'}} className='detailsbotton'> 返回列表</div>
                                <div style={{marginRight:'20px'}} className='detailsbotton'> 搜索</div>
                                
                            </div>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <div className='clearfix'>
                                <div className='choosebutton'>全部</div>
                                <div className='choosebutton'>已使用</div>
                                <div className='choosebutton'>已占用</div>
                                <div className='choosebutton'>已转让</div>
                                <div className='choosebutton'>未使用</div>
                                <div className='choosebutton'>已过期</div>
                                <div className='choosebutton'>已作废</div>
                            </div>
                            <div>
                                <Table pagination={false} bordered dataSource={this.state.userdetailsdata} columns={userdatacolumns} />
                                <Pagination defaultCurrent={1} showSizeChanger total={this.state.userdetailsdata.length} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Coupondetails;