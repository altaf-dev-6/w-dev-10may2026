import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import RelatedPostsSlider from '@/components/RelatedPostsSlider';

// ... BLOG_POSTS definition ...

import { BLOG_POSTS } from '@/constants/blogData';

export async function generateMetadata({ params }: { params: Promise<{ city: string, slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Woxmen Technologies`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  const cities = ["delhi", "mumbai", "bangalore", "hyderabad", "chennai", "ahmedabad", "kolkata"];
  const params: { city: string, slug: string }[] = [];
  
  cities.forEach(city => {
    BLOG_POSTS.forEach(post => {
      params.push({ city, slug: post.slug });
    });
  });
  
  return params;
}

export default async function BlogPostPage({ params }: { params: Promise<{ city: string, slug: string }> }) {
  const { city, slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [post.image],
    "datePublished": post.date,
    "dateModified": post.date,
    "author": [{
      "@type": "Organization",
      "name": "Woxmen Technologies",
      "url": "https://woxmen.com"
    }],
    "description": post.description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://woxmen.com/blogs/${city}/${slug}`
    }
  };

  return (
    <main className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-surface-container-low border-b border-outline-variant/10">
        <div className="max-w-screen-xl mx-auto px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm font-bold text-on-surface-variant/60 mb-8 uppercase tracking-widest">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <Link href={`/blogs/${city}`} className="hover:text-primary transition-colors">Blogs in {cityName}</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-on-surface truncate max-w-[200px] md:max-w-none">{post.title}</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container text-[11px] font-black uppercase tracking-widest mb-6">
              {post.tag}
            </span>
            <h1 className="text-4xl md:text-6xl font-headline font-black text-on-surface leading-[1.1] mb-8 tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-on-surface-variant font-medium">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">calendar_today</span>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">category</span>
                <span>{post.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">person</span>
                <span>Clinical Expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-8 grid lg:grid-cols-12 gap-16">
          
          {/* Article Column */}
          <article className="lg:col-span-8">
            {/* Featured Image */}
            <div className="aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-primary/10 border border-outline-variant/10">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Social Share (Desktop Sidebar Style but inline for now) */}
            <div className="flex items-center gap-4 mb-12 py-6 border-y border-outline-variant/10">
              <span className="text-sm font-black text-on-surface uppercase tracking-widest mr-4">Share Article:</span>
              <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </button>
              <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                <i className="fa-brands fa-x-twitter text-sm"></i>
              </button>
              <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                <i className="fa-brands fa-linkedin-in text-sm"></i>
              </button>
              <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all">
                <i className="fa-brands fa-whatsapp text-sm"></i>
              </button>
            </div>

            {/* Post Content */}
            <div 
              className="blog-content-prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags Section */}
            <div className="mt-16 pt-8 border-t border-outline-variant/10">
              <h4 className="text-sm font-black text-on-surface uppercase tracking-widest mb-6">Related Topics</h4>
              <div className="flex flex-wrap gap-3">
                {post.tags.map(tag => (
                  <Link 
                    key={tag} 
                    href="#"
                    className="px-5 py-2.5 bg-surface-container-high rounded-full text-sm font-bold text-on-surface-variant hover:bg-primary hover:text-white transition-all cursor-pointer"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Posts Section (Slider) */}
            <RelatedPostsSlider 
              posts={BLOG_POSTS.filter(p => p.slug !== slug).sort((a, b) => (a.category === post.category ? -1 : 1))} 
              city={city} 
              cityName={cityName} 
            />
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* CTA Box */}
            <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-primary/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <h3 className="text-2xl font-headline font-black mb-4 relative z-10">Scale Your Clinic in {cityName}</h3>
              <p className="text-white/80 font-medium mb-8 relative z-10 leading-relaxed">
                Get a personalized consultation for the best aesthetic equipment tailored for your {cityName} practice.
              </p>
              <button className="w-full bg-white text-primary py-4 rounded-xl font-black shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">call</span>
                Get Free Quote
              </button>
            </div>

            {/* Related Categories */}
            <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10">
              <h3 className="text-xl font-headline font-black text-on-surface mb-6">Equipment Categories</h3>
              <div className="space-y-4">
                {[
                  "IPL Hair Removal",
                  "Diode Laser Systems",
                  "HIFU Lifting",
                  "RF Skin Tightening",
                  "Body Contouring",
                  "Multifunctional Platforms"
                ].map(cat => (
                  <Link key={cat} href="#" className="flex items-center justify-between group py-2">
                    <span className="font-bold text-on-surface-variant group-hover:text-primary transition-colors">{cat}</span>
                    <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">arrow_forward</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter / Stay Updated */}
            <div className="bg-tertiary-fixed-dim rounded-3xl p-8 border border-outline-variant/10">
              <h3 className="text-xl font-headline font-black text-on-tertiary-fixed-variant mb-4">Stay Updated</h3>
              <p className="text-on-tertiary-fixed-variant/70 text-sm font-medium mb-6">
                Receive the latest clinical studies and machine protocols directly in your inbox.
              </p>
              <input 
                type="email" 
                placeholder="Doctor's Email" 
                className="w-full px-5 py-4 rounded-xl bg-surface mb-4 border border-outline-variant/10 focus:ring-2 focus:ring-primary outline-none font-bold"
              />
              <button className="w-full bg-on-tertiary-fixed-variant text-white py-4 rounded-xl font-black hover:opacity-90 transition-all">
                Subscribe Now
              </button>
            </div>
          </aside>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
