import React, {useContext} from 'react'
import Navbar from '../components/Navbar'
import { Layout, Button, Descriptions } from "antd";
import '../assets/css/Profile.css'
import AuthContext from "../context/auth/authContext";
import Avatar from 'react-avatar';



const { Content, Footer } = Layout;



const ProfilePage = () => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;

    const userHasImage = (<>
        <Avatar size="150" facebook-id="invalidfacebookusername" src={user && user.imagen} />
    </>)

    const userHasNoImage = (<>
        <Avatar name={user && user.username} size="150" />
    </>)

    return (
        <>
        <Layout>
            <Navbar />
            
                <Content className="banner1">
                    <div className='profileContainer' >
                        <div className='avatarContainer'>
                        {user.imagen ? userHasImage : userHasNoImage}
                        </div>

                        <Descriptions title='Información del Usuario' className='detallesUsuario' bordered>
                            <Descriptions.Item label="Nombre">{user && user.username}</Descriptions.Item>
                            <Descriptions.Item label="Email">{user && user.email}</Descriptions.Item>
                            <Descriptions.Item label="Teléfono">{user.telefono ? user.telefono : 'Sin información'}</Descriptions.Item>
                            <Descriptions.Item label="Empresa">{user.empresa ? user.empresa : 'Sin información'}</Descriptions.Item>
                            <Descriptions.Item label="Instagram">{user.instagram_link ? user.instagram_link : 'Sin información'}</Descriptions.Item>
                            <Descriptions.Item label="Facebook">{user.facebook_link ? user.facebook_link : 'Sin información'}</Descriptions.Item>
                            <Descriptions.Item label="Twitter">{user.twitter_link ? user.twitter_link : 'Sin información'}</Descriptions.Item>
                            <Descriptions.Item label="Wallet">{user.wallet_address ? user.wallet_address : 'Sin información'}</Descriptions.Item>
                        </Descriptions>

                        
                    </div>
                </Content>
            
        </Layout>
        </>
    )
}

export default ProfilePage
