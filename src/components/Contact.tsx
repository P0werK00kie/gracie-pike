import { Mail, Phone, MapPin, Send, Clock, Calendar, User } from 'lucide-react';
import { useState } from 'react';
import { supabase, type GraciePikeContactSubmission, type ShowBookingSubmission } from '@/lib/supabase';
import { toast } from '@/components/ui/sonner';

const Contact = () => {
  // Contact form state
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);

  // Show booking form state
  const [bookingFormData, setBookingFormData] = useState({
    full_name: '',
    phone_number: '',
    email: '',
    preferred_date: '',
    preferred_time: '',
    message: '',
    location: ''
  });
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);

  // Contact form handlers
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!contactFormData.name || !contactFormData.email || !contactFormData.subject || !contactFormData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactFormData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsContactSubmitting(true);

    try {
      const submission: Omit<GraciePikeContactSubmission, 'id' | 'created_at' | 'updated_at'> = {
        name: contactFormData.name.trim(),
        email: contactFormData.email.trim(),
        subject: contactFormData.subject.trim(),
        message: contactFormData.message.trim()
      };

      const { data, error } = await supabase
        .from('Gracie_Pike_Contact')
        .insert([submission])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        toast.error('Failed to send message. Please try again.');
        return;
      }

      // Success
      toast.success('Thank you! Your message has been sent successfully.');
      
      // Reset form
      setContactFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsContactSubmitting(false);
    }
  };

  // Show booking form handlers
  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBookingFormData({
      ...bookingFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!bookingFormData.full_name || !bookingFormData.phone_number || !bookingFormData.email || 
        !bookingFormData.preferred_date || !bookingFormData.preferred_time || !bookingFormData.location) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(bookingFormData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Phone validation (basic format check)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(bookingFormData.phone_number.replace(/[\s\-\(\)]/g, ''))) {
      toast.error('Please enter a valid phone number');
      return;
    }

    // Date validation (must be in the future)
    const selectedDate = new Date(bookingFormData.preferred_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      toast.error('Please select a future date');
      return;
    }

    setIsBookingSubmitting(true);

    try {
      const submission: Omit<ShowBookingSubmission, 'id' | 'created_at'> = {
        full_name: bookingFormData.full_name.trim(),
        phone_number: bookingFormData.phone_number.trim(),
        email: bookingFormData.email.trim(),
        preferred_date: bookingFormData.preferred_date,
        preferred_time: bookingFormData.preferred_time,
        location: bookingFormData.location.trim(),
        message: bookingFormData.message.trim() || null
      };

      const { data, error } = await supabase
        .from('show_bookings')
        .insert([submission])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        toast.error('Failed to submit booking request. Please try again.');
        return;
      }

      // Success
      toast.success('Thank you! Your show booking request has been submitted successfully.');
      
      // Reset form
      setBookingFormData({
        full_name: '',
        phone_number: '',
        email: '',
        preferred_date: '',
        preferred_time: '',
        message: '',
        location: ''
      });

    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsBookingSubmitting(false);
    }
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
        
        {/* Side-by-Side Forms */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Contact Form - Left Side */}
          <div className="flex-1 lg:w-[45%]">
            <div className="bg-card border border-amber-200 luxury-shadow p-8">
              <h3 className="text-3xl font-display font-bold text-burgundy-900 mb-8 text-center">Send a Message</h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={contactFormData.name}
                      onChange={handleContactChange}
                      className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all font-serif"
                      placeholder="Enter your name"
                      required
                      disabled={isContactSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={contactFormData.email}
                      onChange={handleContactChange}
                      className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all font-serif"
                      placeholder="Enter your email"
                      required
                      disabled={isContactSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={contactFormData.subject}
                    onChange={handleContactChange}
                    className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all font-serif"
                    placeholder="Music, Production or ..."
                    required
                    disabled={isContactSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={contactFormData.message}
                    onChange={handleContactChange}
                    rows={6}
                    className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all resize-none font-serif"
                    placeholder="Please input your message..."
                    required
                    disabled={isContactSubmitting}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isContactSubmitting}
                  className="w-full bg-burgundy-900 text-background py-4 font-medium hover:bg-burgundy-800 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  <span>{isContactSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Show Booking Form - Right Side */}
          <div className="flex-1 lg:w-[45%]">
            <div className="bg-card border border-amber-200 luxury-shadow p-8">
              <h3 className="text-3xl font-display font-bold text-burgundy-900 mb-8 text-center">Book a Show</h3>
              
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div>
                  <label htmlFor="booking-name" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="booking-name"
                    name="full_name"
                    value={bookingFormData.full_name}
                    onChange={handleBookingChange}
                    className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all font-serif"
                    placeholder="Enter your full name"
                    required
                    disabled={isBookingSubmitting}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="booking-phone" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="booking-phone"
                      name="phone_number"
                      value={bookingFormData.phone_number}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all font-serif"
                      placeholder="(555) 123-4567"
                      required
                      disabled={isBookingSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="booking-email" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="booking-email"
                      name="email"
                      value={bookingFormData.email}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all font-serif"
                      placeholder="Enter your email"
                      required
                      disabled={isBookingSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="booking-location" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                    City & State *
                  </label>
                  <input
                    type="text"
                    id="booking-location"
                    name="location"
                    value={bookingFormData.location}
                    onChange={handleBookingChange}
                    className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all font-serif"
                    placeholder="e.g., Atlanta, GA"
                    required
                    disabled={isBookingSubmitting}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="booking-date" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="booking-date"
                      name="preferred_date"
                      value={bookingFormData.preferred_date}
                      onChange={handleBookingChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all font-serif"
                      required
                      disabled={isBookingSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="booking-time" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      id="booking-time"
                      name="preferred_time"
                      value={bookingFormData.preferred_time}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all font-serif"
                      required
                      disabled={isBookingSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="booking-message" className="block text-sm font-medium text-burgundy-800 mb-3 tracking-wide">
                    Additional Message
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    value={bookingFormData.message}
                    onChange={handleBookingChange}
                    rows={4}
                    className="w-full px-4 py-4 border border-amber-300 bg-background focus:ring-2 focus:ring-burgundy-900 focus:border-transparent transition-all resize-none font-serif"
                    placeholder="Tell us about your event, venue details, or any special requests..."
                    disabled={isBookingSubmitting}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isBookingSubmitting}
                  className="w-full bg-burgundy-900 text-background py-4 font-medium hover:bg-burgundy-800 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Calendar size={20} />
                  <span>{isBookingSubmitting ? 'Submitting...' : 'Submit Booking Request'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;