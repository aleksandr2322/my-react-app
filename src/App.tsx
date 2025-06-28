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
// import React, { useState, useEffect } from 'react';
// import Layout from './components/Layout/Layout';
// import HomePage from "./pages/HomePage";

// import '/assets/styles/global.css';
// import Preloader from './components/Preloader/Preloader';
// const App: React.FC = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
    
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {isLoading && <Preloader />}
//       {!isLoading && (
//         <Layout>
//           <HomePage />
//         </Layout>
//       )}
//     </>
//   );
// };

// export default App;