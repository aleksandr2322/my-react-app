import React, { useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Slider from '../components/Slider/Slider';
import Testimonial from '../components/Testimonial/Testimonial';
import Features from '../components/Features/Features';
import ConnectSection from '../components/ConnectSection/ConnectSection';
import CTASection from '../components/CTASection/CTASection';
import LoginModal from '../components/Modals/LoginModal';
import RegisterModal from '../components/Modals/RegisterModal';

const HomePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <>
      <HeroSection onJoinNowClick={() => setShowRegisterModal(true)} />
      <Slider />
      <Testimonial />
      <Features />
      <ConnectSection />
      <CTASection onJoinNowClick={() => setShowRegisterModal(true)} />
      
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
      
      {showRegisterModal && (
        <RegisterModal onClose={() => setShowRegisterModal(false)} />
      )}
    </>
  );
};

export default HomePage;