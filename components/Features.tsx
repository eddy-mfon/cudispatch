import React from 'react';
import { ArrowRight, Zap, Clock, Calendar, MessageSquare, Shield, Users } from 'lucide-react';
import { Feature } from '../types';
import BackgroundPattern from './BackgroundPattern';

const Features: React.FC = () => {
    return (
        <section id="features" className="py-24 bg-white relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-40 left-0 w-full h-[500px] bg-gradient-to-b from-transparent via-blue-50/50 to-transparent -z-10"></div>
            <BackgroundPattern />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-8 animate-slide-up opacity-0">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center space-x-2 mb-4">
                            <div className="w-8 h-1 bg-cu-blue rounded-full"></div>
                            <span className="text-gray-500 font-medium text-sm tracking-wide uppercase">Features</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
                            Simplify your <br /> student life.
                        </h2>
                    </div>
                    <div className="md:w-1/3 flex flex-col justify-end">
                        <p className="text-gray-500 text-lg leading-relaxed mb-6 font-medium">
                            CU Dispatch is a tool designed for Covenant University students to help them streamline their schedule and never miss any important updates concerning school life.
                        </p>
                        <a href="#" className="inline-flex items-center text-black font-bold hover:text-gray-600 transition-colors group">
                            Try out now
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

                    {/* Card 1: Personalised Schedule (Large Vertical) */}
                    <div className="lg:col-span-7 bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden hover:shadow-soft transition-all duration-500 hover:-translate-y-2 min-h-[500px] group animate-scale-in opacity-0">
                        <div className="max-w-md z-10 relative">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Personalised Schedule</h3>
                            <p className="text-gray-500 text-lg font-medium leading-relaxed">
                                We enable students to upload or create their custom timetables to keep their day organised.
                            </p>
                        </div>
                        <div className="mt-10 relative -mr-12 -mb-12 rounded-tl-3xl border-t border-l border-gray-200 shadow-2xl overflow-hidden h-80 group-hover:scale-[1.02] transition-transform duration-700">
                            <img
                                src="/assets/schedule.png"
                                alt="Schedule Interface"
                                className="w-full h-full object-cover object-top"
                            />
                            {/* Overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-50/20 to-transparent"></div>
                        </div>
                    </div>

                    {/* Card 2: No Contacts? No Problem! (Small Vertical) */}
                    <div className="lg:col-span-5 bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 flex flex-col overflow-hidden hover:shadow-soft transition-all duration-500 hover:-translate-y-2 min-h-[400px] group animate-scale-in opacity-0" style={{ animationDelay: '0.2s' }}>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">No Contacts? No Problem!</h3>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                Have access to the contact information of all your lecturers and facilitators.
                            </p>
                        </div>
                        <div className="flex-1 relative mt-4">
                            <div className="absolute top-0 right-0 left-8 bottom-[-40px] bg-gray-100 rounded-tl-2xl border-t border-l border-gray-200 shadow-lg overflow-hidden group-hover:rotate-1 transition-transform duration-500">
                                <img
                                    src="/assets/contacts.png"
                                    alt="Contacts List"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Direct Messaging (Small Vertical) */}
                    <div className="lg:col-span-5 bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 flex flex-col overflow-hidden hover:shadow-soft transition-all duration-500 hover:-translate-y-2 min-h-[400px] group animate-scale-in opacity-0" style={{ animationDelay: '0.4s' }}>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Direct Messaging to Student Council</h3>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                Send messages to the Student Council at speedy response times.
                            </p>
                        </div>
                        <div className="flex-1 relative mt-4">
                            <div className="absolute top-0 left-0 right-8 bottom-[-40px] bg-gray-100 rounded-tr-2xl border-t border-r border-gray-200 shadow-lg overflow-hidden group-hover:-rotate-1 transition-transform duration-500">
                                <img
                                    src="/assets/messaging.png"
                                    alt="Chat Interface"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Stay in the Loop (Large Vertical) */}
                    <div className="lg:col-span-7 bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden hover:shadow-soft transition-all duration-500 hover:-translate-y-2 min-h-[500px] group animate-scale-in opacity-0" style={{ animationDelay: '0.6s' }}>
                        <div className="max-w-md z-10 relative">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Stay in the Loop</h3>
                            <p className="text-gray-500 text-lg font-medium leading-relaxed">
                                Announcements and important updates are always made visibly clear on your dashboard.
                            </p>
                        </div>
                        <div className="mt-10 relative -ml-12 -mb-12 rounded-tr-3xl border-t border-r border-gray-200 shadow-2xl overflow-hidden h-80 group-hover:scale-[1.02] transition-transform duration-700">
                            <img
                                src="/assets/dashboard.png"
                                alt="Dashboard News Feed"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;