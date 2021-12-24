import React, {useContext, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../App";
import Mark from '../images/mark.png'
import Back from "../components/Back";



const Card = () => {

    const {details, setDetails, isAuth} = useContext(AppContext)
    const {id} = useParams()
    let navigate = useNavigate();

    const currentCard = details.find((item)=> item.id == id)
    console.log('details', currentCard)
    if (!currentCard) {
        return (
            <div className='form'>
                <h1 className="form__title">Not found</h1>
            </div>
        )
    }

    function deleteCard() {
        const newCardList = details.filter(item => item.id != id)
        alert ('Карточка удалена!')
        setDetails(newCardList)
        return navigate('/')
    }

    const {title, status, description} = currentCard
        return (
            <div>
                <Back/>
                <div className="card">
                    <div className="card__info">
                        <img src={Mark} alt="mark" className="card__image"/>
                        <span className="card__id">{id}</span>
                    </div>
                    <h1 className="card__title">{title}</h1>
                    <span className="card__status">{status}</span>
                    <p className="card__description">{description}</p>
                    {isAuth && <button onClick={deleteCard} className='card__button'>Удалить</button>}
                </div>
            </div>
        );
};

export default Card;

