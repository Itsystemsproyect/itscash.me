import React from "react";
import { Layout, Menu } from "antd";
import { SubMenu } from "rc-menu";
import { Link } from "react-router-dom";
import itsc from "../assets/img/itscx400.svg";

const { Header } = Layout;

const Navbar = () => {
  return (
    <>
      <Header>
        <div className="nav0">
          <div className="logo">
            <img
              className="logoimg"
              src={itsc}
              alt="img"
              width={50}
              height="auto"
            />
            <pre className="tituitsc"> ITSYSTEMS PROJECT</pre>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
            Home
            </Menu.Item>
            <Menu.Item key="2"><Link to='/wallet'>Wallet</Link></Menu.Item>
            <Menu.Item key="3">Store</Menu.Item>
            <Menu.Item key="4">
              <Link to="/register">Sign-Up</Link>
            </Menu.Item>

            <SubMenu key="SubMenu" title="Perfil">
              <Menu.Item key="setting:1">Configuration</Menu.Item>
              <Menu.Item key="setting:2">Cerrar Session</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
