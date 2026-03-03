"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/src/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import NavBar from "@/components/NavBar";

type UserRole = "admin" | "user" | null;

export default function ProfilePage() {
  const router = useRouter();
  const [role, setRole] = useState<UserRole>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = auth.currentUser;

      if (!currentUser) {
        router.push("/login"); // redirect if not logged in
        return;
      }

      setEmail(currentUser.email || "");

      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setRole(data.role);
        } else {
          setRole("user"); // default to user if not in Firestore
        }
      } catch (err: any) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) {
    return <p className="p-10 text-center">Loading profile...</p>;
  }

  return (
    <div className="min-h-screen bg-[#e6e6fa] p-6 text-black">
      <NavBar />
      <h1 className="text-3xl font-bold mb-6">Welcome, {email}</h1>

      {role === "admin" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AdminCard title="Products" link="/admin/products" />
          <AdminCard title="Orders" link="/admin/orders" />
          <AdminCard title="Analytics" link="/admin/analytics" />
          <AdminCard title="Users" link="/admin/users" />
          <AdminCard title="Manage" link="/admin/manage" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UserCard title="Products" link="/products" />
          <UserCard title="Cart" link="/cart" />
          <UserCard title="Checkout" link="/checkout" />
          <UserCard title="Logout" link="/logout" />
        </div>
      )}
    </div>
  );
}

/* =====================
   ADMIN CARD
   ===================== */
function AdminCard({ title, link }: { title: string; link: string }) {
  return (
    <a href={link} className="block p-6 rounded-lg bg-white shadow hover:bg-gray-100">
      <h2 className="text-xl font-bold">{title}</h2>
    </a>
  );
}

/* =====================
   USER CARD
   ===================== */
function UserCard({ title, link }: { title: string; link: string }) {
  return (
    <a href={link} className="block p-6 rounded-lg bg-white shadow hover:bg-gray-100">
      <h2 className="text-xl font-bold">{title}</h2>
    </a>
  );
}