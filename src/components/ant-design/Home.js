import React, { Component } from 'react'

import { Button, Icon } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import '../../css/ant-design.css';

const { Header, Sider, Content } = Layout;


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是 一个home组件',
            collapsed: false
        };
    }

    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        return (
            <div className="app">
                ant-design首页组件
                <br />
                <hr />
                <br />
                <Button type="primary" >按钮</Button>
                <br /><br />
                <Icon type="pic-right" theme="outlined" />
                <br /><br />
                <Icon type="forward" theme="outlined" className="red" />
                <br /><br /><br />


                <Layout className="a">
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                background: '#fff',
                                minHeight: 280,
                            }}
                        >
                            Content
          </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Home;