/**
 * API Client
 * Centralized API calls with authentication
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5007/api/v1';

class ApiClient {
  constructor() {
    this.baseURL = API_URL;
  }

  getAuthHeaders() {
    const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      headers: {
        ...this.getAuthHeaders(),
        ...options.headers
      }
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          if (typeof window !== 'undefined') {
            localStorage.removeItem('adminToken');
            localStorage.removeItem('adminUser');
            window.location.href = '/login';
          }
        }
        throw new Error(data.message || 'Request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Events API
  async getEvents(params = {}) {
    const queryString = new URLSearchParams(
      Object.entries(params).filter(([_, v]) => v != null)
    ).toString();
    return this.request(`/events${queryString ? `?${queryString}` : ''}`);
  }

  async getEvent(id) {
    return this.request(`/events/${id}`);
  }

  async getEventBySlug(slug) {
    return this.request(`/events/slug/${slug}`);
  }

  async createEvent(data) {
    return this.request('/events', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  async updateEvent(id, data) {
    return this.request(`/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  async deleteEvent(id) {
    return this.request(`/events/${id}`, {
      method: 'DELETE'
    });
  }

  // Blogs API
  async getBlogs(params = {}) {
    const queryString = new URLSearchParams(
      Object.entries(params).filter(([_, v]) => v != null)
    ).toString();
    return this.request(`/blogs${queryString ? `?${queryString}` : ''}`);
  }

  async getBlog(id) {
    return this.request(`/blogs/${id}`);
  }

  async getBlogBySlug(slug) {
    return this.request(`/blogs/slug/${slug}`);
  }

  async createBlog(data) {
    return this.request('/blogs', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  async updateBlog(id, data) {
    return this.request(`/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  async deleteBlog(id) {
    return this.request(`/blogs/${id}`, {
      method: 'DELETE'
    });
  }

  // Upload API
  async uploadImage(file) {
    const formData = new FormData();
    formData.append('image', file);

    const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
    const response = await fetch(`${this.baseURL}/upload/image`, {
      method: 'POST',
      headers: {
        ...(token && { 'Authorization': `Bearer ${token}` })
      },
      body: formData
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Upload failed');
    return data;
  }

  async uploadImages(files) {
    const formData = new FormData();
    files.forEach(file => formData.append('images', file));

    const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;
    const response = await fetch(`${this.baseURL}/upload/images`, {
      method: 'POST',
      headers: {
        ...(token && { 'Authorization': `Bearer ${token}` })
      },
      body: formData
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Upload failed');
    return data;
  }

  // Donors API
  async registerDonor(data) {
    return this.request('/donors', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  async getDonors(params = {}) {
    const queryString = new URLSearchParams(
      Object.entries(params).filter(([_, v]) => v != null)
    ).toString();
    return this.request(`/donors${queryString ? `?${queryString}` : ''}`);
  }

  async getDonor(id) {
    return this.request(`/donors/${id}`);
  }

  async updateDonor(id, data) {
    return this.request(`/donors/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  async deleteDonor(id) {
    return this.request(`/donors/${id}`, {
      method: 'DELETE'
    });
  }

  async searchDonors(params = {}) {
    const queryString = new URLSearchParams(
      Object.entries(params).filter(([_, v]) => v != null)
    ).toString();
    return this.request(`/donors/search${queryString ? `?${queryString}` : ''}`);
  }

  // Contacts API
  async getContacts(params = {}) {
    const queryString = new URLSearchParams(
      Object.entries(params).filter(([_, v]) => v != null)
    ).toString();
    return this.request(`/contacts${queryString ? `?${queryString}` : ''}`);
  }

  async getContact(id) {
    return this.request(`/contacts/${id}`);
  }

  async updateContact(id, data) {
    return this.request(`/contacts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data)
    });
  }

  async deleteContact(id) {
    return this.request(`/contacts/${id}`, {
      method: 'DELETE'
    });
  }

  async getContactStats() {
    return this.request('/contacts/stats');
  }
}

const apiClient = new ApiClient();
export default apiClient;
