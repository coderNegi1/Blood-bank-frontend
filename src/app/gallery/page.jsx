"use client";
import { useState, useEffect } from 'react';

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all'); // all, events, blogs

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      // Fetch events and blogs
      const [eventsResponse, blogsResponse] = await Promise.all([
        fetch('http://localhost:5007/api/v1/events'),
        fetch('http://localhost:5007/api/v1/blogs')
      ]);

      let allImages = [];

      // Process events
      if (eventsResponse.ok) {
        const eventsData = await eventsResponse.json();
        const events = eventsData.data?.events || eventsData.data || [];
        
        events.forEach(event => {
          // Add hero image
          if (event.heroImage) {
            allImages.push({
              url: event.heroImage,
              title: event.title,
              type: 'event',
              date: event.datetime,
              category: 'Event',
              isHero: true
            });
          }
          
          // Add gallery images
          if (event.images && Array.isArray(event.images)) {
            event.images.forEach(image => {
              allImages.push({
                url: image,
                title: event.title,
                type: 'event',
                date: event.datetime,
                category: 'Event',
                isHero: false
              });
            });
          }
        });
      }

      // Process blogs
      if (blogsResponse.ok) {
        const blogsData = await blogsResponse.json();
        const blogs = blogsData.data?.blogs || blogsData.data || [];
        
        blogs.forEach(blog => {
          // Add hero image
          if (blog.heroImage) {
            allImages.push({
              url: blog.heroImage,
              title: blog.title,
              type: 'blog',
              date: blog.publishedAt || blog.createdAt,
              category: blog.category || 'Blog',
              isHero: true
            });
          }
          
          // Add gallery images
          if (blog.images && Array.isArray(blog.images)) {
            blog.images.forEach(image => {
              allImages.push({
                url: image,
                title: blog.title,
                type: 'blog',
                date: blog.publishedAt || blog.createdAt,
                category: blog.category || 'Blog',
                isHero: false
              });
            });
          }
        });
      }

      // Sort by date (newest first)
      allImages.sort((a, b) => new Date(b.date) - new Date(a.date));
      
      setGalleryImages(allImages);
    } catch (error) {
      console.error('Error fetching gallery data:', error);
    } finally {
      setLoading(false);
    }
  };

  const openImageViewer = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  // Filter images
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.type === filter.slice(0, -1)); // Remove 's' from 'events'/'blogs'

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative py-20 md:py-32 text-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bottom-view-women-protesting-outdoors.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold mb-3">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Explore memories from our blood donation events and awareness campaigns
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 ">

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 pt-8">
          <div className="bg-white rounded-lg shadow p-1 inline-flex">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                filter === 'all'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setFilter('events')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                filter === 'events'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setFilter('blogs')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                filter === 'blogs'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Blogs
            </button>
          </div>
        </div>

        {/* Gallery Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-red-600 mb-2">
              {galleryImages.length}
            </div>
            <div className="text-gray-600 font-medium">Total Photos</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {galleryImages.filter(img => img.type === 'event').length}
            </div>
            <div className="text-gray-600 font-medium">Event Photos</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {galleryImages.filter(img => img.type === 'blog').length}
            </div>
            <div className="text-gray-600 font-medium">Blog Photos</div>
          </div>
        </div> */}

        {/* Gallery Grid */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Photos Yet</h3>
            <p className="text-gray-500">
              {filter === 'all' 
                ? 'No photos available in the gallery yet' 
                : `No ${filter.slice(0, -1)} photos available yet`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => openImageViewer(image.url)}
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={`http://localhost:5007${image.url}`}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="text-sm font-semibold truncate mb-1">{image.title}</div>
                    <div className="text-xs opacity-90 flex items-center space-x-2">
                      <span>{image.category}</span>
                      <span>•</span>
                      <span>{new Date(image.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {/* View button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-lg">
                    <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ${
                    image.type === 'event' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-green-600 text-white'
                  }`}>
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Full Image Viewer Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImageViewer}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full">
            <img
              src={`http://localhost:5007${selectedImage}`}
              alt="Gallery Image Full View"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl mx-auto"
            />
            
            {/* Close button */}
            <button
              onClick={closeImageViewer}
              className="absolute -top-12 right-0 text-white bg-red-600 hover:bg-red-700 rounded-full p-3 transition duration-200 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image info */}
            {filteredImages.find(img => img.url === selectedImage) && (
              <div className="absolute -bottom-20 left-0 right-0 text-white">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-xl font-bold mb-2">
                    {filteredImages.find(img => img.url === selectedImage).title}
                  </div>
                  <div className="text-sm opacity-90 flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      filteredImages.find(img => img.url === selectedImage).type === 'event'
                        ? 'bg-red-600'
                        : 'bg-green-600'
                    }`}>
                      {filteredImages.find(img => img.url === selectedImage).category}
                    </span>
                    <span>•</span>
                    <span>{new Date(filteredImages.find(img => img.url === selectedImage).date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
