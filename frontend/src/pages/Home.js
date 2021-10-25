import React from "react";
import { Layout, Button, Space } from "antd";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import itsc from "../assets/img/itscx400.svg";
import Particulas from "../components/particulas/Particulas";
import '../assets/css/Particulas.css'

const { Content, Footer } = Layout;

const Home = () => {
  return (
    <>
      <Layout className="layout">
        <Navbar />
        <Content className="banner0">
              <div id='parti'  style={{ position: 'absolute'}}>
              <Particulas height="100vh" width="100%"/>
              </div> 
          <div className="logobanner">
            <div className="imglogo">
              <img src={itsc} alt="logo"/>
            </div>
            <p className="tituloits">PROYECTO DE RECOMPENSAS ITSYSTEMS</p>
            <div className="botones">
              <Link to="/login">
                <Button className="btn1" ghost key="boton1">
                  Login
                </Button>
              </Link>
              <Button className="btn1" ghost key="boton1">
                Recompensas
              </Button>
            </div>
          </div>
        </Content>
        <Content >         
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ITSYSTEMS ©2021 Todos Los Derechos Reservados.
        </Footer>

      </Layout>
    </>
  );
};

export default Home;
