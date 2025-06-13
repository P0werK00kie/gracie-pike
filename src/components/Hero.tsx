
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-bounce delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-blue-200 rounded-full opacity-25 animate-pulse delay-500"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Sparkle Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-8 animate-spin-slow">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-gray-800">Creative</span>
            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Where imagination meets excellence. Crafting unique digital experiences 
            that inspire and captivate.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-pink-500 hover:text-pink-600 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce cursor-pointer hover:text-pink-600 transition-colors duration-300"
          >
            <ArrowDown size={32} className="mx-auto" />
          </button>
        </div>
      </div>
      
      {/* Creative Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
