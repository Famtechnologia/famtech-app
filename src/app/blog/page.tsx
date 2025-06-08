'use client';

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
import Join from '@/components/blog/Join'

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
    setCurrentPage(1); 
    return currentPosts;
  }, [allPosts, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [filteredPosts, currentPage, postsPerPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

  return (
    <div>
      <Navbar/>
      
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
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))
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

        
        {filteredPosts.length > postsPerPage && (
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
      
      <Footer/>
    </div>
  );
}