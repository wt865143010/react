import React, {Component} from 'react'
import  "./ShowProduct.css"

class ShowProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            thecolor:1,
            theStoreColor:"favicon.png"
        }
    }

    theColor=()=>{
        console.log(this.state.thecolor);
        let temp=this.state.thecolor;
        if(temp){
            console.log("进来")
            // document.getElementsByClassName("theStore")[0].src="../../assets/images/homeProduct/favicon_active.png"
            this.setState({
                theStoreColor:"favicon_active.png",
                thecolor:0
            })
        }else {
            console.log("返回")
            this.setState({
                theStoreColor:"favicon.png",
                thecolor:1
            })
            // document.getElementsByClassName("theStore")[0].src="../../assets/images/homeProduct/favicon.png"
        }

    }
    render() {
        return (
            <div className="myshowProduct">
                <div className="thePic">
                    {/*<img src={require(`../../assets/images/homeProduct/ia_100000058.png`)} className="thePro" alt=""/>*/}
                    <img src={require(`../../assets/images/${this.props.PicPath}`)} className="thePro" alt=""/>
                    {/*<a href="#">*/}
                        {/*<i className="theStore" onClick={this.theColor.bind(this)}/>*/}
                        {/*<img src={require(`../../assets/images/homeProduct/ia_100000164.png`)} className="theStore" alt="" onClick={this.theColor.bind(this)}/>*/}
                        <img src={require(`../../assets/images/homeProduct/${this.state.theStoreColor}`)} className="theStore" alt="" onClick={this.theColor.bind(this)}/>
                    {/*</a>*/}
                </div>

                <div className="theTitle">
                    <span>
                        {/*如新活水深层润泽面膜*/}
                        {this.props.productName}
                    </span>
                </div>

                <div className="thePrice">
                    <span>
                        {/*￥240.00*/}
                        {this.props.productPrice}
                    </span>
                </div>

                <div className="theHover">
                    <img src={require(`../../assets/images/homeProduct/ia_100000072.png`)} alt=""/>
                </div>

            </div>
        )
    }
}

export default ShowProduct