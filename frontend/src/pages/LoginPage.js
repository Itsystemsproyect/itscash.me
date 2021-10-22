import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import itsc from "../assets/img/usuario.png";

const LoginPage = () => {
  return (
    <>
      <div className="login-page">
      <div className="loginimg">
        <img 
        width={160} src={itsc} alt="logo"
        />
      </div>

      <Form className="loginform"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item className="emailform"
          
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu email",
            },
          ]}
        >
          <div className="emailpass">
          <Input className="inputmail" placeholder="Ingrese su Correo" prefix={<UserOutlined />} />
          </div>
        </Form.Item>

        <Form.Item className="emailform"
          
          name="password"
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu contraseña",
            },
          ]}
        >
          <div className="emailpass">
          <Input.Password className="inputpassword"
          placeholder='Ingrese su Contraseña' prefix={<LockOutlined/>}/>
          </div>
        </Form.Item>
        <div className="btnlogin">
        <Button ghost key="boton">
          Login
        </Button>    
        </div>
       
      </Form>
      </div>
    </>
  );
};

export default LoginPage;
