import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Layout, Button, Descriptions } from "antd";
import "../assets/css/Profile.css";
import AuthContext from "../context/auth/authContext";
import Loader from "react-loader-spinner";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const { Content } = Layout;

const ProfilePage = () => {
  const authContext = useContext(AuthContext);
  const { user, loadUser, isVerified, loading } = authContext;
  

  

  useEffect(() => {    
     loadUser()        
    
    // eslint-disable-next-line
  }, []);

  const userHasImage = (
    <>
      <Avatar
        size="150"
        facebook-id="invalidfacebookusername"
        src={user && user.imagen}
      />
    </>
  );

  const userHasNoImage = (
    <>
      <Avatar name={user && user.username} size="150" />
    </>
  );

  const loadedPage = <> 
  {isVerified ? (
    <Layout>
      <Navbar />

      <Content className="banner1">
        <div className="profileContainer">
          <div className="avatarContainer">
            {user && user.imagen ? userHasImage : userHasNoImage}
          </div>

          <Descriptions
            title="Información del Usuario"
            className="detallesUsuario "
            bordered
          >
            <Descriptions.Item clasname="usn" label="Nombre">
              {user && user.username}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {user && user.email}
            </Descriptions.Item>
            <Descriptions.Item label="Referir">
              {user && user.referido}
            </Descriptions.Item>
            <Descriptions.Item label="Teléfono">
              {user && user.telefono ? user.telefono : "Sin información"}
            </Descriptions.Item>
            <Descriptions.Item label="Empresa">
              {user && user.empresa ? user.empresa : "Sin información"}
            </Descriptions.Item>
            <Descriptions.Item label="Instagram">
              {user && user.instagram_link
                ? user.instagram_link
                : "Sin información"}
            </Descriptions.Item>
            <Descriptions.Item label="Facebook">
              {user && user.facebook_link
                ? user.facebook_link
                : "Sin información"}
            </Descriptions.Item>
            <Descriptions.Item label="Twitter">
              {user && user.twitter_link
                ? user.twitter_link
                : "Sin información"}
            </Descriptions.Item>
            <Descriptions.Item label="Wallet">
              {user && user.wallet_address
                ? user.wallet_address
                : "Sin información"}
            </Descriptions.Item>
          </Descriptions>

          <div className="buttonContainer">
            <Link to="/edit_profile">
              <Button className="btnprofile" type="primary">
                Editar Perfil
              </Button>
            </Link>
          </div>
        </div>
      </Content>
    </Layout>
  ) : (
    <Layout>
      <Content className="banner1">
        <div className="dialogContainer">
          <p>
            Su cuenta no está verificada. Revise su correo y haga click en
            el link de verificación.
          </p>
          <p>
            Si ya verificó su cuenta, haga click{" "}
            <a className="dialogLink" href="/profile">
              <Button type="link" size="large">
                <span className="dialogLink">aquí</span>
              </Button>
            </a>
          </p>
          {/* <p>Si no le ha llegado el link a su correo, solicite otro link de verificación en el siguiente botón</p>
                <Button className="btnprofile" type='primary'>Solicitar Link</Button>
                */}
        </div>
      </Content>
    </Layout>
  )}
</>;

const notLoadedPage = <>
<Loader 
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
        />
</>

  return <>{user && loadedPage || notLoadedPage}</>;
};

export default ProfilePage;
