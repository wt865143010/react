import React, {Component} from 'react';
import './producthead.css'

class productHead1 extends Component {
    render() {
        return (
            <div className='productNav'>
                <div className='productTitle'>{this.props.Title}</div>
                <div className='navPro'>
                    <div>
                        <label className='specialText'>功效</label>
                        <span>1000元以下</span>
                        <span>1000元-1999元</span>
                        <span>2000元-4999元</span>
                        <span>5000元-9999元</span>
                        <span>10000元以上</span>

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

export default productHead1