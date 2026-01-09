import React, { useState, useEffect } from 'react';
import { ChevronLeft, KeyRound, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

interface LoginPageProps {
  onBack: () => void;
  onSignupClick: () => void;
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack, onSignupClick, onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  useEffect(() => {
    // Check if there is a remembered email (optional UX enhancement)
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
        setFormData(prev => ({ ...prev, email: savedEmail }));
        setRememberMe(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear specific field error on change
    if (errors[name as keyof typeof errors]) {
        setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRememberMe(e.target.checked);
  };

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    let isValid = true;

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Password Validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
        setIsLoading(true);
        
        // Simulate network request
        setTimeout(() => {
            if (rememberMe) {
                // Set a persistent token for 'Remember Me' functionality
                localStorage.setItem('authToken', 'demo-token-xyz-123');
                localStorage.setItem('rememberedEmail', formData.email);
            } else {
                localStorage.removeItem('rememberedEmail');
                // For session-only login, we might still set a token but handle it differently.
                 localStorage.setItem('authToken', 'demo-token-session-123');
            }
            
            console.log('Login successful', formData);
            setIsLoading(false);
            onLoginSuccess();
        }, 1500);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans animate-fade-in">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-20 relative flex flex-col">
        <button
          onClick={onBack}
          className="absolute top-8 left-8 p-2 rounded-none hover:bg-gray-100 transition-colors group flex items-center gap-2"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-black" />
          <span className="text-sm font-bold text-gray-600 group-hover:text-black">Back</span>
        </button>

        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          <h1 className="text-3xl font-extrabold text-center mb-2 tracking-tight text-black">Welcome Back</h1>
          <p className="text-center text-gray-500 mb-12 font-medium">Please enter your details to sign in.</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="group">
              <label className={`text-xs font-bold uppercase tracking-wider mb-2 block transition-colors ${errors.email ? 'text-red-500' : 'text-gray-900 group-focus-within:text-black'}`}>
                Email
              </label>
              <div className="relative">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border-b py-3 outline-none transition-all bg-transparent text-lg pr-8 ${
                        errors.email 
                        ? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500' 
                        : 'border-gray-300 focus:border-black text-gray-900 placeholder-gray-300'
                    }`}
                    placeholder="student@stu.cu.edu.ng"
                    disabled={isLoading}
                />
                {errors.email && (
                    <div className="absolute right-0 top-3 text-red-500 animate-pulse">
                        <AlertCircle size={20} />
                    </div>
                )}
              </div>
              {errors.email && (
                  <p className="text-red-500 text-xs mt-2 font-medium flex items-center animate-fade-in">
                      {errors.email}
                  </p>
              )}
            </div>

            <div className="group">
              <label className={`text-xs font-bold uppercase tracking-wider mb-2 block transition-colors ${errors.password ? 'text-red-500' : 'text-gray-900 group-focus-within:text-black'}`}>
                Password
              </label>
              <div className="relative">
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full border-b py-3 outline-none transition-all bg-transparent text-lg pr-8 ${
                        errors.password 
                        ? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500' 
                        : 'border-gray-300 focus:border-black text-gray-900 placeholder-gray-300'
                    }`}
                    placeholder="••••••••"
                    disabled={isLoading}
                />
                 {errors.password && (
                    <div className="absolute right-0 top-3 text-red-500 animate-pulse">
                        <AlertCircle size={20} />
                    </div>
                )}
              </div>
              {errors.password && (
                  <p className="text-red-500 text-xs mt-2 font-medium flex items-center animate-fade-in">
                      {errors.password}
                  </p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm pt-2">
                <label className="flex items-center space-x-2 cursor-pointer group">
                    <input 
                        type="checkbox" 
                        checked={rememberMe}
                        onChange={handleCheckboxChange}
                        className="accent-black w-4 h-4 rounded-none border-gray-300 focus:ring-0" 
                        disabled={isLoading}
                    />
                    <span className="text-gray-500 font-medium group-hover:text-gray-900 transition-colors">Remember me</span>
                </label>
                <button type="button" className="font-bold text-gray-900 hover:text-gray-600 transition-colors" disabled={isLoading}>Forgot password?</button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1A1A1A] text-white font-extrabold tracking-tight py-5 mt-8 hover:bg-black transition-all duration-300 rounded-none flex items-center justify-center group shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 w-5 h-5" />
                    Signing In...
                  </>
              ) : (
                  <>
                    Sign In
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
              )}
            </button>
          </form>

          <div className="mt-10 text-center text-sm text-gray-500 font-medium">
            Don't have an account?{' '}
            <button onClick={onSignupClick} className="font-bold text-black hover:text-gray-700 transition-colors ml-1" disabled={isLoading}>
              Sign up for free
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Black Pane */}
      <div className="hidden md:flex w-1/2 bg-[#050505] p-12 lg:p-20 flex-col justify-center relative overflow-hidden">
        <div className="absolute top-12 right-12 animate-fade-in delay-100">
            <div className="relative group">
                 <KeyRound className="w-16 h-16 text-white group-hover:rotate-12 transition-transform duration-500" strokeWidth={1.5} />
                 <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-yellow-200 rounded-tr-lg"></div>
            </div>
        </div>

        <div className="max-w-lg z-10 animate-fade-in delay-200">
            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
                Access your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">dashboard.</span>
            </h2>
            <p className="text-gray-400 text-base tracking-wide leading-relaxed border-l-2 border-white/20 pl-6">
                Stay updated with your personalized schedule, announcements, and resources all in one place. Welcome back to efficiency.
            </p>
        </div>
        
        {/* Abstract decoration */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] transform translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default LoginPage;