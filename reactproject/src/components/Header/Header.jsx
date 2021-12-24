import React, {useContext} from "react";
import Logo from "../../images/bug.png";
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../../App";

const Header = () => {
    let navigate = useNavigate();
    const {isAuth, setIsAuth} = useContext(AppContext)
    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul>
                    <li><Link to="/"><img src={Logo} alt='bug' className='header__logo'/></Link></li>
                    <li><h1 className='header__title'>BUGBUZZ</h1></li>
                </ul>
                <ul>
                    <li>
                        {!isAuth && <Link to="/feedback">Сообщить о проблеме</Link>}
                        {isAuth && <Link to="/feedback">Проблемы</Link>}
                    </li>

                    <li>
                        {!isAuth && <button onClick={()=>navigate('/auth')} className='header__auth-button'>Войти</button>}
                        {isAuth && <button onClick={()=> setIsAuth(false)} className='header__auth-button'>Выйти</button>}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;