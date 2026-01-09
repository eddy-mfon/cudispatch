import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';

interface NavbarProps {
  onContactClick?: () => void;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
  isLoggedIn?: boolean;
  onLogoutClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onContactClick,
  onLoginClick,
  onSignupClick,
  isLoggedIn = false,
  onLogoutClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] py-3'
        : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl font-extrabold text-gray-900 tracking-tight group-hover:text-black transition-colors">CU Dispatch</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-black text-sm font-bold transition-all hover:scale-105">Home</a>
            <a href="#features" className="text-gray-600 hover:text-black text-sm font-bold transition-all hover:scale-105">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-black text-sm font-bold transition-all hover:scale-105">Testimonials</a>
            <button onClick={onContactClick} className="text-gray-600 hover:text-black text-sm font-bold transition-all hover:scale-105 bg-transparent border-none cursor-pointer">Contact</button>

            <div className="flex items-center space-x-4 ml-4">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded border border-gray-200 hover:bg-white hover:border-gray-300 transition-all cursor-default shadow-sm">
                    <User size={16} className="text-gray-600" />
                    <span className="text-sm font-bold text-gray-900">Hi, Student</span>
                  </div>
                  <button onClick={onLogoutClick} className="text-gray-500 hover:text-red-600 text-sm font-bold transition-colors bg-transparent border-none cursor-pointer">
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <button onClick={onLoginClick} className="text-gray-900 hover:text-black text-sm font-bold transition-colors bg-transparent border-none cursor-pointer hover:underline underline-offset-4">
                    Log In
                  </button>
                  <button onClick={onSignupClick} className="bg-black text-white px-5 py-2.5 rounded text-sm font-bold hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer border border-black active:scale-95">
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-none hover:bg-gray-100 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 absolute w-full shadow-xl animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#" className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-none text-base font-semibold transition-colors">Home</a>
            <a href="#features" className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-none text-base font-semibold transition-colors">Features</a>
            <a href="#testimonials" className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-none text-base font-semibold transition-colors">Testimonials</a>
            <button onClick={() => { onContactClick?.(); setIsOpen(false); }} className="block w-full text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-none text-base font-semibold transition-colors">Contact</button>
            <div className="border-t border-gray-100 my-2 pt-2">
              {isLoggedIn ? (
                <>
                  <div className="px-4 py-2 text-sm font-bold text-gray-900 flex items-center gap-2">
                    <User size={16} /> Hi, Student
                  </div>
                  <button onClick={() => { onLogoutClick?.(); setIsOpen(false); }} className="block w-full text-left text-red-600 hover:bg-red-50 px-4 py-3 rounded-none text-base font-bold transition-colors">Log Out</button>
                </>
              ) : (
                <>
                  <button onClick={() => { onLoginClick?.(); setIsOpen(false); }} className="block w-full text-center text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-none text-base font-bold transition-colors">Log In</button>
                  <button onClick={() => { onSignupClick?.(); setIsOpen(false); }} className="block w-full text-center bg-black text-white px-4 py-3 rounded-none text-base font-bold mt-2 hover:bg-gray-800 transition-colors">Sign Up</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;