"use client";
import React, { useState, useEffect } from 'react';
import { MapPin, Clock } from 'lucide-react'; // Location and time icons
import Link from 'next/link';
import apiClient from '@/lib/api';

// Reusable Date Tag Component
const DateTag = ({ day, month, featured }) => (
  <div className={`absolute top-0 right-0 p-3 text-center rounded-tr-xl ${featured ? 'bg-red-500 text-white' : 'bg-white text-gray-800 border-2 border-red-200 shadow-sm'}`}>
    <p className={`text-xl font-bold leading-none ${featured ? 'text-white' : 'text-red-500'}`}>{day}</p>
    <p className="text-sm font-semibold leading-none">{month}</p>
  </div>
);

// Featured Card Component (with image and buttons)
const FeaturedEventCard = ({ event }) => (
  <div className="relative h-full">
    {/* Height adjusted to roughly match the height of 3 NormalEventCards (approx 360px) */}
    <div
      className="md:h-[230] h-[320px] bg-cover bg-center rounded-xl shadow-xl overflow-hidden"

      style={{ backgroundImage: `url(${event.imageUrl})` }}

    >
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

      {/* Content at Top (Details on top as requested) */}
      <div className="absolute top-0 p-6 text-white w-full">
        <h3 className="text-2xl font-bold mb-2 leading-tight">{event.title}</h3>
        <div className="flex items-center space-x-3 text-sm font-medium text-gray-200 mb-4">
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1 text-red-300" />
            {event.time}
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-red-300" />
            {event.location}
          </span>
        </div>
        {/* Description and CTA buttons are moved slightly down for better visual flow in the card */}
        <p className="text-sm text-gray-200 mb-4 line-clamp-3 truncate ">{event.description}</p>

        <div className="flex space-x-3 mt-4">
         <Link href={`/events/${event.slug}`} className="px-5 py-2 text-sm bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition duration-200 inline-block">
            View Details
          </Link>
        </div>
      </div>
    </div>
    {/* Date Tag Overlay */}
    <DateTag day={event.date.day} month={event.date.month} featured={true} />
  </div>
);

// Normal Event Item Component (list style) - self-contained card for better grid placement
const NormalEventCard = ({ event }) => (
  <Link href={`/events/${event.slug}`} className="block">
    <div className="relative bg-white rounded-xl border border-gray-100 shadow-md p-4 pr-16 mb-3 x items-center hover:shadow-lg transition-shadow cursor-pointer"> {/* Removed mb-6 for tighter list spacing */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-1 hover:text-red-600 transition-colors">{event.title}</h3>
        <div className="flex items-center space-x-3 text-sm font-medium text-red-500 mb-2">
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {event.time}
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {event.location}
          </span>
        </div>
        <p className="text-gray-500 text-sm line-clamp-2 ">{event.description}</p>
      </div>
      <div className="absolute top-0 -translate-y-1/2 right-0 pr-4"> {/* Adjusted pr-4 for spacing */}
        <DateTag day={event.date.day} month={event.date.month} featured={false} />
      </div>
    </div>
  </Link>
);

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await apiClient.getEvents({
          status: 'published',
          limit: 50, // Get more events to have enough for layout
          sort: '-datetime'
        });
        
        // Transform API data to match component expectations
        const transformedEvents = response.data.events.map(event => ({
          id: event._id,
          title: event.title,
          time: event.time,
          location: event.location,
          description: event.description,
          datetime: event.datetime, // Add datetime field for date filtering
          date: { 
            day: event.dateDay || '1st', 
            month: event.dateMonth || 'JAN' 
          },
          type: event.type || 'normal', // Default to 'normal' if type is not set
          imageUrl: event.heroImage?.url ? `http://localhost:5007${event.heroImage.url}` : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk3YTNiNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV2ZW50IEltYWdlPC90ZXh0Pgo8L3N2Zz4K', // Fallback SVG placeholder
          slug: event.slug
        }));
        
        console.log('Raw events from API:', response.data.events);
        console.log('Transformed events:', transformedEvents);
        setEvents(transformedEvents);
      } catch (err) {
        console.error('Failed to fetch events:', err);
        setError(err.message || 'Failed to load events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load events</p>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Separate events by date (upcoming vs old)
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison
  
  console.log('Today:', today);
  console.log('All events:', events);
  
  const upcomingEvents = events.filter(event => {
    const eventDate = new Date(event.datetime || event.date);
    eventDate.setHours(0, 0, 0, 0);
    console.log('Event:', event.title, 'Date:', eventDate, 'Is upcoming:', eventDate >= today);
    return eventDate >= today; // Today and future events
  });
  
  const oldEvents = events.filter(event => {
    const eventDate = new Date(event.datetime || event.date);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate < today; // Past events
  });
  
  console.log('Upcoming events:', upcomingEvents);
  console.log('Old events:', oldEvents);

  // Separate featured and normal events for upcoming events
  const upcomingFeatured = upcomingEvents.filter(e => e.type === 'featured');
  const upcomingNormal = upcomingEvents.filter(e => e.type === 'normal');
  
  // Separate featured and normal events for old events
  const oldFeatured = oldEvents.filter(e => e.type === 'featured');
  const oldNormal = oldEvents.filter(e => e.type === 'normal');

  return (
    <div className="font-sans bg-gray-50">
      {/* Header Section */}
      <div
        className="py-20 md:py-32 text-center text-white bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/bottom-view-women-protesting-outdoors.webp')", // 🖼️ replace with your image file name
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold">
            Event List
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Explore our latest community programs, charity drives, and awareness events.
          </p>
        </div>
      </div>


      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-12 text-start">
              Upcoming Events
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="flex flex-col space-y-4">
                {upcomingFeatured[0] && <FeaturedEventCard event={upcomingFeatured[0]} />}
                {upcomingNormal.slice(0, Math.ceil(upcomingNormal.length / 2)).map((event) => (
                  <NormalEventCard key={event.id} event={event} />
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-6">
                {upcomingNormal.slice(Math.ceil(upcomingNormal.length / 2)).map((event) => (
                  <NormalEventCard key={event.id} event={event} />
                ))}
                {upcomingFeatured[1] && <FeaturedEventCard event={upcomingFeatured[1]} />}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Old Events Section */}
      {oldEvents.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-12 text-start">
              Old Events
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="flex flex-col space-y-4">
                {oldFeatured[0] && <FeaturedEventCard event={oldFeatured[0]} />}
                {oldNormal.slice(0, Math.ceil(oldNormal.length / 2)).map((event) => (
                  <NormalEventCard key={event.id} event={event} />
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-6">
                {oldNormal.slice(Math.ceil(oldNormal.length / 2)).map((event) => (
                  <NormalEventCard key={event.id} event={event} />
                ))}
                {oldFeatured[1] && <FeaturedEventCard event={oldFeatured[1]} />}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* No Events Message */}
      {events.length === 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <p className="text-gray-600 text-lg">No events available at the moment.</p>
          </div>
        </section>
      )}

      {/* --- CTA Footer Section --- */}
      <section className="bg-gray-800 py-16 md:py-20 text-center text-black/8 bg-cover bg-center"
        style={{ backgroundImage: `url('children-s-silhouettes-showing-muscles-sunset.webp ')` }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-red-400 mb-4">
            GET INVOLVE NOW
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold leading-tight text-black mb-8">
            We've funded 12,503 charity projects for 25M people around the world
          </h2>
          <button className="inline-flex items-center justify-center px-10 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg shadow-lg transition duration-300 transform hover:scale-[1.05] active:scale-[0.98]">
            Join Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventList;
