import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../context/alert/alertContext";
import AuthContext from "../context/auth/authContext";
import { Link } from "react-router-dom";
import itsc from "../assets/img/itscx400.svg";

const EditProfile = (props) => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    const {username, email} = user
    return (
        <>
        <h2>Edita tu perfil</h2>
         <p>{username}</p>
         <p>{email}</p>  
        </>
    )
}

export default EditProfile
