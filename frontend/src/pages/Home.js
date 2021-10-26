import React from "react";
import { Layout, Button } from "antd";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import itsc from "../assets/img/itscx400.svg";
import Particulas from "../components/particulas/Particulas";
import '../assets/css/Particulas.css'
import imgmision from "../assets/img/mision.png";
import imgvision from "../assets/img/vision.png";
import imgobjetivos from "../assets/img/valores.png";

const { Content, Footer } = Layout;

const Home = () => {
  return (
    <>
      <Layout className="layout">
        <Navbar />
        <Content className="banner0">
          <div id="parti" style={{ position: "absolute" }}>
            <Particulas height="100vh" width="100%" />
          </div>
          <div className="logobanner">
            <div className="imglogo">
              <img src={itsc} alt="logo" />
            </div>
            <p className="tituloits">
              PROYECTO DE RECOMPENSAS POR PRODUCTIVIDAD LABORAL
            </p>
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
        <div className="transactionstatic"></div>
        <Content className="content2">
          <div className="descripcion">ACERCA DE </div>
          <div className="contenedor2">
            <div className="mision info">
              <img className="misimg" src={imgmision} />
              <p className="parrasc">
                Recompensar por el esfuerzo que realizan los trabajadores para
                sacar adelante una Empresa, cumpliendo con los objetivos y metas
                Trasadas
              </p>
              MISION
            </div>
            <div className="vision info">
              VISION
              <p className="parrasc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin vitae lorem quis ultricies. Quisque nec imperdiet ex. Ut pulvinar eu mi quis efficitur.
              </p>
              <img className="misimg" src={imgvision} />
            </div>
            <div className="objetivos info">
              <img className="misimg" src={imgobjetivos} />
              <p className="parrasc"></p>
              VALORES
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
