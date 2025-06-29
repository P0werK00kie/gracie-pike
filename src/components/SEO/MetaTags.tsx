import { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = "Gracie Pike | Singer-Songwriter & Music Production Portfolio",
  description = "Gracie Pike is a talented singer-songwriter from Georgia specializing in country gospel music, music production, and creative photography. Explore her portfolio featuring original songs, music production services, and artistic work that blends faith, Southern roots, and contemporary creativity.",
  keywords = "Gracie Pike, singer-songwriter, country gospel music, music production, Georgia musician, faith-based music, Southern gospel, original songs, music portfolio, creative photography",
  image = "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/Logo/Screenshot%202025-06-23%20at%204.16.17%20PM.png",
  url = "https://graciepike.com",
  type = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Gracie Pike');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph tags
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:site_name', 'Gracie Pike Music', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', url);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:site', '@graciepike');
    updateMetaTag('twitter:creator', '@graciepike');

    // Additional SEO tags
    updateMetaTag('theme-color', '#800020'); // Burgundy color
    updateMetaTag('msapplication-TileColor', '#800020');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, keywords, image, url, type]);

  return null;
};

export default MetaTags;