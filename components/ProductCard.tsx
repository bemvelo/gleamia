"use client";

export default function ProductCard({ product }: { product: any }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  return (
    <div className="section-male p-4 rounded">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button onClick={addToCart} className="button-pink mt-2">
        Add to Cart
      </button>
    </div>
  );
}
