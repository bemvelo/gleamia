"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
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
    <div className="p-10 flex flex-col gap-4 max-w-sm mx-auto">
      <h1 className="text-xl font-bold">Login</h1>
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
      <button onClick={login} className="bg-green-600 text-white p-2">
        Login
      </button>
    </div>
  );
}
