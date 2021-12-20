import React, {useContext} from 'react';

const Create = () => {
    return (
        <div className="card">
            {/*<input className="card__id"></input>*/}
            <input type="text" className="card__title" />
            <input className="card__status" />
            <input className="card__description" />
        </div>
    );
}

export default Create;