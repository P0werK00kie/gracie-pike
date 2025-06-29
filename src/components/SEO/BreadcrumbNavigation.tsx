import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
  className?: string;
}

const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items, className = '' }) => {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  // Don't render anything if there are no items
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center space-x-2 text-sm text-muted-foreground ${className}`}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight size={14} className="text-muted-foreground" />}
          <button
            onClick={() => scrollToSection(item.href)}
            className={`hover:text-burgundy-700 transition-colors ${
              item.current ? 'text-burgundy-900 font-medium' : ''
            }`}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.label}
          </button>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default BreadcrumbNavigation;