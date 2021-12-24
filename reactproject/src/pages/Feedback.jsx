import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AppContext} from "../App";
import GetFeedback from "../components/GetFeedback";
import Back from "../components/Back";

const Feedback = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [feedback, setFeedback] = useState('')
    const {isAuth} = useContext(AppContext)


    function submitFeedback(e) {
        e.preventDefault()
        const comment = {
            email: email,
            feedback: feedback,
        }
        localStorage.setItem('comment', JSON.stringify(comment));
        alert('Спасибо за обращение!')
        setEmail('')
        setFeedback('')
        return navigate('/')
    }

    if (!isAuth) {
        return (
            <div>
                <Back/>
                <div className="form" onSubmit={submitFeedback}>
                    <form className="form__body">
                        <h1 className="form__title">Сообщите об ошибке</h1>
                        <div className="form__block">
                            <label htmlFor="input-email" className="form__label">Email</label>
                            <input required
                                   type="text" id="input-email" className="form__input"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Введите ваш email"/>
                        </div>
                        <div className="form__block">
                            <label htmlFor="input-feedback" className="form__label">Опишите проблему</label>
                            <textarea required
                                      type="text" id="input-feedback" className="form__input"
                                      value={feedback}
                                      onChange={(e) => setFeedback(e.target.value)}
                                      placeholder="Текст проблемы"/>
                        </div>
                        <button type="submit" className="form__button">Отправить</button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <GetFeedback/>
    )
}

export default Feedback;