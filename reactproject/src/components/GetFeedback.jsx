import React from 'react';
import Back from "./Back";

const GetFeedback = () => {

    const comment = localStorage.getItem('comment')

    if (!comment) {
        return (
            <div className="form">
                <h1 className="form__title">Проблем нет!</h1>
            </div>
        )
    }

    const {email, feedback} = JSON.parse(comment)
    return (
        <div>
            <Back/>
            <div className="form">
                <form className="form__body">
                    <h1 className="form__title">Сообщения о проблемах</h1>
                    <p className="form__input">{email}</p>
                    <p className="form__input">{feedback}</p>
                </form>
            </div>
        </div>
    )
}

export default GetFeedback;