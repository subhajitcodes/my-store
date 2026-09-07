import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  // Empty cart
  if (cart.length === 0) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-gray-950 px-4 text-white">
        <div className="text-center">
          <div className="mb-4 text-6xl">🛒</div>

          <h2 className="text-3xl font-bold">Your Cart is Empty</h2>

          <p className="mt-2 text-gray-400">
            Add some products to your cart to get started.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-xl bg-green-500 px-6 py-3 font-semibold text-gray-950 transition hover:bg-green-400 active:scale-95"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Your Cart</h2>

          <p className="mt-1 text-gray-400">
            {cart.length} {cart.length === 1 ? "product" : "products"}
          </p>
        </div>

        {/* Cart Items */}
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-5 rounded-2xl border border-gray-800 bg-gray-900 p-5 shadow-lg sm:flex-row sm:items-center"
            >
              {/* Image */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-gray-950 p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="min-w-0 flex-1">
                <h3 className="line-clamp-2 font-semibold text-gray-100">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  ${item.price.toFixed(2)} each
                </p>
              </div>

              {/* Quantity */}
              <div>
                <span className="text-sm text-gray-500">Qty</span>

                <p className="font-semibold text-gray-200">{item.quantity}</p>
              </div>

              {/* Item Total */}
              <div className="min-w-24">
                <span className="text-sm text-gray-500">Total</span>

                <p className="font-bold text-green-400">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Remove */}
              <button
                className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500 hover:text-white"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-gray-800 bg-gray-900 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-gray-400">Cart Total</p>

            <h3 className="mt-1 text-3xl font-bold text-green-400">
              ${getCartTotal().toFixed(2)}
            </h3>
          </div>

          <button className="w-full rounded-xl bg-green-500 px-8 py-3 font-bold text-gray-950 transition-colors hover:bg-green-400 sm:w-auto">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
