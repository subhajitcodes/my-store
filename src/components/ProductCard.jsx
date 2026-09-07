import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-2xl">

      {/* Image */}
      <div className="flex h-64 items-center justify-center bg-gray-950 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-5">

        {/* Category */}
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-green-400">
          {product.category}
        </p>

        {/* Title */}
        <h3 className="line-clamp-2 min-h-12 text-lg font-semibold text-gray-100">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-400">
            ★
          </span>

          <span className="text-sm text-gray-400">
            {product.rating?.rate} ({product.rating?.count})
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-auto flex items-center justify-between pt-5">

          <p className="text-2xl font-bold text-white">
            ${product.price.toFixed(2)}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="rounded-xl bg-green-500 px-5 py-2.5 font-semibold text-gray-950 transition-all duration-200 hover:bg-green-400 active:scale-95"
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
