"use client";
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import apiClient from '@/lib/api';

// Component for a single blog card in the grid
const BlogCard = ({ post }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100">
    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-100 rounded-full mb-3">
        {post.category}
      </span>
      <Link href={`/blogs-gallery/${post.slug}`}>
        <h3 className="text-xl font-serif font-bold text-gray-800 mb-3 hover:text-red-600 transition-colors duration-200 cursor-pointer">
          {post.title}
        </h3>
      </Link>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1 text-red-500" />
          <span>{post.date}</span>
        </div>
        <Link
          href={`/blogs-gallery/${post.slug}`}
          className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
        >
          Read More &rarr;
        </Link>
      </div>
    </div>
  </div>
);

// Main Blog Listing Page Component
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    hasMore: false
  });


  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async (page = 1) => {
    try {
      setLoading(true);
      const response = await apiClient.getBlogs({
        status: 'published',
        limit: 20,
        page,
        sort: '-publishedAt'
      });

      console.log("Blog API Response:", response.data); // 👈 check this once

      const blogsData = Array.isArray(response.data)
        ? response.data
        : response.data.blogs || [];

      const transformedBlogs = blogsData.map(blog => ({
        id: blog._id,
        title: blog.title,
        excerpt: blog.excerpt,
        date: new Date(blog.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        image: blog.heroImage ? `http://localhost:5007${blog.heroImage}` : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk3YTNiNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pgo8L3N2Zz4K',
        category: blog.category || "General",
        isFeatured: blog.isFeatured || false,
        slug: blog.slug,
        readTime: blog.readTime || "2 min read"
      }));

      if (page === 1) {
        setBlogs(transformedBlogs);
      } else {
        setBlogs(prev => [...prev, ...transformedBlogs]);
      }

      setPagination({
        page: response.data.pagination?.page || 1,
        hasMore: response.data.pagination?.hasMore || false
      });
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
      setError(err.message || "Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };


  const loadMore = () => {
    if (pagination.hasMore && !loading) {
      fetchBlogs(pagination.page + 1);
    }
  };

  // Show loading state
  if (loading && blogs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load blogs</p>
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

  // Show empty state
  if (blogs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-600">No blogs available at the moment.</p>
        </div>
      </div>
    );
  }

  const featuredPost = blogs.find(post => post.isFeatured) || blogs[0];
  const otherPosts = blogs.filter(post => post.id !== featuredPost.id);

  return (
    <div className="font-sans bg-gray-50 min-h-screen">

      {/* Header Section */}
      <div
        className="relative py-20 md:py-28 text-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('medium-shot-people-working-together.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold mb-3">Our Blogs</h1>
          <p className="text-xl text-gray-200 mb-8">Latest News, Stories and Updates</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24">
            {/* Featured Post Section */}
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 border-b-2 border-red-500 inline-block pb-2">
              Featured Post
            </h2>
            <div className="mb-16 bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 text-sm font-semibold uppercase tracking-wider text-red-700 bg-red-100 rounded-full mb-4">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-3xl font-serif font-extrabold text-gray-800 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 line-clamp-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-5 h-5 mr-2 text-red-500" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <Link
                      href={`/blogs-gallery/${featuredPost.slug}`}
                      className="inline-flex items-center px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg shadow-md transition duration-300"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* All Posts Grid */}
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 mt-16 border-b-2 border-red-500 inline-block pb-2">
              All Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {otherPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* Load More Button */}
            {pagination.hasMore && (
              <div className="flex justify-center mt-16">
                <button
                  onClick={loadMore}
                  disabled={loading}
                  className="px-8 py-3 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-medium rounded-lg shadow-sm transition duration-300"
                >
                  {loading ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}
      </div>
    </div>
  );
};

export default BlogPage;
