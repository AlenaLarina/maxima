import React, {useContext} from "react";
import Cards from "../components/Cards/Cards";
import {AppContext} from "../App";
import {Link, useNavigate,} from "react-router-dom";

const Main = () => {

    const {details, isAuth} = useContext(AppContext)
    let navigate = useNavigate();
    return (
        <main className="body__main">
            <h1 className="body__description">Заведенные дефекты</h1>
            {details.map((cards)=>{
                return (
                    <Cards key={cards.id} cards={cards}/>
                )
            })}
            {isAuth && <button onClick={()=>navigate("/create")}  className="body__button">Создать</button>}
        </main>

    )
}

export default Main;