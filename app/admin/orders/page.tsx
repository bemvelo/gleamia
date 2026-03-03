"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "@/src/lib/firebase";

type Order = {
  id: string;
  products: { name: string; quantity: number; price: number }[];
  total: number;
  status: "Pending" | "Shipped" | "Completed";
  userEmail: string;
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const snapshot = await getDocs(collection(db, "orders"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Order, "id">),
      }));
      setOrders(data);
    };
    fetchOrders();
  }, []);

  const updateStatus = async (orderId: string, newStatus: Order["status"]) => {
    try {
      await updateDoc(doc(db, "orders", orderId), { status: newStatus });
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
      );
    } catch (error) {
      alert("Error updating order status: " + error);
    }
  };

  return (
    <div className="min-h-screen bg-[#e6e6fa] text-black p-6">
      <h1 className="text-3xl font-bold mb-8">Manage Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-6 rounded shadow"
            >
              <h2 className="text-xl font-semibold mb-2">
                Order #{order.id} — {order.userEmail}
              </h2>
              <p className="mb-2 font-medium">Status: {order.status}</p>

              <ul className="mb-4">
                {order.products.map((p, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{p.name} x {p.quantity}</span>
                    <span>${p.price * p.quantity}</span>
                  </li>
                ))}
              </ul>

              <p className="font-bold mb-4">Total: ${order.total}</p>

              <div className="flex gap-2">
                {order.status === "Pending" && (
                  <button
                    onClick={() => updateStatus(order.id, "Shipped")}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Mark as Shipped
                  </button>
                )}
                {order.status !== "Completed" && (
                  <button
                    onClick={() => updateStatus(order.id, "Completed")}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Complete Order
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}