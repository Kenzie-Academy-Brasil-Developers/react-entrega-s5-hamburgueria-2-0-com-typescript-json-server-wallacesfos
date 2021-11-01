import React from 'react';
import SignIn from "../../Components/SignIn";
import ImageHamburguer from '../../images/login.svg'
import './style.css'
import { Toaster } from 'react-hot-toast';




export default function Login(){

    return(
        <div className="container">
            <Toaster />
            <div className="container-login">
                <SignIn />
            </div>

            <div className="container-image-login">
                <img src={ImageHamburguer} alt="hamburguer" />
            </div>
        </div>
    )
}