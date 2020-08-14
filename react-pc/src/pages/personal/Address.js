import React, {Component} from 'react'
import { Modal, Button } from 'antd';
import City from './City'

class Address extends Component {
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
                    <h1 style={{fontWeight:"bold"}}>收货地址</h1>
                </div>
                <div style={{marginTop:"30px"}}>
                    <Button type="primary" onClick={this.showModal} style={{backgroundColor:"#0089AF"}}>
                        ＋新增收货地址
                    </Button>
                    <Modal
                        title="新增收货地址"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                       <div>
                           <div style={{display:"flex",justifyContent:"space-around"}}>
                               <span style={{fontWeight:"bold",display:"inlineBlock",width:"20%"}}>收货人:</span>
                               <input type="text" placeholder={"请输入收货人姓名"} style={{marginLeft:"50px",outline:"0",fontSize:"1.2em",
                                   height:"2em",

                                   borderRadius:"4px",
                                   border:"1px solid #c8cccf",
                                   color:"#6a6f77"}}/>
                           </div>
                           <div style={{marginTop:"20px",display:"flex",justifyContent:"space-around"}}>
                               <span style={{fontWeight:"bold",display:"inlineBlock",width:"20%"}}>电话号码:</span>
                               <input type="text" placeholder={"请输入手机号"} style={{marginLeft:"50px",outline:"0",fontSize:"1.2em",
                                   height:"2em",

                                   borderRadius:"4px",
                                   border:"1px solid #c8cccf",
                                   color:"#6a6f77"}}/>
                           </div>
                           <div style={{marginTop:"20px",display:"flex",justifyContent:"space-around"}}>
                               <span style={{fontWeight:"bold",display:"inlineBlock",width:"20%"}}>所在地:</span>
                               <City></City>
                           </div>
                           <div style={{marginTop:"20px",display:"flex",justifyContent:"space-around"}}>
                               <span style={{fontWeight:"bold",display:"inlineBlock",width:"20%"}}>详细地址：</span>
                               <textarea name="" id="" cols="80" rows="3"></textarea>
                           </div>
                       </div>
                    </Modal>
                    <span style={{marginLeft:"20px"}}>您已创建0个收货地址，最多可创建50个</span>
                </div>
         </div>

        )
    }
}

export default Address
