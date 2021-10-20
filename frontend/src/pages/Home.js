import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { SubMenu } from 'rc-menu';

const { Header, Content, Footer } = Layout;

const Home = () => {
    const items=['Dashboard', 'Wallet','Store', 'Cuenta', 'Perfil']
    //console.log(items);
    return (
<>
<Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
       <Menu.Item key="1">Dashboard</Menu.Item>  
       <Menu.Item key="2">Wallet</Menu.Item>
       <Menu.Item key="3">Store</Menu.Item>
       <Menu.Item key="4">Cuenta</Menu.Item>
        <SubMenu key="SubMenu"  title="Perfil">
            <Menu.Item key="setting:1">Configuration</Menu.Item>
            <Menu.Item key="setting:2">Cerrar Session</Menu.Item>
        </SubMenu>   
      </Menu>
    </Header>
    
    <Content style={{ padding: '0 50px' }}>
      
    </Content>
    <Footer style={{ textAlign: 'center' }}>
        ITSYSTEMS ©2021 Todos Los Derechos Reservados.
    </Footer>
  </Layout>
</>
    )
}

export default Home
