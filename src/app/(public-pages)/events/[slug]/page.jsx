"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Clock,
  MapPin,
  Calendar,
  Users,
  Share2,
  ExternalLink,
  Copy,
  Check,
  Tag
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import apiClient from '@/lib/api';
import SocialShare from '@/app/components/SocialShare';

export default function EventDetailPage({ params }) {
  const { slug } = params;
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL: ', err);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [slug]);

  const fetchEvent = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getEventBySlug(slug);
      setEvent(response.data.event);
    } catch (err) {
      console.error('Failed to fetch event:', err);
      if (err.status === 404) {
        notFound();
      }
      setError(err.message || 'Failed to load event');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading event...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load event</p>
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

  if (!event) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/events"
          className="flex items-center text-red-600 hover:text-red-800 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Events
        </Link>

        {/* Event Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="w-full h-96 relative">
            <img
              src={event.heroImage ? `http://localhost:5007${event.heroImage}` : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk3YTNiNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV2ZW50IEltYWdlPC90ZXh0Pgo8L3N2Zz4K'}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="p-8 md:p-12">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 text-sm font-semibold uppercase tracking-wider text-red-700 bg-red-100 rounded-full mb-4">
              Event
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-gray-900 mb-6 leading-tight">
              {event.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center text-gray-600 gap-6 mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-red-500" />
                <span>{event.formattedDate || new Date(event.datetime).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-red-500" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-red-500" />
                <span>{event.location}</span>
              </div>
              {event.maxParticipants && (
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-red-500" />
                  <span>Max {event.maxParticipants} participants</span>
                </div>
              )}
            </div>

            {/* Excerpt */}
            {event.excerpt && (
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                {event.excerpt}
              </p>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: event.description }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-200 flex items-center">
                Contact Us
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
              <button
                onClick={copyToClipboard}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 flex items-center"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy URL
                  </>
                )}
              </button>
            </div>



            {/* Additional Details */}
            {event.requirements && (
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
                <div
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: event.requirements }}
                />
              </div>
            )}

            {/* Contact Information */}
            {event.contactInfo && (
              <div className="mb-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: event.contactInfo }}
                />
              </div>
            )}

            {/* Gallery */}
            {event.images && event.images.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Event Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {event.images.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl ? `http://localhost:5007${imageUrl}` : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk3YTNiNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pgo8L3N2Zz4K'}
                      alt={`Event gallery image ${index + 1}`}
                      className="rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer w-full h-64 object-cover"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Share2 className="w-5 h-5 mr-2 text-red-500" />
                  Share this event
                </h3>
                <div className="flex space-x-4">
                  <SocialShare
                    url={typeof window !== 'undefined' ? window.location.href : ''}
                    title={event?.title}
                    description={event?.description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
