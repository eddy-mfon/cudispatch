import React from 'react';
import BackgroundPattern from './BackgroundPattern';

const CTASection: React.FC = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center relative overflow-hidden">
            <BackgroundPattern />
            {/* Star Graphic */}
            <img src="/assets/cta-star.png" alt="" className="absolute top-0 right-4 md:right-8 w-24 md:w-32 lg:w-40 object-contain opacity-90 z-0" />

            <div className="max-w-4xl mx-auto space-y-8 relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] animate-slide-up opacity-0">
                    Ready to streamline your <span className="text-blue-300">Campus Experience?</span>
                </h2>

                <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed animate-slide-up-delay-1 opacity-0">
                    Join the plethora of students who always stay up to date. From timetables, to easy communication to important updates, we got you covered.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-slide-up-delay-2 opacity-0">
                    <a href="#demo" className="group inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-[#1A1A1A] rounded hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Get a Demo
                    </a>
                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-gray-700 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-all duration-300 hover:border-gray-300 hover:-translate-y-1 hover:shadow-md">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
