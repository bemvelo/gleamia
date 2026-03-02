"use client";

import { useState } from "react";
import { auth } from "@/src/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function ProfilePage() {
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

  return (
    <div className="min-h-screen bg-[#e6e6fa] text-black p-6">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="flex flex-col gap-4 max-w-sm mx-auto section-male p-6 rounded">
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
        <button
          onClick={login}
          className="bg-green-600 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
