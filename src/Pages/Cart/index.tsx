import Navbar from "../../Components/Navbar";
import NavbarMobile from "../../Components/NavbarMobile";
import { useContext } from 'react';
import {CartContext} from '../../Providers/Cart'
import CardCart from "../../Components/CardCart";
import './style.css'

export default function Cart(){
    const {cart} = useContext(CartContext)
    
    return(
        <div className="container-cart">
            <Navbar />
            <NavbarMobile />

            <div className="main-cart">
                <div className="product-cart">
                    {cart.map((item) => {
                        return <CardCart name={item.title} image={item.image} price={item.price} id={item.id}/>
                    })}
                </div>
                <div className="total-itens">
                    <h3>Total de Produtos: {cart.length}</h3>
                    <h3>Preço Total: {cart.reduce((a,b) => a + Number(b.price), 0).toFixed(2)}</h3>
                    <button className="btn-primary">Finalizar Pedido</button>
                </div>
            </div>

        </div>
    )
}