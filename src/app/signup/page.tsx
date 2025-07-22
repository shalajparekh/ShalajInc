"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      router.push("/");
    } else {
      setError(data.error || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <form className="bg-white rounded-xl shadow p-8 max-w-md w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-green-800 mb-4 text-center">Sign Up</h1>
        {error && <div className="text-red-600 text-center mb-2">{error}</div>}
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="px-4 py-3 rounded border border-gray-300 focus:border-green-500 outline-none"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          className="px-4 py-3 rounded border border-gray-300 focus:border-green-500 outline-none"
          value={form.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="mt-2 px-6 py-3 rounded-full bg-green-700 text-white font-bold shadow hover:bg-green-800 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
} 