"use client";
import React from "react";
import { CalendarCheck, Video, Image as ImageIcon, BookOpen } from "lucide-react";
import Link from "next/link";

export default function PastContentCard({ post }) {
  const isVideo = post.type === "video";
  const isGallery = post.type === "image_gallery";
  const isExternalUrl = post.url && post.url.startsWith("http");
  const finalHref = isExternalUrl ? post.url : `/blogs-gallery/${post.id}`;
  const finalTarget = isExternalUrl ? "_blank" : "_self";

  let icon = isVideo ? <Video className="w-4 h-4 mr-1" /> : isGallery ? <ImageIcon className="w-4 h-4 mr-1" /> : <BookOpen className="w-4 h-4 mr-1" />;
  let buttonText = isVideo ? "Watch Now" : isGallery ? "View Photos" : "Read Update";

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-[1.02] hover:shadow-xl border border-gray-100 h-full flex flex-col group relative">
      <div className="relative">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover object-center"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/AAAAAA/FFFFFF?text=Content+Thumbnail"; }} />
        <span className={`absolute top-2 right-2 px-3 py-1 text-xs font-bold text-white rounded-full ${isVideo ? "bg-red-600" : "bg-gray-700"}`}>
          {isVideo ? "VIDEO" : isGallery ? "GALLERY" : "BLOG"}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h4>
        <div className="flex items-center text-sm text-red-500 font-medium mb-3">
          <CalendarCheck className="w-4 h-4 mr-1" /> {post.date}
        </div>
        <p className="text-sm text-gray-600 flex-grow">{post.summary}</p>
        <Link
          href={finalHref}
          target={finalTarget}
          rel="noopener noreferrer"
          className="mt-4 text-red-600 font-semibold text-sm hover:underline self-start flex items-center"
        >
          {icon} {buttonText}
        </Link>
      </div>
    </div>
  );
}
