// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Login from "./components/LoginPage/Login";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <>
              <main>
                <section className="login container">
                  <h1>Ошибка 404</h1>
                  <h2>К сожалению страница не найдена..</h2>
                </section>
              </main>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
