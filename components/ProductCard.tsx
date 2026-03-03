"use client";

type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
  category?: string;
};

type ProductCardProps = {
  product: Product;
  quantity?: number;
  onAdd?: () => void;
  onRemove?: () => void;
};

export default function ProductCard({
  product,
  quantity = 0,
  onAdd,
  onRemove,
}: ProductCardProps) {
  // when parent provides handlers (e.g. cart page) use them – otherwise this is a passive card

  const hasControls = onAdd || onRemove;

  return (
    <div className="section-male p-4 rounded border">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>

      {/* quantity / add/remove controls (optional) */}
      {hasControls && (
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={onRemove}
            disabled={quantity <= 0}
            className="button-pink px-2 py-1 disabled:opacity-50"
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={onAdd} className="button-pink px-2 py-1">
            +
          </button>
        </div>
      )}

      {/* if no handlers are supplied, don't render any controls */}
      {!hasControls && null}
    </div>
  );
}
