import React, {Component} from 'react'
import { Modal, Button } from 'antd';

import { Checkbox } from 'antd';
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

class Invoice extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h1 style={{fontWeight:"bold"}}>我的发票</h1>
                </div>
                <div style={{marginTop:"30px"}}>
                    <Button type="primary" onClick={this.showModal}>
                       新增发票信息
                    </Button>
                    <Modal
                        title="新增发票信息"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}

                    >

                        <div style={{textAlign:"right"}}>


                            <div>
                                <span>发票抬头：</span>
                                <input type="text"style={{marginLeft:"50px",outline:"0",fontSize:"1.2em",
                                    height:"2em",

                                    borderRadius:"4px",
                                    border:"1px solid #c8cccf",
                                    color:"#6a6f77"}}/>
                            </div>
                            <div style={{marginTop:"20px"}}>
                                <span>纳税人识别号/统一社会信用代码：</span>
                                <input type="text"style={{marginLeft:"50px",outline:"0",fontSize:"1.2em",
                                    height:"2em",

                                    borderRadius:"4px",
                                    border:"1px solid #c8cccf",
                                    color:"#6a6f77"}}/>
                            </div>

                        </div>
                        <Checkbox onChange={onChange} style={{marginLeft:"30%",marginTop:"20px"}}>设置为默认发票</Checkbox>
                    </Modal>
                    <span style={{marginLeft:"20px"}}>您已创建0个发票管理，最多可创建10个</span>
                </div>
            </div>
        )
    }
}

export default Invoice
