import React, {Component} from 'react'
import {Input,Checkbox,Button} from "antd";
import './product_lable_title.css'
import {inject,observer} from "mobx-react";

@inject('product')
@observer class addproduct_price_type extends Component {
    constructor() {
        super();
        this.state={
            name:"其他",
            number:"C6",
            description:"",
            discount:"",
            remark:"",




        }

    }


    render() {

      
        return (
            <div>
                <div className={"product_lable_title"}>
                    <div>产品管理>产品配置</div>
                    <hr/>
                    <div>
                        <span>新增价格类型</span>
                    </div>
                    <hr/>
                </div>
                <table >
                    <tbody className={"add_pro_price_type"}>
                    <tr>
                        <td>价格类型分类</td>
                        <td><Input.Group compact>
                            <Input style={{ width: '25%',height:"40px" }} defaultValue="其他" onChange={val=>this.getvalue('name',val)}/>

                        </Input.Group></td>
                    </tr>
                    <tr>
                        <td>价格类型</td>
                        <td><Input.Group compact>
                            <Input style={{ width: '25%',height:"40px" }} defaultValue="C6" onChange={val=>this.getvalue('number',val)}/>

                        </Input.Group></td>
                    </tr>
                    <tr>
                        <td>价格类型描述</td>
                        <td><Input.Group compact>
                            <Input style={{ width: '50%',height:"30px" }} onChange={val=>this.getvalue('description',val)}/>

                        </Input.Group></td>
                    </tr>
                    <tr>
                        <td>折扣率</td>
                        <td><Input.Group compact>
                            <Input style={{ width: '50%',height:"30px" }} onChange={val=>this.getvalue('discount',val)}/>

                        </Input.Group></td>
                    </tr>
                    <tr>
                        <td>备注说明</td>
                        <td><Input.Group compact>
                            <Input style={{ width: '50%',height:"100px" }} onChange={val=>this.getvalue('remark',val)}/>

                        </Input.Group></td>
                    </tr>
                    </tbody>



                </table>

                    <Button type="primary" onClick={this.addproduct_price_type} style={{width:"200px",borderRadius:"10px",marginLeft:"-50px",marginTop:"50px"}}>确认</Button>
                    <Button type="primary" onClick={this.toPro_price_type} style={{width:"200px",borderRadius:"10px",marginLeft:"50px",marginTop:"50px"}}>取消</Button>


            </div>
        )
    }
    getvalue=(key,val)=>{

        this.setState({
            [key]:val.target.value
        })
    }

    addproduct_price_type=()=>{//添加新的产品价格类型
        this.props.product.addproduct_price_type(this.state)
        this.props.history.push("/home/product/product_config/Pro_price_type")
    }
    toPro_price_type=()=>{
        this.props.history.push("/home/product/product_config/Pro_price_type")

    }

}

export default addproduct_price_type
