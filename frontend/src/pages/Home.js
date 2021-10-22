import React from "react";
import { Layout, Button } from "antd";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import itsc from "../assets/img/itscx400.svg";

const { Content, Footer } = Layout;

const Home = () => {
  return (
    <>
      <Layout className="layout">
        <Navbar />

        <Content className="banner0">
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

        <Footer style={{ textAlign: "center" }}>
          ITSYSTEMS ©2021 Todos Los Derechos Reservados.
        </Footer>
      </Layout>
    </>
  );
};

export default Home;
