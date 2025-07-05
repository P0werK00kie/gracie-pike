import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import BreadcrumbNavigation from '@/components/SEO/BreadcrumbNavigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact / Book', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Generate breadcrumb items based on current scroll position
  const getBreadcrumbItems = () => {
    const items = [];
    const currentSection = getCurrentSection();
    
    if (currentSection && currentSection !== 'home') {
      const sectionLabel = currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
      items.push({
        label: sectionLabel,
        href: `#${currentSection}`,
        current: true
      });
    }
    
    return items;
  };

  const getCurrentSection = () => {
    const sections = ['about', 'portfolio', 'contact'];
    const scrollPosition = window.scrollY + 100;
    
    for (const section of sections) {
      const element = document.querySelector(`#${section}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;
        
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          return section;
        }
      }
    }
    return 'home';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-amber-200">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Left - Logo with proper heading hierarchy */}
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-burgundy-900 tracking-wide">
              <button 
                onClick={() => scrollToSection('#')}
                className="relative hover:text-burgundy-700 transition-colors"
                aria-label="Gracie Pike - Return to home"
              >
                Gracie Pike
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-amber-400"></div>
              </button>
            </h1>
          </div>

          {/* Right - Navigation */}
          <nav className="hidden md:flex space-x-10" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-burgundy-700 transition-colors duration-300 font-medium text-lg tracking-wide relative group"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-sm hover:bg-amber-50 transition-colors text-burgundy-800"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="mt-4 hidden md:block">
          <BreadcrumbNavigation items={getBreadcrumbItems()} />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-amber-200 pt-6" role="navigation" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-burgundy-700 transition-colors duration-300 font-medium text-lg text-left py-2"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Mobile Breadcrumb */}
            <div className="mt-4 pt-4 border-t border-amber-200">
              <BreadcrumbNavigation items={getBreadcrumbItems()} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;