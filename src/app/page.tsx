"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    if (dropdownOpen || mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen, mobileMenuOpen]);

  return (
    <div className="font-sans bg-gradient-to-br from-blue-50 to-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-20 bg-white/90 shadow backdrop-blur flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2">
          <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          <span className="font-bold text-xl text-blue-700 tracking-tight">Shalaj Inc.</span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
          <a href="#about" className="hover:text-blue-600 transition">About Us</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          <div className="relative" ref={dropdownRef}>
            <button
              className="hover:text-blue-600 transition flex items-center gap-1 focus:outline-none"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              type="button"
            >
              App Demos
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-30">
                <Link href="/samples" className="block px-4 py-2 hover:bg-blue-50 text-gray-700" onClick={() => setDropdownOpen(false)}>Restaurant Sample</Link>
                <Link href="/salon" className="block px-4 py-2 hover:bg-blue-50 text-gray-700" onClick={() => setDropdownOpen(false)}>Salon Sample</Link>
                <Link href="/carpenter" className="block px-4 py-2 hover:bg-blue-50 text-gray-700" onClick={() => setDropdownOpen(false)}>Carpenter Sample</Link>
              </div>
            )}
          </div>
          <Link href="/pricing" className="hover:text-blue-600 transition">Pricing</Link>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center px-2 py-1 border rounded text-blue-700 border-blue-700 hover:bg-blue-100 focus:outline-none"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Open mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div ref={mobileMenuRef} className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg flex flex-col items-center py-4 md:hidden z-30 animate-fade-in">
            <Link href="/" className="block px-6 py-2 hover:bg-blue-50 text-gray-700 w-full text-center" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <a href="#about" className="block px-6 py-2 hover:bg-blue-50 text-gray-700 w-full text-center" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#contact" className="block px-6 py-2 hover:bg-blue-50 text-gray-700 w-full text-center" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <button
              className="w-full text-left px-6 py-2 hover:bg-blue-50 font-medium flex items-center gap-2"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              App Demos
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdownOpen && (
              <div className="w-full flex flex-col items-center">
                <Link href="/samples" className="block px-6 py-2 hover:bg-blue-50 text-gray-700 w-full text-center" onClick={() => { setDropdownOpen(false); setMobileMenuOpen(false); }}>Restaurant Sample</Link>
                <Link href="/salon" className="block px-6 py-2 hover:bg-blue-50 text-gray-700 w-full text-center" onClick={() => { setDropdownOpen(false); setMobileMenuOpen(false); }}>Salon Sample</Link>
                <Link href="/carpenter" className="block px-6 py-2 hover:bg-blue-50 text-gray-700 w-full text-center" onClick={() => { setDropdownOpen(false); setMobileMenuOpen(false); }}>Carpenter Sample</Link>
              </div>
            )}
            <Link href="/pricing" className="block px-6 py-2 hover:bg-blue-50 text-gray-700 w-full text-center" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          </div>
        )}
        <div className="flex items-center">
          <a href="#contact" className="ml-4 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition hidden md:inline-block">Let’s Connect</a>
        </div>
      </nav>
      <div className="h-20" /> {/* Spacer for navbar height */}

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 bg-[url('/DC.jpg')] bg-cover bg-center">
        <div className="bg-white/50 rounded-xl p-8 md:p-16 shadow-lg max-w-7xl w-full mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4 leading-tight drop-shadow-lg text-center">Driving Digital Growth for Namma Bengaluru</h1>
          <p className="text-lg md:text-2xl text-gray-900 font-semibold max-w-2xl mb-8 text-center mx-auto">Website Design, Apps, AI/ML, E-commerce, Hosting, and Deep Research — everything you need to thrive in the digital world, tailored for Namma Bengaluru.</p>
          <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-blue-700 text-white font-bold text-lg shadow-lg hover:bg-blue-800 transition text-center">Get a Free Consultation</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Service Card 1 */}
          <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform">
            <span className="text-4xl mb-3">🌐</span>
            <h3 className="font-semibold text-xl mb-2">Websites & Hosting</h3>
            <p className="text-gray-600 text-center">Design, creation, and reliable hosting for stunning, high-converting websites. Full management & admin included.</p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform">
            <span className="text-4xl mb-3">📱</span>
            <h3 className="font-semibold text-xl mb-2">Web & Mobile Apps</h3>
            <p className="text-gray-600 text-center">Custom webapps and mobile apps to power your business, from idea to launch. Seamless user experience guaranteed.</p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform">
            <span className="text-4xl mb-3">🤖</span>
            <h3 className="font-semibold text-xl mb-2">Chatbots & Integrations</h3>
            <p className="text-gray-600 text-center">Major chatbots, WhatsApp, and business tool integrations to automate and delight your customers.</p>
          </div>
          {/* Service Card 4 */}
          <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform">
            <span className="text-4xl mb-3">🛒</span>
            <h3 className="font-semibold text-xl mb-2">E-commerce & Payments</h3>
            <p className="text-gray-600 text-center">Cart, payment gateway, and secure online store solutions for any scale. Start selling online with ease.</p>
          </div>
          {/* Service Card 5 */}
          <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform">
            <span className="text-4xl mb-3">🎙️</span>
            <h3 className="font-semibold text-xl mb-2">AI/ML: Audio, Text, Image, Video</h3>
            <p className="text-gray-600 text-center">Audio-to-text, text-to-audio, text-to-image, text-to-video, reels, podcasts, and more. Unlock creative possibilities with AI.</p>
          </div>
          {/* Service Card 6 */}
          <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform">
            <span className="text-4xl mb-3">📄</span>
            <h3 className="font-semibold text-xl mb-2">Research & Documentation</h3>
            <p className="text-gray-600 text-center">Deep research, PDF documentation, and technical writing to support your business growth and compliance.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-4">We are passionate about helping Bangalore’s local businesses get online, grow, and succeed. With years of experience in web, app, and AI/ML technologies, we deliver solutions that are modern, reliable, and tailored to your needs.</p>
          <p className="text-md text-gray-600">From Koramangala to Whitefield, Indiranagar to Jayanagar — we understand the pulse of Namma Bengaluru and are committed to your digital success.</p>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">What Our Customers Say</h2>
        <div className="relative max-w-6xl mx-auto">
          {/* Scroll Buttons (desktop only) */}
          <button
            type="button"
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full p-2 shadow"
            onClick={() => {
              const el = document.getElementById('reviews-scroll');
              if (el) el.scrollBy({ left: -350, behavior: 'smooth' });
            }}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div
            id="reviews-scroll"
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {/* 9 Reviews */}
            {[
              {
                img: "https://randomuser.me/api/portraits/men/32.jpg",
                text: "Shalaj Inc. built our website and it’s been a game changer for our business. The team is responsive, creative, and truly understands Bangalore’s market.",
                name: "Ravi Kumar",
                role: "Owner, Bangalore Bites",
              },
              {
                img: "https://randomuser.me/api/portraits/women/44.jpg",
                text: "Their AI/ML solutions helped us automate our customer support. Highly recommend for any local business wanting to grow online!",
                name: "Priya S.",
                role: "Manager, TechEase",
              },
              {
                img: "https://randomuser.me/api/portraits/men/65.jpg",
                text: "Professional, fast, and reliable. Our e-commerce sales increased after Shalaj Inc. revamped our site and payment gateway.",
                name: "Anil Mehta",
                role: "Founder, Urban Cart",
              },
              {
                img: "https://randomuser.me/api/portraits/women/68.jpg",
                text: "The chatbot integration was seamless and our customers love it!",
                name: "Meena Rao",
                role: "Owner, Blossom Spa",
              },
              {
                img: "https://randomuser.me/api/portraits/men/77.jpg",
                text: "Great value for money and excellent support throughout the project.",
                name: "Suresh Patil",
                role: "Director, Patil Foods",
              },
              {
                img: "https://randomuser.me/api/portraits/women/12.jpg",
                text: "Our mobile app is beautiful and easy to use. Thank you, Shalaj Inc.!",
                name: "Aarti Jain",
                role: "Co-founder, QuickServe",
              },
              {
                img: "https://randomuser.me/api/portraits/men/23.jpg",
                text: "The research and documentation services were top-notch.",
                name: "Vikram Singh",
                role: "Consultant, BizDocs",
              },
              {
                img: "https://randomuser.me/api/portraits/women/55.jpg",
                text: "We got our site live in record time. Highly recommended!",
                name: "Divya Menon",
                role: "Owner, Menon Boutique",
              },
              {
                img: "https://randomuser.me/api/portraits/men/41.jpg",
                text: "The team is knowledgeable and always available for support.",
                name: "Rajesh Nair",
                role: "Manager, Nair Logistics",
              },
            ].map((review, i) => (
              <div key={i} className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center min-w-[320px] max-w-xs snap-center">
                <img src={review.img} alt={review.name} className="w-16 h-16 rounded-full mb-4 shadow" />
                <p className="text-gray-700 text-center mb-3">“{review.text}”</p>
                <span className="font-semibold text-blue-700">{review.name}</span>
                <span className="text-gray-500 text-sm">{review.role}</span>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full p-2 shadow"
            onClick={() => {
              const el = document.getElementById('reviews-scroll');
              if (el) el.scrollBy({ left: 350, behavior: 'smooth' });
            }}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Let’s Get Started</h2>
          <p className="text-lg text-gray-700 mb-6">Ready to take your business online or supercharge your digital presence? Reach out for a free consultation!</p>
          <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); alert('Thank you! We will contact you soon.'); }}>
            <input type="text" required placeholder="Your Name" className="px-4 py-3 rounded border border-gray-300 focus:border-blue-500 outline-none" />
            <input type="email" required placeholder="Your Email" className="px-4 py-3 rounded border border-gray-300 focus:border-blue-500 outline-none" />
            <textarea required placeholder="How can we help you?" className="px-4 py-3 rounded border border-gray-300 focus:border-blue-500 outline-none" rows={4} />
            <button type="submit" className="mt-2 px-6 py-3 rounded-full bg-blue-700 text-white font-bold shadow hover:bg-blue-800 transition">Send Message</button>
          </form>
          <div className="mt-6 text-gray-600">
            Or email us at <a href="mailto:shalaj.parekh@gmail.com" className="text-blue-700 underline">shalaj.parekh@gmail.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-blue-900 text-white text-center mt-auto w-full text-lg">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4">
          <span>&copy; {new Date().getFullYear()} Shalaj Inc. All rights reserved.</span>
          <div className="flex gap-4 justify-center mt-2 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener" className="hover:text-blue-400 transition" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-pink-400 transition" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406 2.697 2.387 2.403 3.499 2.344 4.78 2.285 6.06 2.272 6.469 2.272 12c0 5.531.013 5.94.072 7.22.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334 1.28.059 1.689.072 7.22.072s5.94-.013 7.22-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-7.22s-.013-5.94-.072-7.22c-.059-1.281-.353-2.393-1.334-3.374C21.393.425 20.281.131 19 .072 17.719.013 17.31 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" className="hover:text-blue-300 transition" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="hover:text-blue-500 transition" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener" className="hover:text-green-400 transition" aria-label="WhatsApp">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.26-1.64A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.72.98.99-3.62-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
            </a>
            <a href="mailto:hello@cursorselfweb.com" className="hover:text-red-400 transition" aria-label="Email">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.99v15.925c0 .553.447 1 1 1h21.98c.553 0 1-.447 1-1V5.075l-11.99 7.99zm11.99-9.065c0-.553-.447-1-1-1H1.01c-.553 0-1 .447-1 1v.217l12 8 12-8V4z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
