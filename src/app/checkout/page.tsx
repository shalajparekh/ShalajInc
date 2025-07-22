"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SERVICES = [
  { id: "websites", name: "Websites & Hosting", price: 15000 },
  { id: "apps", name: "Web & Mobile Apps", price: 40000 },
  { id: "chatbots", name: "Chatbots & Integrations", price: 10000 },
  { id: "ecommerce", name: "E-commerce & Payments", price: 25000 },
  { id: "ai", name: "AI/ML: Audio, Text, Image, Video", price: 8000 },
  { id: "research", name: "Research & Documentation", price: 5000 },
];

export default function Checkout() {
  const [cart, setCart] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) setCart(JSON.parse(stored));
    }
  }, []);

  const total = cart.reduce((sum, id) => sum + (SERVICES.find((s) => s.id === id)?.price || 0), 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send data to API
    await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, cart, total }),
    });
    setSuccess(true);
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 py-20 px-4 flex flex-col items-center">
      <div className="w-full flex justify-center mb-8 max-w-2xl mx-auto">
        <Link href="/pricing" className="inline-block px-4 py-2 rounded bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition">Back to Pricing</Link>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 text-center">Checkout</h1>
      {success ? (
        <div className="bg-white rounded-xl shadow p-8 max-w-xl w-full text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Thank you for your order!</h2>
          <p className="text-gray-700 mb-2">We have received your details and will contact you soon.</p>
          <Link href="/" className="text-blue-700 underline">Go to Home</Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow p-8 max-w-xl w-full">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600 mb-4">No services selected. <Link href="/pricing" className="text-blue-700 underline">Go to Pricing</Link></p>
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
          <div className="flex justify-between items-center mt-4 mb-8">
            <span className="font-bold text-lg">Total</span>
            <span className="font-bold text-2xl text-blue-800">₹{total.toLocaleString()}</span>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="px-4 py-3 rounded border border-gray-300 focus:border-blue-500 outline-none"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="px-4 py-3 rounded border border-gray-300 focus:border-blue-500 outline-none"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Your Phone"
              className="px-4 py-3 rounded border border-gray-300 focus:border-blue-500 outline-none"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              required
              placeholder="Company Name"
              className="px-4 py-3 rounded border border-gray-300 focus:border-blue-500 outline-none"
              value={form.company}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-full bg-green-600 text-white font-bold shadow hover:bg-green-700 transition"
              disabled={cart.length === 0}
            >
              Place Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
} 