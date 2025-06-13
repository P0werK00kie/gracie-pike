
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      image: "photo-1487058792275-0ad4aaf24ca7",
      description: "Complete brand overhaul for a tech startup, including logo design, color palette, and brand guidelines."
    },
    {
      id: 2,
      title: "Creative Web Experience",
      category: "Web Design",
      image: "photo-1493397212122-2b85dda8106b",
      description: "Interactive portfolio website with custom animations and engaging user experience."
    },
    {
      id: 3,
      title: "Digital Art Installation",
      category: "Digital Art",
      image: "photo-1470813740244-df37b8c1edcb",
      description: "Immersive digital art piece combining traditional techniques with modern technology."
    },
    {
      id: 4,
      title: "Product Photography",
      category: "Photography",
      image: "photo-1487887235947-a955ef187fcc",
      description: "Commercial product photography series showcasing innovative drone technology."
    },
    {
      id: 5,
      title: "Architectural Visualization",
      category: "3D Design",
      image: "photo-1433086966358-54859d0ed716",
      description: "Stunning architectural renderings that bring conceptual designs to life."
    },
    {
      id: 6,
      title: "Motion Graphics Project",
      category: "Animation",
      image: "photo-1526374965328-7f61d4dc18c5",
      description: "Dynamic motion graphics sequence for a tech company's promotional campaign."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-25 animate-bounce delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Featured</span>
            <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A curated selection of my most impactful creative projects, 
            showcasing versatility and attention to detail.
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      <button className="flex items-center space-x-2 bg-white/90 text-gray-800 px-3 py-2 rounded-lg hover:bg-white transition-colors">
                        <Eye size={16} />
                        <span className="text-sm font-medium">View</span>
                      </button>
                      <button className="flex items-center space-x-2 bg-pink-500 text-white px-3 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Live</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
