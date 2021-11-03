import React, { useState, useContext } from "react";
//import AlertContext from "../context/alert/alertContext";
import AuthContext from "../context/auth/authContext";
//import { Link } from "react-router-dom";
//import itsc from "../assets/img/itscx400.svg";
import axios from "axios";
import '../assets/css/EditProfile.css'

const EditProfile = (props) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  

  const [localUser, setLocalUser] = useState({
      username: user.username,
      telefono: user.telefono,
      empresa: user.empresa,
      instagram_link: user.instagram_link,
      facebook_link: user.facebook_link,
      twitter_link: user.twitter_link,
      wallet_address: user.wallet_address
  })

  const {username, telefono, empresa, instagram_link, facebook_link, twitter_link, wallet_address} = localUser;

  const [setUpdated] = useState(false);
  
  
  
  const onChange = (e) => {
      setLocalUser({...localUser, [e.target.name]: e.target.value})
  }

  

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    
    try {
        await axios.put(`/api/users/${user.id}`, localUser, config);
        console.log('Usuario actualizado existosamente')
        setUpdated(true);
        props.history.push('/profile');
        
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
      <div className="login-page edit-page">
        <h3 className="editFormTitle">Edita tu Perfil</h3>
        <form onSubmit={onSubmit} className="loginform">
          <div className="form-group emailform">
            <input
              placeholder="Usuario"
              className="inputmail inputlogin"
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={onChange}
            />
          </div>
          <div className="form-group emailform">
            <input
              placeholder="Ingrese su teléfono"
              className="inputmail inputlogin"
              id="telefono"
              type="telefono"
              name="telefono"
              value={telefono}
              onChange={onChange}
            />
          </div>
          <div className="form-group emailform">
            <input
              placeholder="Empresa"
              className="inputpassword inputlogin"
              id="empresa"
              type="empresa"
              name="empresa"
              value={empresa}
              onChange={onChange}
            />
          </div>

          <div className="form-group emailform">
            <input
              placeholder="Instagram"
              className="inputpassword inputlogin"
              id="instagram_link"
              type="instagram_link"
              name="instagram_link"
              value={instagram_link}
              onChange={onChange}
            />
          </div>

          <div className="form-group emailform">
            <input
              placeholder="Facebook"
              className="inputpassword inputlogin"
              id="facebook_link"
              type="facebook_link"
              name="facebook_link"
              value={facebook_link}
              onChange={onChange}
            />
          </div>

          <div className="form-group emailform">
            <input
              placeholder="Twitter"
              className="inputpassword inputlogin"
              id="twitter_link"
              type="twitter_link"
              name="twitter_link"
              value={twitter_link}
              onChange={onChange}
            />
          </div>

          <div className="form-group emailform">
            <input
              placeholder="Wallet"
              className="inputpassword inputlogin"
              id="wallet_address"
              type="wallet_address"
              name="wallet_address"
              value={wallet_address}
              onChange={onChange}
            />
          </div>

          <div className="btnlogin emailform">
            <input
              className="inputlogin inputl"
              type="submit"
              value="Actualizar"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
