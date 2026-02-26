"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "@components/NavBar";
import { auth } from "@src/lib/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#e6e6fa] text-black">
      <NavBar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-6">Welcome to GLEAMIA</h1>
        <p className="mb-6">Shop accessories with style and simplicity.</p>
        <div className="flex gap-6 mb-10">
          <Link href="/products">
            <button className="button-pink">Shop Now</button>
          </Link>
        </div>
      </div>

      {/* Login / Signup Section */}
      <div className="flex flex-col gap-4 max-w-sm mx-auto section-male p-6 rounded">
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />

        <Link href="/products">
          <button onClick={login} className="bg-green-600 text-white p-2 rounded">
            Login
          </button>
        </Link>

        <button onClick={signup} className="bg-blue-600 text-white p-2 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
}
