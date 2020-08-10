import React, {Component} from 'react'
import './lotteryDetail.css'
import {Input, DatePicker, Button} from "antd";
const { TextArea } = Input;
class CreateRaffle extends Component {
    render() {
        return (
            <div style={{textAlign:"left",padding: "30px 0 0 50px"}}>
                <h2 style={{fontWeight:"bolder",borderBottom:"1px solid",paddingBottom:"20px"}}>新增抽奖活动</h2>
                <div style={{margin:"40px 0 30px 0"}}>
                    <table className="mytable" style={{height:'200px'}}>
                        <tr>
                            <td className="tableHead" style={{width:"200px"}}>* 抽奖活动名称：</td>
                            <td className="right">
                                <Input placeholder="" style={{width:"250px"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="tableHead">抽奖活动内容：
                            </td>
                            <td className="right">
                                <TextArea rows={4}  style={{width:"450px"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="tableHead">活动时间：</td>
                            <td className="right">
                                <DatePicker />
                                <span>至</span>
                                <DatePicker />
                            </td>
                        </tr>
                    </table>
                </div>
                <div style={{margin:"70px 0 50px 200px",textAlign:"left"}}>
                    <Button type="primary" style={{width:"120px"}}>确认</Button>
                    <Button type="primary" style={{margin:"0 0 0 30px",backgroundColor:"darkgrey",border:"none",width:"120px"}}>取消</Button>
                </div>
            </div>
        )
    }
}

export default CreateRaffle