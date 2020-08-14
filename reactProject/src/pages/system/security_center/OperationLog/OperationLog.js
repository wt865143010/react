import React, {Component} from 'react';
import {Button, Table, Space, DatePicker, Pagination} from 'antd';
import {Link} from "react-router-dom";
import './OperationLog.css';
import {inject,observer} from "mobx-react";

const { RangePicker } = DatePicker;



@inject('system')

@observer
class OperationLog extends Component {
    constructor() {
        super();
        this.state={
            columns: [
                {
                    title: '序号',
                    dataIndex: 'id',
                    align:'center',
                    key:'id'
                },
                {
                    title: 'IP地址',
                    dataIndex: 'ipAddress',
                    key:'id'
                },
                {
                    title: '操作人',
                    dataIndex: 'username',
                    key:'id'
                },
                {
                    title: '操作时间',
                    dataIndex: 'operatingTime',
                    key:'id'
                },
                {
                    title: '页面地址',
                    dataIndex: 'pageAddress',
                    key:'id'
                },
                {
                    title: '操作模块',
                    dataIndex: 'operatingModule',
                    key:'id'
                },
                {
                    title: '操作内容',
                    dataIndex:'content',
                    key:'id'

                },
            ],
            OperaData:[],
            userName:'',
            startTime:'',
            endTime:'',
            pageNum:1,
            keyValue:'',
        }
    }
    componentWillMount() {
        let obj= {
            username:'',
            startTime:'',
            endTime:'',
            pageSize:10,
            pageNum:1
        };
        this.props.system.getOpera(obj)
            .then(data=>{
                this.setState({
                    OperaData:this.props.system.OperaData
                })
            })
    }
    ///搜索功能
    OperaSearch=()=>{
        let obj= {
            username:this.userName.value,
            startTime:this.state.startTime,
            endTime:this.state.endTime,
            pageSize:10,
            pageNum:1
        };
        this.setState({
            userName:this.userName.value,
        });
        this.props.system.getOpera(obj)
            .then(data=>{
                this.setState({
                    OperaData:this.props.system.OperaData
                })
            })
    };
    ///重置功能
    OperaMove=()=>{
        this.userName.value='';
        let obj= {
            username:'',
            startTime:'',
            endTime:'',
            pageSize:10,
            pageNum:1
        };

        this.props.system.getOpera(obj)
            .then(data=>{
                this.setState({
                    OperaData:this.props.system.OperaData
                })
            })
        this.setState({
            userName:'',
            startTime:'',
            endTime:'',
            pageNum:2,
            keyValue:new Date()
        })


    };
    timeSelect=(data)=>{
        // console.log(data)
        this.setState({
            startTime :data[0]._d.toLocaleString(),
            endTime:data[1]._d.toLocaleString()
        })

    };
    ///分页


    render() {

        return (
            <div>
                <div>
                    <div className='searchBox'>
                        <div className='twoLine'>
                            用户名： <input type='text' ref={userName=>this.userName=userName}/>
                            <span className='w50'></span>
                            操作时间 <RangePicker bordered={false} onChange={this.timeSelect} key={this.state.keyValue} allowClear={false}/>

                        </div>
                    </div>
                    <div className='btnBox'>
                        <Button type="primary"  className='btn1' onClick={this.OperaSearch}>搜索</Button>
                        <Button type="primary"  className='btn1' onClick={this.OperaMove}>重置</Button>
                    </div>

                </div>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.OperaData}
                    bordered-
                    pagination={{defaultCurrent:this.state.pageNum,defaultPageSize:20}}
                />

            </div>
        )
    }
}

export default OperationLog;