// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Preloader from "./components/Preloader/Preloader.tsx";
import SignupModal from "./components/Register/Register";
import LoginModal from "./components/Login/Login";

import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading && <Preloader />}
      <Register open={showRegister} onClose={() => setShowRegister(false)} />
      <Login open={showLogin} onClose={() => setShowLogin(false)} />

      <Routes>
        <Route
          path="/"
          element={<Layout onSignup={() => setShowSignup(true)} onLogin={() => setShowLogin(true)} />}
        >
          <Route index element={<HomePage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;