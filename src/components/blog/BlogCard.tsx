'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PostListItem } from '@/lib/post';
import { motion } from 'framer-motion';

interface BlogCardProps {
  post: PostListItem;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={cardVariants}
    >
      {post.imageUrl && (
        <div className="relative w-full h-56 md:h-64 overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 hover:scale-105 fetchpriority-high loading-lazy"
          />
          <span className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full font-medium z-10">
            {post.category}
          </span>
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <Link href={`/blog/${post.id}`} aria-label='blog post id'>
          <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 hover:text-green-700 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-700 text-sm leading-relaxed flex-grow mb-4">
          {post.excerpt}
        </p>
        <div className="flex justify-between items-center text-gray-500 text-xs mt-auto">
          <span>{post.date}</span>
          <Link href={`/blog/${post.id}`} className="text-green-600 font-medium hover:underline" aria-label='read more'>
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;