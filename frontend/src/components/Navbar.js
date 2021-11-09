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
            <pre className="tituitsc"> ITS PROJECT</pre>
          </div>
        </NavLink>
        <div className="linkContainer">
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
        </div>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  </>)

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
            <pre className="tituitsc"> ITS PROJECT</pre>
          </div>
        </NavLink>
        <div className="linkContainer">
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
        </div>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  </>)

  return <>{isAuthenticated ? authLinks : guestLinks}</>;


};

export default Navbar;
