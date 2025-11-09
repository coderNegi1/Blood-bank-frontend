    "use client";
import React from "react";
import { CalendarCheck, MapPin, Video, Image as ImageIcon, Youtube, BookOpen } from "lucide-react";
import Link from "next/link";

export default function FeaturedPostCard({ post }) {
  const isVideo = post.type === "video";
  const isExternalUrl = post.url && post.url.startsWith("http");
  const finalHref = isExternalUrl ? post.url : `/blogs-gallery/${post.id}`;
  const finalTarget = isExternalUrl ? "_blank" : "_self";

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-8 border-4 border-red-100">
      <div className="w-full h-64 bg-cover bg-center group relative" style={{ backgroundImage: `url(${post.image})` }}>
        <Link
          href={finalHref}
          target={finalTarget}
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity hover:bg-opacity-20"
        >
          <span className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-4xl transform hover:scale-110 transition-transform shadow-xl">
            {isExternalUrl ? "▶" : "🔍"}
          </span>
        </Link>
        <div className="p-6 text-white h-full flex flex-col justify-end"
          style={{ background: "linear-gradient(to top, rgba(138,3,48,0.9), rgba(138,3,48,0.2))" }}>
          <div className="flex items-center space-x-3 mb-2">
            {isVideo ? <Video className="w-6 h-6" /> : <ImageIcon className="w-6 h-6" />}
            <span className="text-2xl font-bold">{isVideo ? "Video Post" : "Image/Text Blog"}</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-6 h-6" />
            <span className="text-xl font-medium">{post.location}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-3xl font-extrabold text-red-700 mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <div className="flex items-center justify-between mt-4 border-t pt-4">
          <p className="text-lg font-semibold text-gray-800 flex items-center">
            <CalendarCheck className="w-5 h-5 mr-2 text-red-500" /> Published: {post.date}
          </p>
          <Link
            href={finalHref}
            target={finalTarget}
            rel="noopener noreferrer"
            className="px-5 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition flex items-center"
          >
            {isVideo ? <Youtube className="w-5 h-5 mr-2" /> : <BookOpen className="w-5 h-5 mr-2" />} {isVideo ? "Watch Full Video" : "Read Full Article"}
          </Link>
        </div>
      </div>
    </div>
  );
}
