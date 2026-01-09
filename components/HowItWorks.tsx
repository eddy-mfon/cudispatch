import React from 'react';
import { Rocket, ArrowRight, UserPlus, LayoutDashboard, Bell, CheckCircle } from 'lucide-react';
import BackgroundPattern from './BackgroundPattern';

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
            <BackgroundPattern className="text-white" />
            {/* Decorative Rocket (Top Right) */}
            <div className="absolute top-10 right-0 p-4 opacity-100 hidden lg:block animate-float">
                <div className="relative w-48 h-48">
                    <Rocket className="w-full h-full text-white/5 -rotate-45" strokeWidth={1.5} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cu-yellow rounded-full blur-[100px] opacity-20 animate-pulse-slow"></div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mb-24 md:mb-32 animate-slide-up opacity-0">
                    <div className="inline-flex items-center space-x-2 mb-4">
                        <div className="w-2 h-2 bg-cu-accent rounded-full animate-pulse"></div>
                        <span className="text-cu-accent font-medium text-sm tracking-wide uppercase">Onboarding Process</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
                        Getting started is <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFD96] to-white">easy as pie!</span>
                    </h2>
                </div>

                {/* Steps Container */}
                <div className="relative space-y-24 md:space-y-32">

                    {/* Connecting Dashed Line (SVG) - Absolute positioned behind content */}
                    <div className="absolute inset-0 pointer-events-none hidden md:block z-0 opacity-50">
                        <svg className="w-full h-full" viewBox="0 0 1000 1200" fill="none" preserveAspectRatio="none">
                            {/* Curve connecting the 'white panes' approximately */}
                            {/* Pane 1 (Right) to Pane 2 (Left) */}
                            <path d="M 750 200 C 750 450, 250 450, 250 600" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="12 12" className="animate-pulse-slow" />
                            {/* Pane 2 (Left) to Pane 3 (Right) */}
                            <path d="M 250 750 C 250 950, 750 900, 750 1000" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="12 12" className="animate-pulse-slow" />
                        </svg>
                    </div>

                    {/* Step 1 */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                        {/* Note (Left) */}
                        <div className="md:w-5/12 flex justify-center md:justify-end order-2 md:order-1 animate-float">
                            <div className="relative group transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500 hover:scale-105">
                                {/* Tape */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-10 bg-[#FF9999]/90 z-20 shadow-sm opacity-90 transform rotate-[-2deg]"></div>
                                {/* Paper */}
                                <div className="w-64 h-64 bg-[#FDFD96] shadow-xl p-8 flex flex-col justify-center items-center text-center">
                                    <span className="text-gray-500 font-hand text-xl mb-2">Step 01</span>
                                    <h3 className="text-gray-900 font-extrabold text-3xl leading-tight font-sans">Create an account</h3>
                                </div>
                            </div>
                        </div>

                        {/* Image Pane (Right) */}
                        <div className="md:w-5/12 order-1 md:order-2 animate-slide-left opacity-0" style={{ animationDelay: '0.3s' }}>
                            <div className="bg-white p-3 rounded-md shadow-2xl transform rotate-[2deg] hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto hover:scale-105">
                                <div className="bg-gray-100 overflow-hidden aspect-square relative">
                                    <img src="/assets/signup.png" alt="Student Sign Up" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Step 2 */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                        {/* Image Pane (Left) */}
                        <div className="md:w-5/12 order-1 md:order-1 animate-scale-in opacity-0">
                            <div className="bg-white p-3 rounded-md shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto hover:scale-105">
                                <div className="bg-gray-100 overflow-hidden aspect-square">
                                    <img src="/assets/upload.png" alt="Upload Timetable" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                </div>
                            </div>
                        </div>

                        {/* Note (Right) */}
                        <div className="md:w-5/12 flex justify-center md:justify-start order-2 md:order-2 animate-float-delay">
                            <div className="relative group transform rotate-[4deg] hover:rotate-0 transition-transform duration-500 hover:scale-105">
                                {/* Tape */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-10 bg-[#FF9999]/90 z-20 shadow-sm opacity-90 transform rotate-[1deg]"></div>
                                {/* Paper */}
                                <div className="w-64 h-64 bg-[#FDFD96] shadow-xl p-8 flex flex-col justify-center items-center text-center">
                                    <span className="text-gray-500 font-hand text-xl mb-2">Step 02</span>
                                    <h3 className="text-gray-900 font-extrabold text-3xl leading-tight font-sans">Upload your school time table</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Step 3 */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                        {/* Note (Left) */}
                        <div className="md:w-5/12 flex justify-center md:justify-end order-2 md:order-1 animate-float">
                            <div className="relative group transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 hover:scale-105">
                                {/* Tape */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-10 bg-[#FF9999]/90 z-20 shadow-sm opacity-90 transform rotate-[-1deg]"></div>
                                {/* Paper */}
                                <div className="w-64 h-64 bg-[#FDFD96] shadow-xl p-8 flex flex-col justify-center items-center text-center">
                                    <span className="text-gray-500 font-hand text-xl mb-2">Step 03</span>
                                    <h3 className="text-gray-900 font-extrabold text-3xl leading-tight font-sans">Enjoy all the benefits of CU Dispatch</h3>
                                </div>
                            </div>
                        </div>

                        {/* Image Pane (Right) */}
                        <div className="md:w-5/12 order-1 md:order-2 animate-slide-left opacity-0" style={{ animationDelay: '0.3s' }}>
                            <div className="bg-white p-3 rounded-md shadow-2xl transform rotate-[2deg] hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto hover:scale-105">
                                <div className="bg-gray-100 overflow-hidden aspect-square">
                                    <img src="/assets/contacts.png" alt="Enjoy Benefits" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Improved CTA */}
                <div className="mt-32 flex flex-col items-center animate-slide-up-delay-3 opacity-0">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-none blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <button onClick={() => window.scrollTo(0, 0)} className="relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-black bg-white rounded-none hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]">
                            Get Started for Free
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <p className="mt-6 text-gray-400 text-sm font-medium">No credit card required • Free for students</p>
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;