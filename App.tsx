import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

type ViewState = 'landing' | 'contact' | 'login' | 'signup';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check for persistent login token on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigateToHome();
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigateToHome();
  };

  const navigateToContact = () => {
    window.scrollTo(0, 0);
    setCurrentView('contact');
  };

  const navigateToHome = () => {
    window.scrollTo(0, 0);
    setCurrentView('landing');
  };

  const navigateToLogin = () => {
    window.scrollTo(0, 0);
    setCurrentView('login');
  };

  const navigateToSignup = () => {
    window.scrollTo(0, 0);
    setCurrentView('signup');
  };

  const renderView = () => {
    switch (currentView) {
      case 'contact':
        return <ContactSection onBack={navigateToHome} />;
      case 'login':
        return <LoginPage onBack={navigateToHome} onSignupClick={navigateToSignup} onLoginSuccess={handleLoginSuccess} />;
      case 'signup':
        return <SignupPage onBack={navigateToHome} onLoginClick={navigateToLogin} />;
      case 'landing':
      default:
        return (
          <>
            <Navbar
              onContactClick={navigateToContact}
              onLoginClick={navigateToLogin}
              onSignupClick={navigateToSignup}
              isLoggedIn={isLoggedIn}
              onLogoutClick={handleLogout}
            />
            <main>
              <Hero />
              <Features />
              <HowItWorks />
              <Testimonials />

              <CTASection />
            </main>
            <Footer onContactClick={navigateToContact} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      {renderView()}
    </div>
  );
};

export default App;