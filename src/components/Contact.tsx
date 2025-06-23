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

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-burgundy-50/30 to-amber-50/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 border border-burgundy-200 opacity-10 rotate-45"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-amber-400 opacity-5 -rotate-12"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 ornamental-border pb-8">
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
        
        {/* Centered Contact Form */}
        <div className="flex justify-center">
          <div className="bg-card border border-amber-200 luxury-shadow p-10 w-full max-w-2xl">
            <h3 className="text-3xl font-display font-bold text-burgundy-900 mb-8 text-center">Send a Message</h3>
            
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
        </div>
      </div>
    </section>
  );
};

export default Contact;