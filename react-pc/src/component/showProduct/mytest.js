import React, {Component} from 'react'
import ShowP from './ShowProduct'

class mytest extends Component {
    render() {
        return (
            <div>
                {/*<h2>组件测试</h2>*/}
                <ShowP PicPath="ia_100000058.png"
                       productName="如新活水深层润泽面膜"
                       productPrice="￥240.00"
                />

                {/*<ShowP PicPath="ia_100000069.png"
                       productName="如新华茂牌妍控秘饮固体饮料(双盒装)(暂为非直销品)"
                       productPrice="￥725.00"
                />

                <ShowP PicPath="ia_100000065.jpg"
                       productName="如新华茂牌维生素E鱼油软胶囊(暂为非直销品)"
                       productPrice="￥725.00"
                />*/}
            </div>
        )
    }
}

export default mytest