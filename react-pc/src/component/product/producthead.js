import React, {Component} from 'react';
import './producthead.css'

class productHead extends Component {
    render() {
        return (
            <div className='productNav'>
                <div className='productTitle'>{this.props.Title}</div>
                <div className='navPro'>
                <div>
                     <label className='specialText'>功效</label>
                    <span>基础营养</span>
                     <span>自我保健</span>
                       <span>健康生活系列</span>
                 </div>
                  <div>
                      <span></span>
                      <span>保健食品</span>
                      <span>普通食品</span>
                      <span></span>
                   </div>
                 <div style={{"height":'50px'}}>
                 </div>

                <div>
                    <label className='specialText'>系列</label>
                    <span>基础营养系列</span>
                    <span>自我保健系列</span>
                </div>
                <div>
                    <label className='specialText'>排序</label>
                    <span>综合排序</span>
                    <span>销量排序</span>
                    <span>人气排序</span>
                    <span>价格正序</span>
                    <span>价格倒序</span>

                </div>
                </div>
            </div>
        )
    }
}

export default productHead