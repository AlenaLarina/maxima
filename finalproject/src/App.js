import './App.css';
import Card from "./components/Card";
import "./components/bug.png"
import {cards} from "./db";

function App() {

  return (
    <div className="body">
        <header className="body__header">
            <img src="./components/bug.png" alt='bug'/>
            <h1>BUGBUZZ</h1>
            <a href="#">Сообщить о проблеме</a>
            <a href="#">Войти</a>
        </header>
        <main className="body__main">
            <h2>Заведенные дефекты</h2>
            <button>+</button>
            {cards.map((card)=>{
                return (
                    <Card key={card.id} id={card.id} title={card.title} status={card.status}/>
                )
            })}
        </main>
    </div>
  );
}

export default App;