import React, {Component} from 'react'
import { Radio } from 'antd';

import { DatePicker ,Button} from 'antd';
import {inject,observer} from "mobx-react";

import { Checkbox } from 'antd';
import {toJS} from "mobx";

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}
const plainOptions = ['线上渠道', '形象店渠道'];



@inject('product')
@observer class UpperandLower extends Component {
constructor() {
    super();
    this.state={
        value: 1,
        up_time:"",
        down_time:"",
    }
}


    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    render() {


        return (
            <div>
             <table>
                 <tbody className="product_price">
                     <tr>
                         <td>上架类型</td>
                         <td>
                             <Radio.Group onChange={this.onChange} value={this.state.value}>
                             <Radio defaultChecked value={1}>上架</Radio>
                             <Radio value={2}>下架</Radio>
                            </Radio.Group>
                         </td>
                     </tr>
                     <tr>
                         <td>上架时间</td>
                         <td>
                             <DatePicker id="selling_data" onChange={this.onChange_uptime} disabled={this.state.value==2} />
                             <span>指定时间上架产品，需要审批通过后才会在指定时间上架</span>
                         </td>
                     </tr>
                     <tr>
                         <td>下架时间</td>
                         <td>
                             <DatePicker id="selling_data" onChange={this.onChange_downtime}disabled={this.state.value==1} />
                             <span>指定时间下架产品，需要审批通过后才会在指定时间下架</span>
                         </td>
                     </tr>
                     <tr>
                         <td>上架渠道</td>
                         <td>
                             <Checkbox.Group options={plainOptions} defaultValue={['线上渠道']} onChange={onChange} />
                         </td>
                     </tr>
                 </tbody>
             </table>
                <div style={{width:"50%",height:"150px",marginTop:"20px"}}>
                    <Button type="primary" block onClick={this.toProduct_description} style={{width:"20%"}}>
                        上一步
                    </Button>
                    <Button type="primary" block onClick={this.toProduct_list} style={{width:"20%",marginLeft:"50px"}}>
                        提交审批
                    </Button>
                </div>
            </div>
        )

    }

   onChange_uptime=(data,dateString)=> {

        this.setState({
            up_time:dateString
        })

    }
    onChange_downtime=(data,dateString)=> {

        this.setState({
            down_time:dateString
        })

    }
    toProduct_description=()=>{
        this.props.toProduct_description(3);
    }
     toProduct_list=()=>{

        this.props.product.addProduct_time.onShelfTime=this.state.up_time
        this.props.product.addProduct_time.offShelfTime=this.state.down_time
        this.props.product.addProduct_time.shelfType=this.state.value
        //this.props.push("/产品列表")



         console.log("===================================================")
         console.log(toJS(this.props.product.addProductbaseinfo))
         console.log(toJS(this.props.product.addProduct_price))
         console.log(toJS(this.props.product.addProduct_description))
         console.log(toJS(this.props.product.addProduct_time))


         this.props.product.addproductbaseinfo().then(()=>{
             this.props.toproduct()
         })/*.then(()=>{
             this.props.product.addproduct_price()
             this.props.product.addproduct_description()
             this.props.product.addproduct_time().then(()=>{
                 this.props.toproduct()
             })

         })*/


    }


}

export default UpperandLower
