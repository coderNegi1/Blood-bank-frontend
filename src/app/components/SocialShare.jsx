"use client";
import React from 'react';
import { Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';

export default function SocialShare({ url, title }) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = title || 'Check this out!';

  const handleShare = (platform) => {
    let shareLink = '';
    
    switch(platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
        return;
      default:
        return;
    }
    
    window.open(shareLink, '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-gray-700">Share:</span>
      <div className="flex space-x-2">
        <button
          onClick={() => handleShare('facebook')}
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          title="Share on Facebook"
        >
          <Facebook className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleShare('twitter')}
          className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
          title="Share on Twitter"
        >
          <Twitter className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleShare('linkedin')}
          className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
          title="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleShare('copy')}
          className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          title="Copy Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
