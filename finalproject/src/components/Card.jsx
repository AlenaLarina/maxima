import React from 'react';

const Card = (props) => {

    return (
        <div className="body__card">
            <p>{props.id}</p>
            <p>{props.title}</p>
            <p>{props.status}</p>
            <button>Посмотреть</button>
            <button>Редактировать</button>
        </div>
    );
};

export default Card;