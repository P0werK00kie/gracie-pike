import { Calendar, MapPin, Plane, Hotel, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MetaTags from '@/components/SEO/MetaTags';
import OptimizedImage from '@/components/SEO/ImageOptimization';

interface EventDate {
  date: string;
  time: string;
}

interface HotelBooking {
  name: string;
  website: string;
  phone?: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  dates: EventDate[];
  locationName: string;
  locationAddress: string;
  hotelBookings: HotelBooking[];
  nearestAirport: {
    name: string;
    code: string;
    website: string;
  };
}

const Events = () => {
  // Sample events data - this would typically come from a database or API
  const events: Event[] = [
    {
      id: 1,
      title: "Live At The Wayfarer",
      description: "Join Gracie Pike for a 2 days live event of country gospel music, featuring songs from her latest album and beloved classics that speak to the heart.",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
      dates: [
        { date: "2025-03-15", time: "19:00" },
        { date: "2025-03-16", time: "19:00" }
      ],
      locationName: "Historic Ryman Auditorium",
      locationAddress: "116 Rep. John Lewis Way N, Nashville, TN 37219",
      hotelBookings: [
        {
          name: "The Hermitage Hotel",
          website: "https://www.thehermitagehotel.com",
          phone: "(615) 244-3121"
        },
        {
          name: "Omni Nashville Hotel",
          website: "https://www.omnihotels.com/hotels/nashville",
          phone: "(615) 782-5300"
        }
      ],
      nearestAirport: {
        name: "Nashville International Airport",
        code: "BNA",
        website: "https://www.flynashville.com"
      }
    },
    {
      id: 2,
      title: "Faith & Music Workshop",
      description: "An inspiring workshop combining songwriting, faith, and music production. Learn about the creative process behind country gospel music and discover your own voice.",
      image: "https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800",
      dates: [
        { date: "2025-04-20", time: "10:00" },
        { date: "2025-04-20", time: "14:00" }
      ],
      locationName: "Georgia Music Hall of Fame",
      locationAddress: "200 Martin Luther King Jr Blvd, Macon, GA 31201",
      hotelBookings: [
        {
          name: "Fairfield Inn & Suites Macon",
          website: "https://www.marriott.com/hotels/travel/mcnfi-fairfield-inn-and-suites-macon",
          phone: "(478) 757-8500"
        }
      ],
      nearestAirport: {
        name: "Middle Georgia Regional Airport",
        code: "MCN",
        website: "https://www.flymacon.com"
      }
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <>
      <MetaTags
        title="Events | Gracie Pike - Upcoming Concerts & Workshops"
        description="Join Gracie Pike at upcoming country gospel concerts, faith-based music workshops, and special events. Find dates, locations, and booking information for all performances."
        keywords="Gracie Pike events, country gospel concerts, music workshops, Georgia concerts, faith-based music events, live performances"
        url="https://graciepike.com/events"
      />
      
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 bg-gradient-to-br from-background to-amber-50/30 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-20 right-10 w-64 h-64 border border-burgundy-200 opacity-10 rotate-12" aria-hidden="true"></div>
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-amber-400 opacity-5 -rotate-12" aria-hidden="true"></div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-16 ornamental-border pb-8">
                <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                  <span className="text-burgundy-900">Upcoming</span>
                  <span className="block text-amber-600 text-4xl md:text-5xl mt-2">Events</span>
                </h1>
                <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6" aria-hidden="true"></div>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif">
                  Join Gracie Pike for intimate concerts, inspiring workshops, and special events that celebrate 
                  the power of faith-driven music and community.
                </p>
              </div>
            </div>
          </section>

          {/* Events Section */}
          <section className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
              {events.length === 0 ? (
                <div className="text-center py-20">
                  <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
                  <h2 className="text-3xl font-display font-bold text-burgundy-900 mb-4">
                    No Events Scheduled
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto font-serif">
                    Stay tuned for upcoming concerts and workshops. Follow Gracie on social media for the latest announcements.
                  </p>
                </div>
              ) : (
                <div className="grid lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
                  {events.map((event, index) => (
                    <article 
                      key={event.id}
                      className="group bg-card luxury-shadow hover:shadow-2xl transition-all duration-500 border border-amber-200 animate-elegant-entrance"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Event Image */}
                        <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
                          <OptimizedImage 
                            src={event.image}
                            alt={`${event.title} - ${event.description}`}
                            title={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            width={600}
                            height={450}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/60 to-transparent"></div>
                        </div>

                        {/* Event Details */}
                        <div className="p-8 flex flex-col justify-between">
                          <div>
                            <h2 className="text-3xl font-display font-bold text-burgundy-900 mb-4 group-hover:text-amber-600 transition-colors">
                              {event.title}
                            </h2>
                            
                            <p className="text-muted-foreground leading-relaxed mb-6 font-serif">
                              {event.description}
                            </p>

                            {/* Dates & Times */}
                            <div className="mb-6">
                              <h3 className="flex items-center text-lg font-display font-semibold text-burgundy-900 mb-3">
                                <Calendar className="w-5 h-5 mr-2 text-amber-600" />
                                Dates & Times
                              </h3>
                              <div className="space-y-2">
                                {event.dates.map((dateTime, idx) => (
                                  <div key={idx} className="flex items-center text-muted-foreground">
                                    <Clock className="w-4 h-4 mr-2 text-amber-600" />
                                    <span className="font-serif">
                                      {formatDate(dateTime.date)} at {formatTime(dateTime.time)}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Location */}
                            <div className="mb-6">
                              <h3 className="flex items-center text-lg font-display font-semibold text-burgundy-900 mb-3">
                                <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                                Location
                              </h3>
                              <div className="text-muted-foreground font-serif">
                                <p className="font-medium">{event.locationName}</p>
                                <p>{event.locationAddress}</p>
                              </div>
                            </div>

                            {/* Hotel Bookings */}
                            <div className="mb-6">
                              <h3 className="flex items-center text-lg font-display font-semibold text-burgundy-900 mb-3">
                                <Hotel className="w-5 h-5 mr-2 text-amber-600" />
                                Recommended Hotels
                              </h3>
                              <div className="space-y-3">
                                {event.hotelBookings.map((hotel, idx) => (
                                  <div key={idx} className="bg-amber-50 p-4 border border-amber-200">
                                    <h4 className="font-medium text-burgundy-900 mb-2">{hotel.name}</h4>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                      <a
                                        href={hotel.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm bg-burgundy-900 text-background px-4 py-2 hover:bg-burgundy-800 transition-colors"
                                      >
                                        Book Online
                                      </a>
                                      {hotel.phone && (
                                        <a
                                          href={`tel:${hotel.phone}`}
                                          className="inline-flex items-center text-sm border border-burgundy-700 text-burgundy-700 px-4 py-2 hover:bg-burgundy-700 hover:text-background transition-colors"
                                        >
                                          {hotel.phone}
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Airport Information */}
                            <div className="mb-6">
                              <h3 className="flex items-center text-lg font-display font-semibold text-burgundy-900 mb-3">
                                <Plane className="w-5 h-5 mr-2 text-amber-600" />
                                Nearest Airport
                              </h3>
                              <div className="bg-amber-50 p-4 border border-amber-200">
                                <h4 className="font-medium text-burgundy-900 mb-2">
                                  {event.nearestAirport.name} ({event.nearestAirport.code})
                                </h4>
                                <a
                                  href={event.nearestAirport.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-sm bg-burgundy-900 text-background px-4 py-2 hover:bg-burgundy-800 transition-colors"
                                >
                                  <Plane className="w-4 h-4 mr-2" />
                                  Visit Airport Website
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* Contact for Tickets */}
                          <div className="pt-6 border-t border-amber-200">
                            <button 
                              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                              className="w-full bg-burgundy-900 text-background py-4 font-medium hover:bg-burgundy-800 transition-colors duration-300 shadow-lg tracking-wide"
                            >
                              Contact for Tickets & Information
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Events;