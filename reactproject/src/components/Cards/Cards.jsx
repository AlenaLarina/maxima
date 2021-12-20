import React from 'react';
import Look from '../../images/eye.png'
import Pen from '../../images/pen.png'
import {Link, useNavigate,} from "react-router-dom";

const Cards = ({cards}) => {
    const {id, title, status} = cards;
    let navigate = useNavigate();
    return (
        <div className="cards">
            <p className='cards__id'>{id}</p>
            <p className='cards__title'>{title}</p>
            <p className='cards__status'>{status}</p>
            <button onClick={()=>navigate(`/card/${id}`)} className='cards__button'><img className='cards__img' src={Look} alt='eye'/></button>
            <button className='cards__button'><img className='cards__img' src={Pen} alt='pen'/></button>
        </div>
    );
};

export default Cards;