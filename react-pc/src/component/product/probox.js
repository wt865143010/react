import React, {Component} from 'react';
import './probox.css'

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


    render() {
        return (
            < div >
                <div className='proBox'>
                    <div className='proBoxTop'>
                        <img src={require(`../../assets/images/${this.props.myurl}`)} alt=""/>
                        <img src={require('../../assets/images/productNoLove1.png')} alt=""/>
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
                            <input type="text" value={this.state.number}/>
                            <button onClick={this.puls}>+</button>
                        </div>
                        <img src={require('../../assets/images/productAddCart.png')} alt=""/>
                    </div>
                </div>
            </div>
    )
    }
}

export default productBox
            
