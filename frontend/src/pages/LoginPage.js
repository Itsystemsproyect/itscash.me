import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";
import { Link } from "react-router-dom";

//import { UserOutlined, LockOutlined } from '@ant-design/icons';
import itsc from "../assets/img/itscx400.svg";
import "../assets/css/LoginPage.css"

const LoginPage = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/profile');
    }

    if (error === 'Credenciales inválidas') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Por favor completar todos los campos', 'danger');
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <>
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
          placeholder="Ingrese su email"
            className="inputmail"
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
            className="inputpassword"
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="7"
          />
        </div>
        <div className="btnlogin">

        <input
          type="submit"
          value="Login"
          
        />
        </div>
      </form>
      </div>
    </>
  );
};

export default LoginPage;
