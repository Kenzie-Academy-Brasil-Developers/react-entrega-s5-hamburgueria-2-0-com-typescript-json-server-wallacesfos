import { useHistory } from 'react-router-dom'
import './style.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useContext } from 'react';
import {CartContext} from '../../Providers/Cart'
import {AuthContext} from '../../Providers/Auth'

import Exit from '@material-ui/icons/ExitToApp';


export default function Navbar(){
    const {cart} = useContext(CartContext)
    const {Logout} = useContext(AuthContext)


    const history = useHistory()

    const Storage = localStorage.getItem("@name_burguer") || false

    function pageMove(link: string){
        history.push(link)
    }

    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <img className="navbar-logo" src={"https://img.freepik.com/vetores-gratis/logotipo-para-loja-de-hamburguer_7894-451.jpg?size=338&ext=jpg"} alt="Burguers Logo"/>
            </div>
            <div className="navbar-menu">
                <div className="navbar-menu--utility">
                    <div className="navbar-start">
                        <a href="https://www.linkedin.com/"><p className="navbar-link--gray">Trabalhe Conosco</p></a>
                        <p className="navbar-link--gray" onClick={() => window.location.href = "https://wa.me/5511954627106" }>Fale Conosco</p>
                    </div>
                    <div className="navbar-end">
                        {Storage ? <p className="navbar-link--gray">Olá {Storage}</p> : <p className="navbar-link--gray" onClick={() => pageMove('/login')}>Login | Registre-se</p>}
                        {Storage && <div className="pointer" onClick={() => pageMove('/cart')}><ShoppingCartIcon /> <span className="totalCart">{cart.length}</span></div>}
                        {Storage && <Exit className="exit pointer" onClick={Logout}/>}
                    </div>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-menu-main">
                       <div className="navbar-main-links">
                            <p className="navbar-main-link" onClick={() => pageMove('/')}>Home</p>
                            <p className="navbar-main-link" onClick={() => pageMove('/cardapio')}>Cardápio</p>
                            <p className="navbar-main-link" onClick={() => pageMove('/feedback')}>Feedback</p>
                       </div>
                        <div className="navbar-end">
                            <p className="navbar-link--gray" onClick={() => pageMove('/cardapio')}>Compre sem fila</p>
                            <button className="btn-primary" onClick={() => pageMove('/cardapio')}>Peça em Casa</button>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}