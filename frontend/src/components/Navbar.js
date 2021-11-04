import React, { useContext } from "react";
import { Layout, Menu, Button } from "antd";
import { SubMenu } from "rc-menu";
import { Link } from "react-router-dom";
import itsc from "../assets/img/itscx400.svg";
import AuthContext from "../context/auth/authContext";

const { Header } = Layout;

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const handleLogout = () => {
    logout();
  };

  const authLinks = (
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
            <pre className="tituitsc"> ITS Cash</pre>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" disabled>
              {user && `Hola ${user.username}`}
            </Menu.Item>
            {/* <Menu.Item key="2"><Link to='/Dashboard'>Dashboard</Link></Menu.Item> */}
            <Menu.Item key="2">
              <Link to="/wallet">Wallet</Link>
            </Menu.Item>

            <SubMenu key="SubMenu" title="Perfil">
              <Menu.Item key="setting:1">
                <Link to="/profile">
                  <Button type="text">Ver Perfil</Button>
                </Link>
              </Menu.Item>
              <Menu.Item key="setting:2">
                <Button type="text" onClick={handleLogout}>
                  Cerrar Session
                </Button>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </Header>
    </>
  );

  const guestLinks = (
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
            <pre className="tituitsc"> ITS PROJECT</pre>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to="/register">Sign-Up</Link>
            </Menu.Item>

            <Menu.Item key="3">
              <Link to="/login">Login</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
    </>
  );

  return <>{isAuthenticated ? authLinks : guestLinks}</>;
};

export default Navbar;
