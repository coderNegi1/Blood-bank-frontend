"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Tag,
  Eye,
  Share2
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import apiClient from '@/lib/api';
import SocialShare from '@/app/components/SocialShare';

export default function BlogDetailPage({ params }) {
  const { slug } = params;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getBlogBySlug(slug);
      setBlog(response.data.blog);
    } catch (err) {
      console.error('Failed to fetch blog:', err);
      if (err.status === 404) {
        notFound();
      }
      setError(err.message || 'Failed to load blog');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load blog</p>
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

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/blogs-gallery"
          className="flex items-center text-red-600 hover:text-red-800 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blogs
        </Link>

        {/* Blog Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="w-full h-96 relative">
            <img
              src={blog.heroImage ? `http://localhost:5007${blog.heroImage}` : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk3YTNiNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJsb2cgSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo='}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Blog Details */}
          <div className="p-8 md:p-12">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 text-sm font-semibold uppercase tracking-wider text-red-700 bg-red-100 rounded-full mb-4">
              {blog.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center text-gray-600 gap-6 mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-red-500" />
                <span>{blog.formattedDate || new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              {blog.author && (
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-red-500" />
                  <span>{blog.author.name}</span>
                </div>
              )}
              {blog.readTime && (
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-red-500" />
                  <span>{blog.readTime} min read</span>
                </div>
              )}
              <div className="flex items-center">
                <Eye className="w-5 h-5 mr-2 text-red-500" />
                <span>{blog.views || 0} views</span>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              {blog.excerpt}
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-red-500" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {blog.images && blog.images.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {blog.images.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl ? `http://localhost:5007${imageUrl}` : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk3YTNiNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pgo8L3N2Zz4K'}
                      alt={`Gallery image ${index + 1}`}
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
                  Share this blog
                </h3>
                <div className="flex space-x-4">
                  <SocialShare
                    url={typeof window !== 'undefined' ? window.location.href : ''}
                    title={blog?.title}
                    description={blog?.excerpt}
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
