"use client";
import React, { useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import apiClient from '@/lib/api';

export default function MediaUploader({ 
  label = "Upload Images",
  multiple = false,
  value = [],
  onChange,
  maxFiles = 10,
  accept = "image/*"
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    // Check max files limit
    if (multiple && value.length + files.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    setUploading(true);
    setError('');

    try {
      if (multiple) {
        // Upload multiple files
        const data = await apiClient.uploadImages(files);
        const newPaths = data.data.files.map(f => f.path);
        onChange([...value, ...newPaths]);
      } else {
        // Upload single file
        const data = await apiClient.uploadImage(files[0]);
        onChange(data.data.path);
      }
    } catch (err) {
      setError(err.message || 'Upload failed');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = (index) => {
    if (multiple) {
      const newValue = value.filter((_, i) => i !== index);
      onChange(newValue);
    } else {
      onChange('');
    }
  };

  const images = multiple ? value : (value ? [value] : []);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      {/* Upload Button */}
      <div className="flex items-center space-x-2">
        <label className="relative cursor-pointer">
          <input
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={handleFileChange}
            disabled={uploading || (!multiple && value)}
            className="hidden"
          />
          <div className={`flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors ${
            uploading || (!multiple && value) ? 'opacity-50 cursor-not-allowed' : ''
          }`}>
            <Upload className="w-4 h-4 mr-2" />
            <span className="text-sm">
              {uploading ? 'Uploading...' : 'Choose Files'}
            </span>
          </div>
        </label>

        {multiple && (
          <span className="text-xs text-gray-500">
            {value.length} / {maxFiles} files
          </span>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {/* Preview Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={`http://localhost:5007${img}`}
                  alt={`Upload ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Remove Button */}
              <button
                type="button"
                onClick={() => handleRemove(idx)}
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
              >
                <X className="w-4 h-4" />
              </button>

              {/* File Name */}
              <p className="text-xs text-gray-500 mt-1 truncate">
                {img.split('/').pop()}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {images.length === 0 && !uploading && (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">No images uploaded</p>
          <p className="text-xs text-gray-500 mt-1">
            {multiple ? `Upload up to ${maxFiles} images` : 'Upload an image'}
          </p>
        </div>
      )}

      {/* Help Text */}
      <p className="text-xs text-gray-500">
        Supported formats: JPG, PNG, GIF, WebP (Max 5MB per file)
      </p>
    </div>
  );
}
