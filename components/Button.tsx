"use client";

export default function Button({ children, onClick, type = "button", variant = "pink" }: 
  { children: React.ReactNode; onClick?: () => void; type?: "button" | "submit"; variant?: "pink" | "gray" }) {
  
  const styles = variant === "pink"
    ? "bg-pink-600 text-white px-4 py-2 rounded"
    : "bg-gray-600 text-white px-4 py-2 rounded";

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
