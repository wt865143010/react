import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './addNewTem.css'

class addNewsTem extends Component {
    constructor() {
        super();
        this.state={
            visible1: false,
            visible2: false,
            item:[],
            NewsMod:[],
            NewsWay:[],
        }
    }
    sava=()=>{
        let news_type=this.news_type.value;
        let news_name=this.news_name.value;
        let news_no=this.news_no.value;
        let news_way=this.news_way.value;
        let news_title=this.news_title.value;
        let news_content=this.news_content.value;
        let obj={
            news_type:news_type,
            news_name:news_name,
            news_no:news_no,
            news_way:news_way,
            news_title:news_title,
            news_content:news_content
        }
        console.log(obj)
        let query=this.props.location.query
        if (query!==undefined&&query.item!==''){
            let newobj={
                news_type:news_type,
                news_name:news_name,
                news_no:news_no,
                news_way:news_way,
                news_title:news_title,
                news_content:news_content,
                id:query.item.id
            }
            this.props.system.eidtNews(newobj)
                .then(data=>{
                    this.props.history.push("/home/system/information/NewsTemplateList")
                })
        }else {
            this.props.system.addNews(obj)
                .then(data=>{
                    this.props.history.push("/home/system/information/NewsTemplateList")
                })

        }
    }
    back=()=>{
        this.props.history.push("/home/system/information/NewsTemplateList")
    }

    // addnewMod = () => {
    //     this.setState(
    //     { visible1: true, }
    //     );
    // };
    // saveNewsMod = e => {
    //     console.log(e);
    //     this.setState({
    //         visible1: false,
    //     });
    //     let newMod=this.newMod.value;
    //     let obj={
    //         newMod:newMod
    //     }
    //     this.props.system.saveNewsMod(obj)
    //         .then(data=>{
    //             this.props.system.getNewsMod()
    //                 .then(data=>{
    //                     this.setState({
    //                         NewsMod:this.props.system.NewsMod
    //                     })
    //                 })
    //         })
    // };
    //
    // addNewWay = () => {
    //     this.setState(
    //         { visible2: true, }
    //     );
    // };
    // saveNewsWay = e => {
    //     console.log(e);
    //     this.setState({
    //         visible2: false,
    //     });
    //     let newWay=this.newWay.value;
    //     let obj={
    //         newWay:newWay
    //     }
    //     this.props.system.saveNewsWay(obj)
    //         .then(data=>{
    //             this.props.system.getNewsWay()
    //                 .then(data=>{
    //                     this.setState({
    //                         NewsWay:this.props.system.NewsWay
    //                     })
    //                 })
    //         })
    // };
    // handleCancel = e => {
    //     console.log(e);
    //     this.setState({
    //         visible1: false,
    //         visible2: false,
    //     });
    // };
    componentWillMount() {
        let query=this.props.location.query
        if (query!==undefined&&query.item!==''){
            this.setState({
                item:query.item
            })
        }

    }

    render() {
        return (
            <div>
                <div className='nav'>
                    <span>商城管理系统</span><span>></span>
                    <span>系统管理</span><span>></span>
                    <span>消息管理</span><span>></span>
                    <Link to='system/information/NewsTemplateList'>消息模板列表</Link><span>></span>
                    <span>新增消息模板</span>
                </div>
                <div className='Box'>
                    <div>
                        消息类型：
                        <select name="" id="" defaultValue={this.state.item.tem_type} ref={news_type=>this.news_type=news_type}>
                            <option value="请选择">请选择</option>
                            <option value="系统通知">系统通知</option>
                            <option value="订单消息">订单消息</option>
                            <option value="活动消息">活动消息</option>
                        </select>
                        {/*<div>没有你想要的消息类型？<strong type="primary" onClick={this.addnewMod}>点击添加</strong></div>*/}
                    </div>
                    <div>
                        模板名称：
                        <input type="text" defaultValue={this.state.item.tem_name} ref={news_name=>this.news_name=news_name}/>
                    </div>
                    <div>
                        模板编码：
                        <input type="text" defaultValue={this.state.item.tem_no} ref={news_no=>this.news_no=news_no}/>
                    </div>
                    <div>
                        消息渠道：
                        <select name="" id="" defaultValue={this.state.item.tem_way} ref={news_way=>this.news_way=news_way}>
                            <option value="请选择">请选择</option>
                            <option value="官方商城消息">官方商城消息</option>
                            <option value="商户后台消息">商户后台消息</option>
                            <option value="平台后台消息">平台后台消息</option>
                            <option value="app消息">app消息</option>
                            <option value="短信消息">短信消息</option>
                            <option value="邮件消息">邮件消息</option>
                        </select>
                        {/*<span>没有你想要的消息渠道？<strong type="primary" onClick={this.addNewWay}>点击添加</strong></span>*/}
                    </div>
                    <div>
                        模板内容：
                        <div>
                            <table cellPadding='0' cellSpacing='0' border='1'>
                                <tbody>
                                <tr>
                                    <td>消息标题</td>
                                    <td><input type="text" ref={news_title=>this.news_title=news_title}/></td>
                                </tr>
                                <tr>
                                    <td>消息内容</td>
                                    <td>
                                        <textarea name="" id="" cols="80" rows="10" ref={news_content=>this.news_content=news_content}></textarea>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='btnBox'>
                    <input type="button" value='确认' onClick={this.sava}/>
                    <input type="button" value='取消' onClick={this.back}/>
                </div>



            </div>
        )
    }
}

export default addNewsTem
