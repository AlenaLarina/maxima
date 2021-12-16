import React from "react";
import Logo from "./bug.png";
import Main from "../pages/Main";

const Header = () => {
    return (
        <header className='body__header'>
            <nav className='body__nav'>
                <ul>
                    <li><a href={<Main />}><img src={Logo} alt='bug' className='body__logo'/></a></li>
                    <li><h1 className='body__title'>BUGBUZZ</h1></li>
                </ul>
                <ul>
                    <li><a href="#">Сообщить о проблеме</a> </li>
                    <li><a href="#" className='body__auth-button'>Войти</a> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;