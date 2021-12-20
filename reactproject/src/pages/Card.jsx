import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import {AppContext} from "../App";


const Card = () => {
    const {details} = useContext(AppContext)
    const {id} = useParams()

    const currentCard = details.find((item)=> item.id = Number(id))

    console.log({details})
    if (!currentCard) {
        return (
            <div>
                <h1>Not found</h1>
                <Link to="/">Главная</Link>
            </div>
        )
    }

    const {image, title, status, description} = currentCard
    return (
        <div className="card">
            <div className="card__info">
                <img src={image} alt="mark" className="card__image"/>
                <span className="card__id">{id}</span>
            </div>
            <h1 className="card__title">{title}</h1>
            <span className="card__status">{status}</span>
            <p className="card__description">{description}</p>
        </div>
    );
};

export default Card;

