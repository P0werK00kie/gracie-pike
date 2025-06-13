
import { Heart, Instagram, Twitter, Dribbble, Globe, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Dribbble, href: "https://dribbble.com", label: "Dribbble" },
    { icon: Globe, href: "https://portfolio.com", label: "Portfolio" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-burgundy-900 text-background py-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 border border-burgundy-700 opacity-20 rotate-12"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-400 opacity-10 -rotate-45"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <button 
              onClick={scrollToTop}
              className="text-3xl font-display font-bold text-background mb-6 hover:text-amber-300 transition-colors duration-300"
            >
              Creative Studio
            </button>
            <div className="w-16 h-0.5 bg-amber-400 mb-6"></div>
            <p className="text-burgundy-100 leading-relaxed mb-8 font-serif text-lg max-w-md">
              Where timeless elegance meets contemporary creativity. Crafting distinctive 
              visual narratives that resonate across generations.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-burgundy-800 border border-burgundy-700 flex items-center justify-center hover:bg-amber-400 hover:text-burgundy-900 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-6 text-amber-300">Navigation</h4>
            <nav className="space-y-3">
              {['About', 'Portfolio', 'Services', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-burgundy-100 hover:text-amber-300 transition-colors duration-300 font-serif text-left"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-6 text-amber-300">Expertise</h4>
            <nav className="space-y-3">
              {['Brand Identity', 'Fine Art Photography', 'Digital Experiences', 'Visual Arts', 'Creative Consulting'].map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="block text-burgundy-100 hover:text-amber-300 transition-colors duration-300 font-serif"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Back to Top */}
        <div className="text-center mb-8">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 bg-burgundy-800 text-background px-6 py-3 hover:bg-amber-400 hover:text-burgundy-900 transition-all duration-300 border border-burgundy-700 hover:border-amber-400"
          >
            <ArrowUp size={20} />
            <span className="font-medium tracking-wide">Return to Top</span>
          </button>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-burgundy-700 pt-8 text-center">
          <p className="text-burgundy-200 flex items-center justify-center space-x-2 font-serif">
            <span>© 2024 Creative Studio. Crafted with</span>
            <Heart size={16} className="text-amber-400" />
            <span>and classical precision</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
