
import { Mail, Phone, MapPin, Send, Heart } from 'lucide-react';
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
      title: "Location",
      info: "Creative District, City",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-36 h-36 bg-purple-200 rounded-full opacity-25 animate-bounce delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Let's Create</span>
            <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I'd love to hear about your project 
            and explore how we can create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-gray-600 hover:text-pink-600 transition-colors"
                        >
                          {info.info}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Fun Quote */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-start space-x-4">
                <Heart className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg leading-relaxed mb-4">
                    "Every great project starts with a conversation. Let's turn your ideas 
                    into something extraordinary!"
                  </p>
                  <p className="text-pink-100 font-medium">— Creative Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
