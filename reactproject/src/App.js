import './App.css';
import './components/Header/Header.css'
import './components/Form.css'
import './components/Cards/Cards.css'
import './components/Card.css'
import './components/Create.css'
import Header from "./components/Header/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Card from "./pages/Card";
import Feedback from "./pages/Feedback";
import {createContext, useEffect, useState} from "react";
import {cards} from "./database/db";
import Create from "./pages/Create";

export const AppContext = createContext(null)

function App() {

    const [details,setDetails] = useState([])
    const [isAuth, setIsAuth] = useState(false)
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
        <AppContext.Provider value={{details, setDetails, isAuth, setIsAuth}}>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/feedback" element={<Feedback />}/>
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
