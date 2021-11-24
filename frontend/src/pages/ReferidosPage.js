import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';
import Loader from "react-loader-spinner";
import { Button, Table, Form, Input } from 'antd';
import AlertContext from "../context/alert/alertContext";

import sendSplToken from '../utils/sendSplToken';

import '../assets/css/ReferidosPage.css';

const ReferidosPage = () => {
    const [referidos, setReferidos] = useState([]);
    const [hasLoaded, setHasLoaded] = useState();
    const [hasChanged, setHasChanged] = useState(false);
    const [amount, setAmount] = useState({valor: 10});

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;
    useEffect( () => {
        const fetchData = async () => {
            await axios.get(`api/rewards`)
            .then((res) => {
                
                setReferidos(() => res.data['data']);
                setHasLoaded(true);
                
            })
            
            .catch((err) => { 
                console.error(err)      
                
            })
        }

        fetchData();             
        
        
    }, [hasChanged])

    const handlePay =  async (amount, address, referidos, index) => {      
        try {
            await sendSplToken(amount, address, referidos)            
            .then(() => axios.put(`api/rewards/${index}`))  
            .then(() => setHasChanged(!hasChanged))
            

        } catch (err) {
            setAlert(err.message, 'error')
            
        }  
                
    }
    
    const handleChangeAmount = (e) => {
        setAmount({...amount, valor: e.target.value})
        
    }

    const columns = [
       {
           title: 'Nombre',
           dataIndex: 'username',
           key: 'username',
           render: text => <a>{text}</a>
       },
       {
            title: 'Email',
            dataIndex: 'email',
            key: 'email', 
       },
       {
           title: 'Wallet',
           dataIndex: 'wallet_address',
           key: 'wallet_address'
       },
       {
           title: 'Referidos',
           dataIndex: 'count',
           key: 'count'
       },
       {
           title: 'Pagar',
           dataIndex: 'id',
           key: 'id',
           render: (text, record) => (
               <Button type="primary" onClick={() => handlePay(parseInt(amount.valor), record.wallet_address, parseInt(record.count), parseInt(record.id))}>{"Pago"}</Button>
           ),
       }
       
    ]

    const data = referidos;

    

    return (
        <>
          <Navbar /> 
          {hasLoaded ? (
                <div className="tableContainer">
                <div className="inputContainer">
                    <Form.Item 
                    label="Monto"
                    className="formLabel"
                    
                    >
                    <Input 
                    suffix="ITSC"
                    className="formInput"
                    value={amount.valor}
                    onChange={handleChangeAmount}
                    />
                    </Form.Item>
                    
                </div>                    
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

        </>
    )
}

export default ReferidosPage
