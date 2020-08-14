import React, { Component } from 'react';
import './choice.css'
import { Link } from 'react-router-dom'

class Choice extends Component {

    constructor(){
        super()
        this.state={
            isopen:true,
            
            
        }
    }

    isopen(){
        this.setState({
            isopen:!this.state.isopen
        })
    }

    render() {

        let choice = null
        if(this.state.isopen == true){
            choice = <span>
                <a onClick={this.isopen.bind(this)}>全部收起</a>
            </span>
        }else{
            choice = <span>
            <a onClick={this.isopen.bind(this)}>全部展开</a>
        </span>
        }

        console.log(this.props.aa)
        return (
            <div className='choicebox'>
                <div style={{width:'1200px',textAlign:'right'}}>
                    {choice}
                </div>
                <div style={{backgroundColor:'rgb(241,241,241)',width:'1200px',overflow:'hidden'}} className={'clearfix',this.state.isopen?'open':'hidden'}>
                    <div className='gongxiao' style={{width:'133px',float:'left'}}>
                        功效
                    </div>
                    <div style={{float:'left',height:'100px'}}>
                        <div style={{height:'50px',lineHeight:'50px'}}>
                            <ul className="clearfix">
                                <li className={this.props.aa == '1'?'beijing':''}>
                                    <Link style={{color:'#333'}} to='/home/Home/AgeLOCLumiSpa'>
                                        ageLOC LumiSpa
                                    </Link>
                                </li>
                                <li className={this.props.aa == '2'?'beijing':''}>
                                    <Link style={{color:'#333'}} to='/home/Home/AgeLOCSpa'>
                                        ageLOC Me
                                    </Link>
                                </li>
                                <li className={this.props.aa == '3'?'beijing':''}>
                                    <Link style={{color:'#333'}} to='/home/Home/AgeLOC3'>
                                    ageLOC Spa
                                    </Link>
                                </li>
                                <li className={this.props.aa == '4'?'beijing':''}>
                                    <Link style={{color:'#333'}} to='/home/Home/AgeLOC4'>
                                    ageLOC Nutriol
                                    </Link>
                        
                                </li>
                                <li className={this.props.aa == '5'?'beijing':''}>
                                    <Link style={{color:'#333'}} to='/home/Home/AgeLOC5'>
                                    ageLOC活颜抗老系列
                                    </Link>
                                    </li>
                                <li className={this.props.aa == '6'?'beijing':''}>
                                    <Link style={{color:'#333'}} to='/home/Home/AgeLOC6'>
                                    ageLOC睛致按摩眼霜
                                    </Link>
                                    </li>
                            </ul>
                        </div>
                        <div style={{height:'50px',lineHeight:'50px'}}>
                            <ul className="clearfix">
                                <li className={this.props.aa == '7'?'beijing':''}>
                                    <Link style={{color:'#333'}} to='/home/Home/AgeLOC7'>
                                    ageLOC焕新系列
                                    </Link>
                                
                                    </li>
                                <li className={this.props.aa == '8'?'beijing':''}>
                                        <Link style={{color:'#333'}} to='/home/Home/AgeLOC8'>
                                        ageLOC精油系列
                                        </Link>
                                    </li>
                                <li className={this.props.aa == '9'?'beijing':''}>
                                    <Link style={{color:'#333'}} to='/home/Home/AgeLOC9'>
                                    ageLOC R²
                                    </Link>
                                    
                                    </li>
                                <li className={this.props.aa == '10'?'beijing':''}>
                                    <Link style={{color:'#333'}} to='/home/Home/AgeLOC10'>
                                    ageLOC TR90(保健食品)
                                    </Link>
                                    
                                    </li>
                                <li className={this.props.aa == '11'?'beijing':''}>
                                    <Link style={{color:'#333'}} to='/home/Home/AgeLOC11'>
                                    geLOC TR90(普通食品)
                                    </Link>
                                    

                                    </li>
                                <li className={this.props.aa == '12'?'beijing':''}>
                                    <Link style={{color:'#333'}} to='/home/Home/AgeLOC12'>
                                    ageLOC Boost
                                    </Link>
                                   
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
           
                <div style={{backgroundColor:'rgb(241,241,241)',width:'1200px',overflow:'hidden',marginTop:'10px'}} className='clearfix'>
                    <div className='gongxiao' style={{width:'133px',float:'left'}}>
                        排序
                    </div>
                    <div>
                        <ul className='clearfix' style={{lineHeight:'50px'}}>
                            <li style={{color:'#72C4D5'}}>综合排序</li>
                            <li>销量排序</li>
                            <li>人气排序</li>
                            <li>价格正序</li>
                            <li>价格倒序</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Choice;