"use client";

import Image from "next/image";
import Link from "next/link";

export default function SalonSample() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-pink-50 to-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-20 bg-white/90 shadow backdrop-blur flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          <span className="font-bold text-xl text-pink-700 tracking-tight">Cursorself Web</span>
        </div>
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-pink-600 transition">Home</Link>
        </div>
        <a href="mailto:hello@cursorselfweb.com" className="ml-4 px-5 py-2 rounded-full bg-pink-600 text-white font-semibold shadow hover:bg-pink-700 transition">Contact Us</a>
      </nav>
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 bg-[url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center">
        <div className="bg-white/80 rounded-xl p-8 md:p-16 shadow-lg max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-800 mb-4 leading-tight drop-shadow-lg">Glamour Salon</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">A modern salon website sample by Cursorself Web. Style, beauty, and technology in perfect harmony!</p>
          <a href="#services" className="inline-block px-8 py-3 rounded-full bg-pink-700 text-white font-bold text-lg shadow-lg hover:bg-pink-800 transition">View Services</a>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full flex justify-center bg-white py-8">
        <video controls className="w-full max-w-3xl rounded-xl shadow-lg">
          <source src="/Salon.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-pink-800 mb-10">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-pink-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">💇‍♀️</span>
            <h3 className="font-semibold text-xl mb-2">Haircut & Styling</h3>
            <p className="text-gray-600 text-center">Trendy haircuts, professional styling, and personalized looks for all.</p>
            <span className="mt-2 text-pink-700 font-bold">₹500</span>
          </div>
          <div className="bg-pink-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">💅</span>
            <h3 className="font-semibold text-xl mb-2">Nail Art & Care</h3>
            <p className="text-gray-600 text-center">Creative nail art, manicures, and pedicures for a polished look.</p>
            <span className="mt-2 text-pink-700 font-bold">₹700</span>
          </div>
          <div className="bg-pink-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">💆‍♂️</span>
            <h3 className="font-semibold text-xl mb-2">Spa & Relaxation</h3>
            <p className="text-gray-600 text-center">Rejuvenating facials, massages, and spa therapies for total relaxation.</p>
            <span className="mt-2 text-pink-700 font-bold">₹1200</span>
          </div>
          <div className="bg-pink-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">💄</span>
            <h3 className="font-semibold text-xl mb-2">Makeup & Bridal</h3>
            <p className="text-gray-600 text-center">Professional makeup for all occasions, including bridal packages.</p>
            <span className="mt-2 text-pink-700 font-bold">₹2500</span>
          </div>
          <div className="bg-pink-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">🧖‍♀️</span>
            <h3 className="font-semibold text-xl mb-2">Skin Treatments</h3>
            <p className="text-gray-600 text-center">Advanced facials, peels, and skin rejuvenation therapies.</p>
            <span className="mt-2 text-pink-700 font-bold">₹1800</span>
          </div>
          <div className="bg-pink-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">🧴</span>
            <h3 className="font-semibold text-xl mb-2">Hair Spa & Care</h3>
            <p className="text-gray-600 text-center">Nourishing hair spa, oil massage, and scalp treatments.</p>
            <span className="mt-2 text-pink-700 font-bold">₹900</span>
          </div>
          <div className="bg-pink-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">🧔</span>
            <h3 className="font-semibold text-xl mb-2">Men’s Grooming</h3>
            <p className="text-gray-600 text-center">Beard styling, shaving, and men’s facials.</p>
            <span className="mt-2 text-pink-700 font-bold">₹600</span>
          </div>
          <div className="bg-pink-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">👣</span>
            <h3 className="font-semibold text-xl mb-2">Foot Spa & Reflexology</h3>
            <p className="text-gray-600 text-center">Relaxing foot spa and reflexology sessions.</p>
            <span className="mt-2 text-pink-700 font-bold">₹800</span>
          </div>
          <div className="bg-pink-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">🧘‍♀️</span>
            <h3 className="font-semibold text-xl mb-2">Wellness Packages</h3>
            <p className="text-gray-600 text-center">Custom wellness packages for complete rejuvenation.</p>
            <span className="mt-2 text-pink-700 font-bold">₹3500</span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-pink-50">
        <h2 className="text-3xl font-bold text-center text-pink-800 mb-10">Gallery</h2>
        <div className="flex flex-wrap gap-6 justify-center max-w-4xl mx-auto">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Salon 1" className="rounded-lg shadow w-48 h-32 object-cover" />
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Salon 2" className="rounded-lg shadow w-48 h-32 object-cover" />
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Salon 3" className="rounded-lg shadow w-48 h-32 object-cover" />
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-pink-800 mb-10">What Our Customers Say</h2>
        <div className="relative max-w-6xl mx-auto">
          <button
            type="button"
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-full p-2 shadow"
            onClick={() => {
              const el = document.getElementById('reviews-scroll-salon');
              if (el) el.scrollBy({ left: -350, behavior: 'smooth' });
            }}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div
            id="reviews-scroll-salon"
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
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
              <div key={i} className="bg-pink-50 rounded-xl shadow p-6 flex flex-col items-center min-w-[320px] max-w-xs snap-center">
                <img src={review.img} alt={review.name} className="w-16 h-16 rounded-full mb-4 shadow" />
                <p className="text-gray-700 text-center mb-3">“{review.text}”</p>
                <span className="font-semibold text-pink-700">{review.name}</span>
                <span className="text-gray-500 text-sm">{review.role}</span>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-full p-2 shadow"
            onClick={() => {
              const el = document.getElementById('reviews-scroll-salon');
              if (el) el.scrollBy({ left: 350, behavior: 'smooth' });
            }}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-800 mb-6">Contact & Appointments</h2>
          <p className="text-lg text-gray-700 mb-6">Want a website like this for your salon? Contact us for a free consultation!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@cursorselfweb.com" className="inline-block px-8 py-3 rounded-full bg-pink-700 text-white font-bold text-lg shadow-lg hover:bg-pink-800 transition">Email Us</a>
            <a href="tel:18001234567" className="inline-block px-8 py-3 rounded-full bg-pink-500 text-white font-bold text-lg shadow-lg hover:bg-pink-600 transition">Toll Free: 1800-123-4567</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-pink-900 text-white text-center mt-auto">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-2">
          <span>&copy; {new Date().getFullYear()} Glamour Salon. Sample by Cursorself Web.</span>
          <div className="flex gap-4 justify-center">
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener" className="hover:underline">WhatsApp</a>
            <a href="mailto:hello@cursorselfweb.com" className="hover:underline">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 