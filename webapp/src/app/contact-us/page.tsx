import React from 'react';
import Footer from '@/components/Footer';

export default function ContactUsPage() {
  return (
    <main className="pt-20 bg-surface">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-2 hidden lg:block"></div> {/* Editorial Spacing */}
          <div className="lg:col-span-8 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-6 leading-[1.1]">
              Contact Woxmen <br />Technologies
            </h1>
            <p className="text-xl text-on-surface-variant font-body max-w-2xl mb-10 leading-relaxed">
              Precision engineering meets aesthetic excellence. Reach out for product inquiries, live machine demos, or dedicated technical support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a className="inline-flex items-center px-8 py-4 bg-[#25D366] text-white rounded-md font-headline font-bold transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-emerald-500/20" href="https://wa.me/yournumber">
                <span className="material-symbols-outlined mr-2">chat</span>
                Chat on WhatsApp
              </a>
              <a className="inline-flex items-center px-8 py-4 bg-primary-container text-white rounded-md font-headline font-bold transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-primary-container/20" href="tel:+91111111111">
                <span className="material-symbols-outlined mr-2">call</span>
                Call Now
              </a>
            </div>
          </div>
        </div>
        {/* Decorative Element */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </section>

      {/* Quick Contact Options */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp Card */}
            <div className="bg-surface-container-lowest p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl group border border-transparent hover:bg-surface-bright">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 text-[#25D366]">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'wght' 300" }}>chat</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">Chat on WhatsApp</h3>
              <p className="text-on-surface-variant mb-8 font-body text-sm leading-relaxed">Get instant response from our team for quick queries and pricing.</p>
              <button className="mt-auto w-full py-3 border border-outline-variant text-on-surface font-headline font-bold hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all">Start Chat</button>
            </div>
            
            {/* Phone Card */}
            <div className="bg-surface-container-lowest p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl group border border-transparent hover:bg-surface-bright">
              <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'wght' 300" }}>call</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">Call Us</h3>
              <p className="text-on-surface-variant mb-8 font-body text-sm leading-relaxed">Speak directly with our support team for technical consultations.</p>
              <button className="mt-auto w-full py-3 border border-outline-variant text-on-surface font-headline font-bold hover:bg-primary-container hover:text-white hover:border-primary-container transition-all">Call Now</button>
            </div>
            
            {/* Email Card */}
            <div className="bg-surface-container-lowest p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl group border border-transparent hover:bg-surface-bright">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-tertiary">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'wght' 300" }}>mail</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">Email Us</h3>
              <p className="text-on-surface-variant mb-8 font-body text-sm leading-relaxed">Send your inquiry anytime and we&apos;ll get back within 24 hours.</p>
              <button className="mt-auto w-full py-3 border border-outline-variant text-on-surface font-headline font-bold hover:bg-tertiary hover:text-white hover:border-tertiary transition-all">Send Email</button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Information & Map */}
      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-headline font-bold tracking-widest text-xs uppercase mb-4 block">Corporate HQ</span>
              <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-8 tracking-tight">Woxmen Technologies LLP</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-4 mt-1">location_on</span>
                  <div>
                    <h4 className="font-headline font-bold mb-1">Office Address</h4>
                    <p className="text-on-surface-variant leading-relaxed">Plot 42, Okhla Industrial Estate, Phase III,<br />New Delhi - 110020, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-4 mt-1">schedule</span>
                  <div>
                    <h4 className="font-headline font-bold mb-1">Working Hours</h4>
                    <p className="text-on-surface-variant leading-relaxed">Monday - Saturday<br />10:00 AM - 06:00 PM IST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-4 mt-1">verified</span>
                  <div>
                    <h4 className="font-headline font-bold mb-1">Service Coverage</h4>
                    <p className="text-on-surface-variant leading-relaxed font-bold">PAN India Service Availability</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-outline-variant/20">
                <h3 className="font-headline font-bold mb-6">Connect With Us</h3>
                <div className="flex gap-4">
                  <a className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300" href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                  </a>
                  <a className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300" href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"></path></svg>
                  </a>
                  <a className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300" href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                  </a>
                  <a className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300" href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="aspect-square bg-surface-container-high rounded-sm overflow-hidden border border-outline-variant/10 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.310096733863!2d77.03979687528631!3d28.560449575704105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b72138d49b5%3A0xba9f34fe08a4fb94!2sWOXMEN%20TECHNOLOGIES%20LLP!5e0!3m2!1sen!2sin!4v1778362291758!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Woxmen Technologies LLP Location"
                  className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Woxmen */}
      <section className="bg-surface-container py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-on-surface mb-4">Why Partner With Woxmen?</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Unparalleled expertise and support at every stage of your business growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-container-lowest p-8 rounded-sm">
              <div className="text-primary-container font-headline font-black text-4xl mb-4 opacity-20">01</div>
              <h4 className="font-headline font-bold mb-3">Expert Consultation</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">Tailored clinical advice to help you select the right instrumentation for your clinic&apos;s needs.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-sm">
              <div className="text-primary-container font-headline font-black text-4xl mb-4 opacity-20">02</div>
              <h4 className="font-headline font-bold mb-3">Machine Demo Support</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">See precision in action with our personalized machine demonstrations, both online and onsite.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-sm">
              <div className="text-primary-container font-headline font-black text-4xl mb-4 opacity-20">03</div>
              <h4 className="font-headline font-bold mb-3">PAN India Installation</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">Our technical team ensures seamless setup and training across all major cities in India.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-sm">
              <div className="text-primary-container font-headline font-black text-4xl mb-4 opacity-20">04</div>
              <h4 className="font-headline font-bold mb-3">Fast Response Team</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">A dedicated support desk to address technical queries and maintenance within record times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Background Pattern" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj7uasrihKOUJMXJtlI1yE2W_vJ47yH8WcDt9r6DSY0rZAz_91IFqOx-ryD6ZE0HqSVVxMkiQJK0mWAdGnJUmCknuB86iI6jY3eCZtMUhTuLcCd7EEMH34QJrWooJH_gaRLqZcjOhJLZz4QCRQz7Di0RrP9Hi2B_KGUUwjYnY4cOfxxy6Ki6NKIw4YFF8NhEhvfoCtkaRXU8XACA7TvN7iLa8liYwkOZUkYcMrF0LAKTPvLJUZMoNgyZ252TJp0R0Ri39tsH6CEfk"/>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-headline font-black tracking-tight mb-8">Start Your Aesthetic Business Journey with Woxmen</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-white text-primary font-headline font-bold rounded-sm transition-transform hover:-translate-y-1">Chat on WhatsApp</button>
            <button className="px-10 py-5 border-2 border-white text-white font-headline font-bold rounded-sm hover:bg-white hover:text-primary transition-all">Call Our Experts</button>
            <button className="px-10 py-5 bg-tertiary-fixed text-on-tertiary-fixed font-headline font-bold rounded-sm hover:opacity-90 transition-opacity">Request Email Catalog</button>
          </div>
        </div>
      </section>

      {/* Footer using Global component */}
      <Footer />
    </main>
  );
}
