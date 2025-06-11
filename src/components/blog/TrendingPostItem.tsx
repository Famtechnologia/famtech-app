'use client';

import React from 'react';
import Link from 'next/link';
import { PostListItem } from '@/lib/post'; // Assuming PostListItem

interface TrendingPostItemProps {
  post: PostListItem;
}

const TrendingPostItem: React.FC<TrendingPostItemProps> = ({ post }) => {
  return (
    <div className="flex items-start space-x-3 py-2 border-b border-gray-100 last:border-b-0">
      {/* Small dot icon from design */}
      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
      <div className="flex-grow">
        <Link href={`/blog/${post.id}`} aria-label='blog post id'>
          <h4 className="text-sm font-semibold text-gray-800 hover:text-green-700 transition-colors leading-tight">
            {post.title}
          </h4>
        </Link>
        <p className="text-gray-500 text-xs mt-1">
          {post.date} &bull; {post.readingTime}
        </p>
      </div>
    </div>
  );
};

export default TrendingPostItem;