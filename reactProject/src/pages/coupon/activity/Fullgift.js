import React, { Component,useContext, useState, useEffect, useRef,  } from 'react';
import './fullgift.css'
import { Table, Input, Button, Popconfirm, Form,Radio,Checkbox,Tabs,DatePicker } from 'antd';
import {Link} from 'react-router-dom'


const { TabPane } = Tabs;




const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async e => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};


function callback(key) {
    console.log(key);
  }

class Fullgift extends Component {
    constructor(props) {
      
        super(props);
        
        const mandatorycolumns=[

            {
              title: '产品名称',
              dataIndex: 'requiredProductName',
              key:'requiredProductName',
            },
            {
              title: '销售价格',
              dataIndex: 'requiredProductPrice',
              key:'requiredProductPrice',
            },
            {
                title: '销售价格',
                key:'requiredProductNum',
                render:(text,record)=>{
                    return (
                        <input placeholder='1000' style={{width:'90px',height:'25px'}}/>
                    )
                }
            },
            {
              title: '操作',
              key:'action',
              render:(text,record)=>{
                  return (
                      <span>移除</span>
                  )
              }
            },

        ];
        const optionalcolumns=[
            {
                title: '产品名称',
                dataIndex: 'optionalProductName',
                key:'optionalProductName',
              },
              {
                title: '销售价格',
                dataIndex: 'optionalProductPirce',
                key:'optionalProductPirce',
              },
              {
                title: '操作',
                key:'action',
                render:(text,record)=>{
                    return (
                        <span>移除</span>
                    )
                }
              },

        ]
        this.columns = [
          {
            title: '层级',
            dataIndex: 'promotionClass',
            width: '10%',
            editable: true,
          },
          {
            title: '优惠门槛',
            key:'preferentialThreshold',
            background:'rgb(255,255,204)',
            width:'40%',
            render:(record)=>{
                const radioStyle = {
                    display: 'block',
                    height: '30px',
                    lineHeight: '30px',
                  };
                return (
                    <div>
                        <div className='clearfix'>
                            <Radio.Group onChange={this.onChange} value={this.state.discountvalue}>
                                <Radio value={1}>
                                    <span>满</span>
                                    <input style={{width:'70px',height:'25px'}}/>
                                    <span>元</span>
                                </Radio>
                                <Radio value={2}>
                                    <span>购买活动产品中其中</span>
                                    <input style={{width:'40px',height:'25px'}}/>
                                    <span>种</span>
                                </Radio>
                                <Radio value={3}>
                                    <span>购买活动产品中其中</span>
                                    <input style={{width:'35px',height:'25px'}}/>
                                    <span>件</span>
                                </Radio>
                            </Radio.Group>
                        </div>
                        <div style={{width:'100%',height:'30px',background:'rgb(255,255,204)',fontWeight:'700',marginTop:'20px',fontSize:'13px',lineHeight:'30px',textAlign:'center'}}>优惠方式</div>
                        <div>
                            <Tabs>
                                <TabPane tab="赠品" key="1">
                                    <div style={{marginTop:'20px'}}>
                                        <span style={{fontWeight:'700',fontSize:'18px'}}>必选产品</span>
                                        <span style={{marginLeft:'20px',color:'#00CCCC'}}>新增产品</span>
                                        <Table  columns={mandatorycolumns} pagination={false} dataSource={this.state.mandatoryproductdata} />
                                        
                                    </div>
                                    <div style={{marginTop:'20px',paddingBottom:'20px'}}>
                                        <span style={{fontWeight:'700',fontSize:'18px'}}>可选产品</span>
                                        <span style={{marginLeft:'20px',color:'#00CCCC'}}>新增产品</span>
                                        <Table  columns={optionalcolumns} pagination={false} dataSource={this.state.productdata} />
                                        
                                    </div>
                                </TabPane>
                                <TabPane tab="抽奖" key="2">
                                    <div>
                                        <div style={{marginLeft:'56px'}}>
                                            <span>抽奖活动：</span>
                                            <select onChange={this.changedraw.bind(this)}  style={{width:'245px',height:'22px'}} >
                                                <option value="0">第三季度的EXPO抽奖活动</option>
                                            </select>
                                        </div>
                                        <div style={{marginTop:'20px'}}>
                                            <span>赠送抽奖机会次数：</span>
                                            <input style={{width:'93px',height:'25px'}}/>
                                        </div>
                                        <div style={{marginTop:'20px',marginLeft:'56px'}}>
                                            <span>赠送上线：</span>
                                            <input style={{width:'93px',height:'25px'}}/>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="券" key="3">
                                    <div>
                                        <div>
                                            <span>赠送券</span>
                                            <select onChange={this.changegive.bind(this)}  style={{width:'245px',height:'22px'}} >
                                                <option value="0"></option>
                                                <option value="1">智芯资格券</option>
                                            </select>
                                        </div>
                                        <div style={{marginTop:'20px'}}>
                                            <span>赠送张数：</span>
                                            <input style={{width:'93px',height:'25px'}}/>
                                        </div>
                                        <div>
                                            <span>赠送时间：</span>
                                            <Radio.Group onChange={this.onChangetime} value={this.state.timevalue}>
                                              <Radio value={1}>
                                                  活动结束后
                                              </Radio>
                                              <Radio value={2}>
                                                  立即赠送
                                              </Radio>
                                              <Radio value={3}>
                                                  指定时间赠送
                                              </Radio>
                                          </Radio.Group>
                                        </div>
                                        <div style={{height:'200px'}}>
                                          
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="免运费" key="4">
                                  <div style={{height:'300px'}}>
                                    <div style={{marginTop:'50px'}}>
                                      <Checkbox onChange={this.isRuleCirculation}>按规定优惠规则循环</Checkbox>
                                      <span style={{marginLeft:'40px'}}>赠送上限：</span>
                                      <input style={{width:'122px',height:'25px'}}/>
                                    </div>
                                    
                                  </div>
                                </TabPane>
                            </Tabs>,
                        </div>
                        
                        


                    </div>
                )
            }
          },
          
          {
            title: '操作',
            width:'10%',
            dataIndex: 'operation',
            render:(text,record)=>{
                console.log(record)
                if(record.promotionClass == '1'){
                    return (
                        <div></div>
                    )
                }else{
                    return (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <a>移除</a>
                        </Popconfirm>
                    )
                }
            }
        //     render: (text, record) =>
        //       this.state.dataSource.length >= 1 ? (
        //         <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
        //           <a>移除</a>
        //         </Popconfirm>
        //       ) : null,
          },
        ];
        this.state = {
          dataSource: [
            {
              key: '1',
              promotionClass: '1',
              
            },

          ],
          count: 2,
          value: 0,
          discountvalue:0,
          timevalue:0,
          coupontype:'',
          weekcoupontype:'',
          drawcoupontype:'',
          daycoupon:'',
          givecoupontype:'',
          specifiedvalue:0,
          mandatoryproductdata:[
              {
                  key:1,
                  requiredProductName:'产品中文名+产品英文名',
                  requiredProductPrice:'零售顾客折扣：￥100.00',
              }
          ],
          productdata:[
              {
                  key:1,
                  optionalProductName:'产品中文名+产品英文名',
                  optionalProductPirce:'零售顾客折扣：￥100.00'
              }
          ],
          activitytype:2
        };
      }
    
      handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({
          dataSource: dataSource.filter(item => item.key !== key),
        });
      };
    
      handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
          key: count,
          promotionClass: count,

        };
        this.setState({
          dataSource: [...dataSource, newData],
          count: count + 1,
        });
      };
    
      handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({
          dataSource: newData,
        });
      };

      isRuleCirculation = e => {

        
        console.log(e.target.checked);
       
      }

      onChange = e => {
        console.log( e.target.value);
        this.setState({
            discountvalue: e.target.value,
          });
        this.state.value = e.target.value;
        
        
      };
      onChangetime = e => {
        console.log( e.target.value);
        this.setState({
            timevalue: e.target.value,
          });
        this.state.value = e.target.value;
        
        
      };
      onChangespecified = e => {
        console.log( e.target.value);
        this.setState({
          specifiedvalue: e.target.value,
          });
        this.state.value = e.target.value;
        
        
      };
      
      onChangestart(){

      }

      changetimetype=(e)=>{
        console.log(e.target.value)
        // console.log(this.state.coupontype)
        this.setState({
          coupontype:e.target.value
        })
        // console.log(this.state.coupontype)
      }

      changeweektime(e){
        console.log(e.target.value)
      }

      changedaytime(e){
        console.log(e.target.value)
        this.setState({
          daycoupon:e.target.value
        })
      }

      changedraw(e){
        this.setState({
          drawcoupontype:e.target.value
        })
      }

      changegive(e){
        this.setState({
          givecoupontype:e.target.value
        })
      }
    
    render() {

        const radioStyle = {
          display: 'block',
          height: '30px',
          lineHeight: '30px',
        };
        const { value } = this.state;

        let choosetime = null;
        let weektime = null;

        if(this.state.coupontype == '周'){
          weektime = <div style={{display:'inline-block'}}>
                <select onChange={this.changeweektime.bind(this)}  style={{width:'48px',height:'22px'}} >
                    <option value="0">星期一</option>
                    <option value="1">星期二</option>
                    <option value="2">星期三</option>
                    <option value="3">星期四</option>
                    <option value="4">星期五</option>
                    <option value="5">星期六</option>
                    <option value="6">星期天</option>
                </select>
          </div>
        }else if(this.state.coupontype == '月'){
          weektime = <div style={{display:'inline-block'}}>
                <select onChange={this.changedaytime.bind(this)}  style={{width:'48px',height:'22px'}} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
          </div>
        }

        if(this.state.timevalue == 3){
          choosetime = <div >
            <Radio.Group onChange={this.onChangespecified} value={this.state.specifiedvalue}>
              <Radio style={radioStyle} value={1}>
                <DatePicker style={{width:'245px',height:'25px'}} onChange={this.onChangestart.bind(this)} />
              </Radio>
              <Radio style={radioStyle} value={2}>
                <span>次</span>
                <input style={{width:'53px',height:'25px'}}/>
                <select onChange={this.changetimetype.bind(this)}  style={{width:'48px',height:'22px'}} >
                    <option value="日">日</option>
                    <option value="周">周</option>
                    <option value="月">月</option>
                </select>
                {weektime}
              </Radio>

            </Radio.Group>
          </div>
        }
        
        const { dataSource } = this.state;
        const components = {
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        };

        const columns = this.columns.map(col => {
            if (!col.editable) {
              return col;
            }
      
            return {
              ...col,
              onCell: record => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave: this.handleSave,
              }),
            };
          });
        
        return (
            <div className='fullgiftbox'>
                <div style={{height:'51px',marginTop:'40px',marginLeft:'20px'}} className='clearfix'>
                    <div  className='addstep'>1</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div className='addstep'>2</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div style={{background:'rgb(153,153,153)'}} className='addstep'>3</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div  className='addstep'>4</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div className='addstep'>5</div>
                </div>
                <div style={{marginTop:'10px'}}>
                    <span style={{marginLeft:'19px'}} className='text1'>基本信息</span>
                    <span className='text1 jianju'>促销产品</span>
                    <span className='text1 jianju'>促销方案</span>
                    <span className='text1 jianju'>用户范围</span>
                    <span className='text1 jianju'>设置完成</span>
                </div>
                  
                <div style={{marginTop:'20px',marginLeft:'20px'}}>
                    <p>可设置阶梯优惠</p>
                    <div>
                        <div>
                            <Button
                            onClick={this.handleAdd}
                            type="primary"
                            style={{
                                marginBottom: 16,
                            }}
                            >
                            新增一级优惠
                            </Button>
                            <Table
                            components={components}
                            rowClassName={() => 'editable-row'}
                            bordered
                            pagination={false}
                            dataSource={dataSource}
                            columns={columns}
                            />
                        </div>
                        <div>
                            <Checkbox onChange={this.isRuleCirculation}></Checkbox>按规定优惠规则循环
                        </div>
                        <div className='clearfix' style={{marginTop:'20px'}}>
                        <Link to={{pathname:'/home/coupon/activity/Addactivitysecond',query:{type:this.state.activitytype}}}>
                               <div style={{background:'rgb(204,204,204)'}} className='secondbutton'>上一步</div>
                            </Link>
                            
                            <Link to={{pathname:'/home/coupon/activity/Activeusers',query:{type:this.state.activitytype}}}>
                              <div style={{background:'rgb(204,204,204)'}} className='secondbutton'>下一步</div>
                            </Link>
                            <Link to='/home/coupon/activity/Activitylist'>
                                <div className='secondbutton'>返回列表</div>
                            </Link>
                            
                        </div>
                        <div style={{position:'absolute',top:'550px',left:'390px'}}>
                            {choosetime}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Fullgift;