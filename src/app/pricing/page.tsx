"use client";

import Link from "next/link";
import { useState } from "react";

const SERVICES = [
  {
    id: "websites",
    icon: "🌐",
    name: "Websites & Hosting",
    desc: "Design, creation, and reliable hosting for stunning, high-converting websites.",
    price: 15000,
  },
  {
    id: "apps",
    icon: "📱",
    name: "Web & Mobile Apps",
    desc: "Custom webapps and mobile apps to power your business, from idea to launch.",
    price: 40000,
  },
  {
    id: "chatbots",
    icon: "🤖",
    name: "Chatbots & Integrations",
    desc: "Major chatbots, WhatsApp, and business tool integrations to automate and delight your customers.",
    price: 10000,
  },
  {
    id: "ecommerce",
    icon: "🛒",
    name: "E-commerce & Payments",
    desc: "Cart, payment gateway, and secure online store solutions for any scale.",
    price: 25000,
  },
  {
    id: "ai",
    icon: "🎙️",
    name: "AI/ML: Audio, Text, Image, Video",
    desc: "Audio-to-text, text-to-audio, text-to-image, text-to-video, reels, podcasts, and more.",
    price: 8000,
  },
  {
    id: "research",
    icon: "📄",
    name: "Research & Documentation",
    desc: "Deep research, PDF documentation, and technical writing to support your business growth and compliance.",
    price: 5000,
  },
];

export default function Pricing() {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (id: string) => {
    setCart((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item !== id));
  };
  const total = cart.reduce((sum, id) => sum + (SERVICES.find((s) => s.id === id)?.price || 0), 0);

  const handleCheckout = () => {
    // Save cart to localStorage for checkout page
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    window.location.href = "/checkout";
  };

  return (
    <div className="min-h-screen bg-orange-50 py-20 px-4 flex flex-col items-center">
      <div className="w-full flex justify-center mb-8 max-w-6xl mx-auto">
        <Link href="/" className="inline-block px-4 py-2 rounded bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition">Home</Link>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 text-center">Our Pricing</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-2xl">Transparent, affordable pricing for all your digital needs. All prices are in INR and include end-to-end service and support.</p>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl w-full mx-auto mb-12">
        {SERVICES.map((service) => (
          <div key={service.id} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-3">{service.icon}</span>
            <h3 className="font-semibold text-xl mb-2">{service.name}</h3>
            <p className="text-gray-600 text-center mb-2">{service.desc}</p>
            <span className="text-2xl font-bold text-blue-700 mb-4">₹{service.price.toLocaleString()}</span>
            {cart.includes(service.id) ? (
              <button onClick={() => removeFromCart(service.id)} className="px-4 py-2 rounded bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition">Remove</button>
            ) : (
              <button onClick={() => addToCart(service.id)} className="px-4 py-2 rounded bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition">Add to Cart</button>
            )}
          </div>
        ))}
      </div>
      {/* Cart Summary */}
      <div className="w-full max-w-2xl bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">No services selected.</p>
        ) : (
          <ul className="mb-4">
            {cart.map((id) => {
              const s = SERVICES.find((s) => s.id === id);
              return s ? (
                <li key={id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                  <span>{s.name}</span>
                  <span className="font-semibold text-blue-700">₹{s.price.toLocaleString()}</span>
                </li>
              ) : null;
            })}
          </ul>
        )}
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-lg">Total</span>
          <span className="font-bold text-2xl text-blue-800">₹{total.toLocaleString()}</span>
        </div>
        <button
          className="mt-6 w-full px-6 py-3 rounded-full bg-green-600 text-white font-bold text-lg shadow hover:bg-green-700 transition disabled:opacity-50"
          disabled={cart.length === 0}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
} 