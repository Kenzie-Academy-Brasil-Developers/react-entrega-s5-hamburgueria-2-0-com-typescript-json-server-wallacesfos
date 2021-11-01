import { TextField } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import Navbar from "../../Components/Navbar";
import NavbarMobile from "../../Components/NavbarMobile";
import './style.css'
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useHistory } from "react-router";



export default function Feedbacks(){
    const token = localStorage.getItem('@token_burguer') || null
    const history = useHistory()

    if(token === null){
        history.push('/login')
    }

    const [nome, setNome] = useState('')
    const [feedback, setFeedback] = useState('')

    function enviarFeed(){

        const storage = localStorage.getItem('@id_burguer')
        const obj = {
            nome: nome,
            feedback: feedback,
            userId: storage
        }

        axios.post('https://hamburgueria-api-kenzie-academ.herokuapp.com/feedbacks',obj,{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => {
            toast.success("Enviado com sucesso!")
        }).catch(() => toast.error('Ouve algum erro!'))
    }

    return(
        <div className="container-feedback">
            <Toaster />
            <Navbar />
            <NavbarMobile />

            <div className="feedback-main">
                <div className="formulario-feedback">
                    <TextField required label="Nome" className="feed-input" onChange={e => setNome(e.target.value)}/>
                    <TextField required label="Feedback" className="feed-input" onChange={e => setFeedback(e.target.value)}/>
                    <button className="btn-primary btn-feed" onClick={enviarFeed}>Enviar</button>
                </div>
            </div>
        </div>
    )
}