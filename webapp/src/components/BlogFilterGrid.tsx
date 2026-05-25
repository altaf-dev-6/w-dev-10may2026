"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/constants/blogData';

const CATEGORIES = [
  "All",
  "IPL Hair Removal Machines",
  "Diode Laser Machines",
  "RF Skin Tightening Machines",
  "HIFU Machines",
  "Cryolipolysis Slimming Machines",
  "Multifunctional Technology"
];

export default function BlogFilterGrid({ cityName }: { cityName: string }) {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter');
  
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 16;

  // Sync filter from URL query param
  useEffect(() => {
    if (filterParam) {
      setActiveFilter(filterParam);
    }
  }, [filterParam]);

  // Reset page to 1 whenever filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  // Use BLOG_POSTS as the base and inject cityName into titles/desc for local SEO feel
  const basePosts = BLOG_POSTS.map((post, idx) => ({
    id: idx + 1,
    slug: post.slug,
    category: post.category,
    tag: post.tag || post.category,
    image: post.image,
    title: post.title.includes(cityName) ? post.title : `${post.title} in ${cityName} Clinics`,
    desc: post.description.includes(cityName) ? post.description : `${post.description.replace('...', '')} in ${cityName}'s climate...`
  }));

  // Duplicate the posts to simulate a larger dataset for pagination demonstration
  const extendedBlogPosts = Array.from({ length: 6 }).flatMap((_, loopIndex) => 
    basePosts.map(post => ({
      ...post,
      id: post.id + (loopIndex * 100)
    }))
  );

  // Filter the posts
  const filteredPosts = activeFilter === "All" 
    ? extendedBlogPosts 
    : extendedBlogPosts.filter(post => 
        post.category === activeFilter || post.tag === activeFilter
      );
  
  // Calculate Pagination
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPosts = filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-8">
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-16 overflow-x-auto pb-4 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-colors ${
                activeFilter === cat 
                ? "bg-primary text-white" 
                : "bg-surface-container-highest text-on-surface-variant hover:bg-primary-container hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentPosts.map(post => (
            <article key={post.id} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#E5E5E5] flex flex-col">
              <Link href={`/blogs/${cityName.toLowerCase()}/${post.slug}`} target="_blank" rel="noopener noreferrer" className="aspect-[4/3] overflow-hidden block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={post.image} 
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-block self-start px-3 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold uppercase tracking-widest mb-4">
                  {post.tag}
                </span>
                <Link href={`/blogs/${cityName.toLowerCase()}/${post.slug}`} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-3 line-clamp-2 leading-tight hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-on-surface-variant text-sm line-clamp-2 mb-6">
                  {post.desc}
                </p>
                <div className="mt-auto">
                  <Link href={`/blogs/${cityName.toLowerCase()}/${post.slug}`} target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-sm flex items-center gap-2 group/btn">
                    Read More
                    <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_right_alt</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
          
          {filteredPosts.length === 0 && (
            <div className="col-span-full text-center py-12 text-on-surface-variant h-96 flex items-center justify-center border-2 border-dashed border-outline-variant/30 rounded-2xl">
              No articles found for this category at the moment.
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredPosts.length > 0 && (
          <div className="mt-20 flex justify-center items-center gap-2">
            
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`px-4 h-12 rounded-lg border flex items-center justify-center font-bold gap-1 transition-colors ${
                currentPage === 1 
                ? "bg-surface-container-lowest border-[#E5E5E5] text-on-surface-variant/40 cursor-not-allowed" 
                : "bg-white border-[#E5E5E5] text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              <span className="material-symbols-outlined text-lg">chevron_left</span>
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              return (
                <button 
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-12 h-12 rounded-lg border flex items-center justify-center font-bold transition-colors ${
                    currentPage === pageNum
                    ? "bg-surface-container border-[#E5E5E5] text-primary"
                    : "bg-white border-[#E5E5E5] text-on-surface-variant hover:border-primary hover:text-primary"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 h-12 rounded-lg border flex items-center justify-center font-bold gap-1 transition-colors ${
                currentPage === totalPages 
                ? "bg-surface-container-lowest border-[#E5E5E5] text-on-surface-variant/40 cursor-not-allowed" 
                : "bg-white border-[#E5E5E5] text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              Next
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
