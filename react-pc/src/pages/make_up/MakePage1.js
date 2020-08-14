import React, {Component} from 'react';
import Face1 from "../../component/makeup/Face1";
class MakePage1 extends Component {
    constructor() {
        super();
        this.state={
            product:[
                {
                    id:1,
                    url:'1.png',
                    title:'粉底液',
                    content:'凝韵无痕粉底液-浅米色（暂为非直销品）',
                    price1:195,
                    price2:155,
                },
                {
                    id:2,
                    url:'2.png',
                    title:'粉底液',
                    content:'凝韵无痕粉底液-浅米色（暂为非直销品）',
                    price1:195,
                    price2:155,
                },
                {
                    id:3,
                    url:'3.png',
                    title:'粉底液',
                    content:'凝韵无痕粉底液-浅米色（暂为非直销品）',
                    price1:175,
                    price2:140,
                },
                {
                    id:4,
                    url:'4.png',
                    title:'粉底液',
                    content:'凝韵无痕粉底液-浅米色（暂为非直销品）',
                    price1:195,
                    price2:155,
                },
                {
                    id:5,
                    url:'5.png',
                    title:'粉底液',
                    content:'凝韵无痕粉底液-浅米色（暂为非直销品）',
                    price1:145,
                    price2:115,
                },
                {
                    id:6,
                    url:'6.jpg',
                    title:'粉底液',
                    content:'凝韵无痕粉底液-浅米色（暂为非直销品）',
                    price1:195,
                    price2:155,
                },
            ]
        }
    }
    render() {
        console.log(11111)
        return (
            <div>
                <Face1 mytitle={this.props.location.query.title} product={this.state.product}/>
            </div>
        )
    }
}

export default MakePage1
