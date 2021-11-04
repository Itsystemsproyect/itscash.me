import React, { useContext, useState } from "react";
import AuthContext from "../context/auth/authContext";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import itsc from "../assets/img/itscx400.svg";
import '../assets/css/Navbar.css'


const Navbar = () => {
  const [click, setClick] = useState(false);

  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    logout();
  };

<<<<<<< HEAD
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
=======
  const guestLinks = (<>
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
        <div className="itslogo">
          <img
            className="itslogoimg"
            src={itsc}
            alt="img"
            width={50}
            height="auto"
          />
          <pre className="tituitsc"> ITSYSTEMS PROJECT</pre>
>>>>>>> Cambiar la navbar
        </div>
        </NavLink>

<<<<<<< HEAD
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
=======
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/login"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/register"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Regístrate
            </NavLink>
          </li>
        
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  </>)
>>>>>>> Cambiar la navbar

  const authLinks = (<>
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
        <div className="itslogo">
          <img
            className="itslogoimg"
            src={itsc}
            alt="img"
            width={50}
            height="auto"
          />
          <pre className="tituitsc"> ITSYSTEMS PROJECT</pre>
        </div>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>       
          <li className="nav-item">
            <NavLink
              exact
              to="/profile"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Perfil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/wallet"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Wallet
            </NavLink>
          </li>
          <li className="nav-item">
          <Button type="text" onClick={handleLogout} className="nav-links">
              <span className="navButton">Log-Out</span>
          </Button>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  </>)

return <>{isAuthenticated ? authLinks : guestLinks}</>;

  
};

export default Navbar;
