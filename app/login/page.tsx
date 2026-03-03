"use client";

import { useState } from "react";
import { auth, db } from "@/src/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";

import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      const role = docSnap.exists() ? docSnap.data().role : "user";

      if (role === "admin") {
        router.push("/admin");
      } else {
        router.push("/users/products");
      }
    } catch (error: any) {
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") login();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8dff5] to-[#f0ebf8] flex justify-center items-center p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-md p-8 border border-purple-100">
        <div className="text-center mb-8">
          <p className="text-purple-600 font-semibold text-sm tracking-widest mb-2">WELCOME BACK</p>
          <h1 className="text-3xl font-bold text-black">Login</h1>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <div className="space-y-4 mb-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-black focus:outline-none transition text-black"
            disabled={loading}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-black focus:outline-none transition text-black"
            disabled={loading}
          />\n        </div>

        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-gray-700 mt-6">
          Don't have an account?{" "}
          <Link href="/signup" className="text-black font-semibold hover:underline">
            Sign Up
          </Link>
        </p>

        <p className="text-center text-gray-700 mt-4">
          <Link href="/" className="text-gray-600 hover:text-black transition">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}