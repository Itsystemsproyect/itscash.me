import React, {useContext} from 'react'
import { Alert } from 'antd';
import AlertContext from '../context/alert/alertContext';

const AlertComponent = () => {
    const alertContext = useContext(AlertContext);
    return (
        alertContext.alerts.length > 0 &&
        alertContext.alerts.map(alert => (
            <Alert message={alert.msg} type={alert.type} />
        ))
    )
}

export default AlertComponent
