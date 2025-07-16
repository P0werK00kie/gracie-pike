import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // Person Schema for Gracie Pike
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Gracie Pike",
      "jobTitle": "Country Gospel Singer-Songwriter",
      "description": "Georgia-based country gospel singer-songwriter creating faith-driven music that blends Southern roots with contemporary sound",
      "url": "https://graciepike.com",
      "image": "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/About/787b5600-e206-4cc3-903d-bfed3888788b.JPG",
      "sameAs": [
        "https://open.spotify.com/artist/23eu2aznCpnIJVgB8G5g7S",
        "https://music.apple.com/us/artist/gracie-pike/210652860",
        "https://www.instagram.com/graciepikemusic",
        "https://www.tiktok.com/@graciepike",
        "https://youtube.com/@graciepike",
        "https://www.facebook.com/share/1BjvCCZcFA"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Georgia",
        "addressCountry": "US"
      },
      "knowsAbout": [
        "Country Gospel Music",
        "Songwriting",
        "Christian Country Music",
        "Southern Gospel",
        "Faith-based Music",
        "Live Performance"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Country Gospel Singer-Songwriter",
        "occupationLocation": {
          "@type": "State",
          "name": "Georgia"
        }
      }
    };

    // Music Group Schema
    const musicGroupSchema = {
      "@context": "https://schema.org",
      "@type": "MusicGroup",
      "name": "Gracie Pike",
      "genre": ["Country Gospel", "Southern Gospel", "Christian Country", "Faith-based Music"],
      "foundingLocation": {
        "@type": "State",
        "name": "Georgia"
      },
      "member": {
        "@type": "Person",
        "name": "Gracie Pike"
      },
      "sameAs": [
        "https://open.spotify.com/artist/23eu2aznCpnIJVgB8G5g7S",
        "https://music.apple.com/us/artist/gracie-pike/210652860"
      ]
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Gracie Pike | Georgia Country Gospel Singer-Songwriter",
      "url": "https://graciepike.com",
      "description": "Official website of Gracie Pike - Georgia-based country gospel singer-songwriter creating faith-driven music that blends Southern roots with contemporary sound",
      "author": {
        "@type": "Person",
        "name": "Gracie Pike"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://graciepike.com/?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Organization Schema for Music Production Business
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Gracie Pike Music",
      "description": "Georgia-based country gospel music featuring original faith-driven songs that blend Southern roots with contemporary sound",
      "founder": {
        "@type": "Person",
        "name": "Gracie Pike"
      },
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Georgia",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://graciepike.com/#contact"
      }
    };

    // Add all schemas to the page
    const schemas = [personSchema, musicGroupSchema, websiteSchema, organizationSchema];
    
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `structured-data-${index}`;
      
      // Remove existing script if it exists
      const existing = document.getElementById(`structured-data-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
};

export default StructuredData;