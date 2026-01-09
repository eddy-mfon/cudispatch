import React from 'react';
import { Book, GraduationCap, Ruler, Pencil, Backpack, Calculator, Library, Scroll } from 'lucide-react';

interface BackgroundPatternProps {
    className?: string;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ className = "" }) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}>
            {/* Top Left Cluster */}
            <div className="absolute top-[5%] left-[2%] opacity-[0.03] rotate-[-15deg]">
                <Book className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="absolute top-[8%] left-[12%] opacity-[0.03] rotate-[10deg]">
                <Pencil className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="absolute top-[15%] left-[5%] opacity-[0.03] rotate-[-5deg]">
                <Ruler className="w-8 h-8 md:w-12 md:h-12" />
            </div>

            {/* Top Right Cluster */}
            <div className="absolute top-[5%] right-[5%] opacity-[0.03] rotate-[12deg]">
                <GraduationCap className="w-10 h-10 md:w-14 md:h-14" />
            </div>
            <div className="absolute top-[12%] right-[15%] opacity-[0.03] rotate-[-8deg]">
                <Calculator className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="absolute top-[18%] right-[2%] opacity-[0.03] rotate-[20deg]">
                <Scroll className="w-8 h-8 md:w-10 md:h-10" />
            </div>


            {/* Middle Left Cluster */}
            <div className="absolute top-[40%] left-[3%] opacity-[0.03] rotate-[45deg]">
                <Backpack className="w-8 h-8 md:w-12 md:h-12" />
            </div>
            <div className="absolute top-[45%] left-[10%] opacity-[0.03] rotate-[-10deg]">
                <Library className="w-10 h-10 md:w-14 md:h-14" />
            </div>


            {/* Middle Right Cluster */}
            <div className="absolute top-[35%] right-[8%] opacity-[0.03] rotate-[-15deg]">
                <Book className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="absolute top-[50%] right-[3%] opacity-[0.03] rotate-[5deg]">
                <Pencil className="w-6 h-6 md:w-8 md:h-8" />
            </div>


            {/* Bottom Left Cluster */}
            <div className="absolute bottom-[10%] left-[4%] opacity-[0.03] rotate-[25deg]">
                <GraduationCap className="w-8 h-8 md:w-12 md:h-12" />
            </div>
            <div className="absolute bottom-[20%] left-[12%] opacity-[0.03] rotate-[-20deg]">
                <Calculator className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="absolute bottom-[5%] left-[18%] opacity-[0.03] rotate-[10deg]">
                <Ruler className="w-6 h-6 md:w-8 md:h-8" />
            </div>


            {/* Bottom Right Cluster */}
            <div className="absolute bottom-[15%] right-[5%] opacity-[0.03] rotate-[-15deg]">
                <Backpack className="w-8 h-8 md:w-12 md:h-12" />
            </div>
            <div className="absolute bottom-[8%] right-[15%] opacity-[0.03] rotate-[30deg]">
                <Scroll className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="absolute bottom-[25%] right-[10%] opacity-[0.03] rotate-[-5deg]">
                <Library className="w-6 h-6 md:w-8 md:h-8" />
            </div>

            {/* Scattered Extras */}
            <div className="absolute top-[60%] left-[50%] opacity-[0.03] rotate-[90deg]">
                <Pencil className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="absolute top-[25%] left-[40%] opacity-[0.03] rotate-[-45deg]">
                <Ruler className="w-6 h-6 md:w-8 md:h-8" />
            </div>

            {/* Extra Density */}
            <div className="absolute top-[32%] left-[22%] opacity-[0.03] rotate-[60deg]">
                <Book className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <div className="absolute bottom-[35%] right-[28%] opacity-[0.03] rotate-[-15deg]">
                <Pencil className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <div className="absolute top-[10%] left-[50%] opacity-[0.03] rotate-[30deg]">
                <Scroll className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <div className="absolute bottom-[45%] left-[5%] opacity-[0.03] rotate-[-5deg]">
                <Library className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <div className="absolute top-[65%] right-[45%] opacity-[0.03] rotate-[15deg]">
                <Calculator className="w-5 h-5 md:w-7 md:h-7" />
            </div>

        </div>
    );
};

export default BackgroundPattern;
