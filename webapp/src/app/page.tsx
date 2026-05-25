"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/constants/blogData";

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      const cardWidth = 332; // ~300px + 32px gap
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      const cardWidth = 332; 
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  return (
    <>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full h-full object-cover" alt="Modern high-end dermatology clinic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMStp1M-PF37iZ-Xxs4kOunmOXksQUXtTLqbux7FxAshw4oNyAjA7dDFv2p7RpxgDotZ1U4-52ANnSMzGlPg8jFKtDP25K_rk6nAP4NPpWJjfyI8kq5w9kZrrR2aPdga9xut39woamq-KTkrAI3OHd45ZPC_aK2D8-vfQiD89dk6_dPcA-nko_PWTHEwyAtcPfKbK9W9V5IWPJvixQSXLdpuFRSilT5LXwzve9F3_9LMpI95aW2mpKhKCSy4h4uh9TORmdVRKRmNs"/>
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-primary tracking-tight leading-tight mb-6">
              Aesthetic Machine Supplier in India for Clinics & Salons
            </h1>
            <p className="text-xl text-on-surface-variant mb-10 leading-relaxed font-medium">
              Elevate your practice with world-class medical technology. Premium IPL, Diode Laser, and HIFU solutions engineered for clinical precision and patient safety.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact-us">
                <button className="bg-primary-container text-white px-8 py-4 rounded-md font-bold hover:bg-primary transition-colors flex items-center gap-2">
                  Request Demo <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </Link>
              <button className="bg-[#25D366] text-white px-8 py-4 rounded-md font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
                <span className="material-symbols-outlined">chat</span> WhatsApp Expert
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Product Categories Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-headline text-on-surface mb-2">Technological Specialties</h2>
            <div className="w-20 h-1 bg-primary-container"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="group bg-white p-8 px-4 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-stone-400 group-hover:text-primary-container text-5xl mb-4 transition-colors">flash_on</span>
              <h3 className="font-bold font-headline text-on-surface uppercase tracking-wide text-xs">IPL Systems</h3>
            </div>
            <div className="group bg-white p-8 px-4 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-stone-400 group-hover:text-primary-container text-5xl mb-4 transition-colors">bolt</span>
              <h3 className="font-bold font-headline text-on-surface uppercase tracking-wide text-xs">Diode Laser</h3>
            </div>
            <div className="group bg-white p-8 px-4 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-stone-400 group-hover:text-primary-container text-5xl mb-4 transition-colors">waves</span>
              <h3 className="font-bold font-headline text-on-surface uppercase tracking-wide text-xs">RF Tightening</h3>
            </div>
            <div className="group bg-white p-8 px-4 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-stone-400 group-hover:text-primary-container text-5xl mb-4 transition-colors">target</span>
              <h3 className="font-bold font-headline text-on-surface uppercase tracking-wide text-xs">HIFU Tech</h3>
            </div>
            <div className="group bg-white p-8 px-4 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-stone-400 group-hover:text-primary-container text-5xl mb-4 transition-colors">ac_unit</span>
              <h3 className="font-bold font-headline text-on-surface uppercase tracking-wide text-xs">Cryolipolysis</h3>
            </div>
            <div className="group bg-white p-8 px-4 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-stone-400 group-hover:text-primary-container text-5xl mb-4 transition-colors">device_hub</span>
              <h3 className="font-bold font-headline text-on-surface uppercase tracking-wide text-xs leading-tight">Multifunctional Technology</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About/Trust Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="asymmetric-grid gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-tertiary-fixed opacity-20 rounded-full blur-3xl"></div>
              <h2 className="text-4xl font-black font-headline text-primary mb-6 leading-tight">India&apos;s Trusted Partner in Aesthetic Evolution</h2>
              <p className="text-on-surface-variant leading-relaxed mb-8">Woxmen Technologies LLP provides PAN India service and support, ensuring your clinic never stops growing. We don&apos;t just supply machines; we build clinical success stories through unmatched technical expertise and certified equipment.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-surface-container-low text-center">
                <div className="text-4xl font-black font-headline text-primary mb-2">500+</div>
                <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Clinics Served</div>
              </div>
              <div className="p-8 bg-surface-container-low text-center border-x-0 md:border-x border-outline-variant/20">
                <div className="text-4xl font-black font-headline text-primary mb-2">1200+</div>
                <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Installations</div>
              </div>
              <div className="p-8 bg-surface-container-low text-center">
                <div className="text-4xl font-black font-headline text-primary mb-2">12+</div>
                <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Woxmen */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-headline text-on-surface mb-4">Why Choose Woxmen</h2>
            <p className="text-on-surface-variant">The clinical precision of our machines combined with our support ecosystem makes us the preferred choice for top dermatologists.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">biotech</span>
              <h3 className="text-lg font-bold mb-2 font-headline">Advanced Tech</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Next-gen energy delivery systems for superior patient results.</p>
            </div>
            <div className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">settings_suggest</span>
              <h3 className="text-lg font-bold mb-2 font-headline">Multi-function</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Versatile platforms that maximize ROI with multiple treatment heads.</p>
            </div>
            <div className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">support_agent</span>
              <h3 className="text-lg font-bold mb-2 font-headline">24/7 Support</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Dedicated service engineers across major Indian hubs for zero downtime.</p>
            </div>
            <div className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">trending_up</span>
              <h3 className="text-lg font-bold mb-2 font-headline">Business Growth</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Marketing and training support to help your clinic scale rapidly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden bg-surface-container h-[400px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Clinic Setup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcZdl9ErLbtU2DcUmrBH98rv5CkKxzhuETwOPQN7WzrHA2uuvGa-wegtXp9auFcAPg7Lq4t17wivTyPZAKApYOuU-6FTjoSblKE7DpHYrrY5BarE0yli0xy9kU2rKoqQiJiyJ-sWZ4EcKNsul9LQ0kAnbyOG5AakD2ZkMnuCyKeFYcP1DOfFbOvQSvcN-NtCCwiRdE4hUatm-GSLRqt_FD4KMdmRdKR5wif567HOwxhaGSQDdsc_tqXXZWjUwKvIHIeZgTW-VsPVs"/>
              <div className="absolute inset-0 bg-primary/60 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold font-headline mb-2">Clinic Setup</h3>
                <p className="text-white/80 mb-4">Full turnkey solutions for new aesthetic dermatology clinics.</p>
                <Link className="text-sm font-bold uppercase tracking-widest flex items-center gap-2" href="#">Learn More <span className="material-symbols-outlined">arrow_forward</span></Link>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-surface-container h-[400px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Salon Upgrade" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVuwHnCYvWkq1uB9_Pwuqq6xAc3NUxoTip8joB5j70gYOH0osbJb9PPZJVEL5q8_LzHnqSiZXP0eRKPt2Wf7FM_B2_zTHV4z79jYyvVwMN6zDugXyjLnn2i8-TdTRG2ykK09cL5SPdxO3iAqDRKfpJQq9QmaOQt1wxIFvAn4B0gkccMjviXYOmWU_mZcLlp8d-cwEHzf5zlcXG3l53olGzq5U9hA-Q2wt4GCqNyssrkVeY_rRfGP_nZwNBsXXPAP7UgZeZQDMGIdU"/>
              <div className="absolute inset-0 bg-tertiary/60 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold font-headline mb-2">Salon Upgrade</h3>
                <p className="text-white/80 mb-4">Transition your salon into a high-revenue medical spa.</p>
                <Link className="text-sm font-bold uppercase tracking-widest flex items-center gap-2" href="#">Learn More <span className="material-symbols-outlined">arrow_forward</span></Link>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-surface-container h-[400px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="EMI Options" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnZUu-Ec7tOIDjuuRkJ8Z_eYOoHuezcZb4Y0nk0bqmaCej9njnC8CVfAPgk4f_-CwKLKCsSFCitqN74KM_PzlZUrgLa_4jtW-21IG1Qp1S_Z4CBFnm4W-xAu44QiBCd2KX8AtKf4ycqjVFton1S6OxP3DKM9nqDWqC_8jQgm00psuBeSi_84zNNHvilYrUiiqzaNhPMG2KJTk6HjFNE83EPfFe3_sDGhtzXD9tI5H99abum-syDCbS_k6mZb6-9_dl5FPDF4B31OM"/>
              <div className="absolute inset-0 bg-stone-800/60 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold font-headline mb-2">EMI Options</h3>
                <p className="text-white/80 mb-4">Flexible financing and leasing models for capital equipment.</p>
                <Link className="text-sm font-bold uppercase tracking-widest flex items-center gap-2" href="#">Learn More <span className="material-symbols-outlined">arrow_forward</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Machines */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold font-headline text-center mb-16">Premium Product Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[ 
              { title: "IPL Hair Removal Machines", desc: "Advanced broad-spectrum light therapy for permanent hair reduction and skin rejuvenation.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm0DcIU75kFuY983wlgJwRpzAnvCE1qF328bS9lvNDizIP30vLANPuRXjFhn_T4X03393yyxQO9_BK50ac42EQiGflizvhI-y9JkTMUgSjOKLCLWeEYksEFJwJ3lVi2O3PzU4Hi-Rsq_xpLRyLHi_L2NBfE_5KIZLY-U_SKU07qPBgvdseThkZOd0UqNLNaQCeIvylPT2wwY0WXOVvL9FPqWUv5I7AgJwh5TOeIlKGY9xMYy9bunVLnGQjHFGfQCDsfWzopDdeuGU" },
              { title: "Diode Laser Machines", desc: "High-power 808nm clinical precision for virtually painless hair removal on all skin types.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJMc1HTPVHDI7e29RcDJlZXAr5Tpt_vMvyB0codaa49mb3lroOOMcKYmxhs7qH_iU7HvZUA8YjaSMET8UcuSdN5RoPcNvP8Tj7JZBg8OB2vPyfoD_Fjtl7I3xaKVQqn7GpsIbTMZd3nP4_PpJrVo9VOQDhitho5ZQq-l4gvjAt0HBCAT8EGqTC21rvEtWAJUg6TS3GMHYOeed6oTX3csvleLZzAAx9D0c5TXA8VKfrG0GK7k_E8v1_QAaxVjRNUf8OqlU5haJ3Q-c" },
              { title: "RF Skin Tightening Machines", desc: "Radio frequency energy delivery for collagen stimulation and non-surgical skin lifting.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH0hyt69f6LbXA0WOGmXclXFPuPjVCsjLPAlj_Xb4-ZjXJY6kr17Y5nvqGHAok-W32dFYiZRNT4r5z_EcCA3tIe-rZLW8ryDPRMycDYxO6qqcAcAmCYjOccnAcm8QKOTbAJ67H2IDWiE5QgPKecugWyNoQfVMWpoZI-TC81mPD6QyAkRjJUBzo5xSpAeScWuPsV3K16blEKanQV53D0wl0Qu_VukKwZbwabCEJv1QYeB-wcerRPqqlNndn9PhAoOzs2vIrv1U-l3E" },
              { title: "HIFU Machines", desc: "Targeted ultrasound technology for non-invasive face lifting and deep tissue tightening.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwPWiy7az9qmCsoAynH1ulz8m3n2O4vCIyaNWgQHgQZDBHIcBlWc6t4YMMPQue--t7vWnQYNS2YSEYBvOeADEpikjIQj-ZlipvXokGgrh5cSlEgPQxD_o9fpXE8G5vaMKlM3u5nmVNtvLGyodI6F_zKcMz-zslfMMwxJL1otYjY-fbw1_wQto8_y3JApjVjgiiESXFlv-u2PuCrsyNHa56BjU_h3Euik-RKVR962hZG3jfbn08ndLb05EInuWYs7B4rYchrpBXgDs" },
              { title: "Cryolipolysis Slimming Machines", desc: "Non-invasive fat reduction through controlled cooling to eliminate stubborn fat cells.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG16qbcuKiVcvvRC3Z3q6JLfqlvJs6Xt6j2R9TU7lasMVUq_4VrrIUotK-OQWiJoefLJGQWEjXapZq2URBnjgnOLAFk9kpI-oIBooLkOvggAoy6Nu7Wob6oqmJW4DuUpVxnBPzZfrYH1GuXKCird5wOXbCy_LwLLiAn2txBGNLr2lMmxtTMbouqy7OSWCj3o2rSwcSKwgn6yurEItypH5--wcqvO0G_1cvK_Rr8PQuqVD-S9SzDX3M2e0NemdhutaPO1vVe5VFflY" },
              { title: "Multifunctional Technology", desc: "All-in-one clinical workstations that maximize ROI with versatile treatment modalities.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG16qbcuKiVcvvRC3Z3q6JLfqlvJs6Xt6j2R9TU7lasMVUq_4VrrIUotK-OQWiJoefLJGQWEjXapZq2URBnjgnOLAFk9kpI-oIBooLkOvggAoy6Nu7Wob6oqmJW4DuUpVxnBPzZfrYH1GuXKCird5wOXbCy_LwLLiAn2txBGNLr2lMmxtTMbouqy7OSWCj3o2rSwcSKwgn6yurEItypH5--wcqvO0G_1cvK_Rr8PQuqVD-S9SzDX3M2e0NemdhutaPO1vVe5VFflY" }
            ].map((prod, idx) => (
              <div key={idx} className="bg-white p-6 shadow-sm flex flex-col">
                <div className="aspect-square bg-surface-container mb-6 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" alt={prod.title} src={prod.img}/>
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">{prod.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6 flex-grow">{prod.desc}</p>
                <Link href="#" className="w-full py-3 border border-primary-container text-primary-container font-bold hover:bg-primary-container hover:text-white transition-all uppercase text-xs tracking-widest cursor-pointer block text-center">
                  View Specifications
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-2xl font-bold font-headline text-stone-900 mb-8 border-l-4 border-primary pl-4">Serving Key Hubs</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {["Delhi NCR", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Nagpur"].map(city => (
              <Link key={city} className="px-4 py-3 bg-stone-50 text-stone-600 font-medium hover:bg-primary hover:text-white transition-colors text-center text-sm" href="#">{city}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Insights */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="container mx-auto px-8 relative">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold font-headline">Recent Blogs & Articles</h2>
              <div className="w-12 h-1 bg-primary-container mt-2"></div>
            </div>
            <div className="flex gap-2">
              <button onClick={scrollPrev} className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-container text-primary-container hover:bg-primary-container hover:text-white transition-all shadow-sm cursor-pointer">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button onClick={scrollNext} className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-container text-primary-container hover:bg-primary-container hover:text-white transition-all shadow-sm cursor-pointer">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div ref={carouselRef} className="grid grid-flow-col auto-cols-[calc(100%-1rem)] md:auto-cols-[calc(33.333%-1.33rem)] lg:auto-cols-[calc(25%-1.5rem)] gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4 -mx-4 px-4 overflow-y-hidden items-stretch">
            {[...BLOG_POSTS]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((blog, idx) => (
                <Link 
                  key={idx} 
                  href={`/blogs/delhi/${blog.slug}`}
                  target="_blank"
                  className="bg-white group cursor-pointer w-full shadow-sm hover:shadow-md transition-shadow flex flex-col h-full rounded-2xl overflow-hidden border border-outline-variant/10"
                >
                  <div className="overflow-hidden aspect-[4/3] flex-shrink-0">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={blog.title} src={blog.image} />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-3">{blog.tag}</p>
                    <h3 className="text-base font-bold font-headline mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{blog.title}</h3>
                    <p className="text-on-surface-variant text-xs line-clamp-3 mt-auto leading-relaxed">{blog.description}</p>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-8 text-center max-w-4xl">
          <h2 className="text-4xl font-black font-headline text-primary mb-6">Start or Upgrade Your Aesthetic Clinic</h2>
          <p className="text-on-surface-variant text-lg mb-12">Consult with our technology experts to find the right solutions for your practice. From machine selection to staff training, we are with you.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-primary-container text-white px-10 py-4 rounded font-bold hover:shadow-lg transition-all cursor-pointer">Book Clinical Consultation</button>
            <button className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-10 py-4 rounded font-bold hover:shadow-lg transition-all cursor-pointer">Download Brochure</button>
            <button className="bg-[#25D366] text-white px-10 py-4 rounded font-bold hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined">chat</span> Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* SEO Keyword Cloud */}
      <section className="py-12 bg-white border-t border-stone-200">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 opacity-60 text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
            {["Diode Laser India", "IPL Machine Manufacturer", "HIFU Machine Supplier Mumbai", "RF Skin Tightening Delhi", "Cryolipolysis Machine Price India", "Aesthetic Equipment Bangalore", "Medical Laser Suppliers"].map((word, i) => (
              <span key={i} className="flex gap-6 items-center">
                <Link className="hover:text-primary transition-colors" href="#">{word}</Link>
                {i < 6 && <span className="">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Floating WhatsApp CTA */}
      <Footer />
    </>
  );
}
