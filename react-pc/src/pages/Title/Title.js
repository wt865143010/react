import React, {Component} from 'react'
import { Menu } from 'antd';
import './Title.css'
import {Link} from 'react-router-dom'

class Title extends Component {
    state = {
        current: 'mail',
    };
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };
    render() {
        const { current } = this.state;
        // const { SubMenu } = Menu;
        return (
            <div className='box'>
                <div className='navBox'>
                <div className='use'>功效</div>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className='nav'>
                        <Menu.Item className='navChange'>
                            <Link to='/BodyCare'>身体洗护</Link>
                        </Menu.Item>
                    <Menu.Item className='navChange'>
                        <Link to='/Hair'>头发洗护</Link>
                    </Menu.Item>
                    <Menu.Item className='navChange'>
                        <Link to='/Other'>其他</Link>
                    </Menu.Item>
                    <Menu.Item className='navChange'>
                        <Link to='/Body'>身体防晒</Link>
                    </Menu.Item>
                </Menu>
                </div>
                <div className='navBox'>
                    <div className='use'>系列</div>
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className='nav'>
                        <Menu.Item className='navChange'>
                            <Link to='/oil'>ageLOC精油系列</Link>
                        </Menu.Item>
                        <Menu.Item className='navChange'>
                            <Link to='/Epoch'>Epoch系列</Link>
                        </Menu.Item>
                        <Menu.Item className='navChange'>
                            <Link to='/Siang'>丝昂系列</Link>
                        </Menu.Item>
                        <Menu.Item className='navChange'>
                            <Link to='/BodyCareLis'>身体护理系列</Link>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className='navBox'>
                    <div className='use'>排序</div>
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className='nav'>
                        <Menu.Item className='navChange'>
                            综合排序
                        </Menu.Item>
                        <Menu.Item className='navChange'>
                            销量排序
                        </Menu.Item>
                        <Menu.Item className='navChange'>
                            人气排序
                        </Menu.Item>
                        <Menu.Item className='navChange'>
                            价格正序
                        </Menu.Item>
                        <Menu.Item className='navChange'>
                            价格倒序
                        </Menu.Item>
                    </Menu>
                </div>
            </div>

        )
    }
}

export default Title