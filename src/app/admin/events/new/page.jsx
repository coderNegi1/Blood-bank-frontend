/**
 * Create New Event Page
 * Form for creating a new event with media upload
 */

"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Upload,
  X,
  Image as ImageIcon,
  Save,
  Eye
} from 'lucide-react';
import apiClient from '@/lib/api';
import MediaUploader from '@/app/components/admin/MediaUploader';

export default function NewEventPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    time: '',
    location: '',
    datetime: '',
    type: 'normal',
    status: 'draft',
    heroImage: '',
    images: [],
    tags: [],
    seoTitle: '',
    seoDescription: ''
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Validate required fields
    const requiredFields = ['title', 'description', 'time', 'location', 'datetime'];
    const newErrors = {};
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      
      // Prepare data for API
      const eventData = {
        title: formData.title,
        description: formData.description,
        time: formData.time,
        location: formData.location,
        datetime: formData.datetime,
        type: formData.type,
        status: formData.status,
        heroImage: formData.heroImage || '',
        images: formData.images || [],
        tags: formData.tags || []
      };

      // Only include SEO fields if they have values
      if (formData.seoTitle && formData.seoTitle.trim()) {
        eventData.seoTitle = formData.seoTitle.trim();
      }
      if (formData.seoDescription && formData.seoDescription.trim()) {
        eventData.seoDescription = formData.seoDescription.trim();
      }

      await apiClient.createEvent(eventData);
      router.push('/admin/events');
    } catch (error) {
      console.error('Failed to create event:', error);
      if (error.errors) {
        const fieldErrors = {};
        error.errors.forEach(err => {
          fieldErrors[err.field] = err.message;
        });
        setErrors(fieldErrors);
      } else {
        alert(error.message || 'Failed to create event');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleTagInput = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      e.preventDefault();
      const tag = e.target.value.trim().toLowerCase();
      if (!formData.tags.includes(tag)) {
        setFormData({ ...formData, tags: [...formData.tags, tag] });
      }
      e.target.value = '';
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-6">
        <Link
          href="/admin/events"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Create New Event</h1>
        <p className="mt-1 text-sm text-gray-600">
          Fill in the details below to create a new event
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Title *
              </label>
              <input
                type="text"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-gray-700 ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Annual Education Workshop 2024"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                rows={4}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-gray-700 ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Join us for a comprehensive workshop on educational development and community engagement..."
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description}</p>
              )}
            </div>

            {/* Date, Time, Location */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Event Date *
                </label>
                <input
                  type="datetime-local"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-gray-700 ${
                    errors.datetime ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.datetime}
                  onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
                />
                {errors.datetime && (
                  <p className="mt-1 text-sm text-red-600">{errors.datetime}</p>
                )}
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Time Range *
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-gray-700 ${
                    errors.time ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  placeholder="9:00 AM - 5:00 PM"
                />
                {errors.time && (
                  <p className="mt-1 text-sm text-red-600">{errors.time}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Location *
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-gray-700 ${
                    errors.location ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Shrishay Foundation Center, Dehradun"
                />
                {errors.location && (
                  <p className="mt-1 text-sm text-red-600">{errors.location}</p>
                )}
              </div>
            </div>

            {/* Type and Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Type
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option value="normal">Normal</option>
                  <option value="featured">Featured</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  className="w-full px-4 text-black py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Media */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Media</h2>
          
          {/* Hero Image */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hero Image
            </label>
            <MediaUploader
              value={formData.heroImage}
              onChange={(media) => setFormData({ ...formData, heroImage: media })}
              accept="image/*"
              maxFiles={1}
            />
            {errors.heroImage && (
              <p className="mt-1 text-sm text-red-600">{errors.heroImage}</p>
            )}
          </div>

          {/* Gallery */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gallery Images
            </label>
            <MediaUploader
              value={formData.images}
              onChange={(media) => setFormData({ ...formData, images: media })}
              accept="image/*"
              multiple
              maxFiles={10}
            />
          </div>
        </div>

        {/* SEO */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">SEO Settings</h2>
          
          <div className="space-y-4">
            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tags
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                onKeyDown={handleTagInput}
                placeholder="workshop, education, development, community"
              />
              {formData.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* SEO Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SEO Title
              </label>
              <input
                type="text"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-gray-700 ${
                  errors.seoTitle ? 'border-red-500' : 'border-gray-300'
                }`}
                value={formData.seoTitle}
                onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                placeholder="Annual Education Workshop 2024 - Shrishay Foundation"
                maxLength={70}
              />
              {errors.seoTitle && (
                <p className="mt-1 text-sm text-red-600">{errors.seoTitle}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                {formData.seoTitle.length}/70 characters
              </p>
            </div>

            {/* SEO Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SEO Description
              </label>
              <textarea
                rows={2}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder-gray-700 ${
                  errors.seoDescription ? 'border-red-500' : 'border-gray-300'
                }`}
                value={formData.seoDescription}
                onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                placeholder="Register for our annual education workshop focused on community development and skill building."
                maxLength={160}
              />
              {errors.seoDescription && (
                <p className="mt-1 text-sm text-red-600">{errors.seoDescription}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                {formData.seoDescription.length}/160 characters
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <Link
            href="/admin/events"
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="button"
            onClick={() => {
              setFormData({ ...formData, status: 'draft' });
              handleSubmit(new Event('submit'));
            }}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            disabled={loading}
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Event'}
          </button>
        </div>
      </form>
    </div>
  );
}
