import React, { Component,useContext, useState, useEffect, useRef } from 'react';
import './Discountpromotion.css'
import { Table, Input, Button, Popconfirm, Form,Radio,Checkbox } from 'antd';
import {inject,observer} from "mobx-react";
import {Link} from 'react-router-dom'

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

@inject('coupon')

@observer
class Discountpromotion extends Component {
    constructor(props) {
        super(props);
        this.columns = [
          {
            title: '层级',
            dataIndex: 'promotionClass',
            width: '30%',
            editable: true,
          },
          {
            title: '优惠门槛',
            key:'preferentialThreshold',
            render:(record)=>{
                return (
                    <div>
                        <span>满</span>
                        <input onChange={(e)=>this.preferentialThreshold(e,record)} style={{width:'53px',height:'25px'}}/>
                        <span>元</span>
                    </div>
                )
            }
          },
          {
            title: '金额优惠',
            key:'promotionPrice',
            render:(text,record)=>{
                const radioStyle = {
                    display: 'block',
                    height: '30px',
                    lineHeight: '30px',
                  };
                return (
                    <div className="clearfix">
                        <Radio.Group style={{float:'left'}}  value={this.state.value}>
                            <Radio style={radioStyle} value={0}>减</Radio>
                            
                              
                            
    
                        </Radio.Group>
                        <div style={{float:'left',}}>
                            <div>
                                <input onChange={(e)=>this.promotionPrice(e,record)} style={{width:'53px',height:'25px'}}/>
                                <span>元</span>
                            </div>


                        </div>
                    </div>

                )

            }
          },
          {
            title: '操作',
            dataIndex: 'operation',
            render:(text,record)=>{
                // console.log(record)
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
              preferentialThreshold:'',
              promotionPrice:''


            },

          ],
          count: 2,
          value: 0,
          activitytype:0,
          promotionPrice:'',// 优惠金额
          data:[],//存放数据
          isRuleCirculation:'', //按规规则循环
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

      onChange = e => {
        // console.log( e.target.value);
        this.setState({
            value: e.target.value,
          });
        this.state.value = e.target.value;
        // console.log(this.state.value)
        
      };

      isRuleCirculation = e => {

        
        console.log(e.target.checked);
        if(e.target.checked == true){
          this.state.isRuleCirculation = 1
        }else{
          this.state.isRuleCirculation = 0
        }
        console.log(this.state.isRuleCirculation)
       
      }


      //获取金额
      promotionPrice(e,record){
        this.state.promotionPrice = e.target.value
        
        record.promotionPrice = e.target.value
        console.log(record)
        this.state.data.push(record)
        
      }


      //获取优惠门槛
      preferentialThreshold(e,record){
        console.log(e.target.value)
        console.log(record)
        record.preferentialThreshold = e.target.value
        
      }

      //发送数据
      sendmanjiancuxiao(){
        this.props.coupon.fullreduction(this.state.data,this.state.isRuleCirculation)
    
      }
    







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
            <div className='Discountbox'>
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
                <div style={{marginTop:'40px',marginLeft:'20px'}}> 
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
                              <div onClick={this.sendmanjiancuxiao.bind(this)} style={{background:'rgb(204,204,204)'}} className='secondbutton'>下一步</div>
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

export default Discountpromotion;