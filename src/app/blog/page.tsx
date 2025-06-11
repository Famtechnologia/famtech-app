'use client';
import { FixedSizeList } from 'react-window';
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, PostListItem, BLOG_CATEGORIES } from '@/lib/post';
import SearchInput from '@/components/blog/SearchInput';
import CategoryFilter from '@/components/blog/CategoryFilter';
import BlogCard from '@/components/blog/BlogCard';
import TrendingSection from '@/components/blog/TrendingSection';
import PaginationControls from '@/components/blog/PaginationControls';
import Navbar from '@/components/section/Navbar2';
import Footer from '@/components/section/Footer';
import Join from '@/components/blog/Join';
import type { Metadata } from 'next';

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<PostListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getAllPosts();
        setAllPosts(data);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    let currentPosts = allPosts;

    if (selectedCategory !== 'All') {
      currentPosts = currentPosts.filter(post => post.category === selectedCategory);
    }

    if (searchQuery) {
      currentPosts = currentPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return currentPosts;
  }, [allPosts, selectedCategory, searchQuery]);

  const BlogCardRow = ({ index, style }) => {
    const post = filteredPosts[index];
    if (!post) return null;

    return (
      <div style={style}>
        <BlogCard key={post.id} post={post} />
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Famtech Blog</h1>
        <p className="text-gray-600">Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-600">
        <h1 className="text-4xl font-bold mb-4">Famtech Blog</h1>
        <p>{error}</p>
      </div>
    );
  }

  const listHeight = 600;
  const itemHeight = 350;

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 lg:py-16 mt-16 md:mt-24 lg:mt-32">
        <h2 className="text-left md:text-center text-2xl md:text-3xl font-bold mb-8">Check out our latest blogs</h2>

        <div className="mb-8 mt-8">
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="mb-12">
          <CategoryFilter
            categories={BLOG_CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 lg:gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.length > 0 ? (
              <FixedSizeList
                height={listHeight}
                itemCount={filteredPosts.length}
                itemSize={itemHeight}
                width="100%"
              >
                {BlogCardRow}
              </FixedSizeList>
            ) : (
              <div className="col-span-full text-center text-gray-700 py-12">
                <p>No blog posts found matching your criteria.</p>
              </div>
            )}
          </div>

          <div className="lg:order-last">
            <TrendingSection />
          </div>
        </div>
      </div>

   
      <Footer />
    </div>
  );
}