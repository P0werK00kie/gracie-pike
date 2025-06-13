
import { Heart, Star, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Every project is infused with genuine passion and creative energy"
    },
    {
      icon: Star,
      title: "Excellence First",
      description: "Commitment to delivering exceptional quality in every detail"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing boundaries with fresh ideas and cutting-edge approaches"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-100 to-transparent rounded-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-100 to-transparent rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Hello, I'm a
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Creative Visionary
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With a passion for transforming ideas into stunning visual narratives, 
              I specialize in creating unique digital experiences that resonate with 
              audiences and drive meaningful connections.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My approach blends artistic intuition with strategic thinking, ensuring 
              every project not only looks beautiful but also serves its purpose effectively.
            </p>
            
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
              Download Resume
            </button>
          </div>
          
          {/* Right Content - Values */}
          <div className="space-y-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
