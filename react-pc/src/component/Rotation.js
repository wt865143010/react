import React, {Component} from 'react'
import { Carousel } from 'antd';

class Rotation extends Component {
    render() {
        const contentStyle = {
            height: '70%',
            width:"100%",
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };
        return (
            <div>
                <Carousel autoplay>
                    <div>
                        <div>
                            <img src={require('../assets/images/banner1.png')} style={contentStyle} alt=""/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={require('../assets/images/Banner2.jpg')} style={contentStyle} alt=""/>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Rotation