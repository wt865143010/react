import React, {Component} from 'react'
import './Addproductbaseinfo.css'

import { DatePicker ,Button} from 'antd';
import {inject,observer} from "mobx-react";
import { Checkbox } from 'antd';
@inject('product')

@observer
class Addproductbaseinfo extends Component {
        constructor(props) {
            super(props);
          this.state={
              productNumber:"",
              productClassification:"Pharchen",
              productName:"",
             /* productEnglishname:"",*/
              productCountUnit:'只',
              productPackageSizeLong:'',
              productPackageSizeWidth:"",
              productPackageSizeHigh:"",
              productPackageMaterial:"",
              productWeight:"",
              productDirectSales:true,
              directSalesTime:"",
              donate:true,
              taxRate:"",
              inventoryAlert:"",

              shipping:true,
              selfMention:"",
              preSale:true,
              categoryDisplay:true,
              allowOrder:true,
              isShipment:true,
              shipmentScanCode:true,
              returnScanCode:1,
          }
        }

    render() {



        return (
            <div>
                <table id={"table"}>
                    <tbody className="Addproductbaseinfo">
                    <tr>
                        <td>产品编号</td>
                        <td><input type="text"  onChange={val=>this.change_productnum('productNumber',val)}/></td>
                    </tr>
                    <tr>
                        <td >产品分类</td>
                        <td>
                            <select name="" id="productClassification" defaultValue={this.state.productclass} onChange={val=>this.chang_productclass('productClassification',val)}>
                                <option value="">Pharchen</option>
                                <option value="">Nuskin</option>
                                <option value="">hersherd</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>产品中文名称</td>
                        <td><input type="text"  onChange={val=>this.change_productnum('productName',val)}/>长度限定在75个字符以内</td>
                    </tr>
                    <tr>
                        <td>产品英文名称</td>
                        <td><input type="text" onChange={val=>this.change_productnum('productEnglishname',val)}/>长度限定在50个字符以内</td>
                    </tr><tr>
                        <td>计量单位</td>
                        <td>
                            <select name="" id="productCountUnit" defaultValue={this.state.unit_measurement} onChange={val=>this.chang_productclass('productCountUnit',val)}>
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
                        <td>长度：<input type="text"  onChange={val=>this.change_productnum('productPackageSizeLong',val)}/>宽度：<input type="text" onChange={val=>this.change_productnum('productPackageSizeWidth',val)}/>高度：<input type="text"onChange={val=>this.change_productnum('productPackageSizeHigh',val)}/></td>
                    </tr><tr>
                        <td>外包装材料</td>
                        <td><input type="text"  onChange={val=>this.change_productnum('productPackageMaterial',val)}/></td>
                    </tr><tr>
                        <td>产品重量</td>
                        <td><input type="text" onChange={val=>this.change_productnum('productWeight',val)}/></td>
                    </tr><tr>
                        <td>是否直销</td>
                        <td>
                            <Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'productDirectSales',val)}>是</Checkbox>
                        </td>
                    </tr><tr>
                        <td>直销核准日期</td>
                        <td><DatePicker id="directSalesTime" onChange={this.onChangedata} /></td>
                    </tr><tr>
                        <td>是否捐赠</td>
                        <td>
                            <Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'donate',val)}>是</Checkbox>
                          </td>
                    </tr><tr>
                        <td>税率(100%)</td>
                        <td><input type="text"  onChange={val=>this.change_productnum('taxRate',val)}/>%</td>
                    </tr>
                    <tr>
                        <td>警戒库存</td>
                        <td><input type="text"  onChange={val=>this.change_productnum('inventoryAlert',val)}/></td>
                    </tr>
                    <tr>
                        <td>是否需要运费</td>
                        <td><Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'shipping',val)}>是</Checkbox></td>
                    </tr><tr>
                        <td>是否自提</td>
                        <td><Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'selfMention',val)}>是</Checkbox></td>
                    </tr><tr>
                        <td>是否预售</td>
                        <td><Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'preSale',val)}>是</Checkbox></td>
                    </tr><tr>
                        <td>是否类目显示</td>
                        <td><Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'categoryDisplay',val)}>是</Checkbox></td>
                    </tr><tr>
                        <td>允许混单</td>
                        <td><Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'allowOrder',val)}>是</Checkbox></td>
                    </tr><tr>
                        <td>是否出货</td>
                        <td><Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'isShipment',val)}>是</Checkbox></td>
                    </tr><tr>
                        <td>出货扫码</td>
                        <td> <Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'shipmentScanCode',val)}>是</Checkbox></td>
                    </tr><tr>
                        <td>退货扫码</td>
                        <td> <Checkbox defaultChecked onChange={(e,val)=>this.onChange(e,'returnScanCode',val)} >是</Checkbox></td>
                    </tr>
                    </tbody>
                </table>
               <p>
                   <span>产品配置</span>
                   <span>对于可预览控制，不显示在类目中条件下才有效。对限购用户的控制</span>
               </p>

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
                [key]:true

            })
        }
       if(e.target.checked==false) {
            console.log(2222)
            this.setState({
                [key]:false
            })
        }

    }



    onChangedata=(date, dateString)=> {

         this.setState({
             directSalesTime:dateString
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
      /*  this.props.product.addproductbaseinfo()*/

    }
}

export default Addproductbaseinfo
