import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
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
      switch(currentView) {
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
                    
                    {/* Call to Action Pre-footer area */}
                    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
                        {/* Decorative Star Graphic - Top Right */}
                        <div className="absolute top-0 right-0 pointer-events-none z-0 animate-pulse-slow">
                             <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FDFD96] fill-current transform translate-x-1/4 -translate-y-1/4 w-48 h-48 md:w-64 md:h-64">
                                <path d="M120 0L148.5 91.5L240 120L148.5 148.5L120 240L91.5 148.5L0 120L91.5 91.5L120 0Z" />
                             </svg>
                        </div>

                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-slide-up opacity-0">
                            <h2 className="text-4xl md:text-6xl font-extrabold text-[#1A1A1A] tracking-tight mb-6 leading-[1.15]">
                                Ready to streamline your <br />
                                <span className="text-[#A3B8D6]">Campus Experience?</span>
                            </h2>
                            <p className="text-gray-500 text-sm md:text-base font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                                Join the plethora of students who always stay up to date. From timetables, to easy communication to important updates, we got you covered.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                                 {isLoggedIn ? (
                                     <button className="bg-[#1A1A1A] text-white px-8 py-3.5 text-sm font-bold hover:bg-black transition-all rounded-none min-w-[140px] border border-[#1A1A1A] hover:shadow-lg hover:-translate-y-1">
                                        Go to Dashboard
                                    </button>
                                 ) : (
                                    <button onClick={navigateToSignup} className="bg-[#1A1A1A] text-white px-8 py-3.5 text-sm font-bold hover:bg-black transition-all rounded-none min-w-[140px] border border-[#1A1A1A] hover:shadow-lg hover:-translate-y-1">
                                        Get a Demo
                                    </button>
                                 )}
                                <button onClick={navigateToContact} className="bg-white text-[#1A1A1A] border border-[#E5E5E5] px-8 py-3.5 text-sm font-bold hover:border-[#1A1A1A] transition-all rounded-none min-w-[140px] hover:shadow-md hover:-translate-y-1">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </section>
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