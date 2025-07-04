import { Heart, Instagram, Twitter, Dribbble, Globe, ArrowUp, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/graciepikemusic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/graciepikefanpage?mibextid=wwXIfr&rdid=fg4TOoPa3AoLh1cX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BjvCCZcFA%2F%3Fmibextid%3DwwXIfr", label: "Facebook" },
    { icon: Dribbble, href: "https://www.youtube.com/@graciepike", label: "Dribbble" },
    { icon: Globe, href: "https://music.apple.com/us/artist/gracie-pike/210652860", label: "Portfolio" }
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
        <div className="flex flex-col items-center gap-12 mb-12">
          {/* Brand */}
          <div className="text-center">
            <button 
              onClick={scrollToTop}
              className="text-3xl font-display font-bold text-background mb-6 hover:text-amber-300 transition-colors duration-300"
            >
              Gracie Pike
            </button>
            <div className="w-16 h-0.5 bg-amber-400 mb-6 mx-auto"></div>
            <p className="text-burgundy-100 leading-relaxed mb-8 font-serif text-lg max-w-md">
              Where timeless elegance meets contemporary creativity. Crafting distinctive 
              visual narratives that resonate across generations.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4">
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
            <span>© 2025 Gracie Pike</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
