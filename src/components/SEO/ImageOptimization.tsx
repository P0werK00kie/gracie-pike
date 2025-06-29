import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  title,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate optimized image URLs for different formats and sizes
  const generateOptimizedSrc = (originalSrc: string, format?: string, quality?: number) => {
    if (originalSrc.includes('supabase.co')) {
      // For Supabase images, we can add transformation parameters
      const url = new URL(originalSrc);
      if (quality) url.searchParams.set('quality', quality.toString());
      if (format) url.searchParams.set('format', format);
      if (width) url.searchParams.set('width', width.toString());
      if (height) url.searchParams.set('height', height.toString());
      return url.toString();
    }
    return originalSrc;
  };

  // Create WebP and AVIF sources for better compression
  const webpSrc = generateOptimizedSrc(src, 'webp', 85);
  const avifSrc = generateOptimizedSrc(src, 'avif', 85);

  useEffect(() => {
    if (priority) {
      // Preload critical images
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <picture>
      {/* AVIF format for modern browsers */}
      <source srcSet={avifSrc} type="image/avif" />
      
      {/* WebP format for most modern browsers */}
      <source srcSet={webpSrc} type="image/webp" />
      
      {/* Fallback to original format */}
      <img
        src={src}
        alt={alt}
        title={title}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
        // Add structured data attributes
        itemProp="image"
      />
    </picture>
  );
};

export default OptimizedImage;