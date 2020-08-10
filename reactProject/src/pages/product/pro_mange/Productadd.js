import React, {Component} from 'react'
import {Link} from "react-router-dom";
import Addproductbaseinfo from "./Addproductbaseinfo";




import { Tabs } from 'antd';
import Product_price from "./Product_price";
import UpperandLower from "./UpperandLower";


const { TabPane } = Tabs;





class Productadd extends Component {
constructor(props) {
    super(props);
    this.state={
        ActiveKey:"1"


    }
}

    render() {
        return (
        <div className="productbaseinfo">
                <div>产品管理>发布新产品</div>
                <hr/>
                <h1>发布新产品</h1>
                <hr/>
            <Tabs activeKey={String(this.state.ActiveKey)}   onChange={this.callback}>
                <TabPane tab="基本信息" key="1">
                    <Addproductbaseinfo getnew_key={this.getnew_key}></Addproductbaseinfo>
                    {/* <Link to="/Addproductbaseinfo" component={Addproductbaseinfo}>基本信息</Link>*/}
                </TabPane>
                <TabPane tab="产品定价" key="2">
                    <Product_price toProduct_baseinfo={this.getnew_key} toProduct_baseinfo={this.getnew_key}></Product_price>
                    {/*<Link to="/Product_price" component={Product_price}>基本信息</Link>*/}
                </TabPane>
                <TabPane tab="产品描述" key="3">
                    Content of Tab Pane 444433333
                </TabPane> <TabPane tab="发现更多" key="4">
                Content of Tab Pane 3
            </TabPane> <TabPane tab="扩展属性" key="5">
                Content of Tab Pane 3
            </TabPane> <TabPane tab="推荐产品" key="6">
                Content of Tab Pane 3
            </TabPane> <TabPane tab="搜索优化" key="7">
                Content of Tab Pane 3
            </TabPane> <TabPane tab="上下架配置" key="8">
                <UpperandLower tosearch={this.getnew_key} toproduct={this.toproduct}></UpperandLower>
            </TabPane>
            </Tabs>
            </div>
        )
    }
    toproduct=()=>{
        console.log(this.props)
        this.props.history.push("/home/product/pro_mange/Product_list")
    }
    getnew_key=(num)=>{
        console.log(num)
        this.setState({
            ActiveKey:num
        })


    }
   callback=(key)=> {
       this.setState({
           ActiveKey:key
       })
    }








}

export default Productadd
