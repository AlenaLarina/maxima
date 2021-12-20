import React from "react";

const Auth = () => {
    return (
        <div className="form">
            <form method="POST" className="form__body" onSubmit="validateForm(event)">
                <h1 className="form__title">Авторизация</h1>
                <div className="form__block">
                    <label htmlFor="input-email" className="form__label">Email</label>
                    <input type="text" id="input-email" className="form__input" placeholder="Введите email"/>
                    <span className="form__error">Ошибка</span>
                </div>
                <div className="form__block">
                    <label htmlFor="input-pass" className="form__label">Пароль</label>
                    <input type="password" id="input-pass" className="form__input" placeholder="Введите пароль"/>
                    <span className="form__error">Ошибка</span>
                </div>
                <button type="submit" className="form__button">Войти</button>
            </form>
        </div>
    )
}

export default Auth;