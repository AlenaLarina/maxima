import React, {useContext} from 'react';
import Look from '../../images/eye.png'
import Pen from '../../images/pen.png'
import Del from '../../images/del.png'
import {useNavigate,} from "react-router-dom";
import {AppContext} from "../../App";

const Cards = ({cards}) => {
    const {details, isAuth, setDetails} = useContext(AppContext)
    const {id, title, status} = cards;
    let navigate = useNavigate();


    function deleteCard() {
        const newCardList = details.filter(item => item.id != id)
        return (setDetails(newCardList))

    }

    return (
        <div className="cards">
            <p className='cards__id'>{id}</p>
            <p className='cards__title'>{title}</p>
            <div className='cards__info'>
                <p className='cards__status'>{status}</p>
                {!isAuth && <button onClick={() => navigate(`/card/${id}`)}
                        className='cards__button'><img className='cards__img' src={Look} alt='eye'/>
                </button>}
                {isAuth && <button onClick={() => navigate(`/card/${id}`)}
                        className='cards__button'><img className='cards__img' src={Pen} alt='pen'/></button>}
                {isAuth && <button onClick={deleteCard}
                        className='cards__button'><img className='cards__img' src={Del} alt='pen'/></button>}
            </div>
        </div>
    );
};

export default Cards;