import React, { useState } from 'react';
import { ChevronLeft, Sparkles, ArrowRight, Loader2, AlertCircle, Check, X } from 'lucide-react';

interface SignupPageProps {
  onBack: () => void;
  onLoginClick: () => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onBack, onLoginClick }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (pass: string) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length > 5) score += 1; // Length check
    if (pass.length > 9) score += 1; // Length bonus
    if (/[A-Z]/.test(pass)) score += 1; // Uppercase
    if (/[0-9]/.test(pass) || /[^A-Za-z0-9]/.test(pass)) score += 1; // Number or Symbol
    return Math.min(score, 4);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'password') {
        setPasswordStrength(calculatePasswordStrength(value));
    }
    
    // Clear specific field error on change
    if (errors[name]) {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
        });
    }
  };

  const validateForm = () => {
      const newErrors: Record<string, string> = {};
      let isValid = true;

      // Name Validation
      if (!formData.name.trim()) {
          newErrors.name = "Please enter your full name.";
          isValid = false;
      }

      // Email Validation
      const studentEmailRegex = /^[a-zA-Z0-9._%+-]+@stu\.cu\.edu\.ng$/;
      if (!formData.email) {
          newErrors.email = "Email address is required.";
          isValid = false;
      } else if (!studentEmailRegex.test(formData.email)) {
          newErrors.email = "Please use your student email (@stu.cu.edu.ng).";
          isValid = false;
      }

      // Password Validation
      if (!formData.password) {
          newErrors.password = "Password is required.";
          isValid = false;
      } else if (formData.password.length < 8) {
          newErrors.password = "Password must be at least 8 characters long.";
          isValid = false;
      }

      // Terms Validation
      if (!termsAccepted) {
          newErrors.terms = "You must accept the Terms and Conditions.";
          isValid = false;
      }

      setErrors(newErrors);
      return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
        setIsLoading(true);
        // Simulate network delay
        setTimeout(() => {
            console.log('Signup attempt', formData);
            setIsLoading(false);
            onLoginClick(); 
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
          <h1 className="text-3xl font-extrabold text-center mb-2 tracking-tight text-black">Create Account</h1>
          <p className="text-center text-gray-500 mb-10 font-medium">Start your journey with CU Dispatch today.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label className={`text-xs font-bold uppercase tracking-wider mb-2 block transition-colors ${errors.name ? 'text-red-500' : 'text-gray-900'}`}>Full Name</label>
              <div className="relative">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border-b py-3 outline-none transition-all bg-transparent text-lg ${
                        errors.name ? 'border-red-500 placeholder-red-300' : 'border-gray-300 focus:border-black placeholder-gray-300'
                    }`}
                    placeholder="John Doe"
                    disabled={isLoading}
                />
                {errors.name && <AlertCircle className="absolute right-0 top-3 text-red-500 w-5 h-5 animate-pulse" />}
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
            </div>

            <div className="group">
              <label className={`text-xs font-bold uppercase tracking-wider mb-2 block transition-colors ${errors.email ? 'text-red-500' : 'text-gray-900'}`}>Email</label>
              <div className="relative">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border-b py-3 outline-none transition-all bg-transparent text-lg ${
                        errors.email ? 'border-red-500 placeholder-red-300' : 'border-gray-300 focus:border-black placeholder-gray-300'
                    }`}
                    placeholder="student@stu.cu.edu.ng"
                    disabled={isLoading}
                />
                 {errors.email && <AlertCircle className="absolute right-0 top-3 text-red-500 w-5 h-5 animate-pulse" />}
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
            </div>

            <div className="group">
              <label className={`text-xs font-bold uppercase tracking-wider mb-2 block transition-colors ${errors.password ? 'text-red-500' : 'text-gray-900'}`}>Password</label>
              <div className="relative">
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full border-b py-3 outline-none transition-all bg-transparent text-lg ${
                        errors.password ? 'border-red-500 placeholder-red-300' : 'border-gray-300 focus:border-black placeholder-gray-300'
                    }`}
                    placeholder="Create a strong password"
                    disabled={isLoading}
                />
              </div>
              
              {/* Password Strength Indicator */}
              <div className="mt-2 flex items-center space-x-1">
                  <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${passwordStrength >= 1 ? (passwordStrength === 1 ? 'bg-red-500' : passwordStrength === 2 ? 'bg-orange-500' : passwordStrength === 3 ? 'bg-yellow-500' : 'bg-green-500') : 'bg-gray-200'}`}></div>
                  <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${passwordStrength >= 2 ? (passwordStrength === 2 ? 'bg-orange-500' : passwordStrength === 3 ? 'bg-yellow-500' : 'bg-green-500') : 'bg-gray-200'}`}></div>
                  <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${passwordStrength >= 3 ? (passwordStrength === 3 ? 'bg-yellow-500' : 'bg-green-500') : 'bg-gray-200'}`}></div>
                  <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${passwordStrength >= 4 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
              </div>
              <div className="flex justify-between mt-1">
                {errors.password ? (
                    <p className="text-red-500 text-xs font-medium">{errors.password}</p>
                ) : (
                    <p className="text-gray-400 text-xs">Min. 8 chars, mix of symbols/numbers recommended.</p>
                )}
                {formData.password && (
                    <span className={`text-xs font-bold ${
                        passwordStrength < 2 ? 'text-red-500' : 
                        passwordStrength < 4 ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                        {passwordStrength < 2 ? 'Weak' : passwordStrength < 4 ? 'Medium' : 'Strong'}
                    </span>
                )}
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="pt-2">
                <label className="flex items-start space-x-3 cursor-pointer group">
                    <div className="relative flex items-center">
                        <input 
                            type="checkbox" 
                            checked={termsAccepted}
                            onChange={(e) => {
                                setTermsAccepted(e.target.checked);
                                if (e.target.checked && errors.terms) {
                                    setErrors(prev => ({...prev, terms: ''}));
                                }
                            }}
                            className="peer appearance-none w-5 h-5 border border-gray-300 rounded-none checked:bg-black checked:border-black transition-colors" 
                            disabled={isLoading}
                        />
                         <Check className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                    <span className={`text-sm leading-tight transition-colors ${errors.terms ? 'text-red-500' : 'text-gray-500 group-hover:text-gray-900'}`}>
                        I agree to the <a href="#" className="underline font-bold text-black hover:text-gray-600">Terms and Conditions</a> and <a href="#" className="underline font-bold text-black hover:text-gray-600">Privacy Policy</a>.
                    </span>
                </label>
                {errors.terms && <p className="text-red-500 text-xs mt-1 ml-8 font-medium">{errors.terms}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1A1A1A] text-white font-extrabold tracking-tight py-5 mt-8 hover:bg-black transition-all duration-300 rounded-none flex items-center justify-center group shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                  <>
                     <Loader2 className="animate-spin mr-2 w-5 h-5" />
                     Creating Account...
                  </>
              ) : (
                  <>
                     Get Started
                     <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
              )}
            </button>
          </form>

          <div className="mt-10 text-center text-sm text-gray-500 font-medium">
            Already have an account?{' '}
            <button onClick={onLoginClick} className="font-bold text-black hover:text-gray-700 transition-colors ml-1" disabled={isLoading}>
              Log in instead
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Black Pane */}
      <div className="hidden md:flex w-1/2 bg-[#050505] p-12 lg:p-20 flex-col justify-center relative overflow-hidden">
        <div className="absolute top-12 right-12 animate-fade-in delay-100">
            <div className="relative group">
                 <Sparkles className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                 <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-purple-400 rounded-tr-lg"></div>
            </div>
        </div>

        <div className="max-w-lg z-10 animate-fade-in delay-200">
            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
                Join the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">community.</span>
            </h2>
            <p className="text-gray-400 text-base tracking-wide leading-relaxed border-l-2 border-white/20 pl-6">
                Connect with thousands of other students. Never miss a class, announcement, or event again. It starts here.
            </p>
        </div>
        
         {/* Abstract decoration */}
         <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-[50px]"></div>
      </div>
    </div>
  );
};

export default SignupPage;