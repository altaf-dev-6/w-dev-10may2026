import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
              <Link href="#" className="text-primary hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
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
              <li><Link className="text-stone-400 hover:text-white underline-offset-4 hover:underline transition-all duration-200 ease-in-out" href="#">Contact Us</Link></li>
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

      {/* Floating WhatsApp CTA */}
      <Link className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_20px_40px_rgba(88,65,63,0.08)] hover:scale-110 transition-transform flex items-center justify-center cursor-pointer" href="#">
        <span className="material-symbols-outlined text-3xl">chat</span>
      </Link>
    </>
  );
}
