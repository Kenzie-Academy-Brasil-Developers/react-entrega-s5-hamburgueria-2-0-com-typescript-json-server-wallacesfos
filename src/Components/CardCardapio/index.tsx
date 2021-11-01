import { useState } from 'react'
import Popup from '../Popup';
import './style.css'

interface CardProps{
    name: string;
    image:string;
    price: number;
    description: string;
}

export default function CardCardapio({name, image, price, description}:CardProps){
    const [condicional, setCondicional] = useState(false);

    function conditional(){
        setCondicional(false)
    }

    return(
        <>
            {condicional && <Popup name={name} image={image} price={price} description={description} popup={conditional} />}
            <div className="card-cardapio" onClick={() => setCondicional(true)}>
                <img className="cardapio-img-products" src={image} alt={name} />
                <h3>{name}</h3>
            </div>
        </>
    )
}