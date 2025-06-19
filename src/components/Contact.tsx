
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "hello@creativestudio.com",
      action: "mailto:hello@creativestudio.com"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Studio",
      info: "Creative Quarter, Metropolitan District",
      action: null
    },
    {
      icon: Clock,
      title: "Hours",
      info: "Monday - Friday, 9:00 - 18:00",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-burgundy-50/30 to-amber-50/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 border border-burgundy-200 opacity-10 rotate-45"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-amber-400 opacity-5 -rotate-12"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 ornamental-border pb-8">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="text-burgundy-900">Let's Create</span>
            <span className="block text-amber-600 text-4xl md:text-5xl mt-2">Something Extraordinary</span>
          </h2>
          <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif">
            Every exceptional project begins with a thoughtful conversation. 
            I invite you to share your vision and explore the possibilities together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card border border-amber-200 luxury-shadow p-10">
            <h3 className="text-3xl font-display font-bold text-burgundy-900 mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all font-serif"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all font-serif"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                  Project Type
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all font-serif"
                  placeholder="Brand Identity, Photography, Web Design..."
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all resize-none font-serif"
                  placeholder="Tell me about your vision, timeline, and goals..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-burgundy-900 text-background py-4 font-medium hover:bg-burgundy-800 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 tracking-wide"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          
          {/* Contact Info & Studio Images */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-card border border-amber-200 luxury-shadow p-8">
              <h3 className="text-2xl font-display font-bold text-burgundy-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-burgundy-900 to-burgundy-800 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-burgundy-800 mb-1 tracking-wide">{info.title}</h4>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-muted-foreground hover:text-burgundy-700 transition-colors font-serif"
                        >
                          {info.info}
                        </a>
                      ) : (
                        <p className="text-muted-foreground font-serif">{info.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Studio Glimpse */}
            <div className="bg-gradient-to-br from-burgundy-900 to-burgundy-800 text-background p-8 luxury-shadow">
              <h3 className="text-2xl font-display font-bold mb-6">Studio Glimpse</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="aspect-square bg-burgundy-700 overflow-hidden">
                  <img 
                    src="https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Brokers/Filler%20Image/Filler.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9Ccm9rZXJzL0ZpbGxlciBJbWFnZS9GaWxsZXIuanBnIiwiaWF0IjoxNzUwMzUxMTQ4LCJleHAiOjIzODEwNzExNDh9.mNmjblQw3Kd5ewDrJnBdHzbbc2BvOFhJjYPgCyJo3PA"
                    alt="Studio workspace"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="aspect-square bg-burgundy-700 overflow-hidden">
                  <img 
                    src="https://wbuiebxqdjuxhvdtiata.supabase.co/storage/v1/object/sign/files/GECON/Brokers/Filler%20Image/Filler.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMjU3NzlmNC01ZjdjLTRjZWEtYmM2MS1mYjMwZjllNzkxM2EiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy9HRUNPTi9Ccm9rZXJzL0ZpbGxlciBJbWFnZS9GaWxsZXIuanBnIiwiaWF0IjoxNzUwMzUxMTQ4LCJleHAiOjIzODEwNzExNDh9.mNmjblQw3Kd5ewDrJnBdHzbbc2BvOFhJjYPgCyJo3PA"
                    alt="Creative process"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>
              
              <p className="text-burgundy-100 leading-relaxed font-serif mb-6">
                "Excellence is never an accident. It is always the result of high intention, 
                sincere effort, and intelligent execution."
              </p>
              <p className="text-amber-300 font-medium">— Studio Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
