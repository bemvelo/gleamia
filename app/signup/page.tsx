"use client";

import { useState } from "react";
import { auth } from "@/src/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="p-10 flex flex-col gap-4 max-w-sm mx-auto">
      <h1 className="text-xl font-bold">Sign Up</h1>
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
      <button onClick={signup} className="bg-blue-600 text-white p-2">
        Sign Up
      </button>
    </div>
  );
}
