import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../context/alert/alertContext";
import AuthContext from "../context/auth/authContext";
import { Link } from "react-router-dom";
import itsc from "../assets/img/itscx400.svg";
import Particulas from "../components/particulas/Particulas";




const RegisterPage = (props) => {

 
  
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/profile");
    }
    if (error === "El usuario ya existe") {
      setAlert(error, "error");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  
  const onSubmit = (e) => {
    
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setAlert("Por favor ingresa todos los campos", "error");
      
    } else {      
      authContext.register({
        username,
        email,
        password,
      });
    }
  };
  

  

  return (
    <>   
      <div id='parti'  style={{ position: 'absolute'}}>
      <Particulas height="100vh" width="100%"/>
      </div> 
      <div className="login-page">
        <div className="loginimg">
            <Link to='/'>
              <img 
              width={160} src={itsc} alt="logo"
              />
            </Link>
        </div>
       
      <form onSubmit={onSubmit} className="loginform">
        <div className="form-group emailform">
          
          <input
            placeholder="Ingrese su usuario"
            className="inputmail inputlogin"
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group emailform">
          
          <input
          placeholder="Ingrese su email"
            className="inputmail inputlogin"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group emailform">
          
          <input
            placeholder="Ingrese su contraseña"
            className="inputpassword inputlogin"
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="7"
          />
        </div>
        <div className="btnlogin emailform">

        <input
          className="inputlogin inputl"
          type="submit"
          value="Regístrate"
          
        />
        </div>
      </form>
      </div>
      
    </>
  );
};

export default RegisterPage;
