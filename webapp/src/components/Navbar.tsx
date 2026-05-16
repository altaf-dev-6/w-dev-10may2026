"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const equipmentCategories = [
  { name: "IPL Hair Removal Machines", url: "/ipl-hair-removal-machines/" },
  { name: "Diode Laser Machines", url: "/diode-laser-machines/" },
  { name: "RF Skin Tightening Machines", url: "/rf-skin-tightening-machines/" },
  { name: "HIFU Machines", url: "/hifu-machines/" },
  { name: "Cryolipolysis Slimming Machines", url: "/cryolipolysis-slimming-machines/" },
  { name: "Multifunctional Technology", url: "/multifunctional-aesthetic-machines/" },
];

const cities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Ahmedabad", "Kolkata"];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Close mobile menu gracefully on resize if moving to desktop or changing route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  const isCategoryActive = pathname !== "/" && equipmentCategories.some((c) => pathname.includes(c.url));
  const isCityActive = pathname.includes("/blogs/");

  return (
    <>
      <nav className="fixed top-0 w-full z-[80] bg-[#FFFFFF] shadow-md border-b border-stone-100">
        <div className="flex justify-between items-center px-6 lg:px-8 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black text-[#7B1315] tracking-tighter font-headline z-[90]">
            Woxmen
          </Link>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 text-stone-700 hover:text-[#7B1315] transition-colors z-[90]"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 font-['Manrope'] font-bold tracking-tight text-sm">
            <Link
              className={
                pathname === "/"
                  ? "text-[#7B1315] border-b-2 border-[#7B1315] pb-1"
                  : "text-[#686867] hover:text-[#7B1315] transition-colors"
              }
              href="/"
            >
              Home
            </Link>

            {/* Equipment Dropdown */}
            <div className="relative group py-4">
              <span
                className={`flex items-center gap-1 cursor-pointer transition-colors ${
                  isCategoryActive
                    ? "text-[#7B1315] border-b-2 border-[#7B1315] pb-1"
                    : "text-[#686867] group-hover:text-[#7B1315]"
                }`}
              >
                Equipment Categories <span className="material-symbols-outlined text-base">expand_more</span>
              </span>
              <div className="absolute top-[calc(100%-1rem)] left-0 w-72 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-xl py-3 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 border border-stone-100 z-50">
                {equipmentCategories.map((item, i) => {
                  const isActive = pathname.includes(item.url);
                  return (
                    <Link
                      key={i}
                      href={item.url}
                      className={`block px-6 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "text-[#7B1315] bg-stone-50 font-bold"
                          : "text-[#686867] hover:bg-stone-50 hover:text-[#7B1315]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Cities Dropdown */}
            <div className="relative group py-4">
              <span
                className={`flex items-center gap-1 cursor-pointer transition-colors ${
                  isCityActive
                    ? "text-[#7B1315] border-b-2 border-[#7B1315] pb-1"
                    : "text-[#686867] group-hover:text-[#7B1315]"
                }`}
              >
                Cities We Serve <span className="material-symbols-outlined text-base">expand_more</span>
              </span>
              <div className="absolute top-[calc(100%-1rem)] left-0 w-48 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-xl py-3 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 border border-stone-100 z-50">
                {cities.map((city, i) => {
                  const cityUrl = `/blogs/${city.toLowerCase()}/`;
                  const isActive = pathname.includes(cityUrl);
                  return (
                    <Link
                      key={i}
                      href={cityUrl}
                      className={`block px-6 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "text-[#7B1315] bg-stone-50 font-bold"
                          : "text-[#686867] hover:bg-stone-50 hover:text-[#7B1315]"
                      }`}
                    >
                      {city}
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              className={
                pathname === "/contact-us"
                  ? "text-[#7B1315] border-b-2 border-[#7B1315] pb-1"
                  : "text-[#686867] hover:text-[#7B1315] transition-colors"
              }
              href="/contact-us"
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact-us">
              <button className="bg-[#7B1315] text-white px-6 py-2.5 rounded-lg hover:bg-[#580006] transition-all duration-300 font-headline font-bold text-sm shadow">
                Request Demo
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[85] transition-transform duration-500 ease-in-out lg:hidden flex flex-col pt-24 px-6 overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 font-['Manrope'] mb-12">
          <Link
            href="/"
            className={`text-xl font-bold pb-2 border-b border-stone-100 ${
              pathname === "/" ? "text-[#7B1315]" : "text-stone-800"
            }`}
          >
            Home
          </Link>

          {/* Mobile Accordion: Equipment */}
          <div>
            <button
              onClick={() => toggleAccordion("equipment")}
              className={`flex justify-between items-center w-full text-xl font-bold pb-2 border-b border-stone-100 transition-colors ${
                isCategoryActive || openAccordion === "equipment" ? "text-[#7B1315]" : "text-stone-800"
              }`}
            >
              Equipment Categories
              <span
                className={`material-symbols-outlined transform transition-transform duration-300 ${
                  openAccordion === "equipment" ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            <div
              className={`flex flex-col space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
                openAccordion === "equipment" ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              {equipmentCategories.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  className={`pl-4 text-base ${
                    pathname.includes(item.url) ? "text-[#7B1315] font-bold" : "text-stone-600 active:text-[#7B1315]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Accordion: Cities */}
          <div>
            <button
              onClick={() => toggleAccordion("cities")}
              className={`flex justify-between items-center w-full text-xl font-bold pb-2 border-b border-stone-100 transition-colors ${
                isCityActive || openAccordion === "cities" ? "text-[#7B1315]" : "text-stone-800"
              }`}
            >
              Cities We Serve
              <span
                className={`material-symbols-outlined transform transition-transform duration-300 ${
                  openAccordion === "cities" ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            <div
              className={`flex flex-col space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
                openAccordion === "cities" ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              {cities.map((city, i) => {
                const cityUrl = `/blogs/${city.toLowerCase()}/`;
                return (
                  <Link
                    key={i}
                    href={cityUrl}
                    className={`pl-4 text-base ${
                      pathname.includes(cityUrl) ? "text-[#7B1315] font-bold" : "text-stone-600 active:text-[#7B1315]"
                    }`}
                  >
                    {city}
                  </Link>
                );
              })}
            </div>
          </div>

          <Link
            href="/contact-us"
            className={`text-xl font-bold pb-2 border-b border-stone-100 ${
              pathname === "/contact-us" ? "text-[#7B1315]" : "text-stone-800"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Action Area */}
        <div className="mt-auto pb-12 flex flex-col gap-4">
          <Link href="/contact-us">
            <button className="w-full bg-[#7B1315] text-white py-4 rounded-xl font-headline font-bold text-lg shadow-lg active:scale-95 transition-transform">
              Request Demo
            </button>
          </Link>
          <p className="text-center text-sm text-stone-500 font-medium">Need immediate assistance?</p>
          <Link
            href="#"
            className="w-full bg-[#25D366] text-white py-4 rounded-xl font-headline font-bold text-lg shadow-lg flex justify-center items-center gap-2 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined">chat</span> WhatsApp Expert
          </Link>
        </div>
      </div>
    </>
  );
}
