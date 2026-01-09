import React from 'react';
import { Instagram, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';

interface FooterProps {
    onContactClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto border border-white/10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 border-b border-white/10">
            
            {/* Left Box (Hero Text + Avatars) */}
            <div className="md:col-span-2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between min-h-[300px]">
                <h3 className="text-3xl font-bold leading-tight tracking-tight max-w-sm">
                    Your favourite information pal for Covenant University
                </h3>
                
                <div className="flex items-center space-x-4 mt-8">
                    <div className="flex -space-x-3">
                        <img className="w-10 h-10 rounded-full border-2 border-[#1A1A1A]" src="https://i.pravatar.cc/100?img=33" alt="User 1" />
                        <img className="w-10 h-10 rounded-full border-2 border-[#1A1A1A]" src="https://i.pravatar.cc/100?img=47" alt="User 2" />
                        <img className="w-10 h-10 rounded-full border-2 border-[#1A1A1A]" src="https://i.pravatar.cc/100?img=12" alt="User 3" />
                    </div>
                    <span className="text-sm font-medium text-gray-400">100+ active users</span>
                </div>
            </div>

            {/* Right Box (Links Grid) */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2">
                <a href="#features" className="p-8 flex justify-between items-center border-b border-white/10 md:border-r hover:bg-white/5 transition-colors group">
                    <span className="text-lg font-medium text-gray-300 group-hover:text-white">Features</span>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </a>
                <a href="#getting-started" className="p-8 flex justify-between items-center border-b border-white/10 hover:bg-white/5 transition-colors group">
                    <span className="text-lg font-medium text-gray-300 group-hover:text-white">Getting Started</span>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </a>
                <a href="#testimonials" className="p-8 flex justify-between items-center border-b md:border-b-0 border-white/10 md:border-r hover:bg-white/5 transition-colors group">
                    <span className="text-lg font-medium text-gray-300 group-hover:text-white">Testimonials</span>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </a>
                <button onClick={onContactClick} className="p-8 flex justify-between items-center hover:bg-white/5 transition-colors group w-full text-left">
                    <span className="text-lg font-medium text-gray-300 group-hover:text-white">Contact Us</span>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </button>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="p-8 md:p-12 relative overflow-hidden">
            <div className="flex justify-end gap-4 mb-12 md:mb-20">
                <a href="#" className="flex items-center justify-center p-2 transition-colors hover:text-gray-300">
                    <Linkedin size={28} />
                </a>
                <a href="#" className="flex items-center justify-center p-2 transition-colors hover:text-gray-300">
                    <Instagram size={28} />
                </a>
                <a href="#" className="flex items-center justify-center p-2 transition-colors hover:text-gray-300">
                    <Facebook size={28} />
                </a>
            </div>

            <div className="relative flex justify-center md:justify-start items-baseline">
                <h1 className="text-[15vw] md:text-[11rem] font-bold leading-none tracking-tighter text-white select-none whitespace-nowrap">
                    CU Dispatch
                </h1>
                <sup className="hidden md:flex ml-4 text-sm border border-white rounded-full w-8 h-8 items-center justify-center font-bold translate-y-[-4rem]">TM</sup>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;