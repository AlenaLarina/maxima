import React from "react";
import {cards} from "../components/db";
import Card from "../components/Card";

const Main = () => {
    return (
        <main className="body__main">
            <h2 className="body__description">Заведенные дефекты</h2>
            {cards.map((card)=>{
                return (
                    <Card key={card.id} id={card.id} title={card.title} status={card.status}/>
                )
            })}
            <button className="body__button">Создать</button>
        </main>

    )
}

export default Main;