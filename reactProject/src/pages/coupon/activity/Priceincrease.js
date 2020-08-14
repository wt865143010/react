import React, { Component,useContext, useState, useEffect, useRef } from 'react';
import './Priceincrease.css'
import { Table, Input, Button, Popconfirm, Form,Radio,Checkbox,Tabs,Space } from 'antd';
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
                title: '必选数量',
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
                      <span onClick={(e)=>this.deletemandatoryproduct(e,record)}>移除</span>
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
                        <span onClick={(e)=>this.deleteoptionalProductName(e,record)}>移除</span>
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
                                    <Tabs onChange={this.callback.bind(this)} type="card">
                                        <TabPane tab="按额度" key="0">
                                            <span>满</span>
                                            <input onChange={this.changequota.bind(this)} style={{width:'70px',height:'25px'}}/>
                                            <span>元</span>
                                        </TabPane>
                                        <TabPane tab="按种类" key="1">
                                            <span>购买活动产品中其中</span>
                                                <input onChange={this.changetypeNum.bind(this)} style={{width:'70px',height:'25px'}}/>
                                            <span>种</span>
                                        </TabPane>
                                        <TabPane tab="按数量" key="2">
                                            <span>购买数量达到</span>
                                                <input onChange={this.changenum.bind(this)} style={{width:'70px',height:'25px'}}/>
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
                                    <Radio.Group style={{float:'left'}} onChange={this.onChange.bind(this)} value={this.state.preferentialType}>
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
                            <span onClick={this.openmodel.bind(this)} style={{marginLeft:'20px',color:'#00CCCC'}}>新增产品</span>
                            <Table  columns={mandatorycolumns} pagination={false} dataSource={this.state.sendmandatory} />
                            
                        </div>
                        <div style={{marginTop:'20px',paddingBottom:'20px'}}>
                            <span style={{fontWeight:'700',fontSize:'18px'}}>可选产品</span>
                            <span onClick={this.openmodel1.bind(this)} style={{marginLeft:'20px',color:'#00CCCC'}}>新增产品</span>
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
          preferentialThresholdType: 0,
          isproductshow:false, //添加必选产品模态框控制
          isshopshow:false,//添加可选产品模态框控制
          choiceproduct:[],//选择后的必选商品数据
          choiceshop:[], //选择后的可选数据
          addproductdata:[     
            {
              key:1,
              requiredProductName:'geLOC Me新智我仪器套装 ageLOC Me Device Kit',
              propertytype:'智芯组合产品',
              requiredProductPrice:'100',
              requiredProductNum:'1000',
              
            },{
              key:2,
              requiredProductName:'asdasdasd',
              propertytype:'智芯组合产品',
              requiredProductPrice:'100',
              requiredProductNum:'1000'
              
            }
          ],//添加必选商品搜索商品的数据
          addshopdata:[
            {
              key:1,
              OptionalProductName:'geLOC Me新智我仪器套装 ageLOC Me Device Kit',
              propertytype:'智芯组合产品',
              optionalProductPirce:'100'
              
            },{
              key:2,
              OptionalProductName:'wwwwww',
              propertytype:'智芯组合产品',
              optionalProductPirce:'100',
              preferentialType:0,
              
            }
          ], //搜索后的可选商品数据
          //必选产品
          mandatoryproductdata:[
   
          ],

          //可选产品
          productdata:[
              {
                  key:1,
                  optionalProductName:'产品中文名+产品英文名',
                  optionalProductPirce:'零售顾客折扣：￥100.00'
              }
          ],
          activitytype:1,
          quota:0, //额度
          typeNum:'', //种类
          num:'', //数量
          sendmandatory:[], //发送的可选产品数据
        };
      }
      callback(key){
        console.log(key)
        this.state.preferentialThresholdType = key
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

      onChange(e){
        // console.log( e.target.value);
        this.setState({
          preferentialType: e.target.value,
          });
        this.state.vapreferentialTypelue = e.target.value;
        console.log(this.state.preferentialType)
        
      };


      //删除必选产品数据
      deletemandatoryproduct(e,record){
        let obj = [...this.state.mandatoryproductdata]
        for(let item in obj){
          if(this.state.mandatoryproductdata[item].requiredProductName == record.requiredProductName){
            console.log(item)
            this.state.mandatoryproductdata.splice(item,1)
            obj.splice(item,1)
          }
        }
        console.log(this.state.mandatoryproductdata)
        this.setState({
          mandatoryproductdata:obj
        })
        console.log(this.state.mandatoryproductdata)
      }


      //删除可选产品
      deleteoptionalProductName(e,record){
        let obj = [...this.state.productdata]
        for(let item in obj){
          if(this.state.productdata[item].requiredProductName == record.requiredProductName){
            console.log(item)
            this.state.productdata.splice(item,1)
            obj.splice(item,1)
          }
        }
        console.log(this.state.productdata)
        this.setState({
          productdata:obj
        })
        console.log(this.state.productdata)
      

      }

      //输入额度
      changequota(e){
        this.state.quota = e.target.value
      }

      //输入种类
      changetypeNum(e){
        this.state.typeNum = e.target.value
      }

      //输入数量
      changenum(e){
        this.state.num = e.target.value
      }

      //打开必选商品模态框
      openmodel(e){
        this.setState({
          isproductshow:true
        })
      }

      //打开可选商品模态框
      openmodel1(e){
        this.setState({
          isshopshow:true
        })
      }

      //关闭模态框
      closeaddproduct(e){
        this.setState({
          isproductshow:false,
          isshopshow:false
        })
      }


      //删除选择的必选商品数据
      alldeleteproduct(e){
        this.setState({
          choiceproduct:[]
        })
      }


      //删除选择的可选商品数据
      alldeleteoptionalproduct(e){
        this.setState({
          choiceshop:[]
        })
      }
      
      //输入必选类目
      requiredchooseproject(e){

      }
      //输入必选属性类型
      requiredexpandtype(e){

      }

      //输入必选标签
      requiredcoupontype(e){

      }

      //输入必选属性
      requiredattribute(e){

      }

      //输入必选产品编号
      requiredproductnumber(e){

      }

      //输入必选产品名称
      requiredproductname(e){

      }

      //搜索必选产品
      requiredsearchproduct(e){

      }

      //确定必选产品
      requiredproductdetermine(e){
        
        this.setState({
          sendmandatory:this.state.mandatoryproductdata
        })
        this.setState({
          isproductshow:false
        })

      }
      //输入可选类目
      optionalchooseproject(e){

      }
      //输入可选属性类型
      optionalexpandtype(e){

      }

      //输入可选标签
      optionalcoupontype(e){

      }

      //输入可选属性
      optionalattribute(e){

      }

      //输入可选产品编号
      optionalproductnumber(e){

      }

      //输入可选产品名称
      optionalproductname(e){

      }

      //搜索可选产品
      optionalsearchproduct(e){

      }

      //确定可选产品
      optionalproductdetermine(e){
        console.log(this.state.productdata)
        let obj = this.state.productdata
        console.log(obj)
        this.setState({
          productdata:obj
        })
        this.setState({
          isshopshow:false
        })
      }

      //选择必选产品
      requiredchooseproduct(data){
        console.log(data)

        this.state.mandatoryproductdata.push(data)
        this.setState({
            mandatoryproductdata:this.state.mandatoryproductdata
        })
        console.log(this.state.mandatoryproductdata)
      }

      //选择可选产品
      optionalchooseproduct(data){
        console.log(data)
        this.state.productdata.push(data)
        this.setState({
          productdata:this.state.productdata
        })
        console.log(this.state.productdata)
      }

      //删除一条必选产品
      delectthisproduct(data){
        console.log(data)
        let obj = this.state.mandatoryproductdata
        let obj1=obj.filter((item)=>{
            return item.key !== data.key
        })
        this.setState({
          mandatoryproductdata:obj1
        })
        console.log(this.state.mandatoryproductdata)
    }

    //删除一条可选产品
    optionaldelectthisproduct(data){
      console.log(data)
      let obj = this.state.productdata
      let obj1=obj.filter((item)=>{
          return item.key !== data.key
      })
      this.setState({
        productdata:obj1
      })
      console.log(obj1)
  }
    
    render() {
      //添加必选产品
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
            dataIndex: 'requiredProductName',
            key: 'requiredProductName',

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
                    <a onClick={this.requiredchooseproduct.bind(this,record)}>选择</a>
                </Space>
            )
        },
    ]

    const optionalProductcolumns=[
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
                <a onClick={this.optionalchooseproduct.bind(this,record)}>选择</a>
            </Space>
        )
    },
    ]
      let model = null
        let productlist = null
        let shoplist = null
        let model1 = null
        
        let arr = this.state.mandatoryproductdata.map((item,i)=>{
            return (
                <div key={i} style={{height:'75px',margin:'5px 10px',borderBottom:'1px solid black',position:'relative'}}>
                    <Checkbox style={{}} onChange={e=>this.chooseproductitem(e,item)}></Checkbox>
                    <img style={{}} src={item.src} style={{width:'60px',height:'60px'}}></img>
                    <div  style={{position:'absolute',fontSize:'13px',width:'165px',height:'34px',top:'10px',left:'80px'}}>{item.requiredProductName}</div>
                    <div onClick={this.delectthisproduct.bind(this,item)} style={{position:'absolute',top:'20px',left:'245px',width:'25px',height:'25px',background:'red',cursor:'pointer',borderRadius:'50%',lineHeight:'25px',textAlign:'center'}}>X</div>
                </div>
            )
        })
        let arr1 = this.state.productdata.map((item,i)=>{
            return (
                <div key={i} style={{height:'75px',margin:'5px 10px',borderBottom:'1px solid black',position:'relative'}}>
                    <Checkbox style={{}} onChange={e=>this.chooseproductitem(e,item)}></Checkbox>
                    <img style={{}} src={item.src} style={{width:'60px',height:'60px'}}></img>
                    <div  style={{position:'absolute',fontSize:'13px',width:'165px',height:'34px',top:'10px',left:'80px'}}>{item.OptionalProductName}</div>
                    <div onClick={this.optionaldelectthisproduct.bind(this,item)} style={{position:'absolute',top:'20px',left:'245px',width:'25px',height:'25px',background:'red',cursor:'pointer',borderRadius:'50%',lineHeight:'25px',textAlign:'center'}}>X</div>
                </div>
            )
        })

        if(this.state.choiceproduct.length >= 0){
            productlist = 
            <div>
                <div style={{margin:'5px 10px',borderBottom:'1px solid black'}}>
                    <span  style={{color:'rgb(140,164,213)',cursor:'pointer'}}>批量删除</span>
                    <span onClick={this.alldeleteproduct.bind(this)} style={{color:'rgb(140,164,213)',marginLeft:'40px',cursor:'pointer'}}>全部删除</span>
                </div>
                <div>
                    {arr}
                </div>
            </div>
        }

        if(this.state.choiceshop.length >= 0){
            shoplist = 
            <div>
                <div style={{margin:'5px 10px',borderBottom:'1px solid black'}}>
                    <span  style={{color:'rgb(140,164,213)',cursor:'pointer'}}>批量删除</span>
                    <span onClick={this.alldeleteoptionalproduct.bind(this)} style={{color:'rgb(140,164,213)',marginLeft:'40px',cursor:'pointer'}}>全部删除</span>
                </div>
                <div>
                    {arr1}
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
                                   <select onChange={this.requiredchooseproject.bind(this)} style={{width:'140px',height:'22px',margin:'0 5px'}} >
                                       <option value="-1">请选择前端类目</option>
                                       <option value="0">ageLOC Me</option>
                                       <option value="1">---- 预见套</option>
                                   </select>
                                   <select onChange={this.requiredexpandtype.bind(this)} style={{width:'117px',height:'22px',margin:'0 5px'}} >
                                       <option value="-1">扩展属性类型</option>
                                       <option value="0">智芯精华</option>
                                       <option value="1">ageLOC Me 设备</option>
                                       <option value="2">化妆品</option>
                                       <option value="3">蜜儿餐</option>
                                   </select>
                                   <select onChange={this.requiredcoupontype.bind(this)} style={{width:'115px',height:'22px',margin:'0 5px'}} >
                                       <option value="-1">请选择标签</option>
                                       <option value="0">热卖</option>
                                       <option value="1">推荐</option>
                                       <option value="2">新品</option>
                                       <option value="3">推荐</option>
                                   </select>
                                   <select onChange={this.requiredattribute.bind(this)} style={{width:'115px',height:'22px',margin:'0 5px'}} >
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
                                   <input onChange={this.requiredproductnumber.bind(this)} style={{width:'114px',height:'25px',marginLeft:'10px',marginRight:"10px"}} />
                                   <span style={{fontSize:'14px',fontWeight:'700'}}>产品名称:</span>
                                   <input onChange={this.requiredproductname.bind(this)} style={{width:'227px',height:'25px',marginLeft:'10px',marginRight:"10px"}} />
                                   <button onClick={this.requiredsearchproduct.bind(this)} style={{width:'71px',height:'30px',background:'rgb(22,155,213)',color:'white',borderRadius:'5px',border:'none'}}>查询</button>
                               </div>
                           </div>
                           <div style={{width:'599px'}}>
                               <Table dataSource={this.state.addproductdata} columns={addproductcolumns} />;
                           </div>
                       </div>
                       <div style={{float:'right',width:'298px',height:'386px',background:'rgb(204,230,230)'}}>
                           {productlist}
                       </div>

                   </div>
                   <div className='clearfix' style={{height:'50px',background:'rgb(215,215,215)'}}>
                       <div onClick={this.closeaddproduct.bind(this)} style={{float:'right',width:'140px',height:'40px',lineHeight:'40px',textAlign:'center',marginTop:'5px',background:'rgb(22,155,213)',marginRight:'10px',borderRadius:'8px'}}>取消</div>
                       <div onClick={this.requiredproductdetermine.bind(this)} style={{float:'right',width:'140px',height:'40px',borderRadius:'8px',background:'white',marginTop:'5px',lineHeight:'40px',textAlign:'center',marginRight:'10px'}}>确定</div>
                   </div>

               </div>
           
       }

       if(this.state.isshopshow == true){
           model1 = 
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
                                   <select onChange={this.optionalchooseproject.bind(this)} style={{width:'140px',height:'22px',margin:'0 5px'}} >
                                       <option value="-1">请选择前端类目</option>
                                       <option value="0">ageLOC Me</option>
                                       <option value="1">---- 预见套</option>
                                   </select>
                                   <select onChange={this.optionalexpandtype.bind(this)} style={{width:'117px',height:'22px',margin:'0 5px'}} >
                                       <option value="-1">扩展属性类型</option>
                                       <option value="0">智芯精华</option>
                                       <option value="1">ageLOC Me 设备</option>
                                       <option value="2">化妆品</option>
                                       <option value="3">蜜儿餐</option>
                                   </select>
                                   <select onChange={this.optionalcoupontype.bind(this)} style={{width:'115px',height:'22px',margin:'0 5px'}} >
                                       <option value="-1">请选择标签</option>
                                       <option value="0">热卖</option>
                                       <option value="1">推荐</option>
                                       <option value="2">新品</option>
                                       <option value="3">推荐</option>
                                   </select>
                                   <select onChange={this.optionalattribute.bind(this)} style={{width:'115px',height:'22px',margin:'0 5px'}} >
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
                                   <input onChange={this.optionalproductnumber.bind(this)} style={{width:'114px',height:'25px',marginLeft:'10px',marginRight:"10px"}} />
                                   <span style={{fontSize:'14px',fontWeight:'700'}}>产品名称:</span>
                                   <input onChange={this.optionalproductname.bind(this)} style={{width:'227px',height:'25px',marginLeft:'10px',marginRight:"10px"}} />
                                   <button onClick={this.optionalsearchproduct.bind(this)} style={{width:'71px',height:'30px',background:'rgb(22,155,213)',color:'white',borderRadius:'5px',border:'none'}}>查询</button>
                               </div>
                           </div>
                           <div style={{width:'599px'}}>
                            <Table dataSource={this.state.addshopdata} columns={optionalProductcolumns} />;
                           </div>
                       </div>
                       <div style={{float:'right',width:'298px',height:'386px',background:'rgb(204,230,230)'}}>
                           {shoplist}
                       </div>

                   </div>
                   <div className='clearfix' style={{height:'50px',background:'rgb(215,215,215)'}}>
                       <div onClick={this.closeaddproduct.bind(this)} style={{float:'right',width:'140px',height:'40px',lineHeight:'40px',textAlign:'center',marginTop:'5px',background:'rgb(22,155,213)',marginRight:'10px',borderRadius:'8px'}}>取消</div>
                       <div onClick={this.optionalproductdetermine.bind(this)} style={{float:'right',width:'140px',height:'40px',borderRadius:'8px',background:'white',marginTop:'5px',lineHeight:'40px',textAlign:'center',marginRight:'10px'}}>确定</div>
                   </div>

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
            <div className='priceincreasebox'>
              {model}
              {model1}
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