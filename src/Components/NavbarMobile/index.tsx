import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';

import { useState } from 'react';
import { useHistory } from 'react-router-dom'

import './style.css'
import { FlashOnOutlined } from '@material-ui/icons';

export default function NavbarMobile(){
    const storage = localStorage.getItem("@token_burguer") || FlashOnOutlined
    const history = useHistory()
    const [menu, setMenu] = useState(false)

    function pageMove(link: string){
        history.push(link)
    }

    return(
        <nav className="navbar--mobile">
        <div className="navbar-brand">
            <img className="navbar-logo" src={"https://img.freepik.com/vetores-gratis/logotipo-para-loja-de-hamburguer_7894-451.jpg?size=338&ext=jpg"} alt="Burguers Logo"/>
        </div>
        <div className="navbar-menu">
            <MenuIcon  onClick={() => setMenu(true)}/>
        </div>
        {menu && <div className="menu-mobile">
                <div className="navbar-brand-mobile">
                    <img className="navbar-logo" src={"https://img.freepik.com/vetores-gratis/logotipo-para-loja-de-hamburguer_7894-451.jpg?size=338&ext=jpg"} alt="Burguers Logo"/>
                    <CancelIcon className="margin-right" onClick={() => setMenu(false)}/>
                </div>
                <hr />
                <div>
                    {!storage && <p className="navbar-main-link linha" onClick={() => pageMove('/login')}>Login</p>}
                    {!storage && <p className="navbar-main-link linha" onClick={() => pageMove('/register')}>Registre-se</p>}
                    <p className="navbar-main-link linha" onClick={() => pageMove('/')}>Home</p>
                    <p className="navbar-main-link linha" onClick={() => pageMove('/cardapio')}>Cardápio</p>
                    <p className="navbar-main-link linha" onClick={() => pageMove('/cart')}>Carrinho</p>
                    <p className="navbar-main-link linha">Doação</p>
                </div>
            </div>}
    </nav>
    )
}