import React, { useState } from 'react';
import { ChevronLeft, Phone, Loader2 } from 'lucide-react';
import { ContactStatus } from '../types';
import { GoogleGenAI } from '@google/genai';

interface ContactSectionProps {
  onBack?: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    message: '' 
  });
  const [status, setStatus] = useState<ContactStatus>(ContactStatus.IDLE);
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear specific field error on change
    if (fieldErrors[e.target.name]) {
        setFieldErrors(prev => ({ ...prev, [e.target.name]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(ContactStatus.SUBMITTING);
    setFieldErrors({});

    // Validation
    const errors: Record<string, boolean> = {};
    if (!formData.name) errors.name = true;
    if (!formData.phone) errors.phone = true;
    if (!formData.email) errors.email = true;
    if (!formData.message) errors.message = true;

    if (Object.keys(errors).length > 0) {
        setFieldErrors(errors);
        setStatus(ContactStatus.ERROR);
        return;
    }

    try {
        // Integrate Gemini to "analyze" the support request
        if (process.env.API_KEY) {
             const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
             await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: `Analyze this support ticket sentiment strictly in one word (Positive/Neutral/Negative): ${formData.message}`
             });
        }
        
        // Simulate network delay
        setTimeout(() => {
            setStatus(ContactStatus.SUCCESS);
            setFormData({ name: '', phone: '', email: '', message: '' });
            // Reset status after a few seconds
            setTimeout(() => setStatus(ContactStatus.IDLE), 3000);
        }, 1500);

    } catch (error) {
        console.error("Submission error", error);
        setStatus(ContactStatus.ERROR);
    }
  };

  const getInputClass = (fieldName: string) => {
    const baseClass = "w-full border-b py-3 outline-none transition-colors bg-transparent";
    const normalClass = "border-gray-300 focus:border-black text-gray-900 placeholder-gray-400";
    const errorClass = "border-red-400 text-red-500 placeholder-red-300";
    
    return `${baseClass} ${fieldErrors[fieldName] ? errorClass : normalClass}`;
  };

  const getLabelClass = (fieldName: string) => {
      return `text-xs font-bold uppercase tracking-wider mb-1 block ${fieldErrors[fieldName] ? 'text-red-500' : 'text-gray-900'}`;
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans">
        
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-20 relative flex flex-col">
            {/* Back Button */}
            <button 
                onClick={onBack} 
                className="absolute top-8 left-8 p-2 rounded-none hover:bg-gray-100 transition-colors"
                aria-label="Go back"
            >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
                <h1 className="text-3xl font-extrabold text-center mb-12 tracking-tight text-black">Contact Us</h1>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className={getLabelClass('name')}>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={getInputClass('name')}
                            disabled={status === ContactStatus.SUBMITTING}
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone" className={getLabelClass('phone')}>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={getInputClass('phone')}
                            disabled={status === ContactStatus.SUBMITTING}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className={getLabelClass('email')}>E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={getInputClass('email')}
                            disabled={status === ContactStatus.SUBMITTING}
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className={getLabelClass('message')}>What would you like to say?</label>
                        <textarea
                            name="message"
                            rows={2}
                            value={formData.message}
                            onChange={handleChange}
                            className={`${getInputClass('message')} resize-none`}
                            disabled={status === ContactStatus.SUBMITTING}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === ContactStatus.SUBMITTING}
                        className="w-full bg-[#1A1A1A] text-white font-extrabold tracking-tight py-4 mt-4 hover:bg-black transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-none flex items-center justify-center"
                    >
                        {status === ContactStatus.SUBMITTING ? (
                            <>
                                <Loader2 className="animate-spin mr-2 w-5 h-5" />
                                Sending...
                            </>
                        ) : 'Send'}
                    </button>

                    {/* Status Messages */}
                    {status === ContactStatus.ERROR && (
                        <div className="bg-red-100 text-red-500 px-4 py-3 text-center text-sm font-semibold rounded-none">
                            Something went wrong!
                        </div>
                    )}
                    {status === ContactStatus.SUCCESS && (
                         <div className="bg-green-100 text-green-600 px-4 py-3 text-center text-sm font-semibold rounded-none">
                            Sent Successfully!
                        </div>
                    )}
                </form>
            </div>
        </div>

        {/* Right Side - Black Pane */}
        <div className="hidden md:flex w-1/2 bg-[#050505] p-12 lg:p-20 flex-col justify-center relative overflow-hidden">
            {/* Icon Top Right */}
            <div className="absolute top-12 right-12">
                <div className="relative">
                     <Phone className="w-16 h-16 text-white" strokeWidth={1.5} />
                     <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-blue-400 rounded-tr-lg"></div>
                     <div className="absolute bottom-2 left-2 w-2 h-2 bg-white rounded-full"></div>
                </div>
            </div>

            <div className="max-w-lg">
                <h2 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                    Feel free to reach out!
                </h2>
                <p className="text-gray-400 text-sm tracking-wide">
                    Tell us a little about your problem and we will get back to you shortly.
                </p>
            </div>
        </div>

    </div>
  );
};

export default ContactSection;