import React from 'react';
import {useNavigate} from "react-router-dom";

const Back = () => {
    let navigate = useNavigate();
    return(
        <div className='back'>
            <button onClick={()=>navigate('/')} className='back__button'>⇽</button>
        </div>
    )
}

export default Back;


