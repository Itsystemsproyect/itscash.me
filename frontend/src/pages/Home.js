import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { SiTelegram, SiTwitter } from "react-icons/si";



import { QueryClient, QueryClientProvider } from "react-query";


import itsc from "../assets/img/itscx400.svg";
import Particulas from "../components/particulas/Particulas";

//import imgmision from "../assets/img/mision.png";
//import imgvision from "../assets/img/vision.png";
//import imgobjetivos from "../assets/img/valores.png";

import CryptoTracker from "../components/CryptoTracker";

import "../assets/css/Particulas.css";
import "../assets/css/CryptoTracker.css"



const { Content, Footer } = Layout;
const queryClient = new QueryClient();

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
              PROYECTO DE RECOMPENSAS DE EDUCACIÓN EMPRESARIAL
            </p>
            <div className="botones">
              <Link to="/login">
                <Button className="btn1" ghost key="boton1">
                  Login
                </Button>
              </Link>
              <Button className="btn1" ghost key="boton1" href="https://raydium.io/swap/?from=9fzQfEM5aq1GLugzHMM6prq8tsURN2pxQMjARaWGd2py&to=Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB" target="_blank" rel="noopener noreferrer">
                SWAP
              </Button>
            </div>
            <div className="redessociales">
              <Button className="telegram" shape="circle" href="https://t.me/joinchat/DHi-ZhevECU1NTUx" target="_blank" rel="noopener noreferrer">
                < h1 className="tel"><SiTelegram /></h1>
              </Button>
              <Button className="twitter" shape="circle" href="https://twitter.com/itscash_me" target="_blank" rel="noopener noreferrer">
                <h1 className="twt"><SiTwitter /></h1>
              </Button>
            </div>
          </div>
        </Content>

        <div className="transactionstatic">
          <QueryClientProvider client={queryClient}>
            <CryptoTracker cryptoName="solana" />

          </QueryClientProvider>
        </div>
        <Content className="content2">
          <div className="descripcion">OBJETIVOS </div>
          <div className="contenedor2">
            {/*} <div className="mision info">
              <img className="misimg" src={imgmision} alt="" />
              <p className="parrasc">
                Recompensar por el esfuerzo que realizan los trabajadores para
                sacar adelante una Empresa, cumpliendo con los objetivos y metas
                Trasadas
              </p>
              MISION
             </div>*/}
            <div className="vision info">
              <ul className="visionl">
                <li >Abordar de forma urgente la necesidad de desarrollar un aprendisaje en laboratorios digitales de próxima generación. </li>
                <br />
                <li >Posibilitar a creadores de contenido formativo empresarial, a generar material de aprendizaje y consumo.</li>
                <br />
                <li >Poner al servicio del Consumidor la Tansformación Digital definitiva, para su interacción y desarrollo de valor.</li>
                <br />
                <li >Traer la Aplicación de AI hacia la Usabilidad empresarial.</li>
              </ul>
            </div>
            {/*<div className="objetivos info">
              <img className="valor" src={imgobjetivos} alt="" />
              <p className="parrasc"></p>
              VALORES
            </div>*/}
          </div>
        </Content>
        <Footer className="footerhome" style={{ textAlign: "center" }}>
          ITSYSTEMS ©2021 Todos Los Derechos Reservados.
        </Footer>
      </Layout>
    </>
  );
};

export default Home;
