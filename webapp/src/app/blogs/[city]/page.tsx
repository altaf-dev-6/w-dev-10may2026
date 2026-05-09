import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import BlogFilterGrid from '@/components/BlogFilterGrid';
export function generateStaticParams() {
  const cities = ["delhi", "mumbai", "bangalore", "hyderabad", "chennai", "ahmedabad", "kolkata"];
  return cities.map((city) => ({
    city: city,
  }));
}

export default async function CityBlogPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const rawCity = resolvedParams.city;
  
  if (!rawCity) {
    notFound();
  }

  // Handle URL-encoded city names (e.g. "delhi ncr")
  const decodedCity = decodeURIComponent(rawCity);
  const cityName = decodedCity.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="pt-24 bg-surface pb-12">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 lg:pl-16">
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary tracking-tight leading-[1.1] mb-6">
              Aesthetic Machine Blogs in <span className="text-on-surface">{cityName}</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium mb-10 max-w-2xl leading-relaxed">
              Latest insights on IPL, Laser, HIFU, RF & Slimming Machines for clinics in {cityName}.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-container hover:bg-primary text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-primary-container/20">
                Call Now
                <span className="material-symbols-outlined text-lg">call</span>
              </button>
              <button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-green-600/20">
                WhatsApp Inquiry
                <span className="material-symbols-outlined text-lg">chat</span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-surface-container-low rounded-[2rem] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                alt={`Modern Aesthetic Clinic in ${cityName}`} 
                className="w-full h-full object-cover mix-blend-multiply opacity-90" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh5XZLe2pju4rghTOaI-fA6ZMo2N94pI0HV7o6mVNMHMuSyjCDvAvd8AxgaqIgqbWfUP0kopr3XBV2zTQYM-go1fxTMdtN00drWWZFBmf7VWsp3y6Dk0KJDHRrRdILCYyvHEBSI-UFw0o-0UH-sPMWQgXIdaReSGK4o2OdFwkVstC07HGordfAFhjlgF_N0qsCykIWjHT3tB41Fz_QI_I7s279h0VPjdC_8WBVhk7lb1_XnfqEFrcCySGyp4t9d2UVeuL_VtYw10c"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl border border-outline-variant/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center text-on-tertiary-fixed-variant">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Market Leader</p>
                  <p className="text-lg font-bold text-on-surface leading-tight">ISO 13485 Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro SEO Block */}
      <section className="bg-surface-container-low py-16">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="max-w-4xl border-l-4 border-primary pl-8">
            <p className="text-lg text-on-surface-variant leading-relaxed font-body italic">
              The aesthetic industry in {cityName} is witnessing an unprecedented surge, driven by an increasing consumer awareness of non-invasive cosmetic procedures. As clinic owners and medical professionals seek to meet this rising demand, the selection of high-precision equipment becomes paramount. From the bustling hubs to the clinical centers in {cityName}, the requirement for Diode Lasers, advanced HIFU technology, and multi-functional slimming machines has scaled remarkably. Woxmen Technologies LLP stands at the forefront of this evolution, providing {cityName}&apos;s medical practitioners with state-of-the-art diagnostic and treatment tools. Our commitment to clinical excellence ensures that every machine delivered is backed by rigorous technical support and training, enabling clinics to deliver world-class results. Staying updated with the latest technological trends is no longer optional but a strategic necessity for competitive aesthetic practices in {cityName}.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <BlogFilterGrid cityName={cityName} />

      {/* Internal Linking */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2 className="text-3xl font-headline font-extrabold text-on-surface mb-12 text-center">Explore Aesthetic Equipment Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Link className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center" href="/ipl-hair-removal-machines/">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block group-hover:scale-110 transition-transform">flare</span>
              <p className="font-bold text-sm text-on-surface-variant group-hover:text-primary">IPL Hair Removal</p>
            </Link>
            <Link className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center" href="/diode-laser-machines/">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block group-hover:scale-110 transition-transform">heat_pump</span>
              <p className="font-bold text-sm text-on-surface-variant group-hover:text-primary">Diode Laser</p>
            </Link>
            <Link className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center" href="/rf-skin-tightening-machines/">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block group-hover:scale-110 transition-transform">bolt</span>
              <p className="font-bold text-sm text-on-surface-variant group-hover:text-primary">RF Skin Tightening</p>
            </Link>
            <Link className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center" href="/hifu-machines/">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block group-hover:scale-110 transition-transform">waves</span>
              <p className="font-bold text-sm text-on-surface-variant group-hover:text-primary">HIFU Machines</p>
            </Link>
            <Link className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center" href="/cryolipolysis-slimming-machines/">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block group-hover:scale-110 transition-transform">ac_unit</span>
              <p className="font-bold text-sm text-on-surface-variant group-hover:text-primary">Cryolipolysis</p>
            </Link>
            <Link className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center" href="/multifunctional-aesthetic-machines/">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block group-hover:scale-110 transition-transform">settings_input_component</span>
              <p className="font-bold text-sm text-on-surface-variant group-hover:text-primary">Multifunctional</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-container/40 via-transparent to-transparent"></div>
        <div className="max-w-screen-xl mx-auto px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-headline font-black text-white mb-8">Start or Upgrade Your Clinic in <span className="text-primary-fixed">{cityName}</span></h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful dermatologists and aesthetic clinics powered by Woxmen precision technology.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-black transition-all hover:scale-105 shadow-xl shadow-black/20 flex items-center gap-3">
              <span className="material-symbols-outlined">call</span>
              Call Now
            </button>
            <button className="bg-primary-container border-2 border-white/20 text-white px-10 py-4 rounded-xl font-black transition-all hover:bg-white hover:text-primary">
              Contact Now
            </button>
            <button className="bg-[#25D366] text-white px-10 py-4 rounded-xl font-black transition-all hover:scale-105 shadow-xl shadow-green-900/40 flex items-center gap-3">
              <span className="material-symbols-outlined">chat</span>
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer & Floating WhatsApp CTA */}
      <Footer />
    </main>
  );
}
