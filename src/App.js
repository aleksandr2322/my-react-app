
// // src/App.js
// import React, { useState } from 'react';
// import Layout from './components/Layout/Layout';
// import HeroSection from './components/HeroSection/HeroSection';
// import Slider from './components/Slider/Slider';
// import Testimonial from './components/Testimonial/Testimonial';
// import Features from './components/Features/Features';
// import ConnectSection from './components/ConnectSection/ConnectSection';
// import CTASection from './components/CTASection/CTASection';
// import LoginModal from './components/Modals/LoginModal';
// import RegisterModal from './components/Modals/RegisterModal';
// import Preloader from './components/Preloader/Preloader';
// import './assets/styles/global.css';

// function App() {
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

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
//           <HeroSection onJoinNowClick={() => setShowRegisterModal(true)} />
//           <Slider />
//           <Testimonial />
//           <Features />
//           <ConnectSection />
//           <CTASection />
          
//           {showLoginModal && (
//             <LoginModal onClose={() => setShowLoginModal(false)} />
//           )}
//           {showRegisterModal && (
//             <RegisterModal onClose={() => setShowRegisterModal(false)} />
//           )}
//         </Layout>
//       )}
//     </>
//   );
// }

// export default App;
import Layout from './components/Layout/Layout'
import HeroSection from './components/HeroSection/HeroSection'
// ... другие импорты

function App() {
  return (
    <Layout>
      <HeroSection />
      {/* остальные компоненты */}
    </Layout>
  )
}
