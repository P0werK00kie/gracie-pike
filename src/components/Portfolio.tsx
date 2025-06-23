import { ExternalLink, Eye, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      category: "Branding",
      images: [
        "photo-1487058792275-0ad4aaf24ca7",
        "photo-1493397212122-2b85dda8106b"
      ],
      description: "Vestibulum faucibus blandit dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum faucibus blandit dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      category: "Photography",
      images: [
        "photo-1433086966358-54859d0ed716",
        "photo-1470813740244-df37b8c1edcb"
      ],
      description: "Vestibulum faucibus blandit dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
    }
  ];

  const socialLinks = [
    {
      id: 1,
      name: "Spotify",
      url: "https://open.spotify.com/artist/23eu2aznCpnIJVgB8G5g7S?si=JuZLltgBRuKa5ssQ7dR6Qg",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b2730dd37e96b98133fb1f6bed3c"
    },
    {
      id: 2,
      name: "Apple Music",
      url: "https://music.apple.com/us/artist/gracie-pike/210652860",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b2730dd37e96b98133fb1f6bed3c"
    },
    {
      id: 3,
      name: "Instagram",
      url: "https://www.instagram.com/graciepikemusic?igsh=MTcxZzh6aWd4Y2ZzZQ%3D%3D&utm_source=qr",
      imageUrl: "https://scontent-atl3-2.cdninstagram.com/v/t51.75761-19/509835994_18503670202045434_7804250483685154797_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=100&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=BCo_hjCoxGEQ7kNvwGkePrT&_nc_oc=AdkfHPKjOL6vhS0NXESrqqKocQZr0u0eFGle6MgrTERACVQgzAXcvW3e-pLYisiihVg&_nc_zt=24&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_gid=MIi20YcB4pMK1tzFVa3doQ&oh=00_AfPcck5G_nnCtWl3iagrHqql5eeMQCFpY1ndkvksor1z0g&oe=685D5260"
    },
    {
      id: 4,
      name: "TikTok",
      url: "https://www.tiktok.com/@graciepike?_t=ZT-8xPA4vtgWli&_r=1",
      imageUrl: "https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      name: "YouTube",
      url: "https://youtube.com/@graciepike?si=Acjkjx6evx0vCtJV",
      imageUrl: "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      name: "Facebook",
      url: "https://www.facebook.com/share/1BjvCCZcFA/?mibextid=wwXIfr",
      imageUrl: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-background to-amber-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-48 h-48 border border-burgundy-200 opacity-10 rotate-12"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-amber-400 opacity-5 rotate-45"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 ornamental-border pb-8">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="text-burgundy-900">Portfolio</span>
            <span className="block text-amber-600 text-4xl md:text-5xl mt-2">Collection</span>
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif">
            A curated selection of distinguished projects that exemplify 
            the marriage of classical elegance with contemporary innovation.
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-card luxury-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-200 animate-elegant-entrance"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Gallery */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={`https://images.unsplash.com/${project.images[0]}?auto=format&fit=crop&w=600&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/80 via-burgundy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-3">
                      <button className="flex items-center space-x-2 bg-background/90 text-burgundy-900 px-4 py-2 hover:bg-background transition-colors">
                        <Eye size={16} />
                        <span className="text-sm font-medium">View</span>
                      </button>
                      <button className="flex items-center space-x-2 bg-burgundy-900 text-background px-4 py-2 hover:bg-burgundy-800 transition-colors">
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Details</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Secondary image indicator */}
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-background/80 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${project.images[1]}?auto=format&fit=crop&w=100&q=80`}
                    alt=""
                    className="w-full h-full object-cover"
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
                <h3 className="text-2xl font-display font-bold text-burgundy-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-serif">
                  {project.description}
                </p>
                
                <button className="flex items-center text-burgundy-700 font-medium hover:text-amber-600 transition-colors group/btn">
                  <span>Explore Project</span>
                  <ChevronRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Connect With Gracie Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-burgundy-900">Connect With</span>
            <span className="block text-amber-600 text-3xl md:text-4xl mt-2">Gracie</span>
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-serif">
            Follow Gracie's creative journey across all platforms and stay connected with her latest work.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialLinks.map((social, index) => (
            <div 
              key={social.id}
              className="group bg-card luxury-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-200 animate-elegant-entrance"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Social Platform Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={social.imageUrl}
                  alt={social.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                >
                  <ExternalLink size={16} />
                  <span>Visit Profile</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;