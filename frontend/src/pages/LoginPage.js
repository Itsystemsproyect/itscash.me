import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const LoginPage = () => {
  return (
    <>
      <div className="login-page">
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
          <Input placeholder="Ingrese su Correo" prefix={<UserOutlined />} />
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
          <Input.Password 
          placeholder='Ingrese su Contraseña' prefix={<LockOutlined/>}/>
          </div>
        </Form.Item>
        {/* 
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
          */}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
      </div>
    </>
  );
};

export default LoginPage;
