import React from "react";
import Logo from "../../images/bug.png";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();
    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul>
                    <li><Link to="/"><img src={Logo} alt='bug' className='header__logo'/></Link></li>
                    <li><h1 className='header__title'>BUGBUZZ</h1></li>
                </ul>
                <ul>
                    <li><a href="#">Сообщить о проблеме</a> </li>
                    <li><button onClick={()=>navigate('/auth')} className='header__auth-button'>Войти</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;