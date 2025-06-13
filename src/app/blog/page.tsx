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
import Join from '@/components/blog/Join';

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
    // Reset to first page when filters/search change
    setCurrentPage(1);
    return currentPosts;
  }, [allPosts, selectedCategory, searchQuery]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredPosts.length / postsPerPage);
  }, [filteredPosts.length, postsPerPage]);

  const paginatedPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [filteredPosts, currentPage, postsPerPage]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 text-center space-y-6">
            {/* Loading spinner */}
            <div className="w-16 h-16 mx-auto">
              <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800 bg-clip-text text-transparent">
                FAMTECH Blog
              </h1>
              <p className="text-slate-600 text-lg">Discovering the latest in agricultural innovation...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
          <div className="relative z-10 text-center space-y-6 max-w-md">
            <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-slate-800">Oops! Something went wrong</h1>
            <p className="text-red-600 bg-red-50 p-4 rounded-xl border border-red-200">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors duration-200 font-medium"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 lg:pt-32 lg:pb-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-40 w-60 h-60 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Fresh Content Weekly</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800 bg-clip-text text-transparent">
                Latest Insights in
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Smart Agriculture
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover cutting-edge agricultural technologies, sustainable farming practices, 
              and innovative solutions that are transforming the future of food production.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-20">
          
          {/* Search and Filter Section */}
          <div className="mb-12 space-y-8">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
                <div className="relative backdrop-blur-xl p-1 ">
                  <SearchInput value={searchQuery} onChange={setSearchQuery} />
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center">
              <div className=" backdrop-blur-xl p-2 ">
                <CategoryFilter
                  categories={BLOG_CATEGORIES}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mb-12">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">{filteredPosts.length}</div>
                    <div className="text-sm text-slate-600">Articles Found</div>
                  </div>
                  <div className="w-px h-8 bg-slate-300"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{BLOG_CATEGORIES.length - 1}</div>
                    <div className="text-sm text-slate-600">Categories</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <span>Showing page {currentPage} of {totalPages}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-12">
            
            {/* Blog Posts Grid */}
            <div className="space-y-8">
              {paginatedPosts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {paginatedPosts.map((post, index) => (
                      <div 
                        key={post.id}
                        className="group animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 group-hover:scale-105"></div>
                          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg border border-white/20 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                            <BlogCard post={post} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center pt-8">
                      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/20">
                        <PaginationControls
                          currentPage={currentPage}
                          totalPages={totalPages}
                          onPageChange={setCurrentPage}
                        />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200/30 to-emerald-200/30 rounded-3xl blur-xl"></div>
                    <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-lg border border-white/20 max-w-md mx-auto">
                      <div className="w-16 h-16 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">No Articles Found</h3>
                      <p className="text-slate-600">Try adjusting your search terms or explore different categories.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="sticky top-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 overflow-hidden">
                    <TrendingSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-blue-600/5"></div>
        <div className="relative">
          <Join />
        </div>
      </section>

      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}