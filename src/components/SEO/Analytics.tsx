import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4 (GA4) - Replace with actual tracking ID
    const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 tracking ID
    
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    // Core Web Vitals tracking
    const trackWebVitals = () => {
      if ('web-vital' in window) {
        // Track Core Web Vitals
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            gtag('event', 'web_vital', {
              event_category: 'Web Vitals',
              event_action: 'CLS',
              value: Math.round(metric.value * 1000),
              non_interaction: true,
            });
          });

          getFID((metric) => {
            gtag('event', 'web_vital', {
              event_category: 'Web Vitals',
              event_action: 'FID',
              value: Math.round(metric.value),
              non_interaction: true,
            });
          });

          getFCP((metric) => {
            gtag('event', 'web_vital', {
              event_category: 'Web Vitals',
              event_action: 'FCP',
              value: Math.round(metric.value),
              non_interaction: true,
            });
          });

          getLCP((metric) => {
            gtag('event', 'web_vital', {
              event_category: 'Web Vitals',
              event_action: 'LCP',
              value: Math.round(metric.value),
              non_interaction: true,
            });
          });

          getTTFB((metric) => {
            gtag('event', 'web_vital', {
              event_category: 'Web Vitals',
              event_action: 'TTFB',
              value: Math.round(metric.value),
              non_interaction: true,
            });
          });
        }).catch(() => {
          // Fallback if web-vitals library is not available
          console.log('Web Vitals library not available');
        });
      }
    };

    // Track page views and interactions
    const trackPageView = () => {
      if (typeof gtag !== 'undefined') {
        gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        if (typeof gtag !== 'undefined') {
          gtag('event', 'scroll_depth', {
            event_category: 'Engagement',
            event_action: 'Scroll Depth',
            value: scrollPercent,
          });
        }
      }
    };

    // Add event listeners
    window.addEventListener('scroll', trackScrollDepth);
    
    // Track initial page load
    trackPageView();
    trackWebVitals();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
    };
  }, []);

  return null;
};

// Helper function to track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export default Analytics;