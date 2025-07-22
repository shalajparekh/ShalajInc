"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}

export default function Report() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoggedIn(!!localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if (!loggedIn) return;
    setLoading(true);
    fetch("/api/report", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.purchases || []);
        setLoading(false);
      });
  }, [loggedIn]);

  // Removed downloadPDF function and all PDFDocument usage since pdfkit is not available in the browser.

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4">
        <div className="bg-white rounded-xl shadow p-8 max-w-md w-full flex flex-col gap-4 text-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Admin Report</h1>
          <p className="mb-4">You must be logged in to view the report.</p>
          <Link href="/login" className="px-4 py-2 rounded bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition">Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-8 text-center">Monthly Purchase Report</h1>
      <div className="w-full max-w-5xl bg-white rounded-xl shadow p-6 mb-8 overflow-x-auto">
        {loading ? (
          <div className="text-center text-gray-600">Loading...</div>
        ) : data.length === 0 ? (
          <div className="text-center text-gray-600">No purchases found for this month.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2">#</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Company</th>
                <th className="p-2">Services</th>
                <th className="p-2">Total (INR)</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((p, i) => (
                <tr key={p._id} className="border-b">
                  <td className="p-2">{i + 1}</td>
                  <td className="p-2">{p.name}</td>
                  <td className="p-2">{p.email}</td>
                  <td className="p-2">{p.phone}</td>
                  <td className="p-2">{p.company}</td>
                  <td className="p-2">{p.cart.join(", ")}</td>
                  <td className="p-2">₹{p.total.toLocaleString()}</td>
                  <td className="p-2">{formatDate(p.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {data.length > 0 && (
        // <button onClick={downloadPDF} className="px-6 py-3 rounded-full bg-green-600 text-white font-bold text-lg shadow hover:bg-green-700 transition">Download PDF</button>
        <div className="text-gray-400 italic">PDF download unavailable</div>
      )}
    </div>
  );
} 