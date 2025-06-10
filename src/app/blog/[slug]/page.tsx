'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { getPostById, Post } from '@/lib/post';
import Navbar from '@/components/section/Navbar2';
import Footer from '@/components/section/Footer'

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof slug !== 'string') {
      setError("Invalid post ID.");
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {
        setLoading(true); 
        const data = await getPostById(slug); 
        if (data) {
          setPost(data);
        } else {
          setError("Blog post not found.");
        }
      } catch (err) {
        console.error(`Error fetching blog post with ID ${slug}:`, err);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]); 

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post</h1>
        <p className="text-gray-600">Loading post details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center text-red-600">
        <h1 className="text-4xl font-bold mb-4">Error</h1>
        <p>{error}</p>
        <Link href="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          &larr; Back to all posts
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center text-gray-700">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p>The post you are looking for might have been removed or does not exist.</p>
        <Link href="/blog" className="text-blue-600 hover:underline mt-4 inline-block" aria-label='bacck to all posts'>
          &larr; Back to all posts
        </Link>
      </div>
    );
  }

  return (
      <section>
      <Navbar/>
    <div className="container mx-auto px-4 py-8 max-w-3xl mt-20">

      <h1 className="text-xl md:text-3xl font-bold text-center mb-4">{post.title}</h1>
      
      {post.imageUrl && (
        <div className="relative w-full h-96 mb-8 overflow-hidden rounded-md shadow-md fetchpriority-high loading-lazy">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-md"
          />
        </div>
      )}

      {/* Post Meta (Category, Date, Reading Time) */}
      <div className="flex justify-center items-center text-gray-500 text-sm mb-8 space-x-3">
        {post.category && (
          <span className="bg-gray-100 px-3 py-1 rounded-full">{post.category}</span>
        )}
        {post.date && <span>{post.date}</span>}
        {post.readingTime && <span>&bull; {post.readingTime}</span>}
      </div>

      <p className="text-sm md:text-lg text-gray-800 leading-relaxed mt-8">
        {post.body}
      </p>

      <div className="mt-12 text-center">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:underline font-medium text-sm md:text-base" aria-label='blog page'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Back to all posts
        </Link>
      </div>
    </div>
    <Footer/>
    </section>
  );
}
