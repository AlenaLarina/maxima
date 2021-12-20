import React, {useContext} from "react";
import {cards} from "../components/db";
import Cards from "../components/Cards/Cards";
import {AppContext} from "../App";
import {Link, useNavigate,} from "react-router-dom";

const Main = () => {
    const {details} = useContext(AppContext)
    let navigate = useNavigate();
    return (
        <main className="body__main">
            <h2 className="body__description">Заведенные дефекты</h2>
            {details.map((cards)=>{
                return (
                    <Cards key={cards.id} cards={cards}/>
                )
            })}
            <button onClick={()=>navigate("/create")}  className="body__button">Создать</button>
        </main>

    )
}

export default Main;