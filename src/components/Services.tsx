
import { Palette, Monitor, Camera, Zap, Brush, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Creating cohesive visual identities that tell your unique story and connect with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography"]
    },
    {
      icon: Monitor,
      title: "Web Design",
      description: "Crafting beautiful, responsive websites that combine stunning visuals with seamless functionality.",
      features: ["UI/UX Design", "Responsive Layout", "Interactive Elements", "User Experience"]
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and products with artistic vision and professional technical expertise.",
      features: ["Product Photography", "Portrait Sessions", "Event Coverage", "Creative Direction"]
    },
    {
      icon: Brush,
      title: "Digital Art",
      description: "Creating original digital artwork and illustrations that bring imagination to life.",
      features: ["Digital Illustrations", "Concept Art", "Character Design", "Environmental Art"]
    },
    {
      icon: Zap,
      title: "Motion Graphics",
      description: "Bringing designs to life through engaging animations and dynamic visual storytelling.",
      features: ["2D Animation", "Video Editing", "Title Sequences", "Promotional Videos"]
    },
    {
      icon: Code,
      title: "Creative Development",
      description: "Developing interactive experiences that push the boundaries of web technology.",
      features: ["Interactive Websites", "Web Applications", "Creative Coding", "Custom Solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-pink-100 to-transparent rounded-full opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-100 to-transparent rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Creative</span>
            <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive creative solutions tailored to bring your vision to life 
            with artistic excellence and professional delivery.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-pink-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Learn More Link */}
              <button className="mt-6 text-pink-600 font-semibold hover:text-purple-600 transition-colors group-hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
