import React, {useContext, useState} from "react";
import {users} from "../database/users";
import {AppContext} from "../App";
import {useNavigate} from "react-router-dom";
import GetFeedback from "../components/GetFeedback";
import Back from "../components/Back";

const Auth = () => {
    let navigate = useNavigate();
    const {isAuth, setIsAuth} = useContext(AppContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    if (!isAuth) {
        return (
            <div>
                <Back/>
                <div className="form">
                    <form className="form__body" onSubmit={submitAuth}>
                        <h1 className="form__title">Авторизация</h1>
                        <div className="form__block">
                            <label htmlFor="input-login" className="form__label">Логин</label>
                            <input required
                                   value={login}
                                   onChange={(e) => setLogin(e.target.value)}
                                   type="text" id="input-login" className="form__input"
                                   placeholder="Введите логин"/>
                        </div>
                        <div className="form__block">
                            <label htmlFor="input-pass" className="form__label">Пароль</label>
                            <input required
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   type="password" id="input-pass" className="form__input"
                                   placeholder="Введите пароль"/>
                        </div>
                        <button type="submit" className="form__button">Войти</button>
                    </form>
                </div>
            </div>
        )
    }

    function submitAuth(e) {
        e.preventDefault()
        const currentUser = users.find(item => item.login === login)

        if (!currentUser) {
            return alert('Неверный логин или пароль')
        }
        if (currentUser.password !== password) {
            return alert('Неверный логин или пароль')
        }

        alert('Добро пожаловать!')
        setLogin('')
        setPassword('')
        setIsAuth(true)

        const comment = localStorage.getItem('comment')
        if (!comment) {
            return navigate('/')
        }
    }

    return (
        <GetFeedback/>
    )

}

export default Auth;