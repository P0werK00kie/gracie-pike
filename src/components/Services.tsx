
import { Palette, Camera, Monitor, Brush, Award, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Crafting distinctive visual identities that embody your values and resonate with discerning audiences.",
      features: ["Logo & Mark Design", "Brand Guidelines", "Stationery Systems", "Brand Applications"],
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      icon: Camera,
      title: "Fine Art Photography",
      description: "Capturing the essence of luxury through sophisticated composition and masterful lighting techniques.",
      features: ["Portrait Sessions", "Product Photography", "Architectural Photography", "Creative Direction"],
      image: "photo-1470813740244-df37b8c1edcb"
    },
    {
      icon: Monitor,
      title: "Digital Experiences",
      description: "Creating elegant digital environments that combine classical aesthetics with contemporary functionality.",
      features: ["Website Design", "User Experience", "Interactive Elements", "Responsive Design"],
      image: "photo-1493397212122-2b85dda8106b"
    },
    {
      icon: Brush,
      title: "Visual Arts",
      description: "Original artistic works and illustrations that bring imagination to life with classical sensibility.",
      features: ["Digital Illustrations", "Concept Development", "Art Direction", "Creative Consultation"],
      image: "photo-1433086966358-54859d0ed716"
    },
    {
      icon: Award,
      title: "Luxury Consulting",
      description: "Strategic creative guidance for brands seeking to establish or enhance their luxury market position.",
      features: ["Brand Strategy", "Visual Audit", "Market Positioning", "Creative Direction"],
      image: "photo-1487887235947-a955ef187fcc"
    },
    {
      icon: Users,
      title: "Collaborative Projects",
      description: "Partnership opportunities for ambitious projects that push creative boundaries while maintaining elegance.",
      features: ["Creative Partnerships", "Project Management", "Team Collaboration", "Strategic Planning"],
      image: "photo-1526374965328-7f61d4dc18c5"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-amber-50/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 border border-burgundy-100 opacity-20 rotate-12"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-400 opacity-5 -rotate-12"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 ornamental-border pb-8">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="text-burgundy-900">Creative</span>
            <span className="block text-amber-600 text-4xl md:text-5xl mt-2">Services</span>
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif">
            Comprehensive creative solutions delivered with the precision of craftsmanship 
            and the vision of artistic excellence.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card border border-amber-200 luxury-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-elegant-entrance"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Service Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=500&q=80`}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/60 to-transparent"></div>
                
                {/* Icon overlay */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-background/90 flex items-center justify-center group-hover:bg-burgundy-900 group-hover:text-background transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-burgundy-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed font-serif">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-amber-400 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Learn More Link */}
                <button className="text-burgundy-700 font-medium hover:text-amber-600 transition-colors group-hover:underline tracking-wide">
                  Inquire About Service →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-background p-12 luxury-shadow">
            <h3 className="text-3xl font-display font-bold mb-4">Begin Your Creative Journey</h3>
            <p className="text-xl text-burgundy-100 mb-8 max-w-2xl mx-auto font-serif">
              Ready to elevate your brand with timeless elegance? Let's discuss how we can bring your vision to life.
            </p>
            <button className="bg-amber-400 text-burgundy-900 px-10 py-4 font-medium hover:bg-amber-300 transition-colors duration-300 shadow-lg tracking-wide">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
