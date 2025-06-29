import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // Person Schema for Gracie Pike
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Gracie Pike",
      "jobTitle": "Singer-Songwriter & Music Producer",
      "description": "Georgia-based singer-songwriter specializing in country gospel music and music production",
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
        "Music Production",
        "Songwriting",
        "Faith-based Music",
        "Southern Gospel"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Singer-Songwriter",
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
      "genre": ["Country Gospel", "Southern Gospel", "Contemporary Christian"],
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
      "name": "Gracie Pike Music",
      "url": "https://graciepike.com",
      "description": "Official website of Gracie Pike - Georgia-based singer-songwriter specializing in country gospel music and music production",
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
      "name": "Gracie Music Production",
      "description": "Professional music production services specializing in country gospel and faith-based music",
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