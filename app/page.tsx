"use client";

import { useState } from "react";
import { auth } from "@/src/lib/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
     // await signInWithEmailAndPassword(auth, email, password);
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
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to GLEAMIA</h1>

      <div className="flex flex-col gap-4 max-w-sm mx-auto section-male">
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
        <input
          placeholder="Password"
          type="password"
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
