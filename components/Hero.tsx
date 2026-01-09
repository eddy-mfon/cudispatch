import React from 'react';
import { ArrowRight, Search, Bell, Home, Calendar, MessageSquare, Settings, BookOpen, Clock, AlertTriangle, PieChart, Hand } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center relative overflow-hidden">

            {/* Background blobs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-cu-blue/20 rounded-full blur-3xl opacity-50 -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-cu-yellow/30 rounded-full blur-3xl opacity-50 -z-10 animate-pulse-slow"></div>

            <div className="max-w-4xl mx-auto space-y-8 relative z-10">
                <div className="inline-flex items-center px-4 py-1.5 rounded-none border border-gray-200 bg-white/50 backdrop-blur-sm text-sm font-medium text-gray-600 mb-4 animate-slide-up opacity-0">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    v2.0 is now live for all students
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] animate-slide-up-delay-1 opacity-0">
                    Your favourite <span className="text-gray-400">info pal</span> <br className="hidden md:block" />
                    for Covenant University
                </h1>

                <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed animate-slide-up-delay-2 opacity-0">
                    The friendliest and most accurate digital companion is finally here to help you navigate campus life, timetables, and resources with ease.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-slide-up-delay-3 opacity-0">
                    <a href="#contact" className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-black rounded-none hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#features" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-700 bg-white border border-gray-200 rounded-none hover:bg-gray-50 transition-all duration-300 hover:border-gray-300 hover:-translate-y-1 hover:shadow-md">
                        View Features
                    </a>
                </div>
            </div>

            <div className="mt-20 w-full max-w-5xl mx-auto relative animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
                {/* Glow effect behind the mockup */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-100 via-purple-50 to-yellow-50 rounded-[2.5rem] blur-xl opacity-60 -z-10 animate-pulse-slow"></div>

                {/* Main Interface Mockup */}
                <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 aspect-[16/10] w-full overflow-hidden flex flex-col relative transform transition-transform hover:scale-[1.01] duration-700 animate-scale-in opacity-0" style={{ animationDelay: '0.8s' }}>

                    {/* Mockup Header */}
                    <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white/80 backdrop-blur z-20">
                        <div className="flex items-center space-x-2">
                            <div className="flex space-x-1.5 mr-4">
                                <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500/20"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500/20"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500/20"></div>
                            </div>
                            <span className="font-bold text-gray-700 text-sm tracking-wide hidden sm:block">CU Dispatch</span>
                        </div>

                        <div className="hidden sm:flex items-center bg-gray-50 rounded-lg px-3 py-1.5 w-1/3 border border-gray-100 group transition-colors focus-within:bg-white focus-within:border-gray-300">
                            <Search className="w-4 h-4 text-gray-400 mr-2 group-focus-within:text-black" />
                            <span className="text-gray-400 text-sm font-medium group-focus-within:text-gray-600">Search courses, news...</span>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="relative cursor-pointer hover:scale-110 transition-transform">
                                <Bell className="w-5 h-5 text-gray-600" />
                                <span className="absolute -top-1 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-black text-white flex items-center justify-center text-xs font-bold border border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                                ST
                            </div>
                        </div>
                    </div>

                    {/* Mockup Body */}
                    <div className="flex-1 flex bg-[#FAFAFA] overflow-hidden">
                        {/* Sidebar */}
                        <div className="w-16 md:w-64 bg-white border-r border-gray-100 flex flex-col justify-between py-6 hidden md:flex">
                            <div className="space-y-1 px-3">
                                <div className="flex items-center space-x-3 px-3 py-2.5 bg-gray-50 text-black font-semibold rounded-lg cursor-pointer transform hover:translate-x-1 transition-transform">
                                    <Home className="w-5 h-5" />
                                    <span className="text-sm">Dashboard</span>
                                </div>
                                <div className="flex items-center space-x-3 px-3 py-2.5 text-gray-500 hover:text-black hover:bg-gray-50 font-medium rounded-lg transition-all cursor-pointer transform hover:translate-x-1">
                                    <Calendar className="w-5 h-5" />
                                    <span className="text-sm">Schedule</span>
                                </div>
                                <div className="flex items-center space-x-3 px-3 py-2.5 text-gray-500 hover:text-black hover:bg-gray-50 font-medium rounded-lg transition-all cursor-pointer transform hover:translate-x-1">
                                    <BookOpen className="w-5 h-5" />
                                    <span className="text-sm">Resources</span>
                                </div>
                                <div className="flex items-center space-x-3 px-3 py-2.5 text-gray-500 hover:text-black hover:bg-gray-50 font-medium rounded-lg transition-all cursor-pointer transform hover:translate-x-1">
                                    <MessageSquare className="w-5 h-5" />
                                    <span className="text-sm">Messages</span>
                                </div>
                            </div>

                            <div className="px-3">
                                <div className="flex items-center space-x-3 px-3 py-2.5 text-gray-500 hover:text-black hover:bg-gray-50 font-medium rounded-lg transition-all cursor-pointer transform hover:translate-x-1">
                                    <Settings className="w-5 h-5" />
                                    <span className="text-sm">Settings</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Dashboard Content */}
                        <div className="flex-1 p-6 overflow-hidden flex flex-col">
                            {/* Greeting Banner */}
                            <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2d2d2d] rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden mb-6 flex-shrink-0 group hover:shadow-xl transition-shadow duration-300">
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                        Good Morning, Student!
                                        <Hand className="w-6 h-6 text-yellow-400 animate-wave origin-bottom-right inline-block" />
                                    </h2>
                                    <p className="text-gray-300 text-sm max-w-md">You have 3 classes today and a meeting with your course advisor at 2 PM.</p>
                                    <div className="mt-6 flex space-x-3">
                                        <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors hover:scale-105 transform duration-200">View Timetable</button>
                                    </div>
                                </div>
                                {/* Decorative Circles */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 animate-pulse-slow"></div>
                                <div className="absolute bottom-0 right-20 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                            </div>

                            {/* Dashboard Widgets Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 overflow-hidden">

                                {/* Widget 1: Upcoming Class */}
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-blue-500" /> Next Class
                                        </h3>
                                        <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-bold">In 30m</span>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <div className="text-3xl font-extrabold text-gray-900 mb-1">CSC 314</div>
                                        <div className="text-gray-500 text-sm font-medium">Artificial Intelligence</div>
                                        <div className="mt-4 flex items-center text-xs text-gray-400 font-medium">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                            Lecture Theatre 1
                                        </div>
                                    </div>
                                </div>

                                {/* Widget 2: Notice Board */}
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                                            <AlertTriangle className="w-4 h-4 text-orange-500" /> Notices
                                        </h3>
                                        <span className="text-xs text-gray-400 hover:text-black cursor-pointer transition-colors">View all</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer">
                                            <p className="text-xs font-bold text-gray-800 mb-1">Mid-Semester Exam</p>
                                            <p className="text-[10px] text-gray-500">Scheduled for next week Monday.</p>
                                        </div>
                                        <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer">
                                            <p className="text-xs font-bold text-gray-800 mb-1">Chapel Service</p>
                                            <p className="text-[10px] text-gray-500">Topic: Excellence in Leadership</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Widget 3: Performance/Stats */}
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                                            <PieChart className="w-4 h-4 text-purple-500" /> Semester GPA
                                        </h3>
                                    </div>
                                    <div className="flex-1 flex items-center justify-center relative">
                                        {/* Simple CSS Donut Chart representation */}
                                        <div className="w-24 h-24 rounded-full border-8 border-gray-100 border-t-purple-500 border-r-purple-500 transform -rotate-45 flex items-center justify-center hover:scale-110 transition-transform duration-500">
                                            <div className="transform rotate-45 text-center">
                                                <span className="block text-2xl font-extrabold text-gray-900 leading-none">4.5</span>
                                                <span className="text-[10px] text-gray-400 font-bold uppercase">Current</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;