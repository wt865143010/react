import React, {Component} from 'react'

import { Input } from 'antd';
import { Table } from 'antd';

import { Checkbox } from 'antd';
import axios from 'axios'


const { Search } = Input;




class buyCart extends Component {

    constructor() {
        super();
        this.state={
            selectedRowKeys: [], // Check here to configure the default column
            value:0,
            product:[],
            arr:[],
            type:false,
            data:[],
            aa:[],
            bb:[],
            columns : [
                {
                    title: '全选',
                    dataIndex: 'name',
                },
                {
                    title: '产品',
                    dataIndex: 'product',
                },
                {
                    title: '单价',
                    dataIndex: 'danjia',
                },
                {
                    title: '数量',
                    dataIndex:'number'

                },
                {
                    title: '小计',
                    dataIndex: 'heji',
                },
                {
                    title: '操作',
                    dataIndex: 'delete',
                },
            ]
        }
    }




    UNSAFE_componentWillMount() {
       this.getallproduct();

    }


    getallproduct(){
        console.log('cart')
        this.state.aa=[]
        this.state.bb=[]
        axios.get('http://localhost:3210/productCart.do').then((response)=>{
            console.log(response)
            if(response.status==200){

                response.data.map((item,index)=>{
                    this.state.aa.push(item.id)
                    this.state.bb.push({
                        key:item.id,
                        name:item.name,
                        product:item.product,
                        danjia:item.danjia,

                        heji:item.danjia*item.number,
                        delete:<a onClick={this.delete.bind(this,(item.id))}>删除</a>,
                        number:<div id={"num"}>
                            <a className={"minus"} onClick={this.minusnumber.bind(this,(item.id))}>－</a>
                            <input type="text" style={{width:"50px",  textAlign:"center"}} onChange={this.inputvalue.bind(this,(item.id))} value={item.number}/>
                            <a className={"minus"} onClick={this.addnumber.bind(this,(item.id))}>＋</a>
                        </div>

                    })
                })
                this.setState({

                    data:this.state.bb
                })
            }


        })
    }

    onSelectChange = (selectedRowKeys )=> {
        console.log('selectedRowKeys changed: ' +{selectedRowKeys} );


        this.setState({ selectedRowKeys });
        console.log(this.state.arr.length)
        console.log(this.state.selectedRowKeys.length)
        if(this.state.arr.length===this.state.selectedRowKeys.length){
            this.setState({
                type:true
            })
        }else {
            this.setState({
                type:false
            })
        }



    };
    render() {


        if(this.state.value==-1){
            this.setState({
                value:0
            })
        }

        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            selections: [
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                {
                    key: 'odd',
                    text: 'Select Odd Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false;
                            }
                            return true;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
                {
                    key: 'even',
                    text: 'Select Even Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true;
                            }
                            return false;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
            ],
        };







        console.log(this.state.success)

            return (
                <div>
                    <div className={"btn"}>
                        <span style={{marginLeft: "40%",}}>en悦家会员点数抵扣除外的产品名单</span>
                        <span style={{marginLeft: "40%", fontSize: 30}} onClick={this.Close}>×</span>
                    </div>
                    <div>
                        <span>首页></span>
                        <span onClick={this.toA}>购物车></span>
                        <span onClick={this.toPersonal}>个人中心></span>


                    </div>
                    <Search
                        placeholder="输入产品名称/编号"
                        onSearch={value => console.log(value)}
                        style={{width: "40%", marginLeft: "30%", marginTop: "40px"}}
                        size={"large"}
                    />
                    <p style={{marginTop: 20, color: "rgb(0,138,176)"}}>全部产品</p>
                    <hr/>
                    <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data}/>

                    <hr/>
                    <span style={{
                        color: "rgb(255,103,29)",
                        fontSize: 15,
                        fontWeight: "bold",
                        marginLeft: "70%"
                    }}>一份蜜儿餐，一次滋养，一个微笑。美好未来，</span>
                    <a style={{fontWeight: "bold"}}>点击开启</a>
                    <hr/>

                    <div  style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        height:"80px",
                        lineHeight:"80px",
                        backgroundColor:"#F9F9F9"
                    }}>
                        <div style={{width:"30%"}}>
                            <Checkbox onChange={this.onChange} checked={this.state.type}
                                      style={{marginLeft: "1.5%", width: "30%"}}><span
                                style={{marginLeft: "10%"}}>全选</span></Checkbox>
                            <span>已选中{this.state.selectedRowKeys.length}件商品</span>
                        </div>
                        <div style={{marginLeft:"-20%",height:"100%",width:"20%"}}>
                            <span>总价：</span>
                            <span style={{ backgroundColor:"#0089AF",width:"30%",height:"100%",display:"inline-block",textAlign:"center",marginLeft:"55%"}}>去结算</span>
                        </div>
                    </div>

                </div>
            )

    }
     onChange=(e)=> {
        if(e.target.checked==true){
           this.setState({
               selectedRowKeys:this.state.arr,
               type:true
           })

        }else {
            this.setState({
                selectedRowKeys:[],
                type:false
            })
        }
        console.log(`checked = ${e.target.checked}`);
    }
    toA=()=>{

    }
    Close=()=>{
        document.getElementsByClassName("btn")[0].style.display="none"

    }
    minusnumber=(number)=>{

       console.log(number)
        axios.get('http://localhost:3210/productCartminusnumber.do?id='+number,).then((response)=>{
            console.log(response.data)
            if(response.data=="修改成功"){
                this.getallproduct()
            }

        })


    }
    addnumber=(number)=>{
        axios.get('http://localhost:3210/productCartaddnumber.do?id='+number,).then((response)=>{
            console.log(response.data)
            if(response.data=="修改成功"){
                this.getallproduct()
            }

        })

    }
    inputvalue=(number,e)=>{
        console.log(e.target.value)
        axios.get('http://localhost:3210/productCartupdatenumber.do?id='+number+"&&num="+e.target.value,).then((response)=>{
            console.log(response.data)
            if(response.data=="修改成功"){
                this.getallproduct()
            }

        })
    }
    delete=(number)=>{
        console.log(number)
        axios.get('http://localhost:3210/productCartdeletenumber.do?id='+number,).then((response)=>{
            console.log(response.data)
            if(response.data=="修改成功"){
                this.getallproduct()
                /*axios.get('http://localhost:3210/productCart.do').then((response)=>{
                    console.log(response.data)
                    this.setState({
                        product:response.data
                    })
                })*/
            }

        })

    }
    toPersonal=()=>{
        this.props.history.push("/home/Home/Personal1")
    }


}

export default buyCart
