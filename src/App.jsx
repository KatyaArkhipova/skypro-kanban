import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        
        <Header />
        <Main />

        {/* pop-up start*/}
        
        <div className="pop-exit" id="popExit">
          <div className="pop-exit__container">
            <div className="pop-exit__block">
              <div className="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
              </div>
              <form className="pop-exit__form" id="formExit" action="#">
                <div className="pop-exit__form-group">
                  <button className="pop-exit__exit-yes _hover01" id="exitYes">
                    <a href="modal/signin.html">Да, выйти</a>
                  </button>
                  <button className="pop-exit__exit-no _hover03" id="exitNo">
                    <a href="main.html">Нет, остаться</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="pop-new-card" id="popNewCard">
          <div className="pop-new-card__container">
            <div className="pop-new-card__block">
              <div className="pop-new-card__content">
                <h3 className="pop-new-card__ttl">Создание задачи</h3>
                <a href="#" className="pop-new-card__close">&#10006;</a>
                <div className="pop-new-card__wrap">
                  <form className="pop-new-card__form form-new" id="formNewCard" action="#">
                    <div className="form-new__block">
                      <label htmlFor="formTitle" className="subttl">Название задачи</label>
                      <input
                        className="form-new__input"
                        type="text"
                        name="name"
                        id="formTitle"
                        placeholder="Введите название задачи..."
                        autoFocus
                      />
                    </div>
                    <div className="form-new__block">
                      <label htmlFor="textArea" className="subttl">Описание задачи</label>
                      <textarea
                        className="form-new__area"
                        name="text"
                        id="textArea"
                        placeholder="Введите описание задачи..."
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
        </div>

        
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

      </div>

      
      {/*<script src="/js/script.js"></script>*/}
    </>
  );
}

export default App;