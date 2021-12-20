import './App.css';
import './components/Header/Header.css'
import './components/Auth.css'
import './components/Cards/Cards.css'
import './components/Card.css'
import Header from "./components/Header/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Card from "./pages/Card";

import {createContext, useEffect, useState} from "react";
import {cards} from "./components/db";
import Create from "./pages/Create";


export const AppContext = createContext(null)

function App() {

    const [details,setDetails] = useState([])

    useEffect(()=> {
        const response = cards
        setDetails(response)
    }, [])

    if (details.length === 0) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <AppContext.Provider value={{details, setDetails}}>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                    <Route path="/card/:id" element={<Card/>}/>
                    <Route path="/create" element={<Create/>}/>
                    <Route path="*" element={<Navigate to='/'/>}/>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
