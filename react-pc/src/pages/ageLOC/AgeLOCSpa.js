import React, { Component } from 'react';
import Choice from '../../component/condition/Choice'
import './ageloclumispa.css'
import Productbox from '../../component/product/productBox'

class AgeLOCSpa extends Component {
    constructor(props){
        super(props)
        this.state={
            productdata:[
                {
                    myurl:'4.png',
                    title:'ageLOC LumiSpa',
                    content:'新动控油净肤露限定套装（适用油性肌肤）',
                    price1:'885.00',
                    price2:'705.00',
                },
                {
                    myurl:'5.png',
                    title:'ageLOC LumiSpa',
                    content:'新动90天套装（适用油性肌肤）',
                    price1:'1000.00',
                    price2:'800.00',
                },
                {
                    myurl:'6.jpg',
                    title:'ageLOC LumiSpa',
                    content:'新动控油净肤露限定套装（适用油性肌肤）',
                    price1:'2000.00',
                    price2:'1800.00',
                },
     
       
            ],
        }
    }
    render() {
        let arr = this.state.productdata.map((item,i)=>{
            return <div style={{float:'left',marginTop:'30px'}} key={i}>
                    <Productbox myurl={item.myurl}
                                title={item.title}
                                content={item.content}
                                price1={item.price1}
                                price2={item.price2}></Productbox>
            </div>
            
        })


        return (
            <div className='lumispabox'>
                <div>
                    <h1 className='titleh1'>ageLOC Spa</h1>
                </div>
                <div>
                    <Choice aa='2'></Choice>
                </div>
                <div className='content clearfix'>
                    {arr}
                </div>
            </div>
        );
    }
}

export default AgeLOCSpa;