"use client";

import React, { useRef } from 'react';
import Link from 'next/link';

interface RelatedPost {
  slug: string;
  title: string;
  image: string;
  tag: string;
}

interface RelatedPostsSliderProps {
  posts: RelatedPost[];
  city: string;
  cityName: string;
}

export default function RelatedPostsSlider({ posts, city, cityName }: RelatedPostsSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-24 pt-16 border-t-2 border-outline-variant/5 group/slider">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h3 className="text-3xl font-headline font-black text-on-surface mb-2">Related Clinical Insights</h3>
          <p className="text-on-surface-variant font-medium text-sm">More specialized protocols from {cityName}</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 scroll-smooth"
      >
        {posts.map(related => (
          <Link 
            key={related.slug} 
            href={`/blogs/${city}/${related.slug}`}
            className="min-w-[calc(50%-12px)] md:min-w-[calc(25%-18px)] snap-start group/card bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 hover:shadow-2xl transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <span className="text-[9px] font-black uppercase tracking-widest text-primary mb-3 block">{related.tag}</span>
              <h4 className="text-base font-headline font-black text-on-surface group-hover/card:text-primary transition-colors line-clamp-3 leading-tight mb-4">
                {related.title}
              </h4>
              <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-opacity">
                Read Post <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
