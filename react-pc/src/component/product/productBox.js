import React, {Component} from 'react';
import './probox.css'
import {Link} from "react-router-dom";

class productBox extends Component {
    constructor() {
        super();
        this.state={
            number:1
        }
    }


    reduce=()=>{
        let num=this.state.number;
        console.log(num)
        if (num>1){
            num--;
            this.setState({
                number:num
            })
        }else {
            num=1
            this.setState({
                number:num
            })
        }

    }
    puls=()=>{
        let num=this.state.number;
        console.log(num)
        num++;
        this.setState({
            number:num
        })
    }
    onChange=()=>{
    }

    render() {
        return (
            < div >
                <div className='proBox'>
                    <div className='proBoxTop'>
                        <Link to='/home/Home/productDetail'> <img src={require(`../../assets/images/${this.props.myurl}`)} alt=""/></Link>

                        <img src={require('../../assets/images/collect.png')} alt=""/>
                    </div>
                    <div className='proBoxMid'>
                        <p>{this.props.title}</p>
                        <p>{this.props.content}</p>
                        <p>零售顾客价￥{this.props.price1}</p>
                        <p>星级顾客价￥{this.props.price2}</p>
                    </div>
                    <div className='proBoxBot'>
                        <div>
                            <button onClick={this.reduce}>-</button>
                            <input type="text" value={this.state.number} onChange={this.onChange}/>
                            <button onClick={this.puls}>+</button>
                        </div>
                        <img src={require('../../assets/images/add_cart.png')} alt=""/>
                    </div>
                </div>
            < /div>
    )
    }
}

export default productBox
            
