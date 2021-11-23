import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../context/auth/authContext";
import Navbar from "../components/Navbar";
import Loader from "react-loader-spinner";
import { Table, Tag, Button } from 'antd';
import {Link} from 'react-router-dom';
import '../assets/css/AdminPanel.css';

const AdminPage = () => {
  const authContext = useContext(AuthContext);
  const { isVerified, isAdmin, listUsers } = authContext;
  const [users, setUsers] = useState([]);
  const [hasLoaded, setHasLoaded] = useState();

  useEffect(async () => {
    await axios
      .get("/api/admin")
      .then((res) => {
        setUsers(() => res.data);
        setHasLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  const columns = [
      {
          title: 'Nombre',
          dataIndex: 'username',
          key: 'name',
          render: text => <a>{text}</a>
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',

      },
      {
        title: 'Teléfono',
        dataIndex: 'telefono',
        key: 'telefono'
      },
      {
        title: 'Referido por',
        dataIndex: 'referido_por',
        key: 'referido_por'
      }
  ];

  const data = users.data;

  return (
    <div>      
      <Navbar />      
            
      {hasLoaded ? (
        <div className="tableContainer">
          <Link to="/referidos"><Button type="primary" className="referButton">Referidos</Button></Link>
          <Table columns={columns} dataSource={data} />
        </div>
      ) : (
        <Loader 
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
        />
      )}
    </div>
  );
};

export default AdminPage;
