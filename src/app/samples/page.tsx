"use client";

import Image from "next/image";
import Link from "next/link";

export default function RestaurantSample() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-yellow-50 to-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-20 bg-white/90 shadow backdrop-blur flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          <span className="font-bold text-xl text-yellow-700 tracking-tight">Cursorself Web</span>
        </div>
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-yellow-600 transition">Home</Link>
        </div>
        <a href="mailto:hello@cursorselfweb.com" className="ml-4 px-5 py-2 rounded-full bg-yellow-600 text-white font-semibold shadow hover:bg-yellow-700 transition">Contact Us</a>
      </nav>
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center">
        <div className="bg-white/80 rounded-xl p-8 md:p-16 shadow-lg max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-800 mb-4 leading-tight drop-shadow-lg">Taste of Bangalore</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">A modern restaurant website sample by Cursorself Web. Experience the flavor of great design and technology!</p>
          <a href="#menu" className="inline-block px-8 py-3 rounded-full bg-yellow-700 text-white font-bold text-lg shadow-lg hover:bg-yellow-800 transition">View Menu</a>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full flex justify-center bg-white py-8">
        <video controls className="w-full max-w-3xl rounded-xl shadow-lg">
          <source src="/restaurant.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-yellow-800 mb-10">Our Menu</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-yellow-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">🍛</span>
            <h3 className="font-semibold text-xl mb-2">South Indian Thali</h3>
            <p className="text-gray-600 text-center">A wholesome platter with rice, sambar, rasam, veggies, and more.</p>
            <span className="mt-2 text-yellow-700 font-bold">₹250</span>
          </div>
          <div className="bg-yellow-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">🍕</span>
            <h3 className="font-semibold text-xl mb-2">Wood-fired Pizza</h3>
            <p className="text-gray-600 text-center">Crispy, cheesy, and topped with fresh ingredients.</p>
            <span className="mt-2 text-yellow-700 font-bold">₹400</span>
          </div>
          <div className="bg-yellow-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">🥗</span>
            <h3 className="font-semibold text-xl mb-2">Garden Fresh Salad</h3>
            <p className="text-gray-600 text-center">A healthy mix of greens, veggies, and house dressing.</p>
            <span className="mt-2 text-yellow-700 font-bold">₹180</span>
          </div>
          <div className="bg-yellow-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">🍔</span>
            <h3 className="font-semibold text-xl mb-2">Classic Burger</h3>
            <p className="text-gray-600 text-center">Juicy grilled patty, fresh veggies, and signature sauce.</p>
            <span className="mt-2 text-yellow-700 font-bold">₹220</span>
          </div>
          <div className="bg-yellow-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">🍝</span>
            <h3 className="font-semibold text-xl mb-2">Pasta Alfredo</h3>
            <p className="text-gray-600 text-center">Creamy Alfredo sauce with perfectly cooked pasta.</p>
            <span className="mt-2 text-yellow-700 font-bold">₹300</span>
          </div>
          <div className="bg-yellow-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">🍣</span>
            <h3 className="font-semibold text-xl mb-2">Sushi Platter</h3>
            <p className="text-gray-600 text-center">Assorted sushi rolls with fresh fish and veggies.</p>
            <span className="mt-2 text-yellow-700 font-bold">₹600</span>
          </div>
          <div className="bg-yellow-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">🍨</span>
            <h3 className="font-semibold text-xl mb-2">Dessert Special</h3>
            <p className="text-gray-600 text-center">Chef’s choice of the day, always a sweet surprise.</p>
            <span className="mt-2 text-yellow-700 font-bold">₹150</span>
          </div>
          <div className="bg-yellow-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">🥤</span>
            <h3 className="font-semibold text-xl mb-2">Fresh Juices</h3>
            <p className="text-gray-600 text-center">Seasonal fruits, freshly squeezed for you.</p>
            <span className="mt-2 text-yellow-700 font-bold">₹90</span>
          </div>
          <div className="bg-yellow-50 rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">🍲</span>
            <h3 className="font-semibold text-xl mb-2">Soup of the Day</h3>
            <p className="text-gray-600 text-center">Ask our staff for today’s special soup.</p>
            <span className="mt-2 text-yellow-700 font-bold">₹120</span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-yellow-50">
        <h2 className="text-3xl font-bold text-center text-yellow-800 mb-10">Gallery</h2>
        <div className="flex flex-wrap gap-6 justify-center max-w-4xl mx-auto">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Dish 1" className="rounded-lg shadow w-48 h-32 object-cover" />
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80" alt="Dish 2" className="rounded-lg shadow w-48 h-32 object-cover" />
          <img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80" alt="Dish 3" className="rounded-lg shadow w-48 h-32 object-cover" />
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-yellow-800 mb-10">What Our Customers Say</h2>
        <div className="relative max-w-6xl mx-auto">
          <button
            type="button"
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 rounded-full p-2 shadow"
            onClick={() => {
              const el = document.getElementById('reviews-scroll-restaurant');
              if (el) el.scrollBy({ left: -350, behavior: 'smooth' });
            }}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div
            id="reviews-scroll-restaurant"
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
              <div key={i} className="bg-yellow-50 rounded-xl shadow p-6 flex flex-col items-center min-w-[320px] max-w-xs snap-center">
                <img src={review.img} alt={review.name} className="w-16 h-16 rounded-full mb-4 shadow" />
                <p className="text-gray-700 text-center mb-3">“{review.text}”</p>
                <span className="font-semibold text-yellow-700">{review.name}</span>
                <span className="text-gray-500 text-sm">{review.role}</span>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 rounded-full p-2 shadow"
            onClick={() => {
              const el = document.getElementById('reviews-scroll-restaurant');
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
          <h2 className="text-3xl font-bold text-yellow-800 mb-6">Contact & Reservations</h2>
          <p className="text-lg text-gray-700 mb-6">Want a website like this for your restaurant? Contact us for a free consultation!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@cursorselfweb.com" className="inline-block px-8 py-3 rounded-full bg-yellow-700 text-white font-bold text-lg shadow-lg hover:bg-yellow-800 transition">Email Us</a>
            <a href="tel:18001234567" className="inline-block px-8 py-3 rounded-full bg-yellow-500 text-white font-bold text-lg shadow-lg hover:bg-yellow-600 transition">Toll Free: 1800-123-4567</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-yellow-900 text-white text-center mt-auto">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-2">
          <span>&copy; {new Date().getFullYear()} Taste of Bangalore. Sample by Cursorself Web.</span>
          <div className="flex gap-4 justify-center">
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener" className="hover:underline">WhatsApp</a>
            <a href="mailto:hello@cursorselfweb.com" className="hover:underline">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 