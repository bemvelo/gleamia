"use client";

import { useState } from "react";
import { auth, db } from "@/src/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      // 1️⃣ Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // 2️⃣ Determine role
      const role = email === "admin@gleamia.com" ? "admin" : "user";

      // 3️⃣ Save user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email,
        role,
        createdAt: new Date(),
      });

      alert("Account created successfully!");

      // 4️⃣ Redirect based on role
      if (role === "admin") {
        router.push("/admin");
      } else {
        router.push("/products");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="p-10 flex flex-col gap-4 max-w-sm mx-auto">
      <h1 className="text-xl font-bold">Sign Up</h1>

      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        onClick={signup}
        className="bg-blue-600 text-white p-2 rounded"
      >
        Sign Up
      </button>
    </div>
  );
}