import { ArrowDown } from 'lucide-react';
import OptimizedImage from '@/components/SEO/ImageOptimization';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-background classical-texture" role="banner">
      {/* Decorative classical elements */}
      <div className="absolute top-20 left-10 w-40 h-40 border border-amber-200 rounded-none opacity-20 rotate-45" aria-hidden="true"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 border border-burgundy-200 rounded-none opacity-15 -rotate-12" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-20 w-2 h-32 bg-amber-400 opacity-20" aria-hidden="true"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-elegant-entrance">
            {/* Ornamental top line */}
            <div className="w-24 h-0.5 bg-amber-400 mb-8" aria-hidden="true"></div>
            
            {/* Main Heading - Proper H1 for SEO */}
            <h1 className="text-6xl md:text-7xl font-display font-bold leading-tight">
              <span className="block text-burgundy-900 mb-2">Songs</span>
              <span className="block text-foreground">of</span>
              <span className="block text-amber-600 text-5xl md:text-6xl mt-2">Grace</span>
            </h1>
            
            {/* Subheading with semantic markup */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl font-serif" role="doc-subtitle">
              I've always been a storyteller in song, weaving my deep-seated faith and country roots into every note. I hope my music takes you on a journey of hope, reflection, and unwavering belief in God's presence in every season of life.            
            </p>
            
            {/* CTA Buttons with proper accessibility */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <button 
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-burgundy-900 text-background px-10 py-4 font-medium hover:bg-burgundy-800 transition-all duration-300 shadow-lg hover:shadow-xl tracking-wide"
                aria-label="View Gracie Pike's music portfolio"
              >
                View Portfolio
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-burgundy-700 text-burgundy-700 px-10 py-4 font-medium hover:bg-burgundy-700 hover:text-background transition-all duration-300 tracking-wide"
                aria-label="Contact Gracie Pike for collaborations"
              >
                Collaborate
              </button>
            </div>
          </div>
          
          {/* Right Content - Featured Image Space */}
          <div className="relative">
            {/* Main featured image */}
            <div className="relative group">
              <div className="aspect-[4/5] bg-gradient-to-br from-burgundy-100 to-amber-50 luxury-shadow border border-amber-200 relative overflow-hidden">
                <OptimizedImage 
                  src="https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/Hero/83b44830-1882-41a6-bf3b-739b46cc4def.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJncmFjaWUtcGlrZS9IZXJvLzgzYjQ0ODMwLTE4ODItNDFhNi1iZjNiLTczOWI0NmNjNGRlZi5KUEciLCJpYXQiOjE3NTA2NTIxNTUsImV4cCI6MjM4MTM3MjE1NX0.5a3rV1zf2kwXD9L95O4BJm4UONIjyG3WQgi8QTIj_N0"
                  alt="Gracie Pike performing - Georgia-based singer-songwriter specializing in country gospel music"
                  title="Gracie Pike - Country Gospel Singer-Songwriter from Georgia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  width={600}
                  height={750}
                  priority={true}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-burgundy-900/10 group-hover:bg-burgundy-900/5 transition-colors duration-300"></div>
              </div>
              
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-400 -z-10" aria-hidden="true"></div>
            </div>
            
            {/* Secondary images */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-amber-100 to-burgundy-50 luxury-shadow border border-burgundy-200 overflow-hidden">
              <OptimizedImage 
                src="https://i.scdn.co/image/ab67616d0000b2730dd37e96b98133fb1f6bed3c"
                alt="Gracie Pike album cover - Latest country gospel music release"
                title="Gracie Pike's Latest Album"
                className="w-full h-full object-cover"
                width={128}
                height={128}
                loading="lazy"
              />
            </div>
            
            {/* Floating decorative element */}
            <div className="absolute top-8 -left-8 w-20 h-20 border border-amber-400 rotate-45 opacity-40" aria-hidden="true"></div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <button 
            onClick={scrollToAbout}
            className="text-burgundy-700 hover:text-burgundy-900 transition-colors duration-300 flex flex-col items-center space-y-2"
            aria-label="Scroll down to learn more about Gracie Pike"
          >
            <span className="text-sm tracking-wider font-medium">Discover More</span>
            <ArrowDown size={24} className="animate-bounce" aria-hidden="true" />
          </button>
        </div>
      </div>
      
      {/* Classical wave divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-background">
          <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;