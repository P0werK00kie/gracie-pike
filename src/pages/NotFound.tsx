import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Search } from "lucide-react";
import MetaTags from "@/components/SEO/MetaTags";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Track 404 errors in analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', '404_error', {
        event_category: 'Error',
        event_label: location.pathname,
        value: 1,
      });
    }
  }, [location.pathname]);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <MetaTags
        title="Page Not Found | Gracie Pike Music"
        description="The page you're looking for doesn't exist. Return to Gracie Pike's official website to explore her music, portfolio, and contact information."
        url={`https://graciepike.com${location.pathname}`}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-amber-50/30 flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Hero */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-display font-bold text-burgundy-900 mb-4">
              404
            </h1>
            <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-burgundy-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-serif leading-relaxed">
              The page you're looking for seems to have wandered off like a melody in the wind. 
              Let's get you back to where the music lives.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={handleGoHome}
              className="inline-flex items-center space-x-2 bg-burgundy-900 text-background px-8 py-4 font-medium hover:bg-burgundy-800 transition-colors duration-300 shadow-lg tracking-wide"
            >
              <Home size={20} />
              <span>Return Home</span>
            </button>
            
            <button
              onClick={handleGoBack}
              className="inline-flex items-center space-x-2 border-2 border-burgundy-700 text-burgundy-700 px-8 py-4 font-medium hover:bg-burgundy-700 hover:text-background transition-all duration-300 tracking-wide"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </div>

          {/* Helpful Links */}
          <div className="bg-card border border-amber-200 luxury-shadow p-8 mb-8">
            <h3 className="text-2xl font-display font-bold text-burgundy-900 mb-6">
              Explore Gracie's World
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/#about"
                className="group text-center p-4 hover:bg-amber-50 transition-colors duration-300 border border-transparent hover:border-amber-200"
              >
                <h4 className="font-display font-semibold text-burgundy-900 mb-2 group-hover:text-amber-600 transition-colors">
                  About Gracie
                </h4>
                <p className="text-sm text-muted-foreground font-serif">
                  Learn about her journey and faith-driven music
                </p>
              </a>
              
              <a
                href="/#portfolio"
                className="group text-center p-4 hover:bg-amber-50 transition-colors duration-300 border border-transparent hover:border-amber-200"
              >
                <h4 className="font-display font-semibold text-burgundy-900 mb-2 group-hover:text-amber-600 transition-colors">
                  Music Portfolio
                </h4>
                <p className="text-sm text-muted-foreground font-serif">
                  Discover her latest songs and productions
                </p>
              </a>
              
              <a
                href="/#contact"
                className="group text-center p-4 hover:bg-amber-50 transition-colors duration-300 border border-transparent hover:border-amber-200"
              >
                <h4 className="font-display font-semibold text-burgundy-900 mb-2 group-hover:text-amber-600 transition-colors">
                  Get in Touch
                </h4>
                <p className="text-sm text-muted-foreground font-serif">
                  Connect for collaborations and inquiries
                </p>
              </a>
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="text-center">
            <p className="text-muted-foreground font-serif mb-4">
              Looking for something specific? Try searching for:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Music', 'About', 'Contact', 'Portfolio', 'Gospel', 'Production'].map((term) => (
                <span
                  key={term}
                  className="inline-block bg-amber-100 text-burgundy-800 px-3 py-1 text-sm font-medium border border-amber-200 hover:bg-amber-200 transition-colors cursor-pointer"
                  onClick={() => window.location.href = `/#${term.toLowerCase()}`}
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;