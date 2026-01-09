import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "This app has completely saved my semester. I never miss a class anymore thanks to the reminders.",
    name: "Sarah J.",
    role: "Computer Science, 300L",
    avatar: "https://picsum.photos/100/100?random=3"
  },
  {
    id: 2,
    quote: "The resource library is a game changer. All past questions in one place? Yes please!",
    name: "Michael O.",
    role: "Architecture, 400L",
    avatar: "https://picsum.photos/100/100?random=4"
  },
  {
    id: 3,
    quote: "This platform is actually really helpful for quick answers about school policies.",
    name: "Chidinma A.",
    role: "Economics, 200L",
    avatar: "https://picsum.photos/100/100?random=5"
  },
  {
    id: 4,
    quote: "Simple interface, does exactly what it says. Simplifies student life significantly.",
    name: "David K.",
    role: "Engineering, 500L",
    avatar: "https://picsum.photos/100/100?random=6"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#A3B8D6] py-28 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] border border-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center md:text-left animate-slide-up opacity-0">
          <span className="inline-block px-3 py-1 rounded-none bg-white/20 text-white backdrop-blur-sm text-xs font-bold tracking-widest mb-4">WALL OF LOVE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Loved by students <br /> across campus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div 
                key={t.id} 
                className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <Quote className="w-10 h-10 text-blue-200 mb-6 fill-current" />
              <p className="text-gray-800 text-lg md:text-xl mb-8 leading-relaxed font-medium">"{t.quote}"</p>
              
              <div className="flex items-center border-t border-gray-100 pt-6">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover mr-4 shadow-sm ring-2 ring-white hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;