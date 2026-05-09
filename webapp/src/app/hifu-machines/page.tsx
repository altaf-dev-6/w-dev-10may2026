"use client";
import Link from "next/link";
import { useRef } from "react";
import { BLOG_POSTS } from "@/constants/blogData";

export default function HIFUMachinesPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const categoryPosts = BLOG_POSTS.filter(p => p.category === "HIFU Machines");

  const scrollCarousel = (dir: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>

      {/* Floating WhatsApp CTA */}
      <Link className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_20px_40px_rgba(88,65,63,0.08)] hover:scale-110 transition-transform flex items-center justify-center cursor-pointer" href="#">
        <span className="material-symbols-outlined text-3xl">chat</span>
      </Link>

      <main className="pt-20">
        {/* Section 1: Hero */}
        <section className="relative min-h-[870px] flex items-center px-8 overflow-hidden bg-surface">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary-container bg-primary-fixed rounded-full">CERTIFIED MEDICAL GRADE</span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] mb-6 tracking-tight">
                HIFU Machine for <span className="text-primary-container">Clinics in India</span>
              </h1>
              <p className="text-xl text-on-surface-variant mb-10 max-w-xl leading-relaxed">
                Industry-leading precision meet PAN India installation support. Elevate your practice with Woxmen's advanced HIFU technology and 24/7 technical assistance.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-container text-white px-8 py-4 rounded-xl font-headline font-bold hover:shadow-xl transition-all flex items-center gap-2">
                  Request Demo <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-headline font-bold hover:bg-surface-variant transition-all flex items-center gap-2 border border-outline-variant/20">
                  WhatsApp Enquiry
                </button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-primary-container/5 rounded-[3rem] -rotate-3 scale-105"></div>
              <img alt="HIFU Medical Device" className="relative z-10 w-full h-[500px] object-cover rounded-[2.5rem] shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmjrsnifmwoo0_UkVMPAKh67zoVKXVUkTgNKZKdpMuVsFGxpGMCGyjZuQ872lC9Mg3XcKcF25eHzUZ-PSMym7shU8vHeEbqtPfFE8QluaDjq_lI7J6kiQxbY_3P_Hyp8acCgFriLIkbzQr7uSQNQ1E8rhb_mw1F6YHuFmSEQuFCHAoXZSn63QUrFskMsS6jtNflZXasBOVLoin__WQtcGeXKlgDm2d1pEai7vZ9mcFzwBmPhLitvXeqLOjtqhBT8eXf8HvkCRdr-o" />
            </div>
          </div>
        </section>

        {/* Section 2: Introduction */}
        <section className="py-24 bg-surface-container-low px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-headline font-extrabold text-on-surface mb-8">Revolutionizing Aesthetic Treatments</h2>
            <div className="text-lg text-secondary leading-loose space-y-6">
              <p>
                The HIFU system represents the pinnacle of non-invasive clinical technology, specifically engineered to meet the diverse needs of Indian skin types. By utilizing state-of-the-art energy delivery mechanisms, this platform ensures maximum efficacy while maintaining the highest safety standards required for premium clinics. Whether you are expanding your dermatology practice or starting a new wellness center, the HIFU offers an unparalleled return on investment through its versatile application range and low maintenance overheads.
              </p>
              <p>
                Woxmen Technologies LLP brings this global standard to your doorstep in India, combining world-class hardware with an ecosystem of training, clinical protocols, and marketing support. Our HIFU machines are rigorously tested for performance stability under varying electrical and environmental conditions common in the Indian subcontinent.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Product Overview */}
        <section className="py-24 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-6">
                <div className="aspect-square bg-surface-container-lowest rounded-[2rem] p-12 flex items-center justify-center overflow-hidden">
                  <img alt="Technical Specifications" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUoo6PKe6-yT_tcmDv3mtWiQR44bsDUWfJ-aLccHM1DKeR3U0ANwxrXZ_UjK4PSyes4RhgQdbI6ed5AGXH-QeVN-5O3kqaOXz7kpbKmQAUeTrDWHDToUKM0C9kgYhhgRx_VjnQ3zVCPDAYBc8a9koAxsyu2Fp_V2VFFDvgsOdQqdNY047rQLbKwQCqW0TFQBenHoAmnwIkZG9rCzIvpbUFq0vSQWrR4LGyg7PNv47DEJYS5urNTXX0Hikdl-p8VGr5w01JK5cxHCU" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-surface-container rounded-xl border-l-4 border-primary-container">
                    <span className="block text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-1">Origin</span>
                    <span className="font-headline font-extrabold">ISO Certified</span>
                  </div>
                  <div className="p-4 bg-surface-container rounded-xl border-l-4 border-primary-container">
                    <span className="block text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-1">Warranty</span>
                    <span className="font-headline font-extrabold">24 Months</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4">Technical Specifications</h2>
                <p className="text-secondary mb-12">Engineered for consistent performance and clinical accuracy.</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-surface-container-low rounded-2xl">
                    <span className="font-bold text-on-surface-variant">Technology</span>
                    <span className="font-headline font-extrabold text-primary-container">Advanced IPL Tech</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-surface-container-lowest rounded-2xl shadow-sm">
                    <span className="font-bold text-on-surface-variant">Power Output</span>
                    <span className="font-headline font-extrabold text-on-surface">3000W Peak Performance</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-surface-container-low rounded-2xl">
                    <span className="font-bold text-on-surface-variant">Wavelength</span>
                    <span className="font-headline font-extrabold text-on-surface">808nm / Tri-wavelength</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-surface-container-lowest rounded-2xl shadow-sm">
                    <span className="font-bold text-on-surface-variant">Shot Capacity</span>
                    <span className="font-headline font-extrabold text-on-surface">50 Million+ High-Yield</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-surface-container-low rounded-2xl">
                    <span className="font-bold text-on-surface-variant">Cooling System</span>
                    <span className="font-headline font-extrabold text-on-surface">Dual TEC Active Cooling</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-surface-container-lowest rounded-2xl shadow-sm">
                    <span className="font-bold text-on-surface-variant">Screen Interface</span>
                    <span className="font-headline font-extrabold text-on-surface">15.6" Android Smart Touch</span>
                  </div>
                </div>
                <div className="mt-12 p-8 bg-primary-container rounded-[2rem] text-white flex items-center justify-between">
                  <div>
                    <p className="text-primary-fixed/80 font-bold mb-1 uppercase tracking-widest text-xs">Starting From</p>
                    <p className="text-3xl font-headline font-extrabold">Competitive B2B Pricing</p>
                  </div>
                  <button className="bg-white text-primary-container px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">Get Quote</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Key Features */}
        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4">Precision Engineered Features</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">The HIFU combines safety, speed, and comfort in one unified clinical platform.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 bg-surface-container-lowest rounded-3xl hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-primary-fixed flex items-center justify-center rounded-2xl mb-8 group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
                </div>
                <h3 className="text-xl font-headline font-extrabold mb-4">Advanced Technology</h3>
                <p className="text-secondary leading-relaxed">Integrated AI-driven pulse control for consistent energy delivery regardless of session duration.</p>
              </div>
              <div className="p-10 bg-surface-container-lowest rounded-3xl hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-primary-fixed flex items-center justify-center rounded-2xl mb-8 group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <h3 className="text-xl font-headline font-extrabold mb-4">Safe for Indian Skin</h3>
                <p className="text-secondary leading-relaxed">Specially calibrated protocols for Fitzpatrick skin types III to VI, ensuring zero burn risks.</p>
              </div>
              <div className="p-10 bg-surface-container-lowest rounded-3xl hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-primary-fixed flex items-center justify-center rounded-2xl mb-8 group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">bolt</span>
                </div>
                <h3 className="text-xl font-headline font-extrabold mb-4">High Performance</h3>
                <p className="text-secondary leading-relaxed">Short treatment times and high patient throughput with rapid repetition rates up to 10Hz.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Applications */}
        <section className="py-24 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4">Clinical Applications</h2>
                <p className="text-on-surface-variant">Multi-modal functionality allows for a wide array of high-demand aesthetic procedures.</p>
              </div>
              <button className="text-primary-container font-headline font-extrabold flex items-center gap-2 hover:translate-x-2 transition-transform">
                Download Brochure <span className="material-symbols-outlined">download</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative h-80 rounded-3xl overflow-hidden group">
                <img alt="Hair Removal" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeqoR6qWpynh_DSFGn0kXKShEgSImj1hwWyZ4sOIiM6b_nJUSBzOqZX-iCmlr61y-nkXipy9dmNO531fpoWaBA09vZVYyFVdb8omh3MQbVuuPGU1Ernmt2nWKjGExD_QNnVJPPyV1idQ3R2Hyw-MvxA031VgNnNqJlEzcO8hu-OF47C4JCHZ0zcpVSwojrdhTZ9UqFfC36tLoeEruHHrKzkfR1R-nxbKgTeKudd_pH1BYbpUzmpOiZ2Zv_gieOC-3-0cvXwptLzPw" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent flex items-end p-8">
                  <h4 className="text-white font-headline font-extrabold text-xl">Permanent Hair Removal</h4>
                </div>
              </div>
              <div className="relative h-80 rounded-3xl overflow-hidden group">
                <img alt="Skin Tightening" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0oGG053faJu6Ws7rU3zCtd1nwvkhL0RygLMvqzJAFfnQav8RYjz0HJT13LNEYLgAVLXJvNQcoK62TouUTokhqnx9epc3mTATPyya-e9AUi_Ba6wr3nxfko2c69lY67_4F_rriv8LWw1ZRkFiKflQWbu4WzafD5qH7Q5CpqjMgiyP_ZgC9u3pZ1JZeA6XfataMpQ1sKIl6DhV0zLZQf5fUd887FsVogzb-tRKsN_TeN_C1dgkNB-k1iYT-dV4bX1GD5v06vTZ3u3Q" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent flex items-end p-8">
                  <h4 className="text-white font-headline font-extrabold text-xl">Skin Tightening</h4>
                </div>
              </div>
              <div className="relative h-80 rounded-3xl overflow-hidden group">
                <img alt="Pigmentation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX0ck5i9xtIazxdQKqtRbFZAQWqTrM47fnsTs7715KnGTduUVMslrSZYVq6V2BWpvajk9fn87u2BippEM4BN_j4jmoLt-H4HJKoB7ILMafZ_OQf2pJa8NVn82ULS7okds-bHpnYzXy05b80DxqubE5lFr7MT3N7Fit_swZmSBsAmL5dqNbEQQ5Qv9mMDyIGumi38UzJ70ngzFroWw5E-xg1A5NVQbObOvAtlLOeuw5X7tnlJkH0D3q5wSGJbSHiZKh2qfyyF6CnIk" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent flex items-end p-8">
                  <h4 className="text-white font-headline font-extrabold text-xl">Pigmentation Therapy</h4>
                </div>
              </div>
              <div className="relative h-80 rounded-3xl overflow-hidden group">
                <img alt="Acne Treatment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIlfdhfXrFmIYBfWEiRT2a8pccsRmhAVfyJOvHZsadaxj1xu-9mJcddamgy1HSII0tM9IM5uP_zLVwZ3I8339_JolExRw4IMsc_1uNXYurwJdCOJAF0GhMWewuTSxBe22Lwjibu_zUT1xfnR6jjiBPnQ9jNyqtYUb89nYhcqP8TZeevOTTrPCYHtYFodtW-hV0caZTH_KCzRn790NmLmH9IzjvV3CztzMVZdpPmR2k48ajn4jAVazhm5C4RyqZN3yBiAAXKpkKOJ8" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent flex items-end p-8">
                  <h4 className="text-white font-headline font-extrabold text-xl">Active Acne Treatment</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: How it Works */}
        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-8">Science Behind the Technology</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center font-extrabold text-primary-container shadow-sm">01</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Selective Photothermolysis</h4>
                      <p className="text-secondary leading-relaxed">The HIFU emits concentrated light energy that is absorbed specifically by the target chromophore without affecting surrounding tissues.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center font-extrabold text-primary-container shadow-sm">02</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Dynamic Cooling Integration</h4>
                      <p className="text-secondary leading-relaxed">Concurrent cooling of the epidermis before and during energy discharge protects the skin surface and increases patient comfort significantly.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center font-extrabold text-primary-container shadow-sm">03</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Coherent Pulse Distribution</h4>
                      <p className="text-secondary leading-relaxed">Advanced capacitors ensure that energy delivery is uniform across the entire pulse duration, preventing "hot spots" and inconsistent results.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary-container p-12 rounded-[3rem] shadow-2xl rotate-1">
                <h3 className="text-2xl font-headline font-extrabold text-white mb-6">Expert Consultation</h3>
                <p className="text-primary-fixed/80 mb-8">Discuss the clinical outcomes of HIFU with our medical engineers.</p>
                <form className="space-y-4">
                  <input className="w-full bg-white/10 border-none rounded-xl p-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/40" placeholder="Clinic Name" type="text" />
                  <input className="w-full bg-white/10 border-none rounded-xl p-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/40" placeholder="Phone Number" type="tel" />
                  <button className="w-full bg-white text-primary-container py-4 rounded-xl font-headline font-bold hover:bg-primary-fixed transition-colors">Call Back Request</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Why Choose Woxmen */}
        <section className="py-24 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4">The Woxmen Advantage</h2>
              <p className="text-on-surface-variant">We don't just sell machines; we build successful practices.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-surface-container rounded-3xl">
                <span className="material-symbols-outlined text-5xl text-primary-container mb-6">public</span>
                <h4 className="font-headline font-extrabold mb-2">PAN India Support</h4>
                <p className="text-sm text-secondary">Service engineers stationed in every major metro for 24hr response time.</p>
              </div>
              <div className="text-center p-8 bg-surface-container rounded-3xl">
                <span className="material-symbols-outlined text-5xl text-primary-container mb-6">school</span>
                <h4 className="font-headline font-extrabold mb-2">Hands-on Training</h4>
                <p className="text-sm text-secondary">Certified clinical training for your staff on-site at your clinic.</p>
              </div>
              <div className="text-center p-8 bg-surface-container rounded-3xl">
                <span className="material-symbols-outlined text-5xl text-primary-container mb-6">trending_up</span>
                <h4 className="font-headline font-extrabold mb-2">ROI Focused</h4>
                <p className="text-sm text-secondary">Proven business models to help you recover your investment in months.</p>
              </div>
              <div className="text-center p-8 bg-surface-container rounded-3xl">
                <span className="material-symbols-outlined text-5xl text-primary-container mb-6">history</span>
                <h4 className="font-headline font-extrabold mb-2">Buy-Back Schemes</h4>
                <p className="text-sm text-secondary">Upgrade to future technologies with guaranteed buy-back values.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden" open>
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-headline font-bold text-on-surface">Is HIFU safe for all Indian skin types?</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-secondary leading-relaxed border-t border-surface-container">
                  Yes, our HIFU machines are specifically calibrated for Fitzpatrick skin types III to VI. The cooling technology ensures safety even at high fluences.
                </div>
              </details>
              <details className="group bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-headline font-bold text-on-surface">What is the expected ROI for a new clinic?</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-secondary leading-relaxed border-t border-surface-container">
                  Most clinics achieve operational break-even within 6-8 months, depending on patient volume and treatment pricing in their local market.
                </div>
              </details>
              <details className="group bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-headline font-bold text-on-surface">How often does the machine require maintenance?</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-secondary leading-relaxed border-t border-surface-container">
                  We recommend a quarterly preventive maintenance check. Our AMC packages cover all consumables and periodic technical audits.
                </div>
              </details>
              <details className="group bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-headline font-bold text-on-surface">Does Woxmen provide clinical training?</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-secondary leading-relaxed border-t border-surface-container">
                  Yes, we provide extensive 3-day on-site training followed by certification for your clinical staff upon installation.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Section 9: SEO Keywords */}
        <section className="py-16 px-8 bg-surface">
          <div className="max-w-7xl mx-auto border-t border-outline-variant/10 pt-16">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-8">Related Search Categories</h3>
            <div className="flex flex-wrap gap-3">
              {['IPL Machine Delhi', 'Diode Laser Mumbai', 'Medical Laser Price India', 'Aesthetic Clinic Equipment', 'Dermatology Machines Bangalore', 'CO2 Fractional Laser Price', 'Woxmen Medical Solutions', 'Tattoo Removal Machine India'].map((kw, i) => (
                <Link key={i} className="px-4 py-2 bg-surface-container rounded-full text-sm font-medium text-secondary hover:bg-primary-container hover:text-white transition-colors" href="#">{kw}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: Blog Slider */}
        <section className="py-24 px-8 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6">
              <div>
                <h2 className="text-3xl font-headline font-extrabold text-on-surface mb-2">Latest Insights on HIFU</h2>
                <p className="text-on-surface-variant">Stay updated with the latest in aesthetic medical technology.</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => scrollCarousel('left')} className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-container text-primary-container hover:bg-primary-container hover:text-white transition-all shadow-sm cursor-pointer">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button onClick={() => scrollCarousel('right')} className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-container text-primary-container hover:bg-primary-container hover:text-white transition-all shadow-sm cursor-pointer">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div ref={carouselRef} className="grid grid-flow-col auto-cols-[calc(50%-1rem)] md:auto-cols-[calc(33.333%-1.33rem)] lg:auto-cols-[calc(25%-1.5rem)] gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4 -mx-4 px-4 overflow-y-hidden items-stretch">
              {categoryPosts.map((blog, idx) => (
                <Link key={idx} href={`/blogs/delhi/${blog.slug}`} target="_blank" className="article group cursor-pointer w-full flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-outline-variant/5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden flex-shrink-0 relative">
                    <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={blog.title} src={blog.image} />
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2">{blog.tag}</p>
                    <h4 className="font-headline font-bold text-lg md:text-xl mb-2 group-hover:text-primary-container transition-colors line-clamp-2">{blog.title}</h4>
                    <p className="text-secondary text-xs md:text-sm line-clamp-2 mt-auto">{blog.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 11: Internal Linking */}
        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-headline font-extrabold text-on-surface mb-12">Explore Other Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link className="p-8 bg-white rounded-3xl flex items-center justify-between group hover:bg-primary-container transition-all cursor-pointer" href="#">
                <span className="font-headline font-bold group-hover:text-white">Diagnostic Imaging</span>
                <span className="material-symbols-outlined text-primary-container group-hover:text-white transition-transform group-hover:translate-x-2">arrow_forward</span>
              </Link>
              <Link className="p-8 bg-white rounded-3xl flex items-center justify-between group hover:bg-primary-container transition-all cursor-pointer" href="#">
                <span className="font-headline font-bold group-hover:text-white">Surgical Lasers</span>
                <span className="material-symbols-outlined text-primary-container group-hover:text-white transition-transform group-hover:translate-x-2">arrow_forward</span>
              </Link>
              <Link className="p-8 bg-white rounded-3xl flex items-center justify-between group hover:bg-primary-container transition-all cursor-pointer" href="#">
                <span className="font-headline font-bold group-hover:text-white">Body Contouring</span>
                <span className="material-symbols-outlined text-primary-container group-hover:text-white transition-transform group-hover:translate-x-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 12: Final CTA */}
        <section className="py-24 px-8 relative overflow-hidden bg-primary-container">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
              <path d="M0 0 L100 0 L100 100 Z" fill="white"></path>
            </svg>
          </div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white mb-8">Upgrade Your Clinic with <br className="hidden md:block" />HIFU</h2>
            <p className="text-primary-fixed/80 text-xl mb-12 max-w-2xl mx-auto">Join 500+ successful clinics across India using Woxmen Technologies. Start your journey today with a live demonstration.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-primary-container px-10 py-5 rounded-2xl font-headline font-extrabold text-lg shadow-xl hover:scale-105 transition-transform">Request Live Demo</button>
              <button className="bg-primary-container border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-headline font-extrabold text-lg hover:bg-white/10 transition-colors">Check Best Price</button>
              <button className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-headline font-extrabold text-lg shadow-xl hover:scale-105 transition-transform flex items-center gap-3">
                <span className="material-symbols-outlined">chat</span> WhatsApp Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer from Home Page */}
      <footer className="w-full pt-16 pb-8 bg-stone-950 dark:bg-black tonal-transition border-t border-stone-800 dark:border-stone-900">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-7xl mx-auto font-['Inter'] text-sm leading-relaxed">
          <div className="space-y-6">
            <div className="text-lg font-bold text-white">Woxmen Technologies</div>
            <p className="text-stone-400">Leading manufacturer and supplier of high-end aesthetic medical equipment in India. ISO & CE Certified precision.</p>
            <div className="flex space-x-4 mt-2">
              <Link href="#" className="text-primary hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </Link>
              <Link href="#" className="text-primary hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </Link>
              <Link href="#" className="text-primary hover:text-white transition-colors" aria-label="YouTube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </Link>
              <Link href="#" className="text-primary hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link className="text-stone-400 hover:text-white underline-offset-4 hover:underline transition-all duration-200 ease-in-out" href="#">Our Products</Link></li>
              <li><Link className="text-stone-400 hover:text-white underline-offset-4 hover:underline transition-all duration-200 ease-in-out" href="#">Setup Solutions</Link></li>
              <li><Link className="text-stone-400 hover:text-white underline-offset-4 hover:underline transition-all duration-200 ease-in-out" href="#">Success Stories</Link></li>
              <li><Link className="text-stone-400 hover:text-white underline-offset-4 hover:underline transition-all duration-200 ease-in-out" href="#">AMC Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link className="text-stone-400 hover:text-white underline-offset-4 hover:underline transition-all duration-200 ease-in-out" href="/contact-us">Contact Us</Link></li>
              <li><Link className="text-stone-400 hover:text-white underline-offset-4 hover:underline transition-all duration-200 ease-in-out" href="#">Privacy Policy</Link></li>
              <li><Link className="text-stone-400 hover:text-white underline-offset-4 hover:underline transition-all duration-200 ease-in-out" href="#">Terms of Service</Link></li>
              <li><Link className="text-stone-400 hover:text-white underline-offset-4 hover:underline transition-all duration-200 ease-in-out" href="#">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-stone-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                <span>Plot 42, Okhla Industrial Estate, Phase III, New Delhi - 110020</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">call</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                <span>info@woxmen.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-stone-800 text-center max-w-7xl mx-auto px-12">
          <p className="text-stone-500 text-xs">© 2024 Woxmen Technologies. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
