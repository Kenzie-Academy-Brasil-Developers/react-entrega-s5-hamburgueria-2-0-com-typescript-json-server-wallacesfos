import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useContext } from 'react';
import { useHistory } from "react-router";
import {AuthContext} from '../../Providers/Auth'

import './style.css'

export default function SignIn(){
    const history = useHistory()
    const {signIn} = useContext(AuthContext)

    const [login, setLogin] = useState(''); 
    const [password, setPassword] = useState(''); 

    function RequestLogin(){
        const obj = {
            "email": login,
            "password": password
        }        

        signIn(obj)
    }

    return(
        <form className="form-login">
            <h2>Login</h2>
            <TextField required type="text" label="Email" className="input-login" onChange={e => setLogin(e.target.value)}/>
            <TextField required type="password" label="Senha" className="input-login" onChange={e => setPassword(e.target.value)}/>
            <Button variant="contained" className="btn-login" onClick={RequestLogin}>Login</Button>
            <p className="pointer registra" onClick={() => history.push("/register")}>Não tem conta? registre-se</p>

        </form>
    )
}