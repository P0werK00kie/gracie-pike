import { Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-background relative overflow-hidden">
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
              Hey, I'm
              <span className="block text-amber-600">Gracie Pike</span>
            </h2>
            
            <div className="space-y-6 font-serif text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a singer-songwriter right here in Monroe, Georgia, and I believe in the power of a good story and an honest song.
              </p>
              
              <p>
                Music and faith have been the two constants in my life for as long as I can remember. Growing up as one of eight kids, our home was always full of noise, love, and music. My father is a preacher, and from a young age, I saw how a song could lift a spirit and bring people together in a way that nothing else could. It was in that little country church that I first found my voice and felt the calling to share my own songs.
              </p>
              
              <p>
                My music is a reflection of my life—my faith in God, my Southern roots, and the everyday stories of hope and struggle that we all share. It's got a country soul and a gospel heart, and every lyric I write is a piece of my story that I hope resonates with yours. For me, songwriting is like a conversation with God, and performing is my way of sharing that conversation with you.
              </p>
              
              <p>
                Beyond music, I'm a business owner and, most importantly, a woman striving to live a life of faith. Whether I'm writing a new melody, running my business, or spending time with my family, my goal is the same: to shine a little light and share the grace that I've been so freely given.
              </p>
              
              <p>
                I hope my music meets you wherever you are and reminds you that you're not alone on this journey.
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
                  alt="Gracie Pike portrait"
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