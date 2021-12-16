import React from 'react';
import Look from '../components/eye.png'
import Pen from '../components/pen.png'

const Card = (props) => {

    return (
        <div className="body__card card">
            <p className='card__id'>{props.id}</p>
            <p className='card__title'>{props.title}</p>
            <p className='card__status'>{props.status}</p>
            <button className='card__button'><img className='card__img' src={Look} alt='eye'/></button>
            <button className='card__button'><img className='card__img' src={Pen} alt='pen'/></button>
        </div>
    );
};

export default Card;