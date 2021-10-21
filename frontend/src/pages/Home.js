import React from 'react'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { SubMenu } from 'rc-menu';
import itsc from '../assets/img/itscx400.svg'

const { Header, Content, Footer } = Layout;

const Home = () => {
    const items=['Dashboard', 'Wallet','Store', 'Cuenta', 'Perfil']
    //console.log(items);
    return (
<>
<Layout className="layout">
    <Header>
    <div className="nav0">
      <div className="logo">
      <img className="logoimg" src={itsc} alt="img" width={50} height="auto" />
      <pre className="tituitsc"> ITSYSTEMS PROJECT</pre>
      </div>
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
    </div>
    </Header>
        
    <Content className="banner0">
      <div className="logobanner">
        <div className="imglogo">
          <img src={itsc}/>
        </div>
        <a className="tituloits"> PROYECTO DE RECOMPENSAS ITSYSTEMS</a>
        <div className="botones">
        <Button className="btn1" ghost key="boton1">
          Login
        </Button>
        <Button className="btn1" ghost key="boton1">
          Recompensas
        </Button>
      </div>
      </div> 
        
    </Content>

    <Footer style={{ textAlign: 'center' }}>
        ITSYSTEMS ©2021 Todos Los Derechos Reservados.
    </Footer>
  </Layout>
</>
    )
}

export default Home
