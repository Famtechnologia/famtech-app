'use client';

import React, { useState, useEffect } from 'react';
import { getTrendingPosts, PostListItem } from '@/lib/post';
import TrendingPostItem from './TrendingPostItem'; // Re-import from its original file

const TrendingSection: React.FC = () => {
  const [trendingPosts, setTrendingPosts] = useState<PostListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data = await getTrendingPosts();
        setTrendingPosts(data);
      } catch (err) {
        console.error("Error fetching trending posts:", err);
        setError("Failed to load trending posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 sticky top-28 lg:top-32 h-fit">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Trending</h3>
        <p className="text-gray-600 text-sm">Loading trending posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 sticky top-28 lg:top-32 h-fit">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Trending</h3>
        <p className="text-red-600 text-sm">{error}</p>
      </div>
    );
  }

  if (trendingPosts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 sticky top-28 lg:top-32 h-fit">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Trending</h3>
        <p className="text-gray-600 text-sm">No trending posts available.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-28 lg:top-32 h-fit">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Trending</h3>
      <div className="space-y-4">
        {trendingPosts.map((post) => (
          <TrendingPostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;