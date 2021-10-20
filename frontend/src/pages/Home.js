import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

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
       <Menu.Item key="5">Perfil</Menu.Item>    
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
