import React from 'react';
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './App.css';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

function App() {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider width={200} style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined/>}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined/>}>
                        Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined/>}/>
                </Menu>
            </Sider>
            <Layout style={{marginLeft: 200}}>
                <Header style={{background: '#fff', padding: 0, top: 0, position: 'fixed', width: '100%'}}>
                    Header
                </Header>
                <Content style={{overflow: 'auto', height: '2000px', marginTop: '64px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{padding: 24, background: '#fff', minHeight: 360}}>Content</div>
                </Content>
                <Footer style={{textAlign: 'center', position: 'fixed', width: '100%', bottom: 0}}>
                    Ant Design ©2021 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

export default App;
