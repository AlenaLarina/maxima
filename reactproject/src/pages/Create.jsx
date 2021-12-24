import React, {useContext, useState} from 'react';
import {AppContext} from "../App";
import {useNavigate} from "react-router-dom";
import Back from "../components/Back";

const Create = () => {
    let navigate = useNavigate();
    const [titleInput, setTitleInput] = useState(AppContext)
    const [descriptionInput, setDescriptionInput] = useState(AppContext)
    const [idInput, setIdInput] = useState(AppContext)
    const {setDetails} = useContext(AppContext)

    function createCard(e) {
        e.preventDefault()

        const newCard = {
            id: idInput,
            title: titleInput,
            status: 'Открыт',
            description: descriptionInput
        }
        console.log(newCard)
        setDetails(prevState => [...prevState, newCard])
        alert('Задача успешно создана!')
        return navigate('/')
    }

    return (
        <div>
            <Back/>
            <form className="create" onSubmit={createCard}>
                <div className="create__block">
                    <label htmlFor="input-id" className="create__label">ID</label>
                    <input required
                           type="text" id="input-id" className="create__input"
                           onChange={(e) => setIdInput(e.target.value)}/>
                </div>
                <div className="create__block">
                    <label htmlFor="input-title" className="create__label">Заголовок</label>
                    <input required
                           type="text" id="input-title" className="create__input"
                           onChange={(e) => setTitleInput(e.target.value)}/>
                </div>
                <div className="create__block">
                    <label htmlFor="input-description" className="create__label">Описание</label>
                    <textarea required
                              type="text" id="input-description" className="create__input"
                              onChange={(e) => setDescriptionInput(e.target.value)}></textarea>
                </div>
                <button type="submit" className="body__button">Создать</button>
            </form>
        </div>
    );
}

export default Create;