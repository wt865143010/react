import React, {Component} from 'react'
import './StyleShow.css'

class StyleShow extends Component {
    render() {
        return (
            <div className="theStyleShow">

                {/*<h1>日夜乳霜</h1>*/}
                <h1>{this.props.mytitle}</h1>
                {/*第一行*/}
               <div>
                   <span>首页 ></span>
                   <span>护肤</span>
               </div>

                {/*列表展示*/}
                <div className="theliebiao">
                    {/*第一行*/}
                    <div className="lie1">
                        <div>
                            <span>功效</span>
                        </div>
                        <div>
                            <ul>
                                <li>清洁爽肤</li>
                                <li>面部精华</li>
                                <li>日夜乳霜</li>
                                <li>眼周呵护</li>
                                <li>面膜</li>
                                <li>防晒</li>
                                <li>修护精华</li>
                                <li>套装</li>
                            </ul>
                        </div>
                    </div>
                    {/*第二行*/}
                    <div className="lie1 lie2">
                        <div>
                            <span>系列</span>
                        </div>
                        <div>
                            <ul>
                                <li>ageLOC LumiSpa</li>
                                <li>ageLOC焕新系列</li>
                                <li>ageLOC睛致按摩眼霜</li>
                                <li>ageLOC精油系列</li>
                                <li>Epoch系列</li>
                                <li>净肤系列</li>
                                <li>周期保养系列</li>
                                <br/>
                                <li className="moreStyle">活颜抗老系列</li>
                                <li className="moreStyle">滢透三效系列</li>
                                <li className="moreStyle">荟萃善秀系列</li>
                                <li className="moreStyle">晒特丽防晒系列</li>
                            </ul>
                        </div>
                    </div>
                    {/*第三行*/}
                    <div className="lie1">
                        <div>
                            <span>排序</span>
                        </div>
                        <div>
                            <ul>
                                <li>综合排序</li>
                                <li>销量排序</li>
                                <li>人气排序</li>
                                <li>价格正序</li>
                                <li>价格倒序</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StyleShow