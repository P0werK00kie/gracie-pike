import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MetaTags from '@/components/SEO/MetaTags';
import StructuredData from '@/components/SEO/StructuredData';
import Analytics from '@/components/SEO/Analytics';
import OptimizedImage from '@/components/SEO/ImageOptimization';
import { ExternalLink, ChevronRight } from 'lucide-react';

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "Wishing Well",
      category: "Music",
      images: [
        "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/Portfolio/Cover.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJncmFjaWUtcGlrZS9Qb3J0Zm9saW8vQ292ZXIuanBnIiwiaWF0IjoxNzUxODE1NTI5LCJleHAiOjIzODI1MzU1Mjl9.VuTyZROnK_C3xfedZZ2R01qVgJTSCSFbavQmfbIzJ10",
        "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/Portfolio/music.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJncmFjaWUtcGlrZS9Qb3J0Zm9saW8vbXVzaWMud2VicCIsImlhdCI6MTc1MDY4OTgxOCwiZXhwIjoyMzgxNDA5ODE4fQ.2e3NKDMayqJTRUJ1n_fwYlW7YwAVUBNDvbRymNJDytk"
      ],
      description: "Don't treat God like a wishing well..",
      keywords: "Gracie Pike music, country gospel songs, Christian music merchandise, faith-based apparel"
    },
     {
      id: 2,
      title: "Music & Merch",
      category: "Music",
      images: [
        "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/Portfolio/Gracie%20Singing.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJncmFjaWUtcGlrZS9Qb3J0Zm9saW8vR3JhY2llIFNpbmdpbmcud2VicCIsImlhdCI6MTc1MDc3MjA4NiwiZXhwIjoyMzgxNDkyMDg2fQ.xqR_jeYAI2cwUcl9YZuABWO93q6ShJJiIEK8REmgYgM",
        "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/Portfolio/music.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJncmFjaWUtcGlrZS9Qb3J0Zm9saW8vbXVzaWMud2VicCIsImlhdCI6MTc1MDY4OTgxOCwiZXhwIjoyMzgxNDA5ODE4fQ.2e3NKDMayqJTRUJ1n_fwYlW7YwAVUBNDvbRymNJDytk"
      ],
      description: "Listen to my latest songs and take a piece of the music home with you with my exclusive collection of apparel and more.",
      keywords: "Gracie Pike music, country gospel songs, Christian music merchandise, faith-based apparel"
    },
    {
      id: 3,
      title: "Gracie Music Production",
      category: "Production",
      images: [
        "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/Portfolio/music%20production.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJncmFjaWUtcGlrZS9Qb3J0Zm9saW8vbXVzaWMgcHJvZHVjdGlvbi53ZWJwIiwiaWF0IjoxNzUwNjg5OTY5LCJleHAiOjIzODE0MDk5Njl9.sWot3jk8p6J5Aq5OozPuTH9-4QZztoZDteZZnj5gZzM",
        "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/Portfolio/music%20production.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJncmFjaWUtcGlrZS9Qb3J0Zm9saW8vbXVzaWMgcHJvZHVjdGlvbi53ZWJwIiwiaWF0IjoxNzUwNjg5OTY5LCJleHAiOjIzODE0MDk5Njl9.sWot3jk8p6J5Aq5OozPuTH9-4QZztoZDteZZnj5gZzM"
      ],
      description: "From songwriting to the final track, I pour my heart into every aspect of my music at my own production company.",
      keywords: "music production services, country gospel recording, Georgia music studio, faith-based music production"
    }
  ];

  const socialLinks = [
    {
      id: 1,
      name: "Spotify",
      url: "https://open.spotify.com/artist/23eu2aznCpnIJVgB8G5g7S?si=JuZLltgBRuKa5ssQ7dR6Qg",
      imageUrl: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/Socials/Spotify.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJncmFjaWUtcGlrZS9Tb2NpYWxzL1Nwb3RpZnkuanBnIiwiaWF0IjoxNzUwNjg2MDgwLCJleHAiOjIzODE0MDYwODB9.6m5Hfm6P9GWnyw9VlOJcgeXEVl_A1yIz1f2_F8eAo40",
      description: "Stream Gracie Pike's country gospel music on Spotify"
    },
    {
      id: 2,
      name: "Apple Music",
      url: "https://music.apple.com/us/artist/gracie-pike/210652860",
      imageUrl: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/Socials/apple-music.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJncmFjaWUtcGlrZS9Tb2NpYWxzL2FwcGxlLW11c2ljLmpwZyIsImlhdCI6MTc1MDY4NjA1NywiZXhwIjoyMzgxNDA2MDU3fQ.cs9xRP0H14U5WfuYWBEUdW8NwRA65Gpt2ccZnsd-qJY",
      description: "Listen to Gracie Pike's faith-based music on Apple Music"
    },
    {
      id: 3,
      name: "Instagram",
      url: "https://www.instagram.com/graciepikemusic?igsh=MTcxZzh6aWd4Y2ZzZQ%3D%3D&utm_source=qr",
      imageUrl: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/Socials/Instagranm.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJncmFjaWUtcGlrZS9Tb2NpYWxzL0luc3RhZ3Jhbm0ud2VicCIsImlhdCI6MTc1MDY4NjA5NCwiZXhwIjoyMzgxNDA2MDk0fQ.BcPFiRridVfp08ntJny-C4sZ0twBH_a1gQ6zc3XeHbo",
      description: "Follow Gracie Pike's musical journey on Instagram"
    },
    {
      id: 4,
      name: "TikTok",
      url: "https://www.tiktok.com/@graciepike?_t=ZT-8xPA4vtgWli&_r=1",
      imageUrl: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/Socials/Tiktok.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJncmFjaWUtcGlrZS9Tb2NpYWxzL1Rpa3Rvay53ZWJwIiwiaWF0IjoxNzUwNjg2MTE4LCJleHAiOjIzODE0MDYxMTh9.YmDQjnfIMp9hYOQSLkY831GfdlPa8z0MFS-6DqYoepk",
      description: "Watch Gracie Pike's music videos and behind-the-scenes content on TikTok"
    },
    {
      id: 5,
      name: "YouTube",
      url: "https://youtube.com/@graciepike?si=Acjkjx6evx0vCtJV",
      imageUrl: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/Socials/youtube-logo.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJncmFjaWUtcGlrZS9Tb2NpYWxzL3lvdXR1YmUtbG9nby53ZWJwIiwiaWF0IjoxNzUwNjg2MTMyLCJleHAiOjIzODE0MDYxMzJ9.GKCQKfsnqL6NZWuFXlxLAwi9En-4-0k1sjawyR1CHo4",
      description: "Subscribe to Gracie Pike's YouTube channel for music videos and performances"
    },
    {
      id: 6,
      name: "Facebook",
      url: "https://www.facebook.com/share/1BjvCCZcFA/?mibextid=wwXIfr",
      imageUrl: "https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/Socials/faceboojk.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJncmFjaWUtcGlrZS9Tb2NpYWxzL2ZhY2Vib29qay5wbmciLCJpYXQiOjE3NTA2ODYxNDMsImV4cCI6MjM4MTQwNjE0M30.Fq7aAJSB1ftOhAt3se_WUfA6cF-s4DRVV6R7_vOGhCI",
      description: "Connect with Gracie Pike on Facebook for updates and community"
    }
  ];

  return (
    <>
      {/* SEO Components */}
      <MetaTags
        title="Music Portfolio | Gracie Pike - Country Gospel Songs & Performances"
        description="Explore Gracie Pike's country gospel music portfolio featuring original faith-driven songs, live performances, and social media presence. Listen to her latest releases and connect with her music journey."
        keywords="Gracie Pike music portfolio, country gospel songs, faith-based music collection, Georgia gospel music, Christian country songs, original gospel music, Southern gospel performances"
        url="https://graciepike.com/portfolio"
      />
      <StructuredData />
      <Analytics />
      
      {/* Main Content */}
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="pt-28 pb-20 bg-gradient-to-br from-background to-amber-50/30 relative overflow-hidden" role="main">
            {/* Background decorations */}
            <div className="absolute top-20 right-10 w-48 h-48 border border-burgundy-200 opacity-10 rotate-12" aria-hidden="true"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-amber-400 opacity-5 rotate-45" aria-hidden="true"></div>
            
            <div className="container mx-auto px-6 relative z-10">
              {/* Section Header */}
              <header className="text-center mb-12 ornamental-border pb-8">
                <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                  <span className="text-burgundy-900">Portfolio</span>
                  <span className="block text-amber-600 text-4xl md:text-5xl mt-2">Collection</span>
                </h1>
                <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6" aria-hidden="true"></div>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif">
                  A curated selection of distinguished projects that exemplify 
                  the marriage of classical elegance with contemporary innovation.
                </p>
              </header>
              
              {/* Portfolio Grid */}
              <div className="flex justify-center mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full justify-items-center">
                  {projects.map((project, index) => (
                    <article 
                      key={project.id}
                      className="group bg-card luxury-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-200 animate-elegant-entrance w-full max-w-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Image Gallery */}
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <OptimizedImage 
                          src={project.images[0]}
                          alt={`${project.title} - ${project.description}`}
                          title={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          width={400}
                          height={300}
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/80 via-burgundy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex space-x-3">
                              <button 
                                className="flex items-center space-x-2 bg-burgundy-900 text-background px-4 py-2 hover:bg-burgundy-800 transition-colors"
                                aria-label={`View details for ${project.title}`}
                              >
                                <ExternalLink size={16} />
                                <span className="text-sm font-medium">Details</span>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Secondary image indicator */}
                        <div className="absolute top-4 right-4 w-12 h-12 border-2 border-background/80 overflow-hidden">
                          <OptimizedImage 
                            src={project.images[1]}
                            alt={`${project.title} secondary image`}
                            className="w-full h-full object-cover"
                            width={48}
                            height={48}
                            loading="lazy"
                          />
                        </div>
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-8">
                        <div className="mb-4">
                          <span className="inline-block bg-amber-100 text-burgundy-800 px-3 py-1 text-sm font-medium border border-amber-200">
                            {project.category}
                          </span>
                        </div>
                        <h2 className="text-2xl font-display font-bold text-burgundy-900 mb-4 group-hover:text-amber-600 transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6 font-serif">
                          {project.description}
                        </p>
                        
                        <button 
                          className="flex items-center text-burgundy-700 font-medium hover:text-amber-600 transition-colors group/btn"
                          aria-label={`Explore ${project.title} project`}
                        >
                          <span>Learn More</span>
                          <ChevronRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Connect With Gracie Section */}
              <section className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  <span className="text-burgundy-900">Connect With</span>
                  <span className="block text-amber-600 text-3xl md:text-4xl mt-2">Gracie</span>
                </h2>
                <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6" aria-hidden="true"></div>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-serif">
                  Follow Gracie's creative journey across all platforms and stay connected with her latest work.
                </p>
              </section>

              {/* Social Links Grid */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full justify-items-center">
                  {socialLinks.map((social, index) => (
                    <article 
                      key={social.id}
                      className="group bg-card luxury-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-200 animate-elegant-entrance w-full max-w-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Social Platform Image */}
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <OptimizedImage 
                          src={social.imageUrl}
                          alt={`${social.name} - ${social.description}`}
                          title={`Follow Gracie Pike on ${social.name}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          width={400}
                          height={300}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/60 to-transparent"></div>
                      </div>
                      
                      {/* Social Platform Info */}
                      <div className="p-8">
                        <h3 className="text-2xl font-display font-bold text-burgundy-900 mb-6 group-hover:text-amber-600 transition-colors">
                          {social.name}
                        </h3>
                        
                        <a 
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-burgundy-900 text-background px-6 py-3 hover:bg-burgundy-800 transition-colors duration-300 font-medium tracking-wide"
                          aria-label={`Visit Gracie Pike's ${social.name} profile`}
                        >
                          <ExternalLink size={16} />
                          <span>Visit</span>
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;