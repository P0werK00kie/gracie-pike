import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import BreadcrumbNavigation from '@/components/SEO/BreadcrumbNavigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Shop', href: 'https://shop.graciepike.com' },
    { label: 'About', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Contact / Book', href: '/contact' },
    { label: 'Donate To This Ministry', href: 'https://donate.stripe.com/5kQdR8dOC2lQ7S77Ls9MY00' }
  ];

  const handleNavigation = (href: string) => {
    // Handle page navigation
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  // Generate breadcrumb items based on current scroll position
  const getBreadcrumbItems = () => {
    const items = [];
    const currentPath = location.pathname;
    
    if (currentPath !== '/') {
      const pathSegment = currentPath.substring(1); // Remove leading slash
      const sectionLabel = pathSegment.charAt(0).toUpperCase() + pathSegment.slice(1);
      items.push({
        label: sectionLabel,
        href: currentPath,
        current: true
      });
    }
    
    return items;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-amber-200">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Left - Logo with proper heading hierarchy */}
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-burgundy-900 tracking-wide">
              <button 
                onClick={() => window.location.href = '/'}
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
                onClick={() => handleNavigation(item.href)}
                className="text-foreground hover:text-burgundy-700 transition-colors duration-300 font-medium text-lg tracking-wide relative group"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 rounded-sm hover:bg-amber-50 transition-colors text-burgundy-800"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8" role="navigation" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.href)}
                    className="text-left text-foreground hover:text-burgundy-700 transition-colors duration-300 font-medium text-lg py-3 border-b border-amber-200"
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Breadcrumb */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Breadcrumb Navigation */}
      </div>
    </header>
  );
};

export default Header;