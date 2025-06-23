import { Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
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
            
            <button 
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-burgundy-900 text-background px-8 py-3 font-medium hover:bg-burgundy-800 transition-colors duration-300 shadow-lg tracking-wide"
            >
              View Portfolio
            </button>
          </div>
          
          {/* Right Content - Portrait */}
          <div className="space-y-12">
            {/* Portrait Section */}
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-burgundy-50 to-amber-50 luxury-shadow border border-amber-200 overflow-hidden relative">
                <img 
                  src="https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/gracie-pike/About/787b5600-e206-4cc3-903d-bfed3888788b.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJncmFjaWUtcGlrZS9BYm91dC83ODdiNTYwMC1lMjA2LTRjYzMtOTAzZC1iZmVkMzg4ODc4OGIuSlBHIiwiaWF0IjoxNzUwNjUzMjk0LCJleHAiOjIzODEzNzMyOTR9.jASx69X0wZHtsicoe8awsAJqdUJ7t0s6LS8tlg3gUZc"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
