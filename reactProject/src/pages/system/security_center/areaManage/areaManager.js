import React, {Component} from 'react';
import {Button, Table, Space, Popconfirm,message} from 'antd';
import {Link} from "react-router-dom";
import './areaManage.css';
import {inject,observer} from "mobx-react";

@inject('system')



@observer
class areaManager extends Component {

    constructor() {
        super();
        this.state={
            columns: [
                {
                    title: '序号',
                    dataIndex: 'id',
                    key:'id'
                    // render: text => <a>{text}</a>,
                },
                {
                    title: '大区中文名称',
                    dataIndex: 'nameChi',
                },
                {
                    title: '大区英文名称',
                    dataIndex: 'nameEng',
                    key:'id'
                },
                {
                    title: '备注说明',
                    dataIndex: 'note',
                    key:'id'
                },
                {
                    title: '创建时间',
                    dataIndex: 'createdDate',
                    key:'id'
                },
                {
                    title: '创建人',
                    dataIndex: 'creator',
                    key:'id'
                },
                {
                    title: '操作',
                    key:'action',
                    render: (item) => (
                        <Space>
                            <Link to={{pathname:'/home/addAreaManage',query:{item:item}}} style={{ marginRight: 16 }} >编辑</Link>
                            <Popconfirm
                                title="确认要删除数据吗?"
                                onConfirm={()=>this.deleteArea(item)}
                                onCancel={this.cancel}
                                okText="是"
                                cancelText="否"
                            >
                            <span>删除</span>
                            </Popconfirm>,
                        </Space>
                    )

                },
            ],
            areaData:[],
            chinese:'',
            English:''
        }
    };
    ////渲染大区数据
    componentWillMount(){
        let souSuoValue={
            nameChi:this.state.chinese,
            nameEng:this.state.English,
        };

        this.props.system.searchArea(souSuoValue)
            .then(data=>{
                this.setState({
                    areaData:this.props.system.areaList
                })
            })

    }
    ///////删除大区 -----测试成功
    cancel=()=>{
        message.error('取消删除');
    }
    deleteArea=(item)=>{
        let deleteV={id:item.id};
        this.props.system.deleteArea(deleteV)
            .then(data=>{
                message.success('删除成功');
                let souSuoValue={
                    nameChi:this.state.chinese,
                    nameEng:this.state.English,
                };

                this.props.system.searchArea(souSuoValue)
                    .then(data=>{
                        this.setState({
                            areaData:this.props.system.areaList
                        })
                    })
            })
    };
    ////重置按钮，搜索条件
    removeV=()=>{
        this.chineseN.value='';
        this.englishN.value='';
        let souSuoValue={
            nameChi:'',
            nameEng:'',
        };
        this.props.system.searchArea(souSuoValue)
            .then(data=>{
                this.setState({
                    areaData:this.props.system.areaList
                })
            })
        this.setState({
            chinese:'',
            English:'',
        })
    };
    ///条件搜索
    souSou=()=>{
        let souSuoValue={
            nameChi:this.chineseN.value,
            nameEng:this.englishN.value,
        };
        this.setState({
            chinese:this.chineseN.value,
            English:this.englishN.value,
        });
        this.props.system.searchArea(souSuoValue)
            .then(data=>{
                this.setState({
                    areaData:this.props.system.areaList
                })
            })
    };



    render() {
        return (
            <div>
                <div>
                    <div className='searchBox'>
                        <div className='twoLine'>
                            大区中文名称： <input type='text' ref={chineseN=>this.chineseN=chineseN}/>
                            <span className='w50'></span>
                            大区英文名称： <input type='text' ref={englishN=>this.englishN=englishN}/>
                        </div>
                    </div>
                    <div className='btnBox'>
                        <Button type="primary"  className='btn1' onClick={this.souSou}>搜索</Button>
                        <Button   className='btn1' onClick={this.removeV}>重置</Button>
                        <Link to='/home/addAreaManage'><Button type="primary"  className='btn1'>新增区域</Button></Link>
                    </div>

                </div>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.areaData}
                    bordered-
                    pagination={{defaultCurrent:1,defaultPageSize:5}}
                />
            </div>
        )
    }
}

export default areaManager