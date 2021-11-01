import { useHistory } from 'react-router-dom'
import './style.css'

interface CardHomeProps{
    title: string;
    description: string;
    button: string;
    image: string;
    clique: string;
}

export default function CardHome({title, description, button, image, clique}:CardHomeProps) {
    const history = useHistory();

    return(
        <div className="card">
            <div className="card-container-main">
                <img className="card-image" src={image} alt={title}/>
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <button className="btn-primary card-button" onClick={() => history.push(clique)}>{button}</button>
            </div>
        </div>
    )
}