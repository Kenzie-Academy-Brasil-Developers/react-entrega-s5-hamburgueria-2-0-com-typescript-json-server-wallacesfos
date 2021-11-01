import './style.css'
import { useContext } from 'react';
import {CartContext} from '../../Providers/Cart'

interface CardProps{
    name: string;
    image:string;
    price: number;
    description: string;
    popup: () => void;
}



export default function Popup({name, image, price, description, popup}: CardProps){
    const {addProduct} = useContext(CartContext)

    function addProd(){
        const random = Math.floor(Math.random() * (10000000000 - 1 ) + 1)        

        const obj = {
            id: random,
            title: name,
            image: image,
            price: price
        }

        addProduct(obj)
    }

    return(
        <div className="container-popup" onClick={popup}>
            <div className="menu-popup">
                <img className="image-pop" src={image} alt="hamburguer" />
                <h3>{name}</h3>
                <h3>R${price.toFixed(2)}</h3>
                <p>{description}</p>
                <button className="btn-primary" onClick={addProd}>Adicionar ao Carrinho</button>
                <br />
            </div>
        </div>
    )
}