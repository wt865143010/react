import React, {Component} from 'react';
import {Button, Table, Space, Pagination} from 'antd';
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
                    dataIndex: 'chineseName',
                    key:'id'
                },
                {
                    title: '大区英文名称',
                    dataIndex: 'englishName',
                    key:'id'
                },
                {
                    title: '备注说明',
                    dataIndex: 'tips',
                    key:'id'
                },
                {
                    title: '创建时间',
                    dataIndex: 'time',
                    key:'id'
                },
                {
                    title: '创建人',
                    dataIndex: 'actor',
                    key:'id'
                },
                {
                    title: '操作',
                    key:'action',
                    render: (item) => (
                        <Space>
                            <Link to={{pathname:'/home/addAreaManage',query:{item:item}}} style={{ marginRight: 16 }} >编辑</Link>
                            <a onClick={()=>this.deleteArea(item)}>删除</a>
                        </Space>
                    )

                },
            ],
            areaData:[],
            chinese:'',
            English:'',
            pageNum:''


        }
    };
    ////渲染大区数据
    componentWillMount(){
        let souSuoValue={
            chinese:this.state.chinese,
            English:this.state.English,
            pageNum:1,
            pageSize:10,
        };

        this.props.system.searchArea(souSuoValue)
            .then(data=>{
                this.setState({
                    areaData:this.props.system.areaList
                })
            })

    }
    /////删除大区
    deleteArea=(item)=>{
        let deleteV={id:item.id};
        this.props.system.deleteArea(deleteV)
            .then(data=>{
                let souSuoValue={
                    chinese:this.state.chinese,
                    English:this.state.English,
                    pageNum:1,
                    pageSize:10,
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
            chinese:'',
            English:'',
            pageNum:1,
            pageSize:10,
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
            chinese:this.chineseN.value,
            English:this.englishN.value,
            pageNum:this.state.pageNum,
            pageSize:10,
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
    ///分页功能
    onChange=(pageNumber,pageSize) =>{
        console.log('Page: ', pageNumber);
        console.log('pageSize: ', pageSize);
        this.setState({
            pageNum:pageNumber
        })
        let obj={
            chinese:this.state.chinese,
            English:this.state.English,
            pageNum:pageNumber,
            pageSize:10
        }
        this.props.system.searchArea(obj)
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
                    pagination={false}
                />
                <Pagination showQuickJumper
                            defaultCurrent={2}
                            total={this.state.areaData.length}
                            onChange={this.onChange} />
            </div>
        )
    }
}

export default areaManager