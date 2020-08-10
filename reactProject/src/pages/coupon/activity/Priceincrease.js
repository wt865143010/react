import React, { Component,useContext, useState, useEffect, useRef } from 'react';
import './Priceincrease.css'
import { Table, Input, Button, Popconfirm, Form,Radio,Checkbox,Tabs } from 'antd';
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

class Priceincrease extends Component {
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
            title: '项目',
            key:'preferentialThreshold',
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
                            <div style={{width:'260px',float:'left'}}>
                                <div style={{height:'30px',textAlign:'center'}}>
                                    优惠门槛
                                </div>
                                <div style={{height:'75px'}}>
                                    <Tabs onChange={callback} type="card">
                                        <TabPane tab="按额度" key="1">
                                            <span>满</span>
                                            <input style={{width:'70px',height:'25px'}}/>
                                            <span>元</span>
                                        </TabPane>
                                        <TabPane tab="按种类" key="2">
                                            <span>购买活动产品中其中</span>
                                                <input style={{width:'70px',height:'25px'}}/>
                                            <span>种</span>
                                        </TabPane>
                                        <TabPane tab="按数量" key="3">
                                            <span>购买数量达到</span>
                                                <input style={{width:'70px',height:'25px'}}/>
                                            <span>件</span>
                                        </TabPane>
                                    </Tabs>,
                                </div>
                            </div>
                            <div style={{width:'260px',float:'left'}}>
                                <div style={{height:'30px',textAlign:'center'}}>
                                    优惠方式
                                </div>
                                <div style={{height:'75px'}}>
                                    <Radio.Group style={{float:'left'}} onChange={this.onChange} value={this.state.value}>
                                        <Radio style={radioStyle} value={0}>加</Radio>
                                        
                                        <Radio style={radioStyle} value={1}></Radio>  
                                        
                
                                    </Radio.Group>
                                    <div style={{float:'left',}}>
                                        <div>
                                            <input style={{width:'53px',height:'25px'}}/>
                                            <span>元，可购买以下产品</span>
                                        </div>
                                        <div style={{marginTop:'15px'}}>
                                            <input style={{width:'53px',height:'25px'}}/>
                                            <span>折，可购买以下产品</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
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
          activitytype:1
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
            value: e.target.value,
          });
        this.state.value = e.target.value;
        console.log(this.state.value)
        
      };
      

    
    render() {
        
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
            <div className='priceincreasebox'>
                <div style={{height:'51px',marginTop:'40px',marginLeft:'20px'}} className='clearfix'>
                    <div  className='addstep'>1</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div className='addstep'>2</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div style={{background:'rgb(153,153,153)'}} className='addstep'>3</div>
                        <img style={{float:'left'}} src={require('../../../view/u37.png')}/>
                    <div className='addstep'>4</div>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Priceincrease;