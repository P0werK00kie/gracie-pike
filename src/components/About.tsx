
import { Award, Users, Clock } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Excellence",
      description: "Recognized for outstanding creative work and client satisfaction"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building lasting partnerships through trust and exceptional service"
    },
    {
      icon: Clock,
      title: "Heritage",
      description: "Timeless design principles rooted in classical artistic traditions"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 border border-amber-200 opacity-10 rotate-12"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-burgundy-900 opacity-5 rotate-45"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Ornamental line */}
            <div className="w-24 h-0.5 bg-amber-400"></div>
            
            <h2 className="text-5xl md:text-6xl font-display font-bold text-burgundy-900 leading-tight">
              Artisan of
              <span className="block text-amber-600">Visual Stories</span>
            </h2>
            
            <div className="space-y-6 font-serif text-lg leading-relaxed text-muted-foreground">
              <p>
                With a profound appreciation for classical aesthetics and contemporary innovation, 
                I specialize in creating visual narratives that transcend fleeting trends to 
                achieve timeless elegance.
              </p>
              
              <p>
                My approach marries the sophisticated principles of traditional artistry with 
                modern techniques, ensuring each project resonates with both heritage and 
                contemporary relevance.
              </p>
              
              <p>
                Every collaboration begins with understanding your unique story, values, and 
                aspirations, translating them into visual expressions that captivate and endure.
              </p>
            </div>
            
            <button className="bg-burgundy-900 text-background px-8 py-3 font-medium hover:bg-burgundy-800 transition-colors duration-300 shadow-lg tracking-wide">
              Download Portfolio
            </button>
          </div>
          
          {/* Right Content - Portrait and Achievements */}
          <div className="space-y-12">
            {/* Portrait Section */}
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-burgundy-50 to-amber-50 luxury-shadow border border-amber-200 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80"
                  alt="Creative professional portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-burgundy-900/10"></div>
              </div>
              
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-amber-400 -z-10"></div>
              
              {/* Floating accent */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-burgundy-900 opacity-10 rotate-45"></div>
            </div>
            
            {/* Achievements */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-6 p-6 bg-card border border-amber-200 luxury-shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-burgundy-900 to-burgundy-800 flex items-center justify-center">
                    <achievement.icon className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-burgundy-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-serif">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
