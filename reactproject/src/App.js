import './App.css';
import Header from "./components/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Navigate to='/'/>} />
        </Routes>
    </div>
);
}

export default App;
