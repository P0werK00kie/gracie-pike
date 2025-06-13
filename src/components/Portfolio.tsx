
import { ExternalLink, Eye, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Branding', 'Photography', 'Digital Art', 'Web Design'];
  
  const projects = [
    {
      id: 1,
      title: "Heritage Brand Revival",
      category: "Branding",
      images: [
        "photo-1487058792275-0ad4aaf24ca7",
        "photo-1493397212122-2b85dda8106b"
      ],
      description: "Complete brand transformation for a century-old establishment, blending heritage with contemporary elegance."
    },
    {
      id: 2,
      title: "Architectural Photography Series",
      category: "Photography",
      images: [
        "photo-1433086966358-54859d0ed716",
        "photo-1470813740244-df37b8c1edcb"
      ],
      description: "Capturing the soul of classical architecture through contemporary photographic techniques."
    },
    {
      id: 3,
      title: "Luxury Product Showcase",
      category: "Photography",
      images: [
        "photo-1487887235947-a955ef187fcc",
        "photo-1526374965328-7f61d4dc18c5"
      ],
      description: "Elegant product photography that emphasizes craftsmanship and luxury appeal."
    },
    {
      id: 4,
      title: "Classical Web Experience",
      category: "Web Design",
      images: [
        "photo-1493397212122-2b85dda8106b",
        "photo-1487058792275-0ad4aaf24ca7"
      ],
      description: "Sophisticated digital experience combining classical aesthetics with modern functionality."
    },
    {
      id: 5,
      title: "Fine Art Collection",
      category: "Digital Art",
      images: [
        "photo-1470813740244-df37b8c1edcb",
        "photo-1433086966358-54859d0ed716"
      ],
      description: "Original digital artwork exploring the intersection of classical and contemporary artistic expression."
    },
    {
      id: 6,
      title: "Corporate Identity System",
      category: "Branding",
      images: [
        "photo-1526374965328-7f61d4dc18c5",
        "photo-1487887235947-a955ef187fcc"
      ],
      description: "Comprehensive visual identity system for a prestigious consulting firm."
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-background to-amber-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-48 h-48 border border-burgundy-200 opacity-10 rotate-12"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-amber-400 opacity-5 rotate-45"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 ornamental-border pb-8">
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 font-medium transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-burgundy-900 text-background border-burgundy-900'
                  : 'text-burgundy-700 border-burgundy-300 hover:border-burgundy-700 hover:text-burgundy-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
        
        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-background px-12 py-4 font-medium hover:from-burgundy-800 hover:to-burgundy-700 transition-all duration-300 shadow-lg hover:shadow-xl tracking-wide">
            View Complete Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
