import React, { Component,createRef } from 'react';
import './addcoupon.css'

import { Radio,DatePicker,Checkbox,Table,Space,Popconfirm  } from 'antd';
import {inject,observer} from "mobx-react";

import {toJS} from 'mobx'
import { tuple } from 'antd/lib/_util/type';





@inject('coupon')

@observer
class addcoupon extends Component {
    constructor(){
        super()
        this.state={
            value:0, // 优惠券类型
            cid:'', //优惠券编号
            
            couponName:'',//优惠券名称
            openingDate:'', //开始时间
            endDate:'', //结束时间
            quantity:'', //发送数量
            couponPrice:createRef(), //优惠金额
            satisfyMoney:0, //满足金额
            effectiveDate:0, //有效日期
            allgrant:0, //选择发放总量
            isTransfer:0, //是否可转让
            isSuperimposed:0, //是否可叠加
            isDispalay:0, //显示资格专区
            couponClazz:0,  //优惠券种类
            couponPriceType:0, //优惠价格类型
            discountedPrice:0, //优惠金额类型
            fixedAmount:0, //固定金额优惠
            discount:0,// 折扣金额优惠
            productrange:0, //指定产品范围
            chooseproduct:[], //添加后的指定产品数据
            optionaldata:[],   //添加后的范围产品数据
            appointproduct:[], //需要发送的指定产品数据
            rangeproduct:[], //需要发送的范围产品数据
            designatedproductsdata:[], //指定产品数据
            isproductshow:false, //添加产品模态框
            addproductdata:[], //添加产品存放数据
            searchchooseproduct:[
                {
                    key:'1',
                    OptionalProductName:'geLOC Me新智我仪器套装 ageLOC Me Device Kit',
                    sellingprice:'100',
                    num:''
                },
                {
                    key:'2',
                    OptionalProductName:'123',
                    sellingprice:'100',
                    num:''
                }
            ], //查询后的指定产品
            searchoptionalproduct:[
                {
                    key:'1',
                    OptionalProductName:'geLOC Me新智我仪器套装 ageLOC Me Device Kit',
                    sellingprice:'100',
                    num:''
                },
                {
                    key:'2',
                    OptionalProductName:'345435',
                    sellingprice:'100',
                    num:''
                }
            ],//查询后的范围产品
            searchchoosegift:[], //查询后的必选赠品
            searchoptionalgift:[],//查询后的可选赠品
            addedproduct:[
 
            ], //已添加产品存放数据

            isproductrangeshow:false, //产品范围模态框
            Category:'', //存放类目
            producttype:'' ,//存放商品类型
            productlabel:'', //存放商品标签
            attribute:'', //存放商品属性
            productnumber:'', //存放商品编号
            productname:'' , //存放商品名称



        }
    }

    UNSAFE_componentWillMount(){

        this.state.designatedproductsdata = toJS(this.props.coupon.designatedproductsdata)
        this.state.addproductdata = toJS(this.props.coupon.addproductdata)
        console.log(this.state.addproductdata)
    }

    closeaddproduct(){
        // console.log(this.state)
        // this.state.isproductshow = false
        this.setState({
            isproductshow : false,
            isproductrangeshow:false
        }
        )
        // console.log(this.state.isp)
    }

    openaddproduct(){
        this.setState({
            isproductshow:true
        })
    }

    openaddproductrange(){
        this.setState({
            isproductrangeshow:true
        })
    }


    onChange = e => {
        console.log( e.target.value);
        this.setState({
            value: e.target.value,
          });
        this.state.value = e.target.value;
        console.log(this.state.value)
        
      };
      onChange1 = e => {
        console.log( e.target.value);
        this.setState({
            satisfyMoney: e.target.value,
          });
        this.state.satisfyMoney = e.target.value;
        console.log(this.state.satisfyMoney)
        
      };
      onChange2 = e => {
        console.log( e.target.value);
        this.setState({
            effectiveDate: e.target.value,
          });
        this.state.effectiveDate = e.target.value;
        console.log(this.state.effectiveDate)
        
      };

      onChangecouponClazz = e => {
        console.log( e.target.value);
        this.setState({
            couponClazz: e.target.value,
          });
        this.state.couponClazz = e.target.value;
        console.log(this.state.couponClazz)
        
      };
      

      onChangecouponPriceType = e => {
        console.log( e.target.value);
        this.setState({
            couponPriceType: e.target.value,
          });
        this.state.couponPriceType = e.target.value;
        console.log(this.state.couponPriceType)
        
      };



      onChangediscountedPrice = e => {
        console.log( e.target.value);
        this.setState({
            discountedPrice: e.target.value,
          });
        this.state.discountedPrice = e.target.value;
        console.log(this.state.discountedPrice)
        
      };

      onChangefixedamount = e => {
        console.log( e.target.value);
        this.setState({
            fixedamount: e.target.value,
          });
        this.state.fixedamount = e.target.value;
        console.log(this.state.fixedamount)
        
      };

      onChangeproductrange = e => {
        console.log( e.target.value);
        this.setState({
            productrange: e.target.value,
          });
        this.state.productrange = e.target.value;
        console.log(this.state.productrange)
        
      };


    onChangegrant = e => {
        if(e.target.checked == false){
            console.log('+++++')
            this.state.allgrant = 0
        }else if(e.target.checked == true){
            this.state.allgrant = 1
        }
        
        console.log(e.target.checked);
        console.log( this.state.allgrant)
      }



        onChangestart(date, dateString) {
            
            this.state.openingDate = dateString
            console.log(this.state.openingDate)

            
         };
        onChangeend(date,dateString){
            
            this.state.endDate = dateString
            console.log(this.state.endDate)

        }

        chooseproductitem=(e)=>{
            console.log(e.target.checked)
            // console.log(i)
            console.log('+++++++++++++-+')
        }

        isTransfer= e=>{
            if(e.target.checked == false){
                console.log('+++++')
                this.state.isTransfer = 0
            }else if(e.target.checked == true){
                this.state.isTransfer = 1
            }

            console.log(e.target.checked);
            console.log( this.state.isTransfer)
        }

        isSuperimposed= e=>{
            if(e.target.checked == false){
                console.log('+++++')
                this.state.isSuperimposed = 0
            }else if(e.target.checked == true){
                this.state.isSuperimposed = 1
            }

            console.log(e.target.checked);
            console.log( this.state.isSuperimposed)
        }

        isDispalay= e=>{
            if(e.target.checked == false){
                console.log('+++++')
                this.state.isDispalay = 0
            }else if(e.target.checked == true){
                this.state.isDispalay = 1
            }

            console.log(e.target.checked);
            console.log( this.state.isDispalay)
        }


        //获取满足金额
        changesatisfyMoney(e){
            
            this.state.satisfyMoney = e.target.value
            
        }
        
        //获取优惠券编号
        changecid(e){
            this.state.cid = e.target.value
            
        }

        //获取优惠券名称
        changecouponname(e){
            this.state.couponName = e.target.value
            
        }


        //获取发放数量
        changenumber(e){
            this.state.quantity = e.target.value
            
        }

        //获取固定金额加
        changefixedplus(e){
            this.state.fixedAmount = '+'+e.target.value
            
        }
        //获取固定金额减
        changefixedreduce(e){
            this.state.fixedAmount = e.target.value
            console.log(this.state.fixedAmount)
            
        }

        //获取折扣金额
        changediscount(e){
            this.state.discount = e.target.value
            
        }

        //提交
        submitaddcoupon(){
            console.log(this.state)

        }

        //添加指定产品
        addappointproduct(e,record){
            console.log(record)
            let obj = []
            this.state.chooseproduct.push(record)
            this.setState({
                chooseproduct:this.state.chooseproduct
            })
        }

        //确定指定产品
        determineappointproduct(){
            this.setState({
                appointproduct:this.state.chooseproduct,
                isproductshow:false
            })
        }


        //添加范围产品
        addrangeproduct(e,record){
            this.state.optionaldata.push(record)
            this.setState({
                optionaldata:this.state.optionaldata
            })
        }

        //确定范围产品
        determinerangeproduct(){
            this.setState({
                rangeproduct:this.state.optionaldata,
                isproductrangeshow:false
            })
        }

        //修改num的值
        changenum(record){
            
        }
        //选择前端类目
        changeCategory(e){
            this.state.Category = e.target.value
        }

        //选择商品类型
        changeproducttype(e){
            this.state.producttype = e.target.value
        }

        //选择商品标签
        changeproductlabel(e){
            this.state.productlabel = e.target.value
        }

        //选择商品属性
        changeattribute(e){
            this.state.attribute = e.target.value
        }

        //获取商品编号
        getproductnumber(e){
            this.state.productnumber = e.target.value
        }

        //获取商品名称
        getproductnumber(e){
            this.state.productname = e.target.value
        }

        //资格券搜索商品
        searchproduct(e){
            let data = {
                Category:this.state.Category, 
                producttype:this.state.producttype ,
                productlabel:this.state.productlabel, 
                attribute:this.state.attribute, 
                productnumber:this.state.productnumber, 
                productname:this.state.productname, 
            }
            console.log(data)
        }

        //删除这一项产品
        deletethisproduct(e,item){
            console.log(item)
            let arr = this.state.chooseproduct.filter((item1)=>{
                return item1.key !== item.key
            })
            this.setState({
                chooseproduct:arr
            })
        }

        //删除指定产品中需要发送的产品
        selectappointproduct(e,record){
            console.log(record)
            let arr = this.state.chooseproduct.filter((item)=>{
                return item.key !== record.key
            })
            this.setState({
                chooseproduct:arr,
                appointproduct:arr
            })
        }
    render() {
        const columns = [
            {
                title: '产品名称',
                dataIndex: 'OptionalProductName',
                key: 'OptionalProductName',
            },
            {
                title: '销售价格',
                dataIndex: 'sellingprice',
                key: 'sellingprice',
            },
            
            {
                title: '必选数量',
                key: 'num',
                render:(text,record)=>(
                    <Space>
                        <input onChange={(e)=>this.changenum(e,record)}  className='numberinput'></input>
                    </Space>
                )
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        {/* <a>{this.operation1.bind(this)}</ a> */}
                        <a onClick={e=>this.selectappointproduct(e,record)} className='operation1'>移除</a>
                    </Space>
                ),
            },
        ]
        const columns1 = [
            {
                title: '产品名称',
                dataIndex: 'OptionalProductName',
                key: 'OptionalProductName',
            },
            {
                title: '销售价格',
                dataIndex: 'sellingprice',
                key: 'sellingprice',
            },
            
            {
                title: '必选数量',
                key: 'choosenumber',
                dataIndex:'num'
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        {/* <a>{this.operation1.bind(this)}</ a> */}
                        <a onClick={(e)=>this.addappointproduct(e,record)} className='operation1'>选择</a>
                    </Space>
                ),
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
                        <a onClick={(e)=>this.addrangeproduct(e,record)} className='operation1'>选择</a>
                    </Space>
                ),
            },
        ]

        const designatedproductscolumns = [
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
                title: '数量',
                dataIndex:'productnumber',
                key: 'productnumber',

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

        const addproductcolumns=[
            {
                title:'图片',
                dataIndex:'img',
                key:'img',
                render:(record)=>(
                    <img src={record} style={{width:'57px',height:'37px'}} alt=""/>
                )
            },
            {
                title: '产品名称',
                dataIndex: 'OptionalProductName',
                key: 'OptionalProductName',

            },
            {
                title: '扩展属性类型',
                dataIndex: 'propertytype',
                key: 'propertytype',
            },
            {
                title: '全选',
                key: 'action',
                render:(text,record)=>(
                    <Space size="middle">
                        <a>选择</a>
                    </Space>
                )
            },
        ]





        let effectiveDate = null;
        let discountedPrice = null;
        let coupon = null;
        let productrangepage = null
        let couponpriceClazz = null;
        let model=null;
        let model1=null;
        let productlist=null;
        let productrangelist = null;
        if(this.state.effectiveDate === 0){
            
            effectiveDate =  <div>
                                <DatePicker onChange={this.onChangestart.bind(this)} />
                                <span>至</span>
                                <DatePicker onChange={this.onChangeend.bind(this)} />
                             </div>
        }else{
            
            effectiveDate = <div>
                                <span>次</span>
                                <input  className='timenum' type='text'/>
                                <select id="coupontype1" >
                                    <option value="0">月</option>
                                    <option value="1">天</option>

                                </select>
                                <span>内有效</span>
                            </div>
        }


        if(this.state.discountedPrice === 0){
            discountedPrice = <div>
                            金额：减<input onChange={this.changefixedreduce.bind(this)} className='discountedinput2'  />
                            </div>
        }else if(this.state.discountedPrice === 1){
            discountedPrice= <div>金额折算为原金额：
            <input onChange={this.changediscount.bind(this)} className='conversioninput'/>
            %
        </div>
        }

        if(this.state.productrange === 0){
            productrangepage = <div>
                                            <div>
                            <span onClick={this.openaddproduct.bind(this)} className='addproduct'>新增产品</span>
                            
                        </div>

                        <div>
                        <Table pagination={false} bordered dataSource={this.state.appointproduct} columns={columns} />;
                        </div>
            </div>
        }else if(this.state.productrange === 1){
              productrangepage = <div>
                                        <div>
                            <span onClick={this.openaddproductrange.bind(this)} className='addproduct'>新增产品</span>
                            <span>指定产品中任选1件</span>
                        </div>

                        <div>
                            <Table pagination={false} bordered dataSource={this.state.rangeproduct} columns={optionalcolumns} />;
                        </div>
                    </div>
        }


        if(this.state.couponClazz === 0 ){
            couponpriceClazz = 
            <div>
                <Radio.Group  onChange={this.onChangecouponPriceType} value={this.state.couponPriceType}>
                        <Radio value={0}>不指定价格类型</Radio>
                        <Radio value={1}>ECOUPON（EC）</Radio>  
                        <Radio value={2}>六个月合约价格（C6）</Radio> 
                </Radio.Group>
            </div>
        }else{
            couponpriceClazz = 
            <div>
                <Radio.Group  onChange={this.onChangecouponPriceType} value={this.state.couponPriceType}>
                        <Radio value={0}>使用所有价格</Radio> 
                </Radio.Group>
            </div>
        }

        if(this.state.value === 0){
            coupon =<div>
             <div className='fristline topline clearfix'>
            <div className='addleft1'>* 满足金额：</div>
            <div className='addright1 clearfix'>
                <div className='choosemoney'>
                    <Radio.Group  onChange={this.onChange1} value={this.state.satisfyMoney}>
                            <Radio value={0}>不限制</Radio>
                            <Radio value={1}>满</Radio>
                            
                    </Radio.Group>
                </div>

                <div className='moneybox'>
                    ￥<input onChange={this.changesatisfyMoney.bind(this)} className='money'  />
                </div>
                金额为必填项，必须大于0元
            </div>
        </div>
        <div className='fristline timeline clearfix'>
            <div className='addlefttime'>* 有效日期：</div>
            <div className='addrighttime'>

                <div className='timeline-bottom'>
                    {effectiveDate}
                </div>
            </div>
        </div>
        <div className='fristline topline clearfix'>
            <div className='addleft1'>发放总量：</div>
            <div className='addright1'>
                <Checkbox onChange={this.onChangegrant}></Checkbox>
                <input type='text' onChange={this.changenumber.bind(this)} className='grantinput'/>
                勾选表示发放数量控制
            </div>
        </div>
        <div className='fristline topline clearfix'>
            <div className='addleft1'>是否可转让：</div>
            <div className='addright1'>
                <Checkbox onChange={this.isTransfer}></Checkbox>
            </div>
        </div>
        <div className='fristline topline clearfix'>
            <div className='addleft1'>是否可叠加：</div>
            <div className='addright1'>
                <Checkbox onChange={this.isSuperimposed}></Checkbox>
                是指相同券是否可叠加
            </div>
        </div>
        <div className='fristline topline clearfix'>
            <div className='addleft1'>显示资格专区：</div>
            <div className='addright1'>
                <Checkbox onChange={this.isDispalay}></Checkbox>
                指定优惠券可显示在资格专区
            </div>
        </div>
        <div className='fristline topline clearfix'>
            <div className='addleft1'>优惠券种类：</div>
            <div className='addright1'>
                    <Radio.Group  onChange={this.onChangecouponClazz} value={this.state.couponClazz}>
                            <Radio value={0}>产品券</Radio>
                            <Radio value={1}>订单券</Radio>  
                    </Radio.Group>
            </div>
        </div>
        <div className='fristline topline clearfix'>
            <div className='addleft1'>优惠价格类型：</div>
            <div className='addright1'>
                {couponpriceClazz}
            </div>
        </div>
        <div className='fristline discountedPriceline clearfix'>
            <div className='discountedleft'>优惠金额：</div>
            <div className='discountedright'>
                <div>
                    <Radio.Group  onChange={this.onChangediscountedPrice} value={this.state.discountedPrice}>
                            <Radio value={0}>固定金额优惠</Radio>
                            <Radio value={1}>折扣优惠</Radio>  
                            
                    </Radio.Group>
                </div>
                <div className='discountedbottom'>
                    {discountedPrice}

                </div>
            </div>
        </div>
        <div className='fristline choosecouponline clearfix'>
            <div className='choosecouponleft'>*选择可用券范围：</div>
            <div className='choosecouponright'>
                <div className='choosecoupontop'>
                    <div>
                        <span className='mandatory'>必选产品</span>
                        <span onClick={this.openaddproduct.bind(this)} className='addproduct'>新增产品</span>
                    </div>
                    <div>
                        <Table pagination={false} bordered dataSource={this.state.chooseproduct} columns={columns} />;
                    </div>
                </div>
                <div className='choosecouponbottom'>
                    <div>
                        <span className='mandatory'>可选产品</span>
                        <span onClick={this.openaddproduct.bind(this)} className='addproduct'>新增产品</span>
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
        
        }else if(this.state.value === 1){
            coupon = <div>
                <div className='fristline timeline clearfix'>
                            <div className='addlefttime'>* 有效日期：</div>
                            <div className='addrighttime'>
                                <div className='timeline-top'>
                                    <Radio.Group  onChange={this.onChange2} value={this.state.effectiveDate}>
                                            <Radio value={0}>指定日期</Radio>
                                            <Radio value={1}>按下发日期</Radio>
                                            
                                    </Radio.Group>
                                </div>
                                <div className='timeline-bottom'>
                                    {effectiveDate}
                                </div>
                            </div>
                        </div>
                        <div className='fristline topline clearfix'>
                            <div className='addleft1'>发放总量：</div>
                            <div className='addright1'>
                                <Checkbox onChange={this.onChangegrant.bind(this)}></Checkbox>
                                <input type='text' className='grantinput'/>
                                勾选表示发放数量控制
                            </div>
                        </div>
                        <div className='fristline topline clearfix'>
                            <div className='addleft1'>是否可转让：</div>
                            <div className='addright1'>
                                <Checkbox onChange={this.isTransfer.bind(this)}></Checkbox>
                            </div>
                        </div>
                        <div className='fristline topline clearfix'>
                            <div className='addleft1'>是否可叠加：</div>
                            <div className='addright1'>
                                <Checkbox onChange={this.isSuperimposed.bind(this)}></Checkbox>
                                是指相同券是否可叠加
                            </div>
                        </div>

                        <div className='fristline topline clearfix'>
                            <div className='addleft1'>优惠券种类：</div>
                            <div className='addright1'>
                                    <Radio.Group  onChange={this.onChangecouponClazz.bind(this)} value={this.state.couponClazz}>
                                            <Radio value={0}>产品券</Radio>
                                              
                                    </Radio.Group>
                            </div>
                        </div>


                        <div className='fristline topline clearfix'>
                            <div className='addleft1'>优惠价格类型：</div>
                            <div className='addright1'>
                                    <Radio.Group  onChange={this.onChangecouponPriceType.bind(this)} value={this.state.couponPriceType}>
                                            <Radio value={1}>ECOUPON（EC）</Radio>  
                                            <Radio value={2}>六个月合约价格（C6）</Radio> 
                                    </Radio.Group>
                            </div>
                        </div>


                        <div className='fristline choosecouponline clearfix'>
                            <div className='choosecouponleft'>* 选择可购买产品范围：</div>
                            <div className='choosecouponright'>
                                <div className='choosecoupontop'>
                                    <div>
                                        <Radio.Group  onChange={this.onChangeproductrange.bind(this)} value={this.state.productrange}>
                                                <Radio value={0}>指定产品</Radio>  
                                                <Radio value={1}>范围产品</Radio> 
                                        </Radio.Group>
                                        
                                        {productrangepage}

                                    </div>

                                </div>
                            </div>
                        </div>

            </div>
        }else if(this.state.value === 2){
            coupon = <div>
                                        <div className='fristline topline clearfix'>
                            <div className='addleft1'>* 满足金额：</div>
                            <div className='addright1 clearfix'>
                                <div className='choosemoney'>
                                    <Radio.Group  onChange={this.onChange1} value={this.state.satisfyMoney}>
                                            <Radio value={0}>不限制</Radio>
                                            <Radio value={1}>满</Radio>
                                            
                                    </Radio.Group>
                                </div>

                                <div className='moneybox'>
                                    ￥<input className='money'  />
                                </div>
                                金额为必填项，必须大于0元
                            </div>
                        </div>
                        <div className='fristline timeline clearfix'>
                            <div className='addlefttime'>* 有效时间：</div>
                            <div className='addrighttime'>
                                <div className='timeline-top'>
                                    <Radio.Group  onChange={this.onChange2} value={this.state.effectiveDate}>
                                            <Radio value={0}>指定日期</Radio>
                                            <Radio value={1}>按下发日期</Radio>
                                            
                                    </Radio.Group>
                                </div>
                                <div className='timeline-bottom'>
                                    {effectiveDate}
                                </div>
                            </div>
                        </div>
                        <div className='fristline topline clearfix'>
                            <div className='addleft1'>发放总量：</div>
                            <div className='addright1'>
                                <Checkbox onChange={this.onChangegrant}></Checkbox>
                                <input type='text' className='grantinput'/>
                                勾选表示发放数量控制
                            </div>
                        </div>
                        <div className='fristline topline clearfix'>
                            <div className='addleft1'>是否可退还：</div>
                            <div className='addright1'>
                                <Checkbox onChange={this.isTransfer}></Checkbox>
                            </div>
                        </div>
                        <div className='fristline topline clearfix'>
                            <div className='addleft1'>是否可转让：</div>
                            <div className='addright1'>
                                <Checkbox onChange={this.isSuperimposed}></Checkbox>
                                是指相同券是否可叠加
                            </div>
                        </div>
            </div>
        }
            

        //指定产品
        let arr = this.state.chooseproduct.map((item,i)=>{
            return (
                <div key={i} style={{height:'75px',margin:'5px 10px',borderBottom:'1px solid black',position:'relative'}}>
                    <Checkbox style={{}} onChange={this.chooseproductitem}></Checkbox>
                    <img style={{}} src={item.src} style={{width:'60px',height:'60px'}}></img>
                    <div style={{position:'absolute',fontSize:'13px',width:'165px',height:'34px',top:'10px',left:'80px'}}>{item.OptionalProductName}</div>
                    <div onClick={e=>this.deletethisproduct(e,item)} style={{position:'absolute',top:'20px',left:'245px',width:'25px',height:'25px',background:'red',cursor:'pointer',borderRadius:'50%',lineHeight:'25px',textAlign:'center'}}>X</div>
                </div>
            )
        })


        if(this.state.chooseproduct.length >= 0){
            productlist = 
            <div>
                <div style={{margin:'5px 10px',borderBottom:'1px solid black'}}>
                    <span style={{color:'rgb(140,164,213)',cursor:'pointer'}}>批量删除</span>
                    <span style={{color:'rgb(140,164,213)',marginLeft:'40px',cursor:'pointer'}}>全部删除</span>
                </div>
                <div>
                    {arr}
                </div>
            </div>
        }
        
            if(this.state.isproductshow === true){
                 model=
                    <div style={{height:'518px',width:'914px',position:'fixed',top:'60px',left:'270px',zIndex:'500',background:'white'}} className='productshow'>
                        <div className='clearfix' style={{height:'50px',lineHeight:'50px',background:'rgb(215,215,215)'}}>
                            <span style={{fontWeight:'700',fontSize:'18px',marginLeft:'15px'}}>产品选择</span>
                            <span onClick={this.closeaddproduct.bind(this)} style={{float:'right',marginRight:'15px',cursor:'pointer'}}>关闭</span>
                        </div>
                        <div className='clearfix' style={{marginTop:'10px'}}>
                            <div style={{float:'left'}}>
                                <div style={{background:'rgb(242,242,242)',width:'594px',height:'87px',marginLeft:'10px'}}>
                                    <div style={{paddingTop:'15px',marginBottom:'15px'}}>
                                        <span style={{fontSize:'14px',fontWeight:'700'}}>产品过滤:</span>
                                        <select onChange={this.changeCategory.bind(this)} style={{width:'140px',height:'22px',margin:'0 5px'}} >
                                            <option value="-1">请选择前端类目</option>
                                            <option value="0">ageLOC Me</option>
                                            <option value="1">---- 预见套</option>
                                        </select>
                                        <select onChange={this.changeproducttype.bind(this)} style={{width:'117px',height:'22px',margin:'0 5px'}} >
                                            <option value="-1">扩展属性类型</option>
                                            <option value="0">智芯精华</option>
                                            <option value="1">ageLOC Me 设备</option>
                                            <option value="2">化妆品</option>
                                            <option value="3">蜜儿餐</option>
                                        </select>
                                        <select onChange={this.changeproductlabel.bind(this)} style={{width:'115px',height:'22px',margin:'0 5px'}} >
                                            <option value="-1">请选择标签</option>
                                            <option value="0">热卖</option>
                                            <option value="1">推荐</option>
                                            <option value="2">新品</option>
                                            <option value="3">推荐</option>
                                        </select>
                                        <select onChange={this.changeattribute.bind(this)} style={{width:'115px',height:'22px',margin:'0 5px'}} >
                                            <option value="-1">请选择属性</option>
                                            <option value="0">功效</option>
                                            <option value="1">---- 补水</option>
                                            <option value="2">---- 保湿</option>
                                            <option value="3">性别</option>
                                            <option value="4">---- 女</option>
                                            <option value="5">---- 男</option>
                                            <option value="6">---- 通用</option>
                                        </select>
                                    </div>
                                    <div>
                                        <span style={{fontSize:'14px',fontWeight:'700'}}>产品编号:</span>
                                        <input onChange={this.getproductnumber.bind(this)} style={{width:'114px',height:'25px',marginLeft:'10px',marginRight:"10px"}} />
                                        <span style={{fontSize:'14px',fontWeight:'700'}}>产品名称:</span>
                                        <input onChange={this.getproductnumber.bind(this)} style={{width:'227px',height:'25px',marginLeft:'10px',marginRight:"10px"}} />
                                        <button onClick={this.searchproduct.bind(this)} style={{width:'71px',height:'30px',background:'rgb(22,155,213)',color:'white',borderRadius:'5px',border:'none'}}>查询</button>
                                    </div>
                                </div>
                                <div style={{width:'599px'}}>
                                    <Table dataSource={this.state.searchchooseproduct} columns={columns1} />;
                                </div>
                            </div>
                            <div style={{float:'right',width:'298px',height:'386px',background:'rgb(204,230,230)'}}>
                                {productlist}
                            </div>
 
                        </div>
                        <div className='clearfix' style={{height:'50px',background:'rgb(215,215,215)'}}>
                            <div onClick={this.closeaddproduct.bind(this)} style={{float:'right',width:'140px',height:'40px',lineHeight:'40px',textAlign:'center',marginTop:'5px',background:'rgb(22,155,213)',marginRight:'10px',borderRadius:'8px'}}>取消</div>
                            <div onClick={this.determineappointproduct.bind(this)}  style={{float:'right',width:'140px',height:'40px',borderRadius:'8px',background:'white',marginTop:'5px',lineHeight:'40px',textAlign:'center',marginRight:'10px'}}>确定</div>
                        </div>

                    </div>
                
            }

            //按范围查找产品
            let arr1 = this.state.optionaldata.map((item,i)=>{
                return (
                    <div key={i} style={{height:'75px',margin:'5px 10px',borderBottom:'1px solid black',position:'relative'}}>
                        <Checkbox style={{}} onChange={this.chooseproductitem}></Checkbox>
                        <img style={{}} src={item.src} style={{width:'60px',height:'60px'}}></img>
                        <div style={{position:'absolute',fontSize:'13px',width:'165px',height:'34px',top:'10px',left:'80px'}}>{item.OptionalProductName}</div>
                        <div style={{position:'absolute',top:'20px',left:'245px',width:'25px',height:'25px',background:'red',cursor:'pointer',borderRadius:'50%',lineHeight:'25px',textAlign:'center'}}>X</div>
                    </div>
                )
            })
    
    
            if(this.state.optionaldata.length > 0){
                productrangelist = 
                <div>
                    <div style={{margin:'5px 10px',borderBottom:'1px solid black'}}>
                        <span style={{color:'rgb(140,164,213)',cursor:'pointer'}}>批量删除</span>
                        <span style={{color:'rgb(140,164,213)',marginLeft:'40px',cursor:'pointer'}}>全部删除</span>
                    </div>
                    <div>
                        {arr1}
                    </div>
                </div>
            }
            
                if(this.state.isproductrangeshow === true){
                     model1=
                        <div style={{height:'518px',width:'914px',position:'fixed',top:'60px',left:'270px',zIndex:'500',background:'white'}} className='productshow'>
                            <div className='clearfix' style={{height:'50px',lineHeight:'50px',background:'rgb(215,215,215)'}}>
                                <span style={{fontWeight:'700',fontSize:'18px',marginLeft:'15px'}}>产品选择</span>
                                <span onClick={this.closeaddproduct.bind(this)} style={{float:'right',marginRight:'15px',cursor:'pointer'}}>关闭</span>
                            </div>
                            <div className='clearfix' style={{marginTop:'10px'}}>
                                <div style={{float:'left'}}>
                                    <div style={{background:'rgb(242,242,242)',width:'594px',height:'87px',marginLeft:'10px'}}>
                                        <div style={{paddingTop:'15px',marginBottom:'15px'}}>
                                            <span style={{fontSize:'14px',fontWeight:'700'}}>产品过滤:</span>
                                            <select ref={this.state.coupontype} style={{width:'140px',height:'22px',margin:'0 5px'}} >
                                                <option value="-1">请选择前端类目</option>
                                                <option value="0">ageLOC Me</option>
                                                <option value="1">---- 预见套</option>
                                            </select>
                                            <select ref={this.state.coupontype} style={{width:'117px',height:'22px',margin:'0 5px'}} >
                                                <option value="-1">扩展属性类型</option>
                                                <option value="0">智芯精华</option>
                                                <option value="1">ageLOC Me 设备</option>
                                                <option value="2">化妆品</option>
                                                <option value="3">蜜儿餐</option>
                                            </select>
                                            <select ref={this.state.coupontype} style={{width:'115px',height:'22px',margin:'0 5px'}} >
                                                <option value="-1">请选择标签</option>
                                                <option value="0">热卖</option>
                                                <option value="1">推荐</option>
                                                <option value="2">新品</option>
                                                <option value="3">推荐</option>
                                            </select>
                                            <select ref={this.state.coupontype} style={{width:'115px',height:'22px',margin:'0 5px'}} >
                                                <option value="-1">请选择属性</option>
                                                <option value="0">功效</option>
                                                <option value="1">---- 补水</option>
                                                <option value="2">---- 保湿</option>
                                                <option value="3">性别</option>
                                                <option value="4">---- 女</option>
                                                <option value="5">---- 男</option>
                                                <option value="6">---- 通用</option>
                                            </select>
                                        </div>
                                        <div>
                                            <span style={{fontSize:'14px',fontWeight:'700'}}>产品编号:</span>
                                            <input style={{width:'114px',height:'25px',marginLeft:'10px',marginRight:"10px"}} />
                                            <span style={{fontSize:'14px',fontWeight:'700'}}>产品名称:</span>
                                            <input style={{width:'227px',height:'25px',marginLeft:'10px',marginRight:"10px"}} />
                                            <button style={{width:'71px',height:'30px',background:'rgb(22,155,213)',color:'white',borderRadius:'5px',border:'none'}}>查询</button>
                                        </div>
                                    </div>
                                    <div style={{width:'599px'}}>
                                        <Table dataSource={this.state.searchoptionalproduct} columns={optionalcolumns} />;
                                    </div>
                                </div>
                                <div style={{float:'right',width:'298px',height:'386px',background:'rgb(204,230,230)'}}>
                                    {productrangelist}
                                </div>
     
                            </div>
                            <div className='clearfix' style={{height:'50px',background:'rgb(215,215,215)'}}>
                                <div onClick={this.closeaddproduct.bind(this)} style={{float:'right',width:'140px',height:'40px',lineHeight:'40px',textAlign:'center',marginTop:'5px',background:'rgb(22,155,213)',marginRight:'10px',borderRadius:'8px'}}>取消</div>
                                <div onClick={this.determinerangeproduct.bind(this)}  style={{float:'right',width:'140px',height:'40px',borderRadius:'8px',background:'white',marginTop:'5px',lineHeight:'40px',textAlign:'center',marginRight:'10px'}}>确定</div>
                            </div>
    
                        </div>
                    
                }


        


        // const model =(isShow)=><div style={{display:isShow?"block":"none"}}>Balbala</div>








        return (
            
            <div  className='addbox'>
                {model}
                {model1}
                <h3 className='title'>新增优惠券</h3>
                <div className='line'></div>
                <div className='content'>
                    <div className='top'>
                        <div className='fristline clearfix'>
                            <div className='addleft'>* 优惠券类型：</div>
                            <div className='addright'>
                                <Radio.Group  onChange={this.onChange} value={this.state.value}>
                                        <Radio value={0}>优惠券</Radio>
                                        <Radio value={1}>资格券</Radio>
                                        <Radio value={2}>免运费券</Radio> 
                                </Radio.Group>
                            </div>
                        </div>
                        <div className='fristline topline clearfix'>
                            <div className='addleft1'>* 优惠编号：</div>
                            <div className='addright1'>
                                <input className='couponId' onChange={this.changecid.bind(this)} type='text'/>和Oracle并行期间，需要券编号和Oracle券编号一致
                            </div>
                        </div>
                        <div className='fristline topline clearfix'>
                            <div className='addleft1'>* 优惠券名称：</div>
                            <div className='addright1'>
                                <input className='couponId' onChange={this.changecouponname.bind(this)}  type='text'/>长度50个字符，由中文、英文字母和数字组成。
                            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        
                        {coupon}


                        <div onClick={this.submitaddcoupon.bind(this)} style={{cursor:'pointer',color:'white',marginTop:'40px'}} className='preservation'>确认保存</div>

                    </div>
                </div>
                
            </div>
        );
    }
}

export default addcoupon;
