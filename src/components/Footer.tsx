import { Heart, Instagram, Twitter, Dribbble, Globe } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Dribbble, href: "https://dribbble.com", label: "Dribbble" },
    { icon: Globe, href: "https://behance.net", label: "Portfolio" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-600/10 to-transparent rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300"
            >
              Creative Studio
            </button>
            <p className="text-gray-400 leading-relaxed mb-6">
              Crafting unique digital experiences with passion, creativity, and attention to detail.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Portfolio', 'Services', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-pink-400 transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <nav className="space-y-2">
              {['Brand Identity', 'Web Design', 'Photography', 'Digital Art', 'Motion Graphics'].map((service) => (
                <a
                  key={service}
                  href="#"
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 Creative Studio. Made with</span>
            <Heart size={16} className="text-pink-500 animate-pulse" />
            <span>and creativity</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
