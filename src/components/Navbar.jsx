import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { getCartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/95 px-4 py-4 text-white backdrop-blur-md sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500 font-bold text-gray-950">
            M
          </div>

          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
            My<span className="text-green-400">Store</span>
          </h1>
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className="group flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-900 px-4 py-2.5 font-semibold text-gray-100 transition-all duration-200 hover:border-green-500 hover:bg-gray-800 active:scale-95"
        >
          {/* Cart Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5 transition-colors group-hover:text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.61 6.75m0 0h14.64c.657 0 1.14.618.98 1.255l-1.5 6A1.125 1.125 0 0118.638 15H7.125a1.125 1.125 0 01-1.091-.853L3.636 3.835A1.125 1.125 0 012.727 3H2.25m3.36 3.75l1.515 6.063A1.125 1.125 0 008.216 13.5h9.568a1.125 1.125 0 001.091-.853l1.515-6.063M9 19.125a.375.375 0 11-.75 0 .375.375 0 01.75 0zm9.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>

          <span>Cart</span>

          {/* Cart Count */}
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-green-500 px-1.5 text-xs font-bold text-gray-950">
            {getCartCount()}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
