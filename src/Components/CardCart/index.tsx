import './style.css'
import { useContext } from 'react';
import {CartContext} from '../../Providers/Cart'

interface CardProps{
    name: string;
    image:string;
    price: number;
    id: number;
}

export default function CardCart({name, image, price, id}:CardProps){
    const {deleteProduct} = useContext(CartContext)
    
    function removeProduct(){
        const obj = {
            title: name,
            image: image,
            price: price,
            id: id
        }

        deleteProduct(obj)
    }

    return(
        <>
            <div className="card-cardapio">
                <img className="cardapio-img-products" src={image} alt={name} />
                <h3>{name}</h3>
                <h3>R${price.toFixed(2)}</h3>
                <button className="btn-primary" onClick={() => removeProduct()}>Remover</button>
            </div>
        </>
    )
}