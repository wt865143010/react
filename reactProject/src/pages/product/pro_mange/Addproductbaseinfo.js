import React, {Component} from 'react'
import './Addproductbaseinfo.css'

import { DatePicker ,Button} from 'antd';
import {inject} from "mobx-react";
import { Checkbox } from 'antd';
@inject('product')


class Addproductbaseinfo extends Component {
        constructor(props) {
            super(props);
          this.state={
              productnum:"",
              productclass:"Pharchen",
                cha_name:"",
              english_name:"",
              unit_measurement:'只',
              product_length:'',
              product_width:"",
              product_height:"",
              outer_packing:"",
              product_weight:"",
              is_selling:"是",
              selling_data:"",
              tax_rate:"",
              alert_inventory:"",
              is_present:"是",
              is_freight:"是",
              is_presale:"是",
              gategory_display:"是",
              is_mixOrder:"是",
              is_shipment:"是",
              sell_code:"是",
              return_code:"是",
              product_limit:"是",
          }
        }

    render() {



        return (
            <div>
                <table id={"table"}>
                    <tbody className="Addproductbaseinfo">
                    <tr>
                        <td>产品编号</td>
                        <td><input type="text"  onChange={val=>this.change_productnum('productnum',val)} style={{width:150}}/></td>
                    </tr>
                    <tr>
                        <td>产品分类</td>
                        <td>
                            <select name="" id="productclass" defaultValue={this.state.productclass} onChange={val=>this.chang_productclass('productclass',val)}>
                                <option value="">Pharchen</option>
                                <option value="">Nuskin</option>
                                <option value="">hersherd</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>产品中文名称</td>
                        <td><input type="text"  onChange={val=>this.change_productnum('cha_name',val)}/>长度限定在75个字符以内</td>
                    </tr><tr>
                        <td>产品英文名称</td>
                        <td><input type="text" onChange={val=>this.change_productnum('english_name',val)}/>长度限定在50个字符以内</td>
                    </tr><tr>
                        <td>计量单位</td>
                        <td>
                            <select name="" id="unit_measurement" defaultValue={this.state.unit_measurement} onChange={val=>this.chang_productclass('unit_measurement',val)}>
                                <option value="">只</option>
                                <option value="">袋</option>
                                <option value="">件</option>
                                <option value="">套</option>
                                <option value="">个</option>
                                <option value="">包</option>
                            </select>
                        </td>
                    </tr><tr>
                        <td>外包装尺寸</td>
                        <td>长度：<input type="text"  onChange={val=>this.change_productnum('product_length',val)}/>宽度：<input type="text" onChange={val=>this.change_productnum('product_width',val)}/>高度：<input type="text"onChange={val=>this.change_productnum('product_height',val)}/></td>
                    </tr><tr>
                        <td>外包装材料</td>
                        <td><input type="text"  onChange={val=>this.change_productnum('outer_packing',val)}/></td>
                    </tr><tr>
                        <td>产品重量</td>
                        <td><input type="text" onChange={val=>this.change_productnum('product_weight',val)}/></td>
                    </tr><tr>
                        <td>是否直销</td>
                        <td>
                            <Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'is_selling',val)}>是</Checkbox>
                        </td>
                    </tr><tr>
                        <td>直销核准日期</td>
                        <td><DatePicker id="selling_data" onChange={this.onChangedata} /></td>
                    </tr><tr>
                        <td>是否捐赠</td>
                        <td>
                            <Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'is_present',val)}>是</Checkbox>
                          </td>
                    </tr><tr>
                        <td>税率(100%)</td>
                        <td><input type="text"  onChange={val=>this.change_productnum('tax_rate',val)}/>%</td>
                    </tr>
                    <tr>
                        <td>警戒库存</td>
                        <td><input type="text"  onChange={val=>this.change_productnum('alert_inventory',val)}/></td>
                    </tr><tr>
                        <td>是否需要运费</td>
                        <td><Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'is_freight',val)}>是</Checkbox></td>
                    </tr><tr>
                       {/* <td>允许自提</td>
                        <td><input type="radio" name={"4"}checked  defaultValue={"是"} onChange={val=>this.change_productnum('is_presale',val)}/>是
                            <input type="radio" name={"4"} defaultValue={"否"} onChange={val=>this.change_productnum('is_presale',val)}/>否</td>*/}
                    </tr><tr>
                        <td>是否预售</td>
                        <td><Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'is_presale',val)}>是</Checkbox></td>
                    </tr><tr>
                        <td>是否类目显示</td>
                        <td><Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'gategory_display',val)}>是</Checkbox></td>
                    </tr><tr>
                        <td>允许混单</td>
                        <td><Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'is_mixOrder',val)}>是</Checkbox></td>
                    </tr><tr>
                        <td>是否出货</td>
                        <td><Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'is_shipment',val)}>是</Checkbox></td>
                    </tr><tr>
                        <td>出货扫码</td>
                        <td> <Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'sell_code',val)}>是</Checkbox></td>
                    </tr><tr>
                        <td>退货扫码</td>
                        <td> <Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'return_code',val)} >是</Checkbox></td>
                    </tr>
                    </tbody>
                </table>
               <p>
                   <span>产品配置</span>
                   <span>对于可预览控制，不显示在类目中条件下才有效。对限购用户的控制</span>
               </p>
              {/*  <div className="product_res">
                    <p>产品限制</p>
                    <div><input type="checkbox"/>配置可预览的用户<input type="checkbox"/>配置限购的用户</div>
                </div>*/}
                <div>
                    <Button type="primary" block onClick={this.toProduct_price} className="next">
                       下一步
                    </Button>
                </div>

            </div>
        )

    }
    onChange=(e,key,val)=> {

        if(e.target.checked==true){
            console.log(11111)
            this.setState({
                [key]:"是"

            })
        }
       if(e.target.checked==false) {
            console.log(2222)
            this.setState({
                [key]:"否"
            })
        }

    }



    onChangedata=(date, dateString)=> {

         this.setState({
             selling_data:dateString
         })



    }

    change_productnum=(key,val)=>{

        this.setState({
            [key]:val.target.value
        })
    }
    chang_productclass=(key,val)=>{
     let myselect=document.getElementById(key);
        let index=myselect.selectedIndex
        this.setState({
            [key]:myselect.options[index].text
        })
    }


    toProduct_price=()=>{
       console.log(this.state)
        this.props.getnew_key("2")
        this.props.product.addProductbaseinfo=this.state
       /* this.props.product.addproductbaseinfo()*/

    }
}

export default Addproductbaseinfo
