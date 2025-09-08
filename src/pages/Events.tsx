import { Calendar, MapPin, Plane, Hotel, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MetaTags from '@/components/SEO/MetaTags';
import OptimizedImage from '@/components/SEO/ImageOptimization';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Upload } from 'lucide-react';

interface EventDate {
  date: string;
  startTime: string;
  endTime: string;
  description: string;
}

interface HotelBooking {
  name: string;
  website: string;
  phone?: string;
}

interface TransportationOption {
  type: string;
  name: string;
  website?: string;
  phone?: string;
  description: string;
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
  transportationOptions: TransportationOption[];
  nearestAirport: {
    name: string;
    code: string;
    website: string;
  };
}

const Events = () => {
  // Sample events data - this would typically come from a database or API
  const [isRsvpModalOpen, setIsRsvpModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const events: Event[] = [
    {
      id: 1,
      title: "Live At The Wayfarer Music Hall",
      description: "Join Gracie Pike for a 2 days live event of southern gospel music, featuring songs from her latest album and beloved classics that speak to the heart.",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
      dates: [
        { 
          date: "2025-09-06", 
          startTime: "19:00", 
          endTime: "21:30",
          description: "Opening night featuring live songs from Gracie's latest album"
        },
        { 
          date: "2025-09-07", 
          startTime: "15:00", 
          endTime: "21:00",
          description: "Meet and greet with Gracie starts at 3:00pm, Singing starts at 7:00pm"
        }
      ],
      locationName: "Wayfarer Music Hall",
      locationAddress: "123 North Lumpkin St, Monroe, GA 30655",
      hotelBookings: [
        {
          name: "VRBO Booking",
          website: "https://www.vrbo.com/search?destination=Monroe%2C%20Georgia%2C%20United%20States%20of%20America&regionId=8678&latLong=33.794838%2C-83.713226&flexibility=0_DAY&d1=2025-09-05&startDate=2025-09-05&d2=2025-09-07&endDate=2025-09-07&adults=2&upsellingNumNightsAdded=&theme=&userIntent=&semdtl=&upsellingDiscountTypeAdded=&categorySearch=&sort=RECOMMENDED"
        },
        {
          name: "Hotels.com",
          website: "https://www.hotels.com/Hotel-Search?destination=Monroe%2C%20Georgia%2C%20United%20States%20of%20America&regionId=8678&latLong=33.794838%2C-83.713226&flexibility=0_DAY&d1=2025-09-05&startDate=2025-09-05&d2=2025-09-07&endDate=2025-09-07&adults=2&rooms=1&upsellingNumNightsAdded=&theme=&userIntent=&semdtl=&upsellingDiscountTypeAdded=&categorySearch=&useRewards=false&sort=RECOMMENDED"
        }
      ],
      nearestAirport: {
        name: "Hartsfield Jackson International Airport",
        code: "ATL",
        website: "https://www.atl.com/"
      },
      transportationOptions: [
        {
          type: "Rideshare",
          name: "Southern Classic Transport",
          website: "https://www.southernclassictransport.com/",
          description: "Atlanta limo service with vehicles of every size for your needs."
        }
      ]
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

  const generateCalendarEvent = (event: Event, dateTime: EventDate) => {
    const eventDate = new Date(dateTime.date);
    const [startHours, startMinutes] = dateTime.startTime.split(':');
    const [endHours, endMinutes] = dateTime.endTime.split(':');
    
    const startDateTime = new Date(eventDate);
    startDateTime.setHours(parseInt(startHours), parseInt(startMinutes));
    
    const endDateTime = new Date(eventDate);
    endDateTime.setHours(parseInt(endHours), parseInt(endMinutes));
    
    // Format dates for calendar (YYYYMMDDTHHMMSS format)
    const formatCalendarDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const startFormatted = formatCalendarDate(startDateTime);
    const endFormatted = formatCalendarDate(endDateTime);
    
    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startFormatted}/${endFormatted}&details=${encodeURIComponent(`${event.description}\n\n${dateTime.description}\n\nLocation: ${event.locationName}\n${event.locationAddress}`)}&location=${encodeURIComponent(`${event.locationName}, ${event.locationAddress}`)}`;
    
    // Create ICS file content for other calendar apps
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Gracie Pike//Events//EN
BEGIN:VEVENT
UID:${event.id}-${dateTime.date}-${dateTime.startTime}@graciepike.com
DTSTAMP:${formatCalendarDate(new Date())}
DTSTART:${startFormatted}
DTEND:${endFormatted}
SUMMARY:${event.title}
DESCRIPTION:${event.description}\\n\\n${dateTime.description}
LOCATION:${event.locationName}, ${event.locationAddress}
END:VEVENT
END:VCALENDAR`;
    
    return { googleCalendarUrl, icsContent };
  };
  
  const handleAddToCalendar = (event: Event, dateTime: EventDate) => {
    const { googleCalendarUrl, icsContent } = generateCalendarEvent(event, dateTime);
    
    // Detect if user is on mobile or desktop
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile, try to open Google Calendar directly
      window.open(googleCalendarUrl, '_blank');
    } else {
      // For desktop, show options
      const userChoice = confirm('Add to Google Calendar? Click OK for Google Calendar, Cancel to download ICS file for other calendar apps.');
      
      if (userChoice) {
        window.open(googleCalendarUrl, '_blank');
      } else {
        // Download ICS file
        const blob = new Blob([icsContent], { type: 'text/calendar' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${event.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_${dateTime.date}.ics`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    }
  };

  return (
    <>
      <MetaTags
        title="Upcoming Events | Gracie Pike - Country Gospel Concerts & Shows"
        description="Join Gracie Pike at upcoming country gospel concerts, church performances, and special events across Georgia. Find dates, locations, and ticket information for all live shows and faith-based music events."
        keywords="Gracie Pike concerts, Georgia gospel events, country gospel shows, church performances, faith-based concerts, Southern gospel events, Christian country music shows, Georgia music events"
        url="https://graciepike.com/events"
      />
      
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-40 pb-20 bg-gradient-to-br from-background to-amber-50/30 relative overflow-hidden">
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
                  Join Gracie Pike for concerts, inspiring workshops, and special events that celebrate 
                  the power of faith-driven music and community.
                </p>
                
                {/* Photo/Video Upload Button */}
                <div className="mt-8">
                  <Dialog open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
                    <DialogTrigger asChild>
                      <button
                        className="bg-amber-600 text-background px-8 py-4 font-medium hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3 tracking-wide mx-auto"
                        aria-label="Upload photos and videos from the latest event"
                      >
                        <Upload className="w-5 h-5" />
                        <span>Upload Event Photos & Videos</span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl w-full h-[85vh] p-0">
                      <DialogHeader className="sr-only">
                        <DialogTitle>Upload Event Photos & Videos</DialogTitle>
                        <DialogDescription>
                          Share your photos and videos from the latest event with Gracie Pike.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="w-full h-full">
                        <iframe
                          src="https://api.leadconnectorhq.com/widget/form/fJVyO4wzV9ToYJ29RccP"
                          style={{width:'100%',height:'100%',border:'none',borderRadius:'3px'}}
                          id="inline-fJVyO4wzV9ToYJ29RccP" 
                          data-layout="{'id':'INLINE'}"
                          data-trigger-type="alwaysShow"
                          data-trigger-value=""
                          data-activation-type="alwaysActivated"
                          data-activation-value=""
                          data-deactivation-type="neverDeactivate"
                          data-deactivation-value=""
                          data-form-name="File Upload"
                          data-height="432"
                          data-layout-iframe-id="inline-fJVyO4wzV9ToYJ29RccP"
                          data-form-id="fJVyO4wzV9ToYJ29RccP"
                          title="File Upload"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
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
                      {/* Event Image - Full Width at Top */}
                      <div className="relative overflow-hidden aspect-[16/9]">
                        <OptimizedImage 
                          src={event.image}
                          alt={`${event.title} - ${event.description}`}
                          title={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          width={800}
                          height={450}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/60 to-transparent"></div>
                      </div>

                      {/* Event Title & Description - Centered */}
                      <div className="p-8 text-center border-b border-amber-200">
                        <h2 className="text-4xl font-display font-bold text-burgundy-900 mb-4 group-hover:text-amber-600 transition-colors">
                          {event.title}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed font-serif max-w-3xl mx-auto">
                          {event.description}
                        </p>
                      </div>

                      {/* Location Information - Centered under description */}
                      <div className="p-6 border-b border-amber-200">
                        <h3 className="flex items-center justify-center text-lg font-display font-semibold text-burgundy-900 mb-3">
                          <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                          Location
                        </h3>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="bg-amber-50 p-4 border border-amber-200 flex-1 text-center sm:text-left">
                            <p className="font-medium text-burgundy-900 font-serif">{event.locationName}</p>
                            <p className="text-muted-foreground font-serif">{event.locationAddress}</p>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <button
                                className="bg-amber-600 text-background px-6 py-3 font-medium hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 tracking-wide whitespace-nowrap"
                                aria-label={`RSVP for ${event.title} at ${event.locationName}`}
                              >
                                <Calendar className="w-5 h-5" />
                                <span>RSVP for this Event</span>
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl w-full h-[600px] p-0">
                              <DialogHeader className="sr-only">
                                <DialogTitle>RSVP for {event.title}</DialogTitle>
                                <DialogDescription>
                                  Please fill out the form below to RSVP for this event.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="w-full h-full">
                                <iframe
                                  src="https://api.leadconnectorhq.com/widget/form/uK18bBc5fr9bblV4hVVt"
                                  style={{width:'100%',height:'100%',border:'none',borderRadius:'3px'}}
                                  id="inline-uK18bBc5fr9bblV4hVVt" 
                                  data-layout="{'id':'INLINE'}"
                                  data-trigger-type="alwaysShow"
                                  data-trigger-value=""
                                  data-activation-type="alwaysActivated"
                                  data-activation-value=""
                                  data-deactivation-type="neverDeactivate"
                                  data-deactivation-value=""
                                  data-form-name="Sept 2025 Concert"
                                  data-height="449"
                                  data-layout-iframe-id="inline-uK18bBc5fr9bblV4hVVt"
                                  data-form-id="uK18bBc5fr9bblV4hVVt"
                                  title="Sept 2025 Concert"
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>

                      {/* Event Details - 2 Column Grid */}
                      <div className="p-8 space-y-8">
                        {/* Dates & Times - Multi-card 2-column layout */}
                        <div>
                          <h3 className="flex items-center text-lg font-display font-semibold text-burgundy-900 mb-4">
                            <Calendar className="w-5 h-5 mr-2 text-amber-600" />
                            Dates & Times
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {event.dates.map((dateTime, idx) => (
                              <div key={idx} className="bg-amber-50 p-4 border border-amber-200 space-y-2">
                                <div className="flex items-center text-burgundy-900">
                                  <Clock className="w-4 h-4 mr-2 text-amber-600" />
                                  <span className="font-serif font-medium">
                                    {formatDate(dateTime.date)}
                                  </span>
                                </div>
                                <div className="text-muted-foreground font-serif ml-6">
                                  {formatTime(dateTime.startTime)} - {formatTime(dateTime.endTime)}
                                </div>
                                <p className="text-sm text-muted-foreground font-serif ml-6 italic">
                                  {dateTime.description}
                                </p>
                                <div className="ml-6 pt-2">
                                  <button
                                    onClick={() => handleAddToCalendar(event, dateTime)}
                                    className="inline-flex items-center text-sm bg-burgundy-900 text-background px-4 py-2 hover:bg-burgundy-800 transition-colors"
                                  >
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Add to Calendar
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Airport Information - Single item */}
                        <div>
                          <h3 className="flex items-center text-lg font-display font-semibold text-burgundy-900 mb-4">
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

                        {/* Hotel Bookings - Multi-card 2-column layout */}
                        <div>
                          <h3 className="flex items-center text-lg font-display font-semibold text-burgundy-900 mb-4">
                            <Hotel className="w-5 h-5 mr-2 text-amber-600" />
                            Recommended Hotels
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
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

                        {/* Transportation Options - Multi-card 2-column layout */}
                        <div>
                          <h3 className="flex items-center text-lg font-display font-semibold text-burgundy-900 mb-4">
                            <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            Transportation Options
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {event.transportationOptions.map((transport, idx) => (
                              <div key={idx} className="bg-amber-50 p-4 border border-amber-200">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-medium text-burgundy-900">
                                    {transport.name} ({transport.type})
                                  </h4>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3 font-serif">
                                  {transport.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-2">
                                  {transport.website && (
                                    <a
                                      href={transport.website}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-sm bg-burgundy-900 text-background px-4 py-2 hover:bg-burgundy-800 transition-colors"
                                    >
                                      Visit Website
                                    </a>
                                  )}
                                  {transport.phone && (
                                    <a
                                      href={`tel:${transport.phone}`}
                                      className="inline-flex items-center text-sm border border-burgundy-700 text-burgundy-700 px-4 py-2 hover:bg-burgundy-700 hover:text-background transition-colors"
                                    >
                                      {transport.phone}
                                    </a>
                                  )}
                                </div>
                              </div>
                            ))}
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
        
        {/* Load the form embed script */}
        <script src="https://link.msgsndr.com/js/form_embed.js" async></script>
        
        <Footer />
      </div>
    </>
  );
};

export default Events;
