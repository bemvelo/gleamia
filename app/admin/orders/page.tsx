"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/src/lib/firebase";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const snapshot = await getDocs(collection(db, "orders"));
      setOrders(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Orders</h1>
      <ul>
        {orders.map((o) => (
          <li key={o.id} className="border p-4 mb-2 rounded">
            Order #{o.id} — Status: {o.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
